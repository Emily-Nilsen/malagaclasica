import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout';
import { motion, AnimatePresence } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import artists from '../../assets/artists';
import slugify from 'slugify';
import { useRouter } from 'next/router';

export default function Artistas(props) {
  const slugify = require('slugify');
  const { t } = useTranslation();
  const { locale, locales, asPath } = useRouter();

  return (
    <Layout
      title={t('common:artistas_title')}
      description={t('common:artistas_description')}
      keywords={t('common:artistas_keywords')}
    >
      <motion.div
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
      </motion.div>

      <div className="bg-white">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-6 sm:space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h1 className="max-w-sm text-4xl font-extrabold leading-none tracking-tight md:text-6xl text-blueRevolution sm:text-5xl sm:max-w-lg">
                {t('artists:title')}
              </h1>
              <p className="max-w-sm text-xl text-gray-600 sm:max-w-md">
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
                        className="p-6 space-y-4 transition duration-300 ease-in-out delay-75 rounded-lg cursor-pointer group hover:bg-beigeRevolution/10"
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
                          <div className="space-y-1 text-lg font-medium leading-6">
                            <h3 className="text-orangeRevolution">
                              {artist.name}
                            </h3>
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
