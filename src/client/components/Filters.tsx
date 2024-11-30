import SearchBar from './SearchBar'
import Select from './Select'

const statusOptions = [
	{ value: 'Working', label: 'Working' },
	{ value: 'On Vacation', label: 'On Vacation' },
	{ value: 'Lunch Time', label: 'Lunch Time' },
	{ value: 'Business Trip', label: 'Business Trip' },
]

interface FiltersProps {
	onSearch: (query: string) => void
	onStatusFilter: (status: string) => void
}

function Filters({ onSearch, onStatusFilter }: FiltersProps) {
	const delimiterStyling =
		"before:content-[''] before:inline-block before:bg-secondary-300 before:w-[1px] before:h-[1.6rem] before:absolute before:left-[-7px] before:top-[50%] before:translate-y-[-50%]"
	return (
		<>
			<div className="flex-1 leading-10">
				<SearchBar onSearch={onSearch} />
			</div>
			<div className={`relative ml-5 ${delimiterStyling}`}>
				<Select
					options={statusOptions}
					placeholder="Filter by status"
					className="min-h-10 text-[1.15rem]"
					onChange={onStatusFilter}
				/>
			</div>
		</>
	)
}

export default Filters
