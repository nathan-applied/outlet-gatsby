import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../images/web_logo.png"

const Header = ({ siteTitle }) => (
  <header  class="container-fluid header-html" id="mainHeader">
   <div  class="row switch-site">
      <div  class="col-xs-12 col-md-11 col-md-offset-1">
         <ul >
            <li  class="active hidden-xs">
               <a  routerlink="/" href="/">Rooms To Go Outlet</a>
            </li>
            <a  href="https://www.roomstogo.com" rel="nofollow" target="_blank">
               <li >
                  Rooms To Go
               </li>
            </a>
            <a  href="https://www.roomstogokids.com" rel="nofollow" target="_blank">
               <li >
                  Kids &amp; Teens
               </li>
            </a>
            <a  href="https://roomstogocoupons.com" target="_blank">
               <li  class="coupon-app-large hidden-xs hidden-sm hidden-md">
                  <i  class="ion-android-apps"></i>
                  <span >Rooms To Go Coupon App</span>
               </li>
            </a>
         </ul>
      </div>
   </div>
   <div  class="row logo-row">
   <div  class="col-xs-4 hidden-sm hidden-md hidden-lg">
      <span  class="hamburger-close ion-android-menu">
      </span> 
   </div>
   <div  class="col-xs-4 col-sm-12 col-md-11 col-md-offset-1 logo-pane">
   <img  alt="Rooms To Go Outlet Logo" routerlink="/" src={logo} title="Rooms To Go Outlet Logo" tabindex="0" />
   
   
   
      <div  class="outlet-phrases">
         <div  class="title">FURNITURE NEAR COST, AT COST, BELOW COST</div>
      </div>
	  
	  
	  
   
	   <div  class="hidden-xs store-region-pane container">
		  <div  class="row">
			 <div  class="col-xs-12">
				<button  class="change-location" >
				GA
				</button>
				<div  class="change-location-desc">
				   <div >CHANGE LOCATION</div>
				   <div >View Outlet products in your area<br />
					  My location: McDonough
				   </div>
				</div>
			 </div>
		  </div>
	   </div>
	   <div  class="col-xs-4 hidden-sm hidden-lg hidden-md">
		  <div  class="store-region-pane">
			 <div  class="row">
				<div  class="col-xs-12">
				   <button  class="change-location" >
				   GA
				   </button>
				   <div  class="change-location-desc">
					  <div >CHANGE LOCATION</div>
					  <div >View Outlet products in your area<br />
						 My location: McDonough
					  </div>
				   </div>
				</div>
			 </div>
		  </div>
	   </div>
   
   </div>
   
   
   
   
  </div>
</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
