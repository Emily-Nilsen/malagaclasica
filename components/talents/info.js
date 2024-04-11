import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';

export default function InfoTalentos() {
  const { t } = useTranslation();
  const stats = [
    {
      label: `${t('talents:masterclasses_title')}`,
      value: `${t('talents:dates')}`,
    },
    {
      label: `${t('talents:time')}`,
      value: `${t('talents:masterclasses_time')}`,
    },
    {
      label: `${t('talents:concerts_title')}`,
      value: `${t('talents:concert_date')}`,
    },
    { label: `${t('talents:time')}`, value: `${t('talents:concert_time')}` },
    {
      label: `${t('talents:concert_conference')}`,
      value: `${t('talents:concert_conference_date')}`,
    },
    {
      label: `${t('talents:time')}`,
      value: `${t('talents:concert_conference_time')}`,
    },
  ];

  return (
    <div className="relative py-16 bg-pink3_2024/30 sm:py-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 w-full opacity-100 right-1/2 bg-pink3_2024/50 rounded-r-3xl lg:right-72" />
          </div>
          <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card*/}
            <div className="relative pt-64 pb-10 overflow-hidden shadow-none rounded-2xl">
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  duration: 0.8,
                  type: 'fade',
                  ease: 'easeIn',
                }}
                className="absolute inset-0 object-cover w-full h-full"
              >
                <Image
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/echegaray_fcc1ko.jpg"
                  alt="Teatro Echegaray"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  unoptimized={true}
                />
              </motion.div>
              {/* <div className="absolute inset-0 bg-blueCrescendo mix-blend-multiply" /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-blueText2024 via-pinkText2024 opacity-70" />
              <div className="relative px-8">
                <blockquote className="mt-8">
                  <footer className="mt-4">
                    <p className="text-lg font-medium text-white">
                      {t('talents:image_title')}
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h4 className="w-full text-4xl font-bold tracking-normal text-pinkText2024 md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 xl:text-6xl sm:text-5xl">
              {t('talents:title_3')}
            </h4>
            <div className="mt-6 space-y-6 text-gray-500">
              <p className="text-lg">{t('talents:para_1')}</p>
              <p className="text-base leading-7">
                {t('talents:para_7_start')}
                <a
                  href="https://www.teatroechegaray.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="font-semibold transition duration-300 ease-in-out hover:text-orangeRevolution">
                    {t('talents:para_7_link')}
                  </span>
                </a>

                {/* {t('talents:para_7_end')} */}
              </p>
              {/* Detailed information about the program and the chosen groups will be published one week before the shows */}
              <p className="text-base leading-7">{t('talents:para_8')}</p>
            </div>
          </div>

          {/* Stats section */}
          {/* <div className="mt-10">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="pt-6 border-t-2 border-gray-100"
                >
                  <dt className="text-base font-medium text-orangeRevolution">
                    {stat.label}
                  </dt>
                  <dd className="text-3xl font-semibold tracking-normal text-blueRevolution">
                    <h2>{stat.value}</h2>
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 space-y-6 text-gray-500">
              <p>{t('talents:concert_conference_note')}</p>
            </div>

            <div className="mt-10 text-gray-500">
              {t('talents:concert_note')}
            </div>
            <div className="flex mt-10">
              <a
                href="https://teatrocervantes.com/es/genero/musica/xi-malaga-clasica-revoluciones/malaga-talentos-1389"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white transition duration-200 ease-in-out border border-transparent rounded-md shadow-none bg-orangeRevolution hover:bg-blueRevolution focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orangeRevolution"
                >
                  {t('talents:cervantes')}
                </button>
              </a>
              <a
                href="http://cinealbeniz.com/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="inline-flex justify-center px-4 py-2 ml-6 text-sm font-medium text-gray-600 transition duration-200 ease-in-out bg-white border border-transparent rounded-md shadow-none hover:text-blueRevolution hover:bg-orangeRevolution/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orangeRevolution">
                  {t('talents:cine')}
                </button>
              </a>
            </div>
            <div className="flex"></div>

            
          </div> */}
          {/* More info */}
          <div>
            <div className="mt-12 text-gray-500">
              <span className="">
                <h4 className="text-lg italic font-bold text-blueText2024">
                  {t('talents:more_info')}
                </h4>
              </span>
            </div>
            <dl className="mt-3 text-base transition duration-200 ease-in-out text-blueGreyDark2024">
              {/* phone */}
              <div className="mt-3">
                <dt className="sr-only">Telefono</dt>
                <dd className="flex">
                  <PhoneIcon
                    className="flex-shrink-0 w-6 h-6 text-pinkText2024"
                    aria-hidden="true"
                  />
                  <span className="ml-3 font-medium">699 06 74 52</span>
                </dd>
              </div>
              {/* email */}
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailIcon
                    className="flex-shrink-0 w-6 h-6 text-pinkText2024"
                    aria-hidden="true"
                  />
                  <span className="ml-3 font-medium">
                    secretaria.malagaclasica@gmail.com
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
