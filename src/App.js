// import {Component} from 'react'
import './App.css';
import Header from './components/Header';
import LoginPage from './pages/loginPage';
import ContactPage from './pages/contactsPage';
import { Routes, Route } from "react-router-dom";
import { connect } from 'react-redux';
import Logaut from './components/logaut';

const App = props => {
  return (
    <div className="App">
      <Header logined = {true}/>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        {props.idToken ? <Route path='/contacts' element={<ContactPage />} /> : null}
        {props.idToken ? <Route path='/logaut' element={<Logaut/>} /> : null}
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