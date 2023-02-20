import { Badge } from 'antd-mobile'

interface collectionProps {
	name: string
	avatar: string
	itemsCount: number
	volume: number
	symbol: string
	change: number
}
const CollectionItem = (props: collectionProps) => {
	const { name, avatar, itemsCount, volume, symbol, change } = props
	return (
		<div className="mb-4 w-full rounded-lg bg-ink flex items-center justify-between p-3" style={{ height: '4.5rem' }}>
			<div className='flex items-center justify-start w-0 flex-grow pr-2'>
				<Badge
					content={itemsCount}
					color="#F5367A"
					style={{ '--top': '86%', '--right': '14%' }}
				>
					<img className="h-12 w-12 rounded-full object-cover " src={avatar} alt="" />
				</Badge>
				<div className='ml-3 w-0 flex-grow'>
					<p className='title-third truncate'>{name}</p>
					<p className='content'>
						{volume}{symbol}
					</p>
				</div>
			</div>
            {
                change >=0?
                <p className='text-green text-sm font-bold whitespace-nowrap'>+ {change}%</p>
                :<p className='text-red text-sm font-bold whitespace-nowrap'>+ {change}%</p>
            }
		</div>
	)
}
import './index.less'
export default CollectionItem
