import { moneyFormat } from "../helpers";
import { useEffect, useState } from "react";

export const Balance = ({count, setCount, subs , spent, setSpent}) => {

    const updateBalance = () => {
        const spent = subs.reduce((total, item) => total + Number(item.price), 0);

        setSpent(spent);
    }

    useEffect(() => {
        updateBalance();
    }, [subs]);

    return (
    <div className="balance">
        <h3>Presupuesto: {moneyFormat(count)}</h3>
        <h3>Disponible: {moneyFormat(count - spent)}</h3>
        <h3>Gastado: {moneyFormat(spent)}</h3>
    </div>
    )
}
