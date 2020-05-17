import React, {Component} from 'react';
import AppNavbar from './components/AppNavbar';
import PresentList from './components/PresentList'
import { Provider } from 'react-redux';
import store from './store';
import ItemModal from './components/ItemModal';
import {Container} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar/>
        <Container>
           <ItemModal/>
           <PresentList/>
        </Container>
      </div>
    </Provider>
  );
}
export default App;