import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UpPowCard from './UpPowCard'
import { useHistory, useParams } from 'react-router-dom'

const UpPowList = (props) => {
    const [powerState, setPowerState] = useState([])
    const { id } = useParams()
    const history = useHistory()

    useEffect(()=>{
        axios.get(`http://localhost:8888/api/resume/jobs/${id}/powers`)
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
                    <UpPowCard job={id} power={power}/>
                    </>
                )
            }
        </div>
    )
}

export default UpPowList
