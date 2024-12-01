import { Handler } from '@netlify/functions'

import { employees } from './data/employees'

export const handler: Handler = async event => {
	const segments = event.path.split('/')
	const id = segments[segments.length - 1]

	if (!event.body || !id) {
		return {
			statusCode: 400,
			body: JSON.stringify({ message: 'Missing required data' }),
		}
	}

	const userId = parseInt(id)
	const { status } = JSON.parse(event.body)

	const index = employees.findIndex(obj => obj.id === userId)
	if (index === -1) {
		return {
			statusCode: 404,
			body: JSON.stringify({ message: 'User not found' }),
		}
	}

	employees[index].status = status

	return {
		statusCode: 200,
		body: JSON.stringify(employees),
	}
}
