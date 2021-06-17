import React from 'react'

export const Navbar = () => {
  return (
    <nav className="navbar__main-container">
      <div className="navbar__content-container">
        <i className="far fa-clone fa-lg navbar__icon"></i>
        <ul className="navbar__menu-container">
          <li className="navbar__menu-item"><a href="#about">About</a></li>
          <li className="navbar__menu-item"><a href="#projects">Proyects</a></li>
          <li className="navbar__menu-item"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
