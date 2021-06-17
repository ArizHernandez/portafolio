import React from 'react';

import { Navbar } from './Navbar';

export const Header = () => {
  return (
    <header className="header__main-container">
      <Navbar />
      
      <div className="header__title-content">
        <h2 className="header__title-welcome">Welcome to my <span className="header__title-project">Portfolio</span></h2>
        <p className="header__title-presentation">My name is <b>Ariz Hernández</b></p>
        <a
          href="https://arizhernandez.github.io/portafolio/assets/CV.pdf"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary mt-2"
        >
          Dowload CV
        </a>
      </div>
    </header>
  )
}
