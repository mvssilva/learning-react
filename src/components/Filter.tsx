import { Search } from 'lucide-react';

type FilterProps = {
    title?: string;
    //outra variaveil: tipo;
}

function Filter({title} : FilterProps){
    return (
        <div className="flex flex-col items-center">
            <p className="font-bold text-[#00A2F7] text-xl mt-10">
                {title}
            </p>
            <p className="text-xs text-[#00A2F7]">
                Conteúdo exclusivo todos os dias
            </p>

            <div className="flex items-center mt-2 gap-2 ">
                <input 
                    type="text" 
                    placeholder='Curso de React' 
                    className="text-sm text-[#cececec7] bg-white border-[#F2F2F2] rounded-md w-153.75 h-7.5" />
                <div 
                    className='h-8.75 w-8.75 flex justify-center items-center rounded-md bg-[#E1F4FF] cursor-pointer'>
                    <Search size={20} className='text-[#00A2F7] ' />
                </div>
            </div>
        </div>
    );
}

export default Filter;