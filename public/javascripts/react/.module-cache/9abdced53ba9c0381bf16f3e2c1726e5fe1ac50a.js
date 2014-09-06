/** @jsx React.DOM */

var Article = React.createClass({displayName: 'Article',
  getInitialState: function() {
    return { date: timeSince(this.props.data.date) }
  },
  tick: function() {
    this.setState({ date: timeSince(this.props.data.date) });
  },
  componentDidMount: function() {
    // this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    // clearInterval(this.interval);
  },
  render: function() {
    return (
      React.DOM.div({className: "article"}, 
        React.DOM.h1(null,  this.props.data.title), 
        React.DOM.p(null,  this.props.data.author), 
        React.DOM.p(null,  this.state.date, " ago"), 
        React.DOM.img({src:  this.props.data.image}), 
        React.DOM.p(null,  this.props.data.description)
      )
    );
  }
});
