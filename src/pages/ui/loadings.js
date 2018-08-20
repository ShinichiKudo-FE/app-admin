import React from 'react';
import { Button, Card, Spin, Icon, Switch,Alert} from 'antd'
import './index.less';
export default class Loadings extends React.Component {
    state = {
        loading:false,
    }
    toggle = (value) =>{
        this.setState({
            loading: value
        })
    }
    render() {
        const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
        return (
            <div>
                <Card title="Loading按钮" className="card-wrap">
                    <Spin spinning={this.state.loading}  delay={1000} size={this.state.size} tip="加载中...">
                        <Alert
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="success"
                        />
                    </Spin>
                    <div style={{marginTop:'20px'}}>
                        <Switch checked={this.state.loading} onChange={this.toggle}/>
                    </div>
                </Card>
                <Card title="自定义loading">
                    <Spin indicator={antIcon} />
                </Card>
            </div>
        );
    }
}
