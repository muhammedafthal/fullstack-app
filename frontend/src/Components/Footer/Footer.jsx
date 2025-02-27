import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
	<div className='footer' id='footer'>
	  <div className="footer-content">
		<div className="footer-content-left">
			<img src={assets.logo} alt="" />
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat consectetur maiores, assumenda sint nemo quas vel expedita saepe ut iure dolor odit totam, quo odio. Iure laudantium consequuntur repellendus totam?</p>
			<div className="footer-social-icon">
				<img src={assets.facebook_icon} alt="" />
				<img src={assets.twitter_icon} alt="" />
				<img src={assets.linkedin_icon} alt="" />
			</div>
		</div>
		<div className="footer-content-center">
			<h2>COMPANY</h2>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Delivery</li>
				<li>Privacy policy</li>
			</ul>
		</div>
		<div className="footer-content-right">
			<h2>GET IN TOUCH</h2>
			<ul>
				<li>+91-1010-252-2020</li>
				<li>contact@tomato.com</li>
			</ul>
		</div>
	  </div>
	  <hr />
	  <p className='footer-copyright'>Copyright 2025 © Tomato.com - All Right Reserved.</p>
	</div>
  )
}

export default Footer
