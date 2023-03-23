import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class Clicker extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      count: props.count
    }

    this.handleIncrement = this.handleIncrement.bind(this);      
  }

  // method for increment
  handleIncrement(){
    this.setState((prev) => ({ count: prev.count + 1 }));
  }

  render(){
    return (
      <div className="container clicker-top">
          <div className="clicker border border-secondary rounded">
              <div className="clicker-display d-flex align-items-center bg-light text-secondary">
<div className="mx-auto display-1">{this.state.count}</div>
              </div>

             { /* buttons that perform
             incrementing, decrementing and resetting
              */}   
              <div className="clicker-button-panel d-flex flex-grow">
                <button className="btn btn-success w-100" onClick={this.handleIncrement}>
                <i className="fa fa-plus fa-2x"></i>
                </button>
              </div>
          </div>
      </div>
    );
  }
}

Clicker.defaultProps={
  count:0
}

Clicker.propTypes ={
  count: propTypes.number
}