import { Component } from "react";
import movieTrailer from 'movie-trailer';
import movieInfo from 'movie-info';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: props.search,
            link: "",

        };
        this.makeItEmbed = this.makeItEmbed.bind(this);
    }

    componentDidMount(){
        movieTrailer(this.state.search).then(response => this.makeItEmbed(response));
        movieInfo(this.state.search).then(response => console.log(response));        
    }
    makeItEmbed(props){
        var embedlink = props.replace("watch?v=","embed/");
        this.setState({link: embedlink});
    }
 

    render() {
        return (
            <div>
             <iframe width="1336" height="720" src={this.state.link} frameborder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        );
    }
}
export default Main;