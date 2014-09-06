/** @jsx React.DOM */

var ArticleApp = React.createClass({displayName: 'ArticleApp',
  getInitialState: function() {
    return { articles: [] };
  },
  componentDidMount: function() {
    $.ajax({
      url: 'articles',
      dataType: 'json',
      success: function(articles) {
        this.setState({ articles: articles });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err.toString());
      }.bind(this)
    })
  },
  render: function() {
    return (
      React.DOM.div(null, 
        React.DOM.h1(null, "Articles!"), 
        ArticleList({data:  this.state.articles})
      )
    )
  }
});
