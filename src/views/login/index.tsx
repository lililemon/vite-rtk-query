import { useNavigate } from 'react-router-dom'

import SvgIcon from '@/components/svgIcon'

const Login = () => {
	const navigate = useNavigate()
	const walletList = [
		{
			name: 'metamask',
		},
		{
			name: 'coinbase',
		},
		{
			name: 'walletConnect',
		},
	]
	return (
		<div className="flex flex-col items-center px-6 py-8">
			<p className="text-3xl font-semibold text-white mb-20">Sign In</p>
			{
                walletList.map(item => {
                    return <div className='bg-ink w-full h-12 rounded-lg backdrop-filter backdrop-blur-2xl mb-4 px-3 flex items-center justify-between'>
						<SvgIcon name={item.name} iconStyle={{ width: '2rem', height: '2rem' }} />
						<span className='text-white font-bold text-base'>Connect to {item.name}</span>
						<span className='w-8'></span>
					</div>
                })
            }
			<p className='text-2xl mt-4 text-white font-semibold'>Connect With Your Wallet</p>
			<p className='text-base font-normal text-center text-ink-lighter'>Just one tap for signin with your wallet. What is your wallet?</p>
			<div className='bandbtn flex items-center justify-center mt-16' onClick={()=>navigate('/home')}>
				Next
			</div>
			<p className='text-white text-base font-bold mt-8'>Explore The Future</p>
		</div>
	)
}

export default Login
