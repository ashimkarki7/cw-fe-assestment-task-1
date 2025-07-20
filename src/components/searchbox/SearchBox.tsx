import {SearchInput} from './index.ts';

export default  function SearchBox() {
    const onSearch = (search: string) => {
        console.log(search);
        // implementing the search logic is not required for this task
    };

    return (
        <div id={'box-area'} className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden mt-5">
            <img src="/task1/hero-bg.png" alt="hero"  className="w-full h-128 object-cover" />
            <div className="absolute inset-0 bg-black/0 flex flex-col items-center justify-center text-center px-8">
                <div className="max-w-4xl w-full ">
                <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
                    Search for words, phrases and meanings
                </h1>
                </div>
                <SearchInput initialValue="" onSearch={onSearch} />
            </div>
        </div>
    );
};