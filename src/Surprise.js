import { Component } from "react";

class Surprise extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            link: "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg"
        };
        this.count = this.count.bind(this);
    }
    count(){
        this.setState({counter : this.state.counter + 1});
        if(this.state.counter == 4){
            window.open(this.state.link,'_blank');
            this.setState({counter : 0});
        }
    }

    render(){
        return(
            <div>
                <button onClick = {this.count}>Iznenađenje</button>
            </div>
        );
    }
}

export default Surprise;