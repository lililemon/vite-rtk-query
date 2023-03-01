import { useNavigate } from 'react-router-dom'
import { CountDown } from '../countdown'

interface auctionProps {
	name: string
	creater: string
	imgUrl: string
	countDown: number
	bid: number
	symbol: string
}

const AuctionItem = (props: auctionProps) => {
	const { name, creater, imgUrl, countDown, bid, symbol = 'ETH' } = props
	const navigate = useNavigate()
	return (
		<div className="rounded-lg bg-ink p-4" onClick={()=>navigate(`/auction/detail/${name}`)}>
			<div className="flex items-center justify-between">
				<span className="title-third truncate">{name}</span>
				{/* <span className="text-sm font-normal text-ink-lighter">@{creater}</span> */}
			</div>
			<div className="aspect-w-1 aspect-h-1 my-4">
				<img className=" object-cover rounded-lg" src={imgUrl} alt="" />
			</div>
			<div className="flex items-center justify-between">
				<div>
					<CountDown countDown={countDown} />
					<p className="text-xs font-normal text-ink-lighter">Remaining time</p>
				</div>
				<div className="text-right">
					<p className="text-sm font-bold text-magenta">
						{bid}
						{symbol}
					</p>
					<p className="text-xs font-normal text-ink-lighter">Highest bid</p>
				</div>
			</div>
		</div>
	)
}

export default AuctionItem
