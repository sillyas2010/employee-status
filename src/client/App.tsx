import {useEffect, useState} from 'react';

// import EmployeeList from './components/EmployeeList';
// import SearchBar from './components/SearchBar';
import {Employee} from './types';

function App() {
  const [employees, setEmployees] = useState<Employee[]>([])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_filteredEmployees, setFilteredEmployees] = useState<Employee[]>([])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchQuery, _setSearchQuery] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_statusFilter, setStatusFilter] = useState('')

  useEffect(() => {
    fetchEmployees()
  }, [])

  const fetchEmployees = async () => {
    try {
      const response = await fetch('/users')
      const data = await response.json()
      setEmployees(data)
      setFilteredEmployees(data)
    } catch (error) {
      console.error('Error fetching employees:', error)
    }
  }

  // const handleSearch = (query: string) => {
  //   setSearchQuery(query)
  //   filterEmployees(query, statusFilter)
  // }

  const handleStatusFilter = (status: string) => {
    setStatusFilter(status)
    filterEmployees(searchQuery, status)
  }

  const filterEmployees = (query: string, status: string) => {
    let filtered = employees
    
    if (query) {
      filtered = filtered.filter((emp: Employee) => 
        emp.name.toLowerCase().includes(query.toLowerCase())
      )
    }
    
    if (status) {
      filtered = filtered.filter((emp: Employee) => emp.status === status)
    }
    
    setFilteredEmployees(filtered)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Employees</h1>
          <button className="bg-primary text-white px-4 py-2 rounded-lg">
            Log In
          </button>
        </header>
        
        <div className="flex justify-between items-center mb-6">
          <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2">
            Create <span>+</span>
          </button>
          {/* <SearchBar onSearch={handleSearch} /> */}
          <select 
            className="border rounded-lg px-4 py-2"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleStatusFilter(e.target.value)}
          >
            <option value="">Filter by status</option>
            <option value="Working">Working</option>
            <option value="On Vacation">On Vacation</option>
            <option value="Lunch Time">Lunch Time</option>
            <option value="Business Trip">Business Trip</option>
          </select>
        </div>

        {/* <EmployeeList 
          employees={filteredEmployees}
          onStatusUpdate={fetchEmployees}
        /> */}
      </div>
    </div>
  )
}

export default App
