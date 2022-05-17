import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';

export default function PageNotFound() {
  const { t } = useTranslation();

  return (
    <main className="h-[50vh] bg-top bg-cover bg-notfound sm:bg-top">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-center md:text-6xl text-mossCrescendo">
          {t('common:notfound_title_1')}
          <span className="block">{t('common:notfound_title_2')}</span>
        </h1>
        <p className="pt-2 text-center text-md text-coalCrescendo sm:pt-4">
          {t('common:notfound_text')}
        </p>
        <div className="mt-6">
          <Link href="/" passHref>
            <button className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white transition duration-200 ease-in-out border border-transparent rounded-md shadow-none bg-mossCrescendo hover:bg-blueCrescendo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueCrescendo">
              {t('common:button_back')}
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
