"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	render: function() {
		return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
              <ul className="nav navbar-nav">
               <li><img src={'images/jira1.jpg'} alt="logo" className="img-responsive"/></li>
               <li><h1>Pentagram</h1></li>             
                   
                 
               </ul>
          </div>
        </nav>
		);
	}
});

module.exports = Header;
