import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';

const items = [
    {
        id: 1,
        title: 'Producto 1',
        description: 'Descripción del producto 1',
        imgSrc: img1,
        category: 'Categoría A', 
    },
    {
        id: 2,
        title: 'Producto 2',
        description: 'Descripción del producto 2',
        imgSrc: img2,
        category: 'Categoría B', 
    },

];

const mockFetch = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items);
        }, 1000); 
    });
};

export default mockFetch;