import React, {Component} from 'react'
import classes from './addContactForm.module.scss';
import Button from '../button';
import Input from '../input';

export default class EditContactForm extends Component {

  state = {
    name: '',
    phone: '',
    email: '',
    noName: false,
    noMail: false,
  }

  onSubmit = (e) => {
    e.target.reset();
    e.preventDefault();
    const {name, email} = this.state;
    if ( !name ) {
      this.setState({noName: true});
      return;
    } else this.setState({noName: false});

    if ( !email ) {
      this.setState({noMail: true});
      return;
    } else this.setState({noMail: false});

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
    const {noName, noMail} = this.state;

    return (
      <div className={classes.addContactForm}>
        <form onSubmit={e=>this.onSubmit(e)}>
          <div>
            <Input
              id = 'name'
              type = 'text'
              readonly = {false}
              placeholder = 'Name'
              arialabel = {'Name'}
              inputHandler = {this.inputNamelHandler}
              clearData = {this.clearName}
            />
           { noName ? <p className={classes.errMeassage}>Name required</p> : null }
          </div>
          <div>
            <Input
              id = 'phone'
              type = 'tel'
              readonly = {false}
              placeholder = 'Phone'
              arialabel = {'Phone'}
              inputHandler = {this.inputPhoneHandler}
              clearData = {this.clearPhone}
            />            
          </div>
          <div>
            <Input
              id = 'email'
              type = 'email'
              readonly = {false}
              placeholder = 'Email'
              arialabel = {'Email'}
              inputHandler = {this.inputEmailHandler}
              clearData = {this.clearEmail}
            />
            { noMail ? <p className={classes.errMeassage}>Invalid email</p> : null }
          </div>

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
