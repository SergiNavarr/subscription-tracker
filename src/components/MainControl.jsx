import { Balance } from "./Balance";
import { DisplayItems } from "./DisplayItems";
import { FormAddSubs } from "./FormAddSubs";
import { useState } from "react";

export const MainControl = ({ count , setCount}) => {
    const [subs, setSubs] = useState([]);
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [editId, setEditId] = useState("");
    const [spent, setSpent] = useState(0);

    const eliminarItem = (id) =>{
        setSubs(subs.filter(item => item.id !== id));
    }

    const editarItem = (id) =>{
        setEditId(id);
        subs.map(item => {
            if (item.id === id) {
                setType(item.type);
                setPrice(item.price);
            }
        })
    }

    return (
        <>
            <div className="main-form">
                <Balance 
                    count={count} 
                    setCount={setCount} 
                    subs={subs} 
                    setSpent={setSpent} 
                    spent={spent} 
                />
                <FormAddSubs
                    setType={setType}
                    setPrice={setPrice}
                    type={type}
                    price={price}
                    setSubs={setSubs}
                    subs={subs}
                    editId={editId}
                    setEditId={setEditId}
                    count={count}
                    spent={spent}
                />
            </div>
            <DisplayItems 
            subs={subs} 
            eliminarItem={eliminarItem}
            editarItem={editarItem}
            />
        </>
    );
};
