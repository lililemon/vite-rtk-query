import { Navigate, useRoutes } from "react-router-dom";
import { RouteObject } from "@/routers/interface";
import Login from "@/views/login/index";
import Home from "@/views/tabbar/home";
import Layout from "@/views/layouts";

// * 导入所有router
const metaRouters = import.meta.glob("./modules/*.tsx",{eager:true,import:'default'});

// * 处理路由
export const routerArray: RouteObject[] = [];
Object.keys(metaRouters).forEach(item => {
	Object.keys(metaRouters[item] as {}).forEach((key: any) => {
		routerArray.push((metaRouters[item] as any)[key]);
	});
});
export const rootRouter: RouteObject[] = [
	{
		path: "/",
		element: <Layout />,
		children:[
			{
				path: "/login",
				element: <Login />,
				meta: {
					requiresAuth: false,
					title: "登录页",
					key: "login"
				}
			},
			...routerArray,
			{
				path: "*",
				element: <Navigate to="/404" />
			}
		]
	},
	
];
const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};

export default Router;
