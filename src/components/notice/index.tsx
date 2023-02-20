import { convertTimestampToHumanReadable } from '@/utils/util'
interface noticeProps {
	title: string
	content: string
	imgUrl: string
	timestamp: number
}

const Notice = (props: noticeProps) => {
	const { title, content, imgUrl, timestamp } = props
	return (
		<div
			className="mb-4 flex w-full items-center justify-between rounded-lg bg-ink p-3"
			style={{ height: '4.5rem' }}
		>
			<div className="flex w-0 flex-grow items-center justify-start pr-2">
				<img
					className="h-12 w-12 rounded-lg object-cover "
					src={imgUrl}
					alt=""
				/>
				<div className="ml-3 w-0 flex-grow">
					<p className="title-third truncate">{title}</p>
					<p className="content">{content}</p>
				</div>
			</div>
			<p className='content'>
                {convertTimestampToHumanReadable(timestamp)}
            </p>
		</div>
	)
}

export default Notice
