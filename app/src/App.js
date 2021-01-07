import React from 'react'
import { Route } from 'react-router-dom'

import './App.css'
import JobCard from './components/JobCard'
import JobForm from './components/JobForm'
import JobList from './components/JobList'

const App = () => {
  return (
    <div className="App">
      <h1>Build your resume:</h1> 
      <Route exact path='/'>
          <JobList />
      </Route>  
      <Route exact path='/add'>
          <JobForm />
      </Route>
    </div>
  );
};

export default App;