import {Component} from 'react'
import './App.css';
import Header from './components/Header';
import LoginPage from './pages/loginPage';
import ContactPage from './pages/contactsPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";

export default class App extends Component {

  state = {}

  render() {  
    return (
      <BrowserRouter>
        
          <div className="App">
            <Header/>
            <Routes>
              <Route path='/' element={<LoginPage />} />
              <Route path='/contacts' element={<ContactPage />} />
            </Routes>
          </div>           
        
       
      </BrowserRouter>

    );
  }
}
