
export const BASE_URL_DETAILS = 'http://localhost:8080/detalle';

export const saveDetails = async ({ producto, cantidad, pedido }) => {
    try {
        return await axios.post(`${BASE_URL_DETAILS}/`, {
            producto,
            cantidad,
            pedido,
        })
    } catch (error) {
        console.error(error);
    }
    return undefined;
}