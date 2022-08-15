import './App.css';
import {
  Footer,
  Blog,
  Features,
  Header,
  Possibility,
  WhatGPT3,
} from './containers';
import { Navbar, CTA, Brand } from './components';

const App = () => {
  return (
    <div className="App">
      <main className="gradient__bg ">
        <Navbar />
        <Header />
      </main>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
