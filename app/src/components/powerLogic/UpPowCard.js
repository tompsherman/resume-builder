import React from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const UpPowCard = (props) => {
    const { job, power } = props
    const history = useHistory()
    console.log("power", power, job)

    const showEdit = () => {
        // setSnoggle(!snoggle)
    }

    const theOrder = () => {
        let arr = power.quant.split(" ")
        let powOrd = ``
        if (arr[arr.length-1] === "of"){
            powOrd = `${power.action} ${power.quant} ${power.result}`
        } else {
            powOrd = `${power.action} ${power.result} ${power.quant}`
        }
        return powOrd
    }

    const ohCrud = (event) => {
        history.push(`/edit-job/${job}/edit-power/${power.power_id}`)
    }

    const delPow = (event) => {
        axios.delete(`http://localhost:8888/api/resume/power/${power.power_id}`)
        .then(response => console.log("delete response", response))
        .catch(error => console.log(error))

        history.push(`/job/${job}/power-statements`)
    }
    
    return (
        <div>
            <h4>{theOrder()}</h4>
            <button onClick={ohCrud}>edit this</button>
            <button onClick={delPow}>delete this</button>
        </div>
    )
}

export default UpPowCard
