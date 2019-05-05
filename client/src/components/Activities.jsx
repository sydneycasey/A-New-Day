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
        <div>{item.activity}</div>
      ))
    )
  }
}

export default Activities;