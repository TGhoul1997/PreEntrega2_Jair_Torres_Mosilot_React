import "./ItemListContainer.css";

function ItemListContainer({greeting}) {
    return(
        <div className="text-5xl m-6">
            <h2>{greeting}</h2>
        </div>
    );
};

export default ItemListContainer;