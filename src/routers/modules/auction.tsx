import React from 'react'
import lazyLoad from '@/routers/utils/lazyLoad'
import { RouteObject } from '@/routers/interface'

// 常用组件模块
const auctionRouter: Array<RouteObject> = [
	{
		path: '/auction',
		meta: {
			title: 'auction',
		},
		children: [
			{
				index: true as false,
				element: lazyLoad(React.lazy(() => import('@/views/auction/index'))),
			},
			{
				path: 'detail/:id',
				element: lazyLoad(React.lazy(() => import('@/views/auction/detail'))),
				meta: {
					requiresAuth: false,
					title: 'auction detail',
					key: 'auction-detail',
				},
			},
		],
	},
]

export default auctionRouter
