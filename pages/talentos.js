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
  return (
    <Layout>
      <div className="overflow-y-hidden">
        <div className="relative flex justify-start items-end md:justify-start md:items-end">
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
          <div className="w-40 md:w-48 lg:w-72 flex absolute justify-start flex-col md:flex-row items-center mx-4 py-8 sm:py-10 md:py-10 xl:py-20 md:mx-8 lg:mx-20 xl:mx-20">
            {/* Talentos */}
            <div className="relative px-4 sm:px-6 lg:px-8 h-full items-center justify-center flex">
              <div className="">
                <motion.h1
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="block text-greyCrescendo text-left text-6xl font-extrabold tracking-normal sm:text-7xl lg:text-8xl"
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
                  className="mt-1 max-w-lg mx-auto text-left text-xl sm:text-2xl lg:text-3xl text-greyCrescendo sm:max-w-3xl"
                >
                  6__12/6/2022
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
