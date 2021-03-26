import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Aux from '../../../hoc/Aux/Aux';
import { Form, Input, Button, Checkbox } from 'antd';
import classes from './Signupform.module.css';
import FormItem from 'antd/lib/form/FormItem';
import axios from '../../../AxiosBaseURL';

const layout = {
    labelCol: {
        span: 300,

    },
    wrapperCol: {
        span: 300,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 0,
        span: 300,
    },
};

const buttonItemLayout = {
    wrapperCol: { span: 30, offset: 0 },
};
const nameesLayout = {
    wrapperCol: { span: 30, offset: 0 },
}

const onFinish = (values) => {
    /* ADD FUNCTIONALITY
        Make sure that both passwords entered are the same
    */
    const newUser = {
        firstName: values['firstName'],
        lastName: values['lastName'],
        email: values['email'],
        phoneNumber: values['phoneNumber'],
        password: values['password']


    }
    axios.post(
        '/users.json', newUser
    ).then(
        console.log('Done')
    ).catch(
        error => console.log('Error Loggin in')
    )
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const signupform = (props) => {
    
    return (
        <Aux>
            <Row className={classes.signUpForm}>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                >
                    <Form.Item
                        label="First Name"
                        name="firstName"
                        {...nameesLayout}
                    /*rules={[{ required: true, message: 'Please input your username!' }]}*/
                    >
                        <Input size="large" />
                    </Form.Item>

                    <Form.Item
                        label="Last Name"
                        name="lastName"
                        {...nameesLayout}
                    /*rules={[{ required: true, message: 'Please input your password!' }]}*/
                    >
                        <Input size="large" />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                    /*rules={[{ required: true, message: 'Please input your password!' }]}*/
                    >
                        <Input size="large" />
                    </Form.Item>
                    <Form.Item
                        label="Phone Number"
                        name="phoneNumber"
                    /*rules={[{ required: true, message: 'Please input your password!' }]}*/
                    >
                        <Input size="large" />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                    /*rules={[{ required: true, message: 'Please input your password!' }]}*/
                    >
                        <Input.Password size="large" />
                    </Form.Item>
                    <Form.Item
                        label="Confirm Password"
                        name="confirmedPassword"
                    /*rules={[{ required: true, message: 'Please input your password!' }]}*/
                    >
                        <Input.Password size="large" />
                    </Form.Item>
                    <Form.Item {...buttonItemLayout}>
                        <Button type="primary" htmlType="submit">
                            SignUp
                        </Button>
                    </Form.Item>
                </Form>
            </Row>
        </Aux>
    )
}

export default signupform;
