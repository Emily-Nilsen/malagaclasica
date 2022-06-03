import useTranslation from 'next-translate/useTranslation';

export default function ProgramTalentos() {
  const { t } = useTranslation();

  const monday = [
    {
      name: `Natalia Jiménez ${t('talents:and')} Federico Cruzado`,
      minutes: `12’`,
      detail: `${t('talents:monday_subtitle_1')}`,
      listItem_1: `${t('talents:monday_li_1')}`,
    },
    {
      name: `Ismael Bonilla ${t('talents:and')} Marcos Castilla`,
      minutes: `8’`,
      detail: `${t('talents:monday_subtitle_2')}`,
      listItem_1: `${t('talents:monday_li_2')}`,
      listItem_2: `${t('talents:monday_li_3')}`,
    },
    {
      name: `Ensemble “Málagaviolínsuzuki”`,
      minutes: `8’`,
      talentName_1: `Sofía Suárez Carrasco`,
      talentName_2: `Alejandra Camacho
      Sánchez`,
      talentName_3: `Marcos Azuaga Ortega`,
      talentName_4: `Nassim Gandía Jensen`,
      talentName_5: `Pau Gálvez Herrán`,
      talentName_6: `Cristina
      Romero Jiménez`,
      talentName_7: `Frida Gandía Jensen`,
      talentName_8: `Aitor Ramírez Ruiz`,
      listItem_1: `${t('talents:monday_li_4')}`,
      listItem_2: `${t('talents:monday_li_5')}`,
      listItem_3: `${t('talents:monday_li_6')}`,
    },
  ];
  const tuesday = [
    {
      name: `Miguel García ${t('talents:and')} Marcos Castilla`,
      minutes: `25’`,
      detail: `${t('talents:tues_subtitle_1')}`,
      listItem_1: `${t('talents:tues_li_1')}`,
    },
    {
      name: `Pablo Antonio Fernández, Paula Alarcón, Carlos Sanfrutos`,
      minutes: `30’`,
      detail: `${t('talents:tues_subtitle_2')}`,
      listItem_1: `${t('talents:tues_li_2')}`,
    },
  ];
  const wednesday = [
    {
      name: `DUOGA`,
      minutes: `10’`,
      detail: `${t('talents:wed_subtitle_1')}`,
      listItem_1: `${t('talents:wed_li_1')}`,
      listItem_2: `${t('talents:wed_li_2')}`,
      listItem_3: `${t('talents:wed_li_3')}`,
    },
    {
      name: `Pablo Antonio Fernández ${t('talents:and')} María del Mar Jurado`,
      minutes: `19’`,
      detail: `${t('talents:wed_subtitle_2')}`,
      listItem_1: `${t('talents:wed_li_4')}`,
    },
  ];
  return (
    <div id="talentosProgram" className="bg-white">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-lg bg-cyan-100 font-semibold tracking-wide uppercase text-cyan-800">
            <h1>{t('talents:noticias')}</h1>
          </span>
          <h1 className="block mt-2 text-5xl font-extrabold leading-none tracking-normal text-center sm:text-6xl text-coalCrescendo">
            {t('talents:program_title')}
          </h1>
          <p className="max-w-xl mx-auto mt-5 text-base sm:text-lg text-mossCrescendo">
            {t('talents:program_subtitle_1')}{' '}
            <span className="font-bold">{t('talents:program_subtitle_2')}</span>
            .
          </p>
        </div>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl pt-20 mx-auto">
            {/* Monday */}
            <div className="pb-5 border-b border-gray-200">
              <h1 className="text-2xl font-semibold leading-6 sm:text-3xl text-coalCrescendo">
                {t('talents:monday')}
              </h1>
            </div>
            <ul role="list" className="divide-y divide-gray-200">
              <dl className="mt-6 space-y-6">
                {monday.map((item, i) => (
                  <li key={i} className="py-4">
                    <div className="relative">
                      <dt>
                        <div className="absolute flex items-start justify-center w-12 h-12 rounded-md bg-t ">
                          <p
                            className="flex-shrink-0 text-2xl font-semibold text-blueCrescendo"
                            aria-hidden="true"
                          >
                            {item.minutes}
                          </p>
                        </div>
                        <p className="ml-16 text-xl font-medium leading-6 text-coalCrescendo">
                          {item.name}
                        </p>
                      </dt>
                      <dd className="mt-2 ml-16 text-lg italic text-gray-500">
                        {item.detail}
                      </dd>
                      {item.talentName_1 ? (
                        <ul className="mt-2 ml-16 text-lg italic text-gray-500 list-none list-inside">
                          <li>{item.talentName_1}</li>
                          <li>{item.talentName_2}</li>
                          <li>{item.talentName_3}</li>
                          <li>{item.talentName_4}</li>
                          <li>{item.talentName_5}</li>
                          <li>{item.talentName_6}</li>
                          <li>{item.talentName_7}</li>
                          <li>{item.talentName_8}</li>
                        </ul>
                      ) : null}
                      <ul
                        role="list"
                        className="mt-3 ml-16 space-y-1 text-base text-mossCrescendo"
                      >
                        <li>{item.listItem_1}</li>
                        <li>{item.listItem_2}</li>
                        <li>{item.listItem_3}</li>
                      </ul>
                    </div>
                  </li>
                ))}
              </dl>
            </ul>
            {/* Tuesday */}
            <div className="pb-5 mt-16 border-b border-gray-200">
              <h1 className="text-2xl font-semibold leading-6 sm:text-3xl text-coalCrescendo">
                {t('talents:tuesday')}
              </h1>
            </div>
            <dl className="mt-6 space-y-6 list-none">
              {tuesday.map((item, i) => (
                <li key={i} className="py-4">
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-start justify-center w-12 h-12 rounded-md bg-t ">
                        <p
                          className="flex-shrink-0 text-2xl font-semibold text-blueCrescendo"
                          aria-hidden="true"
                        >
                          {item.minutes}
                        </p>
                      </div>
                      <p className="ml-16 text-xl font-medium leading-6 text-coalCrescendo">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-lg italic text-gray-500">
                      {item.detail}
                    </dd>

                    <ul
                      role="list"
                      className="mt-3 ml-16 space-y-1 text-base text-mossCrescendo"
                    >
                      <li>{item.listItem_1}</li>
                    </ul>
                  </div>
                </li>
              ))}
            </dl>
            {/* Wednesday */}
            <div className="pb-5 mt-16 border-b border-gray-200">
              <h1 className="text-2xl font-semibold leading-6 sm:text-3xl text-coalCrescendo">
                {t('talents:wednesday')}
              </h1>
            </div>
            <dl className="mt-6 space-y-6 list-none">
              {wednesday.map((item, i) => (
                <li key={i} className="py-4">
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-start justify-center w-12 h-12 rounded-md bg-t">
                        <p
                          className="flex-shrink-0 text-2xl font-semibold text-blueCrescendo"
                          aria-hidden="true"
                        >
                          {item.minutes}
                        </p>
                      </div>
                      <p className="ml-16 text-xl font-medium leading-6 text-coalCrescendo">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-lg italic text-gray-500">
                      {item.detail}
                    </dd>

                    <ul
                      role="list"
                      className="mt-3 ml-16 space-y-1 text-base text-mossCrescendo"
                    >
                      <li>{item.listItem_1}</li>
                      <li>{item.listItem_2}</li>
                      <li>{item.listItem_3}</li>
                    </ul>
                  </div>
                </li>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
