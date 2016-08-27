// Include React 
var React = require('react');

// This is the form component. 
var Number = React.createClass({
	// When a user submits... 
	handleClick: function(event) {
		this.props.click(event.target.value);
	},

	// Here we render the function
	render: function(){
		return(
			<span>
				<button className="btn btn-primary number" onClick={this.handleClick} value={this.props.number}>{this.props.number}</button>
			</span>
		)
	}
});

// Export the component back for use in other files
module.exports = Number;