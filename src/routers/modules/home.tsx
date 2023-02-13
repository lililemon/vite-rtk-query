import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";
import { Navigate } from "react-router-dom";


// 常用组件模块
const homeRouter: Array<RouteObject> = [
	{
		index:true as false,
        element: <Navigate to={'/home'} />,
    },
	{
		path:'/home',
		meta: {
			title: "首页"
		},
		element: lazyLoad(React.lazy(() => import("@/views/tabbar/home/index"))),
		// children: [
		// 	{
		// 		path: "home",
		// 		element: lazyLoad(React.lazy(() => import("@/views/tabbar/home/index"))),
		// 		meta: {
		// 			requiresAuth: false,
		// 			title: "home页",
		// 			key: "home"
		// 		}
		// 	},
			// {
			// 	path: "hh",
			// 	element: lazyLoad(React.lazy(() => import("@/views/login/index"))),
			// 	meta: {
			// 		requiresAuth: false,
			// 		title: "引导页",
			// 		key: "hh"
			// 	}
			// },
			// {
			// 	path: "/assembly/svgIcon",
			// 	element: lazyLoad(React.lazy(() => import("@/views/assembly/svgIcon/index"))),
			// 	meta: {
			// 		requiresAuth: true,
			// 		title: "SVG 图标",
			// 		key: "svgIcon"
			// 	}
			// },
			// {
			// 	path: "/assembly/selectIcon",
			// 	element: lazyLoad(React.lazy(() => import("@/views/assembly/selectIcon/index"))),
			// 	meta: {
			// 		requiresAuth: true,
			// 		title: "Icon 选择",
			// 		key: "selectIcon"
			// 	}
			// },
			// {
			// 	path: "/assembly/batchImport",
			// 	element: lazyLoad(React.lazy(() => import("@/views/assembly/batchImport/index"))),
			// 	meta: {
			// 		requiresAuth: true,
			// 		title: "批量导入数据",
			// 		key: "selectIcon"
			// 	}
			// }
		// ]
	}
];

export default homeRouter;
