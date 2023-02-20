import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";
import { Navigate } from "react-router-dom";


// 常用组件模块
const homeRouter: Array<RouteObject> = [
	{
		index:true as false,
        element: lazyLoad(React.lazy(() => import("@/views/guide/start"))),
    },
	{
		path:'/home',
		meta: {
			title: "首页"
		},
		element: lazyLoad(React.lazy(() => import("@/views/tabbar/home/index"))),
	}
];

export default homeRouter;
