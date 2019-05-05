import React from 'react';

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
    e.preventDefault()
    let data = {
      'activity': this.state.activity,
      'time': this.state.time
    }
    fetch('/newActivity', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
  };

  showForm() {
    this.setState({ hidden: !this.state.hidden })
  }

  render() {
    return (
      this.state.hidden ? <button id="form-btn" onClick={this.showForm}>Don't see what you want to do?</button> :
      <form id="form" onSubmit={this.handleSubmit}>
        <label>
          What do you want to do?
          <input type="text" value={this.state.activity} onChange={this.handleActivity}/>
        </label>
        <label>
          When do you want to do it?
          <input type="text" value={this.state.time} onChange={this.handleTime}/>
        </label>
        <input id="submit-btn" type="submit" value="Submit" onClick={this.showForm}/>
      </form>
    )
  }
};

export default Form;