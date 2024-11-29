import { useRef } from 'react'

import { useButton } from '@react-aria/button'

import type { AriaButtonProps } from '@react-aria/button'

interface ButtonProps extends AriaButtonProps {
	padding?: string
	variant?: 'primary' | 'outline'
	children: React.ReactNode
	className?: string
}

const Button = ({
	variant = 'primary',
	padding = 'px-8 py-2',
	children,
	className = '',
	...props
}: ButtonProps) => {
	const ref = useRef<HTMLButtonElement>(null)
	const { buttonProps, isPressed } = useButton(
		{
			...props,
			elementType: 'button',
		},
		ref,
	)

	const baseStyles =
		'rounded-button font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'

	const variantStyles = {
		primary: `
      bg-blue-600 text-white 
      hover:bg-blue-700 
      active:bg-blue-800 
      focus:ring-blue-500 
      disabled:bg-blue-300 
      disabled:cursor-not-allowed
      ${isPressed ? 'scale-95' : ''}
    `,
		outline: `
      border border-primary 
      text-primary
      hover:bg-primary-50
      active:bg-primary-100
      focus:ring-primary
      disabled:bg-gray-100 
      disabled:text-gray-400 
      disabled:cursor-not-allowed
      ${isPressed ? 'scale-95' : ''}
    `,
	}

	const combinedClassName =
		`${padding} ${baseStyles} ${variantStyles[variant]} ${className}`
			.replace(/\s+/g, ' ')
			.trim()

	return (
		<button {...buttonProps} ref={ref} className={combinedClassName}>
			{children}
		</button>
	)
}

export default Button
