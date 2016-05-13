import React from 'react';

var Main = React.createClass({
	render () {
		return(
			<div> 
				{this.props.children}
			</div>
		)
	}
});
 
module.exports = Main;