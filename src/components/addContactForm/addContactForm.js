import React, {Component} from 'react'
import classes from './addContactForm.module.scss';
import Button from '../button';
import Input from '../input';

export default class AddContactForm extends Component {

  state = {
    name: '',
    phone: '',
    email: '',
  }

  onSubmit = (e) => {
    e.target.reset();
    e.preventDefault();
    const {name, email} = this.state;
    if (!name || !email) return;
    this.props.handlerSubmit(this.state)
  }

  inputNamelHandler = name => this.setState({name});
  inputPhoneHandler = phone => this.setState({phone});
  inputEmailHandler = email => this.setState({email});
  clearName = () => this.setState({name: ''});
  clearPhone = () => this.setState({phone: ''});
  clearEmail = () => this.setState({email: ''});

  render() {
    const {handlerCancel} = this.props;

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
              validation = {['required', 'email']}
            />
          <div className={classes.butttons}>
            <Button
                label = "Accept"
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

}
