import React from 'react';
import { Button, Card, Modal } from 'antd'
import './index.less';
export default class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal1:false,
            showModal2: false,
            showModal3: false,
            showModal4: false
        }
    }
    handleOpen =(type) =>{
        this.setState({
            [type]:true
        })
    }
    
    handleConfirm =(type) =>{
        Modal[type]({
            title:'确认',
            content: 'Bla bla ...',
            onOk(){
                console.log('ok') 
            },
            onCancel(){
               console.log('cancel') 
            }
        })
    }

    render() {
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleOpen('showModal1')}>open</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal3')}>顶部20px</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal4')}>水平居中</Button>
                </Card>
                <Card title="信息确认框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleConfirm('confirm')}>confirm</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('info')}>info</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('success')}>success</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('warning')}>warning</Button>
                </Card>
                <Modal 
                    title="React"
                    visible={this.state.showModal1}
                    onCancel ={()=>{
                        this.setState({
                            showModal1: false
                        })
                    }}
                >
                基本弹框
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal2}
                    okText="好的"
                    cancelText="算了"
                    onCancel={() => {
                        this.setState({
                            showModal2: false
                        })
                    }}
                >
                    自定义页脚
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal3}
                    style={{top:20}}
                    okText="好的"
                    cancelText="算了"
                    onCancel={() => {
                        this.setState({
                            showModal3: false
                        })
                    }}
                >
                    顶部20px
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal4}
                    wrapClassName="vertical-center-modal"
                    okText="好的"
                    cancelText="算了"
                    onCancel={() => {
                        this.setState({
                            showModal4: false
                        })
                    }}
                >
                    水平垂直居中
                </Modal>
            </div>
        );
    }
}
