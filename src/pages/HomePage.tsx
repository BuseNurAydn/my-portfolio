
import About from '../components/About';
import Skills from '../components/Skills'
import Experiences from '../components/Experiences';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <About/>
        <Skills/>
        <Experiences/>
        <Projects/>
        <Footer/>
    </div>
  )
}

export default HomePage;
