import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Language from './language';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, CalendarIcon, XIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

import { MalagaclasicaLogo } from '../components/logos';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const { t } = useTranslation();
  const firstConcerts = [
    {
      name: `${t('navbar:concert_overview')}`,
      href: '/programa',
      date: '',
    },
    {
      name: `${t('navbar:concert_06')}`,
      href: `${t('navbar:concert_06_href')}`,
      date: '31',
    },
    {
      name: `${t('navbar:concert_07')}`,
      href: `${t('navbar:concert_07_href')}`,
      date: '01',
    },
    // {
    //   name: `${t('navbar:concert_08')}`,
    //   href: `${t('navbar:concert_08_href')}`,
    //   date: '08',
    // },
  ];
  const lastConcerts = [
    {
      name: `${t('navbar:concert_09')}`,
      href: `${t('navbar:concert_09_href')}`,
      date: '02',
    },
    {
      name: `${t('navbar:concert_10')}`,
      href: `${t('navbar:concert_10_href')}`,
      date: '03',
    },
    {
      name: `${t('navbar:concert_11')}`,
      href: `${t('navbar:concert_11_href')}`,
      date: '04',
    },
    // {
    //   name: `${t('navbar:concert_12')}`,
    //   href: `${t('navbar:concert_12_href')}`,
    //   date: '12',
    // },
  ];
  const concertPreviews = [
    {
      id: 1,
      date: `${t('navbar:date_01')}`,
      name: `${t('navbar:concert_01')}`,
      href: `${t('navbar:concert_01_href')}`,
      preview: `${t('navbar:concert_01_preview')}`,
      imageUrl:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653686310/M%C3%A1laga%20Cl%C3%A1sica/blog-1_mqkvlt.webp',
    },
    {
      id: 2,
      date: `${t('navbar:date_02')}`,
      name: `${t('navbar:concert_02')}`,
      href: `${t('navbar:concert_02_href')}`,
      preview: `${t('navbar:concert_02_preview')}`,
      imageUrl:
        'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653686310/M%C3%A1laga%20Cl%C3%A1sica/blog-2_d8miok.webp',
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
    <Popover className="relative bg-pink3_2024">
      <div
        className="absolute inset-0 z-30 shadow-none pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-20">
        <div className="flex items-center justify-between px-2 py-5 mx-auto max-w-7xl sm:px-4 sm:py-4 lg:px-8 md:justify-start md:space-x-8">
          <Link href="/" passHref>
            <a className="flex items-center">
              <span className="sr-only">Málaga Clásica</span>
              <div className="flex">
                <MalagaclasicaLogo className="w-auto h-5 fill-pinkText2024" />
              </div>
            </a>
          </Link>

          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-600 transition duration-200 ease-in-out rounded-md bg-t hover:text-gray-900 hover:bg-white focus:outline-none focus:ring-0">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex justify-between space-x-10">
              <div className="flex md:space-x-7 lg:space-x-10">
                <Link href="/info" passHref>
                  <a className="">
                    <h4 className="inline italic font-bold capitalize transition duration-200 ease-in-out text-pinkText2024 hover:text-blueGreyDark2024">
                      {t('navbar:link_info')}
                    </h4>
                  </a>
                </Link>
                <Link href="/programa" passHref>
                  <a className="text-base font-normal text-gray-600 uppercase transition duration-200 ease-in-out hover:text-gray-900">
                    <h4 className="inline italic font-bold capitalize transition duration-200 ease-in-out text-pinkText2024 hover:text-blueGreyDark2024">
                      {t('navbar:link_programa')}
                    </h4>
                  </a>
                </Link>
                {/* <Popover>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group bg-blue2024 rounded-none inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-0'
                        )}
                      >
                        <span className="text-base font-normal text-gray-600 uppercase transition duration-200 ease-in-out group-hover:text-gray-900 group">
                          {t('navbar:link_programa')}
                        </span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-600' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-600'
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
                        <Popover.Panel className="absolute inset-x-0 z-10 hidden transform shadow-none md:block top-full">
                          <div className="absolute inset-0 flex">
                            <div className="w-1/2 bg-white" />
                            <div className="w-1/2 bg-blueGrey2024" />
                          </div>
                          <div className="relative grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2">
                            <nav className="grid px-4 py-8 bg-white gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                              <div>
                                <h4 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                  {t('navbar:overview_title')}
                                </h4>
                                <ul role="list" className="mt-5 space-y-6">
                                  {firstConcerts.map((item) => (
                                    <li key={item.name} className="flow-root">
                                      <Popover.Button>
                                        <Link href={item.href} passHref>
                                          <a className="flex items-center p-3 -m-3 text-lg font-medium text-gray-600 rounded-md hover:bg-blue2024/20">
                                            <p
                                              className="flex-shrink-0 w-6 h-auto text-pink2024"
                                              aria-hidden="true"
                                            >
                                              {item.date ? (
                                                item.date
                                              ) : (
                                                <CalendarIcon
                                                  className="w-5 h-auto"
                                                  aria-hidden="true"
                                                />
                                              )}
                                            </p>

                                            
                                            {item.date && (
                                              <span className="ml-4 text-lg text-left text-gray-600">
                                                <h4 className="font-bold">
                                                  {item.name}
                                                </h4>
                                              </span>
                                            )}
                                            {!item.date && (
                                              <span className="ml-4 text-lg text-left underline text-blueGrey2024">
                                                <h4 className="italic font-bold">
                                                  {item.name}
                                                </h4>
                                              </span>
                                            )}
                                          </a>
                                        </Link>
                                      </Popover.Button>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h3 className="text-sm font-medium tracking-wide text-white uppercase opacity-0">
                                  concerts
                                </h3>
                                <ul role="list" className="mt-5 space-y-6">
                                  {lastConcerts.map((item) => (
                                    <li key={item.name} className="flow-root">
                                      <a
                                        href={item.href}
                                        className="flex items-center p-3 -m-3 text-lg font-medium text-gray-900 rounded-md hover:bg-blue2024/20"
                                      >
                                        <p
                                          className="flex-shrink-0 w-6 h-auto text-pink2024"
                                          aria-hidden="true"
                                        >
                                          {item.date}
                                        </p>
                                        <span className="ml-4 text-lg text-left text-gray-600">
                                          <h4 className="font-bold">
                                            {item.name}
                                          </h4>
                                        </span>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </nav>
                            <div className="px-4 py-8 bg-blueGrey2024 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                              <div>
                                <h4 className="text-sm font-medium tracking-wide text-white uppercase">
                                  {t('navbar:from_program')}
                                </h4>
                                <ul role="list" className="mt-6 space-y-6">
                                  {concertPreviews.map((post) => (
                                    <li key={post.id} className="flow-root">
                                      <a
                                        href={post.href}
                                        className="flex p-3 -m-3 rounded-lg hover:bg-white/10"
                                      >
                                        <div className="flex-shrink-0 hidden sm:block">
                                          <div className="object-cover w-32 h-20 overflow-hidden rounded-md">
                                            <Image
                                              width={300}
                                              height={200}
                                              src={post.imageUrl}
                                              alt="Crescendo"
                                              unoptimized={true}
                                            />
                                          </div>
                                        </div>
                                        <div className="flex-1 w-0 sm:ml-8">
                                          <h4 className="text-sm italic text-pink2024">
                                            {post.date}
                                          </h4>
                                          <h4 className="text-xl font-semibold text-white truncate">
                                            {post.name}
                                          </h4>
                                        </div>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="mt-6 text-sm font-medium">
                                <Popover.Button>
                                  <Link href="/programa" passHref>
                                    <a className="transition duration-200 ease-in-out text-pink2024 hover:text-white">
                                      {' '}
                                      {t('navbar:all_concerts')}{' '}
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
                </Popover> */}

                <Link href="/artistas" passHref>
                  <a className="text-base font-normal text-gray-600 uppercase transition duration-200 ease-in-out hover:text-gray-900">
                    <h4 className="inline italic font-bold capitalize transition duration-200 ease-in-out text-pinkText2024 hover:text-blueGreyDark2024">
                      {t('navbar:link_artistas')}
                    </h4>
                  </a>
                </Link>
                <Link href="/talentos" passHref>
                  <a className="text-base font-normal text-gray-600 uppercase transition duration-200 ease-in-out hover:text-gray-900">
                    <h4 className="inline italic font-bold capitalize transition duration-200 ease-in-out text-pinkText2024 hover:text-blueGreyDark2024">
                      {t('navbar:link_talentos')}
                    </h4>
                  </a>
                </Link>
                <Link href="/contactar" passHref>
                  <a className="text-base font-normal text-gray-600 uppercase transition duration-200 ease-in-out hover:text-gray-900">
                    <h4 className="inline italic font-bold capitalize transition duration-200 ease-in-out text-pinkText2024 hover:text-blueGreyDark2024">
                      {t('navbar:link_contactar')}
                    </h4>
                  </a>
                </Link>
              </div>
            </Popover.Group>
            {asPath.includes('PIONEERS') ||
            asPath.includes('PIONEROS') ||
            asPath.includes('!') ||
            asPath.includes('-') ? null : (
              <Language />
            )}
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
          className="absolute inset-x-0 top-0 z-30 p-2 transition origin-top-right transform md:hidden"
        >
          <Popover.Button className="w-full">
            <div className="bg-white divide-y-2 rounded-none shadow ring-1 ring-blueGrey2024 ring-opacity-5 divide-gray-50">
              <div className="px-5 pt-5 pb-6 sm:pb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <Link href="/" passHref>
                      <a className="flex">
                        <span className="sr-only">Málaga Clásica</span>
                        <div className="w-auto h-1/2 md:h-8 sm:h-10">
                          <MalagaclasicaLogo className="w-auto h-6 fill-blueGrey2024" />
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 transition duration-200 ease-in-out bg-white rounded-md text-blueGrey2024 hover:text-white hover:bg-blueGrey2024 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blueGrey2024">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8">
                  <nav>
                    <div className="grid gap-3 pb-6 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                      <button className="flex items-center p-3 -m-3 rounded-lg hover:bg-beigeRevolution/10">
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-xl text-white rounded-md">
                          <p
                            className="flex-shrink-0 w-6 h-6 text-pinkText2024"
                            aria-hidden="true"
                          >
                            EN
                          </p>
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-500 transition duration-200 ease-in-out hover:text-gray-700">
                          <Link
                            activeClassName={locale === 'en'}
                            href={asPath}
                            locale="en"
                          >
                            English
                          </Link>
                        </div>
                      </button>

                      <button className="flex items-center p-3 -m-3 rounded-lg hover:bg-beigeRevolution/10">
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-xl text-gray-100 rounded-md">
                          <p
                            className="flex-shrink-0 w-6 h-6 text-pinkText2024"
                            aria-hidden="true"
                          >
                            ES
                          </p>
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-500 transition duration-200 ease-in-out hover:text-gray-700">
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
                <div className="px-5 py-10 bg-blueText2024">
                  <div className="grid grid-cols-2 gap-6">
                    {mobileLinks.map((link, i) => (
                      <Link key={i} href={link.href} passHref>
                        <a className="text-base font-medium text-white transition duration-200 ease-in-out rounded-md hover:text-blueGrey2024">
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
