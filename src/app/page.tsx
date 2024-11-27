import clsx from 'clsx';

import Header from '@/sections/header';
import Hero from '@/sections/hero'; //MUST UPDATE CONFIG BELOW
import Partners from '@/sections/partners';
import Services from '@/sections/services';
import Process from '@/sections/process';
import Portfolio from '@/sections/portfolio';
import Testimony from '@/sections/testimony';
import AboutUs from '@/sections/about-us';
import FAQ from '@/sections/faq';
import CTA from '@/sections/cta';
import Footer from '@/sections/footer';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.starterweb.studio/'),
  // alternates: {
  //   canonical: '/',
  //   languages: {
  //     'en-US': '/en-US',
  //     'de-DE': '/de-DE',
  //   },
  // },
  openGraph: {
    images: [
      {
        url: '/public/opengraph-image.jpg',
        width: 800,
        height: 600,
      },
      {
        url: '/public/opengraph-image-alt.jpg',
        width: 1800,
        height: 1350,
        alt: 'Starter Web Studio',
      },
    ],
  },
  // twitter: {
  //   images: {
  //     url: '/public/opengraph-image-alt.jpg',
  //     alt: 'Starter Web Studio',
  //   },
  // },
};

export default function Home() {
  // CONFIG
  const hero = 'hero-2'; //Makes Hero Section Non-fullScreen for Hero-2

  return (
    <>
      <main>
        <div className="overlay absolute z-30 hidden h-full w-full bg-1"></div>
        <div
          className={`relative flex flex-col 
            `}
          // ${hero == 'hero-3' || hero == 'hero-4' ? 'h-[100svh]' : ''}
        >
          <Header />
          <Hero />
        </div>
        <Partners />
        <Services />
        <Process />
        <Portfolio />
        <Testimony />
        <AboutUs />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
