// components start
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import MainRoutes from "./routes/MainRoutes";
// components end

// hooks start
// hooks end

// redux start
// redux end

const App = () => {
  return (
    <>
      <Navbar />
      <MainRoutes />
      <Footer />
      <MobileMenu />
    </>
  );
};

export default App;
