import Avatar from "./components/Avatar";
import Header from "./components/Header";
import {useState} from 'react';
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const arr=[0,0,0,0,0,0];
  return (
    <div className={darkMode&&'dark'}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Avatar />
        <Services />
        <Skills />
        <Portfolio countArr={arr} />
        <Contact />
        <Footer />
      </main>
      
      
    </div>
  );
}

export default App;
