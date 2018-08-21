import React from 'react';

import { HashRouter,Switch,Route } from "react-router-dom";

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
                    <Route path='/login' component={Login}/>
                    <Route path="/common" render={() =>
                        <Common>
                            <Route path="/common/order/detail/:orderId" component={OrderDetail} />
                        </Common>
                    }
                    />
                    <Route path='/admin' render={()=>
                        <Admin>
                            <Switch>
                                <Route path="/admin/home" component={Home} />
                                <Route path="/admin/ui/buttons" component={Buttons}/>
                                <Route path="/admin/ui/modals" component={Modals} />
                                <Route path="/admin/ui/loadings" component={Loadings} />
                                <Route path="/admin/ui/notification" component={Notification} />
                                <Route path="/admin/ui/messages" component={Messages} />
                                <Route path="/admin/ui/tabs" component={Tab} />
                                <Route path="/admin/ui/gallery" component={Gallery} />
                                <Route path="/admin/ui/carousel" component={Carousels} />
                                <Route path="/admin/form/login" component={FormLogin} />
                                <Route path="/admin/form/reg" component={FormRegister} />
                                <Route path="/admin/table/basic" component={BasicTable} />
                                <Route path="/admin/table/high" component={HighTable} />
                                <Route path="/admin/rich" component={Rich} />
                                <Route path="/admin/city" component={City} />
                                <Route path="/admin/order" component={Order} />
                                <Route path='/admin/user' component={User}/>                  
                                <Route path='/admin/bikeMap' component={BikeMap} />
                                <Route path="/admin/charts/bar" component={Bar} />
                                <Route path="/admin/charts/pie" component={Pie} />
                                <Route path="/admin/charts/line" component={Line} />
                                <Route path="/admin/permission" component={Permission} />
                                <Route  component={NoMatch} />        
                            </Switch>  
                        </Admin>   
                    } />
                    <Route path='/order/detail' component={Login} />
                </App>
            </HashRouter>    
        )
    }
}