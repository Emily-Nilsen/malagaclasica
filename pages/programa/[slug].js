import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import events from '../../assets/events';
import { motion } from 'framer-motion';
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

  const details = [
    {
      name: `Clara Wieck Schumann`,
      info: `(1819-1896), Tres romances, Op.22, para violín y piano`,
      artist01: `ALISSA MARGULIS violín`,
      artist02: `JULIEN QUENTIN piano`,
    },
    {
      name: `Johannes Brahms`,
      info: `(1833-1897), Sonata para violín y piano No.1 en sol mayor, Op.78`,
      artist01: `ANNA MARGRETHE NILSEN violín`,
      artist02: `ÓSCAR MARTÍN piano`,
    },
    {
      name: `Joseph Joachim`,
      info: `(1831-1907), Romance, Op.2, No.1, para violín y piano`,
      artist01: `ALISSA MARGULIS violín`,
      artist02: `JULIEN QUENTIN piano`,
    },
    {
      name: 'Ludwig van Beethoven',
      info: `(1770-1827), Cuarteto de cuerda No.10 ‘Cuarteto de las arpas’, Op.74`,
      artist01: `JESÚS REINA violín`,
      artist02: `RUMEN CVETKOV viola`,
      artist03: `ANNA MARGRETHE NILSEN violín`,
      artist04: `GABRIEL UREÑA violonchelo`,
    },
  ];

  return (
    <div className="bg-greyCrescendo">
      <section aria-labelledby="details-heading" className="relative">
        <div className="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-16">
          <div className="h-full w-full object-center object-cover lg:h-full lg:w-full">
            <Image
              src={event.image}
              alt={event.title}
              width={600}
              height={500}
              layout="fill"
              objectFit="cover"
              objectPosition={event.image_position}
            />
          </div>
        </div>

        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pb-32 sm:px-6 lg:max-w-7xl lg:pt-32 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="lg:col-start-2">
            <h2 id="details-heading" className="font-medium text-mossCrescendo">
              {event.date}
            </h2>
            <h1 className="mt-4 text-4xl font-extrabold text-coalCrescendo tracking-normal">
              {event.title}
            </h1>
            <p className="mt-4 text-coalCrescendo opacity-80">
              {event.location}
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-base sm:grid-cols-2">
              {event.details.map((detail) => (
                <div key={detail.composer}>
                  <dt className="font-semibold text-coalCrescendo">
                    {detail.composer}
                  </dt>
                  <dd className="mt-2 text-coalCrescendo opacity-90">
                    {detail.info}
                  </dd>
                  <dt className="font-semibold text-coalCrescendo mt-4">
                    {detail.composer_2}
                  </dt>
                  <dd className="mt-2 text-coalCrescendo opacity-90">
                    {detail.info_2}
                  </dd>
                  <dt className="font-semibold text-coalCrescendo mt-4">
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
            <div className="border-t border-gray-200 pb-10 mt-10">
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
              <h3 className="mt-10 text-coalCrescendo font-bold tracking-normal uppercase text-lg">
                <span className="text-mossCrescendo font-medium tracking-wide">
                  {t('common:single_ticket')}{' '}
                </span>
                {t('common:ticket_cost')}{' '}
                <span className="text-mossCrescendo font-medium lowercase tracking-normal">
                  {t('common:no_discounts')}
                </span>
              </h3>
              <div className="mt-10 flex">
                <a
                  href="https://teatrocervantes.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-none text-sm font-medium rounded-md text-white hover:text-coalCrescendo bg-mossCrescendo hover:bg-blueCrescendo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueCrescendo transition duration-200 ease-in-out"
                  >
                    <TicketIcon
                      className="-ml-1 mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    {t('common:buy_tickets')}
                  </button>
                </a>
                <Link href="/programa" passHref>
                  <button className="ml-6 inline-flex justify-center py-2 px-4 border border-transparent shadow-none text-sm font-medium rounded-md text-coalCrescendo bg-white hover:bg-blueCrescendo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueCrescendo transition duration-200 ease-in-out">
                    {t('common:go_back')}
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
