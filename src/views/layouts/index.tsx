import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import Tabbar from './tabbar'

const Layout = () => {
	const location = useLocation()
	const { pathname } = location
	useEffect(() => {
		if (document) {
			// 可以排除不需要置顶的页面

			if (document?.documentElement || document?.body) {
				if (document.body.scrollTop || document.documentElement.scrollTop > 0) {
					window.scrollTo(0, 0)
				}
			}
		}
	}, [pathname])
	return (
		<div className="flex h-screen flex-col sm:h-full">
			<main className="flex-1">
				<Outlet />
			</main>
			<nav className="sticky bottom-0 w-full">
				<Tabbar />
			</nav>
		</div>
	)
}

export default Layout
