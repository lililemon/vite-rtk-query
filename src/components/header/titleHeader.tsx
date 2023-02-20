import BaseHeader from './baseHeader'
interface headprops {
	title: string
}
const TitleHeader = (props: headprops) => {
	const { title } = props
	return (
		<>
			<BaseHeader />
			<div
				className="title-first flex items-center px-6"
				style={{ height: '3.75rem' }}
			>
				{title}
			</div>
		</>
	)
}

export default TitleHeader
