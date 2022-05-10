import Image from 'next/image';

const stats = [
  { label: 'Founded', value: '2021' },
  { label: 'Employees', value: '5' },
  { label: 'Beta Users', value: '521' },
  { label: 'Raised', value: '$25M' },
];

export default function InfoTalentos() {
  return (
    <div className="relative bg-gray-50 py-16 sm:py-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full bg-blueCrescendo opacity-25 rounded-r-3xl lg:right-72" />
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card*/}
            <div className="relative pt-64 pb-10 rounded-2xl shadow-none overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="/static/echegaray.jpeg"
                alt="Teatro Echegaray"
              />
              <div className="absolute inset-0 bg-blueCrescendo mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-mossCrescendo via-mossCrescendo opacity-90" />
              <div className="relative px-8">
                <blockquote className="mt-8">
                  <footer className="mt-4">
                    <p className="text-lg font-medium text-white">
                      Teatro Echegaray, Málaga
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-coalCrescendo md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-6xl sm:text-5xl text-4xl font-semibold">
              Concerts
            </h2>
            <div className="mt-6 text-mossCrescendo space-y-6">
              <p className="text-lg">
                The approximate duration of each concert is 1 hour.
              </p>
              <p className="text-base leading-7">
                Detailed information about the program and the chosen groups
                will be published one week before the shows.
              </p>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-10">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-t-2 border-gray-100 pt-6"
                >
                  <dt className="text-base font-medium text-coalCrescendo">
                    {stat.label}
                  </dt>
                  <dd className="text-4xl font-semibold tracking-normal text-mossCrescendo">
                    <h2>{stat.value}</h2>
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              <a href="#" className="text-base font-medium text-coalCrescendo">
                {' '}
                Free entry while seats are available{' '}
                <span aria-hidden="true">&rarr;</span>{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
