export const getAll = async () => {

    const response = await fetch('http://localhost:8080/producto/');
    const productos = await response.json();

    return productos;
}