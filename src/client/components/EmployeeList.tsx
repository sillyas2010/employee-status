import { indicators, statuses } from '../constants/statuses'
import { Employee, EmployeeStatus, Entries } from '../types'
import Select from './Select'

interface EmployeeListProps {
	employees: Employee[]
	onStatusUpdate: () => void
}

const indicatorInner = (status: EmployeeStatus) => `
  border-b 
  border-b-secondary-400 
  before:content-[''] 
  before:absolute 
  before:w-2 
  before:h-2 
  before:rounded-full 
  before:left-0 
  before:top-[55%] 
  before:-translate-y-1/2 
  ${indicators[status]}
`

const indicatorOuter = `
  after:content-[''] 
  after:absolute 
  after:w-1 
  after:h-1 
  after:rounded-full 
  after:left-0.5 
  after:top-[55%] 
  after:-translate-y-1/2 
  after:bg-white 
`

const statusOptions = (
	Object.entries(statuses) as Entries<typeof statuses>
).map(([value, label]) => ({
	value,
	label,
}))

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
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-[3.2rem]">
			{employees.map(employee => (
				<div
					key={employee.id}
					className="flex rounded-md bg-white min-h-[11rem] py-6 pl-6 pr-6 drop-shadow-gray hover:drop-shadow-primary transition-shadow duration-200"
				>
					<img
						src={`/avatars/${employee.img}`}
						alt={employee.name}
						className="inline-block w-[7.9rem] h-[7.9rem] rounded-full object-cover"
					/>
					<div className="w-full flex flex-col pl-[1.4rem]">
						<h3 className="font-medium text-regular text-gray-700 tracking-[.05rem] mt-auto">
							{employee.name}
						</h3>
						<div className="w-full flex items-center mt-2 relative">
							<div
								className={`w-full ${indicatorInner(employee.status)} ${indicatorOuter}`}
							>
								<Select
									selectedValue={employee.status}
									hasDefault={false}
									options={statusOptions}
									onChange={value => handleStatusChange(employee.id, value)}
									className="w-full py-0 pl-[.8rem] text-xs bg-transparent border-none"
									placeholder="Select an option"
								/>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default EmployeeList
