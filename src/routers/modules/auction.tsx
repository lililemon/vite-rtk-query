import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { RouteObject } from "@/routers/interface";

// 常用组件模块
const auctionRouter: Array<RouteObject> = [
	{
		path:"/auction",
		element: lazyLoad(React.lazy(() => import("@/views/auction/index"))),
		meta: {
			title: "auction"
		},
	}
];

export default auctionRouter;
