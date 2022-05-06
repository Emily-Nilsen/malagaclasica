import Image from 'next/image';
import Layout from '../components/layout';
import Hero from '../components/home/hero';

export default function Home() {
  return (
    <Layout>
      <div>
        <div className="bg-greyCrescendo">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="grid grid-cols-3 gap-0 lg:max-w-lg max-w-xs sm:max-w-sm mx-auto">
                <div className="col-span-1 flex justify-self-end">
                  <div>
                    <Image
                      width={161}
                      height={53}
                      src="/static/crescendo-grey.svg"
                      alt="Logo Málaga Clásica"
                    />
                  </div>
                </div>
                <div className="col-span-2 flex justify-center items-center">
                  <div>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-normal text-coalCrescendo tracking-wide uppercase">
                      Málaga Clásica
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-fit mx-auto border-y border-coalCrescendo">
                <p className="py-1 px-2 text-xl font-light text-coalCrescendo sm:text-2xl lg:text-3xl">
                  Festival Internacional de Música de Cámara
                </p>
              </div>
              <h3 className="max-w-xl mt-5 mx-auto text-2xl sm:text-3xl lg:text-4xl text-coalCrescendo uppercase">
                X Aniversario
              </h3>
            </div>
          </div>
        </div>
        <Hero />
      </div>
    </Layout>
  );
}
