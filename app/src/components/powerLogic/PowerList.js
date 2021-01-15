import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import PowerCard from './PowerCard'

const PowerList = (props) => {
    const [powerState, setPowerState] = useState([])
    const { job } = props
    const history = useHistory()

    useEffect(()=>{
        axios.get(`http://localhost:8888/api/resume/jobs/${job.job_id}/powers`)
        .then(response => setPowerState(response.data))
        .catch(error => console.log(error))
    }, [])

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

    return (
        <div>
            power statements:
            {
                powerState.map(power =>
                    <>
                    <PowerCard job={job} power={power}/>
                    </>
                )
            }
        </div>
    )
}

export default PowerList
