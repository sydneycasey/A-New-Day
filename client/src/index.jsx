import React from "react";
import ReactDOM from "react-dom";
import Activities from './components/Activities.jsx';
import Form from './components/Form.jsx';

const App = () => {
  return (
    <div>
    <Form />
    <Activities />
    </div>

  )
};

ReactDOM.render(<App />, document.getElementById('app'));