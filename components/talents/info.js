import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';

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
    <div className="relative py-16 bg-beigeRevolution/10 sm:py-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 w-full opacity-25 right-1/2 bg-beigeRevolution/50 rounded-r-3xl lg:right-72" />
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
              <div className="absolute inset-0 bg-gradient-to-t from-blueRevolution via-orangeRevolution opacity-70" />
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
            <h2 className="w-full text-4xl font-semibold tracking-tight text-blueRevolution md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 xl:text-6xl sm:text-5xl">
              {t('talents:title_3')}
            </h2>
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
          <div className="mt-10">
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
            <div className="mt-10">
              <a
                href="https://www.teatroechegaray.com/"
                target="_blank"
                rel="noreferrer"
                className="text-base font-medium text-gray-500 transition duration-200 ease-in-out hover:text-orangeRevolution"
              >
                {' '}
                {t('talents:free_entry')} <span aria-hidden="true">&rarr;</span>{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
