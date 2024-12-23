import { memo } from 'react'

import { focusState } from '../constants/styling'

interface Option {
	value: string
	label: string
}

interface SelectProps {
	options: Option[]
	label?: string
	placeholder?: string
	className?: string
	hasDefault?: boolean
	selectedValue?: string
	onChange: (value: string) => void
}

const Select = ({
	options,
	label,
	hasDefault = true,
	selectedValue,
	placeholder = 'Select an option',
	className = '',
	onChange,
}: SelectProps) => {
	const selectArrow = `after:w-0 after:h-0 after:right-[.3rem] after:content-[''] after:border-transparent after:border-t-secondary-400 after:border-t-[.4rem] after:border-l-[.4rem] after:border-r-[.4rem] after:absolute after:top-[55%] after:translate-y-[-50%]`

	return (
		<div className={`relative ${selectArrow}`}>
			<select
				aria-label={label || placeholder}
				value={selectedValue}
				className={`appearance-none bg-transparent font-madet font-normal text-secondary-500 ${focusState} focus:rounded-sm ${className}`}
				onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
					onChange(e.target.value)
				}
			>
				{hasDefault && <option value="">{placeholder}</option>}
				{options.map(option => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	)
}

export default memo(Select)
