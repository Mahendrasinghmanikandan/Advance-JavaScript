import { React, useState } from 'react'
import Sdetails from './Details/schooldetails';
function School() {
    const data = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate reprehenderit ut id laborum debitis sed dolor, est molestias! Impedit quae exercitationem laborum praesentium porro consequuntur enim omnis dolores, veniam maiores?ipsum dolor sit amet consectetur adipisicing elit. Voluptate reprehenderit ut id laborum debitis sed dolor, est molestias! Impedit quae exercitationem laborum praesentium porro consequuntur enim omnis dolores, veniam maiores?';
    const [read, setread] = useState(data.slice(0, 100));
    const change = () => {
        read.length <= 100 ? setread(data) : setread(data.slice(0, 100));
        console.log(read.length)
    }
    return (

        <div>
            <Sdetails datas={read} onMouseLeave={change} stitle="School Details" />
        </div>
    )
}

export default School
