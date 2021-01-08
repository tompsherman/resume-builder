import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PowerStates from './PowerStates'



const UpdatePowerStates = () => {
    // const { id } = useParams()
    
    // const [powStat, setPowStat] = useState()

    // useEffect(()=>{
    //     axios.get(`http://localhost:8888/api/resume/jobs/${id}/powers`)
    //     .then()
    //     .catch(error => console.log(error))
    // })

    return (
        <div>
            <PowerStates />
        </div>
    )
}

export default UpdatePowerStates
