import { Dispatch, SetStateAction, useState } from 'react'

import { statusOptions } from '../constants/statuses'
import { EmployeeStatus } from '../types'
import Button from './Button'
import Modal from './Modal'
import Select from './Select'

interface CreateEmployeeModalProps {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
	onSubmit: (name: string, status: EmployeeStatus) => void
}

export default function CreateEmployeeModal({
	isOpen,
	setIsOpen,
	onSubmit,
}: CreateEmployeeModalProps) {
	const [name, setName] = useState('')
	const [status, setStatus] = useState<EmployeeStatus>(statusOptions[0].value)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (name.trim()) {
			onSubmit(name, status)
			setIsOpen(false)
		}
	}

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// Only allow English alphabetical characters and spaces
		const value = e.target.value.replace(/[^a-zA-Z\s]/g, '')
		setName(value)
	}

	if (!isOpen) return null

	return (
		<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
			{({ close, titleProps }) => (
				<>
					<h2 {...titleProps} className="text-xl mb-6">
						Create New User
					</h2>
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label className="block text-sm text-gray-600 mb-2">
								User name:
							</label>
							<input
								type="text"
								value={name}
								onChange={handleNameChange}
								className="w-full p-2 border rounded-md"
								placeholder="Enter name"
								required
							/>
						</div>
						<div className="mb-6">
							<label className="block text-sm text-gray-600 mb-2">
								Status:
							</label>
							<Select
								selectedValue={status}
								onChange={value => setStatus(value as EmployeeStatus)}
								options={statusOptions}
							/>
						</div>
						<div className="flex gap-3">
							<Button
								type="submit"
								className="text-white bg-blue-500 hover:bg-blue-600"
							>
								Create
							</Button>
							<button
								type="button"
								onClick={() => close()}
								className="px-4 py-2 text-gray-600 hover:text-gray-800"
							>
								Cancel
							</button>
						</div>
					</form>
				</>
			)}
		</Modal>
	)
}
