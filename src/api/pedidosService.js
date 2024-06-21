import axios from "axios"

const BASE_URL_ORDER = 'http://localhost:8080/pedido';

export const saveOrder = async ({ total }) => {
    try {
        return await axios.post(`${BASE_URL_ORDER}/`, {
            total,
        })
    } catch (error) {
        console.error(error);
    }
    return undefined;
}

export const findAll = async () => {
    try {
        const response = await axios.get(`${BASE_URL_ORDER}/`);
        return response;
    } catch (error) {
        console.error(error);
    }
    return null;
}

export const findOrderPaid = async () => {
    try {
        const response = await axios.get(`${BASE_URL_ORDER}/pagado`);
        return response;
    } catch (error) {
        console.error(error);
    }
    return null;
}

export const findOrderUnpaid = async () => {
    try {
        const response = await axios.get(`${BASE_URL_ORDER}/nopagado`);
        return response;
    } catch (error) {
        console.error(error);
    }
    return null;
}

export const updateOrder = async (id, total, pagado) => {
    try {
        return await axios.put(`${BASE_URL_ORDER}/${id}`, {
            total,
            pagado,
        })
    } catch (error) {
        console.error(error);
    }
    return undefined
}