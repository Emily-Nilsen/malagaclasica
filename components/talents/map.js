import useTranslation from 'next-translate/useTranslation';

function MapTalentos() {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-white">
        <div className="bg-white">
          <div className="px-4 pt-16 mx-auto max-w-7xl sm:pt-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mt-1 text-4xl font-extrabold tracking-tight text-orangeRevolution sm:text-5xl lg:text-6xl">
                {t('talents:map_title')}
              </h1>
              <p className="max-w-xl mx-auto mt-5 text-xl text-gray-600">
                {/* {t('talents:map_subtitle')} */}
              </p>
              {/* Address */}
              {/* <div>
                <dd className="mt-5 text-blueRevolution">
                  <p>{t('talents:map_address_top')}</p>
                  <p>{t('talents:map_address_bottom')}</p>
                </dd>
              </div> */}
            </div>
          </div>
        </div>
        <div className="px-4 pt-6 pb-12">
          <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] w-full mx-auto py-12 relative">
            <div className="relative w-full overflow-hidden rounded-lg">
              <iframe
                className="relative"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.952007840044!2d-1.8820857874480295!3d37.29627123946128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd652b2506cd8fa9%3A0x46ebebe50fa3e44b!2sTeatro%20Echegaray!5e0!3m2!1sen!2sno!4v1681542955717!5m2!1sen!2sno"
                width="100%"
                height={600}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <style>
          {`
    @media (min-width:1024px) {
        .loc{
            left: 200px;
        }
    }
    @media (max-width:380px) {
        .set{
            width: 300px;
            left: 12px;
        }
    }
    `}
        </style>
      </div>
    </>
  );
}

export default MapTalentos;
