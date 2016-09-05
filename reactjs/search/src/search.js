var List = React.createClass({
	render: function() {
		var listItem = function(item) {
			return (<li key={item}> {item} </li>);
		};

		return (<ul>{this.props.items.map(listItem)}</ul>);
	}
});

var FilterSearch = React.createClass({
	getInitialState: function() {
		return {
			items: [],

			initialItems: [
				 "Apples",
		         "Broccoli",
		         "Chicken",
		         "Duck",
		         "Eggs",
		         "Fish",
		         "Granola",
		         "Hash Browns"
			]
		}
	},

	filterList: function(event) {
		var newList = this.state.initialItems;

		newList = newList.filter(function(item) {
			return (item.toLowerCase().search(event.target.value) !== -1);
		});
		
		this.setState({
			items: newList
		});
	},

	componentDidMount: function() {
		this.setState({
			items: this.state.initialItems
		});
	},

	render: function() {
		return (
			<div className="filter-list">
				<input type="text" placeholder="Search" onChange={this.filterList}/>
				<List items={this.state.items} />
			</div>
		);
	}
});

ReactDOM.render(<FilterSearch />, document.getElementById('content'));
