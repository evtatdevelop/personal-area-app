import classes from './delContactForm.module.scss';
import Button from '../button';

const DelContactForm = props => {
  const {contact: {id, name, phone, email, }, handlerClick} = props;
  return (
    <div className={classes.delContactForm}>     
      <form>
        <h2 className={classes.name}>{name}</h2>
        <p className={classes.phone}><span>Pone: </span><a href={`tel:${phone}`}>{phone}</a></p>
        <p className={classes.email}><span>Email: </span><a href={`mailto:${email}`}>{email}</a></p>
        <Button
            id = {id}
            label = "Delete"
            type = "button"
            handlerClick={()=>handlerClick(id)}
          />
      </form>
    </div>
      

  )
}

export default DelContactForm;