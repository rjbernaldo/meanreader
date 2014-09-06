/** @jsx React.DOM */

var Article = React.createClass({displayName: 'Article',
  getInitialState: function() {
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
    var timeNow = Math.floor(new Date().getTime()/1000);
    var timePast = Math.floor(new Date(this.props.data.date).getTime()/1000);
    console.log(timeNow - timePast)
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
