import './styles.css'

export const Input = ({ searchValue, handleChange }) => {
	return (
		<input
			className="search"
			type="search"
			value={searchValue}
			onChange={handleChange}
			placeholder="Type your search"
		/>
	)
}
