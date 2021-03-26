import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './Signinmessage.module.css';
import { Row, Col } from 'antd';


const signinmessage = () => {

    return (
        <Aux >
            <Row className = {classes.spark}>
                Spark
            </Row>
            <Row className = {classes.message}>
                Where all Strangers Bump into Each other
            </Row>
        </Aux>
    );
};

export default signinmessage;