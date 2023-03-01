interface simplifyBidProps {
	name: string
	avatar: string
	timestramp: number
	chainId: number
	price: number
	symbol: string
}
const SimplifyBid = (props: simplifyBidProps) => {
	const { name, avatar, timestramp, chainId, price, symbol } = props
    const formatDate = new Date(timestramp).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })
	return (
        <div className="flex items-center justify-between">
			<div className="flex items-center flex-grow">
				<div className='relative'>
					<img src={avatar} alt="" className="h-12 w-12 rounded-full" />
				</div>

				<div className="ml-4 w-0 flex-grow pr-2">
					<p className="title-third truncate">Bid placed by {name}</p>
					<p className="content">{formatDate}</p>
				</div>
			</div>
			<div>
                <p>{price}{symbol}</p>
            </div>
		</div>
    )
}

export default SimplifyBid
