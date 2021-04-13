import React from 'react'

function Jobdetails({ color }) {
    return (
        <div>
            <h1 style={{ color: color }}>Job Details</h1>
            <h2>Name:<span>&nbsp;Manikandan</span></h2>
            <h2>Place:<span>&nbsp;Chennai</span></h2>
            <h2>Friend:<span>&nbsp;Mahi</span></h2>
            <h2>CompanyName:<span>&nbsp;KaayLabs</span></h2>
            <h2>Role:<span>&nbsp;MERN Stack Developer</span></h2>
        </div>
    )
}

export default Jobdetails
