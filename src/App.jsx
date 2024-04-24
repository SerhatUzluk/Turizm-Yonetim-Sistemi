import HeroSection from "./components/HeroSection/HeroSection";
import Slider from "./components/Slider/Slider";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";

function App() {
  console.log("deneme2");

  return (
    <>
      <MainLayout>
        <HomePage/>        
      </MainLayout>
    </>
  );
}

export default App;