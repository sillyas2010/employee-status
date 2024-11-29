import React from 'react'

import SearchBar from './SearchBar'

interface FiltersProps {
	onSearch: (query: string) => void
	onStatusFilter: (status: string) => void
}

function Filters({ onSearch, onStatusFilter }: FiltersProps) {
	return (
		<div>
			<SearchBar onSearch={onSearch} />
			<select
				className="status-filter"
				onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
					onStatusFilter(e.target.value)
				}
			>
				<option value="">Filter by status</option>
				<option value="Working">Working</option>
				<option value="On Vacation">On Vacation</option>
				<option value="Lunch Time">Lunch Time</option>
				<option value="Business Trip">Business Trip</option>
			</select>
		</div>
	)
}

export default Filters
