/** @jsx React.DOM */

var Article = React.createClass({displayName: 'Article',
  render: function() {
    return (
      React.DOM.div({className: "article"}, 
        React.DOM.h1(null,  this.props.data.title), 
        React.DOM.p(null,  this.props.data.author), 
        React.DOM.p(null,  timeSince(this.props.data.date), " ago"), 
        React.DOM.img({src:  this.props.data.image}), 
        React.DOM.p(null,  this.props.data.description)
      )
    );
  }
});
