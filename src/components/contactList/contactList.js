import {Component} from 'react'
import classes from './contactList.module.scss';
import ContactItem from '../contactItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import WithService from '../hoc';
import { contactsLoaded } from '../../actions'


class ContactList extends Component {
 
  componentDidMount() {
    const {Service} = this.props;
    Service.getContacts()
    .then(contacts => {
      this.props.contactsLoaded(contacts)
    })
  }
 
  render() {
    const {contacts, handleClickEdit, handleClickDel, newContact} = this.props;

    return (
      <ul className={classes.contactList}>
        <button type="button" 
          className = {classes.addButton}
          onClick = {newContact}
        ><FontAwesomeIcon icon={faCirclePlus} /></button>
        {contacts.map(item => 
          <ContactItem
            key = {item.id}
            id = {item.id}
            name = {item.name}
            phone = {item.phone}
            email = {item.email}
            handleClickEdit = {handleClickEdit}
            handleClickDel = {handleClickDel}
          />
        )}
      </ul>
    )    
  }
 }

 const mapStateToProps = (state) => {
   return {
     contacts: state.contacts
   }
 }

//  const mapDispatchToProps = (dispatch) => {
//    return {
//     contactsLoaded: (contacts) => {
//       dispatch(contactsLoaded(contacts))
//     }
//    }
//  }
 const mapDispatchToProps = {
  contactsLoaded
 }

 export default WithService()(connect(mapStateToProps, mapDispatchToProps)(ContactList));
