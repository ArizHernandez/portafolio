import { ProjectCard } from "./ProjectCard";

export default function Projects() {
  return (
    <section className="projects__main-container" id="projects">
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
          title="Cinemapedia"
          image="https://res.cloudinary.com/djcs4ctjx/image/upload/v1690171988/254807013-651aa011-b7ea-40e5-abd3-214a5a695e19_j2spxz.jpg"
          linkSource="https://github.com/ArizHernandez/todo-ngrx"
        />
      </div>
    </section>
  );
}
