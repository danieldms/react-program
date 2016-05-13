import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import gitHubHelpers from '../utils/gitHubHelpers';

var ConfirmBattleContainer = React.createClass({
	getInitialState () {
		return {
			isLoading: true,
			playersInfo: []
		}
	},
	componentDidMount () {
		var query = this.props.location.query;
		gitHubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
		.then(
			function(players){
				this.setState({
					isLoading: false,
					playersInfo: [players[0], players[1]]
				});
			}.bind(this)
		);
	},
	render () {
		return(
			<ConfirmBattle
				isLoading={this.state.isLoading}
				playersInfo={this.state.playersInfo} />
		)
	}
});

module.exports = ConfirmBattleContainer;