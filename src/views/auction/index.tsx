import TitleHeader from '@/components/header/titleHeader'
import BidItem from '@/components/auction/bid';


import art1 from '@/assets/img/art1.jpeg'
import art2 from '@/assets/img/art2.jpg'
import art3 from '@/assets/img/art3.jpg'
import art4 from '@/assets/img/art4.jpg'
const Auction = () => {
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
    return ( 
        <>
            <TitleHeader title='Live auctions' />
            <div className='px-6'>
                {
                    artList.map(item=>{
                        return <BidItem {...item} />
                    })
                }
            </div>
        </>
     );
}
 
export default Auction;