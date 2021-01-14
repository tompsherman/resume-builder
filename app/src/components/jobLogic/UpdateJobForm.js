import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Route, useHistory, useParams } from 'react-router-dom'
import UpdatePowerStates from './UpdatePowerStates'


const initialValues = {
    job_title: "",
    employer: "",
    start_date: "",
    end_date: "",
    img_url: ""
}

const UpdateJobForm = (props) => {
    const history = useHistory()
    const {id} = useParams()
    const { roggle, setRoggle } = props
    console.log("job update props", id)
    const [jobby, setJobby] = useState(initialValues)
    
    useEffect(()=>{
        axios.get(`http://localhost:8888/api/resume/jobs/${id}`)
        .then(response => setJobby(response.data))
        .catch(error => console.log(error))
    }, [])

    const changeHandler = (event) => {
        setJobby({...jobby, [event.target.name]: event.target.value})
    }

    const submitHandler = (event) => {
        axios.put(`http://localhost:8888/api/resume/jobs/${id}`, jobby)
        .then(response => console.log("response on Submit", response), setRoggle(!roggle), history.push('/'))
        .catch(error => console.log(error))
    }

    const deleteJob = (event) => {
        axios.delete(`http://localhost:8888/api/resume/jobs/${id}`)
        .then(response => console.log("delete response", response), setRoggle(!roggle))
        .catch(error => console.log(error))

        history.push(`/`)
    }

    const powerPlace = (event) =>{
        history.push(`/job/${id}/power-statements`)
    }
    return (
        <div>
            <h4>update job form</h4>
            <form onSubmit={submitHandler}>
            job title: <input
                    name='job_title'
                    type='text'
                    value={jobby.job_title}
                    onChange={changeHandler}
                    placeholder='enter title verb (required)'
                />
                <br></br>
                employer: <input
                    name='employer'
                    type='text'
                    value={jobby.employer}
                    onChange={changeHandler}
                    placeholder='enter employer (required)'
                />
                <br></br>
                start date: <input
                    name='start_date'
                    type='text'
                    value={jobby.start_date}
                    onChange={changeHandler}
                    placeholder='this should be a month/ date drop-down'
                />
                <br></br>
                end date: <input
                    name='end_date'
                    type='text'
                    value={jobby.end_date}
                    onChange={changeHandler}
                    placeholder='this should be a month/ date drop-down'
                />
                <br></br>
                image: <input
                    name='img_url'
                    type='text'
                    value={jobby.img_url}
                    onChange={changeHandler}
                    placeholder='employer image'
                />
                <br></br>
                <button>update</button>
            </form>
            <button onClick={deleteJob}>delete this job</button>
            <br></br>
            <button onClick={powerPlace}>edit power statements</button>

            {/* <Route exact path='/job/:id/power-statements'>
                <UpdatePowerStates />
            </Route> */}
            
        </div>
    )
}

export default UpdateJobForm
