import React from 'react';

import { HashRouter,Switch,Route,Redirect } from "react-router-dom";

import App from "./App";
import Login from "./pages/login";
import Admin from './admin';

import Home from './pages/home';

// ui页面
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Loadings from './pages/ui/loadings';
import Notification from './pages/ui/notification';
import Messages from './pages/ui/messages';
import Tab from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousels from './pages/ui/carousel';
// 登录注册页面
import FormLogin from './pages/form/login';
import FormRegister from './pages/form/register';
// 表格
import BasicTable from './pages/table/basicTable';
import HighTable from './pages/table/highTable';
// 富文本
import Rich from './pages/rich';
// 城市管理
import City from './pages/city';
// 订单管理
import Order from './pages/order'
import Common from './common'
import OrderDetail from './pages/order/detail'
// 员工管理
import User from './pages/user';
// 地图
import BikeMap from './pages/map/bikeMap'
// 数据可视化
import Bar from './pages/echarts/bar/index'
import Pie from './pages/echarts/pie/index'
import Line from './pages/echarts/line/index'
// 权限管理
import Permission from './pages/permission';

// 404页面
import NoMatch from './pages/noMatch';
// import { Tabs } from 'antd';

export default class Router extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                    <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path="/common" render={() =>
                        <Common>
                            <Route path="/common/order/detail/:orderId" component={OrderDetail} />
                        </Common>
                    }
                    />
                    <Route path='/' render={()=>
                        <Admin>
                            <Switch>
                                <Route path="/home" component={Home} />
                                <Route path="/ui/buttons" component={Buttons}/>
                                <Route path="/ui/modals" component={Modals} />
                                <Route path="/ui/loadings" component={Loadings} />
                                <Route path="/ui/notification" component={Notification} />
                                <Route path="/ui/messages" component={Messages} />
                                <Route path="/ui/tabs" component={Tab} />
                                <Route path="/ui/gallery" component={Gallery} />
                                <Route path="/ui/carousel" component={Carousels} />
                                <Route path="/form/login" component={FormLogin} />
                                <Route path="/form/reg" component={FormRegister} />
                                <Route path="/table/basic" component={BasicTable} />
                                <Route path="/table/high" component={HighTable} />
                                <Route path="/rich" component={Rich} />
                                <Route path="/city" component={City} />
                                <Route path="/order" component={Order} />
                                <Route path='/user' component={User}/>                  
                                <Route path='/bikeMap' component={BikeMap} />
                                <Route path="/charts/bar" component={Bar} />
                                <Route path="/charts/pie" component={Pie} />
                                <Route path="/charts/line" component={Line} />
                                <Route path="/permission" component={Permission} />
                                <Redirect to="/home" />
                                {/* <Route  component={NoMatch} />         */}
                            </Switch>  
                        </Admin>   
                    } />
                    <Route path='/order/detail' component={Login} />
                    </Switch>
                </App>
                
            </HashRouter>    
        )
    }
}