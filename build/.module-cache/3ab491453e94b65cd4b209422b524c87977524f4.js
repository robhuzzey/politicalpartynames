var React = require('react');
var _ = require('lodash');

var ukParties = require('corpora/data/governments/uk_political_parties');
var commonWords = require('corpora/data/words/common');
var verbs = require('corpora/data/words/verbs');


window.app = {};


app.initalize = function() {
  console.log(commonWords, ukParties, "here");



  var selectRandom = function(items) {
    // Choose a random thing
    return items[Math.floor(Math.random() * items.length)];
  };

  var presentVerb = function() {
    return selectRandom(verbs.verbs).present;
  };

  var pastVerb = function() {
    return selectRandom(verbs.verbs).past;
  };




  var AppContainer = React.createClass({displayName: "AppContainer",
    getInitialState: function() {
      return {
        party: null
      }
    },
    generate: function() {

      var randomParty = selectRandom(ukParties.parties);
      var randomWord = selectRandom(commonWords.commonWords);

      var randomVerb = presentVerb();

      console.log("RANDOM WORD", randomWord);

      this.setState({
        party: randomParty
      }); 
    },
    render: function() {
      return (
        React.createElement("div", {id: "app"}, 
          React.createElement("h1", null, this.state.party), 
          React.createElement("button", {onClick: this.generate}, "Generate")
        )
      )
    }
  });


  React.render( React.createElement(AppContainer, null), document.body);

}

document.addEventListener("DOMContentLoaded", function(event) { 
  try {
    window.app.initalize();
  } catch(e) {
    React.render( React.createElement("h1", null, "UNCAUGHT ERROR: ", e), document.body);
    console.log( "CAUGHT", e );
  }
});