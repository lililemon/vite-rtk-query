import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { RouteObject } from "@/routers/interface";

// 常用组件模块
const collRouter: Array<RouteObject> = [
	{
		path:"/collection",
		element: lazyLoad(React.lazy(() => import("@/views/collection/index"))),
		meta: {
			title: "collection"
		},
	}
];

export default collRouter;
