import React, { useEffect, useRef } from 'react';
import { Routes, Route, matchRoutes, useNavigate, useLocation } from "react-router-dom";
import { Badge, TabBar, SafeArea } from 'antd-mobile';
import {
    AppOutline,
    MessageOutline,
    MessageFill,
    UnorderedListOutline,
    UserOutline,
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
            icon: <UnorderedListOutline />,
        },
        {
            key: 'message',
            title: '我的消息',
            icon: (active: boolean) =>
                active ? <MessageFill /> : <MessageOutline />,
        },
        {
            key: '/me',
            title: '个人中心',
            icon: <UserOutline />,
        },
    ]

    return (
        <div>
            {
                ["/home", "/me"].includes(pathname) &&
                <TabBar activeKey={pathname}  onChange={tabChange}>
                    {tabs.map(item => (
                        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                    ))}
                    <SafeArea position="bottom" />
                </TabBar>
            }


        </div>
    );

}

export default Tabbar;