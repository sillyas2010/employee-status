import { useEffect, useState } from 'react'

import Button from './components/Button'
import EmployeeList from './components/EmployeeList'
import Filters from './components/Filters'
import { Employee } from './types'

function App() {
	const [employees, setEmployees] = useState<Employee[]>([])
	const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([])
	const [searchQuery, setSearchQuery] = useState('')
	const [statusFilter, setStatusFilter] = useState('')

	useEffect(() => {
		fetchEmployees()
	}, [])

	const fetchEmployees = async () => {
		try {
			const response = await fetch('/users')
			const data = await response.json()
			setEmployees(data)
			setFilteredEmployees(data)
		} catch (error) {
			console.error('Error fetching employees:', error)
		}
	}

	const handleSearch = (query: string) => {
		setSearchQuery(query)
		filterEmployees(query, statusFilter)
	}

	const handleStatusFilter = (status: string) => {
		setStatusFilter(status)
		filterEmployees(searchQuery, status)
	}

	const filterEmployees = (query: string, status: string) => {
		let filtered = employees

		if (query) {
			filtered = filtered.filter((emp: Employee) =>
				emp.name.toLowerCase().includes(query.toLowerCase()),
			)
		}

		if (status) {
			filtered = filtered.filter((emp: Employee) => emp.status === status)
		}

		setFilteredEmployees(filtered)
	}

	return (
		<div className="w-full max-w-6xl mx-auto px-9 py-[1.9rem] flex flex-col">
			<section className="flex items-stretch justify-between">
				<Button
					className="text-xl leading-[1.5rem] rounded-md"
					padding="pl-[2.3rem] pr-[2rem] py-[1.2rem]"
				>
					Create{' '}
					<span className="font-sans h-0 inline-block relative top-[.35rem] left-[.25rem] after:content-['+'] after:text-[2.4rem] after:[line-height:0]" />
				</Button>
				<div className="flex flex-1 justify-between items-center ml-[.5rem] rounded-md bg-white px-5">
					<Filters
						onSearch={handleSearch}
						onStatusFilter={handleStatusFilter}
					/>
				</div>
			</section>
			<section className="mt-[5rem]">
				<EmployeeList
					employees={filteredEmployees}
					onStatusUpdate={fetchEmployees}
				/>
			</section>
		</div>
	)
}

export default App
