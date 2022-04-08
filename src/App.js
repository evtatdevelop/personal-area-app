import React, {Component} from 'react'
import './App.css';
import Header from './components/Header';
import LoginPage from './pages/loginPage';
import ContactPage from './pages/contactsPage';
import { Routes, Route } from "react-router-dom";
import { connect } from 'react-redux';
import Logout from './pages/logout';
import { autoLogin } from './actions';

class App extends Component {

  componentDidMount() {
    this.props.autoLogin();
  }

  render() {
    return (
      <div className="App">
        <Header logined = {true}/>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          {this.props.idToken ? <Route path='/contacts' element={<ContactPage />} /> : null}
          {this.props.idToken ? <Route path='/logout' element={<Logout/>} /> : null}
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    idToken: !!state.idToken
  }
}

const mapDispatchToProps = {
  autoLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(App);