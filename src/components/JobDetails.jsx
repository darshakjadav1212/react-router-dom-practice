import React from 'react'
import { useLoaderData } from 'react-router-dom'

const JobDetails = () => {

    const jobDetails = useLoaderData();

  return (
    <>
        <div>
            <p><b>Job Tite: </b>{jobDetails.title}</p>
        </div>
    </>
  )
}

export default JobDetails

export const jobDetailsLoader = async ({params}) => {
    const {id} = params;
    const res = await fetch('http://localhost:3000/jobs/'+id);

    if(!res.ok){
        throw new Error("Could not found the job details");
        
    }
    return res.json();
}