import { TicketIcon } from '@heroicons/react/solid';

export default function ContentTalentos() {
  return (
    <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-max lg:max-w-7xl mx-auto">
        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
          <div className="text-base max-w-prose lg:max-w-none">
            <h2 className="leading-6 text-mossCrescendo font-normal text-lg tracking-normal">
              Málaga Clásica
            </h2>
            <h2 className="text-coalCrescendo md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-6xl sm:text-5xl text-4xl font-semibold">
              10th International Chamber Music Festival
            </h2>
          </div>
        </div>
        <div className="relative">
          <div className="relative md:bg-white md:p-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-6">
              <div className="prose prose-lg text-mossCrescendo lg:max-w-none">
                <p>
                  As a chamber music festival, and following one of the main
                  philosophies of the genre, we understand that Málaga Clásica
                  ought to be an event closely tied to and celebrated by the
                  audience and the city of Málaga.
                </p>
                <p>
                  As such, we aim for a reciprocal relationship where all
                  parties involved can enjoy the music.
                </p>

                <p>
                  In this tenth edition, we want young talents to participate in
                  the festival, allowing them to perform and share experiences
                  with the invited musicians of international prestige.
                </p>
                <p>
                  The groups of young talents, chosen through a selection
                  process by our artistic directors, will be in charge of
                  performing in the concerts of this series. They will also be
                  the lucky ones to receive the masterclasses scheduled during
                  the festival.
                </p>
              </div>
              <div className="mt-6 prose prose-lg text-mossCrescendo lg:mt-0">
                <p>
                  Tickets are available on invitation on a first-come,
                  first-serve basis (capacity according to regulations) at the
                  box office and Internet (2 per person) from{' '}
                  <span className="font-semibold">
                    {' '}
                    October 27 at 11.00 a.m.
                  </span>
                </p>

                <h2 className="text-coalCrescendo text-4xl font-semibold">
                  Masterclasses
                </h2>
                <p>
                  Festival artists will be teaching masterclasses and will be
                  open to the public.
                </p>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-none text-sm font-medium rounded-md text-white hover:text-coalCrescendo bg-mossCrescendo hover:bg-blueCrescendo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueCrescendo transition duration-200 ease-in-out"
              >
                <TicketIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                Buy tickets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
