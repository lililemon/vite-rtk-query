import React, { Suspense } from 'react'
import { SpinLoading } from 'antd-mobile'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import { loading } from '@/assets/lottie/index'
/**
 * @description 路由懒加载
 * @param {Element} Comp 需要访问的组件
 * @returns element
 */
const lazyLoad = (Comp: React.LazyExoticComponent<any>): React.ReactNode => {
  return (
    <Suspense
      fallback={
        <div className='w-full h-full flex items-center justify-center'>
          <Player
            autoplay
            loop
            src={loading}
            style={{ height: '100px', width: '100px' }}
          >
            <Controls visible={false} />
          </Player>
        </div>
      }
    >
      <Comp />
    </Suspense>
  )
}

export default lazyLoad
