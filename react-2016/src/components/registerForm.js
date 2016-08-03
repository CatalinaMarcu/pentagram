/**
 * Created by Catalina Marcu on 7/25/2016.
 */
"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var registerForm = React.createClass({
        getInitialState: function() {
          return {
            username: null
            , email: null
           , password: null
          };
        }
        , userChangeHandler: function(event) {
            this.setState({username: event.target.value});
        }
        , emailChangeHandler: function(event) {
            this.setState({email: event.target.value});
        }

        , passwordChangeHandler: function(event) {
            this.setState({password: event.target.value});
        }

        , formSubmitHandler: function(event) {
            event.preventDefault();
            console.log(this.state);
            $.ajax({
              url: 'http://127.0.0.1:8000/api/v1/users/'
              , type: 'POST'
              , data: this.state
              , error: function (response) {
                    console.log(response.responseJSON);
                }
            }).then(function(data) {
              sessionStorage.setItem('authToken', data.token);
                Router.HashLocation.push("login");
              //console.log(data.token);
              //redirect to homepage
            });
        }
    , render: function () {
        return (
            <div className="containerbody">
                <div className="contentlogin maincontent">
                    <form>
                        <div className="col-md-1 "></div>
                        <div className="col-md-3 ">
                        </div>
                        <div className="col-md-6 text-left loginform">
                            <h1>Pentagram</h1>
                            <input type="text" name="username" placeholder="Username"
                                   onChange={this.userChangeHandler}/> <br />
                            <input type="password" name="password" placeholder="Password"
                                   onChange={this.passwordChangeHandler}/><br />
                            <input type="email" name=" email" placeholder="Email"
                                   onChange={this.emailChangeHandler}/><br />
                            <button name="submit" onClick={this.formSubmitHandler}>Register</button>
                            <br />
                            <h4>Have an account? <Link to="login">Log in</Link></h4>
                        </div>
                        <div className="col-md-2 "></div>
                    </form>
                </div>
            </div>
        );
    }

});

module.exports = registerForm;