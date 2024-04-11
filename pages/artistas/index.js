import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout';
import { motion, AnimatePresence } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import artists from '../../assets/artists';
import slugify from 'slugify';
import { useRouter } from 'next/router';

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

export default function Artistas(props) {
  const slugify = require('slugify');
  const { t } = useTranslation();
  const { locale, locales, asPath } = useRouter();
  const artistasDelFestival = [
    'A',
    'r',
    't',
    'i',
    's',
    't',
    'a',
    's',
    ' ',
    'd',
    'e',
    'l',
    ' ',
    'F',
    'e',
    's',
    't',
    'i',
    'v',
    'a',
    'l',
  ];
  const festivalArtists = [
    'F',
    'e',
    's',
    't',
    'i',
    'v',
    'a',
    'l',
    ' ',
    'A',
    'r',
    't',
    'i',
    's',
    't',
    's',
  ];

  return (
    <Layout
      title={t('common:artistas_title')}
      description={t('common:artistas_description')}
      keywords={t('common:artistas_keywords')}
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
                ? festivalArtists.map((letter, i) => (
                    <motion.span key={i} variants={item}>
                      {letter}
                    </motion.span>
                  ))
                : artistasDelFestival.map((letter, i) => (
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
      {/* 2023 hero section */}
      {/* <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          duration: 0.4,
          type: 'fade',
          ease: 'easeIn',
        }}
        className="relative bg-white sm:px-12"
      >
        <div className="absolute inset-0 bg-beigeRevolution">
          <div className="object-cover h-full">
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
        <div className="relative px-0 py-24 mx-auto sm:max-w-7xl max-w-none sm:py-32 sm:px-6 lg:px-8">
          <div className="pt-2 bg-white sm:pt-10 sm:-m-10 sm:p-10 sm:w-fit">
            <h1 className="text-4xl font-extrabold tracking-tight text-center text-orangeRevolution sm:text-6xl lg:text-7xl sm:text-left">
              {t('artists:hero_title')}{' '}
              <span className="text-blueRevolution sm:hidden">2023</span>
            </h1>
            <p className="hidden max-w-sm mt-6 text-xl text-gray-600 sm:block">
              {t('artists:hero_subtitle')}
            </p>
          </div>
        </div>
      </motion.div> */}

      <div className="bg-white">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-6 sm:space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h4 className="max-w-sm text-4xl font-bold leading-none tracking-normal md:text-6xl text-blueText2024 sm:text-5xl sm:max-w-lg">
                {t('artists:title')}
              </h4>
              <p className="max-w-sm text-xl text-blueGreyDark2024 sm:max-w-md">
                {t('artists:subtitle')}
              </p>
            </div>
            <ul
              role="list"
              className="pb-10 space-y-0 sm:pb-12 md:pb-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8 group"
            >
              {artists
                .filter((p) => p.locale === locale)
                .map((artist, i) => (
                  <li key={i}>
                    <Link
                      href={`/artistas/${slugify(artist.slug_name)}`}
                      passHref
                    >
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 50,
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: i * 0.15,
                          ease: 'easeInOut',
                        }}
                        className="p-6 space-y-4 transition duration-300 ease-in-out delay-75 rounded-lg cursor-pointer group hover:bg-pink3_2024/40"
                      >
                        <div className="aspect-w-3 aspect-h-2">
                          <div className="object-cover overflow-hidden rounded-lg shadow-none">
                            <Image
                              layout="fill"
                              objectFit="cover"
                              objectPosition={artist.image_position}
                              src={artist.image}
                              alt={artist.name}
                              unoptimized={true}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="space-y-1 text-lg leading-6">
                            <h4 className="italic font-bold text-pinkText2024">
                              {artist.name}
                            </h4>
                            <p className="font-normal text-gray-600 capitalize">
                              {artist.instrument}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
