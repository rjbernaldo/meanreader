/** @jsx React.DOM */

var ArticleList = React.createClass({
  render: function() {
    var articleNodes = this.props.data.map(function(article) {
      return <Article data={article} />
    });

    function compare(a,b) {
      if (new Date(a.props.data.date).getTime() > new Date(b.props.data.date).getTime()) {
        return -1;
      } else {
        return 1
      }
      return 0
    }
    articleNodes.sort(compare);

    return (
      <div className="contain">
        { articleNodes }
      </div>
    )
  }
});
