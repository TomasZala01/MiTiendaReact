const Carrito = ({ carrito, eliminarDelCarrito }) => {
  return (
    <div className="carrito">
      <h2>Carrito</h2>
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        carrito.map((item) => (
          <div key={item.id} className="carrito-item">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <p>${item.price}</p>
            <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Carrito;
