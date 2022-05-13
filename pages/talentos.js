import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import Language from '../components/language';
import ContentTalentos from '../components/talents/content';
import InfoTalentos from '../components/talents/info';
import MapTalentos from '../components/talents/map';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
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
  const talentos = ['t', 'a', 'l', 'e', 'n', 't', 'o', 's'];
  const talents = ['t', 'a', 'l', 'e', 'n', 't', 's'];
  return (
    <Layout>
      <div className="overflow-y-hidden">
        <div className="relative flex items-end justify-start md:justify-start md:items-end">
          <div className="w-full">
            <Image
              width={2356}
              height={1564}
              src="/static/crescendo-img-18-waves.webp"
              alt="Talentos"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="absolute flex flex-col items-center justify-start w-40 py-8 mx-4 md:w-48 lg:w-72 md:flex-row sm:py-10 md:py-10 xl:py-20 md:mx-8 lg:mx-20 xl:mx-20">
            {/* Talentos */}
            <div className="relative flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
              <div className="">
                <motion.h1
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="block text-6xl font-extrabold tracking-normal text-left text-greyCrescendo sm:text-7xl lg:text-8xl"
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
                  className="max-w-lg mx-auto mt-1 text-xl text-left sm:text-2xl lg:text-3xl text-greyCrescendo sm:max-w-3xl"
                >
                  6__8/6/2022
                </motion.h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContentTalentos />
      <InfoTalentos />
      <MapTalentos />
    </Layout>
  );
};

export default Talentos;
