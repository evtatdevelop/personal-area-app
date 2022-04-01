import {Component} from 'react'
import classes from './contactPage.module.scss';
import ContactList from '../../components/contactList';
import SearchContact from '../../components/searchContact';
export default class ContactPage extends Component {

  state = {
    contacts: [
      {
        id: 1,
        name: 'Evgenii Tatarenko',
        phone: '+79234911612',
        email: 'tatarenkoe@gmail.com',
      },
      {
        id: 2,
        name: 'John Smith',
        phone: '+11236548765',
        email: 'johnsmith@mail.com',
      },
      {
        id: 3,
        name: 'Barbara Santa',
        phone: '+79234911612',
        email: 'barbaras@gcompany.com',
      },
      {
        id: 4,
        name: 'Vicanukam Prasit',
        phone: '+6699911612',
        email: 'VicaPrpsit@gover.th',
      },
    ],
  }

  handleClickEdit = id => console.log('Edit', id);
  handleClickDel = id => console.log('Delete', id);
  newContact = () => console.log('New contact');  
  inputHandler = value => console.log(value);
  clearData = () => console.log('Clear Search');

  render() {
    const {contacts} = this.state;

    return(
      <div className={classes.contacts}>

        <SearchContact
          inputHandler = {this.inputHandler}
          clearData = {this.clearData}
        />

        <ContactList
            contacts = {contacts}
            handleClickEdit = {this.handleClickEdit}
            handleClickDel = {this.handleClickDel}
            newContact = {this.newContact}
        />
      </div>
    )
  }
}