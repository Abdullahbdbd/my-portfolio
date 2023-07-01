import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <About></About>
      <Experience></Experience>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default App;