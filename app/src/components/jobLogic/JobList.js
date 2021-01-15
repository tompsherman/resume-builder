import React, {useState, useEffect} from 'react'
import axios from 'axios'
import JobCard from './JobCard'
import Drag from '../dNdLogic/Drag'

const JobList = (props) => {
    const { roggle } = props
    const [resume, setResume] = useState([])
    const [doggle, setDoggle] = useState(false)

    useEffect(()=>{
        axios.get('http://localhost:8888/api/resume/jobs')
        .then(response => setResume(response.data))
        .catch(error => console.log(error))
    }, [roggle])

    console.log(resume)
    return (
        <div>
            <h4>list of past jobs:</h4>
            {
                resume.map(job => 
                <>
                    <Drag resume={resume}>
                        <JobCard job={job} key={job.id} doggle={doggle}/>
                    </Drag>

                </>
            )}
        </div>
    )
}

export default JobList
