import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout';
import events from '../../assets/events';
import slugify from 'slugify';
import { useRouter } from 'next/router';
import Theatres from '../../components/program/theatres';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';

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

export default function Programa(props) {
  const slugify = require('slugify');
  const { t } = useTranslation();
  const { locale, locales, asPath } = useRouter();
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
      title={t('common:programa_title')}
      description={t('common:programa_description')}
      keywords={t('common:programa_keywords')}
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
              className="block text-4xl italic font-extrabold tracking-normal text-blueGreyDark2024 sm:text-5xl lg:text-6xl"
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
      {/* 2023 hero image below */}
      {/* <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          duration: 0.4,
          type: 'fade',
          ease: 'easeIn',
        }}
        className="relative sm:px-10 bg-beigeRevolution"
      >
        <div className="absolute inset-0">
          <div className="object-cover w-full h-full">
            <div className="absolute right-0 w-full h-full sm:w-2/3">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1681299766/M%C3%A1laga%20Cl%C3%A1sica/violin_spirals_yngvdp.svg"
                alt="Málaga Clásica"
                unoptimized={true}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
              />
            </div>
          </div>
        </div>
        
        <div className="relative px-0 py-32 sm:mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
          <div className="w-full px-4 pt-3 pb-1 mt-0 bg-white sm:pt-4 sm:px-8 sm:w-fit sm:mt-0">
            <div className="text-center max-w-none sm:text-left">
              <h2 className="text-lg font-normal tracking-wide text-orangeRevolution">
                {t('program:date_title')}
                2024
              </h2>
              <h1 className="pt-3 text-5xl font-extrabold tracking-tight uppercase text-blueRevolution sm:text-6xl lg:text-7xl ">
                {t('common:title')}
              </h1>
            </div>
          </div>
          
        </div>
      </motion.div> */}
      <div className="px-4 pt-16 pb-20 bg-pink3_2024/40 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-pinkText2024/20 lg:max-w-7xl">
          <div>
            <h4 className="text-4xl font-extrabold tracking-tight text-pinkText2024 sm:text-5xl md:text-6xl">
              {t('program:title')}
            </h4>
            <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
              <p className="text-xl text-gray-600">{t('program:subtitle')}</p>
            </div>
          </div>
          <div className="grid gap-6 pt-10 mt-6 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-8">
            {events
              .filter((p) => p.locale === locale)
              .map((event, i) => (
                <Link
                  key={i}
                  href={`/programa/${slugify(event.title)}`}
                  passHref
                >
                  <div
                    className="p-6 transition duration-300 ease-in-out bg-white rounded-md cursor-pointer group hover:bg-blue2024"
                    key={i}
                  >
                    <p className="text-sm text-gray-500 group-hover:text-white">
                      <time dateTime={event.datetime}>{event.date}</time>
                    </p>
                    <div className="block mt-2">
                      <h4 className="text-xl font-bold text-blueGreyDark2024 group-hover:text-white">
                        {event.title}
                      </h4>
                      {/* <p className="mt-3 text-base text-mossCrescendo">
                      {event.preview}
                    </p> */}
                    </div>
                    <div className="mt-3">
                      <a className="text-base font-semibold text-pinkText2024 group-hover:text-pinkText2024">
                        <h4 className="italic">{t('program:read_more')}</h4>
                      </a>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
          {/* pdf */}
          {/* <a download href="/Revoluciones_2023.pdf">
            <article className="relative flex flex-col justify-end w-40 mt-6 overflow-hidden transition duration-300 ease-in-out bg-white sm:w-48 isolate rounded-2xl hover:contrast-125">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/Revoluciones_pdf_xlciim.webp"
                alt="Revoluciones 2023 - PDF"
                width={1862}
                height={2584}
                className="absolute inset-0 object-cover w-full h-full -z-10"
              />
              <div className="absolute bottom-0 w-full h-40 -z-10 bg-gradient-to-t from-blueRevolution" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-orangeRevolution/10" />

              <h3 className="absolute bottom-0 p-3 font-medium leading-6 text-white">
                <span className="absolute inset-0" />
                {t('common:download_pdf')}
              </h3>
            </article>
          </a> */}
        </div>
      </div>

      <Theatres />
    </Layout>
  );
}
