/**
 * Created by Catalina Marcu on 7/28/2016.
 */
"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Header = require('./common/Header');

var feed = React.createClass({
	getInitialState: function(){
         document.body.style.background = "url('') no-repeat fixed center";
			return {
				images: [

				]
			};
		}
	, componentWillMount: function() {
        var self = this;
        $.ajax({
            url: 'http://127.0.0.1:8000/api/v1/photos/',
                headers: {
                "Authorization": sessionStorage.authToken
            }
            , type: 'GET'
            , error: function(xhr, textStatus, errorThrown) {

            }
        }).then(function(data) {
            self.setState({images: data});
        });
    }
	, onCommentHandler: function (event) {
        var photoID = event.target.dataset.id;
        Router.HashLocation.push('photo/' + photoID);
        // console.log('Comment button was pressed!');
    }
    , likebutton: function (event) {
        $('.like').click(function () {
            var obj = $(this);
            if (obj.data('liked')) {
                obj.data('liked', false);
                obj.html('<span class="large material-icons nolike">nothumb_up</span>');
            }
            else {
                obj.data('liked', true);
                obj.html('<span class="large material-icons liked">thumb_up</span>');
            }
        });
    }   

	, render: function() {
        var self = this;
        return (
            <div>
                <Header/>
            <div className="containerfeed">
                <div className="logofeed">

                </div>
                {this.state.images.map(function (item, index) {
                    return (
                        <div className="containerpost col-md-6 image-frame" key ={item.id} >

                             <a href ={'#/photo/' + item.id}>
                             <img src={'http://127.0.0.1:8000' + item.photo} id={'image-' + item.id} data-id={item.id} width="100%" height="100%"/>
                             </a>

                            <div className="footer-toolbar-image"></div>
                            <div className="all-icons">
                            <a className="like" role = "button" >
                                <span className="large material-icons nolike" onClick={self.likebutton}>thumb_up</span>{item[2]}</a>
                            </div>

                            <div className="well comment-panel">
                                <input type="text" className="comment-input" aria-label="Add a comment…" placeholder="Add a comment…"></input>

                            </div>
                        </div>
                    );
                })}
               <button className="butonfeed">Click to add photos</button>

            </div>
            </div>
                );
    }
});
module.exports = feed;