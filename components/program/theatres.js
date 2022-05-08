import Image from 'next/image';
import Link from 'next/link';
import CervantesMap from './cervantes-map';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import { ExternalLinkIcon, MailIcon } from '@heroicons/react/solid';

export default function Theatres() {
  const { t } = useTranslation();
  const features = [
    {
      name: 'Sleek design',
      description:
        'The machined kettle has a smooth black finish and contemporary shape that stands apart from most plastic appliances.',
    },
    {
      name: 'Comfort handle',
      description: 'Shaped for steady pours and insulated to prevent burns.',
    },
    {
      name: 'One-button control',
      description:
        'The one button control has a digital readout for setting temperature and turning the kettle on and off.',
    },
    {
      name: 'Long spout',
      description:
        "Designed specifically for controlled pour-overs that don't slash or sputter.",
    },
  ];

  return (
    <section>
      {/* Teatro Cervantes */}
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid items-center grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
            <div>
              <div className="border-b border-gray-200 pb-10">
                <h2 className="font-medium text-mossCrescendo">
                  Machined Kettle
                </h2>
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-coalCrescendo sm:text-4xl">
                  Teatro Cervantes
                </p>
              </div>

              <dl className="mt-10 space-y-10">
                {features.map((feature) => (
                  <div key={feature.name}>
                    <dt className="text-sm font-medium text-coalCrescendo">
                      {feature.name}
                    </dt>
                    <dd className="mt-3 text-sm text-mossCrescendo">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-none text-sm font-medium rounded-md text-white hover:text-mossCrescendo bg-mossCrescendo hover:bg-greyCrescendo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueCrescendo transition duration-200 ease-in-out"
                >
                  <MailIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                  Button text
                </button>
              </div>
            </div>

            <div>
              <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                <div className="w-full h-full object-center object-cover">
                  <Image
                    src="/static/crescendo-img-13-waves.webp"
                    alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                    width={600}
                    height={600}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4 sm:gap-6 sm:mt-6 lg:gap-8 lg:mt-8">
                <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                  <div className="w-full h-full object-center object-cover">
                    <Image
                      src="/static/cervantes.webp"
                      alt="Teatro Cervantes"
                      width={600}
                      height={600}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>

                {/* Google Map */}
                <div className="relative h-0 overflow-hidden shadow-none aspect-w-1 aspect-h-1 rounded-lg">
                  <CervantesMap />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Teatro Echegaray */}
      <div className="bg-greyCrescendo">
        <div className="max-w-2xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid items-center grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
            <div>
              <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                <div className="w-full h-full object-center object-cover">
                  <Image
                    src="/static/crescendo-img-17-waves.webp"
                    alt="Susanne Hals"
                    width={600}
                    height={600}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4 sm:gap-6 sm:mt-6 lg:gap-8 lg:mt-8">
                {/* Google Map */}
                <div className="relative h-0 overflow-hidden shadow-none aspect-w-1 aspect-h-1 rounded-lg">
                  <CervantesMap />
                </div>
                <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                  <div className="w-full h-full object-center object-cover">
                    <Image
                      src="/static/echegaray.webp"
                      alt="Teatro Echegaray"
                      width={600}
                      height={600}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="border-b border-gray-200 pb-10">
                <h2 className="font-medium text-mossCrescendo">
                  Machined Kettle
                </h2>
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-coalCrescendo sm:text-4xl">
                  Teatro Echegaray
                </p>
              </div>

              <dl className="mt-10 space-y-10">
                {features.map((feature) => (
                  <div key={feature.name}>
                    <dt className="text-sm font-medium text-coalCrescendo">
                      {feature.name}
                    </dt>
                    <dd className="mt-3 text-sm text-mossCrescendo">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-none text-sm font-medium rounded-md text-white hover:text-mossCrescendo bg-mossCrescendo hover:bg-greyCrescendo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueCrescendo transition duration-200 ease-in-out"
                >
                  <MailIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                  Button text
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
