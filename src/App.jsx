import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
