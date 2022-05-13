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
                      src="/static/hero-crescendo.webp"
                      alt="Crescendo Festival"
                      priority
                      blurDataURL="/static/data-crescendo.webp"
                      placeholder="blur"
                    />
                  </div>
                  <div className="absolute inset-0 bg-blueCrescendo mix-blend-multiply" />
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
            <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <p className="text-sm font-semibold tracking-wide text-center uppercase text-coalCrescendo">
                {t('home:cloud_title')}
              </p>
              <div className="grid grid-cols-2 gap-8 mt-6 md:grid-cols-3 lg:grid-cols-8">
                <div className="flex justify-center col-span-1 md:col-span-1 lg:col-span-2">
                  <a
                    href="https://www.malaga.eu/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="h-12 transition duration-200 ease-in-out cursor-pointer hover:saturate-200">
                      <Image
                        width={200}
                        height={50}
                        src="/static/ayuntamiento.svg"
                        alt="Ayuntamiento de Málaga"
                      />
                    </div>
                  </a>
                </div>
                <div className="flex justify-center col-span-1 md:col-span-1 lg:col-span-2">
                  <a
                    href="https://www.malagaprocultura.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="h-12 transition duration-200 ease-in-out cursor-pointer hover:saturate-200">
                      <Image
                        width={200}
                        height={50}
                        src="/static/malaga-procultura.svg"
                        alt="Málaga Procultura"
                      />
                    </div>
                  </a>
                </div>
                <div className="flex justify-center col-span-1 md:col-span-1 lg:col-span-2">
                  <a
                    href="https://www.teatrocervantes.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="h-12 transition duration-200 ease-in-out cursor-pointer hover:saturate-200">
                      <Image
                        width={200}
                        height={50}
                        src="/static/cervantes.svg"
                        alt="Teatro Cervantes"
                      />
                    </div>
                  </a>
                </div>
                <div className="flex justify-center col-span-1 md:col-span-1 md:col-start-1 lg:col-span-2">
                  <a
                    href="https://www.teatroechegaray.com/es/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="h-12 transition duration-200 ease-in-out cursor-pointer hover:saturate-200">
                      <Image
                        width={200}
                        height={50}
                        src="/static/echegaray.svg"
                        alt="Teatro Echegaray"
                      />
                    </div>
                  </a>
                </div>
                <div className="flex justify-center col-span-1 md:col-span-1 lg:col-span-2 lg:col-start-2">
                  <a
                    href="https://www.academiagalamian.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="h-12 transition duration-200 ease-in-out cursor-pointer hover:saturate-200">
                      <Image
                        width={200}
                        height={50}
                        src="/static/aig.svg"
                        alt="Acadamia Internacional Galamian"
                      />
                    </div>
                  </a>
                </div>
                <div className="flex justify-center col-span-1 md:col-span-1 lg:col-span-2">
                  <a
                    href="https://www.academiagalamian.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="h-12 transition duration-200 ease-in-out cursor-pointer hover:saturate-200">
                      <Image
                        width={200}
                        height={50}
                        src="/static/reina-nilsen.svg"
                        alt="Fundación Reina Nilsen"
                      />
                    </div>
                  </a>
                </div>
                <div className="flex justify-center col-span-2 md:col-span-1 md:col-start-2 lg:col-span-2">
                  <a
                    href="https://fundacionlacaixa.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="h-12 transition duration-200 ease-in-out cursor-pointer hover:saturate-200">
                      <Image
                        width={200}
                        height={50}
                        src="/static/la-caixa.svg"
                        alt="Fundación La Caixa"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
