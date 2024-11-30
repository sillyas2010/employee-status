import { EmployeeStatus } from '../types'

export const statuses: Record<EmployeeStatus, string> = {
	working: 'Working',
	'on-vacation': 'On Vacation',
	'business-trip': 'Business Trip',
	'lunch-time': 'Lunch Time',
} as const

export const indicators: Record<EmployeeStatus, string> = {
	working: 'before:bg-status-working',
	'on-vacation': 'before:bg-status-on-vacation',
	'business-trip': 'before:bg-status-business-trip',
	'lunch-time': 'before:bg-status-lunch-time',
} as const
