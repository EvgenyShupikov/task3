import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from "./store/index";
import Card from './components/Card';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <Card />
        </div>
      </div>
    </Provider>
  );
}


export default App;
