import FollowHeader from '@/components/header/followHeader'
import { useParams } from 'react-router-dom'

import { CountDown } from '@/components/countdown'
import Follow from '@/components/follow'
import SimplifyBid from '@/components/auction/simplifyBid'

import avatar from '@/assets/img/avatar.png'
import art1 from '@/assets/img/art1.jpeg'
const AuctionDetail = () => {
	const { id } = useParams()
	const product = {
		name: 'Otherdeed for Otherside',
		creater: 'OthersideMeta',
		imgUrl: art1,
		countDown: 212442,
		bid: 0.07,
		symbol: 'ETH',
	}
	const currentBid = [
		{
			name: 'OthersideMeta',
			avatar: avatar,
			timestramp: 1677031907000,
			chainId: 1,
			price: 0.06,
			symbol: 'ETH',
		},
	]
	
	return (
		<div className="relative">
			<FollowHeader status />
			<div className="aspect-w-1 aspect-h-1 top-0 z-0 w-full">
				<img src={product.imgUrl} className="z-0" />
			</div>
			<div className="relative -top-8 mx-6 flex items-center justify-between rounded-lg bg-white bg-opacity-10 px-4 py-3 backdrop-blur-md backdrop-filter">
				<div className="z-10">
					<CountDown countDown={product.countDown} />
					<p className="text-xs font-normal text-ink-lighter">Remaining time</p>
				</div>
				<div className="z-10 text-right">
					<p className="text-sm font-bold text-magenta">
						{product.bid}
						{product.symbol}
					</p>
					<p className="text-xs font-normal text-ink-lighter">Highest bid</p>
				</div>
			</div>
			<div className="px-6">
				<p className="title-second">Space Color</p>
				<p className="content">
					Super color is a human who has many hopes or beautiful dreams but he
					is surrounded by fear within himself to make his dreams come true.
				</p>
			</div>
			<div className="border-b border-ink-dark p-6">
				<Follow
					avatar={avatar}
					isAuth={true}
					name="SuperRare"
					isFollow={false}
				/>
			</div>
			<div className="px-6 py-8">
				{currentBid.map((item, index) => {
					return <SimplifyBid key={'bid' + index} {...item} />
				})}
			</div>
		</div>
	)
}

export default AuctionDetail
