import './App.css';
import Faq from './components/Accordian/Faq';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Sponsers from './components/Spnonsers/Sponsers';
import Carousal from './components/Carousal/Carousal'
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
        
      </div>
      
      <Sponsers/>
      <Carousal/>
      <Faq/>
    </div>
  );
}

export default App;
