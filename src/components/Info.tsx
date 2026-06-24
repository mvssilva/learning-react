export default Info;
import { Lock, TvMinimalPlay } from 'lucide-react';
import { useState } from 'react';

function Info(){
    
    const[show, setShow] = useState(false);

    function showlink(){
        setShow(!show);
    }

    return (
        <div className="mt-4 w-full items-center flex justify-between">
            <div className="flex flex-col gap-2 text-[#00A2F7]">
                <p className="font-bold">
                    Pratique com projetos reais
                </p>
                <p className="w-[700px] text-sm">
                    Em vez de apenas ensinar teoria, focamos em código real para 
                    inspirar seu próximo projeto. Aprender não precisa ser chato.
                </p>
                <div className='flex items-center'>
                    <button className="w-[180px] h-8 bg-[#00A2F7] text-white 
                    cursor-pointer rounded-md flex justify-center items-center 
                    gap-2 hover:opacity-90" onClick={showlink}>
                        <Lock size={16}/>
                        {show ? <p>Bloquear Aula</p> : <p>Desbloquear Aula</p>}
                    </button>

                    {show && (
                        <p className='flex items-center gap-2 cursor-pointer'>
                            <TvMinimalPlay/>
                            Clique aqui para assistir a aula!
                        </p>
                        )   
                    }

                </div>
            </div>
            <div className="flex flex-col text-[#00A2F7] bg-white rounded-md gap-1 p-2">
                <p className="font-bold text-md">Curso Rápido</p>
                <p className="text-sm">Cursos práticos de curta duração</p>
                <button className="w-36 h-[40px] border py-0.5 rounded-md cursor-pointer">
                    Assistir
                </button>
            </div>
        </div>
    );
}