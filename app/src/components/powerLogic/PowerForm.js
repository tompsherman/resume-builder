import React, {useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const initialValues = {
    action: "",
    result: "",
    quant: "",
    job_id: null
}

const url = "this is a url"

const PowerForm = () => {
    const {id} = useParams()
    initialValues.job_id = id

    const [powerState, setPowerState] = useState(initialValues)

    console.log("job id ", initialValues)

    const changeHandler = (event) => {
        setPowerState({...powerState, [event.target.name]: event.target.value})
    }

    const submitHandler = (event) => {
        console.log(powerState)
        event.preventDefault()
        axios
            .post("http://localhost:8888/api/resume/power", powerState)
            .then(response => console.log("this is the power statement:", response))
            .catch(error => console.log(error))
        setPowerState(initialValues)
    }

    return (
        <div>
            <h4>this is the action statement form:</h4>
            <form onSubmit={submitHandler}>
                action: <input
                    name='action'
                    type='text'
                    value={powerState.action}
                    onChange={changeHandler}
                    placeholder='enter action verb (required)'
                />
                <br></br>
                result: <input
                    name='result'
                    type='text'
                    value={powerState.result}
                    onChange={changeHandler}
                    placeholder='enter achievement or result (required)'
                />
                <br></br>
                quantification: <input
                    name='quant'
                    type='text'
                    value={powerState.quant}
                    onChange={changeHandler}
                    placeholder='quantify achievement/result'
                />
                <br></br>
                <button>submit</button>
            </form>
        </div>
    )
}

export default PowerForm
