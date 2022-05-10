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
    (artist) => slugify(artist.name) === params.slug
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
      params: { slug: slugify(artist.name) },
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
    <div className="relative bg-greyCrescendo py-16 sm:py-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full bg-blueCrescendo opacity-25 rounded-r-3xl lg:right-72" />
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Artist*/}
            <figure>
              <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                <div className="rounded-lg shadow-none object-cover object-center overflow-hidden">
                  <Image
                    layout="responsive"
                    objectFit="cover"
                    objectPosition="center"
                    src={artist.image}
                    alt={artist.name}
                    width={1184}
                    height={1376}
                  />
                </div>
              </div>
              <figcaption className="mt-3 flex text-base text-gray-500">
                <CameraIcon
                  className="flex-none w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-2">
                  {artist.name}, {artist.instrument}
                </span>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h1 className="text-4xl text-coalCrescendo font-extrabold tracking-normal sm:text-5xl">
              {artist.name}
            </h1>
            <h2 className="mt-2 text-lg text-coalCrescendo">
              {artist.instrument}
            </h2>
            <div className="mt-6 text-mossCrescendo space-y-6">
              <p className="text-lg">{artist.para_1}</p>
              <p className="text-base leading-7">{artist.para_2}</p>
              <p className="text-base leading-7">{artist.para_3}</p>
              <p className="text-base leading-7">{artist.para_4}</p>
              <p className="text-base leading-7">{artist.para_5}</p>
              <p className="text-base leading-7">{artist.para_6}</p>
              <p className="text-base leading-7">{artist.para_7}</p>
              <p className="text-base leading-7">{artist.para_8}</p>
            </div>
          </div>

          <div className="mt-10">
            <div className="mt-10">
              <Link href="/artistas" passHref>
                <a className="text-base font-medium text-coalCrescendo hover:text-mossCrescendo transition duration-200 ease-in-out">
                  {' '}
                  Back to artists <span aria-hidden="true">&rarr;</span>{' '}
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

{
  /* <figure>
              <div className="relative pt-64 pb-10 rounded-2xl shadow-none overflow-hidden aspect-w-12 aspect-h-7 lg:aspect-none">
                <div className="absolute inset-0 h-full w-full object-cover">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    width={600}
                    height={400}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
              <figcaption className="mt-3 flex text-base text-gray-500">
                <CameraIcon
                  className="flex-none w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-2">
                  {artist.name}, {artist.instrument}
                </span>
              </figcaption>
            </figure> */
}
