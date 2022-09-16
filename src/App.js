import React from "react";
import { useState } from "react";

import './App.css'
import NewGoal from "./components/NewGoal/NewGoal";
import GoalList from "./components/GoalList/GoalList";

const App = () => {
  const [goals, setGoals] = useState([
    {id: 'mg1', text: 'Finnish my MERN stack'},
    {id: 'mg2', text: 'Refresh on AWS'},
    {id: 'mg3', text: 'Add more projects'}
  ]);

  const addNewGoalHandler = newGoal =>{ //The data for prop 'newGoal' is received from the NewGoal component
    setGoals(prevGoals => prevGoals.concat(newGoal));
  };

  return <div className="goals-heading">
    <h2>My Short-term Goals</h2>
    <NewGoal onAddGoal={addNewGoalHandler}/>
    <GoalList goals={goals}/>
  </div>;
};

export default App;
