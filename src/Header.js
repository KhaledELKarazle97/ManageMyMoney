import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import 'bootstrap';
import './header.css';


function login_false() {
  return (
<nav className="navbar navbar-expand-md bg-danger navbar-dark">
  <div className="navbar-brand navBrandStyle" href="#">Manage My Money</div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" id="home" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" id="about"  href="#">About</a>
      </li> 
      <li className="nav-item">
        <a className="nav-link" id="contact"  href="#">Contact Us</a>
      </li>  
    </ul>
  </div>  
</nav>
);
}

function login_true() {
  return (
<nav className="navbar navbar-expand-md bg-danger navbar-dark">
  <div className="navbar-brand navBrandStyle" href="#">Manage My Money</div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" id="home" href="#">Dashboard</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" id="profile"  href="#">My Profile</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" id="contact"  href="#">Contact Us</a>
      </li> 
      <li className="nav-item">
        <a className="nav-link"  id="login" href="#">Logout</a>
      </li>       
    </ul>
  </div>  
</nav>
);
}

function Header(){
 
  if(false){
    return login_true();
  }else{
    return login_false();
  }


}
export default Header;
