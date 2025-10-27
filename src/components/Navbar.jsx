import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/moda">Moda</Link></li>
        <li><Link to="/tecnologia">Tecnología</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
