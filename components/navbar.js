import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import LanguageSwitcher from './language-switcher';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  BookmarkAltIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CursorClickIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MenuIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const { t } = useTranslation();

  const firstConcerts = [
    { name: 'Anacrusa', href: '#', date: '06' },
    { name: 'Crescendo', href: '#', date: '07' },
    { name: 'Equilibrio', href: '#', date: '08' },
    { name: 'Diversión', href: '#', date: '09' },
  ];
  const lastConcerts = [
    { name: 'Simbiosis', href: '#', date: '10' },
    { name: 'Virtuosismo', href: '#', date: '11' },
    { name: 'Fortísimo', href: '#', date: '12' },
  ];
  const concertPreviews = [
    {
      id: 1,
      name: 'Boost your conversion rate',
      href: '#',
      preview:
        'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
      imageUrl: '/static/crescendo-img-08-thumbnail.webp',
    },
    {
      id: 2,
      name: 'How to use search engine optimization to drive traffic to your site',
      href: '#',
      preview:
        'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
      imageUrl: '/static/crescendo-img-12-thumbnail.webp',
    },
  ];
  const mobileLinks = [
    { name: `${t('navbar:link_home')}`, href: '/' },
    { name: `${t('navbar:link_info')}`, href: '/info' },
    { name: `${t('navbar:link_programa')}`, href: '/programa' },
    { name: `${t('navbar:link_artistas')}`, href: '/artistas' },
    { name: `${t('navbar:link_talentos')}`, href: '/talentos' },
    { name: `${t('navbar:link_contactar')}`, href: '/contactar' },
  ];

  return (
    <Popover className="relative bg-greyCrescendo">
      <div
        className="absolute inset-0 shadow-none z-30 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-2 py-5 sm:px-4 sm:py-4 lg:px-8 md:justify-start md:space-x-8">
          <Link href="/" passHref>
            <a className="flex">
              <span className="sr-only">Málaga Clásica</span>
              <div className="h-1/2 md:h-8 w-auto sm:h-10">
                <Image
                  className="h-1/2 md:h-8 w-auto sm:h-10"
                  src="/static/logo-moss.svg"
                  alt="Málaga Clásica Logo"
                  layout="fixed"
                  width={150}
                  height={40}
                />
              </div>
            </a>
          </Link>

          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-greyCrescendo rounded-md p-2 inline-flex items-center justify-center text-mossCrescendo hover:text-coalCrescendo hover:bg-white focus:outline-none focus:ring-0 transition duration-200 ease-in-out">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10 justify-between">
              <div className="flex md:space-x-7 lg:space-x-10">
                <Link href="/info" passHref>
                  <a className="text-base font-medium text-mossCrescendo hover:text-coalCrescendo uppercase transition duration-200 ease-in-out">
                    {t('navbar:link_info')}
                  </a>
                </Link>
                <Popover>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group bg-greyCrescendo rounded-none inline-flex items-center text-base font-medium hover:text-coalCrescendo focus:outline-none focus:ring-0'
                        )}
                      >
                        <span className="text-base font-medium text-mossCrescendo hover:text-coalCrescendo uppercase transition duration-200 ease-in-out">
                          {t('navbar:link_programa')}
                        </span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-600' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 -translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-1"
                      >
                        <Popover.Panel className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-none">
                          <div className="absolute inset-0 flex">
                            <div className="bg-white w-1/2" />
                            <div className="bg-gray-50 w-1/2" />
                          </div>
                          <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                            <nav className="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                              <div>
                                <h3 className="text-sm font-medium tracking-wide text-mossCrescendo uppercase">
                                  Concerts by date
                                </h3>
                                <ul role="list" className="mt-5 space-y-6">
                                  {firstConcerts.map((item) => (
                                    <li key={item.name} className="flow-root">
                                      <Popover.Button>
                                        <Link href={item.href} passHref>
                                          <a className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">
                                            <p
                                              className="flex-shrink-0 h-6 w-6 text-blueCrescendo"
                                              aria-hidden="true"
                                            >
                                              {item.date}
                                            </p>

                                            <span className="ml-4 text-coalCrescendo">
                                              {item.name}
                                            </span>
                                          </a>
                                        </Link>
                                      </Popover.Button>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h3 className="opacity-0 text-sm font-medium tracking-wide text-mossCrescendo uppercase">
                                  concerts
                                </h3>
                                <ul role="list" className="mt-5 space-y-6">
                                  {lastConcerts.map((item) => (
                                    <li key={item.name} className="flow-root">
                                      <a
                                        href={item.href}
                                        className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                                      >
                                        <p
                                          className="flex-shrink-0 h-6 w-6 text-blueCrescendo"
                                          aria-hidden="true"
                                        >
                                          {item.date}
                                        </p>
                                        <span className="ml-4 text-coalCrescendo">
                                          {item.name}
                                        </span>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </nav>
                            <div className="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                              <div>
                                <h3 className="text-sm font-medium tracking-wide text-mossCrescendo uppercase">
                                  From the program
                                </h3>
                                <ul role="list" className="mt-6 space-y-6">
                                  {concertPreviews.map((post) => (
                                    <li key={post.id} className="flow-root">
                                      <a
                                        href={post.href}
                                        className="-m-3 p-3 flex rounded-lg hover:bg-gray-100"
                                      >
                                        <div className="hidden sm:block flex-shrink-0">
                                          <div className="w-32 h-20 object-cover rounded-md overflow-hidden">
                                            <Image
                                              width={300}
                                              height={200}
                                              src={post.imageUrl}
                                              alt=""
                                            />
                                          </div>
                                        </div>
                                        <div className="w-0 flex-1 sm:ml-8">
                                          <h4 className="text-base font-medium text-mossCrescendo truncate">
                                            {post.name}
                                          </h4>
                                          <p className="mt-1 text-sm text-coalCrescendo">
                                            {post.preview}
                                          </p>
                                        </div>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="mt-6 text-sm font-medium">
                                <Popover.Button>
                                  <Link href="/programa" passHref>
                                    <a className="text-greenCrescendo hover:text-coalCrescendo transition duration-200 ease-in-out">
                                      {' '}
                                      View all concerts{' '}
                                      <span aria-hidden="true">&rarr;</span>
                                    </a>
                                  </Link>
                                </Popover.Button>
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <Link href="/artistas" passHref>
                  <a className="text-base font-medium text-mossCrescendo hover:text-coalCrescendo uppercase transition duration-200 ease-in-out">
                    {t('navbar:link_artistas')}
                  </a>
                </Link>
                <Link href="/talentos" passHref>
                  <a className="text-base font-medium text-mossCrescendo hover:text-coalCrescendo uppercase transition duration-200 ease-in-out">
                    {t('navbar:link_talentos')}
                  </a>
                </Link>
                <Link href="/contactar" passHref>
                  <a className="text-base font-medium text-mossCrescendo hover:text-coalCrescendo uppercase transition duration-200 ease-in-out">
                    {t('navbar:link_contactar')}
                  </a>
                </Link>
              </div>
            </Popover.Group>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <Popover.Button className="w-full">
            <div className="rounded-none shadow-none ring-1 ring-blueCrescendo ring-opacity-5 bg-white divide-y-2 divide-blueCrescendo">
              <div className="pt-5 pb-6 px-5 sm:pb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <Link href="/" passHref>
                      <a className="flex">
                        <span className="sr-only">Málaga Clásica</span>
                        <div className="h-1/2 md:h-8 w-auto sm:h-10">
                          <Image
                            className="h-1/2 md:h-8 w-auto sm:h-10"
                            src="/static/logo-moss.svg"
                            alt="Málaga Clásica Logo"
                            layout="fixed"
                            width={150}
                            height={40}
                          />
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-mossCrescendo hover:text-coalCrescendo hover:bg-greyCrescendo focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blueCrescendo transition duration-200 ease-in-out">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8">
                  <nav>
                    <div className="grid gap-3 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4 pb-6">
                      <button className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md text-white text-xl">
                          <p
                            className="flex-shrink-0 h-6 w-6 text-blueCrescendo"
                            aria-hidden="true"
                          >
                            EN
                          </p>
                        </div>
                        <div className="ml-4 text-base font-medium text-mossCrescendo hover:text-coalCrescendo transition duration-200 ease-in-out">
                          <Link
                            activeClassName={locale === 'en'}
                            href={asPath}
                            locale="en"
                          >
                            English
                          </Link>
                        </div>
                      </button>

                      <button className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50">
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md text-white text-xl">
                          <p
                            className="flex-shrink-0 h-6 w-6 text-blueCrescendo"
                            aria-hidden="true"
                          >
                            ES
                          </p>
                        </div>
                        <div className="ml-4 text-base font-medium text-mossCrescendo hover:text-coalCrescendo transition duration-200 ease-in-out">
                          <Link
                            activeClassName={locale === 'es'}
                            href={asPath}
                            locale="es"
                          >
                            español
                          </Link>
                        </div>
                      </button>
                    </div>
                  </nav>
                </div>
              </div>

              <div className="text-left">
                <div className="py-10 px-5 bg-greyCrescendo">
                  <div className="grid grid-cols-2 gap-6">
                    {mobileLinks.map((link, i) => (
                      <Link key={i} href={link.href} passHref>
                        <a className="rounded-md text-base font-medium text-coalCrescendo hover:text-greenCrescendo transition duration-200 ease-in-out">
                          {link.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Popover.Button>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
