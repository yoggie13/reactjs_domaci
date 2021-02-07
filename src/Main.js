import { Component } from "react";
import movieTrailer from 'movie-trailer';
import movieInfo from 'movie-info';
import App from './App';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: props.search,
            link: "",
            title: "",
            posterLink: "http://image.tmdb.org/t/p/original",
            grade: 0,
            plotSummary: "",
        };
        this.makeItEmbed = this.makeItEmbed.bind(this);
        this.pullFromJson = this.pullFromJson.bind(this);
    }

    componentDidMount() {

        movieTrailer(this.state.search).then(response => this.makeItEmbed(response));
        movieInfo(this.state.search).then(response => this.pullFromJson(response));

    }
    makeItEmbed(props) {
        var embedlink = props.replace("watch?v=", "embed/");
        this.setState({ link: embedlink });
    }
    pullFromJson(props) {
        this.setState({
            title: props.title,
            posterLink: this.state.posterLink + props.poster_path,
            grade: props.vote_average,
            plotSummary: props.overview
        });

    }

    render() {
        return (
            <div>
                <div>
                    <h1>Title: {this.state.title}</h1>
                    <p>Plot summary: {this.state.plotSummary}</p>
                    <p>Grade: {this.state.grade}</p>
                    <p>Poster:<img src={this.state.posterLink} alt={this.state.title + " poster"}></img></p>
                </div>
                <p>Trailer</p>
                <iframe src={this.state.link}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
        );
    }
}
export default Main;