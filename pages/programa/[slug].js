import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import events from '../../assets/events';
import Discount from '../../components/program/discount';
import PricingRegular from '../../components/program/pricing-regular';
import PricingLastConcert from '../../components/program/pricing-last-concert';
import { motion, AnimatePresence } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import { ExternalLinkIcon, TicketIcon } from '@heroicons/react/solid';

export const getStaticProps = async ({ params }) => {
  const slugify = require('slugify');
  const eventslist = events.filter(
    (event) => slugify(event.title) === params.slug
  );
  return {
    props: {
      event: eventslist[0],
    },
  };
};

export const getStaticPaths = async () => {
  const slugify = require('slugify');
  const paths = events.map((event) => {
    return {
      params: { slug: slugify(event.title) },
      locale: event.locale,
    };
  });

  return { paths, fallback: false };
};

events.map((event) => ({}));

const Concert = ({ event }) => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className="bg-greyCrescendo">
      <section aria-labelledby="details-heading" className="relative">
        {/* Need to use AnimatePresence on a slug */}
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={router.asPath}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.6,
              type: 'fade',
              ease: 'easeIn',
            }}
            className="overflow-hidden aspect-w-3 aspect-h-2 sm:aspect-w-5 2xl:aspect-none 2xl:absolute 2xl:w-1/2 2xl:h-full 2xl:pr-4 xl:pr-16"
          >
            <div className="object-cover object-center w-full h-full 2xl:h-full 2xl:w-full">
              <Image
                src={event.image}
                alt={event.title}
                unoptimized={true}
                layout="fill"
                objectFit="cover"
                objectPosition={event.image_position}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="max-w-2xl px-4 pt-16 pb-24 mx-auto sm:pb-32 sm:px-6 2xl:max-w-7xl 2xl:pt-32 2xl:px-8 2xl:grid 2xl:grid-cols-2 2xl:gap-x-8">
          <div className="2xl:col-start-2">
            <h2 id="details-heading" className="font-medium text-mossCrescendo">
              {event.date}
            </h2>
            <h1 className="mt-4 text-4xl font-extrabold tracking-normal text-coalCrescendo">
              {event.title}
            </h1>
            <p className="mt-4 text-coalCrescendo opacity-80">
              {event.location}
            </p>

            <dl className="grid grid-cols-1 mt-10 text-base gap-y-10 gap-x-8 sm:grid-cols-2">
              {event.details.map((detail) => (
                <div key={detail.composer}>
                  <dt className="font-semibold text-coalCrescendo">
                    {detail.composer}
                  </dt>
                  <dd className="mt-2 text-coalCrescendo opacity-90">
                    {detail.info}
                  </dd>
                  <dt className="mt-4 font-semibold text-coalCrescendo">
                    {detail.composer_2}
                  </dt>
                  <dd className="mt-2 text-coalCrescendo opacity-90">
                    {detail.info_2}
                  </dd>
                  <dt className="mt-4 font-semibold text-coalCrescendo">
                    {detail.composer_3}
                  </dt>
                  <dd className="mt-2 text-coalCrescendo opacity-90">
                    {detail.info_3}
                  </dd>
                  <dd className="mt-4 text-mossCrescendo">{detail.artist_1}</dd>
                  <dd className="mt-2 text-mossCrescendo">{detail.artist_2}</dd>
                  <dd className="mt-2 text-mossCrescendo">{detail.artist_3}</dd>
                  <dd className="mt-2 text-mossCrescendo">{detail.artist_4}</dd>
                  <dd className="mt-2 text-mossCrescendo">{detail.artist_5}</dd>
                  <dd className="mt-2 text-mossCrescendo">{detail.artist_6}</dd>
                  <dd className="mt-2 text-mossCrescendo">{detail.artist_7}</dd>
                  <dd className="mt-2 text-mossCrescendo">{detail.artist_8}</dd>
                  <dd className="mt-2 text-mossCrescendo">{detail.artist_9}</dd>
                  <dd className="mt-2 text-mossCrescendo">
                    {detail.artist_10}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="pb-10 mt-10 border-t border-gray-200">
              <p className="mt-10 text-coalCrescendo opacity-80">
                {event.preview}
              </p>
              <p className="mt-4 text-coalCrescendo opacity-80">
                {event.sent_01}
              </p>
              <p className="mt-4 text-coalCrescendo opacity-80">
                {event.sent_02}
              </p>
              <p className="mt-4 text-coalCrescendo opacity-80">
                {event.sent_03}
              </p>

              {event.date.includes('12') ? (
                <PricingLastConcert />
              ) : (
                <PricingRegular />
              )}
              <Discount />
              <div className="flex mt-10">
                <a
                  href="https://teatrocervantes.com/es/genero/musica/x-malaga-clasica-crescendo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white transition duration-200 ease-in-out border border-transparent rounded-md shadow-none hover:text-coalCrescendo bg-mossCrescendo hover:bg-blueCrescendo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueCrescendo"
                  >
                    <TicketIcon
                      className="w-5 h-5 mr-2 -ml-1"
                      aria-hidden="true"
                    />
                    {t('common:buy_tickets')}
                  </button>
                </a>
                <Link href="/programa" passHref>
                  <button className="inline-flex justify-center px-4 py-2 ml-6 text-sm font-medium transition duration-200 ease-in-out bg-white border border-transparent rounded-md shadow-none text-coalCrescendo hover:bg-blueCrescendo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueCrescendo">
                    {t('common:program')}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Concert;
