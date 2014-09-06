/** @jsx React.DOM */

var ArticleList = React.createClass({displayName: 'ArticleList',
  render: function() {
    var articleNodes = this.props.data.map(function(article) {
      return Article({data: article})
    });
    return React.DOM.div({className: "js-masonry", 
  'data-masonry-options': "{ \"columnWidth\": 200, \"itemSelector\": \".article\" }"}, articleNodes )
  }
});
