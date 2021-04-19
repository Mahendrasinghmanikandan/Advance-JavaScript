import { React, useState } from 'react'

function Crud() {
    const [names, setnames] = useState([
        {
            id: 1,
            name: "nesrin"
        }
    ])
    const [name, setname] = useState()

    const Add = (event) => {
        event.preventDefault()
        let id = Math.floor(Math.random() * 1000) + 1;
        let newdata = { id, name }
        // console.log(newdata)
        setnames([...names, newdata])
    }
    return (
        <div>
            <form onSubmit={Add}>
                <input type="text" placeholder="enter Name Here" value={name} onChange={(e) => { setname(e.target.value) }} />
                <input type="submit" />
            </form>
            <table border='1px' cellPadding='25%'>
                <tr>
                    <th>S.No</th>
                    <th>Names</th>
                </tr>
                {names.map((e) => (
                    <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                    </tr>
                ))}

            </table>
        </div>
    )
}

export default Crud
