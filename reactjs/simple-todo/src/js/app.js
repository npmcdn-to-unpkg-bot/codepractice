
var TodoList = React.createClass({

    render: function() {
        var createItem = function(item) {
            return (<li key={item.id}>{item.text}</li>);
        };
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
});

var TodoApp = React.createClass({
    getInitialState: function() {
        return {items: [], text: ''};
    },
    
    onChange: function(e) {
        var todo = e.target.value;
        if (todo) {
            this.setState({text: e.target.value});
        }
    },
    
    handleSubmit: function(e) {
        e.preventDefault();
        var todo = this.state.text;
        if (todo) {
            var updatedList = this.state.items.concat([{text: todo, id: Date.now(), checked: false}]);
            this.setState({items: updatedList, text: ''});
        }
    },
    
    render: function() {
        return (
            <div>
                <h3>ToDo</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.onChange} value={this.state.text}/>
                    <button>{'Add #' + (this.state.items.length + 1) }</button>
                </form>                     
            </div>
        );
    }
});

ReactDOM.render(<TodoApp />, document.getElementById('content'));
