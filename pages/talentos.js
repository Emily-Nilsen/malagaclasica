import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import Language from '../components/language';
import ContentTalentos from '../components/talents/content';
import InfoTalentos from '../components/talents/info';
import MapTalentos from '../components/talents/map';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import ProgramTalentos from '../components/talents/program';
import { CheckIcon } from '@heroicons/react/solid';
import { MailIcon, PhoneIcon } from '@heroicons/react/solid';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const itemBottom = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: [0, 0.2, 0.5, 0.8, 1],
    y: 0,
    transition: { type: 'spring', stiffness: 30, duration: 1.3, delay: 1.6 },
  },
};

const Talentos = () => {
  const { t } = useTranslation();
  const talentos = ['T', 'a', 'l', 'e', 'n', 't', 'o', 's'];

  const requisitos = [
    {
      item: `${t('talents:requisito01')}`,
      note: `${t('talents:requisitoNote')}`,
    },
    { item: `${t('talents:requisito02')}` },
    { item: `${t('talents:requisito03')}` },
  ];

  return (
    <Layout
      title={t('common:talentos_title')}
      description={t('common:talentos_description')}
      keywords={t('common:talentos_keywords')}
    >
      <div className="overflow-y-hidden">
        <div className="relative flex items-center justify-center">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              type: 'fade',
            }}
            className="w-full"
          >
            <Image
              width={2356}
              height={1564}
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/talentos_nhflyf.webp"
              alt="Talentos"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              priority
              unoptimized={true}
            />
            <div className="absolute inset-0 mix-blend-overlay bg-blue2024" />
            <div className="absolute inset-0 bg-blue2024/70" />
            <div className="absolute inset-0 opacity-50 sm:hidden">
              <Image
                alt="Málaga Clásica - Resonancias Del Espíritu 2024"
                objectFit="cover"
                layout="fill"
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/Resonancias_del_espiritu_2024_desktop_bxxhso.webp"
              />
            </div>
            <div className="absolute inset-0 hidden opacity-50 sm:block">
              <Image
                alt="Málaga Clásica - Resonancias Del Espíritu 2024"
                objectFit="cover"
                layout="fill"
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/Resonancias_del_espiritu_2024_desktop_bxxhso.webp"
              />
            </div>
          </motion.div>
          <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-3">
            {/* Talentos */}
            <div className="relative flex items-center justify-start h-full bg-t">
              <div className="relative">
                <div className="w-full px-4 pt-3 pb-1 mt-0 sm:pt-4 sm:px-8 sm:mt-0">
                  <div className="text-left max-w-none">
                    <h4 className="pt-3 text-4xl font-extrabold tracking-normal uppercase text-blueGreyDark2024 sm:text-5xl lg:text-6xl ">
                      málaga
                    </h4>
                    <h4 className="pt-0 pl-10 text-4xl font-extrabold tracking-normal text-white uppercase sm:pl-12 sm:text-5xl lg:text-6xl ">
                      {t('talents:talents')}{' '}
                      <span className="text-xl italic font-bold tracking-normal sm:2xl lg:3xl">
                        2024
                      </span>
                    </h4>
                  </div>
                  <div className="w-full h-0.5 px-20 sm:my-6 bg-blueGreyDark2024" />
                  <div className="text-left max-w-none">
                    <h4 className="pt-3 text-3xl font-extrabold tracking-normal uppercase text-blueGreyDark2024 sm:text-5xl lg:text-6xl ">
                      {t('talents:convocatoria')}
                    </h4>
                    <h4 className="pt-0 pl-10 text-3xl font-extrabold tracking-normal uppercase sm:pl-12 text-blueGreyDark2024 sm:text-5xl lg:text-6xl ">
                      {t('talents:abierta')}
                    </h4>
                  </div>
                </div>
              </div>
              {/* <div>
                <motion.h1
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="block text-6xl font-extrabold tracking-tight text-left text-white sm:text-7xl lg:text-8xl"
                >
                  {talentos.map((letter, i) => (
                    <motion.span key={i} variants={item}>
                      {letter}
                    </motion.span>
                  ))}
                </motion.h1>

                <motion.h2
                  variants={itemBottom}
                  initial="hidden"
                  animate="show"
                  className="max-w-lg mx-auto mt-1 text-xl tracking-wide text-center text-white sm:text-2xl lg:text-3xl sm:max-w-3xl"
                >
                  29-30/05/2023
                </motion.h2>
              </div> */}
            </div>
            <div className="items-center justify-end hidden h-full col-start-3 pl-20 lg:flex">
              <div className="relative">
                <div className="w-full px-4 pt-3 pb-1 mt-0 bg-t sm:pt-4 sm:px-8 sm:mt-0">
                  <div className="text-right max-w-none">
                    <h4 className="pt-3 text-4xl italic font-extrabold tracking-normal capitalise text-pinkText2024 lg:text-5xl sm:pr-0">
                      {t('talents:requisitos')}{' '}
                    </h4>
                    <div className="text-blueGreyDark2024">
                      <ul
                        role="list"
                        className="grid grid-cols-1 gap-4 mt-8 text-xl leading-6 sm:gap-6"
                      >
                        {requisitos.map((feature) => (
                          <li
                            key={feature}
                            className="flex flex-col text-right gap-x-3"
                          >
                            <div className="flex justify-end">
                              <CheckIcon
                                className="flex-none w-5 h-6 mr-2 text-white"
                                aria-hidden="true"
                              />
                              <span>{feature.item}</span>
                            </div>
                            <div className="flex justify-end text-base italic text-blueGrey2024">
                              <div className="max-w-xs">
                                {feature.note ? <>{feature.note}</> : null}
                              </div>
                            </div>
                          </li>
                        ))}
                        <div className="pb-2" />
                        <hr />
                        <div className="pt-3 font-medium">
                          <p>
                            {t('talents:deadline')}{' '}
                            <span className="">
                              <h4 className="inline italic font-bold text-pinkText2024">
                                {t('talents:deadlineDate')}
                              </h4>
                            </span>{' '}
                            2024
                          </p>
                        </div>
                        <dl className="mt-3 transition duration-200 ease-in-out text-blueGreyDark2024">
                          {/* email */}
                          <div className="mt-0">
                            <dt className="sr-only">Email</dt>
                            <dd className="flex">
                              <MailIcon
                                className="flex-shrink-0 w-6 h-6 text-pinkText2024"
                                aria-hidden="true"
                              />
                              <span className="ml-3 font-normal">
                                secretaria.malagaclasica@gmail.com
                              </span>
                            </dd>
                          </div>
                        </dl>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Requisitos */}
      <div className="px-6 lg:hidden bg-pink3_2024/30">
        <div className="pt-1 pb-6">
          <div className="flex items-center mt-10 gap-x-4">
            <h4 className="pt-3 pr-10 text-4xl italic font-bold tracking-normal capitalize text-pinkText2024 sm:pr-20">
              {t('talents:requisitos')}
            </h4>
            <div className="flex-auto h-px bg-gray-100" />
          </div>
          <ul
            role="list"
            className="grid grid-cols-1 gap-4 mt-8 text-lg leading-6 text-bleuGreyDark2024 sm:grid-cols-2 sm:gap-6"
          >
            {requisitos.map((feature) => (
              <li key={feature} className="flex flex-col gap-x-3">
                <div className="flex gap-x-3">
                  <CheckIcon
                    className="flex-none w-5 h-6 text-pinkText2024"
                    aria-hidden="true"
                  />
                  {feature.item}
                </div>
                <div className="flex text-sm italic text-blueGrey2024 pl-7">
                  <div className="max-w-xs">
                    {feature.note ? <>{feature.note}</> : null}
                  </div>
                </div>
              </li>
            ))}
            <div className="pb-2" />
            <hr />
            <div className="pt-3 font-medium">
              <p>
                {t('talents:deadline')}{' '}
                <span className="text-pinkText2024">
                  <h4 className="inline italic font-bold text-pinkText2024">
                    {t('talents:deadlineDate')}
                  </h4>
                </span>{' '}
                2024
              </p>
            </div>
            <dl className="mt-3 transition duration-200 ease-in-out text-bleuGreyDark2024">
              {/* email */}
              <div className="pb-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailIcon
                    className="flex-shrink-0 w-6 h-6 text-pinkText2024"
                    aria-hidden="true"
                  />
                  <span className="ml-3 font-normal">
                    secretaria.malagaclasica@gmail.com
                  </span>
                </dd>
              </div>
            </dl>
          </ul>
        </div>
      </div>

      <ContentTalentos />
      <InfoTalentos />
      {/* <ProgramTalentos /> */}
      <MapTalentos />
    </Layout>
  );
};

export default Talentos;
