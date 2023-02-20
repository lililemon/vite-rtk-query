import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { RouteObject } from "@/routers/interface";

// 常用组件模块
const noticeRouter: Array<RouteObject> = [
	{
		path:"/notice",
		element: lazyLoad(React.lazy(() => import("@/views/notice/index"))),
		meta: {
			title: "通知"
		},
	}
];

export default noticeRouter;
