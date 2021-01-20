import React from 'react'
import '../css/about.css'
import Typical from 'react-typical'

function HomePage(){
    return(
        <div >
           <div className = "homepage-text">
               
               <h3>Hi;</h3>
               
               
               <h3>My name is Mike Stroner;</h3>
               
               
               
               <p className = "homePageParagraph">
                   {''}
                   <Typical
                     loop = {Infinity}
                     wrapper = 'p'
                     steps = {[
                        '//Software Engineer', 1000,
                        
                     ]}
                    />
                </p>
               <div className = "contact-button"><button>Contact Me!</button></div>

           </div>

       
        </div>
    )
}


export default HomePage
