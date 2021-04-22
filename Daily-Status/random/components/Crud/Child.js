import React from 'react'

function Child({ datas, Delete, Edit }) {
    return (
        <div>
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>delete</th>
                <th>update</th>
            </tr>
            {datas.map((value, sn) => (
                <tr>
                    <td>{sn + 1}</td>
                    <td>{value.name}</td>
                    <td style={{ color: "red" }} onClick={() => Delete(value.id)}>delete</td>
                    <td style={{ color: "green" }} onClick={() => {
                        Edit(value.id)
                    }}>Update</td>
                </tr>
            ))}
        </div>
    )
}

export default Child
