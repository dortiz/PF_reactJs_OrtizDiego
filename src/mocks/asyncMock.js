// asyncMock.js
const items = [
    {
        id: 1,
        title: 'Producto 1',
        description: 'Descripción del producto 1',
        imgSrc: 'assets/img1.jpg', // Asegúrate de que la ruta sea correcta
    },
    {
        id: 2,
        title: 'Producto 2',
        description: 'Descripción del producto 2',
        imgSrc: 'assets/img2.jpg',
    },
    // Puedes agregar más productos aquí
];

const mockFetch = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items);
        }, 1000); // Simula un retraso de 1 segundo
    });
};

export default mockFetch;
