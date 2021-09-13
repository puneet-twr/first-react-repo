import React, { Component } from 'react';
import Home from './pages/Home';
import Attendence from './pages/Attendence';
import Teachers from './pages/Teachers';
import Learning_Resources from './pages/LearningResources';
import FeeManagement from './pages/FeeManagement';
import Announcements from './pages/Announcements';



import './content.css';

function Content(props){
    switch(props.page){
        case 'one':
            return(<Home></Home>);
        case 'two':
            return(<Attendence></Attendence>);
        case 'three':
            return(<Teachers></Teachers>);
        case 'four':
            return(<FeeManagement></FeeManagement>);
        case 'five':
            return(<Announcements></Announcements>);
        case 'six':
            return(<Learning_Resources></Learning_Resources>);
        default:
            return(<div>error</div>);  
    }
}

export default Content;