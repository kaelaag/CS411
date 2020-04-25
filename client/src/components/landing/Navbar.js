import React from 'react';
import logo from '../../img/logo.png';
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand ml-5" href="#">
            <img src ={logo} alt = "logo" style = {{height: '35px '}}></img>
            </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span>
            <i className = "fas fa-bars" style={{color: 'var(--mainGreen)'}}>

            </i>

          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link mr-2" href="/login">Log in&nbsp;<i class="fas fa-sign-in-alt"></i><span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                <Link to="/register">
                Sign up
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
}
export default Navbar;
