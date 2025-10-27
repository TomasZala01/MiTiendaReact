import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Inicio from "./pages/Inicio";
import Moda from "./pages/Moda";
import Tecnologia from "./pages/Tecnologia";
import Nosotros from "./pages/Nosotros";
import FAQ from "./pages/FAQ";
import DetalleProducto from "./components/DetalleProducto";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/moda" element={<Moda />} />
          <Route path="/tecnologia" element={<Tecnologia />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
