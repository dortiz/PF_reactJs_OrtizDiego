Proyecto de Tienda en Línea con React y Firebase
Este proyecto es una tienda en línea de ejemplo creada con React y Firebase. La aplicación permite a los usuarios ver una lista de productos, agregar productos al carrito, ajustar las cantidades, y finalizar una compra simulada. Los datos de los productos se obtienen desde Firebase Firestore.

Características
Listar productos desde Firestore.
Agregar productos al carrito y ajustar la cantidad.
Eliminar productos del carrito.
Calcular el total de la compra en el carrito.
Finalizar la compra con un mensaje de confirmación y limpieza automática del carrito.

Tecnologías
React: Interfaz de usuario.
React Router: Navegación entre páginas.
Firebase: Backend como servicio para Firestore.
React Toastify: Notificaciones de éxito y error.

Instalación
Clona este repositorio en tu máquina local.
git clone https://github.com/tu_usuario/tu_repositorio.git
cd tu_repositorio

Instala las dependencias usando npm o yarn.
npm install

Inicia la aplicación.
npm start


Estructura del Proyecto

src
│
├── components
│   ├── CartPage.jsx         # Página del carrito
│   ├── Checkout.jsx         # Página de checkout
│   ├── ProductList.jsx      # Lista de productos
│   └── NavBar.jsx           # Barra de navegación
│   ├── ProductList.jsx      # Lista de productos
│
├── context
│   └── CartContext.js       # Contexto para manejar el carrito
│
├── firebase
│   ├── firebaseConfig.js    # Configuración de Firebase
│   └── products.js          # Función para obtener productos de Firestore
│
├── pages
│   ├── HomePage.jsx         # Página principal
│   └── ProductsPage.jsx     # Página de productos
│
└── styles
    ├── CartPage.css         # Estilos para la página de carrito
    ├── Checkout.css         # Estilos para la página de checkout
    └── ProductList.css      # Estilos para la lista de productos
Uso de la Aplicación
Agregar productos al carrito:

Desde la página de productos, los usuarios pueden ver detalles de cada producto y añadirlos al carrito.
Gestionar el carrito:

En la página del carrito, los usuarios pueden aumentar o disminuir la cantidad de productos y ver el total calculado en tiempo real.
Finalizar la compra:

Al hacer clic en "Finalizar compra" en la página de checkout, se muestra un mensaje de confirmación y se vacía el carrito.
Archivos Clave
CartContext.js
Este archivo contiene la lógica del contexto del carrito, que permite:

Agregar al carrito: Añadir un producto y actualizar la cantidad si ya existe.
Eliminar del carrito: Remover un producto completamente.
Vaciar el carrito: Usado en la confirmación de compra para limpiar el carrito.
firebaseConfig.js y products.js
firebaseConfig.js: Conecta la aplicación a Firebase usando la configuración obtenida de la consola de Firebase.
products.js: Contiene funciones para realizar consultas en Firestore, específicamente para obtener los productos almacenados.
CartPage.jsx y Checkout.jsx
CartPage.jsx: Muestra el contenido del carrito y permite ajustar la cantidad de productos.
Checkout.jsx: Calcula y muestra el total a pagar. Incluye el botón de "Finalizar compra".
Ejemplo de Documento de Producto en Firestore
Cada producto almacenado en Firestore debe tener la siguiente estructura:

json
Copiar código
{
  "title": "Camiseta",
  "description": "Camiseta de algodón",
  "price": 19.99,
  "image": "https://link_a_la_imagen.jpg"
}
Contribuciones
Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, crea un pull request o abre un issue para sugerencias o problemas.

Licencia
Este proyecto está bajo la licencia MIT.