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
      <div className="relative bg-pink3_2024/50">
        {/* <div className="absolute inset-0">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              type: 'fade',
              ease: 'easeIn',
            }}
            className="object-cover w-full sm:h-full h-3/4 bg-blue2024"
          >
            <div className="absolute inset-0">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/Resonancias_del_espiritu_2024_desktop_bxxhso.webp"
                alt="Málaga Clásica"
                unoptimized={true}
                layout="fill"
                objectFit="cover"
                objectPosition="bottom"
                className=""
              />
            </div>
          </motion.div>
        </div> */}
        {/* <div className="relative px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8"></div> */}
      </div>
      <div className="bg-pink3_2024/50">
        <div className="max-w-2xl px-4 pt-0 pb-24 mx-auto sm:pb-32 sm:pt-0 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid items-center grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
            <div>
              <div className="pb-10 border-b border-pinkText2024/30">
                <div className="text-gray-600 ">
                  <p>{t('info:para_5')}</p>
                  <p className="mt-5">{t('info:para_6')}</p>
                  <p className="mt-5">{t('info:para_7')}</p>
                </div>
              </div>

              <dl className="mt-10 space-y-10">
                {directors.map((feature) => (
                  <div key={feature.name}>
                    <h4 className="text-lg italic font-bold text-pinkText2024">
                      {feature.name}
                    </h4>
                    <dd className="mt-3 text-base font-medium text-blueGrey2024">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-4 mt-4 sm:gap-6 sm:mt-6 lg:gap-8 lg:mt-8">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0,
                    ease: 'easeIn',
                  }}
                  className="overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1"
                >
                  <div className="object-cover object-center w-full h-full">
                    <Image
                      src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Jes%C3%BAs%20Reina/general/image-03-small_ccpydm.jpg"
                      alt="Jesús Reina"
                      unoptimized={true}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: 'easeIn',
                  }}
                  className="overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1"
                >
                  <div className="object-cover object-center w-full h-full">
                    <Image
                      src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/anna-nilsen_kolwch.webp"
                      alt="Anna Nilsen"
                      unoptimized={true}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
