import { Link } from "react-router-dom";

const Producto = ({ producto, agregarAlCarrito }) => {
  return (
    <div className="producto">
      <img src={producto.image} alt={producto.title} />
      <h3>{producto.title}</h3>
      <p>${producto.price}</p>
      <div className="producto-btns">
        <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
        <Link to={`/producto/${producto.id}`}>Ver detalle</Link>
      </div>
    </div>
  );
};

export default Producto;
