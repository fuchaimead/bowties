import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css'; 
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
 
    <BrowserRouter>
      <App />
    </BrowserRouter>
,
  document.getElementById('root')
);
registerServiceWorker();
