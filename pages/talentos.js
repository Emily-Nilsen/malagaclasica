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
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/M%C3%A1laga%20Cl%C3%A1sica/talentos_rm7kx6.webp"
              alt="Talentos"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              priority
              unoptimized={true}
            />
            <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
          </motion.div>
          <div className="absolute flex flex-col items-center justify-start w-40 py-8 mx-4 md:w-48 lg:w-72 md:flex-row sm:py-10 md:py-10 xl:py-20 md:mx-8 lg:mx-20 xl:mx-20">
            {/* Talentos */}
            <div className="relative flex items-center justify-center h-full pt-20 sm:pt-60">
              <div>
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
              </div>
            </div>
          </div>
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
