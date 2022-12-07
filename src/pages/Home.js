// import Landing from "../components/Landing";
// import styled from "styled-components";
import React from "react";
import "../nav/NavBar.css";
import NavBar from "../nav/NavBar"
import { Link } from "react-router-dom";
import { Button } from "../styles";
import "../Landing.css";
// import Footer from "../components/Footer"

function Home(){

    return(
        // <Wrapper>
        <>
        <NavBar/>
        <div className="landing" style={{
        alignItems: 'center',
        justifyContent: 'center',
        margintop:'-20px',
        float: 'center'

      }}>
      <div className="welcome-message">
        <h1 >
        Welcome to <span className="anything">LUXURO </span> <br></br>
        </h1>
        <Button as={Link} to="/new" >Reserve</Button>
      </div>
      <div className="hero-image">
        <img className = "landingimg"src="src/home.jpg" alt=""/>
      </div>
    </div>
    {/* <Footer/> */}
    </>
        // </Wrapper>
    )

}

// const Wrapper = styled.section`
//   max-width: 100%;
//   margin: 40px auto;
//   padding: 16px;
// `;

export default Home;
