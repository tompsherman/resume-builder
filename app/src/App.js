import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Route, useHistory } from 'react-router-dom'

import './App.css'
import DropList from './components/dNdLogic/DropList'
import JobForm from './components/jobLogic/JobForm'
import JobList from './components/jobLogic/JobList'
import UpdateJobForm from './components/jobLogic/UpdateJobForm'
import PowerList from './components/powerLogic/PowerList'
import UpdatePow from './components/powerLogic/UpdatePow'
import UpPowList from './components/powerLogic/UpPowList'

const App = () => {
  const history = useHistory()
  const [roggle, setRoggle] = useState(false)
  const [jobs, setJobs] = useState([])
  const [powers, setPowers] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:8888/api/resume/jobs')
    .then(response => setJobs(response.data))
    .catch(error => console.log(error))
  }, [])

  useEffect(()=>{
    axios.get('http://localhost:8888/api/resume/power')
    .then(response => setPowers(response.data))
    .catch(error => console.log(error))
  }, [])

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
          <div className="drag-holder">
            <div className="inactive">
                <JobList roggle={roggle} setRoggle={setRoggle}/>
            </div>
            <div className="droppable">
              <DropList />
            </div>
          </div>
      </Route>  
      <Route exact path='/add'>
          <JobForm />
      </Route>
      <Route exact path='/edit-job/:id'>
          <UpdateJobForm job={jobs} roggle={roggle} setRoggle={setRoggle}/>
      </Route>
      <Route exact path='/job/:id/power-statements'>
          <UpPowList />
      </Route>
      <Route exact path='/edit-job/:id/edit-power/:powID'>
        <UpdatePow />
      </Route>    
    </div>
  );
};

export default App;