import type { CharacterCardProps } from "../interface/interface";

export default function CharacterCard({ data, statusColor }: CharacterCardProps) {
    return (
        <article className="grid gap-y-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {data?.map((item) => (
                <div key={item.id} className='grid justify-start-safe text-white'>
                    <img src={item.image} alt={item.name} className='w-48 rounded-t' />
                    <h2 className='text-lg font-semibold w-[144px]'>{item.name}</h2>
                    <div className='text-sm font-medium flex items-center gap-2'>
                        <div className={`w-2 h-2 rounded-full ${statusColor[item.status] || 'bg-white'}`} />
                        <span>{item.status}</span>
                    </div>
                </div>
            ))
            }
        </article>
    );
}