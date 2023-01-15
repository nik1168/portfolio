import Head from 'next/head';

import About from '../components/about/About';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import WorkExperience from '../components/work-experience/WorkExperience';

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Niklaus Geisser Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/*BackgroundCircles*/}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/*WorkExperience*/}
      <section id="section" className="snap-center">
        <About />
      </section>

      {/*Experiences*/}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/*Skills*/}

      {/*Projects*/}

      {/*Contact Me*/}
    </div>
  );
}
