import {
    collection,
    getDocs
} from 'firebase/firestore';
import {
    db
} from './firebaseConfig';

const fetchProductsFromFirestore = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const products = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return products;
    } catch (error) {
        console.error("Error fetching products from Firestore: ", error);
        return [];
    }
};

export default fetchProductsFromFirestore;