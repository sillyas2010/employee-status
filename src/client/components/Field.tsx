import { ReactNode } from 'react'

const Field = ({
	label,
	className = '',
	children,
}: {
	label: string
	className?: string
	children: ReactNode
}) => (
	<div className={`mb-[1.45rem] border-b border-secondary-400 ${className}`}>
		<label className="block text-[.6rem] text-gray-400">{label}</label>
		{children}
	</div>
)

export default Field
