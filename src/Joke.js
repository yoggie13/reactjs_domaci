import { Component } from 'react';

const awesomeDevJoke = require('awesome-dev-jokes');
class Joke extends Component{

constructor(props){
    super(props);
    this.state = {
        joke: ""
    };
}
componentDidMount(){
    this.setState({joke: awesomeDevJoke.getRandomJoke()});
    
    setInterval(() => {
        this.setState({joke: awesomeDevJoke.getRandomJoke()});
    }, 10000);
}

render(){
    return (
        <div>
            {this.state.joke}
        </div>
        );
    }
}
export default Joke;