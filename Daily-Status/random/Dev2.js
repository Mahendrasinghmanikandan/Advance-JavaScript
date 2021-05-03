import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { Table, Input, Space, Row, Col, Form, Drawer, Button } from 'antd';
import { DeleteOutlined, EditOutlined, UserAddOutlined } from '@ant-design/icons'
const { Search } = Input;
const Dev = () => {
    const [form] = Form.useForm();
    // Api datas 
    const [datas, setdatas] = useState([])
    // for add & update
    const [status, setstatus] = useState("")
    // for search
    const [search, setsearch] = useState('')
    // Drawer
    const [isDrawerVisible, setisDrawerVisible] = useState(false);

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
                        form.setFieldsValue({
                            uid: record.id,
                            title: record.title,
                            body: record.body,
                        });
                    }}><EditOutlined onClick={() => {
                        setisDrawerVisible(true)
                        setstatus('update')
                    }} /></p>
                    <p style={{ cursor: 'pointer', color: 'red' }} onClick={() => {
                        setdatas(datas.filter(res => res.id !== record.id))
                    }}><DeleteOutlined /></p>
                </Space>

            ),
        },
    ];

    // Add datas
    const handleadd = (values) => {
        let id = (Math.floor(Math.random() * 1000) + 1)
        let newdata = { userId: 1, id: id, title: values.title, body: values.body }
        // console.log(values.title)
        setdatas([...datas, newdata])
        form.resetFields();
        setisDrawerVisible(false)
    }

    // update datas
    const handleupdate = (values) => {
        console.log(values.uid)
        datas.map(res => (
            res.id === values.uid ? (res.title = values.title, res.body = values.body) : ('')
        ))
        form.resetFields();
        setisDrawerVisible(false)
    }

    return (
        <div>

            {/* Drawer Start */}
            <Drawer title={status === 'add' ? " Add Datas" : "Update Datas"} width={500} visible={isDrawerVisible} onClose={() => {
                setisDrawerVisible(false)
                form.resetFields();
            }}>
                <Form form={form}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={status === 'add' ? handleadd : handleupdate}
                >
                    <Form.Item
                        label="uid"
                        name="uid"
                        hidden
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="title"
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your title!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="body"
                        name="body"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your body content!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item >
                        <Space>
                            <Button type="primary" htmlType="submit">
                                {status === 'add' ? " Add Datas" : "Update Datas"}
                            </Button>
                            <Button htmlType="button" onClick={() => { form.resetFields() }}>
                                Reset
                        </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Drawer>
            {/* Drawer End */}

            <Row justify='center'>
                <Col span={18}>
                    <Search style={{ marginTop: '2%' }}
                        placeholder="Enter the Search value Here"
                        enterButton
                        allowClear
                        size="large"
                        onChange={(e) => { setsearch(e.target.value) }}
                    />
                    <UserAddOutlined onClick={() => {
                        setisDrawerVisible(true)
                        setstatus('add')
                    }} style={{ float: 'right', color: 'green', margin: '2%', cursor: 'pointer' }} />
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
