export interface TagListProps {
    keyName: string;
    title: string;
    tags: string[];
    onTagClick?: (tag: string) => void;
    selectedTag?: string | null;
}