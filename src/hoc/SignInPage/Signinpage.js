import React, { Component } from 'react';
import Signinform from '../../components/Login/Signinform/Signinform';
import Aux from '../Aux/Aux';
import classes from './Signinpage.module.css';
import Signinmessage from '../../containers/SigninMessage/Signinmessage';
import { Row, Col } from 'antd';
import LoginScreen from '../../containers/LoginScreen/Loginscreen';

const signinpage = (props) => {
    return (
        <Aux>
            <Row className={classes.wrapper}>
                <Col className={classes.first} >
                    <Signinmessage></Signinmessage>
                </Col>
                <Col className={classes.second} >
                    <LoginScreen history = {props.history}></LoginScreen>
                </Col>
            </Row>
        </Aux>
        /*
        <div className = {classes.wrapper}>
            <div className = {classes.first}>Spark</div>
            <div className = {classes.second}>
                <Signinform></Signinform>
            </div>
        </div>
        */
    )
}

export default signinpage;