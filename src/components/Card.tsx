export default Card;

type CardProps = {
    logo: string;
    titulo: string;
    cargahoraria: string;
}
function Card({logo, titulo, cargahoraria}:CardProps){
    return(
        <div className="border w-full p-4 rounded-md border-[#00A2F7] flex flex-col">
            <div className="flex flex-1 justify-center items-center">
                <img src= {logo} className="w-32 mx-auto" alt="Logo do Curso do Card" />
            </div>
            <p className="text-[#00A2F7] font-bold text-sm mt-2">{titulo}</p>
            <p className="text-[#00A2F7] text-sm mt-1">{cargahoraria}</p>
            <button className="bg-[#00A2F7] rounded-sm text-white w-full text-sm py-1 cursor-pointer mt-1">Inscreva-se</button>
        </div>
    );
}