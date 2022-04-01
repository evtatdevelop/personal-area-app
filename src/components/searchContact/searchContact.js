import classes from './searchContact.module.scss';
import Input from '../input';

const SearchContact = props => {

  return (
    <div className={classes.searchContact}>
    <Input
      id = 'search'
      type = 'text'
      readonly = {false}
      placeholder = 'Search'
      arialabel = 'Search'
      inputHandler = {props.inputHandler}
      clearData = {props.clearData}
    />
    </div>
   
  )
}

export default SearchContact;