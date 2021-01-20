import React from 'react'
import {Link} from 'react-router-dom'

function Resume(){
    return (
        <div>
             <div className = "goHome"><Link to='/'><button>Go Home</button></Link></div>
            
            <h1>Resume Tab</h1>
        </div>
    )
}

export default Resume; 