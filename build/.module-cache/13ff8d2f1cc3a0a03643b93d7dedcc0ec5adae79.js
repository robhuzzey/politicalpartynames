var React = require('react');
var ukParties = require('corpora/data/governments/uk_political_parties');
var commonWords = require('corpora/data/words/common');



window.app = {};


app.initalize = function() {
  console.log(commonWords, ukParties, "here");



  var chooseParty = function() {
    console.log("PARTIES",ukParties);
  };


  var AppContainer = React.createClass({displayName: "AppContainer",
    render: function() {
      return React.createElement("div", {id: "app"}, React.createElement("button", {onClick: this.props.chooseParty}, "Choose Party"))
    }
  });


  React.render( React.createElement(AppContainer, {chooseParty: chooseParty}), document.body);

}

document.addEventListener("DOMContentLoaded", function(event) { 
  try {
    window.app.initalize();
  } catch(e) {
    React.render( React.createElement("h1", null, "UNCAUGHT ERROR: ", e), document.body);
    console.log( "CAUGHT", e );
  }
});