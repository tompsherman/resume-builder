import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Drag from '../dNdLogic/Drag'
import PowerList from '../powerLogic/PowerList'

const JobCard = (props) => {
    const [snoggle, setSnoggle] = useState(false)
    const [powerState, setPowerState] = useState([])
    const { job } = props
    const history = useHistory()
    console.log("job card props", job)

    // useEffect(()=>{
    //     axios.get(`http://localhost:8888/api/resume/jobs/${job.job_id}/powers`)
    //     .then(response => setPowerState(response.data))
    //     .catch(error => console.log(error))
    // }, [])

    // const theOrderVar = () => {
    //     let arr = []
    //     for(let i=0; i<powerState.length; i++){
    //     let powerOrder = ``
    //     let ordering = powerState[i].quant.split(" ")
    //     // console.log("ordering", ordering)
    //     if (ordering[ordering.length-1] === "of"){
    //         powerOrder = `${powerState[i].action} ${powerState[i].quant} ${powerState[i].result}`
    //     } else {
    //         powerOrder = `${powerState[i].action} ${powerState[i].result} ${powerState[i].quant}`
    //     }
    //     console.log("power ordering", powerOrder)
    //     arr.push(powerOrder)
    //     }
    //     return arr.map(statement => <div>{statement}</div>)
    // }


    const showEdit = () => {
        setSnoggle(!snoggle)
    }

    const ohCrud = (event) => {
        history.push(`/edit-job/${job.job_id}`)
    }

    return (
        <Drag>
            <div onClick={showEdit}>
                <h2>{job.job_title}</h2>
                {
                    snoggle ? 
                    <>
                        <h3>{job.employer}</h3>
                        
                        <PowerList job={job}/>
                        {/* <h4>{theOrderVar()}</h4> */}
                        
                        <button onClick={ohCrud}>make changes</button>
                    
                    </>   
                    : null
                }
            </div>
        </Drag>
    )
}

export default JobCard
