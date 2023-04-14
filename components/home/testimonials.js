import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';

import { QuotesIcon } from '../../components/logos';
import { AforoLibreLogo } from '../../components/logos';
import { LaOpinionLogo } from '../../components/logos';
import { EuropressLogo } from '../../components/logos';

export default function Testimonials() {
  const { t } = useTranslation();
  const testimonials = [
    {
      quote: `${t('home:quote_1')}`,
      source: `${t('home:source_1')}`,
      icon: <AforoLibreLogo className="w-auto h-9 fill-orangeRevolution" />,
    },
    {
      quote: `${t('home:quote_2')}`,
      source: `${t('home:source_2')}`,
      icon: <LaOpinionLogo className="w-auto h-5 fill-orangeRevolution" />,
    },
    {
      quote: `${t('home:quote_3')}`,
      source: `${t('home:source_3')}`,
      icon: <EuropressLogo className="w-auto h-9 fill-orangeRevolution" />,
    },
  ];
  return (
    <div className="py-16 bg-beigeRevolution/20">
      <div className="container flex flex-col justify-between px-4 mx-auto lg:items-center lg:flex-row">
        <div className="mb-14 xl:mb-0">
          <h1 className="max-w-sm pb-2 pr-16 text-3xl font-bold tracking-tight sm:pb-4 sm:text-4xl xl:text-5xl text-blueRevolution xl:w-2/3 lg:pr-0">
            {t('home:testimonials_title')}
          </h1>
          <p className="pr-16 mt-4 text-base leading-normal text-gray-600 md:w-2/3 lg:w-3/4 lg:pr-0">
            {t('home:testimonials_text')}
          </p>
          <Link href="/info" passHref>
            <button className="items-start justify-center hidden w-full px-8 py-4 mt-12 text-base font-medium leading-none text-center text-white transition duration-200 ease-in-out rounded sm:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orangeRevolution md:flex sm:justify-start bg-orangeRevolution hover:bg-blueRevolution">
              {t('home:read_about')}
            </button>
          </Link>
        </div>
        <div
          role="list"
          aria-label="Testimonials"
          className="grid flex-wrap items-start justify-center gap-6 xl:w-1/2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: i * 0.3,
                ease: 'easeIn',
              }}
              key={i}
              role="listitem"
              className="px-4 pt-4 pb-6 bg-white rounded shadow-none xl:p-8"
            >
              <div>
                <QuotesIcon className="w-auto h-4 fill-orangeRevolution/70" />
              </div>
              <div className="flex items-start justify-between pt-0 pl-4">
                <div className="mr-6">
                  <p className="text-gray-700 xl:text-xl xl:leading-loose">
                    {testimonial.quote}
                  </p>
                  <p className="mt-4 text-base font-semibold leading-none text-gray-500">
                    {testimonial.source}
                  </p>
                </div>
                <div>{testimonial.icon}</div>
              </div>
            </motion.div>
          ))}
          <Link href="/info" passHref>
            <button className="flex items-start justify-center w-full px-8 py-4 mt-4 text-base font-medium leading-none text-center text-white transition duration-200 ease-in-out rounded md:hidden sm:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orangeRevolution sm:justify-start bg-orangeRevolution hover:bg-blueRevolution">
              {t('home:read_about')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
