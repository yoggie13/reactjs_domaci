import { Component } from "react";
import movieTrailer from 'movie-trailer';
import movieInfo from 'movie-info';
import App from './App';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            link: "",
            title: "",
            posterLink: "http://image.tmdb.org/t/p/original",
            grade: 0,
            plotSummary: "",
            whatToRender: null,
            everythingCool: false,     
            previousSearch: props.search,
            ready: false

        };
        this.makeItEmbed = this.makeItEmbed.bind(this);
        this.pullFromJson = this.pullFromJson.bind(this);
        this.setItUp = this.setItUp.bind(this);
            
        movieTrailer(this.props.search).then(response => this.makeItEmbed(response));
        movieInfo(this.props.search).then(response => this.pullFromJson(response));
    }   
    
    componentDidUpdate() {
        if(this.props.search === this.state.previousSearch)  return;
        this.setState({previousSearch : this.props.search});
        if(this.props.search == null) return;
        this.setState({posterLink: "http://image.tmdb.org/t/p/original", link: ""});

        movieTrailer(this.props.search).then(response => this.makeItEmbed(response));
        movieInfo(this.props.search).then(response => this.pullFromJson(response));
    }

    makeItEmbed(props) {
        if (props == null) {
            this.setState({everythingCool : false})
            return;
        }
        var embedlink = props.replace("watch?v=", "embed/");
        this.setState({ 
            link: embedlink,
            everythingCool : true,
        });
    }
    pullFromJson(props) {


        if(props.toString() == "Error: Search Error: No results found"){
            this.setState({everythingCool : false});
        }
        else{this.setState({
            title: props.title,
            posterLink: this.state.posterLink + props.poster_path,
            grade: props.vote_average,
            plotSummary: props.overview,
            everythingCool: true
        });}
       
        this.setItUp();
    }
    setItUp(){

        if(this.state.everythingCool == true){
            this.setState({
                whatToRender: (
                <div id="movie">
                    <div id="info">
                        <h1>Title: {this.state.title}</h1>
                        <p>Plot summary: {this.state.plotSummary}</p>
                        <p>Grade: {this.state.grade}</p>
                    </div>
                    <div id="poster">
                        <img src={this.state.posterLink} alt={this.state.title + " poster"}></img>
                    </div>
                    <div id="trailer">
                        <iframe src={this.state.link}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                        </iframe>
                    </div>
                </div>),
                ready:true
            });
        }
        else
        {
            console.log("pajgopakp[lfa");
            this.setState({whatToRender: (<div>Nema rezultata za: {this.props.search} </div>), ready: true});
        }
    }



    render() {
        if(this.state.ready === false) {
            return <div>Loading...</div>;
        }
            return (
           <div id = "wrap">
            {this.state.whatToRender}
           </div>
        );
    }
}
export default Main;