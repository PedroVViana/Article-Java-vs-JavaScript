import React from "react";
import SEO from "./components/SEO";
import Article from "./components/Article";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <SEO
        title="Java vs. JavaScript: Entenda as Diferenças de Forma Simples"
        description="Descubra as principais diferenças entre Java e JavaScript e saiba qual linguagem escolher para os seus projetos."
        keywords="Java, JavaScript, programação, linguagens de programação, diferenças entre Java e JavaScript"
      />
      <Article />
      <Footer/>
    </div>
  );
};

export default App;
