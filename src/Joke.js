import { Component } from 'react';

const oneLinerJoke = require('one-liner-joke');
class Joke extends Component{

constructor(props){
    super(props);
    this.state = {
        joke: ""
    };
}
componentDidMount(){
    this.setState({joke: oneLinerJoke.getRandomJokeWithTag('IT',{'exclude_tags' : ['dirty', 'sex', 'racist','sexist', 'woman']}).body});

    setInterval(() => {
        this.setState({joke: oneLinerJoke.getRandomJokeWithTag('IT',{'exclude_tags' : ['dirty', 'sex', 'racist','sexist', 'woman']}).body});
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