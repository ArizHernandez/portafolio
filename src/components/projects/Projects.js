import React, { useEffect } from 'react';
import WOW from 'wowjs';

import { ProjectCard } from './ProjectCard';

export default function Projects() {  
  useEffect(() => {
    new WOW.WOW().init();
  }, [])

  return (
    <section className="projects__main-container wow fadeIn" id="projects">
      <h3 className="title__content">Projects</h3>

      <div className="projects__cards-container mt-3">
          
        <ProjectCard
          title="Macropeliculas"
          image="https://res.cloudinary.com/djcs4ctjx/image/upload/v1623788508/Captura_de_pantalla_1011_sjfvun.png"
          linkSource="https://github.com/ArizHernandez/MacroPeliculas"
          linkDemo="https://macropeliculas.web.app/"
        />
        
        <ProjectCard
          title="Journal App"
          image="https://res.cloudinary.com/djcs4ctjx/image/upload/v1623787846/Captura_de_pantalla_1002_conz9h.png"
          linkSource="https://github.com/ArizHernandez/JournalApp"
          linkDemo="http://arizHernandez.github.io/JournalApp"
        />

        <ProjectCard
          title="Todo App"
          image="https://user-images.githubusercontent.com/37966712/113535268-8d1d3000-9598-11eb-8e80-d2370065a188.png"
          linkSource="https://github.com/ArizHernandez/todo-ngrx"
          linkDemo="https://arizhernandez.github.io/todo-ngrx/"
        />

      </div>
    </section>
  )
}