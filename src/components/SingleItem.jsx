import { moneyFormat } from "../helpers";
import { Data } from "./Data";

export const SingleItem = ({price, type, id, eliminarItem, editarItem}) => {

    const handleDelete = e =>{
        e.preventDefault();
        const confirm = window.confirm(`¿Estas seguro que deseas eliminar la subscripcion a ${type}?`);
        if (confirm) {
            eliminarItem(id);
        }
    }

    const handleEdit = e =>{
        e.preventDefault();
        const confirm = window.confirm(`¿Estas seguro que deseas editar la subscripcion a ${type}?`);
        if (confirm) {
            editarItem(id);
        }
    }

    const urlImage= Data.find(item => item.name === type).image;

    return (
        <div className="single-item">
            <img src={urlImage} alt={type} />
            <h3>Precio: {moneyFormat(Number(price))}</h3>
            <a href="" onClick={handleDelete} className="delete">Borrar</a>
            <a href="" onClick={handleEdit} className="edit">Editar</a>
        </div>
    )
}