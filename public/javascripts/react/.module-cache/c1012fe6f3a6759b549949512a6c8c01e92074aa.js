/** @jsx React.DOM */

var ArticleList = React.createClass({displayName: 'ArticleList',
  render: function() {
    var articleNodes = this.props.data.map(function(article) {
      return Article({data: article})
    });

    function compare(a,b) {
      if (new Date(a.props.data.date).getTime() < new Date(b.props.data.date).getTime()) {
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
