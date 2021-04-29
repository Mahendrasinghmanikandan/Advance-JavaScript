import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { Table, Input, Space, Row, Col, Modal } from 'antd';
import { DeleteOutlined, EditOutlined, UserAddOutlined } from '@ant-design/icons'
const { Search } = Input;
const Dev = () => {
    // Api datas 
    const [datas, setdatas] = useState([])
    // for add & update
    const [uid, setuid] = useState()
    const [title, settitle] = useState()
    const [body, setbody] = useState()
    // for search
    const [search, setsearch] = useState('')
    // Models
    const [isEditModalVisible, setisEditModalVisible] = useState(false);
    const [isAddModalVisible, setisAddModalVisible] = useState(false);
    // get data from api
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            setdatas(res.data)
        })
    }, [])
    //search operation
    const dataSource = search ? datas.filter(res => {
        return res['title'].toString().toLowerCase().includes(search.toLowerCase())
    }
        // without search 
    ) : datas.map((res, sno) => (
        {
            sno: sno + 1,
            id: res.id,
            title: res.title,
            body: res.body
        }
    ));

    const columns = [
        {
            title: 'S.No',
            dataIndex: 'sno',
            key: 'id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'id',
        }, {
            title: 'body',
            dataIndex: 'body',
            key: 'id',
        }, {

            title: 'Action',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <p style={{ cursor: 'pointer', color: 'green' }} onClick={() => {
                        setuid(record.id)
                        setbody(record.body)
                        settitle(record.title)

                    }}><EditOutlined onClick={() => { setisEditModalVisible(true) }} /></p>
                    <p style={{ cursor: 'pointer', color: 'red' }} onClick={() => {
                        setdatas(datas.filter(res => res.id !== record.id))
                    }}><DeleteOutlined /></p>
                </Space>

            ),
        },
    ];
    // Update 
    const handleUpdate = () => {
        datas.map(res => (
            res.id === uid ? (res.title = title, res.body = body) : (res.title = res.title, res.body = res.body)
        ))
        settitle('')
        setuid('')
        setbody('')
    }
    // Add
    const handleAdd = () => {
        let id = (Math.floor(Math.random() * 1000) + 1)
        let newdata = { userId: 1, id: id, title: title, body: body }
        if (title !== '' && body !== '') {
            setdatas([...datas, newdata])
            settitle('')
            setbody('')
        } else {
            alert('hey Fill the details')
        }
    }
    return (
        <div>
            {/* Edit Model Start*/}
            <Modal title="Update Datas" visible={isEditModalVisible} onOk={() => {
                setisEditModalVisible(false)
                handleUpdate()
            }} onCancel={() => {
                setisEditModalVisible(false)
                settitle('')
                setuid('')
                setbody('')
            }} >
                <label>Title:</label>
                <Input value={title} onChange={(e) => { settitle(e.target.value) }} size='large' /><br />
                <label>Body:</label>
                <Input value={body} onChange={(e) => { setbody(e.target.value) }} size='large' /><br />
            </Modal>
            {/* Edit Model End */}
            {/* Add Model  Start*/}
            <Modal title="Add Datas" visible={isAddModalVisible} onOk={() => {
                setisAddModalVisible(false)
                handleAdd()
            }} onCancel={() => {
                setisAddModalVisible(false)
                settitle('')
                setbody('')
            }} >
                <label>Title:</label>
                <Input value={title} onChange={(e) => { settitle(e.target.value) }} size='large' /><br />
                <label>Body:</label>
                <Input value={body} onChange={(e) => { setbody(e.target.value) }} size='large' /><br />
            </Modal>
            {/* Add Model End */}
            <Row justify='center'>
                <Col span={18}>
                    <Search style={{ marginTop: '2%' }}
                        placeholder="Enter the Search value Here"
                        enterButton
                        allowClear
                        size="large"
                        onChange={(e) => { setsearch(e.target.value) }}
                    />
                    <UserAddOutlined onClick={() => { setisAddModalVisible(true) }} style={{ float: 'right', color: 'green', margin: '2%', cursor: 'pointer' }} />
                </Col>
            </Row>
            {/* Table Start*/}
            <Row justify='center'>
                <Col span={18}>
                    <Table dataSource={dataSource} columns={columns} />
                </Col>
            </Row>
            {/* Table End */}
        </div >
    )
}

export default Dev
