import React, { Fragment } from 'react';
import {ReactNavbar} from "overlay-navbar";
import {FaUserAlt} from 'react-icons/fa'
import logo from '../../images/logo.png';
import './Header.css';


const Header = () => {
    const options = {
        navColor1:"#306d90",
        burgerColor:"#0077BB",
        burgerColorHover:"#a18322",
        logo,
        logoHoverColor:"hsl(250, 100%, 75%)",
        logoWidth:"140px",
        link1Text:"Home",
        link2Text:"Team",
        link3Text:"About",
        link4Text:"Contact",
        link1Url:"/",
        link2Url:"https://thelearninghub.pk/wp/our-team/",
        link3Url:"https://thelearninghub.pk/wp/about-us/",
        link4Url:"/contact",
        link1Color:"black",
        link1ColorHover:"white",
        link1Size:"1.5rem",
        profileIcon:	true,
        ProfileIconElement	: FaUserAlt,
        profileIconUrl:"/my-profile",
        profileIconColor:"black",
        profileIconColorHover:"white",
        nav2justifyContent:"flex-end",
        link1Padding:"4vmax",
        link2Padding:"0vmax",
        link3Padding:"0vmax",
        link4Padding:"4vmax",
        nav3justifyContent:"flex-start",
        
        
    }
  return (
    <Fragment >
       <ReactNavbar {...options} />
    </Fragment>
  )
}

export default Header