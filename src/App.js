import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'aos/dist/aos.css';
import './App.css'
import { useEffect } from 'react';
import { BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import Info from './components/Info';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Section from './components/Section';
import AOS from 'aos';

function App() {
  useEffect(()=>{
    AOS.init({
        duration:1000,
    })
},[])
useEffect(()=>{
    AOS.refresh();
},[])

 
  return (
    <BrowserRouter>
    <header>
       <Header/>
    </header>
      <main>
        <Info/>
      </main>
      <div>
        <Skills/>
      </div>
      <section>
        <Section/>
        
      </section>
      <footer className='position-relative'>
        <Contact/>
        <Blog/>
        <Footer/>
      </footer>
      
      </BrowserRouter>
    
  );
  
}

export default App;
