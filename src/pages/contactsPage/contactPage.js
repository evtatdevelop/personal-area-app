import React, {Component} from 'react'
import classes from './contactPage.module.scss';
import ContactList from '../../components/contactList';
import SearchContact from '../../components/searchContact';
import Service from '../../services';
import Spinner from '../../components/spinner';
import DelContactForm from '../../components/delContactForm';
import AddContactForm from '../../components/addContactForm';
import EditContactForm from '../../components/editContactForm';
import { connect } from 'react-redux';
import WithService from '../../components/hoc';
import {  } from '../../actions';

class ContactPage extends Component {

  state = {
    loading: false,
  }

  service = new Service();

  loading = () => this.setState({loading: true})
  noLoading = () => this.setState({loading: false})
  
  render() {
    const {loading} = this.state;
    const {delForm, addForm, editForm} = this.props;
      
    return(
      <div className={classes.contacts}>

        { delForm ? <DelContactForm/> : null }

        { editForm ? <EditContactForm/> : null }

        { addForm ? <AddContactForm/> : null }

        { loading ? <Spinner/> : <SearchContact/> }

        <ContactList />

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    delForm: state.delForm,
    editForm: state.editForm,
    addForm: state.addForm
  }
}

const mapDispatchToProps = {}

export default WithService()(connect(mapStateToProps, mapDispatchToProps)(ContactPage));