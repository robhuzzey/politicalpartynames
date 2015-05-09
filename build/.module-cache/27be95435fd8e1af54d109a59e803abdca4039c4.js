var React = require('react');
var ukParties = require('corpora/data/governments/uk_political_parties');
var commonWords = require('corpora/data/words/common');


console.log(commonWords, ukParties, "here");


var Words = React.createClass({displayName: "Words",
  render: function() {
  	return (
  		React.createElement("div", null, "FOO")
  	)
  }
});


React.render( React.createElement(Words, {words: commonWords.data}), document.body);