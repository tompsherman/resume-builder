import React, { useState } from 'react'
import ActionStatementForm from './ActionStatementForm'

const JobCard = (props) => {
    const [snoggle, setSnoggle] = useState(false)
    const { job } = props
    console.log("job card props", job)

    const showAct = () => {
        setSnoggle(!snoggle)
    }

    return (
        <div>
            <h3>{job.employer}</h3>
            <button>edit job info</button>
            {snoggle ? <ActionStatementForm /> : null}
            <button onClick={showAct}>add power statement</button>
            <button>delete</button>
        </div>
    )
}

export default JobCard
