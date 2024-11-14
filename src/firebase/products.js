import { db } from './firebaseConfig';
import { collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore';


export const obtenerProductos = async (categoria = null) => {
    const productosRef = collection(db, 'productos');
    let q = categoria ? query(productosRef, where("category", "==", categoria)) : productosRef;

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const obtenerProductoPorId = async (id) => {
    const docRef = doc(db, 'productos', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        throw new Error('Producto no encontrado');
    }
};
