import React from 'react';

class Shuffle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: []
    }
  }

  componentDidMount() {
    fetch('/activities')
    .then(res => res.json())
    .then(activities => this.setState({ activities }))
    .catch(error => console.log(error))
  }

}
