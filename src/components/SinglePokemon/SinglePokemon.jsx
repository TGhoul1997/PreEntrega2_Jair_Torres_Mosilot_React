import { get_price_by_name, get_pokemons_by_name, get_url_image } from "../../networking/pokemon.networking"

function SinglePokemon({pokemon}) {
    return (
    <div className="rounded-md border-4 border-teal-500 flex flex-col items-center m-2 p-5">
        <img className="w-48 h-32 mb-5" src={get_url_image(pokemon)} alt={pokemon.name} />
        <h3 className="font-bold mb-4">{pokemon.name}</h3>
        <p>Price: S/. {get_price_by_name(pokemon.name)}</p>
    </div>
    )
}

export default SinglePokemon;