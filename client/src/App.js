import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import PresentListHolder from './components/PresentListHolder';
import { Provider } from 'react-redux';
import store from './store';
import { Container } from 'reactstrap';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//            <PresentModal actionType="Add"/>
// <PresentList/>

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    console.log('process.env' + JSON.stringify(process.env));
    console.log('BOB=' + process.env.BOB);
    console.log('REACT_APP_BOB=' + process.env.REACT_APP_BOB);
    return (
      <Provider store={store}>
        <div className='App'>
          <AppNavbar />
          <Container>
            <PresentListHolder />
          </Container>
        </div>
      </Provider>
    );
  }
}
export default App;
