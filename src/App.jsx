import HeroSection from "./components/HeroSection/HeroSection";
import Slider from "./components/Slider/Slider";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";

function App() {
  console.log("deneme2");

  return (
<<<<<<< HEAD
    <>                
    <MainLayout>

      {/* font kullanımı */}
      <div className="font-gemunu text-lightBlue">
        deneme
      </div>


    </MainLayout>
      
=======
    <>
      <MainLayout>
        <Slider />
        <HeroSection />
      </MainLayout>
>>>>>>> main
    </>
  );
}

export default App;
