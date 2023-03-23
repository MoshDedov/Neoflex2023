import React, { Component } from 'react';
import Clicker from './Clicker';

export default class ClickerApp extends Component {
  constructor() {
    super();

    this.state = {
      title: 'React Counter',
    };
  }

  render() {
    return (
      <div>
        <Clicker />
      </div>
    );
  }
}
