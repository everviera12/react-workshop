import type { SearchInputProps } from "../interface/interface";

export default function SearchInput({
    inputValue,
    setInputValue,
    handleSearch,
    status,
    setStatus,
    setPage
}: SearchInputProps) {
    return (
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-end justify-between">
            {/* Input + Button */}
            <div className="flex flex-wrap gap-4 w-full lg:w-3/4">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch(e)}
                    placeholder="Search character by name..."
                    className="bg-white text-black rounded p-2 flex-grow"
                />
                <button
                    onClick={handleSearch}
                    className="bg-yellow-300 text-black px-6 py-2 rounded"
                >
                    Search
                </button>
            </div>

            {/* Dropdown Filter */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full lg:w-auto">
                <label htmlFor="status" className="text-white font-medium" dangerouslySetInnerHTML={{ __html: 'Filter by status:' }} />
                <select
                    id="status"
                    value={status}
                    onChange={(e) => {
                        setPage(1)
                        setStatus(e.target.value as 'Alive' | 'Dead' | 'unknown')
                    }}
                    className="bg-white text-black rounded px-4 py-2"
                >
                    <option value="">All</option>
                    <option value="Alive">Alive</option>
                    <option value="Dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
        </div>
    );
}
