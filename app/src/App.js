import React, { useState } from 'react'
import { Route, useHistory } from 'react-router-dom'

import './App.css'
import JobCard from './components/JobCard'
import JobForm from './components/JobForm'
import JobList from './components/JobList'
import UpdateJobForm from './components/UpdateJobForm'
import UpdatePowerStates from './components/UpdatePowerStates'

const App = () => {
  const [roggle, setRoggle] = useState(false)
  return (
    <div className="App">
      <h1>Build your resume:</h1> 
      <JobForm roggle={roggle} setRoggle={setRoggle}/>

      <Route exact path='/'>
          <JobList roggle={roggle} setRoggle={setRoggle}/>
      </Route>  
      <Route exact path='/add'>
          <JobForm />
      </Route>
      <Route exact path='/edit-job/:id'>
          <UpdateJobForm roggle={roggle} setRoggle={setRoggle}/>
      </Route>
      <Route exact path='/job/:id/power-statements'>
        <UpdatePowerStates />
      </Route>

    </div>
  );
};

export default App;