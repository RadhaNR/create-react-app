import React, { PureComponent } from 'react';

export default class PureComponents extends PureComponent {
    constructor() {
        super();
        this.state = {
            flag: 1
        }
    }
    
    render() {
        console.log('PureCOmponent rendering.......')
        return (
            <div>
                PureComponent
            </div>
        )
    }
}