import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';

const items = [
    {
        id: 1,
        title: 'Producto 1',
        description: 'Descripción del producto 1',
        imgSrc: img1,
        category: 'Categoría A', // Agrega la categoría
    },
    {
        id: 2,
        title: 'Producto 2',
        description: 'Descripción del producto 2',
        imgSrc: img2,
        category: 'Categoría B', // Agrega la categoría
    },
    {
        id: 3,
        title: 'Producto 3',
        description: 'Descripción del producto 3',
        imgSrc: require('../assets/img1.jpg').default,
        category: 'Categoría A',
    },
    {
        id: 4,
        title: 'Producto 4',
        description: 'Descripción del producto 4',
        imgSrc: require('../assets/img2.jpg').default,
        category: 'Categoría C',
    },
    {
        id: 5,
        title: 'Producto 5',
        description: 'Descripción del producto 5',
        imgSrc: require('../assets/img1.jpg').default,
        category: 'Categoría B',
    },
    {
        id: 6,
        title: 'Producto 6',
        description: 'Descripción del producto 6',
        imgSrc: require('../assets/img2.jpg').default,
        category: 'Categoría C',
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