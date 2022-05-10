import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import artists from '../../assets/artists';
import slugify from 'slugify';
import { useRouter } from 'next/router';

export default function Artistas(props) {
  const slugify = require('slugify');
  const { t } = useTranslation();
  const { locale, locales, asPath } = useRouter();

  return (
    <Layout>
      <div className="relative bg-white">
        <div className="absolute inset-0">
          <div className="w-full h-full object-cover">
            <Image
              src="/static/crescendo-footer.webp"
              alt="Málaga Clásica"
              width={1500}
              height={1000}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div
            className="absolute inset-0 bg-blueCrescendo mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-greyCrescendo sm:text-5xl lg:text-6xl">
            Artists
          </h1>
          <p className="mt-6 text-xl text-greyCrescendo max-w-3xl">
            Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
            lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
            consectetur. Sit justo viverra non adipisicing elit distinctio.
          </p>
        </div>
      </div>

      <div className="bg-greyCrescendo">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl text-coalCrescendo">
                Artists again
              </h1>
              <p className="text-xl text-mossCrescendo">
                Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum
                dolor ultricies donec risus sodales. Tempus quis et.
              </p>
            </div>
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8 group"
            >
              {artists
                .filter((p) => p.locale === locale)
                .map((artist, i) => (
                  <li key={i}>
                    <Link href={`/artistas/${slugify(artist.name)}`} passHref>
                      <div className="space-y-4 cursor-pointer group hover:bg-gray-50 p-6 rounded-lg transition duration-300 ease-in-out">
                        <div className="aspect-w-3 aspect-h-2">
                          <div className="object-cover shadow-none rounded-lg overflow-hidden">
                            <Image
                              layout="fill"
                              objectFit="cover"
                              objectPosition="center"
                              src={artist.image}
                              alt={artist.name}
                              width={600}
                              height={400}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="text-lg leading-6 font-medium space-y-1">
                            <h3 className="text-coalCrescendo">
                              {artist.name}
                            </h3>
                            <p className="text-mossCrescendo font-normal">
                              {artist.instrument}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
