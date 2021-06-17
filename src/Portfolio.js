import React, { Suspense } from 'react';

import { Loading } from './components/loading/Loading';
const Particles     = React.lazy(() => import('react-particles-js'));
const Header        = React.lazy(() => import('./components/header/Header'));
const About         = React.lazy(() => import('./components/about/About'));
const Projects      = React.lazy(() => import('./components/projects/Projects'));
const Certificates  = React.lazy(() => import('./components/certificates/Certificates'));
const Contact       = React.lazy(() => import('./components/contact/Contact'));
const Footer        = React.lazy(() => import('./components/footer/Footer'));

export const Portfolio = () => {

  return (
    <>
      <Suspense fallback={<Loading />}> 
        <Particles
          style={{Animation: "fadeHeader .4s ease"}}
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
                  "color": "#666666"
                },
                "color": "#4d4d4d"
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
      </Suspense>
    </>
  )
}
