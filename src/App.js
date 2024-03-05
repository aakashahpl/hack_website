import './App.css';
import OurDomains from './components/ourdomains'
import Events from './components/events';
import Landing_page from './components/landing-page';
import Aboutcode from "./components/aboutcode"
import Newgallery from './components/newgalley';
import Footer from './components/footer';
import Aboutus from './components/aboutus';


function App() {
  return (
    <div className="App">
         
         <Landing_page/>
         <Aboutus/>
         <Aboutcode/>
         <Events/>
         <OurDomains/>
         <Footer/>
    </div>
  );
}

export default App;
