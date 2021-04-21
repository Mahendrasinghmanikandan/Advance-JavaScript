import { React, useState } from 'react'

const Crud2 = () => {
    const [datas, setdatas] = useState([
        {
            id: 1,
            name: "nesrin"
        }
    ])
    const [data, setdata] = useState('')
    const [uid, setuid] = useState()
    const [ustatus, setustatus] = useState(false)
    const Add = (event) => {
        event.preventDefault()
        let id = (Math.floor(Math.random() * 1000) + 1)
        let newdata = { id: id, name: data }
        data ? setdatas([...datas, newdata]) : alert('Enter Something')
        setdata('');
    }
    const Edit = () => {
        // console.log(uid)
        let id = uid;
        datas.map(res => {
            res.id === id ? res.name = data : res.name = res.name
        })
        setustatus(false)
        setdata('')
    }
    return (
        <div>
            <table cellPadding="22%" border='1.5px'>
                <tr>
                    <td colSpan="4">
                        {ustatus ? <div>
                            <input type="text" placeholder="Enter New name" value={data} onChange={(e) => { setdata(e.target.value) }} />
                            <input type="submit" value="Update" onClick={Edit} />
                            <input type="Button" value="Cancel" onClick={() => { setustatus(false) }} />
                        </div> :
                            <form onSubmit={Add}>
                                <input type="text" placeholder="Enter Your name" value={data} onChange={(e) => { setdata(e.target.value) }} />
                                <input type="submit" />
                            </form>}

                    </td>
                </tr>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>delete</th>
                    <th>update</th>
                </tr>
                {datas.map((value, sn) => (
                    <tr key={value.id}>
                        <td>{sn + 1}</td>
                        <td>{value.name}</td>
                        <td style={{ color: "red" }} onClick={() => {
                            setdatas(datas.filter(res => res.id !== value.id))
                        }}>delete</td>
                        <td style={{ color: "green" }} onClick={() => {
                            setustatus(true)
                            setuid(value.id)
                        }}>Update</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Crud2


