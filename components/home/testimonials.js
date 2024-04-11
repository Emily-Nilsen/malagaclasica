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
      icon: <AforoLibreLogo className="w-auto h-9 fill-pink2024" />,
    },
    {
      quote: `${t('home:quote_2')}`,
      source: `${t('home:source_2')}`,
      icon: <LaOpinionLogo className="w-auto h-5 fill-pink2024" />,
    },
    {
      quote: `${t('home:quote_3')}`,
      source: `${t('home:source_3')}`,
      icon: <EuropressLogo className="w-auto h-9 fill-pink2024" />,
    },
  ];
  return (
    <div className="py-16 bg-blue2024/50">
      <div className="container flex flex-col justify-between px-4 mx-auto lg:items-center lg:flex-row">
        <div className="mb-14 xl:mb-0">
          <h4 className="max-w-sm pb-2 pr-16 text-3xl font-bold tracking-normal text-blueGreyDark2024 sm:pb-4 sm:text-4xl xl:text-5xl xl:w-2/3 lg:pr-0">
            {t('home:testimonials_title')}
          </h4>
          <p className="pr-16 mt-4 text-base leading-normal text-gray-600 md:w-2/3 lg:w-3/4 lg:pr-0">
            {t('home:testimonials_text')}
          </p>
          <Link href="/info" passHref>
            <button className="items-start justify-center hidden w-full px-8 py-4 mt-12 text-base font-medium leading-none text-center text-white transition duration-200 ease-in-out rounded sm:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink2024 md:flex sm:justify-start bg-pink2024 hover:bg-pink2_2024">
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
                <QuotesIcon className="w-auto h-4 fill-pink2_2024" />
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
            <button className="flex items-start justify-center w-full px-8 py-4 mt-4 text-base font-medium leading-none text-center text-white transition duration-200 ease-in-out rounded md:hidden sm:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink2024 sm:justify-start bg-pink2024 hover:bg-pink2_2024">
              {t('home:read_about')}
            </button>
          </Link>
          {/* pdf */}
          <a download href="/Resonancias_del_espiritu2024.pdf">
            <article className="relative flex flex-col justify-end w-40 mt-6 overflow-hidden transition duration-300 ease-in-out bg-white sm:w-48 isolate rounded-2xl hover:contrast-125 sm:mt-0">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/ResonanciasDelEspiritu_djhaju.webp"
                alt="Resonancias del espíritu - PDF"
                width={1862}
                height={2584}
                className="absolute inset-0 object-cover w-full h-full -z-10"
              />
              <div className="absolute bottom-0 w-full h-40 -z-10 bg-gradient-to-t from-pink2024" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-pink2024/30" />

              <h3 className="absolute bottom-0 p-3 font-medium leading-6 text-white">
                <span className="absolute inset-0" />
                {t('common:download_pdf')}
              </h3>
            </article>
          </a>
        </div>
      </div>
    </div>
  );
}
