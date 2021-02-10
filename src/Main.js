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
            everythingCoolVideo: false, 
            everythingCoolInfo : false,    
            previousSearch: props.search,
            ready: false

        };
        this.makeItEmbed = this.makeItEmbed.bind(this);
        this.pullFromJson = this.pullFromJson.bind(this);
        this.setItUp = this.setItUp.bind(this);
        this.make = this.make.bind(this);
            
        this.make();
        
    }   
    async make(){
        let link = await movieTrailer(this.props.search);
        let info = await movieInfo(this.props.search);
        
        this.makeItEmbed(link);
        this.pullFromJson(info);
        this.setItUp();
    }
    
    componentDidUpdate() {
        if(this.props.search === this.state.previousSearch)  return;
        this.setState({previousSearch : this.props.search});
        if(this.props.search == null) return;
        this.setState({posterLink: "http://image.tmdb.org/t/p/original", link: ""});

        this.make();
    }

    makeItEmbed(props) {
        if (props == null) {
            this.setState({everythingCoolVideo : false})
            return;
        }
        var embedlink = props.replace("watch?v=", "embed/");
        this.setState({ 
            link: embedlink,
            everythingCoolVideo : true,
        });
    }
    pullFromJson(props) {


        if(props.toString() == "Error: Search Error: No results found"){
            this.setState({everythingCoolInfo : false});
        }
        else{this.setState({
            title: props.title,
            posterLink: this.state.posterLink + props.poster_path,
            grade: props.vote_average,
            plotSummary: props.overview,
            everythingCoolInfo: true
        });}
       
    }
 
    setItUp(){

        if(this.state.everythingCoolInfo == true && this.state.everythingCoolVideo == true){
            this.setState({
                whatToRender: (
                <div id="movie">
                    <div id="info">
                        <h1 class = "override">Title: {this.state.title}</h1>
                        <p>Plot summary: {this.state.plotSummary}</p>
                        <p style={{fontWeight:'bold'}}>Grade: {this.state.grade}</p>
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