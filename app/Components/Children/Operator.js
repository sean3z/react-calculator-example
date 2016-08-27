// Include React 
var React = require('react');

// This is the form component. 
var Operator = React.createClass({
	// When a user submits... 
	handleOperator: function(event) {
		this.props.click(event.target.value);
	},

	// Here we render the function
	render: function(){
		return(
			<span>
				<button className="btn btn-danger operator" onClick={this.handleOperator} value={this.props.operator}>{this.props.operator}</button>
			</span>
		)
	}
});

// Export the component back for use in other files
module.exports = Operator;