// import {Component} from 'react'
import './App.css';
import Header from './components/Header';
import LoginPage from './pages/loginPage';
import ContactPage from './pages/contactsPage';
import { Routes, Route } from "react-router-dom";
import { connect } from 'react-redux';
import Logout from './pages/logout';

const App = props => {
  return (
    <div className="App">
      <Header logined = {true}/>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        {props.idToken ? <Route path='/contacts' element={<ContactPage />} /> : null}
        {props.idToken ? <Route path='/logout' element={<Logout/>} /> : null}
      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    idToken: !!state.idToken
  }
}

export default connect(mapStateToProps, null)(App);