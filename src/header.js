import React, { Component } from 'react';
import './header.css';
// const Student= (props) => {
//     return <div className="container"><h1>hello {props.name}, How are you?</h1></div>
// }

class Header extends Component{
    render(){
        return(
            <div className="header" >
                {/* <ul>
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                    <li>four</li>
                    <li>five</li>
                    <li>six</li>
                </ul> */}
                <h3>This is a prototype to test how to pass props and states to child components</h3>
            </div>
            
        )
    }
}

// class StudentState extends Component{   // using states without constructor
//     state={
//         name: "Puneet",
//         prop1: "this is prop1"
//     }
//     render(){
//         return (
//             <h1>Hello World, this is {this.state.name} <br/> {this.state.prop1} </h1>
//         )
//     }
// }

// class StudentState extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             name: "Puneet in Constructor",
//             roll: this.props.roll
//         };
//     }
//     render() {
//         return (
            
//                             <h1>Hello World, this is {this.state.name} <br/> Your rollno is  {this.state.roll} </h1>
//         )
//     }
// }


export default Header;