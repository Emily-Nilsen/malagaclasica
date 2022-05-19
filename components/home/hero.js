import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const itemBottom = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: [0, 0.2, 0.5, 0.8, 1],
    y: 0,
    transition: { type: 'spring', stiffness: 30, duration: 1.3, delay: 1.6 },
  },
};

const logos = [
  {
    image: `/static/ayuntamiento.svg`,
    alt: `Ayuntamiento de Málaga`,
    link: `https://www.malaga.eu/`,
    height: 50,
    width: 200,
  },
  {
    image: `/static/malaga-procultura.svg`,
    alt: `Málaga Procultura`,
    link: `https://www.malagaprocultura.com/`,
    height: 50,
    width: 130,
  },
  {
    image: `/static/cervantes.svg`,
    alt: `Teatro Cervantes`,
    link: `https://www.teatrocervantes.com/`,
    height: 50,
    width: 200,
  },
  {
    image: `/static/echegaray.svg`,
    alt: `Teatro Echegaray`,
    link: `https://www.teatroechegaray.com/es/`,
    height: 50,
    width: 100,
  },
  {
    image: `/static/aig.svg`,
    alt: `Acadamia Internacional Galamian`,
    link: `https://www.academiagalamian.com/`,
    height: 50,
    width: 200,
  },
  {
    image: `/static/reina-nilsen.svg`,
    alt: `Fundación Reina Nilsen`,
    link: `https://www.academiagalamian.com/`,
    height: 50,
    width: 200,
  },
  {
    image: `/static/la-caixa.svg`,
    alt: `Fundación La Caixa`,
    link: `https://fundacionlacaixa.org/`,
    height: 65,
    width: 200,
  },
  {
    image: `/static/pintor.svg`,
    alt: `Hotel del Pintor`,
    link: `https://www.hoteldelpintor.com/`,
    height: 65,
    width: 200,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Hero() {
  const { t } = useTranslation();
  const crescendo = ['c', 'r', 'e', 's', 'c', 'e', 'n', 'd', 'o'];
  return (
    <div className="bg-greyCrescendo">
      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-greyCrescendo" />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative shadow-none sm:overflow-hidden h-[50vh]">
                <div className="absolute inset-0">
                  <div className="object-cover w-full h-full">
                    <Image
                      width={2400}
                      height={1500}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      src="/static/features/crescendo-blue.webp"
                      alt="Crescendo Festival"
                      priority
                      blurDataURL="/static/features/data-crescendo.webp"
                      placeholder="blur"
                    />
                  </div>
                </div>
                <div className="relative flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
                  <div>
                    <motion.h1
                      variants={container}
                      initial="hidden"
                      animate="show"
                      className="block font-extrabold tracking-normal text-center text-greyCrescendo text-7xl sm:text-8xl lg:text-9xl"
                    >
                      {crescendo.map((letter, i) => (
                        <motion.span key={i} variants={item}>
                          {letter}
                        </motion.span>
                      ))}
                    </motion.h1>

                    <motion.h2
                      variants={itemBottom}
                      initial="hidden"
                      animate="show"
                      className="max-w-lg mx-auto mt-3 text-3xl text-center sm:text-4xl lg:text-5xl text-greyCrescendo sm:max-w-3xl"
                    >
                      6__12/6/2022
                    </motion.h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          <div className="bg-greyCrescendo">
            <div className="px-4 py-10 mx-auto sm:py-16 max-w-7xl sm:px-6 lg:px-8">
              <p className="text-sm font-semibold tracking-wide text-center uppercase text-coalCrescendo">
                {t('home:cloud_title')}
              </p>
              {/* Mobile screen cloud */}
              <div className="grid grid-cols-4 gap-1 mt-6 sm:hidden">
                {logos.map((logo) => (
                  <div
                    key={logo.name}
                    className="flex items-center justify-center"
                  >
                    <div className="transition duration-200 ease-in-out hover:brightness-125">
                      <Image
                        width={logo.width}
                        height={logo.height}
                        src={logo.image}
                        alt={logo.alt}
                      />
                    </div>
                  </div>
                ))}
              </div>
              {/* iPad and larger screen cloud */}
              <div className="hidden grid-cols-4 gap-3 mt-6 sm:grid">
                {logos.map((logo) => (
                  <div
                    key={logo.name}
                    className="flex items-center justify-center"
                  >
                    <a href={logo.link} target="_blank" rel="noreferrer">
                      <div className="transition duration-200 ease-in-out cursor-pointer hover:brightness-125">
                        <Image
                          width={logo.width}
                          height={logo.height}
                          src={logo.image}
                          alt={logo.alt}
                        />
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
