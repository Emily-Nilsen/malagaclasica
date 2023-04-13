import { TicketIcon } from '@heroicons/react/outline';
import useTranslation from 'next-translate/useTranslation';

export default function Discount() {
  const { t } = useTranslation();
  return (
    <div className="bg-t">
      <div className="relative mx-auto mt-4 max-w-7xl lg:mt-5">
        <div className="max-w-md lg:max-w-5xl">
          <div className="px-6 py-8 bg-white rounded-lg sm:p-10 lg:flex lg:items-center">
            <div className="flex-1">
              <div>
                <h3 className="inline-flex px-4 py-1 text-sm font-semibold tracking-wide uppercase rounded-full bg-orangeRevolution/30 text-blueRevolution">
                  {t('common:discount')}
                </h3>
              </div>
              <div className="mt-4 text-lg text-gray-700">
                <span className="font-semibold text-orangeRevolution">15%</span>{' '}
                {t('common:discount_text')}
              </div>
            </div>
            {/* <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
              <a
                href="https://teatrocervantes.com/es/genero/musica/x-malaga-clasica-crescendo/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-50"
              >
                Compra entradas con descuento
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
