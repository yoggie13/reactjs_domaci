import logo from './logo.svg';
import './App.css';
import Select from 'react-select'
import React,{Component} from 'react'
import { render } from '@testing-library/react';

const  genres = [
  {value: 1, label: "Rock"}, 
  {value: 2, label: "Hip-hop"},
  {value: 3, label: "Punk"},
  {value: 4, label: "Techno"},
  {value: 5, label: "Pop"}
];

class Welcome extends Component{
  constructor(props){
    super(props);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.state = {
      selectedGenre : genres[0]
    }; 
     
  this.onSubmitHandler = this.onSubmitHandler.bind(this);
  this.handleChange = this.handleChange.bind(this);  
  }
  onSubmitHandler = () => {
    alert("Izabrali ste žanr: " + this.state.selectedGenre.label);
  }
  handleChange = (e) =>{
    this.setState({selectedGenre : e});
  }
  render(){
    return (
      <div>
          <h1>Music Finder</h1>
        <form onSubmit = {this.onSubmitHandler}>
          <h2>Izaberite žanr:</h2>
          <Select defaultValue = {genres[0]} options = {genres} onChange={this.handleChange}></Select>
          <input type = "submit" value = "Generiši plejlistu"></input>
        </form>
      </div>
    );
  }
}


export default Welcome;
