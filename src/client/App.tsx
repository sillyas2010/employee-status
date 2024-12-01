import { useCallback } from 'react'

import Button from './components/Button'
import CreateEmployeeModal from './components/CreateEmployeeModal'
import EmployeeList from './components/EmployeeList'
import Filters from './components/Filters'
import { useEmployeesList } from './hooks/useEmployeesList'

function App() {
	const {
		filteredEmployees,
		isCreateModalOpen,
		setIsCreateModalOpen,
		handleSearch,
		handleStatusFilter,
		requestStatusChange,
	} = useEmployeesList()

	const memoizedOpenCreateModal = useCallback(() => {
		setIsCreateModalOpen(true)
	}, [setIsCreateModalOpen])

	const memoizedHandleSubmit = useCallback(() => {
		console.log('Creation is planned in v1.0 ;)')
	}, [])

	return (
		<div className="w-full max-w-6xl mx-auto px-9 py-[1.9rem] flex flex-col">
			<section className="flex flex-col sm:flex-row items-stretch justify-between flex-wrap">
				<Button
					className="text-xl leading-[1.5rem] rounded-md focus:ring-offset-2"
					padding="pl-[2.3rem] pr-[2rem] py-[1.2rem]"
					onPress={memoizedOpenCreateModal}
				>
					Create{' '}
					<span className="font-sans h-0 inline-block relative top-[.35rem] left-[.25rem] after:content-['+'] after:text-[2.4rem] after:[line-height:0]" />
				</Button>
				<div className="flex flex-1 justify-between items-center ml-0 sm:ml-[.5rem] mt-4 sm:mt-0 min-h-16 sm:min-h-0 w-full sm:w-auto rounded-md bg-white px-5">
					<Filters
						onSearch={handleSearch}
						onStatusFilter={handleStatusFilter}
					/>
				</div>
			</section>
			<section className="mt-[5rem]">
				<EmployeeList
					employees={filteredEmployees}
					onStatusUpdate={requestStatusChange}
				/>
			</section>
			<CreateEmployeeModal
				onSubmit={memoizedHandleSubmit}
				isOpen={isCreateModalOpen}
				setIsOpen={setIsCreateModalOpen}
			/>
		</div>
	)
}

export default App
