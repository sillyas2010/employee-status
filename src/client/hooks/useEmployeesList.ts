import { useCallback, useEffect, useState } from 'react'

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

	const fetchEmployees = useCallback(async () => {
		try {
			const response = await fetch('/users')
			const data = await response.json()
			setEmployees(data)
			setFilteredEmployees(data)
		} catch (error) {
			console.error('Error fetching employees:', error)
		}
	}, [])

	const filterEmployees = useCallback(
		(query: string, status: string, initialList = employees) => {
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
		},
		[employees],
	)

	const handleSearch = useCallback(
		(query: string) => {
			setSearchQuery(query)
			filterEmployees(query, statusFilter)
		},
		[statusFilter, filterEmployees],
	)

	const handleStatusFilter = useCallback(
		(status: string) => {
			setStatusFilter(status)
			filterEmployees(searchQuery, status)
		},
		[searchQuery, filterEmployees],
	)

	const afterStatusUpdate = useCallback(
		(employeeId: number, newStatus: EmployeeStatus) => {
			setEmployees(prevEmployees => {
				const newEmployees = prevEmployees.map(emp =>
					emp.id === employeeId ? { ...emp, status: newStatus } : emp,
				)

				filterEmployees(searchQuery, statusFilter, newEmployees)

				return newEmployees
			})
		},
		[searchQuery, statusFilter, filterEmployees],
	)

	const requestStatusChange = useCallback(
		async (employeeId: number, newStatus: EmployeeStatus) => {
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
		},
		[afterStatusUpdate],
	)

	return {
		filteredEmployees,
		isCreateModalOpen,
		setIsCreateModalOpen,
		handleSearch,
		handleStatusFilter,
		requestStatusChange,
	}
}
