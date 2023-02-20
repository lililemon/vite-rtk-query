import { CountDown } from '../countdown'

interface auctionProps {
	name: string
	creater: string
	imgUrl: string
	countDown: number
	bid: number
	symbol: string
}

const BidItem = (props: auctionProps) => {
	const { name, creater, imgUrl, countDown, bid, symbol = 'ETH' } = props
	return (
		<div className="mb-4 rounded-lg bg-ink p-4">
			<div className="flex items-center justify-between">
				<span className="title-third flex-grow truncate pr-3">{name}</span>
				<span className="text-sm font-normal text-ink-lighter">@{creater}</span>
			</div>
			<div className="relative my-4">
				<div className='aspect-w-3 aspect-h-2'>
					<img className="rounded-lg object-cover" src={imgUrl} alt="" />
				</div>
				<div style={{width:'calc(100% - 1.5rem)'}} className="absolute bottom-3 left-3 flex items-center justify-between rounded-lg bg-white bg-opacity-5 px-4 py-3 backdrop-blur-md backdrop-filter">
					<div>
						<CountDown countDown={countDown} />
						<p className="text-xs font-normal text-white">
							Remaining time
						</p>
					</div>
					<div className="text-right">
						<p className="text-sm font-bold text-magenta">
							{bid}
							{symbol}
						</p>
						<p className="text-xs font-normal text-white">Highest bid</p>
					</div>
				</div>
			</div>
            <div className='bidbtn flex items-center justify-center'>
                Place a bid
            </div>
		</div>
	)
}

export default BidItem
