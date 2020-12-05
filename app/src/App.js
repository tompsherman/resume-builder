import React from 'react'

import './App.css'
import JobCard from './components/JobCard'
import JobForm from './components/JobForm'
import JobList from './components/JobList'

const App = () => {
  return (
    <div className="App">
      <h1>Build your resume:</h1>
      <JobForm />
      <JobList />
      <JobCard />
    </div>
  );
};

export default App;