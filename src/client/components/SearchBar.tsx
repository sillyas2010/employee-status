import { focusState } from '../constants/styling'

interface SearchBarProps {
	onSearch: (query: string) => void
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
	const searchIcon =
		"bg-[.3rem_50%] bg-[length:1.1rem_1.1rem] bg-no-repeat bg-[url('/search.svg')]"

	return (
		<input
			type="text"
			placeholder="Type to search"
			className={`w-full font-madet font-normal text-[1.13rem] tracking-[.015rem] pl-[2.4rem] pr-5 ${searchIcon} ${focusState} focus:rounded-sm`}
			onChange={e => onSearch(e.target.value)}
		/>
	)
}

export default SearchBar
