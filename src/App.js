import logo from './logo.svg';
import './App.css';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
//import firebase from "firebase/app";

// Add the Firebase services that you want to use
//import "firebase/auth";
//import "firebase/firestore";

//import firebaseConfig from './firebaseConfig';

//firebase.initializeApp(firebaseConfig);

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
import firebaseConfig from './firebaseConfig';
         
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
