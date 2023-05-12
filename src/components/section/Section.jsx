import React from 'react'
import './section.css'

const Section = () => {
  return (
    <div>
        <h3 className='head'> Your Favourite Food  <br />
Delivered Hot & <br />
Fresh</h3>
    <p className='firstp'>
    Healthy switcher chefs do all the prep work, like <br />
peeding, chopping & marinating, so you can cook <br />
a fresh food.
    </p>
        <img className='firstimage' src="https://github.com/thehyperart11/Restaurant-Landing-Page-Tutorial/blob/main/src/Assets/home-banner-image.png?raw=true" alt="" />
    <button className='butt2'> Order Now <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
    </button>
    </div>
  )
}

export default Section