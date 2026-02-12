export default function About() {
  return (
    <section className="about__main-container" id="about">
      <h3 className="title__content">About me</h3>

      <div className="about__content-container">
        <div className="about__image-container">
          <img
            className="about__image"
            alt="ariz_porfolio_Image"
            src="https://res.cloudinary.com/djcs4ctjx/image/upload/v1770871302/image_quvetf.jpg"
          />
        </div>
        <div className="about__text-content wow fadeInRight">
          <p className="about__text-title">Hello!</p>
          <p className="about__text">
            I am a professional with solid experience in the analysis, design,
            and development of web platforms. Throughout my career, I have
            participated in diverse projects, applying technical skills to build
            efficient, user-focused solutions. My approach is to improve the
            user experience while maintaining a high standard of code quality. I
            am passionate about self-learning and enjoy continuously growing,
            both professionally and personally. I am committed to continuous
            improvement and always look for new opportunities to expand my
            skills and knowledge.
            <br /> I've made some projects and you can watch my top projects{" "}
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
