import React from 'react';
import {Icon, Card, Tabs, message} from 'antd'
import './index.less';
const TabPane = Tabs.TabPane;
export default class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
            { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
            { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
            { title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable: false },
        ];
        this.state = {
            activeKey: panes[0].key,
            panes,
        };
    }

    onChange = (activeKey) => {
        this.setState({ activeKey });
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    }

    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    }

    handleClick = (key) => {
        message.info('你现在点击的是' + key + '标签')
    }

    render() {
        return (
            <div>
                <Card title="基本Tab样式" className="card-wrap">
                    <Tabs defaultActiveKey= "1" onChange={this.handleClick}>
                        <TabPane tab = "Tab" key ="1">发</TabPane>
                        <TabPane tab = "Tab" key ="2">工</TabPane>
                        <TabPane tab = "Tab" key ="3">资</TabPane>
                        <TabPane tab = "Tab"  disabled key ="4">了</TabPane>
                        <TabPane tab = "Tab" key ="5">吗</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带图标的标签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleClick}>
                        <TabPane tab={<span><Icon type="plus" />Tab 1</span>} key="1">快</TabPane>
                        <TabPane tab={<span><Icon type="edit" />Tab 2</span>} key="2">点</TabPane>
                        <TabPane tab={<span><Icon type="delete" />Tab 3</span>} key="3">发</TabPane>
                        <TabPane tab={<span><Icon type="desktop" />Tab 4</span>} key="4">工</TabPane>
                        <TabPane tab={<span><Icon type="frown" />Tab 5</span>} key="5">资</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带图的页签" className="card-warp">
                    <Tabs 
                        onChange = {this.onChange}
                        activeKey = {this.state.activeKey}
                        type="editable-card"
                        onEdit={this.onEdit}
                        >
                        {this.state.panes.map(pane =>{
                            return <TabPane
                                tab={pane.title}
                                key={pane.key}
                                closable={pane.closable}
                            >
                                {pane.content}
                            </TabPane>
                        })}
                    </Tabs>
                </Card>
            </div>
        );
    }
}
