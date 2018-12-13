import React, { Component } from 'react';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './app/components/Home';
import Profile from './app/components/Profile';
import About from './app/components/About';
import FileNotFound from './app/components/FileNotFound';
import Parent from './app/components/Parent';

class App extends Component {
    constructor() {
        super();
        this.state = {
            text: 1,
            show: true
        }
    }



    conditionalRender = () => {
        this.setState({ show: !this.state.show })
    }
    change = () => {
        this.setState({ text: Math.random() })
    }
    render() {

        return (
            <div className="container-fluid">
            {this.state.text}
            <button onClick={this.change}>App Button</button>
                <BrowserRouter>
                    <div>
                        <Link to="/home">Home | </Link>
                        <Link to="/profile">Profile | </Link>
                        <Link to="/about">About | </Link>
                        <Link to="/parent" >Parent</Link>

                        <Switch>
                            <Route path='/' component={About} exact />
                            <Route path='/about' component={About} />
                            <Route path='/home' component={Home} />
                            <Route path='/profile' component={Profile} />
                            <Route path='/parent' component={Parent} />

                            <Route component={FileNotFound} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
