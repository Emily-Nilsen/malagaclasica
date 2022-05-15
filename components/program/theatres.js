import Image from 'next/image';
import Link from 'next/link';
import CervantesMap from './cervantes-map';
import EchegarayMap from './echegaray-map';
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

  return (
    <section>
      {/* Teatro Cervantes */}
      <div className="bg-white">
        <div className="max-w-2xl px-4 py-24 mx-auto sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid items-center grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
            <div>
              <div className="pb-10 border-b border-gray-200">
                <h2 className="font-medium text-greenCrescendo">
                  {t('program:theatre_subtitle')}
                </h2>
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-coalCrescendo sm:text-4xl">
                  {t('program:theatre_cervantes')}
                </p>
              </div>

              <dl className="mt-10 space-y-10">
                {detailsCervantes.map((detail) => (
                  <div key={detail.name}>
                    <dt className="text-base font-medium text-coalCrescendo">
                      {detail.name}
                    </dt>
                    <dd className="max-w-sm mt-3 text-base text-mossCrescendo">
                      {detail.description}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white transition duration-200 ease-in-out border border-transparent rounded-md shadow-none hover:text-mossCrescendo bg-mossCrescendo hover:bg-greyCrescendo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueCrescendo"
                >
                  <TicketIcon
                    className="w-5 h-5 mr-2 -ml-1"
                    aria-hidden="true"
                  />
                  {t('program:buy_tickets')}
                </button>
              </div>
            </div>

            <div>
              <div className="overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1">
                <div className="object-cover object-center w-full h-full">
                  <Image
                    src="/static/features/cervantes.webp"
                    alt="Teatro Cervantes"
                    width={600}
                    height={600}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4 sm:gap-6 sm:mt-6 lg:gap-8 lg:mt-8">
                <div className="overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1">
                  <div className="object-cover object-center w-full h-full">
                    <Image
                      src="/static/cervantes.webp"
                      alt="Teatro Cervantes"
                      width={600}
                      height={600}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>

                {/* Google Map */}
                <div className="relative h-0 overflow-hidden rounded-lg shadow-none aspect-w-1 aspect-h-1">
                  <CervantesMap />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Teatro Echegaray */}
      <div className="bg-greyCrescendo">
        <div className="max-w-2xl px-4 py-24 mx-auto sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid items-center grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
            <div>
              <div className="overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1">
                <div className="object-cover object-center w-full h-full">
                  <Image
                    src="/static/features/echegaray.webp"
                    alt="Susanne Hals"
                    width={600}
                    height={600}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4 sm:gap-6 sm:mt-6 lg:gap-8 lg:mt-8">
                {/* Google Map */}
                <div className="relative h-0 overflow-hidden rounded-lg shadow-none aspect-w-1 aspect-h-1">
                  <EchegarayMap />
                </div>
                <div className="overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1">
                  <div className="object-cover object-center w-full h-full">
                    <Image
                      src="/static/echegaray.jpeg"
                      alt="Teatro Echegaray"
                      width={600}
                      height={600}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:pl-20">
              <div className="pb-10 border-b border-gray-200">
                <h2 className="font-medium text-greenCrescendo">
                  {t('program:theatre_subtitle')}
                </h2>
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-coalCrescendo sm:text-4xl">
                  {t('program:theatre_echegaray')}
                </p>
              </div>

              <dl className="mt-10 space-y-10">
                {detailsEchegaray.map((detail) => (
                  <div key={detail.name}>
                    <dt className="text-base font-medium text-coalCrescendo">
                      {detail.name}
                    </dt>
                    <dd className="max-w-sm mt-3 text-base text-mossCrescendo">
                      {detail.description}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white transition duration-200 ease-in-out border border-transparent rounded-md shadow-none hover:text-mossCrescendo bg-mossCrescendo hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueCrescendo"
                >
                  <TicketIcon
                    className="w-5 h-5 mr-2 -ml-1"
                    aria-hidden="true"
                  />
                  {t('program:buy_tickets')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
