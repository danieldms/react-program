var React = require('react');
var ReactDom = require('react-dom');

// Components 
var AppRouter = require('./config/routes');

ReactDom.render( <AppRouter />, document.getElementById('app'));