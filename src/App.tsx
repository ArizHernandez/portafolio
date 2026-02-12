import { lazy, Suspense, useCallback } from "react";

import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

import { Loading } from "./components/loading/Loading";

const Particles = lazy(() => import("react-tsparticles"));
const Header = lazy(() => import("./components/header/Header"));
const About = lazy(() => import("./components/about/About"));
const Projects = lazy(() => import("./components/projects/Projects"));
const Certificates = lazy(
  () => import("./components/certifications/Certificates")
);
const Contact = lazy(() => import("./components/contact/Contact"));
const Footer = lazy(() => import("./components/footer/Footer"));

export const App = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Particles
          className="particles"
          id="tsparticles"
          init={particlesInit}
          options={{
            preset: "links",
            fpsLimit: 120,
            particles: {
              number: {
                value: 25,
              },
              size: {
                value: 3,
              },
              links: {
                enable: true,
                color: "#666666",
                collisions: {
                  enable: true,
                },
              },
              bounce: {
                horizontal: {
                  value: 1,
                },
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 6,
                straight: false,
              },
              color: { value: "#4d4d4d" },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
        <Header />
        <About />
        <Projects />
        {/* <Certificates /> */}
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
};
