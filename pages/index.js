import Image from 'next/image';
import Layout from '../components/layout';
import Hero from '../components/home/hero';
import Features from '../components/home/features';
import Testimonials from '../components/home/testimonials';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation();
  return (
    <Layout>
      <div>
        {/* Temporary Coming Soon Page */}
        <div className="flex flex-col min-h-full pt-16 pb-12 bg-white">
          <main className="flex flex-col justify-center flex-grow w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex justify-center flex-shrink-0">
              <div href="/" className="inline-flex">
                <span className="sr-only">Workflow</span>
                <img
                  className="w-auto h-12"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </div>
            </div>
            <div className="py-16">
              <div className="text-center">
                <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase">
                  404 error
                </p>
                <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                  Page not found.
                </h1>
                <p className="mt-2 text-base text-gray-500">
                  Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="text-base font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Go back home<span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </main>
          <footer className="flex-shrink-0 w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <nav className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-sm font-medium text-gray-500 hover:text-gray-600"
              >
                Contact Support
              </a>
              <span
                className="inline-block border-l border-gray-300"
                aria-hidden="true"
              />
              <a
                href="#"
                className="text-sm font-medium text-gray-500 hover:text-gray-600"
              >
                Status
              </a>
              <span
                className="inline-block border-l border-gray-300"
                aria-hidden="true"
              />
              <a
                href="#"
                className="text-sm font-medium text-gray-500 hover:text-gray-600"
              >
                Twitter
              </a>
            </nav>
          </footer>
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
