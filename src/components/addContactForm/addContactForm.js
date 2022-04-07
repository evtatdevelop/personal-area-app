import React, {Component} from 'react'
import classes from './addContactForm.module.scss';
import Button from '../button';
import Input from '../input';
import { connect } from 'react-redux';
import WithService from '../hoc/withService';
import { formsClean, contactsLoaded, addContact } from '../../actions';

class AddContactForm extends Component {

  state = {
    name: '',
    phone: '',
    email: '',
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.name) return;
    const {Service, addContact, contactsLoaded} = this.props;
    Service.add(this.state)
    .then(() =>{
      addContact();
      Service.getContacts()
      .then(contacts => {
        contactsLoaded(contacts)
      })
    })
  }


  inputNamelHandler = name => this.setState({name});
  inputPhoneHandler = phone => this.setState({phone});
  inputEmailHandler = email => this.setState({email});
  clearName = () => this.setState({name: ''});
  clearPhone = () => this.setState({phone: ''});
  clearEmail = () => this.setState({email: ''});

  render() {
    const {formsClean} = this.props;

    return (
      <div className={classes.addContactForm}>
        <form onSubmit={e=>this.onSubmit(e)}>
            <Input
              id = 'name'
              type = 'text'
              readonly = {false}
              placeholder = 'Name'
              arialabel = {'Name'}
              inputHandler = {this.inputNamelHandler}
              clearData = {this.clearName}
              validation = {['required']}
            />
            <Input
              id = 'phone'
              type = 'tel'
              readonly = {false}
              placeholder = 'Phone'
              arialabel = {'Phone'}
              inputHandler = {this.inputPhoneHandler}
              clearData = {this.clearPhone}
            />            
            <Input
              id = 'email'
              type = 'email'
              readonly = {false}
              placeholder = 'Email'
              arialabel = {'Email'}
              inputHandler = {this.inputEmailHandler}
              clearData = {this.clearEmail}
              // validation = {['required', 'email']}
              validation = {['email']}
            />
          <div className={classes.butttons}>
            <Button
                label = "Accept"
                type = "submit"
              />
            <Button
                label = "Cancel"
                type = "button"
                handlerClick={formsClean}
              />          
          </div>
        </form>
      </div>
    )    
  }

}

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = {
  formsClean,
  contactsLoaded,
  addContact
}

export default WithService()(connect(mapStateToProps, mapDispatchToProps)(AddContactForm));