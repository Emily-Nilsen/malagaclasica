import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import artists from '../../assets/artists';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import { CameraIcon } from '@heroicons/react/solid';

export const getStaticProps = async ({ params }) => {
  const slugify = require('slugify');
  const artistslist = artists.filter(
    (artist) => slugify(artist.slug_name) === params.slug
  );
  return {
    props: {
      artist: artistslist[0],
    },
  };
};

export const getStaticPaths = async () => {
  const slugify = require('slugify');
  const paths = artists.map((artist) => {
    return {
      params: { slug: slugify(artist.slug_name) },
      locale: artist.locale,
    };
  });

  return { paths, fallback: false };
};

artists.map((artist) => ({}));

const Artist = ({ artist }) => {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <div className="relative py-16 bg-white sm:py-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 w-full opacity-100 bg-pink3_2024/40 right-1/2 rounded-r-3xl lg:right-72" />
          </div>
          <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Artist*/}
            <figure>
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  duration: 0.6,
                  type: 'fade',
                  ease: 'easeIn',
                }}
                className="overflow-hidden aspect-w-12 aspect-h-10 lg:aspect-none"
              >
                <div className="object-cover object-center overflow-hidden rounded-lg shadow-none">
                  <Image
                    layout="responsive"
                    objectFit="cover"
                    objectPosition="center"
                    src={artist.image || '/static/cervantes.webp'}
                    alt={artist.name || ''}
                    width={800}
                    height={666}
                    unoptimized={true}
                  />
                </div>
              </motion.div>
              <figcaption className="flex items-center mt-3 text-base text-gray-600">
                <CameraIcon
                  className="flex-none w-5 h-5 text-pinkText2024"
                  aria-hidden="true"
                />
                <span className="ml-2">
                  {artist.name}, {artist.instrument}
                </span>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h4 className="text-4xl font-bold tracking-normal text-blueText2024 sm:text-5xl">
              {artist.name}
            </h4>
            <h4 className="mt-2 text-lg italic font-bold capitalize text-pinkText2024">
              {artist.instrument}
            </h4>
            <div className="mt-6 space-y-6 text-gray-500">
              <p className="text-lg">{artist.para_1}</p>
              {artist.sentences.map((sentence, i) => (
                <p key={i} className="text-base leading-7">
                  {sentence}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <div className="mt-10">
              <Link href="/artistas" passHref>
                <a className="text-base font-medium transition duration-200 ease-in-out text-pinkText2024 hover:text-blueText2024">
                  {' '}
                  {t('common:back_artists')}{' '}
                  <span aria-hidden="true">&rarr;</span>{' '}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;
