
import About from '../components/About';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <About/>
        <Experience/>
        <Projects/>
        <Footer/>
    </div>
  )
}

export default HomePage;
