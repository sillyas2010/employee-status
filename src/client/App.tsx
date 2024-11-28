import {useEffect, useState} from 'react';

import EmployeeList from './components/EmployeeList';
import Filters from './components/Filters';
import {Employee} from './types';

function App() {
  const [employees, setEmployees] = useState<Employee[]>([])
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('')

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

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    filterEmployees(query, statusFilter)
  }

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
    <div className="w-full max-w-6xl mx-auto px-4 py-4 flex flex-col">
      <Filters 
        onSearch={handleSearch}
        onStatusFilter={handleStatusFilter}
      />
      <EmployeeList 
        employees={filteredEmployees}
        onStatusUpdate={fetchEmployees}
      />
    </div>
  )
}

export default App
