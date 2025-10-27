import { useEffect, useState } from "react";
import Producto from "../components/Producto";

const Moda = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModa = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/category/women's clothing");
        if (!res.ok) throw new Error("Error al obtener productos de moda");
        const data = await res.json();
        setProductos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchModa();
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="moda">
      <h2>Sección Moda</h2>
      <div className="productos-grid">
        {productos.map((prod) => (
          <Producto key={prod.id} producto={prod} agregarAlCarrito={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default Moda;
