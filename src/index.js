import React from 'react';
import ReactDOM from 'react-dom';
import './rest.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import ErrorBoudry from './components/errorBoundry';
import Service from './services';
import ServiceContext from './serviceContext';
import store from './store';


const service = new Service();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoudry>
        <ServiceContext.Provider value={service}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ServiceContext.Provider>
      </ErrorBoudry>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
