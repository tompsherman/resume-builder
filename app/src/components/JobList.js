import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PowerStates from './PowerStates'
import JobCard from './JobCard'

const JobList = () => {
    const [resume, setResume] = useState([])
    const [doggle, setDoggle] = useState(false)

    const seeInfo = () => {
        setDoggle(!doggle)
    }

    useEffect(()=>{
        axios.get('http://localhost:8888/api/resume/jobs')
        .then(response => setResume(response.data))
        .catch(error => console.log(error))
    }, [])

    console.log(resume)
    return (
        <div>
            <h4>list of past jobs:</h4>
            {
                resume.map(job => 
                    <>
                        <h2 onClick={seeInfo}>{job.job_title}</h2>
                        {doggle ? <JobCard job={job} key={job.id} doggle={doggle}/> : null}
                    </>
                )
            }
            <PowerStates />
        </div>
    )
}

export default JobList
