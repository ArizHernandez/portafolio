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
          title="Ving"
          image="https://github-production-user-asset-6210df.s3.amazonaws.com/37966712/548629865-88dd9b83-3a66-4b4f-b667-bdf0a7878496.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260212%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260212T053105Z&X-Amz-Expires=300&X-Amz-Signature=107a66e9f0ee8187c6ca2968d51330093bac193ec74062ba01261afa0d9cf92e&X-Amz-SignedHeaders=host"
          linkSource="https://github.com/ArizHernandez/dw-proyecto-FE"
        />

        <ProjectCard
          title="is4techTS"
          image="https://user-images.githubusercontent.com/37966712/166085731-f01bed71-08a1-4906-afb0-fb92995a8f93.png"
          linkSource="https://github.com/ArizHernandez/is4tech-test-front"
        />

        <ProjectCard
          title="Cinemapedia"
          image="https://res.cloudinary.com/djcs4ctjx/image/upload/v1690171988/254807013-651aa011-b7ea-40e5-abd3-214a5a695e19_j2spxz.jpg"
          linkSource="https://github.com/ArizHernandez/cinemapedia"
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
  );
}
