import React from 'react';

class Activities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      morning: [],
      afternoon: [],
      evening: []
    };
  };

  componentDidMount() {
    fetch('/morning')
    .then(response => response.json())
    .then(morning => this.setState({ morning }))
    .catch(error => console.log(error));

    fetch('/afternoon')
    .then(response => response.json())
    .then(afternoon => this.setState({ afternoon }))
    .catch(error => console.log(error));

    fetch('/evening')
    .then(response => response.json())
    .then(evening => this.setState({ evening }))
    .catch(error => console.log(error))
  }

  render() {
    console.log(this.state.activities)
    return (
      <div id="activities">
      {this.state.morning.map((item) => (
        <div id="morning">
        <div id="time">this {item.time}:</div>
        <div id="activity">{item.activity}</div>
        </div>
      ))}
      {this.state.afternoon.map((item) => (
        <div id="afternoon">
        <div id="time">this {item.time}:</div>
        <div id="activity">{item.activity}</div>
        </div>
      ))}
      {this.state.evening.map((item) => (
        <div id="evening">
        <div id="time">this {item.time}:</div>
        <div id="activity">{item.activity}</div>
        </div>
      ))}
      </div>
    )
  }
}

export default Activities;