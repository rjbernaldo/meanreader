/** @jsx React.DOM */

var ArticleList = React.createClass({displayName: 'ArticleList',
  render: function() {
    var articleNodes = this.props.data.map(function(article) {
      return Article({data: article})
    });
    articleNodes.sort()
    return (
      React.DOM.div({className: "contain"}, 
        articleNodes 
      )
    )
  }
});
