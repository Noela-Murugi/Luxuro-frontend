import React from 'react'
import { Link} from 'react-router-dom'
import '../nav/NavBar.css'


export default function NavBar({ user, setUser }) {
    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }
  return (
    <div>
        <div className="navbar">
            <nav>
                <input type="checkbox" name="" id="check"/>
                <label htmlFor="check" className="checkbtn"><i className="fas fa-bars"></i></label>
                <label className="logo">LUXURO</label>
                <div className="nav-menu">
                    <Link to="/home">Home</Link>
                    <Link to="/stations">Stations</Link>
                    <Link to="/new">Login</Link>
                </div>
            </nav>
        </div>
    </div>
  )
}
