import {useState} from 'react';
import Header from '@/components/header';
import {BoxArea97} from '@/components/searchbox';
import {TagList} from '@/components/taglist';


export default function App() {
    const [tags, setTags] = useState(['NFT', 'Metaverse', 'Sustainable', 'Sonder', 'FOMO', 'Ghosting',]);

    return (<main className="bg-black min-h-screen text-white">
            <Header/>
            <BoxArea97/>
            <TagList title="Trending" tags={tags}/>
            <TagList title="For you" tags={tags}/>
        </main>);
}
