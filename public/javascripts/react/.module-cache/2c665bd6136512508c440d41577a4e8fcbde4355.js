/** @jsx React.DOM */

var Article = React.createClass({displayName: 'Article',
  getInitialState: function() {
    return { date: this.timeSince(this.props.data.date) }
  },
  timeSince: function(d) {
    var date = new Date(d).getTime();

    var final = "";
    var seconds = Math.floor((new Date().getTime() - date) / 1000);

    var hoursAgo = seconds / 3600;
    if (hoursAgo > 1) {
      seconds -= (3600 * hoursAgo);
      final += "" + Math.floor(hoursAgo) + " hours ";
    }

    var minutesAgo = seconds / 60;
    if (minutesAgo > 1) {
      seconds -= (60 * minutesAgo);
      final += "" + Math.floor(minutesAgo) + " minutes ";
    }

    final += Math.floor(seconds) + " seconds";
    return final;
  },
  tick: function() {
    this.setState({ date: this.timeSince(this.props.data.date) });
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    var timeNow = new Date().getTime();
    var timePast = new Date(this.props.data.date).getTime();
    var timeAgo = timeNow - timePast;
    var secondsAgo = Math.floor(timeAgo / 1000);
    var timeAgoPercentage = Math.floor(100 / 86400 * secondsAgo);
    console.log(secondsAgo,86400 < secondsAgo )
    if (86400 < secondsAgo)
      return (React.DOM.div(null))
    var mainStyle = {
      margin: '10px',
      width: '100%'
    }
    var articleStyle = {
      width: '100%',
      height: '100%',
      backgroundColor: 'white'
    }
    var timeBar = {
      width: '100%',
      backgroundColor: 'black',
      height: '17px'
    }
    var imgStyle = {
      height: '200px',
      backgroundImage: 'url(' + this.props.data.image + ')',
      backgroundSize: 'cover'
    }
    var h1Style = {
      marginTop: '-1px'
    }
    var timeStyle = {
      position: 'absolute',
      textAlign: 'right',
      color: 'white',
      position: 'absolute',
      height: '17px'
    }
    return (
      React.DOM.div({style: mainStyle }, 
        React.DOM.div({style: timeStyle },  this.state.date, " ago"), 
        React.DOM.div({style: timeBar }), 
        React.DOM.div({className: "article"}, 
          React.DOM.div({style: imgStyle }), 
          React.DOM.div({style: articleStyle }, 
            React.DOM.h1(null,  this.props.data.title.replace("'", "") ), 
            React.DOM.p(null,  this.props.data.author), 
            React.DOM.p(null,  this.props.data.description)
          )
        )
      )
    );
  }
});
