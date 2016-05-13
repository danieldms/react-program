import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

// Components
import Main from '../components/Main';
import Home from '../components/Home';
import PromptContainer from '../containers/PromptContainer';
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer';


var AppRender = React.createClass({
	render: function(){
		return (
			<Router history={hashHistory}>
				<Route path='/' component={Main}>
					<IndexRoute component={Home} />
					<Route path='playerOne' header='Player One' component={PromptContainer} />
					<Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
					<Route path='battle' component={ConfirmBattleContainer} />
				</Route>
			</Router>
		)
	}
});

module.exports = AppRender;