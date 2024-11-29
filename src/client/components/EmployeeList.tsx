import { Employee } from '../types'

interface EmployeeListProps {
	employees: Employee[]
	onStatusUpdate: () => void
}

function EmployeeList({ employees, onStatusUpdate }: EmployeeListProps) {
	const handleStatusChange = async (employeeId: number, newStatus: string) => {
		try {
			await fetch(`/users/${employeeId}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ status: newStatus }),
			})
			onStatusUpdate()
		} catch (error) {
			console.error('Error updating employee status:', error)
		}
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{employees.map(employee => (
				<div
					key={employee.id}
					className="bg-white rounded-card p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
				>
					<div className="flex items-center gap-4">
						<img
							src={employee.img}
							alt={employee.name}
							className="w-14 h-14 rounded-full object-cover"
						/>
						<div>
							<h3 className="font-medium text-lg">{employee.name}</h3>
							<div className="flex items-center gap-2 mt-1">
								<span
									className={`w-2 h-2 rounded-full bg-status-${employee.status.toLowerCase().replace(' ', '')}`}
								/>
								<span className="text-sm text-gray-600">{employee.status}</span>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default EmployeeList
