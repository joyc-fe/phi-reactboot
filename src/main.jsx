/**
 *
 * @authors luozh@snail.com
 * @date    2016-03-21 16:42:35
 * @description 主入口模块
 */

import React from 'react';
import { render } from 'react-dom';
import   'pace-progress';

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router';
import {Provider} from 'react-redux';
// 引入Antd的导航组件
import { Menu, Icon, Switch } from 'antd';
const SubMenu = Menu.SubMenu;

// 引入Ant-Design样式 & Animate.CSS样式
//import 'animate.css/animate.min.css'
//import 'font-awesome/css/font-awesome.min.css'

// 引入主体样式文件
import './main.less';

// 引入单个页面（包括嵌套的子页面）
import myTable from './components/table.jsx';
import myForm from './components/form.jsx';
import myChart from './components/chart.jsx';
import myAnimate from './components/animate.jsx';
import myCalendar from './components/calendar.jsx';
import myCard from './components/fetch.jsx';
import bootStart from './components/bootstart.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import configureStore from './store/configureStore.js';
const store = configureStore({});



const ACTIVE = {color: 'red'}

// 配置导航
class Sider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: '',
            username: ''
        }
    }

    handleClick = (e) => {
        this.setState({
            current: e.key
        })
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = () => {
        this.setState({
            username: 'luozhi'
        })
    }

    render() {
        return (
            <div className="ant-row content">
                <div id="leftMenu" className="ant-col-xs-24 ant-col-sm-24 ant-col-md-6 ant-col-lg-4">
                    <Menu theme="light"
                          onClick={this.handleClick}
                          style={{ width: '100%' }}
                          defaultOpenKeys={['sub1', 'sub2']}
                          defaultSelectedKeys={[this.state.current]}
                          mode="inline">
                        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>工程化</span></span>}>
                            <Menu.Item key="a1"><Link to="/bootStart">BootStart</Link></Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub1" title={<span><Icon type="plus-square-o" /><span>组件</span></span>}>
                            <Menu.Item key="1"><Link to="/myTable">表格</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/myForm">表单</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/myChart">图表</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/myCalendar">日历</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/myCard">导航</Link></Menu.Item>
                            <Menu.Item key="6"><Link to="/myAnimate">关注</Link></Menu.Item>
                            <Menu.Item key="7"><Link to="/myAnimate">上传</Link></Menu.Item>
                            <Menu.Item key="8"><Link to="/myAnimate">裁图</Link></Menu.Item>
                            <Menu.Item key="9"><Link to="/myAnimate">加载进度</Link></Menu.Item>
                        </SubMenu>

                    </Menu>
                </div>
                <div id="rightWrap" className="ant-col-xs-24 ant-col-sm-24 ant-col-md-18 ant-col-lg-20">
                    <div className="right-box">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}


// 配置路由
render((
    <div className='appContainer'>
        <Header/>
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={Sider}>
                    <IndexRoute component={myCard}/>
                    <Route path="myTable" component={myTable}/>
                    <Route path="myForm" component={myForm}/>
                    <Route path="myChart" component={myChart}/>
                    <Route path="myCalendar" component={myCalendar}/>
                    <Route path="myAnimate" component={myAnimate}/>
                    <Route path="myCard" component={myCard}/>
                    <Route path="bootStart" component={bootStart}/>
                </Route>
            </Router>
        </Provider>,
        <Footer/>
    </div>
), document.getElementById('phiReactBoot'));



