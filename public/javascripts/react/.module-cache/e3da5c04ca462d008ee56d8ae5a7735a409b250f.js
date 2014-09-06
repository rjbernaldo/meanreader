/** @jsx React.DOM */

var ArticleApp = React.createClass({displayName: 'ArticleApp',
  getInitialState: function() {
    return { articles: [] };
  },
  componentDidMount: function() {
    $.ajax({
      url: 'articles',
      type: 'post',
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
    return ArticleList({data:  this.state.articles});
  }
});

function reactRender() {
  React.renderComponent(
    ArticleApp(null),
    document.getElementById('main')
  );
}

window.onload = function() {
  reactRender();
}
