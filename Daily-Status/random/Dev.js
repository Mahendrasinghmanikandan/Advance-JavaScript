import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { Table, Input, Space, Row, Col, Form, Drawer, Button } from 'antd';
import { DeleteOutlined, EditOutlined, UserAddOutlined } from '@ant-design/icons'
const { Search } = Input;
const Dev = () => {
    // Api datas 
    const [datas, setdatas] = useState([])
    // for add & update
    const [forms, setforms] = useState({
        uid: '',
        title: '',
        body: ''
    })
    // for search
    const [search, setsearch] = useState('')
    // Drawer
    const [isEditDrawerVisible, setisEditDrawerVisible] = useState(false);
    const [isAddDrawerVisible, setisAddDrawerVisible] = useState(false);
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
            dataIndex: search ? 'id' : 'sno',
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
                        setforms({ uid: record.id, body: record.body, title: record.title })
                    }}><EditOutlined onClick={() => { setisEditDrawerVisible(true) }} /></p>
                    <p style={{ cursor: 'pointer', color: 'red' }} onClick={() => {
                        setdatas(datas.filter(res => res.id !== record.id))
                    }}><DeleteOutlined /></p>
                </Space>

            ),
        },
    ];
    // Update 
    const handleUpdate = () => {
        if (forms.title !== '' && forms.body !== '') {
            datas.map(res => (
                res.id === forms.uid ? (res.title = forms.title, res.body = forms.body) : ('')
            ))
            setforms('')
            setisEditDrawerVisible(false)
        } else {
            alert('hey Fill the details')
        }
    }
    // Add
    const handleAdd = () => {
        let id = (Math.floor(Math.random() * 1000) + 1)
        let newdata = { userId: 1, id: id, title: forms.title, body: forms.body }
        // console.log(forms.title)
        if (forms.title !== '' && forms.body !== '') {
            setdatas([...datas, newdata])
            setforms('')
            setisAddDrawerVisible(false)
        } else {
            alert('hey Fill the details')
        }
    }
    // input fields onChange 
    const handlechange = (e) => {
        setforms({ ...forms, [e.target.name]: e.target.value })
    }
    return (
        <div>
            {/* Edit Drawer Start*/}
            <Drawer title="Update Datas" width={500} visible={isEditDrawerVisible} onClose={() => {
                setisEditDrawerVisible(false)
                setforms('')
            }}
                footer={
                    <div>
                        <Button style={{ marginRight: 8 }} onClick={() => {
                            setisEditDrawerVisible(false)
                            setforms('')
                        }}>
                            Cancel
                       </Button>
                        <Button type="primary" onClick={() => { handleUpdate() }} >Update</Button>
                    </div>
                }>
                <Form >
                    <Row gutter={24}>
                        <Col span={24}>
                            <Form.Item label="Title">
                                <Input value={forms.title} name="title" onChange={handlechange} size='large' />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item label="Body">
                                <Input
                                    value={forms.body} name="body" onChange={handlechange} size='large' />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>

            </Drawer>
            {/* Edit Drawer End */}
            {/* Add Drawer Start*/}
            <Drawer title="Add Datas" width={500} visible={isAddDrawerVisible} onOk={() => {
                setisAddDrawerVisible(false)
                handleAdd()
            }} onClose={() => {
                setisAddDrawerVisible(false)
                setforms('')
            }}
                footer={
                    <div>
                        <Button style={{ marginRight: 8 }} onClick={() => {
                            setisAddDrawerVisible(false)
                            setforms('')
                        }}>
                            Cancel
                       </Button>
                        <Button type="primary" onClick={() => { handleAdd() }} >Add</Button>
                    </div>
                }>
                <Form >
                    <Row gutter={24}>
                        <Col span={24}>
                            <Form.Item label="Title">
                                <Input value={forms.title} name='title' onChange={handlechange} size='large' />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item label="Body">
                                <Input
                                    value={forms.body} name='body' onChange={handlechange} size='large' />
                            </Form.Item>

                        </Col>
                    </Row>
                </Form>

            </Drawer>
            {/* Add Drawer End */}

            <Row justify='center'>
                <Col span={18}>
                    <Search style={{ marginTop: '2%' }}
                        placeholder="Enter the Search value Here"
                        enterButton
                        allowClear
                        size="large"
                        onChange={(e) => { setsearch(e.target.value) }}
                    />
                    <UserAddOutlined onClick={() => { setisAddDrawerVisible(true) }} style={{ float: 'right', color: 'green', margin: '2%', cursor: 'pointer' }} />
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
