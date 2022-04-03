import classes from './delContactForm.module.scss';
import Button from '../button';

const DelContactForm = props => {
  const {contact: {id, name, phone, email, }, handlerCancel, handlerSubmit} = props;
  return (
    <div className={classes.delContactForm}>
      <form onSubmit={e=>onSubmit(e, ()=>handlerSubmit(id))}>
        <h2 className={classes.name}>{name}</h2>
        <p className={classes.phone}><span>Pone: </span><a href={`tel:${phone}`}>{phone}</a></p>
        <p className={classes.email}><span>Email: </span><a href={`mailto:${email}`}>{email}</a></p>
        <div className={classes.butttons}>
          <Button
              label = "Delete"
              type = "submit"
            />
          <Button
              label = "Cancel"
              type = "button"
              handlerClick={handlerCancel}
            />          
        </div>

      </form>
    </div>
  )
}

const onSubmit = (e, handlerSubmit) => {
  e.target.reset();
  e.preventDefault();
  handlerSubmit();
}

export default DelContactForm;