import React, { useEffect, useRef } from 'react';
import { Routes, Route, matchRoutes, useNavigate, useLocation } from "react-router-dom";
import { Badge, TabBar, SafeArea } from 'antd-mobile';
import {
    AppOutline,
    ContentOutline,
    UnorderedListOutline,
    UserOutline,
    AddOutline
} from 'antd-mobile-icons'
import router from "@/routers"

function Tabbar() {
    const location = useLocation();
    const { pathname } = location;
    const navigate = useNavigate();
    const tabChange = (key: string) => {
        navigate(key)
    }
    const tabs = [
        {
            key: '/home',
            title: '首页',
            icon: <AppOutline />,
        },
        {
            key: 'todo',
            title: '我的待办',
            icon: <ContentOutline />,
        },
        {
            key:'create',
            title:'创建',
            icon:<AddOutline />
        },
        {
            key: '/me',
            title: '个人中心',
            icon: <UserOutline />,
        },
        {
            key: 'message',
            title: '我的消息',
            icon:<UnorderedListOutline />
        },
        
    ]

    return (
        <div>
            {
                ["/home", "/me"].includes(pathname) &&
                <TabBar activeKey={pathname}  onChange={tabChange} safeArea>

                    {tabs.map((item,index) => (
                        <TabBar.Item key={item.key} icon={item.icon} />
                    ))}
                </TabBar>
            }

        </div>
    );

}
import './tabbar.less'
export default Tabbar;
