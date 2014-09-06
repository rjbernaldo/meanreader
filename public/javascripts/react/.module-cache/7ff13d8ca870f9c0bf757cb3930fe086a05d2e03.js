/** @jsx React.DOM */

var Article = React.createClass({displayName: 'Article',
  getInitialState: function() {
    return { date: timeSince(this.props.data.date) }
  },
  tick: function() {
    this.setState({ date: timeSince(this.props.data.date) });
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    var articleStyle = {
      backgroundImage: 'url(' + this.props.data.image + ')'
    }
    console.log(this.props.data.image);
    return (
      React.DOM.div({className: "article"}, 
        React.DOM.h1({style: articleStyle },  this.props.data.title), 
        React.DOM.p(null,  this.props.data.author), 
        React.DOM.p(null,  this.state.date, " ago"), 
        React.DOM.p(null,  this.props.data.description)
      )
    );
  }
});
