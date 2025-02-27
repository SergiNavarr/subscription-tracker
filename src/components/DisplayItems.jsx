import { SingleItem } from "./SingleItem"

export const DisplayItems = ({subs, eliminarItem, editarItem, editId, setEditId}) => {
    return (
        <>
            <h2>Subscripciones</h2>
            {
                subs.map((item) => {
                    return (
                        <div className="subscription" key={item.id}>
                            <SingleItem 
                            type={item.type} 
                            price={item.price} 
                            id={item.id} 
                            eliminarItem={eliminarItem}
                            editarItem={editarItem}
                            setEditId={setEditId}
                            editId={editId}
                            />
                        </div>
                    )
                })
            }
        </>
    )
}
