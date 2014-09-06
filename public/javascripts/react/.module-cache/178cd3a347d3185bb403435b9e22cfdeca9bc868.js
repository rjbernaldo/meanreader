/** @jsx React.DOM */

var Article = React.createClass({displayName: 'Article',
  getInitialState: function() {
    return { secondsElapsed: 0 }
  },
  tick: function() {
    this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      React.DOM.div({className: "article"}, 
        React.DOM.h1(null,  this.props.data.title), 
        React.DOM.p(null,  this.props.data.author), 
        React.DOM.p(null,  timeSince(new Date(this.props.data.date  + this.state.secondsElapsed)), " ago"), 
        React.DOM.img({src:  this.props.data.description})
      )
    );
  }
});
