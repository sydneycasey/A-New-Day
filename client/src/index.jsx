import React from "react";
import ReactDOM from "react-dom";
import Activities from './components/Activities.jsx';

const App = () => {
  return (
    <Activities />
  )
};

ReactDOM.render(<App />, document.getElementById('app'));