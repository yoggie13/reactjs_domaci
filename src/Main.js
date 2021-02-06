import { Component } from "react";

class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
            genre : props.genre,
        };
    }
    render(){
        return <div>{this.state.genre.label}</div>
    }
}
export default Main;