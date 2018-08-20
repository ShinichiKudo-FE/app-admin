import React from 'react';
import { Button, Card, notification} from 'antd'
import './index.less';
export default class Notification extends React.Component {
    openNotification = () => {
        notification.open({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
        })
    }
    openNotificationWithIcon = (type,direction) =>{
        if(direction){
            notification.config({
                placement: direction
            })
        }
        notification[type]({
            message: '今天发工资了吗？',
            description: '不是说今天发工资吗'
        })
    }

    render() {       
        return (
            <div>
                <Card title="基本消息通知框" className="card-wrap">
                    <Button type="primary" onClick={this.openNotification}>基本</Button>                  
                </Card>
                <Card title="带图标的通知框" className="card-wrap">
                    <Button onClick={() => { this.openNotificationWithIcon('success','topLeft')}}>success</Button>
                    <Button onClick={() => { this.openNotificationWithIcon('info', 'topRight') }}>info</Button>
                    <Button onClick={() => { this.openNotificationWithIcon('error', 'bottomLeft') }}>error</Button>
                    <Button onClick={() => { this.openNotificationWithIcon('warning', 'bottomRight') }}>warning</Button>
                </Card>
            </div>
        );
    }
}
