import React, {useState, useEffect} from 'react'
import axios from 'axios'

const PowerStates = () => {
    const [powerStates, setPowerStates] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8888/api/resume/jobs/powers')
        .then(response => setPowerStates(response.data))
        .catch(error => console.log(error))
    }, [])

    return (
        <div>
            {
            powerStates.map(power => 
                    <div className="joblist" key={power.id}>
                        <h5 className="jobitem">{power.action}</h5>
                        <h5 className="jobitem">{power.result}</h5>
                        <h5 className="jobitem">{power.quant}</h5>
                        <h6 className="jobitem">{power.job_title}</h6>
                        <h6 className="jobitem">{power.employer}</h6>
                    </div>
                )
            }
        </div>
    )
}

export default PowerStates
