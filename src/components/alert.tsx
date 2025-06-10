export default function Alert({ name }: { name: string }) {
    return (
        <div className="absolute left-[40%] top-[40%] gap-6 z-20 bg-yellow-50 text-zinc-900 flex items-center p-16 rounded  animate-pulse">
            <svg
                className="animate-spin h-5 w-5 text-yellow-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                />
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                />
            </svg>

            <span className="text-sm font-medium">
                Searching <span className="font-bold">{name}</span>...
            </span>
        </div>
    );
}