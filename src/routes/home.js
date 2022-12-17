import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import InfoHome from "../components/InfoHome";
import Footer from "../components/Footer";
import HomeImg from "../assets/home.jpg";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Bienvenue"
        buttonText="Se Connecter"
        url="/login"
        btnClass="show"
      />
      <InfoHome />
      <Footer />
    </>
  );
}

export default Home;
