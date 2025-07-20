import {useEffect, useState} from 'react';
import {Search} from 'lucide-react';
import {Input} from '@/components/ui/input.tsx';
import {Button} from '@/components/ui/button.tsx';

export default function SearchInput({
                        initialValue,
                        onSearch,
                    }: {
    initialValue: string;
    onSearch: (search: string) => void;
}) {
    const [innerValue, setInnerValue] = useState(initialValue);

    useEffect(() => {
        onSearch(innerValue);
    }, [innerValue, onSearch]);

    useEffect(() => {
        setInnerValue(initialValue);
    }, [initialValue]);

    return (
        <div className="flex items-center bg-[#1C2126] px-4 py-2 rounded-[12px] w-full max-w-xl mt-8 shadow-lg">
            <Search className="text-gray-400 mr-3" />
            <Input
                value={innerValue}
                onChange={(e) => setInnerValue(e.target.value)}
                type="text"
                placeholder="Type to search..."
                className="flex-1 bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 "
            />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white ml-4 cursor-pointer">
                Search
            </Button>
        </div>
    );
};
