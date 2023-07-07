import { lazy, Suspense } from "react";

import { Loading } from "./components/loading/Loading";

const Particles = lazy(() => import("react-tsparticles"));
const Header = lazy(() => import("./components/header/Header"));
const About = lazy(() => import("./components/about/About"));
const Projects = lazy(() => import("./components/projects/Projects"));
const Certificates = lazy(
  () => import("./components/certificates/Certificates")
);
const Contact = lazy(() => import("./components/contact/Contact"));
const Footer = lazy(() => import("./components/footer/Footer"));

export const App = () => {
  // const particlesInit = useCallback(async (engine: Engine) => {
  //   console.log(engine);

  //   // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
  //   // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  //   // starting from v2 you can add only the features you need reducing the bundle size
  //   await loadFull(engine);
  // }, []);

  // const particlesLoaded = useCallback(
  //   async (container: Container | undefined) => {
  //     await console.log(container);
  //   },
  //   []
  // );

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Particles
          className="particles"
          options={{
            fpsLimit: 120,
            particles: {
              number: {
                value: 25,
              },
              size: {
                value: 3,
              },
              links: {
                color: "#666666",
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
        <Certificates />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
};
