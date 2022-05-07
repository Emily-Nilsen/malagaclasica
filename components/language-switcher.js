import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import useTranslation from 'next-translate/useTranslation';

const LanguageSwitcher = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const { t } = useTranslation();

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="relative flex items-center tracking-wider">
      <div className="container flex items-center justify-between text-neutral-500 w-1/5">
        {/* Dropdown menu */}
        <Popover.Group as="nav" className="space-x-10 md:flex">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'bg-blueCrescendo' : 'text-mossCrescendo',
                    'group bg-t rounded-none inline-flex items-center text-base font-normal hover:text-coalCrescendo focus:outline-none focus:ring-0 transition duration-200 ease-in-out py-2 px-4'
                  )}
                >
                  <span className="ml-2">{t('navbar:button_language')}</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? 'text-neutral-500' : 'text-neutral-400',
                      'ml-2 h-5 w-5 group-hover:text-neutral-500'
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="block absolute z-10 top-full inset-x-0 transform shadow-none bg-white">
                    <div className="overflow-hidden rounded-md shadow-none ring-0">
                      <div className="relative grid w-full gap-0 px-4 py-6 bg-neutral-50 sm:gap-0 sm:pr-8">
                        <Popover.Button>
                          <button className="px-4 py-2 transition duration-200 ease-in-out hover:text-coalCrescendo hover:bg-neutral-100 rounded-md">
                            <Link
                              activeClassName={locale === 'en'}
                              href={asPath}
                              locale="en"
                            >
                              English
                            </Link>
                          </button>
                        </Popover.Button>
                        <Popover.Button>
                          <button className="px-4 py-2 transition duration-200 ease-in-out hover:text-coalCrescendo hover:bg-neutral-100 rounded-md">
                            <Link
                              activeClassName={locale === 'es'}
                              href={asPath}
                              locale="es"
                            >
                              español
                            </Link>
                          </button>
                        </Popover.Button>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </Popover.Group>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
