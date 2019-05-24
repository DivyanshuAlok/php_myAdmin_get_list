import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,} from 'react-native';
import Main from './components/Main';
import SignUp from './components/SignUp';
import { Router, Scene } from 'react-native-router-flux';

export default class App extends Component<Props>{ 
  render() {
    return (
      <Router>
      <Scene key='root'>
      <Scene key="Main"
        component={Main}
        title="Main"
        hideNavBar={true}
      />
      </Scene>
      </Router>
          
    );
  }
}