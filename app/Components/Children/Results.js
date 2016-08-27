// Include React 
var React = require('react');

// This is the results component
var Results = React.createClass({

	// Here we render the function
	render: function(){

		return(

			<div className="col-lg-6">
        	<div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Result</h3>
                </div>
                <div className="panel-body">
                    <h1 id="firstNumber">{this.props.num1}</h1>
                    <h1 id="operator">{this.props.operator}</h1>
                    <h1 id="secondNumber">{this.props.num2}</h1>
                    <hr />
                    <h1 id="result">{this.props.result}</h1>
                </div>
            </div>    
        </div>

		)
	}
});

// Export the component back for use in other files
module.exports = Results;