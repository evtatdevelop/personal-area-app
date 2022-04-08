import React, {Component} from 'react'
import { Navigate } from 'react-router-dom'
import classes from './loginPage.module.scss';
import Input from '../../components/input';
import Button from '../../components/button';
import Spinner from '../../components/spinner';
import { connect } from 'react-redux';
import WithService from '../../components/hoc';
import { loadingOn, login } from '../../actions';

class LoginPage extends Component {
  
  mailInp = React.createRef();
  passInp = React.createRef();
  state = { mail: '', pass: '', }

  auth = ({mail, pass}) => {
    const {Service, login, loadingOn} = this.props;
    loadingOn();
    Service.auth(mail, pass) 
    .then((response) => {
      login(response);
    })
  } 

  inputMailHandler = mail => this.setState({mail});
  inputPassHandler = pass => this.setState({pass});
  clearMail = () => this.setState({mail: ''});
  clearPass = () => this.setState({pass: ''});

  onSubmit = e => {
    e.preventDefault();
    this.props.loadingOn();
    this.auth(this.state);
    this.clearMail();
    this.clearPass();
    this.mailInp.current.onClrHandler();
    this.passInp.current.onClrHandler(); 
  };

  render() {
    const { loading, idToken } = this.props;

    const form = (
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

        { loading ? <Spinner/> : null }
      </form>
    )

    return(
      <>{
        idToken ? <Navigate to={'/contacts'}/> : form
      }</>

           
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    idToken: state.idToken
  }
}

const mapDispatchToProps = {
  loadingOn,
  login
}

export default WithService()(connect(mapStateToProps, mapDispatchToProps)(LoginPage));