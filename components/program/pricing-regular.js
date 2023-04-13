import { TicketIcon } from '@heroicons/react/outline';
import useTranslation from 'next-translate/useTranslation';

export default function PricingRegular() {
  const { t } = useTranslation();
  return (
    <div className="bg-t">
      <h3 className="mt-10 text-lg font-bold tracking-normal text-orangeRevolution">
        <span className="font-medium tracking-normal text-blueRevolution">
          {t('common:single_ticket')}{' '}
        </span>
        {t('common:ticket_cost_en')}
        15
        {t('common:ticket_cost_es')}{' '}
        <span className="font-normal tracking-normal text-gray-500 lowercase">
          {t('common:no_discounts')}
        </span>
      </h3>
    </div>
  );
}
