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
import { MalagaIcon } from '../../components/logos';

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
      <AyuntamientoLogo className="w-24 h-auto sm:w-32 fill-gray-600" />
    ),
  },
  {
    logoMark: (
      <MalagaProculturaLogo className="w-auto h-3 sm:h-4 fill-gray-600" />
    ),
  },
  {
    logoMark: (
      <TeatroCervantesLogo className="w-auto sm:h-9 h-7 fill-gray-600 stroke-gray-600" />
    ),
  },
  {
    logoMark: (
      <TeatroEchegarayLogo className="w-auto h-6 sm:h-8 fill-gray-600" />
    ),
  },
  {
    logoMark: <MalagaIcon className="w-auto h-8 sm:h-10 fill-gray-600" />,
  },
  // {
  //   logoMark: (
  //     <GalamianLogo className="w-auto h-9 sm:h-12 fill-gray-600 stroke-gray-600" />
  //   ),
  // },
  {
    logoMark: <ReinaNilsenLogo className="w-auto sm:h-12 h-9 fill-gray-600" />,
  },
  {
    logoMark: <LaCaixaLogo className="w-auto h-12 sm:h-16 fill-gray-600" />,
  },
  {
    logoMark: (
      <HoteldelPintorLogo className="w-auto h-12 sm:h-16 fill-gray-600" />
    ),
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Hero() {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const { t } = useTranslation();
  const resonancias = [
    'R',
    'e',
    's',
    'o',
    'n',
    'a',
    'n',
    'c',
    'i',
    'a',
    's',
    ' ',
    'd',
    'e',
    'l',
    ' ',
    'e',
    's',
    'p',
    'í',
    'r',
    'i',
    't',
    'u',
  ];
  const spiritual = [
    'S',
    'p',
    'i',
    'r',
    'i',
    't',
    'u',
    'a',
    'l',
    ' ',
    'R',
    'e',
    's',
    'o',
    'n',
    'a',
    'n',
    'c',
    'e',
    ,
  ];
  return (
    <div className="bg-transparent">
      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-0">
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  duration: 0.8,
                  type: 'fade',
                  ease: 'easeIn',
                }}
                className="object-cover w-full h-full bg-transparent"
              >
                {/* mobile */}
                {/* <div className="sm:hidden">
                  <Image
                    unoptimized={true}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/Resonancias_del_espiritu_2024_desktop_bxxhso.webp"
                    alt="Resonancias de la espiritu"
                    className=""
                  />
                </div> */}
                {/* desktop */}
                {/* <div className="hidden sm:block">
                  <Image
                    unoptimized={true}
                    layout="fill"
                    objectFit="cover"
                    // objectFit="contain"
                    objectPosition="center"
                    src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/Resonancias_del_espiritu_2024_desktop_bxxhso.webp"
                    alt="Resonancias de la espiritu"
                    className=""
                  />
                </div> */}
              </motion.div>
            </div>
            <div className="absolute inset-0 bg-transparent" />
            <div className="w-screen h-full mx-auto bg-transparent sm:px-0 lg:px-0">
              <div className="relative shadow-none sm:overflow-visible">
                <div className="relative flex items-center justify-center h-full sm:justify-start sm:px-6 lg:px-8">
                  <div className="w-full px-6 pt-3 bg-t sm:mt-80 sm:w-fit sm:p-10">
                    <motion.h4
                      variants={container}
                      initial="hidden"
                      animate="show"
                      className="block pt-40 text-5xl italic font-bold text-center text-gray-900 sm:pt-20 sm:text-6xl lg:text-7xl"
                    >
                      {locale === 'en'
                        ? spiritual.map((letter, i) => (
                            <motion.span key={i} variants={item}>
                              {letter}
                            </motion.span>
                          ))
                        : resonancias.map((letter, i) => (
                            <motion.span key={i} variants={item}>
                              {letter}
                            </motion.span>
                          ))}
                    </motion.h4>

                    <motion.h3
                      variants={itemBottom}
                      initial="hidden"
                      animate="show"
                      className="max-w-lg mx-auto mt-3 text-xl font-normal text-center text-gray-600 sm:text-3xl lg:text-4xl sm:max-w-3xl"
                    >
                      27/05__01/06{' '}
                      <span className="text-gray-900">&nbsp;2024</span>
                    </motion.h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          <div className="relative bg-transparent z-1">
            <div className="relative z-20 px-4 py-10 mx-auto sm:py-16 max-w-7xl sm:px-6 lg:px-8">
              <p className="text-sm font-semibold tracking-wide text-center text-gray-900 uppercase">
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
