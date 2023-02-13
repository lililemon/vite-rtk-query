import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { RouteObject } from "@/routers/interface";

// 常用组件模块
const meRouter: Array<RouteObject> = [
	{
		path:"/me",
		element: lazyLoad(React.lazy(() => import("@/views/tabbar/me/index"))),
		meta: {
			title: "我的"
		},
		children: [
			{
				path: "me",
				element: lazyLoad(React.lazy(() => import("@/views/tabbar/me/index"))),
				meta: {
					requiresAuth: false,
					title: "me页",
					key: "me"
				}
			},
		]
	}
];

export default meRouter;
