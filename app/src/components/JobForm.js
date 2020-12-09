import React, {useState} from 'react'
import axios from 'axios'
import ActionStatementForm from './ActionStatementForm'

const initialValues = {
    job_title: "",
    employer: "",
    start_date: "",
    end_date: "",
    img_url: "",
}

const url = "this is a url"

const JobForm = () => {

    const [job, setJob] = useState(initialValues)

    const changeHandler = (event) => {
        setJob({...job, [event.target.name]: event.target.value})
    }

    const submitHandler = (event) => {
        console.log(job)
        event.preventDefault()
        axios
            .post("http://localhost:8888/api/resume/jobs", job)
            .then(response => console.log("this is the job:", response))
            .catch(error => console.log(error))
        setJob(initialValues)
    }

    return (
        <div>
            <h4>Enter Jobs here:</h4>
            <form onSubmit={submitHandler}>
                job title: <input
                    name='job_title'
                    type='text'
                    value={job.job_title}
                    onChange={changeHandler}
                    placeholder='enter title verb (required)'
                />
                <br></br>
                employer: <input
                    name='employer'
                    type='text'
                    value={job.employer}
                    onChange={changeHandler}
                    placeholder='enter employer (required)'
                />
                <br></br>
                start date: <input
                    name='start_date'
                    type='text'
                    value={job.start_date}
                    onChange={changeHandler}
                    placeholder='this should be a month/ date drop-down'
                />
                <br></br>
                end date: <input
                    name='end_date'
                    type='text'
                    value={job.end_date}
                    onChange={changeHandler}
                    placeholder='this should be a month/ date drop-down'
                />
                <br></br>
                image: <input
                    name='img_url'
                    type='text'
                    value={job.img_url}
                    onChange={changeHandler}
                    placeholder='employer image'
                />
                <br></br>
                <button>submit</button>
            </form>
        </div>
    )
}

export default JobForm
