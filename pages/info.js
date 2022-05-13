import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import AnnaJesus from '../components/info/anna-jesus';
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
    transition: { type: 'spring', stiffness: 30, duration: 1.3, delay: 1.6 },
  },
};

export default function Info() {
  const { t } = useTranslation();
  const crescendo = ['c', 'r', 'e', 's', 'c', 'e', 'n', 'd', 'o'];

  return (
    <Layout>
      <div className="relative bg-white">
        <div className="absolute inset-0">
          <div className="object-cover w-full h-full">
            <Image
              src="/static/crescendo-header.webp"
              alt="Málaga Clásica"
              width={1500}
              height={1000}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              priority
              blurDataURL="/static/data-crescendo.webp"
              placeholder="blur"
            />
          </div>
          <div
            className="absolute inset-0 bg-blueCrescendo mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
          <div>
            <motion.h1
              variants={container}
              initial="hidden"
              animate="show"
              className="block text-5xl font-extrabold tracking-normal text-left text-greyCrescendo sm:text-6xl lg:text-7xl"
            >
              {crescendo.map((letter, i) => (
                <motion.span key={i} variants={item}>
                  {letter}
                </motion.span>
              ))}
            </motion.h1>

            <motion.h2
              variants={itemBottom}
              initial="hidden"
              animate="show"
              className="max-w-3xl mt-6 text-2xl sm:text-3xl lg:text-4xl text-greyCrescendo"
            >
              6__12/6/2022
            </motion.h2>
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-greyCrescendo">
        <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="absolute top-0 bottom-0 hidden w-screen opacity-25 lg:block bg-blueCrescendo left-3/4" />
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <h2 className="text-base font-normal tracking-wide text-greenCrescendo">
                Málaga Clásica
              </h2>
              <h1 className="mt-2 text-4xl font-extrabold leading-8 md:text-6xl text-coalCrescendo sm:text-5xl">
                {t('info:title')}
              </h1>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <div className="relative mx-auto text-base max-w-prose lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <div className="object-cover object-center overflow-hidden rounded-lg shadow-none">
                      <Image
                        src="/static/crescendo-img-19-blue.webp"
                        alt="Málaga Clásica"
                        width={2228}
                        height={1300}
                        layout="responsive"
                        objectFit="cover"
                        objectPosition="bottom"
                        blurDataURL="/static/data-crescendo.webp"
                        placeholder="blur"
                      />
                    </div>
                    <div className="absolute inset-0 overflow-hidden rounded-lg bg-blueCrescendo mix-blend-multiply" />
                  </div>
                  {/* <figcaption className="flex mt-3 text-sm text-gray-500">
                    <CameraIcon
                      className="flex-none w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2 opacity-75 text-coalCrescendo">
                      Photograph by Marcus O’Leary
                    </span>
                  </figcaption> */}
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="mx-auto text-base max-w-prose lg:max-w-none">
                <p className="text-lg opacity-75 text-coalCrescendo">
                  {t('info:para_1')}
                </p>
              </div>
              <div className="mx-auto mt-5 prose prose-cyan lg:max-w-none lg:row-start-1 lg:col-start-1">
                <div className="opacity-75 text-coalCrescendo">
                  <p>{t('info:para_2')}</p>
                  <p>{t('info:para_3')}</p>
                </div>
                <h3 className="text-coalCrescendo">{t('info:subtitle')}</h3>
                <div className="opacity-75 text-coalCrescendo">
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
