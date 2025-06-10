import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import './App.css'
import Header from './components/header'
import CharacterCard from './components/character-card'
import Pagination from './components/pagination'
import SearchInput from './components/search-input'
import Alert from './components/alert'

function App() {
    const [page, setPage] = useState(1)
    const [inputValue, setInputValue] = useState('')
    const [name, setName] = useState<string>('')
    const [status, setStatus] = useState<'Alive' | 'Dead' | 'unknown' | ''>('')


    const { data, error, isError, isFetching } = useQuery({
        queryKey: ['characters', page, name, status],
        queryFn: async () => {
            try {
                const url = `https://rickandmortyapi.com/api/character?page=${page}&name=${name}&status=${status}`
                const response = await fetch(url)

                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}))
                    const message = errorData?.error || `${response.status} – ${response.statusText}`
                    throw new Error(message)
                }

                return await response.json()
            } catch (err) {
                throw new Error((err as Error).message || 'Unknown error')
            }
        }
    })

    console.log(error);


    const statusColor = {
        Alive: 'bg-green-500 animate-pulse',
        Dead: 'bg-red-500',
        unknown: 'bg-gray-500'
    } as const

    const handleNext = () => {
        if (data?.info?.next) setPage(page + 1)
    }

    const handlePrev = () => {
        if (data?.info?.prev) setPage(page - 1)
    }

    const handleSearch = () => {
        setPage(1)
        setName(inputValue)
    }

    return (
        <>
            {isFetching && name && (
                <Alert name={name} />
            )}

            <Header />

            <div className="pt-24 px-6 grid gap-10">
                {/* Search */}
                <SearchInput
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    handleSearch={handleSearch}
                    status={status}
                    setStatus={setStatus}
                    setPage={setPage}
                />

                {/* Pagination */}
                <Pagination
                    page={page}
                    info={data?.info}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                />

                {/* Results */}
                {isError ? (
                    <p className="text-red-400 font-medium">No results found for "{name}"</p>
                ) : (
                    <CharacterCard data={data?.results} statusColor={statusColor} />
                )}
            </div>
        </>
    )
}

export default App
