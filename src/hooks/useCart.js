import { useContext } from "react";
import { cartContext } from "../context/cartContext";

export function useCart() {
    return useContext(cartContext);
}