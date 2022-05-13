import { TicketIcon } from '@heroicons/react/solid';
import useTranslation from 'next-translate/useTranslation';

export default function ContentTalentos() {
  const { t } = useTranslation();
  return (
    <div className="px-4 py-16 overflow-hidden bg-white xl:py-36 sm:px-6 lg:px-8">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-lg max-w-prose">
          <h1>
            <span className="block text-base font-semibold tracking-wide text-center uppercase text-greenCrescendo">
              {t('talents:subtitle_1')}
            </span>
            <span className="block mt-2 text-5xl font-extrabold leading-none tracking-normal text-center sm:text-6xl text-coalCrescendo">
              {t('talents:title_1')}
            </span>
          </h1>
          <p className="mt-8 text-xl leading-8 text-mossCrescendo">
            {t('talents:para_1')}
          </p>
        </div>
        <div className="mx-auto mt-6 prose prose-lg text-mossCrescendo">
          <p>{t('talents:para_3')}</p>
          <p>{t('talents:para_4')}</p>

          <h2 className="text-coalCrescendo">{t('talents:title_2')}</h2>
          <p>{t('talents:para_5')}</p>
        </div>
      </div>
    </div>
  );
}
