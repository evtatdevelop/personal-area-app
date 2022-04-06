// import {Component} from 'react'
import './App.css';
import Header from './components/Header';
import LoginPage from './pages/loginPage';
import ContactPage from './pages/contactsPage';
import {Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header logined = {true}/>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/contacts' element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;