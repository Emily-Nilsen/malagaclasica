import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';

export default function PageNotFound() {
  const { t } = useTranslation();

  return (
    <main className="h-[50vh] bg-top bg-cover bg-notfound sm:bg-top">
      <div className="flex items-center justify-center flex-col h-full">
        <h1 className="md:text-6xl text-4xl font-bold text-center text-mossCrescendo">
          {t('common:notfound_title_1')}
          <span className="block">{t('common:notfound_title_2')}</span>
        </h1>
        <p className="text-md text-center text-coalCrescendo pt-2 sm:pt-4">
          {t('common:notfound_text')}
        </p>
        <div className="mt-6">
          <Link href="/" passHref>
            <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-none text-sm font-medium rounded-md text-white bg-mossCrescendo hover:bg-blueCrescendo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueCrescendo transition duration-200 ease-in-out">
              {t('common:button_back')}
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
