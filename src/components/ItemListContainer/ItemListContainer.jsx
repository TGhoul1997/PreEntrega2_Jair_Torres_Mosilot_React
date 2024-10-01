import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { get_pokemons, get_pokemons_by_type } from "../../networking/pokemon.networking";
import SinglePokemon from "../SinglePokemon/SinglePokemon";

async function fetch_data(setData) {
    const p_data = await get_pokemons();
    setData(p_data)
}

async function fetch_data_categories(setData, category) {
    const p_category = await get_pokemons_by_type(category);
    setData(p_category)
}


function ItemListContainer() {
    const params = useParams();
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (params.category) {
            fetch_data_categories(setData, params.category)
        } else {
            fetch_data(setData)
        }
    }, [])

    return (
        <>
        <select>
            {categories.map((category, i) => {
            return (
                <option key={i} value={category.name}>
                    {category.name}
                </option>
            );
            })}
        </select>

        <div className="grid grid-cols-5 gap-20 p-10">
            {data.map((product, i) => {
            return (
                <div key={i}>
                    <SinglePokemon pokemon={product} />
                </div>
            );
            })}
        </div>
        </>
    );
};

export default ItemListContainer;