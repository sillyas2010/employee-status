import { Dispatch, SetStateAction, useState } from 'react'

import { statusOptions } from '../constants/statuses'
import { focusState } from '../constants/styling'
import { EmployeeStatus } from '../types'
import Button from './Button'
import Field from './Field'
import Modal from './Modal'
import Select from './Select'
import TextInput from './TextInput'

interface CreateEmployeeModalProps {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
	onSubmit: (name: string, status: EmployeeStatus) => void
}

const CreateEmployeeModal = ({
	isOpen,
	setIsOpen,
	onSubmit,
}: CreateEmployeeModalProps) => {
	const [name, setName] = useState('')
	const [status, setStatus] = useState<EmployeeStatus>(statusOptions[0].value)

	const handleSubmit = (e: React.FormEvent, close: () => void) => {
		e.preventDefault()
		if (name) {
			onSubmit(name, status)
			setName('')
			setStatus(statusOptions[0].value)
			close()
		}
	}

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// Only allow English alphabetical characters and spaces
		const value = e.target.value.replace(/[^a-zA-Z\s]/g, '')
		setName(value)
	}

	if (!isOpen) return null

	return (
		<Modal
			isOpen={isOpen}
			setIsOpen={setIsOpen}
			className="min-w-[25.9rem] py-5"
		>
			{({ close, titleProps }) => (
				<>
					<h2
						{...titleProps}
						className="font-medium text-lg text-secondary-800 mb-[.8rem]"
					>
						Create New User
					</h2>
					<span className="absolute left-0 right-0 h-[2px] bg-secondary-200" />
					<form onSubmit={e => handleSubmit(e, close)} className="pt-[1.1rem]">
						<Field label="User name:">
							<TextInput
								value={name}
								onChange={handleNameChange}
								placeholder="Enter name"
								className={`text-[1.05rem] pb-[.2rem] border-none ${focusState} focus:rounded-sm`}
								required
							/>
						</Field>
						<Field label="Status:">
							<Select
								selectedValue={status}
								hasDefault={false}
								onChange={value => setStatus(value as EmployeeStatus)}
								options={statusOptions}
								className="w-full pt-0 pb-1 pl-0 pr-0 text-[1.05rem] text-secondary-800"
							/>
						</Field>
						<div className="flex gap-[.6rem] mt-[2.6rem] mb-2">
							<Button
								type="submit"
								variant="primary"
								className="text-white px-[1.3rem] py-0 leading-5 focus:ring-offset-2"
							>
								Create
							</Button>
							<Button
								type="button"
								variant="outline"
								onPress={() => close()}
								className="px-[.5rem] py-0 leading-5 border-none text-secondary-600 font-normal hover:text-gray-800 focus:ring-offset-2"
							>
								Cancel
							</Button>
						</div>
					</form>
				</>
			)}
		</Modal>
	)
}

export default CreateEmployeeModal
