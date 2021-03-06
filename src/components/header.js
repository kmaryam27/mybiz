import React, { Component } from 'react';
import '../css/header.css';

class Header extends Component {
  render() {
    return (
      <div className="navbar">
         <ul>
            <a href="/">Home</a>
            <a href="/inprogress/">In Progress</a>
            <a href="/pending/">Pending Orders</a>
            <a href="/delivered/">Delivered Orders</a>
            <a href="/customers/">Customers</a>
            <a href="/analytics/">Analytics</a>
         </ul>
      </div>
    );
  }
}

export default Header;
