import React from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer';
import NavLeft from './Components/NavLeft'

import {Row,Col} from 'antd';
import './style/index.less';

import Home from './pages/home';

export default class Admin extends React.Component{
    render(){
        return(
            <Row className="contanier">
                <Col span={4} className="NavLeft">
                    <NavLeft/>
                </Col>
                <Col span={20} className="main">
                    <Header/>
                    <Row className="content">
                        {/* <Home/> */}
                        {this.props.children}
                    </Row>
                    <Footer/>
                </Col>
            </Row> 
        )
    }
}