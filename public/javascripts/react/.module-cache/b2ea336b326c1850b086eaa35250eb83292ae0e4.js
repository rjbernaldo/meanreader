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
          return '#EF4853';
        case 2:
          return '#EA4956';
        case 3:
          return '#E54A59';
        case 4:
          return '#E04B5C';
        case 5:
          return '#DB4C5F';
        case 6:
          return '#D64D63';
        case 7:
          return '#D14E66';
        case 8:
          return '#CC4F69';
        case 9:
          return '#C7506C';
        case 10:
          return '#C3516F';
        case 11:
          return '#BE5373';
        case 12:
          return '#B95476';
        case 13:
          return '#B45579';
        case 14:
          return '#AF567C';
        case 15:
          return '#AA577F';
        case 16:
          return '#A55883';
        case 17:
          return '#A05986';
        case 18:
          return '#9C5A89';
        case 19:
          return '#975B8C';
        case 20:
          return '#925C8F';
        case 21:
          return '#8D5E93';
        case 22:
          return '#885F96';
        case 23:
          return '#836099';
        case 24:
          return '#7E619C';
        case 25:
          return '#79629F';
        case 26:
          return '#7563A3';
        case 27:
          return '#7064A6';
        case 28:
          return '#6B65A9';
        case 29:
          return '#6666AC';
        case 30:
          return '#6167AF';
        case 31:
          return '#5C69B3';
        case 32:
          return '#576AB6';
        case 33:
          return '#526BB9';
        case 34:
          return '#4E6CBC';
        case 35:
          return '#496DBF';
        case 36:
          return '#446EC3';
        case 37:
          return '#3F6FC6';
        case 38:
          return '#3A70C9';
        case 39:
          return '#3571CC';
        case 40:
          return '#3072CF';
        case 41:
          return '#2B74D3';
        case 42:
          return '#2775D6';
        case 43:
          return '#2276D9';
        case 44:
          return '#1D77DC';
        case 45:
          return '#1878DF';
        case 46:
          return '#1379E3';
        case 47:
          return '#0E7AE6';
        case 48:
          return '#097BE9';
        case 49:
          return '#047CEC';
        case 50:
          return '#007EF0';

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
      backgroundColor: barColor(timeAgoPercentage),
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
