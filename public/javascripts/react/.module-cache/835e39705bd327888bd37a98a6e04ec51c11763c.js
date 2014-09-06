/** @jsx React.DOM */

var Article = React.createClass({displayName: 'Article',
  getInitialState: function() {
    function timeSince(d) {
      date = new Date(d).getTime();

      var final = "";
      var seconds = Math.floor((new Date().getTime() - date) / 1000);

      var yearsAgo = Math.floor(seconds / 31536000);
      seconds -= (31536000 * yearsAgo)
      if (yearsAgo > 1) {
        final += yearsAgo + " years ";
      }

      var monthsAgo = Math.floor(seconds / 2592000);
      seconds -= (2592000 * monthsAgo);
      if (monthsAgo > 1) {
        final += monthsAgo + " months ";
      }

      var daysAgo = Math.floor(seconds / 86400);
      seconds -= (86400 * daysAgo);
      if (daysAgo > 1) {
        final += daysAgo + " days ";
      }

      var hoursAgo = Math.floor(seconds / 3600);
      seconds -= (3600 * hoursAgo);
      if (hoursAgo > 1) {
        final += hoursAgo + " hours ";
      }

      var minutesAgo = Math.floor(seconds / 60);
      seconds -= (60 * minutesAgo);
      if (minutesAgo > 1) {
        final += minutesAgo + " minutes ";
      }
      final += Math.floor(seconds) + " seconds";
      console.log(Math.floor((new Date().getTime() - date) / 1000), final);
      return final;
    }
    
    return { date: timeSince(this.props.data.date), img: this.props.data.image }
  },
  tick: function() {
    this.setState({ date: timeSince(this.props.data.date) });
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    // console.log(100 / total * current)
    // console.log(100 / (((new Date().getTime() - new Date(this.props.data.date).getTime()) / 1000) * 86400));
    var timeNow = new Date().getTime();
    var timePast = new Date(this.props.data.date).getTime();
    var timeAgo = timeNow - timePast;
    var secondsAgo = Math.floor(timeAgo / 1000);
    var timeAgoPercentage = Math.floor(100 / 86400 * secondsAgo);
    // console.log(new Date() - new Date(this.props.data.date));
    // console.log(this.props.data.date, secondsAgo, timeSince(this.props.data.date))
    var mainStyle = {
      width: '100%'
    }
    var articleStyle = {
      width: '100%',
      margin: '10px',
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
      backgroundImage: 'url(' + this.state.img + ')',
      backgroundSize: 'cover'
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
