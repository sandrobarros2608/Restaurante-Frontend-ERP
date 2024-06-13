import axios from "axios"

const BASE_URL_PRODUCT = 'http://localhost:8080/producto';

export const saveProduct = async ({ nombre, precio }) => {
    try {
        return await axios.post(`${BASE_URL_PRODUCT}/`, {
            nombre,
            precio,
        })
    } catch (error) {
        console.error(error);
    }
    return undefined;
}

export const findAll = async () => {
    try {
        const response = await axios.get(`${BASE_URL_PRODUCT}/`);
        return response;
    } catch (error) {
        console.error(error);
    }
    return null;
}

export const updateProduct = async ({ id, nombre, precio }) => {
    try {
        return await axios.put(`${BASE_URL_PRODUCT}/${id}`, {
            nombre,
            precio,
        })
    } catch (error) {
        console.error(error);
    }
    return undefined;
}

export const removeProductId = async (id) => {
    try {
        await axios.delete(`${BASE_URL_PRODUCT}/${id}`);
    } catch (error) {
        console.error(error);
    }
    return undefined;
}