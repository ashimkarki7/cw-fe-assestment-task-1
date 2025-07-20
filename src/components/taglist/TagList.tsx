import {Badge} from '@/components/ui/badge.tsx';
import type {TagListProps} from '@/components/taglist/types.ts';

export default  function TagList({keyName, title, tags,onTagClick,selectedTag }:TagListProps) {
    return (
        <div className="mt-8 lg:px-1 px-6 max-w-5xl mx-auto  lg:h-[47px]" id={keyName} >
            <div className="text-white text-lg font-semibold mb-4">{title}</div>
            <div className="flex flex-wrap gap-3 ">
                {tags?.map((tag) => {
                    const isSelected = selectedTag === tag;
                    return (
                        <Badge
                            onClick={() => onTagClick?.(tag)}
                            key={`${keyName}-${tag}`}
                            className={`cursor-pointer ${
                                isSelected
                                    ? "bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
                                    : "bg-gray-800 text-white hover:bg-gray-700 cursor-pointer"
                            } ${keyName === 'trending' && tag === 'Ghosting' ? 'ghost-text' : ''}`}
                        >
                            {tag}
                        </Badge>
                        )
            })}
            </div>
        </div>
    );
};
