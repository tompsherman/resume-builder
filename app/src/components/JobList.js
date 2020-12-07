import React, {useState, useEffect} from 'react'
import axios from 'axios'

const JobList = () => {
    const [resume, setResume] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8888/api/resume')
        .then(response => setResume(response.data))
        .catch(error => console.log(error))
    }, [])

    console.log(resume)
    return (
        <div>
            <h4>list of past jobs:</h4>
            {
                resume.map(job => 
                    <div className="joblist">
                        <h5 className="jobitem">{job.job_title}</h5>
                        <h5 className="jobitem">{job.employer}</h5>
                    </div>
                )
            }
        </div>
    )
}

export default JobList
