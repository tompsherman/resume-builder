import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ActionStatementForm from './ActionStatementForm'
import UpdateJobForm from './UpdateJobForm'

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

    // console.log("current power state:", powerState[0].quant)

    const theOrderVar = () => {
        let arr = []
        for(let i=0; i<powerState.length; i++){
        let powerOrder = ``
        let ordering = powerState[i].quant.split(" ")
        // console.log("ordering", ordering)
        if (ordering[ordering.length-1] === "of"){
            powerOrder = `${powerState[i].action} ${powerState[i].quant} ${powerState[i].result}`
        } else {
            powerOrder = `${powerState[i].action} ${powerState[i].result} ${powerState[i].quant}`
        }
        console.log("power ordering", powerOrder)
        arr.push(powerOrder)
        }
        return arr.map(statement => <div>{statement}</div>)
    }


    const showEdit = () => {
        setSnoggle(!snoggle)
    }

    
    return (
        <div>
            <h3>{job.employer}</h3>
            
            <h4>{theOrderVar()}</h4>

            {/* {
                powerState.map(power =>
                    
                    <>
                    <h4>{power.action} {power.result} {power.quant}</h4>
                    </>
                    
                    
                )
            } */}
            { snoggle ? <UpdateJobForm job={job}/> : null }
            <button onClick={showEdit}>edit job info</button>
            {/* {snoggle ? <ActionStatementForm /> : null} */}
            <button>add power statement</button>
            <button>delete</button>
        </div>
    )
}

export default JobCard
