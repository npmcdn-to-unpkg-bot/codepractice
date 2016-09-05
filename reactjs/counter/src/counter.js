var MyCounter = React.createClass({
	getInitialState: function() {
		return {
			count: 0
		}
	},

	incrementCount: function() {
		this.setState({
			count: this.state.count + 1
		});
	},

	render: function() {
		return (
			    <div className="myCounter">
				    <h1>{this.state.count}</h1>
				    <button type="button" onClick={this.incrementCount}>IncrementCount</button>
			    </div>
			   );
	}
});

ReactDOM.render(<MyCounter />, document.getElementById('content'));
