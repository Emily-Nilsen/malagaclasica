import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';

export default function AnnaJesus() {
  const { t } = useTranslation();
  const directors = [
    {
      name: `Jesús Reina & Anna Nilsen`,
      description: `${t('info:co_directors')}`,
    },
    {
      name: `John Rockwell`,
      description: `${t('info:honorary_director')}`,
    },
  ];
  return (
    <div>
      {/* Info Section Two */}
      <div className="relative bg-white">
        <div className="absolute inset-0">
          <div className="object-cover w-full h-full">
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
        <div className="relative px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8"></div>
      </div>
      <div className="bg-white">
        <div className="max-w-2xl px-4 pt-16 pb-24 mx-auto sm:pb-32 sm:pt-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid items-center grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
            <div>
              <div className="pb-10 border-b border-gray-200">
                <div className="opacity-75 text-coalCrescendo">
                  <p>{t('info:para_5')}</p>
                  <p className="mt-5">{t('info:para_6')}</p>
                  <p className="mt-5">{t('info:para_7')}</p>
                </div>
              </div>

              <dl className="mt-10 space-y-10">
                {directors.map((feature) => (
                  <div key={feature.name}>
                    <dt className="text-base font-medium text-mossCrescendo">
                      {feature.name}
                    </dt>
                    <dd className="mt-3 text-base font-medium text-coalCrescendo">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <div className="overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1">
                <div className="object-cover object-center w-full h-full">
                  <Image
                    src="/static/crescendo-img-12-blue.webp"
                    alt="Málaga Clásica"
                    width={1000}
                    height={1000}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="top"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4 sm:gap-6 sm:mt-6 lg:gap-8 lg:mt-8">
                <div className="overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1">
                  <div className="object-cover object-center w-full h-full">
                    <Image
                      src="/static/jesus-blue.webp"
                      alt="Jesús Reina"
                      width={1000}
                      height={1000}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
                <div className="overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1">
                  <div className="object-cover object-center w-full h-full">
                    <Image
                      src="/static/anna-blue.webp"
                      alt="Anna Nilsen"
                      width={1000}
                      height={1000}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
