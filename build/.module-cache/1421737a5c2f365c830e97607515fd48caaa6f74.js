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
        display: null,
        party: null,
        nonsense: null,
        realOrFake: null
      }
    },
    generate: function() {

      var randomParty = selectRandom(ukParties.parties);
      var randomWord = selectRandom(commonWords.commonWords);

      var randomPresentVerb = presentVerb();
      var randomPastVerb = pastVerb();

      var nonsense = [randomWord, randomPresentVerb, randomPastVerb].join(' ');

      var trick = Math.random() >= 0.5;

      this.setState({
        display: trick ? nonsense : randomParty,
        party: randomParty,
        nonsense: nonsense
      }); 
    },
    reveal: function() {
      this.setState({
        realOrFake: this.state.display === this.state.party ? "Real" : "Fake"
      });
    },
    render: function() {
      return (
        React.createElement("div", {id: "app"}, 
          React.createElement("h1", null, this.state.display), 
          React.createElement("h2", null, this.state.realOrFake), 
          React.createElement("button", {onClick: this.generate}, "Generate"), " | ", React.createElement("button", {onClick: this.reveal}, "True or False?")
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