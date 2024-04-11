import Image from 'next/image';
import Layout from '../components/layout';
import Hero from '../components/home/hero';
import Features from '../components/home/features';
import Testimonials from '../components/home/testimonials';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';

import { MalagaclasicaLogo } from '../components/logos';

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Layout
        title={t('common:index_title')}
        description={t('common:index_description')}
        keywords={t('common:index_keywords')}
      >
        <div>
          {/* Temporary Coming Soon Page */}
          {/* <div className="flex flex-col min-h-full pt-16 pb-12 bg-white">
            <main className="flex flex-col justify-center flex-grow w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="px-4 pt-4 pb-8 mx-auto max-w-7xl sm:py-10 sm:px-6 lg:px-8">
                <div className="text-center">
                  <div className="grid max-w-xs grid-cols-3 gap-0 pb-2 mx-auto lg:max-w-lg sm:max-w-sm">
                    <div className="flex col-span-1 justify-self-center">
                      <MalagaclasicaLogo className="w-auto h-10 fill-orangeRevolution" />
                    </div>
                    <div className="flex items-center justify-center col-span-2">
                      <div>
                        <p className="text-2xl font-normal tracking-wider text-gray-700 uppercase sm:text-3xl lg:text-4xl">
                          Málaga Clásica
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mx-auto w-fit border-y border-coalCrescendo">
                    <p className="px-2 py-1 text-xl font-light text-coalCrescendo sm:text-2xl lg:text-3xl">
                      {t('home:title')}
                    </p>
                  </div>
                  <h3 className="max-w-xl mx-auto mt-5 text-2xl font-bold tracking-wider uppercase sm:text-3xl lg:text-4xl text-mossCrescendo">
                    2024
                  </h3>
                </div>
              </div>
              <div className="py-16">
                <div className="text-center">
                  <p className="text-sm font-semibold tracking-wide uppercase text-greenCrescendo"></p>
                  <h1 className="mt-2 text-4xl font-extrabold tracking-normal text-coalCrescendo sm:text-5xl">
                    {t('home:coming_soon')}
                  </h1>
                  <p className="max-w-sm mx-auto my-6 text-xl text-coalCrescendo">
                    {t('home:dates_coming')}
                  </p>
                </div>
              </div>
            </main>
          </div> */}

          {/* From 2024 */}
          <div className="relative z-0 bg-transparent">
            <div className="absolute inset-0 z-0 -mt-52 sm:-mt-64">
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  duration: 0.8,
                  type: 'fade',
                  ease: 'easeIn',
                }}
                className="object-cover w-full h-full bg-blue2024"
              >
                <div className="sm:hidden">
                  <Image
                    unoptimized={true}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/Resonancias_del_espiritu_2024_desktop_bxxhso.webp"
                    alt="Resonancias de la espiritu"
                    className="bg-blue2024"
                  />
                </div>

                <div className="hidden sm:block">
                  <Image
                    unoptimized={true}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/Resonancias_del_espiritu_2024_desktop_bxxhso.webp"
                    alt="Resonancias de la espiritu"
                    className=""
                  />
                </div>
              </motion.div>
            </div>
            <div className="relative z-10 bg-transparent">
              <div className="px-4 pt-4 pb-8 mx-auto max-w-7xl sm:py-10 sm:px-6 lg:px-8">
                <div className="text-center">
                  <div className="grid max-w-xs grid-cols-3 gap-0 pb-2 mx-auto lg:max-w-lg sm:max-w-sm">
                    <div className="flex col-span-1 justify-self-end">
                      <MalagaclasicaLogo className="w-auto h-10 fill-gray-900" />
                    </div>
                    <div className="flex items-center justify-center col-span-2">
                      <div>
                        <p className="text-2xl font-normal tracking-wider text-gray-900 uppercase sm:text-3xl lg:text-4xl">
                          Málaga Clásica
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mx-auto border-gray-400 w-fit border-y">
                    <p className="px-2 py-1 text-xl font-light text-gray-600 sm:text-2xl lg:text-3xl">
                      {t('home:title')}
                    </p>
                  </div>
                  <h3 className="max-w-xl mx-auto mt-5 text-xl font-bold tracking-wide text-gray-900 uppercase sm:text-2xl lg:text-3xl">
                    {t('home:subtitle')}
                  </h3>
                </div>
              </div>
            </div>
            <Hero />
          </div>
          <Features />
          <Testimonials />
        </div>
      </Layout>
    </>
  );
}
