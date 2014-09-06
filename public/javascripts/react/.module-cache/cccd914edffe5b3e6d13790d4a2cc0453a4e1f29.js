/** @jsx React.DOM */

var Article = React.createClass({displayName: 'Article',
  getInitialState: function() {
    return { date: timeSince(this.props.data.date), img: this.props.data.image }
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
    }
    var imgStyle = {
      height: '200px',
      backgroundImage: 'url(' + this.state.img + ')',
      backgroundSize: 'cover',
      padding: '-5px'
    }
    return (
      React.DOM.div({className: "article"}, 
      React.DOM.div({style: imgStyle }), 
      React.DOM.div({style: articleStyle }, 
        React.DOM.h1(null,  this.props.data.title), 
        React.DOM.p(null,  this.props.data.author), 
        React.DOM.p(null,  this.state.date, " ago"), 
        React.DOM.p(null,  this.props.data.description)
      )
      )
    );
  }
});
