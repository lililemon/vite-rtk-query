import React, { Suspense } from "react";
import { SpinLoading } from "antd-mobile";

/**
 * @description 路由懒加载
 * @param {Element} Comp 需要访问的组件
 * @returns element
 */
const lazyLoad = (Comp: React.LazyExoticComponent<any>): React.ReactNode => {
	return (
		<Suspense
			fallback={
				<SpinLoading />
			}
		>
			<Comp />
		</Suspense>
	);
};

export default lazyLoad;
