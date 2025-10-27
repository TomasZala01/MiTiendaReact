import { useEffect, useState } from "react";
import Producto from "../components/Producto";
import Carrito from "../components/Carrito";

const Inicio = () => {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Error al obtener productos");
        const data = await res.json();
        setProductos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProductos();
  }, []);

  const agregarAlCarrito = (producto) => {
    if (!carrito.some((item) => item.id === producto.id)) {
      setCarrito([...carrito, producto]);
    }
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="inicio">
      <h2>Productos disponibles</h2>
      <div className="productos-grid">
        {productos.map((prod) => (
          <Producto key={prod.id} producto={prod} agregarAlCarrito={agregarAlCarrito} />
        ))}
      </div>
      <Carrito carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />
    </div>
  );
};

export default Inicio;
