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
    var timeAgoPercentage = 100 / 86400 * secondsAgo;

    function barColor(num){
      var percentage = Math.floor(num / 2);
      switch(percentage) {
        case 49:
          return '#EF4853';
        case 48:
          return '#EA4956';
        case 47:
          return '#E54A59';
        case 46:
          return '#E04B5C';
        case 45:
          return '#DB4C5F';
        case 44:
          return '#D64D63';
        case 43:
          return '#D14E66';
        case 42:
          return '#CC4F69';
        case 41:
          return '#C7506C';
        case 40:
          return '#C3516F';
        case 39:
          return '#BE5373';
        case 38:
          return '#B95476';
        case 37:
          return '#B45579';
        case 36:
          return '#AF567C';
        case 35:
          return '#AA577F';
        case 34:
          return '#A55883';
        case 33:
          return '#A05986';
        case 32:
          return '#9C5A89';
        case 31:
          return '#975B8C';
        case 30:
          return '#925C8F';
        case 29:
          return '#8D5E93';
        case 28:
          return '#885F96';
        case 27:
          return '#836099';
        case 26:
          return '#7E619C';
        case 25:
          return '#79629F';
        case 24:
          return '#7563A3';
        case 23:
          return '#7064A6';
        case 22:
          return '#6B65A9';
        case 21:
          return '#6666AC';
        case 20:
          return '#6167AF';
        case 19:
          return '#5C69B3';
        case 18:
          return '#576AB6';
        case 17:
          return '#526BB9';
        case 16:
          return '#4E6CBC';
        case 15:
          return '#496DBF';
        case 14:
          return '#446EC3';
        case 13:
          return '#3F6FC6';
        case 12:
          return '#3A70C9';
        case 11:
          return '#3571CC';
        case 10:
          return '#3072CF';
        case 9:
          return '#2B74D3';
        case 8:
          return '#2775D6';
        case 7:
          return '#2276D9';
        case 6:
          return '#1D77DC';
        case 5:
          return '#1878DF';
        case 4:
          return '#1379E3';
        case 3:
          return '#0E7AE6';
        case 2:
          return '#097BE9';
        case 1:
          return '#047CEC';
        case 0:
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
      backgroundImage: 'url(' + this.props.data.image + ') no-repeat center',
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
