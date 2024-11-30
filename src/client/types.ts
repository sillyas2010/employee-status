export type Entries<T> = {
	[K in keyof T]: [K, T[K]]
}[keyof T][]

export type EmployeeStatus =
	| 'working'
	| 'on-vacation'
	| 'business-trip'
	| 'lunch-time'

export interface Employee {
	id: number
	name: string
	status: EmployeeStatus
	img: string
}
