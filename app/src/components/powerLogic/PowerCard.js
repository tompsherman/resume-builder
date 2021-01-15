import React from 'react'
import { useHistory } from 'react-router-dom'

const PowerCard = (props) => {
    const { job, power } = props
    const history = useHistory()
    console.log("power", power)

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
        history.push(`/edit-job/${job.job_id}/edit-power/${power.power_id}`)
    }

    return (
        <div>
            <h4>{theOrder()}</h4>
            {/* <button onClick={ohCrud}>edit this</button> */}
        </div>
    )
}

export default PowerCard
