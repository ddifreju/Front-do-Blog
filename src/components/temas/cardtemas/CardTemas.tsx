
function CardTemas() {
  return (
    <div className="border-2 rounded-lg overflow-hidden">
        <h2 className="bg-pink-900 text-white text-xl">Tema</h2>
        <p className="bg-gray-300">Descrição do tema</p>
        <div className="flex w-full">
            <button className="bg-sky-500 w-full hover:bg-sky-700">Editar</button>
            <button className="bg-pink-500 w-full hover:bg-pink-700">Cancelar</button>
        </div>

    </div>
  )
}

export default CardTemas