// Include React 
var React = require('react');

// Here we include all of the sub-components
var Number = require('./Children/Number');
var Operator = require('./Children/Operator');
var Results = require('./Children/Results');

// Helper Function
var helpers = require('./utils/helpers.js');

// This is the main component. 
var Main = React.createClass({

	// Here we set a generic state associated with the number of clicks
	getInitialState: function(){
		return {
			num1: "",
			num2: "",
			operator: "",
			result: ""
		}
	},	

	// This function allows childrens to update the parent.
	setNumber: function(number){
		var newState = {};
		var numToUpdate = 'num1';
		if (this.state.operator) {
			numToUpdate = 'num2';
		}

		newState[numToUpdate] = this.state[numToUpdate] + number; 

		console.log(newState);

		this.setState(newState);
	},

	setOperator: function(operator) {
		this.setState({
			operator: operator
		})
	},

	calculate: function() {
		var result;
		var num1 = parseInt(this.state.num1);
		var num2 = parseInt(this.state.num2);

		switch(this.state.operator) {
			case '+':
				result = num1 + num2;
			break;

			case '/':
				result = num1 / num2;
			break;

			case '*':
				result = num1 * num2;
			break;

			case '%':
				result = num1 % num2;
			break;
		}

		console.log(result);

		this.setState({
			result: result
		})
	},

	// Here we render the function
	render: function(){
		var numbers = [0,1,2,3,4,5,6,7,8,9];

		return(

			<div className="container">

    <div className="row">

        <div className="col-lg-4">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Calculator</h3>
                </div>

                <div className="panel-body">
                 {
                 	numbers.map(function(number){
                    	return <Number number={number} click={this.setNumber} />;
                  	}.bind(this))
                 }
                 <br />
                 <Operator operator="+" click={this.setOperator} />
                 <Operator operator="/" click={this.setOperator} />
                 <Operator operator="*" click={this.setOperator} />
                 <Operator operator="%" click={this.setOperator} />
                 <br />
                 <button className="btn btn-success number" onClick={this.calculate}>=</button>
                </div>
            </div>
        </div>

        <Results num1={this.state.num1} num2={this.state.num2} operator={this.state.operator} result={this.state.result} />
    </div>
  </div>
		)
	}
});

// Export the component back for use in other files
module.exports = Main;