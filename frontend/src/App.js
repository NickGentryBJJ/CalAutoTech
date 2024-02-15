import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import Reviews from "./Components/Reviews/Reviews";
import Services from "./Components/Services/Services";
import Top from "./Components/Top/Top";

function App() {
  return (
    <>
      <NavBar/>
      <Top/>
      <Services/>
      <Reviews/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
