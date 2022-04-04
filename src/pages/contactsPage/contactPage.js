import React, {Component} from 'react'
import classes from './contactPage.module.scss';
import ContactList from '../../components/contactList';
import SearchContact from '../../components/searchContact';
import Service from '../../services';
import Spinner from '../../components/spinner';
import Error from '../../components/Error';
import DelContactForm from '../../components/delContactForm';
import AddContactForm from '../../components/addContactForm';
import EditContactForm from '../../components/editContactForm';
export default class ContactPage extends Component {

  state = {
    contacts: [],
    loading: false,
    error: false,
    filtered: [],
    currentContact: {},
    delForm: false,
    addForm: false,
    editForm: false,
  }

  service = new Service();

  componentDidCatch() {
    this.setState({error: true})
  }

  componentDidMount() {
    this.getContacts();
  }

  loading = () => this.setState({loading: true})
  noLoading = () => this.setState({loading: false})
  getContactById = id => this.state.contacts.find(item => item.id === id);
  clearForms = () => this.setState({currentContact: {}, delForm: false, editForm: false, addForm: false, });
  clearFilter = () => {this.setState({filtered: this.state.contacts})}

  getContacts = () => {
    this.loading();
    this.service.getContacts()
    .then(contacts => {
      this.setState({contacts, filtered: contacts});
      this.noLoading();
    })
  }

  delContact = (id) => {
    this.loading();
    this.clearForms();
    this.service.delContact(id) // TODO: Currently, the delete result on the server is fake.
    .then(() => { 
      // ? The state is renewed to simulate real work. In production, the getContacts function must be executed.
      const cleanData = [...this.state.contacts];
      const contacts = cleanData.filter(item => item.id !== id)
      this.setState({contacts, filtered: contacts});
      this.noLoading();
      // ?
    })
  } 

  addContact = dataContact => {
    this.loading();
    this.clearForms();
    this.service.addContact(dataContact)  // TODO: Currently, the post contact on the server is fake.
    .then(contact => {
      // ? The state is renewed to simulate real work. In production, the getContacts function must be executed.
        contact.id = Date.now().toString(32);
        const contacts = [...this.state.contacts];
        contacts.unshift(contact)
        this.setState({contacts, filtered: contacts});
        this.noLoading();
      // ?
    })
  }

  updateContact = dataContact => {
    this.loading();
    this.clearForms();
    if (isNaN(dataContact.id)) {
      // ! This is a demo code to update added contacts without requesting the server.
      const cleanData = [...this.state.contacts];
      const contacts = cleanData.map(item => {
        if (item.id !== dataContact.id) return item;
        return dataContact;
      })
      this.setState({contacts, filtered: contacts});
      this.noLoading();
      // !
    } else {     
      // Working code
      this.service.updateContact(dataContact)  // TODO: Currently, the update contact on the server is fake.
        .then(contact => {
          // ? The state is renewed to simulate real work. In production, the getContacts function must be executed.
            const cleanData = [...this.state.contacts];
            const contacts = cleanData.map(item => {
              if (item.id !== contact.id) return item;
              return contact;
            })
            this.setState({contacts, filtered: contacts});
            this.noLoading();
          // ?
        })     
      //   
    }
  }

  handleClickAdd = () => {
    this.setState({addForm: true});
  };

  handleClickEdit = id => {
    const currentContact = this.getContactById(id);
    this.setState({currentContact, editForm: true});
  };
  
  handleClickDel = id => {
    const currentContact = this.getContactById(id);
    this.setState({currentContact, delForm: true});
  }

  filterHandler = value => {
    const cleanData = [...this.state.contacts];
    const filtered = cleanData.filter(item => 
      item.name.toUpperCase().includes(value.toUpperCase())
      || item.phone.toUpperCase().includes(value.toUpperCase())
      || item.email.toUpperCase().includes(value.toUpperCase())
    )
    this.setState({filtered})
  }
  

  render() {
    const {filtered, loading, error, currentContact, delForm, addForm, editForm} = this.state;

    if (error) return <Error/>;

    const search = (
      <SearchContact
        inputHandler = {this.filterHandler}
        clearData = {this.clearFilter}
      />
    );
    const contacts = (  
      <ContactList
          contacts = {filtered}
          handleClickEdit = {this.handleClickEdit}
          handleClickDel = {this.handleClickDel}
          newContact = {this.handleClickAdd}
      />
    );
    
    return(
      <div className={classes.contacts}>

        { delForm
          ? <DelContactForm
              contact = {currentContact}
              handlerSubmit = {this.delContact}  
              handlerCancel = {this.clearForms}   
            />
          : null
        }

        { addForm
          ? <AddContactForm
              handlerSubmit = {this.addContact}  
              handlerCancel = {this.clearForms}   
            />
          : null
        }

        { editForm
          ? <EditContactForm
              contact = {currentContact}
              handlerSubmit = {this.updateContact}  
              handlerCancel = {this.clearForms}   
            />
          : null
        }

        { loading ? <Spinner/> : search }

        {contacts}

      </div>
    )
  }
}