import {Component} from 'react'
import classes from './contactList.module.scss';
import ContactItem from '../contactItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import WithService from '../hoc';
import { contactsLoaded, addForm, loading } from '../../actions'

class ContactList extends Component {
 
  componentDidMount() {
    const {Service, loading, contactsLoaded} = this.props;
    loading();
    Service.getContacts()
    .then(contacts => {
      contactsLoaded(contacts)
    })
  }
 
  render() {
    const {filtered, addForm} = this.props;

    return (
      <ul className={classes.contactList}>
        <button type="button" 
          className = {classes.addButton}
          onClick = {addForm}
        ><FontAwesomeIcon icon={faCirclePlus} /></button>
        
        {filtered.map(item => 
          <ContactItem
            key = {item.id}
            id = {item.id}
            name = {item.name}
            phone = {item.phone}
            email = {item.email}
          />
        )}
      </ul>
    )    
  }
 }

 const mapStateToProps = (state) => {
   return {
     contacts: state.contacts,
     filtered: state.filtered
   }
 }

 const mapDispatchToProps = {
  contactsLoaded,
  addForm,
  loading
 }

 export default WithService()(connect(mapStateToProps, mapDispatchToProps)(ContactList));
