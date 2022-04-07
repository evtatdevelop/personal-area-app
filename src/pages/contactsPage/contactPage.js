import React, {Component} from 'react'
import classes from './contactPage.module.scss';
import ContactList from '../../components/contactList';
import SearchContact from '../../components/searchContact';
import Spinner from '../../components/spinner';
import DelContactForm from '../../components/delContactForm';
import AddContactForm from '../../components/addContactForm';
import EditContactForm from '../../components/editContactForm';
import { connect } from 'react-redux';

class ContactPage extends Component {

  render() {
    const {delForm, addForm, editForm, loading} = this.props;
      
    return(
      <div className={classes.contacts}>

        { delForm ? <DelContactForm/> : null }

        { editForm ? <EditContactForm/> : null }

        { addForm ? <AddContactForm/> : null }

        { loading ? <Spinner/> : null }
        { loading ? <div style={{height: "55px"}}></div> : <SearchContact/> }

        <ContactList />

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    delForm: state.delForm,
    editForm: state.editForm,
    addForm: state.addForm,
    loading: state.loading
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);