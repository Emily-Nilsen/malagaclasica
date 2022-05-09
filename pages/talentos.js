import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';

export default function Talentos() {
  const { t } = useTranslation();
  return (
    <div>
      <main>
        <div className="relative min-h-[30vh]">
          <div className="absolute inset-0">
            <div className="w-full h-full object-cover overflow-hidden">
              <Image
                src="/static/crescendo-img-18-waves.webp"
                alt="Talentos"
                width={2356}
                height={1564}
                layout="fill"
                objectFit="cover"
                objectPosition="center top"
              />
            </div>
            <div
              className="absolute inset-0 bg-mossCrescendo mix-blend-soft-light"
              aria-hidden="true"
            />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-6xl font-extrabold text-white sm:text-7xl lg:text-8xl text-center">
              Talentos
            </h1>
            {/* <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
              Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
              lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
              consectetur. Sit justo viverra non adipisicing elit distinctio.
            </p> */}
          </div>
        </div>
      </main>
    </div>
  );
}
