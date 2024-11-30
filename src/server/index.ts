import bodyParser from 'body-parser'
import express from 'express'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const PORT = 3001
const clientDir =
	process.env.NODE_ENV === 'production' ? '../client' : '../../dist/client'

const app = express()

app.use(express.static(resolve(__dirname, clientDir)))
app.use(bodyParser.json())

const employees = [
	{
		id: 1,
		name: 'Johana Levi',
		status: 'working',
		img: 'levi.jpeg',
	},
	{
		id: 2,
		name: 'Avraham Cohen',
		status: 'on-vacation',
		img: 'cohen.jpeg',
	},
	{
		id: 3,
		name: 'Philip Leser',
		status: 'business-trip',
		img: 'leser.jpeg',
	},
	{
		id: 4,
		name: 'Nicci Troiani',
		status: 'business-trip',
		img: 'troiani.jpeg',
	},
	{
		id: 5,
		name: 'Franz Ferdinand',
		status: 'working',
		img: 'ferdinand.jpeg',
	},
	{
		id: 4,
		name: 'Rebecca Moore',
		status: 'working',
		img: 'moore.jpeg',
	},
]

app.get('/users', (_, res) => {
	res.send(employees)
})

app.patch('/users/:id', (req, res) => {
	const index = employees.findIndex(obj => obj.id === +req.params.id)
	employees[index].status = req.body.status
	res.send(employees)
})

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`)
})
