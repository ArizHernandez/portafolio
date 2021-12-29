import React from 'react'

export const Navbar = () => {
  return (
    <nav className="navbar__main-container">
      <div className="navbar__content-container">
        <span>Arz :)</span>
        <ul className="navbar__menu-container">
          <li className="navbar__menu-item"><a href="#about">About</a></li>
          <li className="navbar__menu-item"><a href="#projects">Projects</a></li>
          <li className="navbar__menu-item"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
