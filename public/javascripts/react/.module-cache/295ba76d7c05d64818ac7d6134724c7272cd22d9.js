/** @jsx React.DOM */

var Article = React.createClass({displayName: 'Article',
  getInitialState: function() {
    return { date: this.timeSince(this.props.data.date) }
  },
  timeSince: function(d) {
    var date = new Date(d).getTime();

    var final = "";
    var seconds = Math.floor((new Date().getTime() - date) / 1000);

    if (seconds > 3600) {
      var hoursAgo = Math.floor(seconds / 3600);
      seconds -= (3600 * hoursAgo);
      final += "" + Math.floor(hoursAgo) + " hours ";
    }

    if (seconds > 60) {
      var minutesAgo = Math.floor(seconds / 60);
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

    function barColor(num){
      var percentage = Math.floor(num / 2);
      switch(percentage) {
        case 1:
          return 'rgb()';
        case 2:
          return 'rgb()';
        case 3:
          return 'rgb()';
        case 4:
          return 'rgb()';
        case 5:
          return 'rgb()';
        case 6:
          return 'rgb()';
        case 7:
          return 'rgb()';
        case 8:
          return 'rgb()';
        case 9:
          return 'rgb()';
        case 10:
          return 'rgb()';
        case 11:
          return 'rgb()';
        case 12:
          return 'rgb()';
        case 13:
          return 'rgb()';
        case 14:
          return 'rgb()';
        case 15:
          return 'rgb()';
        case 16:
          return 'rgb()';
        case 17:
          return 'rgb()';
        case 18:
          return 'rgb()';
        case 19:
          return 'rgb()';
        case 20:
          return 'rgb()';
        case 21:
          return 'rgb()';
        case 22:
          return 'rgb()';
        case 23:
          return 'rgb()';
        case 24:
          return 'rgb()';
        case 25:
          return 'rgb()';
        case 26:
          return 'rgb()';
        case 27:
          return 'rgb()';
        case 28:
          return 'rgb()';
        case 29:
          return 'rgb()';
        case 30:
          return 'rgb()';
        case 31:
          return 'rgb()';
        case 32:
          return 'rgb()';
        case 33:
          return 'rgb()';
        case 34:
          return 'rgb()';
        case 35:
          return 'rgb()';
        case 36:
          return 'rgb()';
        case 37:
          return 'rgb()';
        case 38:
          return 'rgb()';
        case 39:
          return 'rgb()';
        case 40:
          return 'rgb()';
        case 41:
          return 'rgb()';
        case 42:
          return 'rgb()';
        case 43:
          return 'rgb()';
        case 44:
          return 'rgb()';
        case 45:
          return 'rgb()';
        case 46:
          return 'rgb()';
        case 47:
          return 'rgb(14, 122, 230)';
        case 48:
          return 'rgb(9, 123, 233)';
        case 49:
          return 'rgb(4, 124, 246)';
        case 50:
          return 'rgb(0, 126, 240)';

      }
    }

    if (86400 < secondsAgo)
      return (React.DOM.div(null));

    var mainStyle = {
      margin: '10px',
      width: '100%'
    }
    var articleStyle = {
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      padding: '10px'
    }
    var timeBar = {
      width: 100 - timeAgoPercentage + '%',
      backgroundColor: 'rgb(0, 204, 255)',
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
            React.DOM.h1({style: h1Style },  this.props.data.title.replace("'", "") ), 
            React.DOM.p(null,  this.props.data.author), 
            React.DOM.p(null,  this.props.data.description)
          )
        )
      )
    );
  }
});
