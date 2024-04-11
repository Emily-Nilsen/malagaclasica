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
    <Layout
      title={t('common:info_title')}
      description={t('common:info_description')}
      keywords={t('common:info_keywords')}
    >
      <div className="relative px-10 py-0 pb-0 overflow-hidden sm:px-12 bg-blue2024 sm:py-0">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              type: 'fade',
              ease: 'easeIn',
            }}
            className="object-cover w-full h-full overflow-hidden"
          >
            <div className="absolute right-0 w-full h-full -mt-10 sm:-mt-0">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/Resonancias_del_espiritu_2024_desktop_bxxhso.webp"
                alt="Málaga Clásica"
                unoptimized={true}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </motion.div>
        </div>
        <div className="relative px-0 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
          <div className="px-3 -m-10 text-center pt-28 pb-60 -mb-80 bg-t sm:px-9 sm:pt-48 sm:-mb-28 sm:pb-10 sm:w-fit sm:text-left">
            <motion.h4
              variants={container}
              initial="hidden"
              animate="show"
              className="block text-4xl italic font-bold tracking-normal text-blueGreyDark2024 sm:text-5xl lg:text-6xl"
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
              className="max-w-3xl text-lg sm:mt-3 sm:text-2xl text-blueGrey2024"
            >
              27/05__01/06{' '}
              <span className="text-blueGreyDark2024">&nbsp;2024</span>
            </motion.h3>
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-pink3_2024/50">
        <div className="relative px-4 pt-16 pb-0 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="absolute top-0 bottom-0 hidden w-screen opacity-25 lg:block bg-t left-3/4" />
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <h4 className="text-base italic font-bold tracking-normal text-pinkText2024">
                Málaga Clásica
              </h4>
              <h4 className="mt-2 text-4xl font-bold leading-none tracking-normal text-blueText2024 md:text-6xl sm:text-5xl">
                {t('info:title')}
              </h4>
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
