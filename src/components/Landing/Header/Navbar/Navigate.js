import React from 'react';
import { NavLink } from 'react-router-dom';
import Img from './img/Screenshot 2022-09-15 161254.png'
import './Navbar.css'
const Navigate = () => {
    return (
        <div className='header-container'>
            <nav className="navbar navbar-expand-lg custom-nav mx-auto w-80">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <img src={Img} className="navbar-brand" alt='Img' href="#" />
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-gray" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-gray" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-gray">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className='nav-2 container mt-4 w-80'>
                <div className=" nav-2__text">
                    <NavLink className='text-decoration-none' to={'/countries'}><p >Countries</p></NavLink>
                    <NavLink className='text-decoration-none' to={'/friend'}><p>Friends</p></NavLink>
                    <p>Development & IT</p>
                    <p>Development & IT</p>
                    <p>Development & IT</p>
                    <p>Development & IT</p>
                </div>

            </div>

        </div>
    );
};

export default Navigate;