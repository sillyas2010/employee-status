import { InputHTMLAttributes } from 'react'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	className?: string
	placeholder?: string
	value: string
}

const TextInput = ({
	className = '',
	placeholder,
	onChange,
	value,
	...props
}: TextInputProps) => (
	<input
		type="text"
		value={value}
		onChange={onChange}
		className={`w-full text-secondary-800 border-none ${className}`}
		placeholder={placeholder}
		{...props}
	/>
)

export default TextInput
