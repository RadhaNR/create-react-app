import React, { PureComponent } from 'react';

class About extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            text: 1230
        }

    }
    textChange = () => {
        this.setState({text: Math.random()});
    }
   
    // shouldComponentUpdate(newProps, newState) {
    //     console.log(newState.text, this.state.text)
    //     if(newState.text !== this.state.text) {
    //         return true;
    //     } else {
    //         return false;
    //     }       
    // }

    render() {
        console.log("About rendering", this.state.text)
        return (
            <div>
                About Component -- {this.state.text}
                <button onClick={this.textChange}>Click</button>
            </div>
        )
    }
}

export default About;