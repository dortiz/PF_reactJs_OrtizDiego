import { db } from './firebaseConfig';
import { collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore';


export const obtenerProductos = async (category = null) => {
    const productosRef = collection(db, 'productos');
    let q = category ? query(productosRef, where("category", "==", category)) : productosRef;

    console.log('Ejecutando consulta:', q);

    try {
        const querySnapshot = await getDocs(q);
        const productos = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log('Productos obtenidos:', productos);
        return productos;
    } catch (error) {
        console.error('Error al obtener productos:', error);
        return [];
    }
};

export const obtenerProductoPorId = async (id) => {
    const docRef = doc(db, 'Productos', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        throw new Error('Producto no encontrado');
    }
};
