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

  // const [showMe, setShowMe] = useState(true);
  // function toggle() {
  //   setShowMe(!showMe);
  // }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="relative flex items-center tracking-wider">
      <div className="container flex items-center justify-between w-1/5 text-neutral-500 ">
        {/* Dropdown menu */}
        <Popover.Group as="nav" className="space-x-10 md:flex">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'text-neutral-700' : 'text-neutral-500',
                    'group bg-t rounded-none inline-flex items-center text-base font-normal hover:text-neutral-900 focus:outline-none focus:ring-0'
                  )}
                >
                  <span>{t('common:button_language')}</span>
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
                  <Popover.Panel className="absolute z-10 -translate-x-7 md:translate-x-7 md:right-0">
                    <div className="overflow-hidden rounded-none shadow-none ring-0">
                      <div className="relative grid w-full gap-0 px-4 py-6 bg-neutral-50 sm:gap-0 sm:pr-8">
                        <Popover.Button>
                          <button className="px-4 py-2 mt-6 transition duration-200 ease-in-out hover:text-neutral-900 hover:bg-neutral-100">
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
                          <button className="px-4 py-2 transition duration-200 ease-in-out hover:text-neutral-900 hover:bg-neutral-100">
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

        {/* <button
          onClick={toggle}
          className="px-2 transition duration-200 ease-in-out hover:text-neutral-900"
        >
          {showMe ? (
            <Link activeClassName={locale === 'es'} href={asPath} locale="es">
              español
            </Link>
          ) : (
            <Link activeClassName={locale === 'en'} href={asPath} locale="en">
              English
            </Link>
          )}
        </button> */}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
