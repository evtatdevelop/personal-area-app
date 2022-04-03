import React, {Component} from 'react'
import classes from './editContactForm.module.scss';
import Button from '../button';
import Input from '../input';

export default class EditContactForm extends Component {

  state = {
    id: null,
    name: '',
    phone: '',
    email: '',
    noName: false,
    noMail: false,
  }

  componentDidMount() {
    const {contact:{id, name, phone, email}} = this.props;
    this.setState({id, name, phone, email})
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
    const {contact:{name, phone, email}, handlerCancel} = this.props;
    const {noName, noMail} = this.state;

    return (
      <div className={classes.editContactForm}>
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
              value = {name}
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
              value = {phone}
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
              value = {email}
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
