import Image from 'next/image';
import Link from 'next/link';
import CervantesMap from './cervantes-map';
import EchegarayMap from './echegaray-map';
import CatedralMap from './catedral-map';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import { TicketIcon } from '@heroicons/react/solid';

export default function Theatres() {
  const { t } = useTranslation();
  const detailsCervantes = [
    {
      name: `${t('program:cervantes_address')}`,
      description: '',
    },
    {
      name: `${t('program:cervantes_weekday')}`,
      description: `${t('program:cervantes_week_hours')}`,
    },
    {
      name: `${t('program:cervantes_weekend')}`,
      description: `${t('program:cervantes_weekend_hours')}`,
    },
    {
      name: '',
      description: `${t('program:holidays')}`,
    },
  ];

  const detailsEchegaray = [
    {
      name: `${t('program:echegaray_address')}`,
      description: '',
    },
    {
      name: `${t('program:ticket_hours')}`,
      description: `${t('program:echegaray_tickets')}`,
    },
  ];

  const detailsCatedral = [
    {
      name: `${t('program:catedral_address')}`,
      description: '',
    },
    {
      name: `${t('program:ticket_hours')}`,
      description: `${t('program:echegaray_tickets')}`,
    },
  ];

  return (
    <section>
      {/* Catedral de Malaga */}
      {/* <div className="bg-beigeRevolution/10">
        <div className="max-w-2xl px-4 py-24 mx-auto sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid items-center grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
            <div>
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.5,
                  type: 'fade',
                  ease: 'easeIn',
                }}
                className="overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1"
              >
                <div className="object-cover object-center w-full h-full">
                  <Image
                    src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/Foto_02_revoluciones_b8del4.webp"
                    alt="Teatro Echegaray"
                    unoptimized={true}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </motion.div>
              <div className="grid grid-cols-2 gap-4 mt-4 sm:gap-6 sm:mt-6 lg:gap-8 lg:mt-8">
                
                <motion.div
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.5,
                    type: 'fade',
                    ease: 'easeIn',
                  }}
                  className="relative h-0 overflow-hidden rounded-lg shadow-none aspect-w-1 aspect-h-1"
                >
                  <CatedralMap />
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    delay: 0.7,
                    duration: 0.5,
                    type: 'fade',
                    ease: 'easeIn',
                  }}
                  className="overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1"
                >
                  <div className="object-cover object-center w-full h-full">
                    <Image
                      src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/catholic_cathedral_u7hv5f.webp"
                      alt="Catedral de Málaga"
                      unoptimized={true}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="lg:pl-20">
              <div className="pb-10 border-b border-gray-200">
                <h2 className="font-medium text-orangeRevolution">
                  {t('program:theatre_subtitle')}
                </h2>
                <h1 className="mt-2 text-3xl font-extrabold tracking-normal text-blueRevolution sm:text-4xl">
                  {t('program:theatre_catedral')}
                </h1>
              </div>

              <dl className="mt-10 space-y-10">
                {detailsCatedral.map((detail) => (
                  <div key={detail.name}>
                    <dt className="text-base font-medium text-gray-700">
                      {detail.name}
                    </dt>
                    <dd className="max-w-sm mt-3 text-base text-gray-500">
                      {detail.description}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <a
                  href="https://www.teatroechegaray.com/es/genero/musica/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white transition duration-200 ease-in-out border border-transparent rounded-md shadow-none bg-orangeRevolution hover:bg-blueRevolution focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orangeRevolution"
                  >
                    <TicketIcon
                      className="w-5 h-5 mr-2 -ml-1"
                      aria-hidden="true"
                    />
                    {t('program:buy_tickets')}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Teatro Echegaray */}
      <div className="bg-white">
        <div className="max-w-2xl px-4 py-24 mx-auto sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid items-center grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
            <div>
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.5,
                  type: 'fade',
                  ease: 'easeIn',
                }}
                className="overflow-hidden bg-white rounded-lg aspect-w-1 aspect-h-1"
              >
                <div className="object-cover object-center w-full h-full">
                  <Image
                    src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/Foto_04_revoluciones_jvrwqs.webp"
                    alt="Teatro Echegaray"
                    unoptimized={true}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </motion.div>
              <div className="grid grid-cols-2 gap-4 mt-4 sm:gap-6 sm:mt-6 lg:gap-8 lg:mt-8">
                {/* Google Map */}
                <motion.div
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.5,
                    type: 'fade',
                    ease: 'easeIn',
                  }}
                  className="relative h-0 overflow-hidden rounded-lg shadow-none aspect-w-1 aspect-h-1"
                >
                  <EchegarayMap />
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    delay: 0.7,
                    duration: 0.5,
                    type: 'fade',
                    ease: 'easeIn',
                  }}
                  className="overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1"
                >
                  <div className="object-cover object-center w-full h-full">
                    <Image
                      src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653686229/M%C3%A1laga%20Cl%C3%A1sica/echegaray_fcc1ko.jpg"
                      alt="Teatro Echegaray"
                      unoptimized={true}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="lg:pl-20">
              <div className="pb-10 border-b border-pink2024/30">
                <h4 className="italic font-bold text-pinkText2024">
                  {t('program:theatre_subtitle')}
                </h4>
                <h4 className="mt-2 text-3xl font-bold tracking-normal text-blueText2024 sm:text-4xl">
                  {t('program:theatre_echegaray')}
                </h4>
              </div>

              <dl className="mt-10 space-y-10">
                {detailsEchegaray.map((detail) => (
                  <div key={detail.name}>
                    <dt className="text-base font-medium text-gray-700">
                      {detail.name}
                    </dt>
                    <dd className="max-w-sm mt-3 text-base text-gray-500">
                      {detail.description}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <a
                  href="https://www.teatroechegaray.com/es/genero/musica/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white transition duration-200 ease-in-out border border-transparent rounded-md shadow-none bg-pink2024 hover:bg-blueText2024 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue2024"
                  >
                    <TicketIcon
                      className="w-5 h-5 mr-2 -ml-1"
                      aria-hidden="true"
                    />
                    {t('program:buy_tickets')}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Teatro Cervantes */}
      <div className="bg-blue2024/40">
        <div className="max-w-2xl px-4 py-24 mx-auto sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid items-center grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
            <div>
              <div className="pb-10 border-b border-blue2024/50">
                <h4 className="italic font-bold text-pinkText2024">
                  {t('program:theatre_subtitle')}
                </h4>
                <h4 className="mt-2 text-3xl font-bold tracking-normal text-blueGreyDark2024 sm:text-4xl">
                  {t('program:theatre_cervantes')}
                </h4>
              </div>

              <dl className="mt-10 space-y-10">
                {detailsCervantes.map((detail) => (
                  <div key={detail.name}>
                    <dt className="text-base font-medium text-gray-700">
                      {detail.name}
                    </dt>
                    <dd className="max-w-sm mt-3 text-base text-gray-500">
                      {detail.description}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <a
                  href="https://teatrocervantes.com/es/genero/musica/xi-malaga-clasica-revoluciones/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white transition duration-200 ease-in-out border border-transparent rounded-md shadow-none bg-blueText2024 hover:bg-pinkText2024 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink2024"
                  >
                    <TicketIcon
                      className="w-5 h-5 mr-2 -ml-1"
                      aria-hidden="true"
                    />
                    {t('program:buy_tickets')}
                  </button>
                </a>
              </div>
            </div>

            <div>
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.5,
                  type: 'fade',
                  ease: 'easeIn',
                }}
                className="overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1"
              >
                <div className="object-cover object-center w-full h-full">
                  <Image
                    src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/NG-revoluciones_ecfcmj.webp"
                    alt="Teatro Cervantes"
                    unoptimized={true}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </motion.div>
              <div className="grid grid-cols-2 gap-4 mt-4 sm:gap-6 sm:mt-6 lg:gap-8 lg:mt-8">
                <motion.div
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.5,
                    type: 'fade',
                    ease: 'easeIn',
                  }}
                  className="overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1"
                >
                  <div className="object-cover object-center w-full h-full">
                    <Image
                      src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653686228/M%C3%A1laga%20Cl%C3%A1sica/cervantes_ikqf3i.webp"
                      alt="Teatro Cervantes"
                      unoptimized={true}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </motion.div>

                {/* Google Map */}
                <motion.div
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    delay: 0.7,
                    duration: 0.5,
                    type: 'fade',
                    ease: 'easeIn',
                  }}
                  className="relative h-0 overflow-hidden rounded-lg shadow-none aspect-w-1 aspect-h-1"
                >
                  <CervantesMap />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
