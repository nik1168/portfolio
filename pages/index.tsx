import Head from 'next/head';

import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen">
      <Head>
        <title>Niklaus Geisser Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/*Hero*/}
      <section id="hero">
        <Hero />
      </section>

      {/*About*/}

      {/*Experiences*/}

      {/*Skills*/}

      {/*Projects*/}

      {/*Contact Me*/}
    </div>
  );
}
