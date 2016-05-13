import React from 'react';

function puke(object){
	return <pre>{JSON.stringify(object, null, ' ')} </pre>
}

// Stateless
function ConfirmBattle(props){
	return (
		props.isLoading == true 
		? <p> Loading </p>
		: <div> Confirm Batte: {puke(props)} </div>
	)
}

module.exports = ConfirmBattle;
