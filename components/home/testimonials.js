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
      <div className="container mx-auto px-4 flex flex-col lg:items-center justify-between lg:flex-row">
        <div className="mb-14 xl:mb-0">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-semibold leading-10 text-coalCrescendo xl:w-2/3 pr-16 lg:pr-0 max-w-sm">
            {t('home:testimonials_title')}
          </h1>
          <p className="mt-4 text-base leading-normal text-mossCrescendo md:w-2/3 lg:w-3/4 pr-16 lg:pr-0">
            {t('home:testimonials_text')}
          </p>
          <Link href="/info" passHref>
            <button className="hidden w-full sm:w-auto mt-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueCrescendo md:flex items-start justify-center sm:justify-start px-8 py-4 bg-mossCrescendo hover:bg-blueCrescendo rounded text-base font-medium leading-none text-center text-white hover:text-coalCrescendo transition duration-200 ease-in-out">
              {t('home:read_about')}
            </button>
          </Link>
        </div>
        <div
          role="list"
          aria-label="Testimonials"
          className="xl:w-1/2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 flex-wrap justify-center items-start"
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              role="listitem"
              className="bg-white shadow-none rounded px-4 pt-4 pb-6 xl:p-8"
            >
              <div>
                <Image
                  alt="quote"
                  src="/static/quote.svg"
                  height={17}
                  width={17}
                  aria-hidden="true"
                />
              </div>
              <div className="pl-4 pt-4 flex items-start justify-between">
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
            </div>
          ))}
          <Link href="/info" passHref>
            <button className="md:hidden w-full sm:w-auto mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueCrescendo flex items-start justify-center sm:justify-start px-8 py-4 bg-mossCrescendo hover:bg-blueCrescendo rounded text-base font-medium leading-none text-center text-white hover:text-coalCrescendo transition duration-200 ease-in-out">
              {t('home:read_about')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
