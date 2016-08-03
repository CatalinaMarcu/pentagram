"use strict";
var React = require('react');
var Router = require('react-router');
var RegisterForm = require('./registerForm');
var Link = Router.Link;

var loginForm = React.createClass({
       getInitialState: function() {
          return {
            username: null
            , password: null
          };
        }
        , userChangeHandler: function(event) {
            this.setState({username: event.target.value});
        }

        , passwordChangeHandler: function(event) {
            this.setState({password: event.target.value});
        }

       , formSubmitHandler: function(event) {
            event.preventDefault();
            console.log(this.state);
           $.ajax({
			url: 'http://127.0.0.1:8000/api/v1/login/'
			, type: 'POST'
			, data: this.state
			// , error: function(response) {
			// 	console.log(response.responseText.JSON);
			// }
			, error: function(xhr, textStatus, errorThrown) {
					var json = JSON.parse(xhr.responseText);
					for (var prop in json) {
						alert(prop + "  " + json[prop]);
					}
			}
		}).then(function(data) {
			sessionStorage.setItem('authToken', data.token);
			Router.HashLocation.push('feed');
		});
	}
    , render: function () {
        return (
            <div className="containerbody">
                <div className="contentlogin maincontent">
                    <form>
                        <fieldset>
                            <div className="col-md-1 "></div>
                            <div className="col-md-3 ">
                            </div>
                            <div className="col-md-6 text-left loginform">
                                <h1>Pentagram</h1>
                                <input type="text" name="username" placeholder="Username"
                                       onChange={this.userChangeHandler}/> <br />
                                <input type="password" name="password" placeholder="Password"
                                       onChange={this.passwordChangeHandler}/><br />
                                <button name="submit" onClick={this.formSubmitHandler}>Login</button>
                                <h4>Don't have an account? <Link to="register">Sign up</Link></h4>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
});
module.exports = loginForm;