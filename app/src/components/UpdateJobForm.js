import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

const initialValues = {
    job_title: "",
    employer: "",
    start_date: "",
    end_date: "",
    img_url: ""
}

const UpdateJobForm = (props) => {
    const {job} = props
    console.log("job update props", job.job_id)
    const {id} = job.job_id
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
        .then(response => console.log("response on Submit", response))
        .catch(error => console.log(error))
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
                <button>submit</button>
            </form>
        </div>
    )
}

export default UpdateJobForm
