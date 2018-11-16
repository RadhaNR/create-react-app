import React, { Component } from 'react';

export default class ChildComponent extends Component {
    render() {
        console.log("in child component", this.props.list)
        return (
            <div>
                <p>Child Component recieved {this.props.list.length} items from its parent component</p>
                <table className="table table-striped">
                    <thead><tr><td>Course Name</td><td>Cost</td></tr></thead>
                    <tbody>
                        {
                            this.props.list.map((item, i) => {
                                return <tr className="userList" key={i} onClick={() => this.props.itemSelected(item)}><td>{item.courseName} </td><td>{item.cost}</td></tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

// export const ChildFunComp = (props) => {
//     return (
//         <ul>
//             {
//                 props.list.map((item, i) => {
//                     return <li key={i}>{item.courseName}</li>
//                 })
//             }

//         </ul>
//     )
// }