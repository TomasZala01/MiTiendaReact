import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
