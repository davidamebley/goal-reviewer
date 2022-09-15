import React from "react";

import './App.css'
import GoalList from "./components/GoalList/GoalList";

const App = () => {
  return <div className="goals-heading">
    <h2>My Short-term Goals</h2>
    <GoalList/>
  </div>;
};

export default App;
