import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a movie..."
            />
            <button type="submit">Search</button>
        </form>
    );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
