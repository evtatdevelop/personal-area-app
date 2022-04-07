import {Component} from 'react'
import classes from './searchContact.module.scss';
import Input from '../input';
import { connect } from 'react-redux';
import WithService from '../hoc';
import { contactsFiltred, filtredClean } from '../../actions';

class SearchContact extends Component {

  filterHandler = value => {
    const cleanData = [...this.props.contacts];
    const filtered = cleanData.filter(item => 
      item.name.toUpperCase().includes(value.toUpperCase())
      || item.phone.toUpperCase().includes(value.toUpperCase())
      || item.email.toUpperCase().includes(value.toUpperCase())
    )
    this.props.contactsFiltred(filtered)
  }

  render(){
    return (
      <div className={classes.searchContact}>
      <Input
        id = 'search'
        type = 'text'
        readonly = {false}
        placeholder = 'Search'
        arialabel = 'Search'
        inputHandler = {this.filterHandler}
        clearData = {this.props.filtredClean}
      />
      </div>
    
    )
  }
}


const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  }
}

const mapDispatchToProps = {
  contactsFiltred,
  filtredClean
}

export default WithService()(connect(mapStateToProps, mapDispatchToProps)(SearchContact));