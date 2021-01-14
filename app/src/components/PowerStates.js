import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import ActionStatementForm from './ActionStatementForm'

const initialValues = {
    power_id: "",
    job_id: "",
    action: "",
    result: "",
    quant: ""
}

const PowerStates = () => {
    const history = useHistory()
    const { id } = useParams()
    console.log("theid", id)
    const [powerStates, setPowerStates] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8888/api/resume/jobs/${id}/powers`)
        .then(response => setPowerStates(response.data))
        .catch(error => console.log(error))
    }, [])

    const changeHandler = (event) => {
        setPowerStates({...powerStates, [event.target.name]: event.target.value})
    }

    const submitHandler = (event) => {
        axios.put(`http://localhost:8888/api/resume/power/${powerStates.power_id}/`)
        .then(response => console.log("response on submit", response))
        .catch(error => console.log(error))
    }

    const deletePower = (event) => {
        console.log("delete power statement here")
    }
    console.log("power statements:", powerStates)

    return (
        <div>
            <ActionStatementForm />
            
            {/* {
            powerStates.map(power => 
                <form onSubmit={submitHandler}>
                power id: <input 
                    name='power_id'
                    type='text'
                    value={power.power_id}
                    placeholder="power id"
                />
                job id: <input 
                    name='job_id'
                    type='text'
                    value={id}
                    placeholder="job id"
                />
                <br></br>
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
                )
            } */}

            {
                powerStates.map(power => 
                    <div>
                        
                    </div>
                )
            }

        </div>
    )
}

export default PowerStates
