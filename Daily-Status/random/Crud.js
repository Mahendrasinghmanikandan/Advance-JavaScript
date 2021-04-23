import { React, useState } from 'react'
const Parent = () => {
    const [datas, setdatas] = useState([])
    const [data, setdata] = useState('')
    const [uid, setuid] = useState()
    const [uname, setuname] = useState('')
    const [ustatus, setustatus] = useState(false)
    const Add = (event) => {
        event.preventDefault()
        let id = (Math.floor(Math.random() * 1000) + 1)
        let newdata = { id: id, name: data }
        data ? setdatas([...datas, newdata]) : alert('Enter Something')
        setdata('');
    }
    const deleteDatas = (id) => {
        console.log(id)
        setdatas(datas.filter(res => res.id !== id))
    }
    const Edit = (id, name) => {
        // console.log(id)
        setustatus(true)
        setuid(id)
        setuname(name)
    }
    const Update = (event) => {
        event.preventDefault()
        // console.log(uid)
        let id = uid;
        datas.map(res => {
            uname ? res.id === id ? res.name = uname : res.name = res.name : res.name = res.name
        })
        setustatus(false)
        setdata('')
    }
    return (
        <div>
            <table cellPadding="20%" border='1.5px'>
                <tr>
                    <td colSpan="4">
                        {ustatus ? <form onSubmit={Update}>
                            <input type="text" placeholder="Enter New name" value={uname} onChange={(e) => { setuname(e.target.value) }} />
                            <input type="submit" />
                            <input type="Button" value="Cancel" onClick={() => {
                                setustatus(false)
                                setdata('')
                            }} />
                        </form> :
                            <form onSubmit={Add}>
                                <input type="text" placeholder="Enter Your name" value={data} onChange={(e) => { setdata(e.target.value) }} />
                                <input type="submit" />
                                <input type="Button" value="Cancel" onClick={() => {
                                    setustatus(false)
                                    setdata('')
                                }} />
                            </form>}

                    </td>
                </tr>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th colSpan='2'>Action</th>
                </tr>
                {datas.map((value, sn) => (
                    <tr>
                        <td>{sn + 1}</td>
                        <td>{value.name}</td>
                        <td style={{ color: "green" }} onClick={() => {
                            Edit(value.id, value.name)
                        }}>Edit</td>
                        <td style={{ color: "red" }} onClick={() => deleteDatas(value.id)}>delete</td>
                    </tr>
                ))}

            </table>
        </div >
    )
}

export default Parent


