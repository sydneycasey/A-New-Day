import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: '',
      time: '',
      hidden: true
    };
    this.handleActivity = this.handleActivity.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  handleActivity(e) {
    this.setState({ activity: e.target.value })
  }

  handleTime(e) {
    this.setState({ time: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = [this.state.activity, this.state.time];

    axios.post('/newActivity', data)
    .then(res => console.log(res))
    .then(body => console.log('successfully inserted', body))
    .catch(error => console.log(error));

    this.setState( {hidden: true });
  };

  showForm() {
    this.setState({ hidden: !this.state.hidden })
  }

  render() {
    return (
      this.state.hidden ? <button id="form-btn" onClick={this.showForm}>+</button> :
      <form id="form" onSubmit={this.handleSubmit}>
        <label>
          What do you want to do?
          <input id="activity-text" type="text"  value={this.state.activity} onChange={this.handleActivity}/>
        </label>
        <label>
          When do you want to do it?
          <input id="time-text" type="text" value={this.state.time} onChange={this.handleTime}/>
        </label>
        <input id="submit-btn" type="submit" value="+"/>
      </form>
    )
  }
};

export default Form;