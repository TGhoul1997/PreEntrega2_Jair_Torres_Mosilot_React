import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { get_pokemons } from "../../networking/pokemon.networking";
import SinglePokemon from "../SinglePokemon/SinglePokemon";

async function fetch_data(setData) {
    const p_data = await get_pokemons();
    setData(p_data)
}

function ItemListContainer() {
    const params = useParams();
    const [data, setData] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch_data(setData);
    }, [])

    return(
    <>
    <div className="grid grid-cols-5">
    {data.map((pokemon, i) => {
            return(
                <div className="text-xl m-6">
                    <SinglePokemon pokemon={pokemon}/>
                </div>
            )
        })}
    </div> 
    </>
    )
    
};

export default ItemListContainer;