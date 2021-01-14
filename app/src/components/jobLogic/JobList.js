import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PowerStates from './PowerStates'
import JobCard from './JobCard'
import { useHistory, useParams } from 'react-router-dom'
import Drag from './Drag'

const JobList = (props) => {
    const { roggle, setRoggle } = props
    const history = useHistory()
    const {id} = useParams()
    const [resume, setResume] = useState([])
    const [powerState, setPowerState] = useState([])
    const [doggle, setDoggle] = useState(false)

    const seeInfo = () => {
        // history.push(`/job/${id}`)
        setDoggle(!doggle)
    }

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
                    <Drag>
                        <JobCard job={job} key={job.id} doggle={doggle}/>
                    </Drag>

                </>
            )}
            {/* <PowerStates /> */}
        </div>
    )
}

export default JobList
