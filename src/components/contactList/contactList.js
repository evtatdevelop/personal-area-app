import {Component} from 'react'
import classes from './contactList.module.scss';
import ContactItem from '../contactItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import WithService from '../hoc';
import { contactsLoaded, addForm, loadingOn } from '../../actions'

class ContactList extends Component {
 
  componentDidMount() {
    const {Service, loadingOn, contactsLoaded} = this.props;
    loadingOn();
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
            data = {item}
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
  loadingOn
 }

 export default WithService()(connect(mapStateToProps, mapDispatchToProps)(ContactList));
