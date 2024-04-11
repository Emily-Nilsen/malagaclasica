import { TicketIcon } from '@heroicons/react/solid';
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

export default function ContentTalentos() {
  const { t } = useTranslation();
  return (
    <div className="px-4 py-16 overflow-hidden bg-white xl:py-36 sm:px-6 lg:px-8">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-lg max-w-prose">
          <h4>
            <span className="block text-base font-semibold tracking-wide text-center uppercase text-pinkText2024">
              {t('talents:subtitle_1')}
            </span>
            <span className="block mt-2 text-5xl italic font-extrabold leading-none tracking-normal text-center sm:text-6xl text-blueText2024">
              {t('talents:title_1')}
            </span>
          </h4>
          <p className="mt-8 text-xl leading-8 text-gray-500">
            {t('talents:para_1')}
          </p>
        </div>
        <div className="mx-auto mt-6 prose prose-lg text-gray-500">
          <p>{t('talents:para_3')}</p>
          <p>{t('talents:para_4')}</p>

          {/* <h2 className="text-blueRevolution">{t('talents:title_2')}</h2>
          <p>{t('talents:para_5')}</p> */}
        </div>

        {/* Announce new talent program */}
        {/* <div className="inset-x-0 bottom-0 pb-2 mt-10 sm:mt-16 sm:pb-5">
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="p-2 rounded-lg shadow-lg bg-mossCrescendo sm:p-3">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex items-center flex-1 w-0">
                  <span className="flex p-2 rounded-lg bg-coalCrescendo">
                    <SpeakerphoneIcon
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                  <p className="ml-3 font-medium text-white truncate">
                    <span className="md:hidden">
                      {t('talents:announcement_short')}
                    </span>
                    <span className="hidden md:inline">
                      {t('talents:announcement_long')}
                    </span>
                  </p>
                </div>
                <div className="flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto">
                  <Link href="/talentos/#talentosProgram" passHref>
                    <a className="flex items-center justify-center px-4 py-2 text-sm font-medium transition duration-300 ease-in-out bg-white border border-transparent rounded-md shadow-sm text-coalCrescendo hover:bg-cyan-50">
                      {t('talents:button_program')}
                    </a>
                  </Link>
                </div>
                <div className="flex-shrink-0 order-2 sm:order-3 sm:ml-2">
                  <button
                    type="button"
                    className="flex p-2 -mr-1 rounded-md cursor-default hover:bg-t focus:outline-none focus:ring-0 focus:ring-t"
                  >
                    <span className="sr-only">Dismiss</span>
                    <XIcon
                      className="w-6 h-6 text-mossCrescendo"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
