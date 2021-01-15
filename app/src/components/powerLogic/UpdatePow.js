import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'

const initialValues = {
    job_id: "",
    action: "",
    result: "",
    quant: "",
    power_id: ""
}

const UpdatePow = () => {
    const { id, powID } = useParams()
    const history = useHistory()
    const [power, setPower] = useState(initialValues)
    console.log("the params:", id, useParams())

    useEffect(()=>{
        axios.get(`http://localhost:8888/api/resume/power/${powID}`)
        .then(response => setPower(response.data))
        .catch(error => console.error(error))
    }, [])

    console.log("pow", power)

    const changeHandler = (event) => {
        setPower({...power, [event.target.name]: event.target.value})
    }

    const submitHandler = (event) => {
        axios.put(`http://localhost:8888/api/resume/power/${powID}`, power)
        .then(response => console.log("response on submit:", response))
        .catch(error => console.error(error))
        
        history.push(`/job/${id}/power-statements`)
    }

    return (
        <div>
            this is the update power statements area
            <form onSubmit={submitHandler}>
                action: <input
                    name='action'
                    type='text'
                    value={power.action}
                    onChange={changeHandler}
                    placeholder='enter action verb (required)'
                />
                <br></br>
                result: <input
                    name='result'
                    type='text'
                    value={power.result}
                    onChange={changeHandler}
                    placeholder='enter achievement or result (required)'
                />
                <br></br>
                quantification: <input
                    name='quant'
                    type='text'
                    value={power.quant}
                    onChange={changeHandler}
                    placeholder='quantify achievement/result'
                />
                <br></br>
                <button>submit</button>
            </form>
        </div>
    )
}

export default UpdatePow
