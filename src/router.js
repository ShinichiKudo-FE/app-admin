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
// 404页面
import NoMatch from './pages/noMatch';
// import { Tabs } from 'antd';

export default class Router extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                    <Route path='/login' component={Login}/>
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