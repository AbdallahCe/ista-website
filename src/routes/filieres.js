import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/orientation.jpg";
import Info from "../components/Info";
import Footer from "../components/Footer";

function Filieres() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="" />
      <Info />
      <Footer />
    </>
  );
}

export default Filieres;
