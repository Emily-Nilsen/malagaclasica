import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import { motion } from 'framer-motion';
import { CameraIcon } from '@heroicons/react/solid';

export default function Info() {
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
    <Layout>
      <div className="relative bg-white">
        <div className="absolute inset-0">
          <div className="w-full h-full object-cover">
            <Image
              src="/static/crescendo-img-02-feature.webp"
              alt="Málaga Clásica"
              width={1500}
              height={1000}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div
            className="absolute inset-0 bg-blueCrescendo mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-greyCrescendo sm:text-5xl lg:text-6xl">
            Get in touch
          </h1>
          <p className="mt-6 text-xl text-greyCrescendo max-w-3xl">
            Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
            lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
            consectetur. Sit justo viverra non adipisicing elit distinctio.
          </p>
        </div>
      </div>
      <div className="bg-greyCrescendo overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block bg-blueCrescendo opacity-25 absolute top-0 bottom-0 left-3/4 w-screen" />
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <h2 className="text-base text-mossCrescendo font-normal tracking-wide">
                case study
              </h2>
              <h1 className="mt-2 text-4xl md:text-6xl leading-8 font-extrabold text-coalCrescendo sm:text-5xl">
                crescendo
              </h1>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <div className="rounded-lg shadow-none object-cover object-center overflow-hidden">
                      <Image
                        src="/static/crescendo-img-19-blue.webp"
                        alt="Málaga Clásica"
                        width={2228}
                        height={1300}
                        layout="responsive"
                        objectFit="cover"
                        objectPosition="bottom"
                      />
                    </div>
                    <div className="absolute inset-0 bg-blueCrescendo mix-blend-multiply" />
                  </div>
                  <figcaption className="mt-3 flex text-sm text-gray-500">
                    <CameraIcon
                      className="flex-none w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-coalCrescendo opacity-75">
                      Photograph by Marcus O’Leary
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <p className="text-lg text-coalCrescendo opacity-75">
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                  Dictum urna sed consectetur neque tristique pellentesque.
                  Blandit amet, sed aenean erat arcu morbi.
                </p>
              </div>
              <div className="mt-5 prose prose-cyan mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <div className="text-coalCrescendo opacity-75">
                  <p>
                    Sollicitudin tristique eros erat odio sed vitae, consequat
                    turpis elementum. Lorem nibh vel, eget pretium arcu vitae.
                    Eros eu viverra donec ut volutpat donec laoreet quam urna.
                  </p>
                  <p>
                    Bibendum eu nulla feugiat justo, elit adipiscing. Ut
                    tristique sit nisi lorem pulvinar. Urna, laoreet fusce nibh
                    leo. Dictum et et et sit. Faucibus sed non gravida lectus
                    dignissim imperdiet a.
                  </p>
                  <p>
                    Dictum magnis risus phasellus vitae quam morbi. Quis lorem
                    lorem arcu, metus, egestas netus cursus. In.
                  </p>
                  <ul role="list">
                    <li>Quis elit egestas venenatis mattis dignissim.</li>
                    <li>
                      Cras cras lobortis vitae vivamus ultricies facilisis
                      tempus.
                    </li>
                    <li>
                      Orci in sit morbi dignissim metus diam arcu pretium.
                    </li>
                  </ul>
                  <p>
                    Rhoncus nisl, libero egestas diam fermentum dui. At quis
                    tincidunt vel ultricies. Vulputate aliquet velit faucibus
                    semper. Pellentesque in venenatis vestibulum consectetur
                    nibh id. In id ut tempus egestas. Enim sit aliquam nec, a.
                    Morbi enim fermentum lacus in. Viverra.
                  </p>
                </div>
                <h3 className="text-coalCrescendo">How we helped</h3>
                <div className="text-coalCrescendo opacity-75">
                  <p>
                    Tincidunt integer commodo, cursus etiam aliquam neque, et.
                    Consectetur pretium in volutpat, diam. Montes, magna cursus
                    nulla feugiat dignissim id lobortis amet. Laoreet sem est
                    phasellus eu proin massa, lectus. Diam rutrum posuere donec
                    ultricies non morbi. Mi a platea auctor mi.
                  </p>
                  <p>
                    Sagittis scelerisque nulla cursus in enim consectetur quam.
                    Dictum urna sed consectetur neque tristique pellentesque.
                    Blandit amet, sed aenean erat arcu morbi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section Two */}
      <div className="relative bg-white">
        <div className="absolute inset-0">
          <div className="w-full h-full object-cover">
            <Image
              src="/static/crescendo-img-12-blue.webp"
              alt="Málaga Clásica"
              width={1500}
              height={1000}
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div
            className="absolute inset-0 bg-mossCrescendo mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-greyCrescendo sm:text-5xl lg:text-6xl">
            Get in touch
          </h1>
          <p className="mt-6 text-xl text-greyCrescendo max-w-3xl">
            Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
            lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
            consectetur. Sit justo viverra non adipisicing elit distinctio.
          </p>
        </div>
      </div>

      {/* Anna & Jesus */}
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid items-center grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
            <div>
              <div className="border-b border-gray-200 pb-10">
                <h2 className="font-medium text-mossCrescendo">
                  Machined Kettle
                </h2>
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-coalCrescendo sm:text-4xl">
                  Elegant simplicity
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
            </div>

            <div>
              <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-09-main-detail.jpg"
                  alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4 sm:gap-6 sm:mt-6 lg:gap-8 lg:mt-8">
                <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-feature-09-detail-01.jpg"
                    alt="Detail of temperature setting button on kettle bass with digital degree readout."
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-feature-09-detail-02.jpg"
                    alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
                    className="w-full h-full object-center object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
