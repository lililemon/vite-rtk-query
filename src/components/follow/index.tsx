import { CheckShieldFill } from 'antd-mobile-icons'
interface followProps {
	avatar: string
	isAuth: boolean
	name: string
	isFollow: boolean
}
const Follow = (props: followProps) => {
	const { avatar, isAuth, name, isFollow } = props
	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center">
				<div className='relative'>
					<img src={avatar} alt="" className="h-12 w-12 rounded-full" />
					<CheckShieldFill className='absolute right-0 bottom-0 text-green text-base' />
				</div>

				<div className="ml-4">
					<p className="title-third">{name}</p>
					<p className="content">Creator</p>
				</div>
			</div>
			{isFollow && (
				<div className="title-third flex h-8 items-center rounded-full border border-ink px-4 active:opacity-80">
					Unfollow
				</div>
			)}
			{!isFollow && (
				<div className="title-third flex h-8 items-center rounded-full bg-phthaloblue px-4 active:opacity-80">
					Follow
				</div>
			)}
		</div>
	)
}

export default Follow
