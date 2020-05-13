import React, {Component} from 'react';
import AppNavbar from './components/AppNavbar';
import PresentList from './components/PresentList'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <PresentList/>
    </div>
  );
}
export default App;