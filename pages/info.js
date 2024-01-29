import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import AnnaJesus from '../components/info/anna-jesus';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';
import { CameraIcon } from '@heroicons/react/solid';

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
    transition: { type: 'spring', stiffness: 30, duration: 1.3, delay: 1.5 },
  },
};

export default function Info() {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const { t } = useTranslation();
  const revoluciones = [
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
    '',
    'd',
    'e',
    'l',
    '',
    'e',
    's',
    'p',
    'í',
    'r',
    'i',
    't',
    'u',
  ];
  const revolutions = ['r', 'e', 'v', 'o', 'l', 'u', 't', 'i', 'o', 'n', 's'];

  return (
    <Layout
      title={t('common:info_title')}
      description={t('common:info_description')}
      keywords={t('common:info_keywords')}
    >
      <div className="relative px-10 py-28 sm:px-12 bg-beigeRevolution sm:py-0">
        <div className="absolute inset-0">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              type: 'fade',
              ease: 'easeIn',
            }}
            className="object-cover w-full h-full"
          >
            <div className="absolute right-0 w-full h-full">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/violin_spirals_yngvdp.svg"
                alt="Málaga Clásica"
                unoptimized={true}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
              />
            </div>
          </motion.div>
        </div>
        <div className="relative px-0 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
          <div className="px-3 pt-3 pb-1 -m-10 text-center bg-white sm:px-9 sm:pt-6 sm:pb-4 sm:w-fit sm:text-left">
            <motion.h1
              variants={container}
              initial="hidden"
              animate="show"
              className="block text-4xl font-extrabold tracking-tight uppercase text-orangeRevolution sm:text-5xl lg:text-6xl"
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
              className="max-w-3xl text-lg sm:mt-3 sm:text-2xl text-blueRevolution"
            >
              27/05__01/06{' '}
              <span className="text-orangeRevolution">&nbsp;2024</span>
            </motion.h2>
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-white">
        <div className="relative px-4 pt-16 pb-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="absolute top-0 bottom-0 hidden w-screen opacity-25 lg:block bg-beigeRevolution left-3/4" />
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <h2 className="text-base font-normal tracking-normal text-orangeRevolution">
                Málaga Clásica
              </h2>
              <h1 className="mt-2 text-4xl font-extrabold leading-none tracking-tight md:text-6xl text-blueRevolution sm:text-5xl">
                {t('info:title')}
              </h1>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <div className="relative mx-auto text-base max-w-prose lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <motion.div
                      whileInView={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      transition={{
                        delay: 0.7,
                        duration: 0.8,
                        type: 'fade',
                        ease: 'easeIn',
                      }}
                      className="object-cover object-center overflow-hidden rounded-lg shadow-none"
                    >
                      <Image
                        src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/Foto_02_revoluciones_b8del4.webp"
                        alt="Málaga Clásica"
                        width={2228}
                        height={1300}
                        layout="responsive"
                        objectFit="cover"
                        objectPosition="center"
                        unoptimized={true}
                        className="bg-beigeRevolution"
                      />
                    </motion.div>
                  </div>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="mx-auto text-base max-w-prose lg:max-w-none">
                <p className="text-lg text-gray-600">{t('info:para_1')}</p>
              </div>
              <div className="mx-auto mt-5 prose prose-cyan lg:max-w-none lg:row-start-1 lg:col-start-1">
                <div className="text-gray-600">
                  <p>{t('info:para_2')}</p>
                  <p>{t('info:para_3')}</p>
                </div>
                {/* <h3 className="text-gray-500">{t('info:subtitle')}</h3> */}
                <div className="text-gray-600">
                  <p>{t('info:para_4')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AnnaJesus />
    </Layout>
  );
}
