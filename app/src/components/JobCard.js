import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ActionStatementForm from './ActionStatementForm'

const JobCard = (props) => {
    const [snoggle, setSnoggle] = useState(false)
    const [powerState, setPowerState] = useState([])
    const { job } = props
    console.log("job card props", job)

    useEffect(()=>{
        axios.get(`http://localhost:8888/api/resume/jobs/${job.job_id}/powers`)
        .then(response => setPowerState(response.data))
        .catch(error => console.log(error))
    }, [])

    console.log("current power state:", powerState)

    const showAct = () => {
        setSnoggle(!snoggle)
    }

    return (
        <div>
            <h3>{job.employer}</h3>
            
            {
                powerState.map(power =>
                    <>
                    <h4>{power.action} {power.result} {power.quant}</h4>
                    </>
                )
            }

            {/* <button>edit job info</button>
            {snoggle ? <ActionStatementForm /> : null}
            <button onClick={showAct}>add power statement</button>
            <button>delete</button> */}
        </div>
    )
}

export default JobCard
