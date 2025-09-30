const API_BASE_URL = import.meta.env.VITE_API_URL;

export const API_ROUTES = {
    PRODUCTS: `${API_BASE_URL}/products`,
    CATEGORIES: `${API_BASE_URL}/products/categories`,
    PRODUCTSBYCATEGORY: `${API_BASE_URL}/products/category`
}