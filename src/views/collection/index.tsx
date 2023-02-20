import TitleHeader from '@/components/header/titleHeader'
import CollectionItem from '@/components/collection'
import avatar from '@/assets/img/avatar.png'

const Collection = () => {
	const collectionList = [
		{
			name: 'Otherdeed for Otherside',
			avatar: avatar,
			itemsCount: 3,
			volume: 1212,
			symbol: 'ETH',
			change: 163.76,
		},
		{
			name: 'BEANZ Official',
			avatar: avatar,
			itemsCount: 3,
			volume: 1212,
			symbol: 'ETH',
			change: 163.76,
		},
		{
			name: 'Azuki',
			avatar: avatar,
			itemsCount: 3,
			volume: 1212,
			symbol: 'ETH',
			change: 163.76,
		},
	]
	return (
        <>
            <TitleHeader title='Top collection ' />
            <div className='px-6 mt-6'>
                {collectionList.map((item) => {
                    return <CollectionItem {...item} />
                })}
            </div>
        </>
	)
}

export default Collection
