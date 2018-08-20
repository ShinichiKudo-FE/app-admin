import React from 'react';
import {Button, Card, message} from 'antd'
import './index.less';
export default class Messages extends React.Component {
    info = () =>{
        message.info('This is a normal message');
    }
    showMessage = (type) =>{
        message[type]('看看效果怎么样',5)
    }
    promises = () =>{
        message.loading('loading',2.5)
        .then(() => message.success('success',2.5))
        .then(() => message.info('info',2.5))
    }
    render() {
        return (
            <div>
                <Card title="Message全局提示" className="card-wrap">
                    <Button type="primary" onClick={this.info.bind(this)}>Primary</Button>                  
                </Card>
                <Card title="不同样式Message全局提示" className="card-wrap">
                    <Button type="primary" onClick={() => {this.showMessage('success')}}>success</Button>
                    <Button type="primary" onClick={() => { this.showMessage('info')}}>info</Button>
                    <Button type="primary" onClick={() => { this.showMessage('warning')}}>warning</Button>
                    <Button type="primary" onClick={() => { this.showMessage('error')}}>error</Button>
                    <Button type="primary" onClick={() => { this.showMessage('loading') }}>loading</Button>
                </Card>
                <Card title="promise接口" className="card-wrap">
                    <Button type="primary" onClick={this.promises}>Promise接口</Button>
                </Card>
            </div>
        );
    }
}
