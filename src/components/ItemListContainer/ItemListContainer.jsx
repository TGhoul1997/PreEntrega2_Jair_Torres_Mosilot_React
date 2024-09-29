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
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch_categories(setCategories);
        fetch_data(setData);
        fetch_data_by_category(setData, params); 
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