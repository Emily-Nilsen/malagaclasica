import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import useTranslation from 'next-translate/useTranslation';

export default function Language() {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const { t } = useTranslation();

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <span className="relative z-0 inline-flex shadow-none rounded-md">
      <button
        type="button"
        className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-blueCrescendo bg-greyCrescendo text-sm font-medium text-mossCrescendo hover:text-coalCrescendo hover:bg-white focus:z-10 focus:outline-none transition duration-300 ease-in-out border-y-0 border-l-0 focus:ring-0"
      >
        <Link activeClassName={locale === 'en'} href={asPath} locale="en">
          ENG
        </Link>
      </button>

      <button
        type="button"
        className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-blueCrescendo bg-greyCrescendo text-sm font-medium text-mossCrescendo hover:text-coalCrescendo hover:bg-white focus:z-10 focus:outline-none focus:ring-0 transition duration-300 ease-in-out border-y-0 border-r-0"
      >
        <Link activeClassName={locale === 'es'} href={asPath} locale="es">
          ESP
        </Link>
      </button>
    </span>
  );
}
