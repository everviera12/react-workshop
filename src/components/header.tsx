export default function Header() {
    return (
        <header className="fixed z-10 w-full left-0 px-10">
            <div className="flex justify-between items-center p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md text-white">
                <a href="/">Rick and Morty API</a>

                <button className="cursor-pointer" onClick={() => console.log('Fav list')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </button>
            </div>
        </header>
    );
}