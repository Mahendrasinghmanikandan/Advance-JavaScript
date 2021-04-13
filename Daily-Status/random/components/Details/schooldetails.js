import React from 'react'

function Schooldetails({ stitle, onMouseLeave, datas }) {

    return (
        <div>
            <h1>{stitle}</h1>
            <h2>Name:<span>&nbsp;MankandanRko</span></h2>
            <h2>Place:<span>&nbsp;Karur</span></h2>
            <h2>Friends:<span>&nbsp;Randy Orten</span></h2>
            <h2>SchoolName:<span>&nbsp;R.G.H.S.School</span></h2>
            <h2>Studies:<span>&nbsp;SSLC&nbsp;HSC</span></h2>
            <p style={{ width: "400px" }}>{datas}&nbsp;<small style={{ color: "blue" }} onMouseLeave={onMouseLeave}>readmore...</small></p>
        </div>
    )
}

export default Schooldetails
