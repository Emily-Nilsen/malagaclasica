import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout';
import Theatres from '../../components/program/theatres';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';

export default function Programa() {
  const { t } = useTranslation();

  const posts = [
    {
      title: `${t('program:concert06_title')}`,
      href: '#',
      description: `${t('program:concert06_preview')}`,
      date: `${t('program:concert06_date')}${new Date().getFullYear()}`,
      datetime: '2020-03-16',
    },
    {
      title: `${t('program:concert07_title')}`,
      href: '#',
      description: `${t('program:concert07_preview')}`,
      date: `${t('program:concert07_date')}${new Date().getFullYear()}`,
      datetime: '2020-03-10',
    },
    {
      title: `${t('program:concert08_title')}`,
      href: '#',
      description: `${t('program:concert08_preview')}`,
      date: `${t('program:concert08_date')}${new Date().getFullYear()}`,
      datetime: '2020-02-12',
    },
    {
      title: `${t('program:concert09_title')}`,
      href: '#',
      description: `${t('program:concert09_preview')}`,
      date: `${t('program:concert09_date')}${new Date().getFullYear()}`,
      datetime: '2020-01-29',
    },
    {
      title: `${t('program:concert10_title')}`,
      href: '#',
      description: `${t('program:concert10_preview')}`,
      date: `${t('program:concert10_date')}${new Date().getFullYear()}`,
      datetime: '2020-01-29',
    },
    {
      title: `${t('program:concert11_title')}`,
      href: '#',
      description: `${t('program:concert11_preview')}`,
      date: `${t('program:concert11_date')}${new Date().getFullYear()}`,
      datetime: '2020-01-29',
    },
    {
      title: `${t('program:concert12_title')}`,
      href: '#',
      description: `${t('program:concert12_preview')}`,
      date: `${t('program:concert12_date')}${new Date().getFullYear()}`,
      datetime: '2020-01-29',
    },
  ];

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
          <h2 className="text-base text-greyCrescendo font-normal tracking-wide">
            {t('program:date_title')}
            {new Date().getFullYear()}
          </h2>
          <h1 className="text-4xl font-extrabold text-greyCrescendo sm:text-5xl lg:text-6xl">
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
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-50 lg:max-w-7xl">
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
            {posts.map((post) => (
              <div key={post.title}>
                <p className="text-sm text-mossCrescendo">
                  <time dateTime={post.datetime}>{post.date}</time>
                </p>
                <a href="#" className="mt-2 block">
                  <p className="text-xl font-semibold text-coalCrescendo">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base text-mossCrescendo">
                    {post.description}
                  </p>
                </a>
                <div className="mt-3">
                  <a
                    href={post.href}
                    className="text-base font-semibold text-greenCrescendo hover:text-coalCrescendo transition duration-200 ease-in-out"
                  >
                    <h2>{t('program:read_more')}</h2>
                  </a>
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
