import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import { AyuntamientoLogo } from '../../components/logos';
import { MalagaProculturaLogo } from '../../components/logos';
import { TeatroCervantesLogo } from '../../components/logos';
import { TeatroEchegarayLogo } from '../../components/logos';
import { GalamianLogo } from '../../components/logos';
import { ReinaNilsenLogo } from '../../components/logos';
import { LaCaixaLogo } from '../../components/logos';
import { HoteldelPintorLogo } from '../../components/logos';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.6,
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
    transition: { type: 'spring', stiffness: 30, duration: 1.3, delay: 1.5 },
  },
};

const logos = [
  {
    logoMark: (
      <AyuntamientoLogo className="w-24 h-auto sm:w-32 fill-orangeRevolution" />
    ),
  },
  {
    logoMark: (
      <MalagaProculturaLogo className="w-auto h-3 sm:h-4 fill-orangeRevolution" />
    ),
  },
  {
    logoMark: (
      <TeatroCervantesLogo className="w-auto sm:h-9 h-7 fill-orangeRevolution stroke-orangeRevolution" />
    ),
  },
  {
    logoMark: (
      <TeatroEchegarayLogo className="w-auto h-6 sm:h-8 fill-orangeRevolution" />
    ),
  },
  {
    logoMark: (
      <GalamianLogo className="w-auto h-9 sm:h-12 fill-orangeRevolution stroke-orangeRevolution" />
    ),
  },
  {
    logoMark: (
      <ReinaNilsenLogo className="w-auto sm:h-12 h-9 fill-orangeRevolution" />
    ),
  },
  {
    logoMark: (
      <LaCaixaLogo className="w-auto h-12 sm:h-16 fill-orangeRevolution" />
    ),
  },
  {
    logoMark: (
      <HoteldelPintorLogo className="w-auto h-12 sm:h-16 fill-orangeRevolution" />
    ),
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Hero() {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const { t } = useTranslation();
  const revoluciones = [
    'r',
    'e',
    'v',
    'o',
    'l',
    'u',
    'c',
    'i',
    'o',
    'n',
    'e',
    's',
  ];
  const revolutions = ['r', 'e', 'v', 'o', 'l', 'u', 't', 'i', 'o', 'n', 's'];
  return (
    <div className="bg-beigeRevolution/10">
      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-beigeRevolution/10" />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative shadow-none sm:overflow-hidden h-[50vh]">
                <div className="absolute inset-0">
                  <motion.div
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{
                      duration: 0.8,
                      type: 'fade',
                      ease: 'easeIn',
                    }}
                    className="object-cover w-full h-full bg-beigeRevolution/10"
                  >
                    {/* mobile */}
                    <div className="sm:hidden">
                      <Image
                        unoptimized={true}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="right"
                        src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/violin_spirals_yngvdp.svg"
                        alt="Revoluciones Festival"
                        className="bg-beigeRevolution"
                      />
                    </div>
                    {/* desktop */}
                    <div className="hidden sm:block">
                      <Image
                        unoptimized={true}
                        layout="fill"
                        objectFit="contain"
                        objectPosition="right"
                        src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/violin_spirals_yngvdp.svg"
                        alt="Revoluciones Festival"
                        className="bg-beigeRevolution"
                      />
                    </div>
                  </motion.div>
                </div>
                <div className="relative flex items-center justify-center h-full sm:justify-start sm:px-6 lg:px-8">
                  <div className="w-full px-6 pt-3 bg-white sm:w-fit sm:p-10">
                    <motion.h1
                      variants={container}
                      initial="hidden"
                      animate="show"
                      className="block text-5xl font-extrabold tracking-tight text-center uppercase text-orangeRevolution sm:text-7xl lg:text-8xl"
                    >
                      {locale === 'en'
                        ? revolutions.map((letter, i) => (
                            <motion.span key={i} variants={item}>
                              {letter}
                            </motion.span>
                          ))
                        : revoluciones.map((letter, i) => (
                            <motion.span key={i} variants={item}>
                              {letter}
                            </motion.span>
                          ))}
                    </motion.h1>

                    <motion.h2
                      variants={itemBottom}
                      initial="hidden"
                      animate="show"
                      className="max-w-lg mx-auto mt-3 text-2xl text-center sm:text-4xl lg:text-5xl text-blueRevolution sm:max-w-3xl"
                    >
                      29/05__04/06{' '}
                      <span className="text-orangeRevolution">&nbsp;2023</span>
                    </motion.h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          <div className="bg-beigeRevolution/10">
            <div className="px-4 py-10 mx-auto sm:py-16 max-w-7xl sm:px-6 lg:px-8">
              <p className="text-sm font-semibold tracking-wide text-center text-gray-600 uppercase">
                {t('home:cloud_title')}
              </p>
              {/* Mobile screen cloud */}
              <div className="grid grid-cols-2 gap-3 mt-6 sm:hidden">
                {logos.map((logo) => (
                  <div
                    key={logo.name}
                    className="flex items-center justify-center"
                  >
                    <div>{logo.logoMark}</div>
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
                      <div>{logo.logoMark}</div>
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
