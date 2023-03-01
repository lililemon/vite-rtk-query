import { LeftOutline, HeartFill, HeartOutline } from 'antd-mobile-icons'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
interface prop{
	status:boolean
}
const FollowHeader = (props:prop) => {
	const {status} = props
	const navigate = useNavigate()
	const [likeStatus, setLikeStatus] = useState(status)

	return (
		<div className="flex h-12 w-full items-center justify-between px-6 z-10 absolute top-0">
			<div className="h-8 w-8 rounded-full bg-white flex items-center justify-center z-10">
				<LeftOutline color="#030304" fontSize={16} onClick={() => navigate(-1)} />
			</div>
			<div className='h-8 w-8 rounded-full bg-white flex items-center justify-center z-10'>
				{likeStatus && <HeartFill fontSize={16} color="#FF5247" />}
				{!likeStatus && <HeartOutline fontSize={16} color="#C2C2C3" />}
			</div>
		</div>
	)
}

export default FollowHeader
