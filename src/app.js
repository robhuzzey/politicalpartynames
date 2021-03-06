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




  var AppContainer = React.createClass({
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
        nonsense: nonsense,
        realOrFake: ""
      }); 
    },
    reveal: function() {
      this.setState({
        realOrFake: this.state.display === this.state.party ? "Real" : "Fake"
      });
    },
    render: function() {
      return (
        <div id="app">
          <h1>{this.state.display}</h1>
          <h2>{this.state.realOrFake}</h2>
          <button onClick={this.generate}>Generate</button> | <button onClick={this.reveal}>True or False?</button>
        </div>
      )
    }
  });


  React.render( <AppContainer />, document.body);

}

document.addEventListener("DOMContentLoaded", function(event) { 
  try {
    window.app.initalize();
  } catch(e) {
    React.render( <h1>UNCAUGHT ERROR: {e}</h1>, document.body);
    console.log( "CAUGHT", e );
  }
});