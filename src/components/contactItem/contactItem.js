import classes from './contactItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ContactItem = props => {  
  const {id, name, phone, email, handleClickEdit, handleClickDel} = props;
  return (
    <li className={classes.contactItem}>
      <div className={classes.info}>
         <h2 className={classes.name}>{name}</h2>
        {phone ? <p className={classes.phone}><span>Pone: </span><a href={`tel:${phone}`}>{phone}</a></p> : null}
        {email ? <p className={classes.email}><span>Email: </span><a href={`mailto:${email}`}>{email}</a></p> : null}       
      </div>
      <ul className={classes.nav}>
        <li><button type='button'
            className={classes.edit}
            onClick={()=>handleClickEdit(id)}
          ><FontAwesomeIcon icon={faPenToSquare} /></button></li>
        <li><button type='button' 
            className={classes.delete}
            onClick={()=>handleClickDel(id)}
          ><FontAwesomeIcon icon={faTrashCan} /></button></li>
      </ul>
    </li>
  )
}

export default ContactItem;