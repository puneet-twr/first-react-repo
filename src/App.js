import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import {useState} from 'react';
import Header from './header';
// import SideBar from './sidebar';
import './sidebar.css';
import Content from './content';
import Home from './pages/Home';
import { Nav, Navbar } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
const myNewElement = <h1>Heloo index.js how are you</h1>;
{
// class App extends Component{
//   render(){
//     // const newComp =  <div className="container">
//     //   <ul>
//     //     <li><h1>hey, updated this is my first component</h1></li>
//     //     <li><h1>hey, updated this is my Second component</h1></li>
//     //     <li><h1>hey, updated this is my Third component</h1></li>
//     //     <li><h1>hey, updated this is my Fourth component</h1></li>
//     //   </ul> 
//     //   </div>
//     const frag = <React.Fragment>
//       <h1>This is rendered using React.Freagment</h1>
//       <h2>And it has no parent Element other than root</h2>
//       <h3>So this is one way to render multiple elements in index.html without adding an addition Node</h3>
//     </React.Fragment> 
//     return frag ;
//   }
// }

// Dev ed tuturial
// function App(){
//   const [Counter, setCounter] = useState(0);
//   const [Toggle, setToggle] = useState(true);

//   const incrementer = ()=> {
//     setCounter(Counter+1);
//   };
//   const toggler =()=>{
//     setToggle((prev)=>!prev);
//   }

//   return(
//     <div className="App">
//       <h1>Hello React !!</h1>
//       <div className="Counter">Counter is {Counter}</div>
//       <button onClick={incrementer}>Click here to increment the counter</button>
//       <div className={Toggle? "active": "" }>The visiblity of this element can be toggled</div>
//       <button onClick={toggler}>Click</button>
//     </div>
//   )
// }
}



function App(){
  
  const [Page, setPage] = useState("one");
  const printId = (e)=>{
    setPage((prev)=>e.target.id);
  }
  return(
    <div className='mainContainer'>
      <div className='header'>
        <Header></Header>
        {/* <NavbarToggle></NavbarToggle> */}
      </div>
      <div className='content'>
      <div className="sideBar" >
                    <ul>
                        <li><button onClick={function(e){printId(e);}} id='one'>Home</button></li>
                        <li><button onClick={function(e){printId(e);}} id='two'>Attendence</button></li>
                        <li><button onClick={function(e){printId(e);}} id='three'>Teachers</button></li>
                        <li><button onClick={function(e){printId(e);}} id='four'>Fees Management</button></li>
                        <li><button onClick={function(e){printId(e);}} id='five'>Announcements</button></li>
                        <li><button onClick={function(e){printId(e);}} id='six'>Learning Resources</button></li>
                    </ul>
                  
        </div>            
        {/* 12 sept 21, we have made decided to create a basic webpage of erp, we have decided to create the sideBar and header in one component and the content page will be its child. We have successfully passed the state to the child components through props*/}
        {/* next we will try to render different component on different conditions/ based on the selected page, the first way i can think of is by using switch statement but we will try to think of something else too */}
        {/* Pradeep asked us that if we are also making a login page, we said we can't now as we dont know how to 😂😂, but we will try to do it, statically, meaning without backend */}

        <div className='mainContent'>
          <Content page={Page}></Content>
          {/* <Home page={Page} ></Home> */}
        </div>
      </div>
    </div>
  )
}




export default App;
