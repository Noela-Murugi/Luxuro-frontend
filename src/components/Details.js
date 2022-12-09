import React from 'react'
import NavBar from "../nav/NavBar"
import { Link } from "react-router-dom";
import { Button } from "../styles";
import '../Details.css'

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
                    <h3>Capacity: </h3>
                    <h3>Features: </h3>
                    <h3>Location:</h3>
                    <h3>Reservation: </h3>
                </div>
            </div>
            <div className='action-buttons'>
            <Button as={Link} to="/new" >Reserve</Button>
            </div>
        </div>
        </>
  )
}
