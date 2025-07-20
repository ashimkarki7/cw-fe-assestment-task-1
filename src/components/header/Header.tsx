import {Search} from 'lucide-react';
import {Input} from '@/components/ui/input.tsx';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar.tsx';
import avatar from '@/asset/image/avatar.jpg';
import {useState} from 'react';
import {useIsMobile} from '@/hooks/use-mobile.ts';

const Header =() =>{
    const isMobile = useIsMobile();
    const [inputText, setInputText] = useState<string>('');
    return (
            <header id={`header`}  className={`flex items-center justify-between md:px-10 ${isMobile ? "px-2" : "px-8"} py-4  border-b border-[#9EABB8]`}>
            <div className="flex items-center gap-2">
                <img src="/task1/logo.png" alt="Logo" className="h-4 w-4" />
                <div className={`text-white font-semibold  text-lg`}>Worctionary</div>
            </div>

            <div className="flex items-center gap-4">
                <div  className={`relative ${isMobile ? "w-[100px]" : "w-[160px]"} h-10`}>

              <span className="pb-1 absolute left-3  top-1/2  -translate-y-1/2 -translate-x-1">
                <Search className="text-gray-400 text-sm  " />
              </span>

                    <Input
                        aria-label="Search"
                        id={'Header-Search'}
                        type="text"
                        placeholder="Search"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        className="pl-10 text-white bg-gray-800  border-none focus:ring-0  rounded-[12px]  text-base"
                    />
                </div>
                <Avatar  className="w-10 h-10">
                    <AvatarImage src={avatar} />
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
            </div>
        </header>
    );
};


export default Header;

