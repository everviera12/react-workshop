import type { PaginationProps } from "../interface/interface";

export default function Pagination({ page, info, handleNext, handlePrev }: PaginationProps) {
    return (
        <div className="flex justify-between items-center gap-4">
            <span className="text-white text-xl font-semibold">
                Total characters: {info?.count}
            </span>

            <div className="flex items-center gap-4">
                <button
                    onClick={handlePrev}
                    disabled={!info?.prev}
                // className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
                >
                    Prev
                </button>

                <span className="text-white font-semibold">Page {page} of {info?.pages}</span>

                <button
                    onClick={handleNext}
                    disabled={!info?.next}
                // className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    )
}
