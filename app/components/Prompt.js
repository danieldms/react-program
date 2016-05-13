var React = require('react');
var PropTypes = React.PropTypes;

function Prompt(props) {
	console.log(props);

	return (
		<div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
			<h1> {props.header} </h1>
			<div className="col-sm-12">
				<form onSubmit={props.onSubmitUser}>
					<div className="form-group">
						<input 
							className="form-control" 
							type="text" 
							placeholder="Github Name"
							onChange={props.onUpdateUser}
							value={props.username} />
					</div>

					<button className="btn btn-block btn-success" type="submit">
						Continue
					</button>
				</form>
			</div>
		</div>
	)
}

Prompt.propTypes = {
	header: PropTypes.string.isRequired,
	onUpdateUser: PropTypes.func,
	onSubmitUser: PropTypes.func,
	username: PropTypes.string.isRequired
}

module.exports = Prompt;