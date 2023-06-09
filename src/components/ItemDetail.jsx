import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext";
import { useState, useEffect, useContext } from "react";

const ItemDetail = ({ producto }) => {
    const {addItem} = useContext(CartContext);
    const [item, setItem] = useState({});

    const onAdd=(quantity) => {
        addItem(item, quantity);
    }


    useEffect(() => {
        setItem(producto);
    }, [producto]);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <img src={item.imagen} alt={item.titulo} className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <h1>{item.titulo}</h1>
                    <h3>{item.descripcion}</h3>
                    <p><b>${item.precio}</b></p>
                    <ItemCount stock={item.stock} onAdd={onAdd}/>
                </div>
            </div>

        </div>
    )
};

export default ItemDetail;