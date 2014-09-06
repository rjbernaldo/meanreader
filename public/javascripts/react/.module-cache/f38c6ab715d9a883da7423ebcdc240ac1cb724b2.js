/** @jsx React.DOM */

var ArticleList = React.createClass({displayName: 'ArticleList',
  render: function() {
    var articleNodes = this.props.data.map(function(article) {
      return Article({data: article})
    });

    function compare(a,b) {
      if (a.props.data.date < b.props.data.date) {
        console.log(a.props.data.date + ' < ' + b.props.data.date)
        return -1;
      } else {
        console.log(a.props.data.date + ' > ' + b.props.data.date)
        return 1
      }
      return 0
    }
    articleNodes.sort(compare);

    return (
      React.DOM.div({className: "contain"}, 
        articleNodes 
      )
    )
  }
});
