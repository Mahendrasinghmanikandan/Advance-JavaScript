import { React, useState } from 'react'
import Child from './Child'
const Parent = () => {
    const [datas, setdatas] = useState([
        {
            id: 1,
            name: "nesrin"
        }, {
            id: 2,
            name: "nancy"
        }
    ])
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
    const Update = () => {
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
                        {ustatus ? <div>
                            <input type="text" placeholder="Enter New name" value={uname} onChange={(e) => { setuname(e.target.value) }} />
                            <input type="submit" value="Update" onClick={Update} />
                            <input type="Button" value="Cancel" onClick={() => {
                                setustatus(false)
                                setdata('')
                            }} />
                        </div> :
                            <form onSubmit={Add}>
                                <input type="text" placeholder="Enter Your name" value={data} onChange={(e) => { setdata(e.target.value) }} />
                                <input type="submit" />
                            </form>}

                    </td>
                </tr>
                <Child datas={datas} Delete={deleteDatas} Edit={Edit} />

            </table>
        </div >
    )
}

export default Parent


