import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';

export default function Contactar() {
  const { t } = useTranslation();
  return (
    <div className="relative bg-greyCrescendo">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="relative object-cover w-full h-64 lg:absolute lg:h-full">
            <Image
              src="/static/features/crescendo-blue.webp"
              alt=""
              width={2400}
              height={1500}
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
              priority
              blurDataURL="/static/features/data-crescendo.webp"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <div className="relative px-4 py-16 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
        <div className="lg:pr-8">
          <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2 className="text-5xl font-extrabold tracking-normal sm:text-6xl text-coalCrescendo">
              {t('contact:title')}
            </h2>
            <p className="mt-4 text-lg text-mossCrescendo sm:mt-3">
              {t('contact:subtitle')}
            </p>
            <dl className="mt-8 text-base transition duration-200 ease-in-out cursor-pointer text-greenCrescendo hover:text-coalCrescendo">
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailIcon
                    className="flex-shrink-0 w-6 h-6 text-blueCrescendo"
                    aria-hidden="true"
                  />
                  <span className="ml-3">malagaclasica@gmail.com</span>
                </dd>
              </div>
            </dl>

            {/* Contact form */}
            <form
              action="/success"
              subject="Festival Málaga Clásica"
              name="Málaga Clásica"
              data-netlify="true"
              method="POST"
              className="grid grid-cols-1 mt-16 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <input type="hidden" name="form-name" value="Málaga Clásica" />
              <input
                type="hidden"
                name="subject"
                value="Festival Málaga Clásica"
              />
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-coalCrescendo"
                >
                  {t('contact:first_name')}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    required
                    autoComplete="given-name"
                    className="block w-full rounded-md shadow-none sm:text-sm focus:ring-blueCrescendo focus:border-blueCrescendo border-greyCrescendo"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-coalCrescendo"
                >
                  {t('contact:surname')}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    required
                    autoComplete="family-name"
                    className="block w-full rounded-md shadow-none sm:text-sm focus:ring-blueCrescendo focus:border-blueCrescendo border-greyCrescendo"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-coalCrescendo"
                >
                  {t('contact:email')}
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md shadow-none sm:text-sm focus:ring-blueCrescendo focus:border-blueCrescendo border-greyCrescendo"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-coalCrescendo"
                  >
                    {t('contact:phone')}
                  </label>
                  <span
                    id="phone-description"
                    className="text-sm text-gray-500"
                  >
                    {t('contact:optional')}
                  </span>
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    aria-describedby="phone-description"
                    className="block w-full rounded-md shadow-none sm:text-sm focus:ring-blueCrescendo focus:border-blueCrescendo border-greyCrescendo"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="how-can-we-help"
                    className="block text-sm font-medium text-coalCrescendo"
                  >
                    {t('contact:help')}
                  </label>
                  <span
                    id="how-can-we-help-description"
                    className="text-sm text-gray-500"
                  >
                    {t('contact:max')}
                  </span>
                </div>
                <div className="mt-1">
                  <textarea
                    id="how-can-we-help"
                    name="how-can-we-help"
                    required
                    aria-describedby="how-can-we-help-description"
                    rows={4}
                    className="block w-full border rounded-md shadow-none sm:text-sm focus:ring-blueCrescendo focus:border-blueCrescendo border-greyCrescendo"
                    defaultValue={''}
                  />
                </div>
              </div>

              <div className="text-right sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white transition duration-200 ease-in-out border border-transparent rounded-md shadow-none bg-mossCrescendo hover:bg-blueCrescendo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueCrescendo"
                >
                  {t('contact:submit')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
