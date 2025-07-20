import Header from '@/components/header';
import { useCallback, useMemo, useState} from 'react';
import {SearchBox} from '@/components/searchbox';
import {TagList} from '@/components/taglist';


const Layout =() =>{
    const tags = useMemo(
        () =>['NFT', 'Metaverse', 'Sustainable', 'Sonder', 'FOMO', 'Ghosting',],
        []
    );
    const [selectedTags, setSelectedTags] = useState<{
        trending: string | null;
        forYou: string | null;
    }>({
        trending: null,
        forYou: null,
    });

    const handleTagClick = useCallback((section: "trending" | "forYou", tag: string) => {
        setSelectedTags((prev) => ({
            ...prev,
            [section]: prev[section] === tag ? null : tag,
        }));
    }, []);

    return (
        <main className="bg-[#121417] min-h-screen text-white">
           <Header/>
                <SearchBox/>

    <TagList keyName={'trending'} title="Trending" tags={tags}     selectedTag={selectedTags.trending}
             onTagClick={(tag) => handleTagClick("trending", tag)}/>
    <TagList  keyName={'foryou'} title="For you" tags={tags}    selectedTag={selectedTags.forYou}
              onTagClick={(tag) => handleTagClick("forYou", tag)}/>
        </main>
    );
};


export default Layout;