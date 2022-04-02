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
  }

  service = new Service();

  componentDidCatch() {
    this.setState({error: true})
  }

  componentDidMount() {
    this.loading();
    this.service.getContacts()
    .then(contacts => {
      this.setState({contacts, filtered: contacts});
      this.noLoading();
    })
  }

  loading = () => this.setState({loading: true})
  noLoading = () => this.setState({loading: false})

  newContact = () => console.log('New contact');

  delContact = id => {
    this.loading();
    this.service.delContact(id)
    .then(result => {
      console.log(result);  
      // TODO: Currently the result is an array of users. In production, this should be a Boolean value that allows the data to be changed in the application or it can be a new array of users.
      const cleanData = [...this.state.contacts];
      const contacts = cleanData.filter(item => item.id !== id)
      this.setState({
        contacts, 
        filtered: contacts,
        currentContact: {},
        delForm: false     
      });

      this.noLoading();
    })
  }

  getContactById = id => this.state.contacts.find(item => item.id === id);
 

  handleClickEdit = id => {
    console.log('Edit', id)
    const currentContact = this.getContactById(id);
    console.log(currentContact);
    this.setState({currentContact}) 
  };
  
  handleClickDel = id => {
    const currentContact = this.getContactById(id);
    this.setState({currentContact, delForm: true})
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
          newContact = {this.newContact}
      />
    </>);
    
    return(
      <div className={classes.contacts}>

        { delForm
          ? <DelContactForm
              contact = {currentContact}
              handlerClick = {this.delContact}   
            />
          : null  
        }

        { loading ? <Spinner/> : content }

      </div>
    )
  }
}