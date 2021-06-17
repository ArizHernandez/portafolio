import React from 'react'

export const About = () => {
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
        <div className="about__text-content">
          <p className="about__text-title">
            some about me...
          </p>
          <p className="about__text">
            Hi!, My name is Ariz Hernández, I am a web developer, I'm have been studying web technologies more than a year ago.
            I have made some projects you can watch my top 
            projects <a className="about__link" href="#projects">here</a> or look 
            my <a className="about__link" href="https://github.com/ArizHernandez">github</a> where I have all my projects.
          </p>
        </div>
      </div>
    </section>
  )
}
