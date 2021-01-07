import React from 'react'
import { Route } from 'react-router-dom'

import './App.css'
import JobCard from './components/JobCard'
import JobForm from './components/JobForm'
import JobList from './components/JobList'
import UpdateJobForm from './components/UpdateJobForm'

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
      <Route exact path='/edit-job/:id'>
          <UpdateJobForm />
      </Route>

    </div>
  );
};

export default App;