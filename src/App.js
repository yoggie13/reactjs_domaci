import logo from './logo.svg';
import './App.css';
import Main from './Main';
import React, { Component } from 'react'
import { render } from '@testing-library/react';
import Controller from './Controller';


class Welcome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      search: "",
      whatToRender: (
        <div>
          <h1>Movie info finder</h1>
          <form>
            <h2>Unesite ime filma</h2>
            <input type="text" onChange={this.handleChange}></input>
            <button onClick={this.onSubmitHandler}>Pronađi info</button>
          </form>
        </div>
      )
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({
      whatToRender : (
        <div><Main search = {this.state.search} /></div>
      )
    })
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  }
  render() {

    return (
      <div>
        {this.state.whatToRender}
      </div>
    );
  }
}


export default Welcome;
