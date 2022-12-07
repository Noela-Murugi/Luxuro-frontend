import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

function Landing({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    // <Wrapper>
      <>
      <Logo>
        <Link to="/">Luxuro</Link>
      </Logo>
      <Nav>
        <Button as={Link} to="/home">
          Home
        </Button>
        <Button as={Link} to="/stations">
          Stations
        </Button>
        <Button as={Link} to="/new">
          Login
        </Button>
      </Nav>

    </>
  );
}


const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: deeppink;
  margin: 0;
  line-height: 1;
  background-color:lightblue;
  padding:20px;
  margin-top:-60px;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 40px;
  position: center;
  right: 8px;
  background-color:lightblue;
  margin-top:-60px;
  padding:24px;
  align-items:center;
`;

export default Landing;
