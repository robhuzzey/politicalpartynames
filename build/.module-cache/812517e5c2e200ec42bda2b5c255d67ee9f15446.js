var React = require('react');
var ukParties = require('corpora/data/governments/uk_political_parties');
var commonWords = require('corpora/data/words/common');



window.app = {};


app.initalize = function() {
  console.log(commonWords, ukParties, "here");



  var selectRandomParty = function() {
    // Choose a random party
    return ukParties.parties[Math.floor(Math.random() * ukParties.parties.length)];
  };


  var AppContainer = React.createClass({displayName: "AppContainer",
    chooseParty: function() {
      this.setState({
        party: selectRandomParty()
      }); 
    },
    render: function() {
      return (
        React.createElement("div", {id: "app"}, 
          React.createElement("h1", null, this.state.party), 
          React.createElement("button", {onClick: chooseParty}, "Choose Party")
        )
      )
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