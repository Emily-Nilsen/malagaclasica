import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      name: 'Info',
      href: '/info',
      imageSrc: '/static/crescendo-img-01-waves.webp',
      imageAlt: 'Festival Málaga Clásica',
    },
    {
      name: 'Programa',
      href: '/programa',
      imageSrc: '/static/crescendo-img-04-waves.webp',
      imageAlt: 'Festival Málaga Clásica',
    },
    {
      name: 'Artistas',
      href: '/artistas',
      imageSrc: '/static/crescendo-img-03-waves.webp',
      imageAlt: 'Festival Málaga Clásica',
    },
    {
      name: 'Talentos',
      href: 'talentos',
      imageSrc: '/static/crescendo-img-06-waves.webp',
      imageAlt: 'Festival Málaga Clásica',
    },
  ];
  return (
    <div>
      <section>
        {/* Feature section */}
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="max-w-3xl">
              <p className="mt-2 text-3xl font-extrabold tracking-tight text-mossCrescendo sm:text-4xl">
                Simple productivity
              </p>
              <p className="mt-4 text-coalCrescendo opacity-75">
                Focus allows you to plan 10 daily tasks, while also thinking
                ahead about what's next. Forget distracting digital apps and
                embrace these small, sturdy pieces of paper.
              </p>
            </div>

            <div className="mt-11 grid items-start grid-cols-1 gap-y-16 gap-x-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
              {features.map((feature) => (
                <Link key={feature.name} href="#" passHref>
                  <div className="flex flex-col-reverse cursor-pointer group">
                    <div className="mt-6">
                      <h3 className="text-base font-medium text-coalCrescendo group-hover:text-greenCrescendo">
                        {feature.name}
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                    <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                      <div className="object-center object-cover hover:brightness-110 transition duration-300 ease-in-out">
                        <Image
                          src={feature.imageSrc}
                          alt={feature.imageAlt}
                          width={1500}
                          height={1000}
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}