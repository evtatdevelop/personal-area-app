import React, {Component} from 'react'
import classes from './loginPage.module.scss';
import Input from '../../components/input';
import Button from '../../components/button';

export default class LoginPage extends Component {
  
  mailInp = React.createRef();
  passInp = React.createRef();

  state = {
    mail: '',
    pass: '',
  }

  inputMailHandler = mail => this.setState({mail});
  inputPassHandler = pass => this.setState({pass});
  clearMail = () => this.setState({mail: ''});
  clearPass = () => this.setState({pass: ''});
  onSubmit = e => {
    e.target.reset();
    e.preventDefault();
    const {mail, pass} = this.state;
  
    console.log(`LogIn: ${mail} / ${pass}`);
  
    this.clearMail();
    this.clearPass();
    this.mailInp.current.onClrHandler();
    this.passInp.current.onClrHandler();
  };

  render() {
    return(
      <form 
        className={classes.form} 
        onSubmit={this.onSubmit}
      >
        <Input
          ref = {this.mailInp}
          id = 'email'
          type = 'text'
          readonly = {false}
          placeholder = 'Email'
          arialabel = 'Email'
          inputHandler = {this.inputMailHandler}
          clearData = {this.clearMail}
        />

        <Input
          ref = {this.passInp}
          id = 'password'
          type = 'password'
          readonly = {false}
          placeholder = 'Password'
          arialabel = {'Password'}
          inputHandler = {this.inputPassHandler}
          clearData = {this.clearPass}
        />
        
        <Button
          label = "Login"
          type = "submit"
        />
      </form>
    )
  }
}