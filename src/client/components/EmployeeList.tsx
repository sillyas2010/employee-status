import { memo } from 'react'

import { indicators, statusOptions } from '../constants/statuses'
import { Employee, EmployeeStatus } from '../types'
import Select from './Select'

interface EmployeeListProps {
	employees: Employee[]
	onStatusUpdate: (employeeId: number, newStatus: EmployeeStatus) => void
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

const EmployeeList = ({ employees, onStatusUpdate }: EmployeeListProps) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-[3.2rem]">
			{employees.map((employee, index) => (
				<div
					key={`${employee.id}-${index}`}
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
									label={`${employee.name} current status`}
									selectedValue={employee.status}
									hasDefault={false}
									options={statusOptions}
									onChange={value =>
										onStatusUpdate(employee.id, value as EmployeeStatus)
									}
									className="w-full py-0 pl-[.8rem] pr-[2.1rem] text-xs bg-transparent border-none focus:ring-offset-2"
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

export default memo(EmployeeList)
