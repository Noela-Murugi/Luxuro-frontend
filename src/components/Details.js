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
            {/* <h2>Station</h2> */}
                <div className='job-details-content'>
                    <h3>Capacity: 20 - 50 people </h3>
                    <h3>Features:<br/>
                        * Flat screen Tv <br/>
                        * A working area <br/>
                        * Free Wi-Fi<br/>
                        </h3>
                    <h3>Location: Nairobi</h3>
                </div>
            </div>
            <div className='action-buttons'>
            <Button as={Link} to="/new" >Reserve</Button>
            </div>
        {/* </div> */}
        </>
  )
}
