/** @jsx React.DOM */

var ArticleList = React.createClass({displayName: 'ArticleList',
  render: function() {
    var articleNodes = this.props.data.map(function(article) {
      return Article({data: article})
    });

    function compare(a,b) {
      if (a.date < b.date) {
        return -1;
      } else {
        
      }
    }
    articleNodes.sort()
    return (
      React.DOM.div({className: "contain"}, 
        articleNodes 
      )
    )
  }
});
