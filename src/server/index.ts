import bodyParser from 'body-parser';
import express from 'express';
import {dirname, resolve} from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 3001;
const clientDir = process.env.NODE_ENV === 'production' ? '../client' : '../../dist/client';

const app = express();

app.use(express.static(resolve(__dirname, clientDir)));
app.use(bodyParser.json());

const employees = [
  {
    id: 1,
    name: 'John',
    status: 'Working',
    img: 'example1'
  },
  {
    id: 2,
    name: 'Jack',
    status: 'Working',
    img: 'example2'
  },
  {
    id: 3,
    name: 'Sheli',
    status: 'Working',
    img: 'example3'
  },
  {
    id: 4,
    name: 'Eitan',
    status: 'Working',
    img: 'example4'
  },
];

app.get('/users', (_, res) => {
  res.send(employees);
});

app.post('/users/:id', (req, res) => {
  const index = employees.findIndex(obj => obj.id === +req.params.id);
  employees[index].status = req.body.status;
  res.send(employees);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});