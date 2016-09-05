var MarkdownEditor = React.createClass({
    getInitialState: function() {
        return {
          value: "Type some *markdown* here!"
        };
    }, 
    handleChange: function(event) {
        this.setState({
          value: this.refs.textarea.value
        });
    },
    rawMarkup: function() {
        var md = new Remarkable();
        return ({__html: md.render(this.state.value)});
    },
    render: function() {
        return (
            <div className="markdownEditor">
                <h3>Input</h3>
                <textarea ref="textarea" defaultValue={this.state.value} onChange={this.handleChange}/>
                <h3>output</h3>
                <div className="content" dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );

    }
});

ReactDOM.render(<MarkdownEditor />, document.getElementById('content'));
