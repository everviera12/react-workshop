export interface Character {
    id: number;
    name: string;
    status: 'Alive' | 'Dead' | 'unknown';
    image: string;
}

export interface CharacterCardProps {
    data: Character[] | undefined;
    statusColor: {
        Alive: string;
        Dead: string;
        unknown: string;
    };
}

export interface Info {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

export interface PaginationProps {
    page: number;
    info: Info | undefined;
    handleNext: () => void;
    handlePrev: () => void;
}

export interface SearchInputProps {
    inputValue: string;
    setInputValue: (value: string) => void;
    handleSearch: (e?: React.KeyboardEvent | React.MouseEvent) => void;
    status: 'Alive' | 'Dead' | 'unknown' | '';
    setStatus: (status: 'Alive' | 'Dead' | 'unknown' | '') => void;
    setPage: (page: number) => void;
}
