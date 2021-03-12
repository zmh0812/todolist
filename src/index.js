import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalStyle } from './style';
import { IconStyle } from './statics/iconfont/iconfont';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <IconStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);