import { useState } from "react";

export const FormAddSubs = ({setType, setPrice, type, price, setSubs, subs, setEditId, editId, count, spent}) => {
    const [error, setError] = useState(false);
    const [error2, setError2] = useState(false);

    const handleSubs = (e) => {
        e.preventDefault();
        if (type === "" || price === "" || Number(price) < 0) {
            setError(true);
            return;
        }
        
        if(count - spent < Number(price)) {
            setError2(true);
            return;
        }
        setError(false);
        setError2(false);

        if (editId !== "") {

            const newSubs=subs.map(item => {
                if (item.id === editId) {
                    item.type = type;
                    item.price = Number(price);
                }
                return item;
            })
            setSubs(newSubs);

            setEditId("");

        } else{
            const data={
                type: type,
                price: Number(price),
                id: Date.now()
            }
            
            setSubs([...subs, data]);
        }

    
        setType("");
        setPrice("");
    }
    
    return (
        <div className="add-subscription">
            <h3>Agregar suscripciones</h3>
            <form onSubmit={handleSubs}>
                <p>Servicio</p>
                <select onChange={e=>setType(e.target.value)} value={type}>
                    <option value="">--Elegir--</option>
                    <option value="netflix">Netflix</option>
                    <option value="disneyPlus">Disney Plus</option>
                    <option value="hboMax">HBO Max</option>
                    <option value="starPlus">Star Plus</option>
                    <option value="primeVideo">Prime video</option>
                    <option value="spotify">Spotify</option>
                    <option value="appleTv">Apple tv</option>
                </select>
                <p>Precio</p>
                <input type="number" placeholder="Precio del servicio" onChange={e=>setPrice(e.target.value)} value={price} />
                {editId !== "" 
                ? <input type="submit" value="Editar" /> 
                : <input type="submit" value="Agregar" />
                }
                
            </form>
            {error && <p className="error">Servicio o cantidad invalido</p>}
            {error2 && <p className="error">No tienes suficiente presupuesto</p>}
        </div>
    )
}
