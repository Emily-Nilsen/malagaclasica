import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout';
import events from '../../assets/events';
import slugify from 'slugify';
import { useRouter } from 'next/router';
import Theatres from '../../components/program/theatres';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';

export default function Programa(props) {
  const slugify = require('slugify');
  const { t } = useTranslation();
  const { locale, locales, asPath } = useRouter();

  return (
    <Layout
      title={t('common:programa_title')}
      description={t('common:programa_description')}
      keywords={t('common:programa_keywords')}
    >
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          duration: 0.4,
          type: 'fade',
          ease: 'easeIn',
        }}
        className="relative px-10 sm:px-10 bg-beigeRevolution"
      >
        <div className="absolute inset-0">
          <div className="object-cover w-full h-full">
            <div className="absolute right-0 w-2/3 h-full">
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
        <div className="relative px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
          <div className="max-w-2xl p-10 -m-10 bg-white w-fit">
            <h2 className="text-lg font-normal tracking-wide text-orangeRevolution">
              {t('program:date_title')}
              2023
            </h2>
            <h1 className="text-5xl font-extrabold tracking-tight text-blueRevolution sm:text-6xl lg:text-7xl">
              {t('common:title')}
            </h1>
            <p className="max-w-3xl mt-6 text-xl text-gray-500">
              {t('program:hero_text_1')}
              <span className="font-semibold">{t('program:hero_text_2')}</span>
              {t('program:hero_text_3')}
            </p>
          </div>
        </div>
      </motion.div>
      <div className="px-4 pt-16 pb-20 bg-beigeRevolution/10 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-orangeRevolution sm:text-5xl md:text-6xl">
              {t('program:title')}
            </h1>
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
                    className="p-6 transition duration-300 ease-in-out bg-white rounded-md cursor-pointer group hover:bg-[#30429c]"
                    key={i}
                  >
                    <p className="text-sm text-gray-500 group-hover:text-gray-100">
                      <time dateTime={event.datetime}>{event.date}</time>
                    </p>
                    <div className="block mt-2">
                      <p className="text-xl font-semibold text-blueRevolution group-hover:text-white">
                        {event.title}
                      </p>
                      {/* <p className="mt-3 text-base text-mossCrescendo">
                      {event.preview}
                    </p> */}
                    </div>
                    <div className="mt-3">
                      <a className="text-base font-semibold text-orangeRevolution group-hover:text-orangeRevolution">
                        <h2>{t('program:read_more')}</h2>
                      </a>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
      <Theatres />
    </Layout>
  );
}
