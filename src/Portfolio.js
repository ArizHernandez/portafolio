import React from 'react';
import Particles from 'react-particles-js';

import { Header } from './components/header/Header';
import { About } from './components/about/About';
import { Projects } from './components/projects/Projects';
import { Certificates } from './components/certificates/Certificates';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
// "color": "#3a3a3a"

export const Portfolio = () => {

  return (
    <>
      <Particles
        className="particles"
        params={{
          "particles": {
              "number": {
                  "value": 25
              },
              "size": {
                  "value": 3
              },
              "links": {
                "color": "#575757"
              },
              "color": "#3a3a3a"
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "repulse"
                  }
              }
          }
      }} />
      <Header />
      <About />
      <Projects />
      <Certificates />
      <Contact />
      <Footer /> 
    </>
  )
}
