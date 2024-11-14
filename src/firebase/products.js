import { db } from './firebaseConfig';
import { collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore';

export const obtenerTodosLosProductos = async () => {
    const productosRef = collection(db, 'Productos');
    try {
        const querySnapshot = await getDocs(productosRef);
        const productos = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return productos;
    } catch (error) {
        console.error('Error al obtener productos:', error);
        return [];
    }
};


export const obtenerProductosPorCategoria = async (category) => {
    const productosRef = collection(db, 'Productos');
    const q = query(productosRef, where("category", "==", category));

    try {
        const querySnapshot = await getDocs(q);
        const productos = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return productos;
    } catch (error) {
        console.error('Error al obtener productos filtrados:', error);
        return [];
    }
};

export const obtenerProductoPorId = async (id) => {
    const docRef = doc(db, 'Productos', id);  
    try {
        const docSnap = await getDoc(docRef);  
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };  
        } else {
            throw new Error('Producto no encontrado');
        }
    } catch (error) {
        console.error('Error al obtener el producto:', error);
        throw error;  
    }
};