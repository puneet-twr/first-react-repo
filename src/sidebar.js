import React, { Component } from 'react';
import './sidebar.css';

class SideBar extends Component{
    render(){
        return(            
        <div className="sideBar" >
                    <ul>
                        <li><button>Home</button></li>
                        <li><button>Attendence</button></li>
                        <li><button>Teachers</button></li>
                        <li><button>Fees Management</button></li>
                        <li><button>Announcements</button></li>
                        <li><button>Learning Resources</button></li>
                    </ul>
        </div>            
        )
    }
}
// instead of sending props/states from an independent component to another independent component 
// create a parent component which has sidebar in it and import the pageContent component in it instead of putting only sidebar into a seperate component
export default SideBar;