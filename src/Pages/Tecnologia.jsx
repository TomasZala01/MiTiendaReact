import { useEffect, useState } from "react";
import Producto from "../components/Producto";

const Tecnologia = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTech = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/category/electronics");
        if (!res.ok) throw new Error("Error al obtener productos tecnológicos");
        const data = await res.json();
        setProductos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTech();
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="tecnologia">
      <h2>Tecnología</h2>
      <p className="seccion-descripcion">
        Productos electrónicos y gadgets modernos, ideales para el día a día.
      </p>
      <div className="productos-grid">
        {productos.map((prod) => (
          <Producto key={prod.id} producto={prod} agregarAlCarrito={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default Tecnologia;
