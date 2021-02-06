import logo from './logo.svg';
import './App.css';
import Main from './Main';
import Select from 'react-select'
import React, { Component } from 'react'
import { render } from '@testing-library/react';
import Controller from './Controller';

const genres = [
  { value: 1, label: "Rock" },
  { value: 2, label: "Hip-hop" },
  { value: 3, label: "Punk" },
  { value: 4, label: "Techno" },
  { value: 5, label: "Pop" }
];

class Welcome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedGenre: genres[0],
      whatToRender : (
        <div>
          <h1>Playlist maker</h1>
          <form>
            <h2>Izaberite žanr:</h2>
            <Select defaultValue={genres[0]} options={genres} onChange={this.handleChange}></Select>
            <button onClick={this.onSubmitHandler}>Generiši plejlistu</button>
          </form>
        </div>
      )    
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  onSubmitHandler = (e) => {
    e.preventDefault();
    this.setState(
      {
        whatToRender : (
          <div>
            <Main genre = {this.state.selectedGenre}/>
          </div>
        )
      }
    );
  }
  handleChange = (e) => {
    this.setState({ selectedGenre: e });
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
