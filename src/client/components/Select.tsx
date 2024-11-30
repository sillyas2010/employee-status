import React from 'react'

interface Option {
	value: string
	label: string
}

interface SelectProps {
	options: Option[]
	placeholder?: string
	className?: string
	onChange: (value: string) => void
}

function Select({
	options,
	placeholder = 'Select an option',
	className = '',
	onChange,
}: SelectProps) {
	const selectArrow = `after:w-0 after:h-0 after:right-[.3rem] after:content-[''] after:border-transparent after:border-t-secondary-400 after:border-t-[.4rem] after:border-l-[.4rem] after:border-r-[.4rem] after:absolute after:top-[55%] after:translate-y-[-50%]`

	return (
		<div className={`relative ${selectArrow}`}>
			<select
				className={`pl-[1.1rem] pr-[2.1rem] appearance-none font-madet font-normal text-secondary-500 focus:outline-none focus:ring-2 focus:ring-primary focus:rounded-sm ${className}`}
				onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
					onChange(e.target.value)
				}
			>
				<option value="">{placeholder}</option>
				{options.map(option => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	)
}

export default Select
