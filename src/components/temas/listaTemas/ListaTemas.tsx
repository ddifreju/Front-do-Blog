import CardTemas from "../cardtemas/CardTemas";

function ListaTemas() {
    return(
        <div className="conteiner mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CardTemas />
            <CardTemas />
            <CardTemas />
        </div>
    )
}