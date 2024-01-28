

import { FaHome } from "react-icons/fa";
import { IoBook } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Topbar from './Topbar';
import React, { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



export default function NavBarComponent() {
  const navigate = useNavigate()
 const [search, setSearch] = useState("")




 



  return (<>
    
    <nav className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between d-flex" id="sidebar">
        <div className="nav-container p-3">
          <a className="navbar-brand " href="index.html">
            <img className='m-1'
              src="/Spotify_Logo.png"
              alt="Spotify_Logo"
              width="131"
              height="40"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li  style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
                  <a className="nav-item nav-link" >
                  <FaHome  />
                               &nbsp; Home
                  </a>
                </li>
                <li>
                  <a className="nav-item nav-link" href="#">
                  <IoBook />&nbsp; Your Library
                  </a>
                </li>
                <li>
                 
                  <InputGroup className="my-3 " >
        <Form.Control
          onChange={(e)=>  setSearch(e.target.value) }
      
          placeholder="song title"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2"  onClick={() =>   navigate('/search/'+search )}>
          Go
        </Button>
      </InputGroup>
                </li>
              </ul>
            </div>
          </div>
        </div>
       
        <div className="nav-btn d-flex flex-md-column w-100 align-items-center">
          <button className="btn signup-btn" type="button">Sign Up</button>
          <button className="btn login-btn" type="button">Login</button>
          <a href="#">Cookie Policy</a> |
          <a href="#"> Privacy</a>
        </div>
      </nav></>
      
  )
}

