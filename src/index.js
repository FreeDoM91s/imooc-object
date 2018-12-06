import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter,
         Route,
         Redirect,
         Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducer'
import Auth from './Auth';
import Dashboard from './Dashboard';
import './config';
import 'antd-mobile/dist/antd-mobile.css';
const reduxDevtools = window.devToolsExtension?window.devToolsExtension():f=>f;
const store = createStore(reducers, compose(applyMiddleware(thunk), reduxDevtools));

//console.log(store.getState());
//登录  没有登录信息 统一跳转到login

//页面 导航+显示+注销
// 一营 -- 二营 -- 骑兵连
// router+redux

ReactDom.render(
    (<Provider store = { store }>
        <BrowserRouter>
            <Switch>
                {/* Switch组件只渲染命中的第一个Router */}
                <Route path = '/login' exact component = { Auth }></Route>
                <Route path = '/dashborad' component = { Dashboard }></Route>
                <Redirect to = '/dashborad'></Redirect>
            </Switch>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
 );
