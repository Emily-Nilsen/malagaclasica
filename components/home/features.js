import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';

export default function Features() {
  const { t } = useTranslation();
  const features = [
    {
      name: `${t('home:feature_info')}`,
      href: '/info',
      imageSrc:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653686312/M%C3%A1laga%20Cl%C3%A1sica/img-1_uxkfv7.webp',
      imageAlt: 'Festival Málaga Clásica',
    },
    {
      name: `${t('home:feature_programa')}`,
      href: '/programa',
      imageSrc:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653686312/M%C3%A1laga%20Cl%C3%A1sica/img-2_yoaxjz.webp',
      imageAlt: 'Festival Málaga Clásica',
    },
    {
      name: `${t('home:feature_artistas')}`,
      href: '/artistas',
      imageSrc:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653686312/M%C3%A1laga%20Cl%C3%A1sica/img-3_hm2bf7.webp',
      imageAlt: 'Festival Málaga Clásica',
    },
    {
      name: `${t('home:feature_talentos')}`,
      href: 'talentos',
      imageSrc:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653686312/M%C3%A1laga%20Cl%C3%A1sica/img-4_t6p3xr.webp',
      imageAlt: 'Festival Málaga Clásica',
    },
  ];
  return (
    <div>
      <section>
        {/* Feature section */}
        <div className="bg-white">
          <div className="max-w-2xl px-4 pt-10 pb-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="max-w-3xl">
              <h1 className="mt-2 text-4xl font-extrabold tracking-normal text-mossCrescendo sm:text-5xl">
                {t('home:features_title')}
              </h1>
              <p className="mt-4 opacity-75 text-coalCrescendo">
                {t('home:features_text')}
              </p>
            </div>

            <div className="grid items-start grid-cols-2 mt-11 sm:gap-y-16 gap-y-10 gap-x-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
              {features.map((feature, i) => (
                <Link key={i} href={feature.href} passHref>
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      initialDelay: 0.3,
                      duration: 0.7,
                      delay: i * 0.3,
                      ease: 'easeOut',
                    }}
                    className="flex flex-col-reverse cursor-pointer group"
                  >
                    <motion.div
                      whileInView={{ opacity: 1 }}
                      initial={{ opacity: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: i * 0.3,
                        type: 'fade',
                      }}
                      className="mt-4"
                    >
                      <h2 className="text-2xl font-medium text-coalCrescendo group-hover:text-greenCrescendo">
                        {feature.name}
                      </h2>
                    </motion.div>
                    <div className="overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1">
                      <div className="object-cover object-center transition duration-300 ease-in-out group-hover:brightness-125">
                        <Image
                          src={feature.imageSrc}
                          alt={feature.imageAlt}
                          unoptimized={true}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
