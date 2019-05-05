import React from 'react';

class Activities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: []
    };
  }

  componentDidMount() {
    fetch('/activities')
    .then(response => response.json())
    .then(activities => this.setState({ activities }))
    .catch(error => console.log(error))
  }

  render() {
    console.log(this.state.activities)
    return (
      this.state.activities.map((item) => (
        <div id="activities">
        <div id="activity">{item.activity}</div>
        <div id="time">in the {item.time}</div>
        <div id="price">${item.price} or under</div>
        </div>
      ))
    )
  }
}

export default Activities;