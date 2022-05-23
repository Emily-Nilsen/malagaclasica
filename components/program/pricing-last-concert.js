import { Fragment } from 'react';
import { CheckIcon, MinusIcon } from '@heroicons/react/solid';
import useTranslation from 'next-translate/useTranslation';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

/* This example requires Tailwind CSS v2.0+ */
const tiers = [
  {
    name: '',
    tier_1: '30',
    tier_2: '22',
    tier_3: '16',
    tier_4: '11',
  },
];

export default function PricingLastConcert() {
  const { t } = useTranslation();

  return (
    <div className="pt-10">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-coalCrescendo">
            {t('common:tickets')}
          </h1>
          <p className="mt-2 text-sm text-mossCrescendo">
            {t('common:tickets_text')}
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-8">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-coalCrescendo sm:pl-6 md:pl-0"
                  >
                    {t('common:pricing')}
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-3 text-left text-sm font-semibold text-coalCrescendo"
                  >
                    A
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-3 text-left text-sm font-semibold text-coalCrescendo"
                  >
                    B
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-3 text-left text-sm font-semibold text-coalCrescendo"
                  >
                    C
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-3 text-left text-sm font-semibold text-coalCrescendo"
                  >
                    D
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tiers.map((tier, i) => (
                  <tr key={i}>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6 md:pl-0">
                      {tier.name}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {t('common:ticket_cost_en')}
                      {tier.tier_1}
                      {t('common:ticket_cost_es')}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {t('common:ticket_cost_en')}
                      {tier.tier_2}
                      {t('common:ticket_cost_es')}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {t('common:ticket_cost_en')}
                      {tier.tier_3}
                      {t('common:ticket_cost_es')}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {t('common:ticket_cost_en')}
                      {tier.tier_4}
                      {t('common:ticket_cost_es')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
