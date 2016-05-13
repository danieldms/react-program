import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
	render () {
		return(
			<div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
				<h1> Github Battle</h1>
				<h4>What even is jQuery?</h4>
				<Link to="/playerOne" >
					<button className="btn btn-success">Get start!</button>
				</Link>
			</div>
		)
	}
}

export default Home;