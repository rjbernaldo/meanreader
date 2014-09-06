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
    var canvas = $('.timebox')[0];
    var context = canvas.getContext('2d');
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    var articleStyle = {
      width: '100%',
      margin: '10px',
      height: '100%'
    }
    var imgStyle = {
      height: '200px',
      backgroundImage: 'url(' + this.state.img + ')',
      backgroundSize: 'cover'
    }
    return (
      React.DOM.div({className: "article"}, 
        React.DOM.div({className: "article-image", style: imgStyle }), 
        React.DOM.div({style: articleStyle }, 
          React.DOM.h1(null,  this.props.data.title), 
          React.DOM.p(null,  this.props.data.author), 
          React.DOM.p(null, React.DOM.canvas({className: "timebox"}),  this.state.date, " ago"), 
          React.DOM.p(null,  this.props.data.description)
        )
      )
    );
  }
});
