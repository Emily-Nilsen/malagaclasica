import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';

export default function Testimonials() {
  const { t } = useTranslation();
  const testimonials = [
    {
      quote: `${t('home:quote_1')}`,
      source: `${t('home:source_1')}`,
      image: `/static/aforolibre.svg`,
      alt: `Aforo Libre logo`,
      image_width: `60`,
      image_height: `60`,
    },
    {
      quote: `${t('home:quote_2')}`,
      source: `${t('home:source_2')}`,
      image: `/static/opinion.svg`,
      alt: `La Opinión de Málaga logo`,
      image_width: `90`,
      image_height: `45`,
    },
    {
      quote: `${t('home:quote_3')}`,
      source: `${t('home:source_3')}`,
      image: `/static/europress.svg`,
      alt: `Europress logo`,
      image_width: `60`,
      image_height: `60`,
    },
  ];
  return (
    <div className="py-16 bg-greyCrescendo">
      <div className="container flex flex-col justify-between px-4 mx-auto lg:items-center lg:flex-row">
        <div className="mb-14 xl:mb-0">
          <h1 className="max-w-sm pb-2 pr-16 text-3xl font-bold sm:pb-4 sm:text-4xl xl:text-5xl text-coalCrescendo xl:w-2/3 lg:pr-0 ">
            {t('home:testimonials_title')}
          </h1>
          <p className="pr-16 mt-4 text-base leading-normal text-mossCrescendo md:w-2/3 lg:w-3/4 lg:pr-0">
            {t('home:testimonials_text')}
          </p>
          <Link href="/info" passHref>
            <button className="items-start justify-center hidden w-full px-8 py-4 mt-12 text-base font-medium leading-none text-center text-white transition duration-200 ease-in-out rounded sm:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueCrescendo md:flex sm:justify-start bg-mossCrescendo hover:bg-blueCrescendo hover:text-coalCrescendo">
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
                <Image
                  alt="quote"
                  src="/static/quote.svg"
                  height={20}
                  width={20}
                  aria-hidden="true"
                />
              </div>
              <div className="flex items-start justify-between pt-0 pl-4">
                <div className="mr-6">
                  <p className="xl:text-xl xl:leading-loose text-coalCrescendo">
                    {testimonial.quote}
                  </p>
                  <p className="mt-4 text-base font-semibold leading-none text-mossCrescendo">
                    {testimonial.source}
                  </p>
                </div>
                <div>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.alt}
                    width={testimonial.image_width}
                    height={testimonial.image_height}
                    role="img"
                  />
                </div>
              </div>
            </motion.div>
          ))}
          <Link href="/info" passHref>
            <button className="flex items-start justify-center w-full px-8 py-4 mt-4 text-base font-medium leading-none text-center text-white transition duration-200 ease-in-out rounded md:hidden sm:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueCrescendo sm:justify-start bg-mossCrescendo hover:bg-blueCrescendo hover:text-coalCrescendo">
              {t('home:read_about')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
