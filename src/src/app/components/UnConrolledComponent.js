import React, { Component } from 'react';

export default class UnControlledComponent extends Component {

    submitForm = (event) => {
        event.preventDefault();
        const emailId = this.emailId.value;
        const password = this.password.value;
        console.log(emailId, password)
        //do something 
    }
    render() {
        return (
            <div >
                <form >
                    <div className="form-group">
                        <label className="control-label col-lg-2 col-md-2 col-sm-2" htmlFor="userName">E-Mail</label>
                        <div className="col-lg-10 col-md-10 col-sm-10">
                            <input type="email" className="form-control" id="userName" placeholder="Enter email" name="userName" ref={(userInput) => this.emailId =
                        userInput} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-lg-2 col-md-2 col-sm-2" htmlFor="password">Password</label>
                        <div className="col-lg-10 col-md-10 col-sm-10">
                            <input type="password" className="form-control" id="password" placeholder="Enter Password" name="password" ref={(userInput) => this.password =
                        userInput} />
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