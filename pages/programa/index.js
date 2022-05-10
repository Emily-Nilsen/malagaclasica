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
    <Layout>
      <div className="relative bg-white">
        <div className="absolute inset-0">
          <div className="w-full h-full object-cover">
            <Image
              src="/static/crescendo-middle.webp"
              alt="Málaga Clásica"
              width={1500}
              height={1000}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div
            className="absolute inset-0 bg-blueCrescendo mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h2 className="text-lg text-greyCrescendo font-normal tracking-wide">
            {t('program:date_title')}
            2022
          </h2>
          <h1 className="text-5xl font-extrabold text-greyCrescendo sm:text-6xl lg:text-7xl">
            crescendo
          </h1>
          <p className="mt-6 text-xl text-greyCrescendo max-w-3xl">
            {t('program:hero_text_1')}
            <span className="font-semibold">{t('program:hero_text_2')}</span>
            {t('program:hero_text_3')}
          </p>
        </div>
      </div>
      <div className="bg-greyCrescendo pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h1 className="text-4xl font-extrabold text-coalCrescendo sm:text-5xl md:text-6xl">
              {t('program:title')}
            </h1>
            <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
              <p className="text-xl text-mossCrescendo">
                {t('program:subtitle')}
              </p>
            </div>
          </div>
          <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {events
              .filter((p) => p.locale === locale)
              .map((event, i) => (
                <div key={i}>
                  <p className="text-sm text-mossCrescendo">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </p>
                  <a href="#" className="mt-2 block">
                    <p className="text-xl font-semibold text-coalCrescendo">
                      {event.title}
                    </p>
                    <p className="mt-3 text-base text-mossCrescendo">
                      {event.preview}
                    </p>
                  </a>
                  <div className="mt-3">
                    <Link href={`/programa/${slugify(event.title)}`} passHref>
                      <a className="text-base font-semibold text-greenCrescendo hover:text-coalCrescendo transition duration-200 ease-in-out">
                        <h2>{t('program:read_more')}</h2>
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Theatres />
    </Layout>
  );
}
