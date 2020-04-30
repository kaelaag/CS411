import React from 'react'
import logo from '../../img/logo.png'
import avatar from '../../img/avatar1.jpg'
function Dnavbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand ml-5" href="#">
            <img src ={logo} alt = "logo" style = {{height: '35px '}}></img>
            </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span>
            <i className = "fas fa-bars" style={{color: 'var(--mainGreen)'}}></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          {/* Favorites page */}
          <li className="nav-item active">
              <a className="nav-link mr-2" href="#">Favorites &nbsp;<i class="far fa-heart"></i><span class="sr-only">(current)</span></a>
            </li>


            {/* Profile dropdown */}
            <div class="btn-group">
              <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
                <img src ={avatar} alt = "avatar" style = {{height: '40px '}}></img>
              </button>
              <div class="dropdown-menu dropdown-menu-lg-right">
                <button class="dropdown-item" type="button">Edit profile</button>
                <button class="dropdown-item" type="button">Sign out</button>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    );
}
export default Dnavbar;
