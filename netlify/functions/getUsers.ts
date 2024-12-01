import { Handler } from '@netlify/functions'

import { employees } from './data/employees'

export const handler: Handler = async () => {
	return {
		statusCode: 200,
		body: JSON.stringify(employees),
	}
}
