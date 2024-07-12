import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Map from "./components/Map";
import Service from "./components/Service";
import Tarif from "./components/Tarif";

function App() {
  return (
    <div className="App">
        <Header />
        <Service />
        <Home />
        <Tarif />
        <Contact />
        <Map />
        <Footer />
    </div>
  );
}

export default App;
