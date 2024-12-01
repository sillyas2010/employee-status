import { memo, useRef } from 'react'

import { useButton } from '@react-aria/button'

import { focusState } from '../constants/styling'

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

	const baseStyles = `rounded-button font-madet font-medium tracking-wider transition-all duration-200 ${focusState}`

	const variantStyles = {
		primary: `
      bg-primary text-white 
      hover:bg-primary-600 
      active:bg-primary-700 
      disabled:bg-primary-300 
      disabled:cursor-not-allowed
      ${isPressed ? 'scale-95' : ''}
    `,
		outline: `
      border border-primary 
      text-primary
      hover:bg-primary-50
      active:bg-primary-100 
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

export default memo(Button)
