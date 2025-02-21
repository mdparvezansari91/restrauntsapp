import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import BestSellers from "@/components/BestSellers/BestSellers";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BestSellers/>
    </>
  );
}

export default Home;
