import logo from './logo.svg';
import './App.css';
import Main from './Main';
import React, { Component } from 'react'
import { render } from '@testing-library/react';
import Button from 'react-bootstrap/Button';



class Welcome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      search: "",
      clicked: false,
      addMain: null,
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sendTheWord = this.sendTheWord.bind(this);
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({ clicked: true });

    this.setState({
      addMain: (<div id="Main"><Main search={this.sendTheWord()} /></div>),
    });
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  }

  sendTheWord() {
    this.setState({ search: this.state.search });

    return this.state.search;
  }

  render() {

    return (
      <div id>
        <div id="forma">
          <h1>Movie info finder</h1>
          <form>
            <h2>Unesite ime filma</h2>
            <input type="text" onChange={this.handleChange}></input>
            <Button onClick={this.onSubmitHandler}>Pronađi info</Button>
          </form>
        </div>
        {this.state.addMain}</div>
    );
  }
}


export default Welcome;
