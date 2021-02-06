import App from './App';
import Main from './Main';
import {Component} from 'react';



class Controller extends Component{
    constructor(props){
        super(props);
        this.state = {
            renderElement : <App />,
            switchMain : false,
        }
        this.setState = this.setState.bind(this);
    }
    setState = () => {
        this.state.switchMain = !this.state.switchMain;
        if(this.state.switchMain)
        {
            this.state.renderElement = <Main />;
        }else
        {
            this.state.renderElement = <App />;
        }
    }
        render(){
            return <div>
                {this.state.renderElement}
            </div>
        }
}
export default Controller;