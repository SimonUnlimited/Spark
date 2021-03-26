import React from 'react';
import { useFormik } from 'formik';
import classes from './Signinform.module.css';
import { Row, Col } from 'antd';
import Aux from '../../../hoc/Aux/Aux';
import { Form, Input, Button, Checkbox } from 'antd';
import axios from '../../../AxiosBaseURL';
import {useHistory} from 'react-router-dom';




/*const validate = values => {
    const errors = {};
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 8) {
        errors.password = 'Must be 8 characters or more';
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};
*/
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
    wrapperCol: {span: 14, offset: 3},
};

const signinform = (props) => {
    const onFinish = (values) => {
        const userEmail = values['email'];
        axios.get(
            '/users.json'
        ).then(
            response => {
                const data = response.data;
                console.log(response.data);
                Object.keys(data).map( (key, index) => {
                    if (data[key]['email'] == userEmail) {
                        const func = () => props.signInHandler();
                    }   
                });
            }
        )
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Aux>
            <Row className={classes.signinform}>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                    /*rules={[{ required: true, message: 'Please input your username!' }]}*/
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
                    <Row className = {classes.spaceBetween}>
                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <Form.Item {...buttonItemLayout}>
                            <Button type="primary" htmlType="submit" onClick = {() => props.signedInHandler()}>
                                Login
                        </Button>
                        </Form.Item>
                    </Row>
                    <Row className = {classes.spaceBetween}>
                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Button type = "link">Forgot Password</Button>
                        </Form.Item>
                        <Form.Item {...buttonItemLayout}>
                            <Button type = "link" onClick = {() => props.handler()}>SignUp</Button>
                        </Form.Item>
                    </Row>
                </Form>
            </Row>
        </Aux>
    );
}


export default signinform;

/*const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    */


/*
<form onSubmit={formik.handleSubmit}>
                <Row className={classes.formItem}>
                    <Row>
                        <label htmlFor="email">Email Address</label>
                    </Row>
                    <Row className={classes.field}>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    </Row>


                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                </Row>
                <Row className={classes.formItem}>
                    <Row>
                        <label htmlFor="password" className={classes.field}>Password </label>
                    </Row>
                    <Row className={classes.field}>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </Row>
                    {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                </Row>
                <Row className = {classes.signinbutton}>
                    <button type="submit">Submit</button>
                </Row>
            </form>
            */