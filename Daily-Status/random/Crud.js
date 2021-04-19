import { React, useState } from 'react'
// import Update from './Update'
function Crud() {
    const [datas, setdatas] = useState([
        {
            id: 1,
            name: "nesrin"
        }
    ]);
    const [data, setdata] = useState('');
    const [updates, setupdates] = useState(false);
    const [id, setid] = useState()
    const Add = (event) => {
        event.preventDefault();
        let newdata = { id: (Math.floor(Math.random() * 1000) + 1), name: data };
        data === '' ? alert("hey enter something") : setdatas([...datas, newdata])
        setdata('')
    }
    const Edit = () => {
        data === '' ? alert("hey enter something") : datas.map(res => res.id === id ? res.name = data : '')
        //setdatas(datas.filter(res => { return res.id === id ? res.name = data : '' }))
        setupdates(false)
        setid()
        setdata('')
    }
    return (
        <div>
            {updates === false ? <form onSubmit={Add}> <div>
                <input type="text" placeholder="Enter Something" value={data} onChange={(e) => { setdata(e.target.value) }} />
                <input type="submit" value="Add" />
            </div></form> : <div>
                <input type="text" placeholder="Enter New Name" onChange={(e) => { setdata(e.target.value) }} />
                <input type="submit" value="Update" onClick={Edit} />
                <input type="button" value="Cancel" onClick={() => { setupdates(false) }} />
            </div>}
            {/* <Update onClick={Edit} name={datas.map(res => { return res.id === id ? res.name : '' })} /> */}
            <table cellPadding="22%">
                <tr>
                    <th>S.no</th>
                    <th>Names</th>
                    <th>delete</th>
                    <th>update</th>
                </tr>
                {datas.map(e => (
                    <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td style={{ color: "red" }} onClick={() => {
                            setdatas(datas.filter((res) => { return res.id !== e.id }))
                        }}>Del</td>
                        <td style={{ color: "green" }} onClick={() => {
                            setupdates(true)
                            setid(e.id)
                        }} >Update</td>
                    </tr>
                ))}
            </table>
        </div >
    )
}

export default Crud
