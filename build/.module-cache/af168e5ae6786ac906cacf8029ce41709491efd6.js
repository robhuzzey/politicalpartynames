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
      return React.createElement("div", {id: "app"}, React.createElement("button", {onclick: chooseParty}, "Choose Party"))
    }
  });



  var Words = React.createClass({displayName: "Words",
    render: function() {
      return (
        React.createElement("div", null, this.props.words.map(function(word) { return React.createElement("p", null, word) }))
      )
    }
  });

  React.render( React.createElement(Words, {words: commonWords.commonWords}), document.body);

}

document.addEventListener("DOMContentLoaded", function(event) { 
  try {
    window.app.initalize();
  } catch(e) {
    React.render( React.createElement("h1", null, "UNCAUGHT ERROR: ", e), document.body);
    console.log( "CAUGHT", e );
  }
});