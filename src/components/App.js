import React, { useEffect, useState } from "react";
// import { Switch, Route } from "react-router";
import {BrowserRouter as Route,Switch} from 'react-router-dom';
import NavBar from "./NavBar";
import Login from "../pages/Login";
import Reservations from "../pages/Reservations";
import NewReservation from "../pages/NewReservation";
import Home from "../pages/Home"
import Stations from "./Stations"
import Footer from "../components/Footer"
import Details from "../components/Details"

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return (
    <>
   <main>
    <Switch>
    <Route path="/home">
        <Home />
    </Route>
            <Details path="/details"/>

    <Route path="/stations">
        <Stations />
    </Route>
   <Login onLogin={setUser} />
   </Switch>
   <Footer/>
   </main>
   </>
   )


  return (
    <>
      {/* <Landing/> */}

      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/new">
            <NewReservation user={user} />
          </Route>
          <Route path="/">
            <Reservations />
          </Route>
        </Switch>
        <Footer/>
      </main>
    </>
  );
}

export default App;
