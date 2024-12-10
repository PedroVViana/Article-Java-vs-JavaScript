import React from "react";
import { FaCode, FaCalendarAlt, FaCubes, FaGlobe } from "react-icons/fa";


const Article = () => {
  return (
    <main className="article-container">
      {/* Seção Hero */}
      <section className="hero-section">
        <h1>Java vs JavaScript: Entenda as Diferenças de Forma Simples</h1>
        <p>
          Descubra as principais diferenças entre <strong>Java</strong> e{" "}
          <strong>JavaScript</strong>, duas linguagens que, apesar dos nomes
          similares, possuem propósitos e características bem distintos. Saiba
          qual é a mais indicada para os seus projetos de desenvolvimento de
          software!
        </p>
      </section>

      {/* Introdução */}
      <section className="introduction">
        <h2>Introdução</h2>
        <p>
          Se você está começando no mundo da programação, pode facilmente
          confundir <strong>Java</strong> e <strong>JavaScript</strong>. Afinal,
          ambos compartilham o nome "Java", mas as semelhanças acabam por aí.
          Cada uma dessas linguagens foi criada com um objetivo específico,
          atendendo a diferentes demandas do mercado de tecnologia.
        </p>
      </section>

      {/* Seção Java */}
      <section className="content">
        <h2>O que é Java?</h2>
        <p>
          O <strong>Java</strong> é uma linguagem de programação criada em 1995
          pela Sun Microsystems (hoje propriedade da Oracle). É amplamente
          conhecida por sua filosofia "Write Once, Run Anywhere" (Escreva uma
          vez, execute em qualquer lugar), permitindo que aplicativos
          desenvolvidos em Java rodem em qualquer plataforma que tenha a{" "}
          <strong>Máquina Virtual Java (JVM)</strong>.
        </p>
        <ul>
          <li>
            <strong>Usos comuns:</strong> <br />  Desenvolvimento de sistemas
            corporativos, aplicativos Android, servidores e até dispositivos
            embarcados.
          </li>
          <li>
            <strong>Pontos fortes:</strong> <br />  Segurança, robustez e escalabilidade
            em grandes projetos.
          </li>
        </ul>
      </section>

      {/* Seção JavaScript */}
      <section className="content">
        <h2>O que é JavaScript?</h2>
        <p>
          O <strong>JavaScript</strong>, criado em 1995 por Brendan Eich, foi
          projetado para tornar as páginas da web mais dinâmicas. Inicialmente,
          era usado apenas no frontend, mas com o advento do <strong>Node.js</strong>,
          também se tornou uma ferramenta poderosa para o backend.
        </p>
        <ul>
          <li>
            <strong>Usos comuns:</strong> <br />  Criação de interfaces interativas,
            animações, Single Page Applications (SPAs) e aplicativos
            full-stack.
          </li>
          <li>
            <strong>Pontos fortes:</strong> <br /> Flexibilidade, ampla adoção no
            desenvolvimento web e integração com APIs modernas.
          </li>
        </ul>
      </section>

      {/* Curiosidades */}
      <section className="content-curiosidades">
      <h2>Curiosidades sobre Java e JavaScript</h2>
      <ul>
        <li>
          <FaCode className="icon" />
          <div>
            <strong>JavaScript não foi inspirado pelo Java:</strong> Apesar do
            nome, o JavaScript foi criado para ser simples e de rápida execução
            no navegador, enquanto o Java foca em robustez e performance em
            servidores.
          </div>
        </li>
        <li>
          <FaCalendarAlt className="icon" />
          <div>
            <strong>Java é mais antigo:</strong> O Java foi lançado alguns meses
            antes do JavaScript, mas ambos surgiram em 1995.
          </div>
        </li>
        <li>
          <FaCubes className="icon" />
          <div>
            <strong>Frameworks populares:</strong> JavaScript possui frameworks
            como React, Angular e Vue.js, enquanto o Java conta com Spring,
            Hibernate e Struts.
          </div>
        </li>
        <li>
          <FaGlobe className="icon" />
          <div>
            <strong>Uma linguagem, muitos ambientes:</strong> O JavaScript é a
            base para tecnologias como Node.js, Deno e até mesmo frameworks de
            desktop como Electron.
          </div>
        </li>
      </ul>
    </section>

      {/* Comparativo */}
      <section className="content">
        <h2>As Principais Diferenças</h2>
        <table>
          <thead>
            <tr>
              <th>Aspecto</th>
              <th>Java</th>
              <th>JavaScript</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tipo de Linguagem</td>
              <td>Compilada</td>
              <td>Interpretada</td>
            </tr>
            <tr>
              <td>Uso Principal</td>
              <td>Backend e aplicativos complexos</td>
              <td>Interatividade e aplicativos web</td>
            </tr>
            <tr>
              <td>Ambiente</td>
              <td>Plataforma independente via JVM</td>
              <td>Navegador e servidor (Node.js)</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Conclusão */}
      <section className="content">
        <h2>Conclusão</h2>
        <p>
          Apesar dos nomes parecidos, <strong>Java</strong> e{" "}
          <strong>JavaScript</strong> são linguagens de programação
          complementares, mas com propósitos distintos. O Java é ideal para
          aplicações corporativas e de grande escala, enquanto o JavaScript é a
          escolha perfeita para criar experiências interativas na web.
        </p>
        <p>
          Escolha a linguagem que melhor atende às suas necessidades e mergulhe
          no mundo da programação!
        </p>
      </section>
    </main>
  );
};

export default Article;
