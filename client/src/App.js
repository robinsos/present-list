import React from 'react';
import AppNavbar from './components/AppNavbar';
import PresentList from './components/PresentList'
import PresentListHolder from './components/PresentListHolder'
import { Provider } from 'react-redux';
import store from './store';
import PresentModal from './components/PresentModal';
import {Container, Button} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//            <PresentModal actionType="Add"/>
// <PresentList/>


function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar/>
        <Container>
          <PresentListHolder/>
        </Container>
      </div>
    </Provider>
  );
}
export default App;