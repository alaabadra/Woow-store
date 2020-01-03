import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch } from "react-router-dom";
// import Posts from './Posts';
// import Post from './Post';
// import Comments from './Comments';
// import Complaints from './Complaints';
import { Nav, NavItem, NavLink } from 'reactstrap';
// import Services from './Services';
// import CommonQ from './CommonQ';
// import WhyW from './WhyW';
// import ContactUs from './ContactUs'
class App extends Component {
  render() {
    return (
      
      <div>

<div className="navbar">
      <p>List Based</p>
      <Nav>
        <NavItem>
          <NavLink href="/comp" className="main">الرئيسية</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/services">خدمات صحوة</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/why-wakeup">لماذا صحوة</NavLink>
        </NavItem>
        <NavItem>
          <NavLink  href="/common-q">الاسئلة الشائعة</NavLink>
        </NavItem>
        <NavItem>
          <NavLink  href="/posts">المدونة</NavLink>
        </NavItem> 
        <NavItem>
          <NavLink  href="/contact">اتصل بنا</NavLink>
        </NavItem>       
      </Nav>
      <hr />
    
    </div>
      
      </div>
    );
  }
}

export default App;
