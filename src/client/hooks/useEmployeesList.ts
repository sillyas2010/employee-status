import { useEffect, useState } from 'react'

import { Employee, EmployeeStatus } from '../types'

export const useEmployeesList = () => {
	const [employees, setEmployees] = useState<Employee[]>([])
	const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([])
	const [searchQuery, setSearchQuery] = useState('')
	const [statusFilter, setStatusFilter] = useState('')
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

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

	const afterStatusUpdate = (employeeId: number, newStatus: EmployeeStatus) => {
		setEmployees(prevEmployees => {
			const newEmployees = prevEmployees.map(emp =>
				emp.id === employeeId ? { ...emp, status: newStatus } : emp,
			)

			filterEmployees(searchQuery, statusFilter, newEmployees)

			return newEmployees
		})
	}

	const requestStatusChange = async (
		employeeId: number,
		newStatus: EmployeeStatus,
	) => {
		try {
			await fetch(`/users/${employeeId}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ status: newStatus }),
			})
			afterStatusUpdate(employeeId, newStatus)
		} catch (error) {
			console.error('Error updating employee status:', error)
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

	const filterEmployees = (
		query: string,
		status: string,
		initialList = employees,
	) => {
		let filtered = initialList

		if (!query && !status) {
			filtered = initialList
		}

		if (query) {
			filtered = filtered.filter((emp: Employee) =>
				emp.name.toLowerCase().includes(query.toLowerCase()),
			)
		} else {
			filtered = initialList
		}

		if (status) {
			filtered = filtered.filter((emp: Employee) => emp.status === status)
		}

		setFilteredEmployees(filtered)
	}

	return {
		filteredEmployees,
		isCreateModalOpen,
		setIsCreateModalOpen,
		handleSearch,
		handleStatusFilter,
		requestStatusChange,
	}
}
