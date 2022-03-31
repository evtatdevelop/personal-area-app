import {Component} from 'react'
import classes from './loginPage.module.scss';
import Input from '../../components/input';
import Button from '../../components/button';

export default class LoginPage extends Component {
  
  render() {
    return(
      <form className={classes.form} onSubmit={this.onSubmit}>
        <Input
          id = 'email'
          type = 'text'
          readonly = {false}
          placeholder = 'Email'
          arialabel = 'Email'
        />

        <Input
          id = 'password'
          type = 'password'
          readonly = {false}
          placeholder = 'Password'
          arialabel = {'Password'}
        />
        
        <Button
          label = "Login"
          type = "submit"
        />
      </form>
    )
  }
}