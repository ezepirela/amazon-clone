import React from 'react';
import ReactDOM from 'react-dom';
import {StateProvider} from './Context/ContextProvider';
import './index.css';
import reducer, {inicialState} from './Context/reducer';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
	  <StateProvider initialState={inicialState} reducer={reducer} >
	    <App />
	  </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

