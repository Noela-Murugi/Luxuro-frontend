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
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/142929487.jpg?k=0279ec440bb7ac3d77719dcfa65ccdc8de8fdb37c45e11008dfda29844eab223&o=&hp=1" alt="job" />
            <div className='job-details'>
                <div className='job-details-image'>
                </div>
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
        </div>
        </>
  )
}
