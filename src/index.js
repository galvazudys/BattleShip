import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

let config = {
    apiKey: "AIzaSyAbTS2r5TMZqbxRm0JLjYsYrMHTJQMQ2Zs",
    authDomain: "battleship-b5405.firebaseapp.com",
    databaseURL: "https://battleship-b5405.firebaseio.com",
    projectId: "battleship-b5405",
    storageBucket: "battleship-b5405.appspot.com",
    messagingSenderId: "409726454947"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
