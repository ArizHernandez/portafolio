export default function About() {
  return (
    <section className="about__main-container" id="about">
      <h3 className="title__content">About me</h3>

      <div className="about__content-container">
        <div className="about__image-container">
          <img
            className="about__image"
            alt="ariz_porfolio_Image"
            src="https://res.cloudinary.com/djcs4ctjx/image/upload/v1623895345/PicsArt_06-14-04.06.47_jyb6lp.jpg"
          />
        </div>
        <div className="about__text-content wow fadeInRight">
          <p className="about__text-title">Hello!</p>
          <p className="about__text">
            I'm Ariz Hernández and I am a web developer, I love the web
            development and the mobile development I've made some projects and
            you can watch my top projects{" "}
            <a className="about__link" href="#projects">
              here
            </a>{" "}
            or look my{" "}
            <a className="about__link" href="https://github.com/ArizHernandez">
              github
            </a>{" "}
            where I have all my projects.
          </p>
        </div>
      </div>
    </section>
  );
}
