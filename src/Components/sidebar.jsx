import React from 'react'

import '../css/sideBar.css';

import HomeLogo from '../imgs/house.png'
import About from '../imgs/about.svg'
import ProjectLogo from '../imgs/projects.png'
import ResumeLogo from '../imgs/resume.png'






function HomePage(){

return(
    <div className = "left-nav">
        <div className = "side-nav-links">
            <a href=""><img src = {HomeLogo}></img></a>
            <a href = ""><img src = {About}></img></a>
            <a href=""><img src = {ProjectLogo}></img></a>
            <a href = ""><img src = {ResumeLogo}></img></a>
            
        </div>
    </div>
)


}



export default HomePage

//Possible text anim
//https://reactjsexample.com/a-custom-react-hook-generating-crypting-text-effect/