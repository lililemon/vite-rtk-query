import SvgIcon from '@/components/svgIcon'
const BottomTabbar = () => {
    return ( 
        <div className="flex items-center fixed bottom-0 w-full h-14 border-t-slate-300 border-t">
            <div className='flex-1 flex-col flex items-center'>
                <SvgIcon name="xianxingdaoyu" iconStyle={{width:'30px',height:'30px'}} />
                <p>首页</p>
            </div>
            <div className='flex-1 flex-col flex items-center'>
                <SvgIcon name="xianxingdaoyu" iconStyle={{width:'30px',height:'30px'}} />
                <p>社区</p>
            </div>
            <div className='flex-1 flex-col flex items-center'>
                <SvgIcon name="xianxingdaoyu" iconStyle={{width:'30px',height:'30px'}} />
                <p>发现</p>
            </div>
            <div className='flex-1 flex-col flex items-center'>
                <SvgIcon name="xianxingdaoyu" iconStyle={{width:'30px',height:'30px'}} />
                <p>我的</p>
            </div>
        </div>
     );
}
 
export default BottomTabbar;