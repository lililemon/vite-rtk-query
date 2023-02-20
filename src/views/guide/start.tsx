import { useNavigate } from 'react-router'

import startBg from '@/assets/img/startbg.png'
import SvgIcon from '@/components/svgIcon'
const Start = () => {
	const navigate = useNavigate()
	const startApp = () => {
		navigate('/login')
	}
	return (
		<>
			<div
				className="flex h-full flex-col justify-between bg-cover bg-center bg-no-repeat px-6 py-8"
				style={{
					backgroundImage: `url(${startBg})`,
				}}
			>
				<p className="text-2xl font-semibold text-white">
					NFT<span className="text-2xl font-semibold text-magenta">leus.</span>{' '}
				</p>
				<div>
					<div className="text-5xl font-semibold text-white">
						Let's Start Making Your Own Best NFT’s
					</div>
					<p className="text-white text-opacity-60 mt-3">
						Create, Discover, and Collect Digital Artowrk
					</p>
                    <div onClick={()=>startApp()} className='mt-8 h-12 rounded-3xl bg-white backdrop-filter backdrop-blur-md bg-opacity-10 cursor-pointer select-none flex items-center justify-between px-2 active:bg-opacity-20'>
                        <div className='w-8 h-8 rounded-full bg-brand flex items-center justify-center'>
							<SvgIcon name='arrowright' iconStyle={{width:'20px',height:'20px'}} />
                        </div>
						<span className='text-base text-white font-bold'>Lets get started</span>
						<div className='w-8'></div>
                    </div>
				</div>
			</div>
			{/* <img src={startBg} alt="" className=" flex-1" /> */}
		</>
	)
}

export default Start
