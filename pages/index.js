import Image from 'next/image';
import Layout from '../components/layout';
import Hero from '../components/home/hero';
import Features from '../components/home/features';
import Testimonials from '../components/home/testimonials';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation();
  return (
    <Layout
      title={t('common:index_title')}
      description={t('common:index_description')}
      keywords={t('common:index_keywords')}
    >
      <div>
        {/* Temporary Coming Soon Page */}
        <div className="flex flex-col min-h-full pt-16 pb-12 bg-white">
          <main className="flex flex-col justify-center flex-grow w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="px-4 pt-4 pb-8 mx-auto max-w-7xl sm:py-10 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="grid max-w-xs grid-cols-3 gap-0 mx-auto lg:max-w-lg sm:max-w-sm">
                  <div className="flex col-span-1 justify-self-end">
                    <div>
                      <Image
                        width={161}
                        height={53}
                        src="/static/crescendo-grey.svg"
                        alt="Logo Málaga Clásica"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center col-span-2">
                    <div>
                      <p className="text-2xl font-normal tracking-wider uppercase sm:text-3xl lg:text-4xl text-coalCrescendo">
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
                  {t('home:subtitle')}
                </h3>
              </div>
            </div>
            <div className="py-16">
              <div className="text-center">
                <p className="text-sm font-semibold tracking-wide uppercase text-greenCrescendo">
                  6__12/6/2022
                </p>
                <h1 className="mt-2 text-4xl font-extrabold tracking-normal text-coalCrescendo sm:text-5xl">
                  {t('home:coming_soon')}
                </h1>
                {/* <p className="mt-2 text-base text-gray-500">
                  Sorry, we couldn’t find the page you’re looking for.
                </p> */}
              </div>
            </div>
          </main>
        </div>

        {/* <div className="bg-greyCrescendo">
          <div className="px-4 pt-4 pb-8 mx-auto max-w-7xl sm:py-10 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="grid max-w-xs grid-cols-3 gap-0 mx-auto lg:max-w-lg sm:max-w-sm">
                <div className="flex col-span-1 justify-self-end">
                  <div>
                    <Image
                      width={161}
                      height={53}
                      src="/static/crescendo-grey.svg"
                      alt="Logo Málaga Clásica"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center col-span-2">
                  <div>
                    <p className="text-2xl font-normal tracking-wider uppercase sm:text-3xl lg:text-4xl text-coalCrescendo">
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
                {t('home:subtitle')}
              </h3>
            </div>
          </div>
        </div> */}
        {/* <Hero /> */}
        {/* <Features /> */}
        {/* <Testimonials /> */}
      </div>
    </Layout>
  );
}
