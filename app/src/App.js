import React, { useState } from 'react'
import { Route, useHistory } from 'react-router-dom'

import './App.css'
import JobCard from './components/JobCard'
import JobForm from './components/JobForm'
import JobList from './components/JobList'
import UpdateJobForm from './components/UpdateJobForm'
import UpdatePowerStates from './components/UpdatePowerStates'

const App = () => {
  const history = useHistory()
  const [roggle, setRoggle] = useState(false)

  const goHome = (event) => {
    history.push('/')
  }

  return (
    <div className="App">
      <div onClick={goHome}>
        <h1>Build your resume:</h1>
      </div> 
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