import { API_ROUTES } from '@/api/index'

export async function getProducts() {
    try {
        const response = await fetch(`${API_ROUTES.PRODUCTS}`);
        const data = await response.json();
        if (!response.ok) throw new Error(response.error);
        return data;
    } catch (error) {
        return error;
    }
}

export async function getProduct(id) {
    try {
        const response = await fetch(`${API_ROUTES.PRODUCTS}/${id}`);
        const data = await response.json();
        if (!response.ok) throw new Error(response.error);
        return data;
    } catch (error) {
        return error;
    }
}

export async function getProductsByCategory(category) {
    try {
        const response = await fetch(`${API_ROUTES.PRODUCTSBYCATEGORY}/${category}`);
        const data = await response.json();
        if (!response.ok) throw new Error(response.error);
        return data;
    } catch (error) {
        return error;
    }
}

export async function getCategories() {
    try {
        const response = await fetch(`${API_ROUTES.CATEGORIES}`);
        const data = await response.json();
        if (!response.ok) throw new Error(response.error);
        return data;
    } catch (error) {
        return error;
    }
}