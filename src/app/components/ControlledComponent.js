import React, { Component } from 'react';

export default class ControlledComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            formData: {
                userName: '',
                password: ''
            },
            notification: ''
        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    // handleEmail = (event) => {
    //     this.setState({userName: event.target.value})
    // }
    // handlePassword = (event) => {
    //     this.setState({password: event.target.value})
    // }

    submitForm = (event) => {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form name="loginForm" >
                    <div className="form-group">
                        <label className="control-label col-lg-2 col-md-2 col-sm-2" htmlFor="userName">E-Mail</label>
                        <div className="col-lg-10 col-md-10 col-sm-10">
                            <input type="email" className="form-control" id="userName" placeholder="Enter email" name="userName" onChange={this.handleEmail} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-lg-2 col-md-2 col-sm-2" htmlFor="email">Password</label>
                        <div className="col-md-10 col-sm-10">
                            <input type="password" className="form-control" id="password" placeholder="Enter Password" name="password" onChange={this.handlePassword} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-primary" onClick={(event)=>this.submitForm(event)} id="submitBtn">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}