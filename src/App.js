import logo from './logo.svg';
import './App.css';
import Select from 'react-select'

const options = [
  {key: 1, label: "Rock"}, 
  {key: 2, label: "Hip-hop"},
  {key: 3, label: "Punk"},
  {key: 4, label: "Techno"},
  {key: 5, label: "Pop"}];

function App() {
  return (
    <div>
        <h1>Music Finder</h1>
      <form>
        <h2>Izaberite žanr:</h2>
        <Select options = {options}></Select>
        <input type = "submit" value = "Generiši plejlistu"></input>
      </form>
    </div>
  );
}

export default App;
