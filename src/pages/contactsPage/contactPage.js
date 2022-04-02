import {Component} from 'react'
import classes from './contactPage.module.scss';
import ContactList from '../../components/contactList';
import SearchContact from '../../components/searchContact';
import Service from '../../services';
import Spinner from '../../components/spinner';
import Error from '../../components/Error';
import DelContactForm from '../../components/delContactForm';
export default class ContactPage extends Component {

  state = {
    contacts: [],
    loading: false,
    error: false,
    filtered: [],
    currentContact: {},
    delForm: false,
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
  clearForms = () => this.setState({currentContact: {}, delForm: false, editForm: false, });

  getContacts = () => {
    this.loading();
    this.service.getContacts()
    .then(contacts => {
      this.setState({contacts, filtered: contacts});
      this.noLoading();
    })
  }

  delContact = id => {
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
        contact.id = this.state.contacts.length + 1;
        const contacts = [...this.state.contacts];
        contacts.push(contact)
        this.setState({contacts, filtered: contacts});
        this.noLoading();
      // ?
    })
  }

  updateContact = dataContact => {
    this.loading();
    this.clearForms();
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
  }

    // this.addContact({
    //   name: 'Evgenii Tatarenko',
    //   phone: '+792349111612',
    //   email: 'tatarenkoe@gmali.com',
    // })

    // this.updateContact({
    //   id: 3,
    //   name: 'Barbara Santa',
    //   phone: '+6699349111612',
    //   email: 'tester@test.tst',
    // })

  // TODO: Edit / Add form

  handleClickAdd = () => {
    this.setState({editForm: true});
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
  clearFilter = () => this.setState({filtered: this.state.contacts});


  render() {
    const {filtered, loading, error, currentContact, delForm} = this.state;

    if (error) return <Error/>;

    const content = (<>
      <SearchContact
        inputHandler = {this.filterHandler}
        clearData = {this.clearFilter}
      />
      <ContactList
          contacts = {filtered}
          handleClickEdit = {this.handleClickEdit}
          handleClickDel = {this.handleClickDel}
          newContact = {this.handleClickAdd}
      />
    </>);
    
    return(
      <div className={classes.contacts}>

        { delForm
          ? <DelContactForm
              contact = {currentContact}
              handlerClick = {this.delContact}   
            />
          : null }

        { loading ? <Spinner/> : content }

      </div>
    )
  }
}