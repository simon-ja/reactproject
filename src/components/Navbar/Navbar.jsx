import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div><nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <img className='food' src="https://raw.githubusercontent.com/thehyperart11/Restaurant-Landing-Page-Tutorial/f0f5a8e3e77bd245f62fee19704ef547e73c67cf/src/Assets/Logo.svg" alt="" />
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div  class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav" className='father'>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item" >
            <a class="nav-link" href="#" >About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Testimonials</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
          <li class="nav-item" className='iconn'>
          <i  class="fa fa-shopping-cart" aria-hidden="true"></i>
          <button className='butt'  >Book Now</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div>
    <img  className='bimage'    src="https://github.com/thehyperart11/Restaurant-Landing-Page-Tutorial/blob/main/src/Assets/home-banner-background.png?raw=true" alt="" />
  </div>
  </div>
  )
}

export default Navbar