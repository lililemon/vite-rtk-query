import { useNavigate } from 'react-router-dom'
import { BellOutline } from 'antd-mobile-icons'
import { Badge, SafeArea } from 'antd-mobile'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'

import AuctionItem from '@/components/auction'
import CollectionItem from '@/components/collection'
import avatar from '@/assets/img/avatar.png'
import art1 from '@/assets/img/art1.jpeg'
import art2 from '@/assets/img/art2.jpg'
import art3 from '@/assets/img/art3.jpg'
import art4 from '@/assets/img/art4.jpg'
const Home = () => {
	const navigate = useNavigate()
	const artList = [
		{
			name: 'Otherdeed for Otherside',
			creater: 'OthersideMeta',
			imgUrl: art1,
			countDown: 212442,
			bid: 0.07,
			symbol: 'ETH',
		},
		{
			name: 'Moonbirds',
			creater: 'PROOF_XYZ',
			imgUrl: art2,
			countDown: 212442,
			bid: 0.07,
			symbol: 'ETH',
		},
		{
			name: 'BEANZ Official',
			creater: 'TeamAzuki',
			imgUrl: art3,
			countDown: 212442,
			bid: 0.07,
			symbol: 'ETH',
		},
		{
			name: 'Azuki',
			creater: 'TeamAzuki',
			imgUrl: art4,
			countDown: 212442,
			bid: 0.07,
			symbol: 'ETH',
		},
	]
	const collectionList =[
		{
			name:'Otherdeed for Otherside',
			avatar:avatar,
			itemsCount:3,
			volume:1212,
			symbol:'ETH',
			change:163.76
		},
		{
			name:'BEANZ Official',
			avatar:avatar,
			itemsCount:3,
			volume:1212,
			symbol:'ETH',
			change:163.76
		},
		{
			name:'Azuki',
			avatar:avatar,
			itemsCount:3,
			volume:1212,
			symbol:'ETH',
			change:163.76
		}
	]
	const items = artList.map((item, index) => (
		<SwiperSlide key={'swi'+index} className="rounded-lg bg-ink">
			<AuctionItem {...item} />
		</SwiperSlide>
	))
	return (
		<div>
			<div className="flex items-center justify-between border-b border-ink-dark px-6 py-6 ">
				<div>
					<p className="title-first">Hello William</p>
					<p className="mt-2 text-sm font-normal text-ink-lighter">
						Good Morning
					</p>
				</div>
				<div className="flex items-center">
					<Badge
						content={Badge.dot}
						color="#F5367A"
						style={{ '--right': '20%', '--top': '15%' }}
					>
						<BellOutline fontSize={24} color="#fff" onClick={()=>navigate('/notice')} />
					</Badge>
					<img className="ml-3 h-10 w-10 rounded-full" src={avatar} alt="" />
				</div>
			</div>
			<div className="pt-6">
				<div className="mb-4 flex items-center justify-between px-6">
					<p className="title-second pl-3">Live auctions</p>
					<p className="text-sm font-bold text-skyblue" onClick={()=>navigate('/auction')}>See all</p>
				</div>
				<Swiper
					slidesPerView={'auto'}
					spaceBetween={16}
					slidesOffsetBefore={24}
					slidesOffsetAfter={24}
					className="mySwiper"
				>
					{items}
				</Swiper>
			</div>
			<div className="pt-6 px-6">
				<div className="mb-4 flex items-center justify-between ">
					<p className="title-second">Top collection</p>
					<p className="text-sm font-bold text-skyblue" onClick={()=>navigate('/collection')}>See all</p>
				</div>
				{
					collectionList.map((item,index)=>{
						return <CollectionItem key={'coll'+index} {...item} />
					})
				}
			</div>
			<SafeArea position='bottom' />
		</div>
	)
}
import './index.less'
export default Home
