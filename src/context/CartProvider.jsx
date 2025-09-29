import { useState } from "react";
import { cartContext } from "./cartContext"
export function CartProvider({ children}) {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems(current => {
            const existingItem = current.find(i => i.id === item.id);
            if (existingItem) 
                return current.map(i => 
                    i.id === item.id
                    ? {...i, quantity: i.quantity + 1}
                    : i
            );
            else return [...current, {...item, quantity: 1}]
        })
    }

    const removeItem = (item) => {
        setItems(current => {
            const existingItem = current.find(i => i.id === item.id);
            if(!existingItem) return current;
            if (existingItem.quantity > 1) {
                return current.map(i => 
                    i.id === item.id 
                        ? { ...i, quantity: i.quantity - 1 } 
                        : i
                );
            } else {
                return current.filter(i => i.id !== item.id);
            }
        })
    }

    const totalToPay = items.reduce((acum, curr) => acum + curr.price, 0).toFixed(2);
    const totalItems = items.reduce((acum, curr) => acum + curr.quantity, 0);

    return (
        <cartContext.Provider value={{items, addItem, removeItem, totalToPay, totalItems}}>
            {children}
        </cartContext.Provider>
    )
}