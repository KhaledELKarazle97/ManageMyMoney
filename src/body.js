import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import 'bootstrap';
import './body.css';

class Body extends Component{
 
  render(){
  return(
    <div>
    <div className="banner">
       <span id="banner-content">
          <h2>Expenses Management Made Easy!</h2>
          <h5>Just <span className="banner-button"><a href="">Sign up</a></span> or <span className="banner-button"><a href="">login</a></span> and that is it!</h5>
       </span>
    </div>
    <div id="main-content" className="container">
       <div class="row">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
             <div className="card border-danger mb-3">
                <div className="card-header">What is it ?</div>
                <div className="card-body text-danger">
                   <p className="card-text">Manage My Money (MMM) is an online platform that would surely help you manage your own personal expenses and the best part about it is that it is all free !</p>
                </div>
             </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
             <div className="card border-danger mb-3">
                <div className="card-header">How to Use it ?</div>
                <div className="card-body text-danger">
                   <p className="card-text">All you need to do is just sign up for an account or sign in using your existing account (other options are available like Facebook and Gmail)</p>
                </div>
             </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
             <div className="card border-danger mb-3">
                <div className="card-header">Why Does it exist ?</div>
                <div className="card-body text-danger">
                   <p className="card-text">It's often hard to monitor your own spendings so through this service you will be able to manage your budget and savings easily</p>
                </div>
             </div>
          </div>
       </div>
    </div>
 </div>
  );   
    
  }

}
  export default Body;