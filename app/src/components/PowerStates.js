import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import ActionStatementForm from './ActionStatementForm'

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

    console.log("power statements:", powerStates)
    return (
        <div>
            <ActionStatementForm />
            {
            powerStates.map(power => 
                    <div className="joblist" key={power.power_id}>
                        <h5 className="jobitem">{power.power_id}</h5>
                        <h5 className="jobitem">{power.action}</h5>
                        <h5 className="jobitem">{power.result}</h5>
                        <h5 className="jobitem">{power.quant}</h5>
                        <h6 className="jobitem">{power.job_title}</h6>
                        <h6 className="jobitem">{power.employer}</h6>
                        <button>edit this</button>
                    </div>
                )
            }
        </div>
    )
}

export default PowerStates
