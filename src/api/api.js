import axios from "axios";

export async function productsdata(){
    const products = await axios.get("https://fakestoreapi.com/products");
    // const products = await axios.get("https://dummyjson.com/products");
    return products;
}