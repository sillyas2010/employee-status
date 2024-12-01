import { Dispatch, ReactNode, SetStateAction, useEffect, useRef } from 'react'
import {
	AriaModalOverlayProps,
	DialogAria,
	Overlay,
	useDialog,
	useModalOverlay,
} from 'react-aria'

interface ModalProps extends AriaModalOverlayProps {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
	className?: string
	children: (props: {
		close: () => void
		dialogProps?: DialogAria['dialogProps']
		titleProps?: DialogAria['titleProps']
	}) => ReactNode
}

export default function Modal({
	isOpen,
	setIsOpen,
	children,
	className = '',
	...props
}: ModalProps) {
	const ref = useRef(null)
	const hiddenElements = useRef<HTMLElement[]>([])
	const [onOpen, onClose, onToggle] = [
		() => setIsOpen(true),
		() => {
			hiddenElements.current.forEach(el => {
				el.removeAttribute('inert')
			})
			setIsOpen(false)
		},
		() => setIsOpen(prev => !prev),
	]

	const { dialogProps, titleProps } = useDialog({ role: 'dialog' }, ref)
	const { modalProps, underlayProps } = useModalOverlay(
		props,
		{
			isOpen,
			setOpen: setIsOpen,
			open: onOpen,
			close: onOpen,
			toggle: onToggle,
		},
		ref,
	)

	useEffect(() => {
		if (isOpen) {
			hiddenElements.current = Array.from(
				document.querySelectorAll<HTMLElement>('[aria-hidden="true"]'),
			)
			hiddenElements.current.forEach(el => {
				el.setAttribute('inert', 'true')
			})
		}
	}, [isOpen])

	return (
		<Overlay>
			<div
				{...underlayProps}
				className="fixed inset-0 bg-black/50 flex items-center justify-center"
			>
				<div
					{...modalProps}
					{...dialogProps}
					ref={ref}
					className={`bg-white rounded-sm py-6 px-7 w-[400px] relative ${className}`}
				>
					{children({
						close: onClose,
						titleProps,
						dialogProps,
					})}
				</div>
			</div>
		</Overlay>
	)
}
