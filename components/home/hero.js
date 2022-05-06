import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Hero() {
  const { t } = useTranslation();
  return (
    <div className="bg-greyCrescendo">
      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-greyCrescendo" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-none sm:overflow-hidden h-[50vh]">
                <div className="absolute inset-0">
                  <div className="h-full w-full object-cover">
                    <Image
                      width={2400}
                      height={1500}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      src="/static/crescendo.webp"
                      alt="Crescendo Festival"
                    />
                  </div>
                  <div className="absolute inset-0 bg-blueCrescendo mix-blend-multiply" />
                </div>
                <div className="relative px-4 sm:px-6 lg:px-8 h-full items-center justify-center flex">
                  <div>
                    <h1 className="text-center text-7xl font-extrabold tracking-normal sm:text-8xl lg:text-9xl">
                      <span className="block text-greyCrescendo">
                        crescendo
                      </span>
                    </h1>
                    <h2 className="mt-3 max-w-lg mx-auto text-center text-3xl sm:text-4xl lg:text-5xl text-greyCrescendo sm:max-w-3xl">
                      6__12/6/2022
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          <div className="bg-greyCrescendo">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-sm font-semibold uppercase text-coalCrescendo tracking-wide">
                {t('home:cloud_title')}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-8">
                <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-2">
                  <div className="h-12">
                    <Image
                      width={200}
                      height={50}
                      src="/static/ayuntamiento.svg"
                      alt="Ayuntamiento de Málaga"
                    />
                  </div>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-2">
                  <div className="h-12">
                    <Image
                      width={200}
                      height={50}
                      src="/static/malaga-procultura.svg"
                      alt="Málaga Procultura"
                    />
                  </div>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-2">
                  <div className="h-12">
                    <Image
                      width={200}
                      height={50}
                      src="/static/cervantes.svg"
                      alt="Teatro Cervantes"
                    />
                  </div>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-1 md:col-start-1 lg:col-span-2">
                  <div className="h-12">
                    <Image
                      width={200}
                      height={50}
                      src="/static/echegaray.svg"
                      alt="Teatro Echegaray"
                    />
                  </div>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-2 lg:col-start-2">
                  <div className="h-12">
                    <Image
                      width={200}
                      height={50}
                      src="/static/aig.svg"
                      alt="Acadamia Internacional Galamian"
                    />
                  </div>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-1 lg:col-span-2">
                  <div className="h-12">
                    <Image
                      width={200}
                      height={50}
                      src="/static/reina-nilsen.svg"
                      alt="Fundación Reina Nilsen"
                    />
                  </div>
                </div>

                <div className="col-span-2 flex justify-center md:col-span-1 md:col-start-2 lg:col-span-2">
                  <div className="h-12">
                    <Image
                      width={200}
                      height={50}
                      src="/static/la-caixa.svg"
                      alt="Fundación La Caixa"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
