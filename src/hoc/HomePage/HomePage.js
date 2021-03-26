import React, { Component } from 'react';
import Header from '../../containers/HomePage/Header/Header';
import Aux from '../Aux/Aux';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import HomePageSider from '../../containers/HomePage/Sider/Sider';
import HomePageContent from "../../containers/HomePage/Content/Content";


const homepage = (props) => {
    return (
        <Aux>
            <Layout>
                <Header></Header>
            </Layout>
            <Layout>
                <HomePageSider></HomePageSider>
                <HomePageContent></HomePageContent>
            </Layout>
        </Aux>
    )
}

export default homepage;