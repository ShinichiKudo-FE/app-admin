import React from 'react';
import {Button,Card,Radio} from 'antd'
import './index.less';
export default class Buttons extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            loading: false,
            size: 'default'
        }
    }
    handleCloseLoading =() =>{
        this.setState({
            loading:true
        })
    }
    handleSizeChange=(e) =>{
        this.setState({
            size: e.target.value
        })
    }
    render() {
        return (
            <div>
                <Card title="基础按钮" className="card-wrap">
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                    <Button disabled>Danger</Button>
                </Card>
                <Card title="圆形按钮" className="card-wrap">
                    <Button type="primary" shape="circle" icon="search" />
                    <Button type="primary" icon="search">Search</Button>
                    <Button shape="circle" icon="search" />
                    <Button icon="edit">Search</Button>
                    <br />
                    <Button shape="circle" icon="search" />
                    <Button icon="search">Search</Button>
                    <Button type="dashed" shape="circle" icon="search" />
                    <Button type="dashed" icon="search">Search</Button>
                </Card>
                <Card title="按钮组" className="card-wrap">
                    <Button.Group>
                        <Button type="primary" icon="left">前进</Button>
                        <Button type="primary" icon="right">后退</Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸" className="card-wrap">
                    <Radio.Group value={this.state.size} onChange={this.handleSizeChange.bind(this)}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>       
                    <Button type="primary" size={this.state.size}>Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                    <Button disabled>Danger</Button>
                </Card>
            </div>
        );
    }
}
