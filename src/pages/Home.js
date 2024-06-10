import Header from "./../components/header/Header";
import './../styles/main.css'
import React, { useEffect, useRef } from 'react';


function Home() {
  
    const listRef = useRef(null);

   
    
    useEffect(() => {
      const handleScroll = () => {
        const listElement = listRef.current;
        if (listElement) {
          const elementTop = listElement.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
    
          if (elementTop < windowHeight) {
            listElement.classList.add('fade-in');
          }
        }
      };
    
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <h1 className="title-1">My skills</h1>
          <ul ref={listRef} className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>JavaScript, ReactJS, Redux, Redux Saga, HTML, CSS, SCSS, NPM, BootStrap</p>
            </li>
            <ul className="skill-levels">
                <li className="skill-level">
                    <div className="skill-level__circle" data-skill-level="80"></div>
                </li>
                
            </ul>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>MySQL, Java, Spring, C++, NoSQL</p>
            </li>
            <ul className="skill-levels">
                <li className="skill-level">
                    <div className="skill-level__circle" data-skill-level="60"></div>
                </li>
                
            </ul>
            <li className="content-list__item">
              <h2 className="title-2">Other</h2>
              <p>Git&Github, JIRA, Figma</p>
              </li>
              <ul className="skill-levels">
                <li className="skill-level">
                    <div className="skill-level__circle" data-skill-level="75"></div>
                </li>
                
            </ul>
            <li className="content-list__item">
              <h2 className="title-2">Languages</h2>
              <p><strong>English </strong>B2</p>
              <p><strong>Ukrainian, Russian </strong>native</p>
              <p><strong>Norwegian </strong>A1-A2</p>
              <p><strong>Polish </strong>A1-A2</p>
              </li>
              <ul className="skill-levels">
                <li className="skill-level">
                    <div className="skill-level__circle" data-skill-level="75"></div>
                </li>
                
            </ul>
            
          </ul>
        </div>
      </main>
    </>
  );
}

export default Home;

