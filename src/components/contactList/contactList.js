import classes from './contactList.module.scss';
import ContactItem from '../contactItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const ContactList = props => {
  const {contacts, handleClickEdit, handleClickDel, newContact} = props;

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

 export default ContactList;
