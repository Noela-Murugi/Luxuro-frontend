import React from 'react'
import NavBar from "../nav/NavBar"
import { Link } from "react-router-dom";
import { Button } from "../styles";

export default function JobDetails() {

    return (
        <>
        <NavBar/>

        <div className='details'>
            <h2>Station</h2>
            <div className='job-details'>
                <div className='job-details-image'>
                </div>
                <div className='job-details-content'>
                    <h2>tt</h2>
                    <h3>Job Requirement: </h3>
                    <h3>Location:</h3>
                    <h3>Salary: </h3>
                    <h3>Application Deadline:</h3>
                </div>
            </div>
            <div className='action-buttons'>
            <Button as={Link} to="/new" >Reserve</Button>
            </div>
        </div>
        </>
  )
}
