import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Error al obtener producto");
        const data = await res.json();
        setProducto(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducto();
  }, [id]);

  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="detalle-producto">
      <img src={producto.image} alt={producto.title} />
      <h2>{producto.title}</h2>
      <p>{producto.description}</p>
      <p><b>${producto.price}</b></p>
    </div>
  );
};

export default DetalleProducto;
