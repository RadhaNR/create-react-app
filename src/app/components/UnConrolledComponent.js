import React, { Component } from 'react';

export default class UnControlledComponent extends Component {

    submitForm = (event) => {
        event.preventDefault();
        const userName = this.emailId.value;
        const password = this.password.value;
        const obj = {
            userName,
            password
        }
        console.log(obj)

        //this.state.name = "HCL";
        // this.forceUpdate();

        this.setState({ name: "HCL" })

    }
    render() {
        return (
            <div >
                <form >
                    <div className="form-group">
                        <label className="control-label col-lg-2 col-md-2 col-sm-2" htmlFor="userName">E-Mail</label>
                        <div className="col-lg-10 col-md-10 col-sm-10">
                            <input type="email" className="form-control" id="userName" placeholder="Enter email" name="userName"
                                ref={(userName) => this.emailId = userName} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-lg-2 col-md-2 col-sm-2" htmlFor="password">Password</label>
                        <div className="col-lg-10 col-md-10 col-sm-10">
                            <input type="password" className="form-control" id="password" placeholder="Enter Password" name="password"
                                ref={(password) => this.password = password} />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-primary" onClick={(event) => this.submitForm(event)} id="submitBtn">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}