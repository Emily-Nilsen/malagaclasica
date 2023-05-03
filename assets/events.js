const events = [
  // Concert 31 May
  {
    id: 1,
    locale: 'en',
    date: `31 May, 2023`,
    price: `regular`,
    title: `NEW PATHS - Opening concert`,
    location: `Echegaray Theatre, 8 p.m.`,
    sentence: [
      `Expressive desire has always been a cause for the development of techniques in the arts. The wish for the representation of natural elements through different mediums, such as painting, sculpture or musical composition has shaped the way in which the mediums are used.`,
      `Such is the case of the composer Biber, who recreates animal-like sounds through the language of the violin and piano (harpsichord originally). P.D.Q. Bach, exploits a caricaturesque way of using the viola, crossing the boundaries from music to humor, and Cowell transforms the piano into a different instrument, extending the techniques used to play it.`,
      `Paganini at once limits a four-stringed instrument to one string, and opens a whole world of expressive possibilities with just that one string, while John Cage calls for contemplation in silence, a revolution in and of itself. Berio explores texture in sounds and rhythm as a painter does with structure, and Bartok incorporates elements of folklore in creative ways, giving room to the work of Kodaly, which melts folklore and sophisticated compositional techniques, creating a whole new organism in the universe of music. `,
    ],
    detailsOne: [
      {
        composer: [`Heinrich Ignaz Franz von Biber (1644-1704)`],
        info: `Sonata representativa in A major, for violin and piano`,
        artists: [`Robert Kowalski violin`, `Julien Quentin piano`],
      },
      {
        composer: [`P.D.Q. Bach (Peter Schickele) (1742-1807)`],
        info: `Sonata for viola 4 hands and piano`,
        artists: [`Laura Romero Alba viola`, `Tomoko Akasaka viola`],
      },
      {
        composer: [`Henry Cowell (1897-1965)`],
        info: `‘Aeolian Harp’, for piano solo`,
        artists: [`Julien Quentin piano`],
      },
      {
        composer: [`Niccolò Paganini (1782-1840)`],
        info: `‘Moses Fantasie’ on the G string, MS 23, arr. for violin and piano`,
        artists: [`Robert Kowalski violin`, `Natalia Kuchaeva piano`],
      },
      {
        composer: [`John Cage (1912-1992)`],
        info: `‘4:33’, for piano solo`,
        artists: [`Julien Quentin piano`],
      },
    ],
    detailsTwo: [
      {
        composer: [`Béla Bartók (1882-1945)`, `Luciano Berio (1925-2003)`],
        info: `Selection of duos for two violins`,
        artists: [`Joanna Wronko violin`, `Anna Margrethe Nilsen violin`],
      },
      {
        composer: [`Zoltán Kodály (1882-1967)`],
        info: `Duo for violin and cello, Op.7`,
        artists: [`Jesus Reina violin`, `Adolfo Gutiérrez cello`],
      },
    ],
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653686310/M%C3%A1laga%20Cl%C3%A1sica/day-1_cdxl2h.webp',
    image_position: `top center`,
  },

  // Concert 01 June
  {
    id: 2,
    locale: 'en',
    date: `01 June, 2023`,
    price: `regular`,
    title: `REVOLUTION OF THE PEOPLE`,
    location: `Echegaray Theatre, 8 p.m.`,
    sentence: [
      `A work of art originates from such a powerful place, that its force and drive can truly move mountains. The way that artwork resonates with people can ignite the spark of a revolution which has long been growing within their hearts.`,
      `Auber’s work did just that, being the only known opera to have directly caused such a social riot, leading to the Belgian revolution.`,
      `The rest of the program presents the unity that music can bring, and the way that different people and nations have expressed idealism, change and triumph through the power of music. `,
    ],
    detailsOne: [
      {
        composer: [`Frederic Rzewski (1938-2021)`],
        info: `Theme from ‘The People United Will Never Be Defeated’, for piano solo`,
        artists: [`Natalia Kuchaeva piano`],
      },
      {
        composer: [`Daniel Auber (1782-1871)`],
        info: `‘Du pauvre seul ami fidèle’ from the opera La muda de Portici, for tenor and piano`,
        artists: [`Nils Georg Nilsen tenor`, `Natalia Kuchaeva piano`],
      },
      {
        composer: [`Francis Poulenc (1899-1963)`],
        info: `‘Ave Maria’ from the opera Diálogos de carmelitas, for soprano and piano`,
        artists: [`Susanne Hvinden Hals soprano`, `Natalia Kuchaeva piano`],
      },
      {
        composer: [`Francis Poulenc (1899-1963)`],
        info: `Sonata for violin and piano, FP119`,
        artists: [`Robert Kowalski violin`, `Julien Quentin piano`],
      },
      {
        composer: [`Henri Vieuxtemps (1820-1881)`],
        info: `‘Souvenir d’Amerique’, Variations on ‘Yankee Doodle’, for violin and piano`,
        artists: [`Joanna Wronko violin`, `Natalia Kuchaeva piano`],
      },
    ],
    detailsTwo: [
      {
        composer: [`Dmitri Shostakovich (1906-1975)`],
        info: `String quartet No. 8 in C minor, Op.110`,
        artists: [
          `Robert Kowalski violin`,
          `Joanna Wronko violin`,
          `Laura Romero Alba viola`,
          `Øyvind Gimse cello`,
        ],
      },
      {
        composer: [`Claude-Michel Schönberg (1944-)`, `Alain Boublil (1941-)`],
        info: `Selection of songs from the musical Los miserables:`,
        songs: [
          `‘I Dreamed a Dream’, for soprano and piano`,
          `‘Bring Him Home’, for tenor and piano`,
          `‘Do You Hear the People Sing?’, ensemble and piano`,
        ],
        artists: [
          `Susanne Hvinden Hals soprano`,
          `Nils Georg Nilsen tenor`,
          `Julien Quentin piano`,
        ],
      },
    ],
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653686310/M%C3%A1laga%20Cl%C3%A1sica/day-2_jlqsfq.webp',
    image_position: `top center`,
  },

  // Concert 02 June
  {
    id: 3,
    locale: 'en',
    date: `02 June, 2023`,
    price: `regular`,
    title: `SCANDAL!`,
    location: `Echegaray Theatre, 8 p.m.`,
    sentence: [
      `According to the painter Kandinsky “every work of art is the offspring of its time”. Taking this as truth, it makes every work of art unique and unrepeatable, as is any given moment. This statement does not tie a work of art however to a given time, as the contents which shape the work are timeless.`,
      `Often enough, the resulting work is not only misunderstood at the time of its inception, but also grossly rejected. Each piece presented in this concert caused an uproar in their respective premieres, their sole existence was conceived as a scandal by the public. The vast time period covered in this concert is very telling that it is not a exception that this occurs, but that this phenomenon is present throughout history.`,
    ],
    detailsOne: [
      {
        composer: [`Ígor Stravinski (1882-1971)`],
        info: `‘The Rite of Spring’, selection of movements, for piano 4 hands`,
        artists: [`Natalia Kuchaeva piano`, `Julien Quentin piano`],
      },
      {
        composer: [`Georges Bizet (1838-1875)`],
        info: `‘Je dis que rien’, from the opera Carmen, for soprano and piano, ‘La fleur que tu m´avais jetée’, from the opera Carmen, for tenor and piano`,
      },
      {
        composer: [`Guiseppe Verdi (1813-1901)`],
        info: `‘Parigi, o cara’ from the opera La traviata, duo for soprano and tenor, with piano`,
        artists: [
          `Susanne Hvinden Hals soprano`,
          `Nils Georg Nilsen tenor`,
          `Natalia Kuchaeva piano`,
        ],
      },
    ],
    detailsTwo: [
      {
        composer: [`George Rochberg (1918-2005)`],
        info: `String quartet No. 3`,
        artists: [
          `Joanna Wronko violin`,
          `Robert Kowalski violin`,
          `Chieh-Fan Yiu viola`,
          `Øyvind Gimse cello`,
        ],
      },
      {
        composer: [`Giacomo Puccini (1858-1924)`],
        info: `‘Addio, fiorito asil’ from the opera Madame Butterfly, for tenor and piano`,
        artists: [`Nils Georg Nilsen tenor`, `Natalia Kuchaeva piano`],
      },
      {
        composer: [`Gioachino Rossini (1792-1868)`],
        info: `‘Una voce poco fa’ from the opera The Barber of Sevilla, for soprano and piano`,
        artists: [`Susanne Hvinden Hals soprano`, `Natalia Kuchaeva piano`],
      },
    ],
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653686311/M%C3%A1laga%20Cl%C3%A1sica/day-3_ot1nh3.webp',
    image_position: `top right`,
  },

  // Concert 03 June
  {
    id: 4,
    locale: 'en',
    date: `03 June, 2023`,
    price: `regular`,
    title: `PIONEERS`,
    location: `Echegaray Theatre, 8 p.m.`,
    sentence: [
      `Arnold Schönberg created a new compositional system in which a work is built from a predetermined set of twelve tones, the twelve notes that form the chromatic scale. This program presents this revolutionary system in the making, through the work of his pupils, Berg and Webern. It then culminates in Schönberg’s more dissonant Phantasy.`,
      `It is interesting to then listen immediately afterwards to Schönberg’s Verklarte Nacht, an earlier work which stretches the limits of tonality. The causes and consequences of this revolutionary writing are complex.`,
      `The shocking aesthetics of the works are the result of a profound artistic search in the midst of a critical time in history, surrounded by violence, war, and the exaltation of a set of values that were corrupting the human soul.`,
    ],
    detailsOne: [
      {
        composer: [`Alban Berg (1885-1935)`],
        info: `Selection of songs from ‘7 Early Songs’, for soprano and piano`,
        artists: [`Susanne Hvinden Hals soprano`, `Julien Quentin piano`],
      },
      {
        composer: [`Arnold Schoenberg (1874-1951)`],
        info: `‘Erwartung’ from 4 Lieder, Op 2. No.1, para tenor y piano
        `,
        artists: [`Nils Georg Nilsen tenor`, `Julien Quentin piano`],
      },
      {
        composer: [`Anton Webern (1883-1945)`],
        info: `Four pieces for violin and piano, Op. 7`,
        artists: [`Joanna Wronko violin`, `Natalia Kuchaeva piano`],
      },
      {
        composer: [`Arnold Schoenberg (1874-1951)`],
        info: `‘Phantasy’, Op.47, for violin and piano`,
        artists: [`Jesus Reina violin`, ` Julien Quentin piano`],
      },
    ],
    detailsTwo: [
      {
        composer: [`Arnold Schoenberg (1874-1951)`],
        info: `‘Verklärte Nacht’, Op.4, for string sextet`,
        artists: [
          `Anna Margrethe Nilsen violin`,
          `Jesus Reina violin`,
          `Chieh-Fan Yiu viola`,
          `Tomoko Akasaka viola`,
          `Adolfo Gutiérrez cello`,
          `Øyvind Gimse cello`,
        ],
      },
    ],
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653686311/M%C3%A1laga%20Cl%C3%A1sica/day-4_uqgq9g.webp',
    image_position: `top right`,
  },

  // Concert 04 June
  {
    id: 5,
    locale: 'en',
    date: `04 June, 2023`,
    price: `regular`,
    title: `THE GREATNESS OF BEETHOVEN`,
    location: `Cervantes Theatre, 7 p.m.`,
    sentence: [
      `Beethoven’s extensive body of work enriched and influenced the symphonic, chamber and instrumental repertoire. The works presented in this program did just that. They also cover two interesting moments in Beethoven’s compositional development. The trio op. 70 takes place in the midst of his middle period, while the quintet op. 29 can be considered the end of his early period.`,
      `Beethoven’s musical life was a revolution in its whole. The world has retained a few of Beethoven staples to showcase the cliche of a creative genius, who with a reckless stroke of the pen, broke all known musical form.`,
      `The process however, was slowly thawed, resembling more the evolution of composition rather than the revolution. 
      Once the combustive creative process of Beethoven caught fire, it took the effect of an expansive wave across time, becoming an inspirational source for the arts for centuries to come.
      `,
    ],
    detailsOne: [
      {
        composer: [`Ludwig van Beethoven (1770-1827)`],
        info: `Piano trio in D major ‘Fantasma’, Op.70, No.1, for violin, cello and piano`,
        artists: [
          `Anna Margrethe Nilsen violin`,
          `Adolfo Gutiérrez cello`,
          `Natalia Kuchaeva piano`,
        ],
      },
    ],
    detailsTwo: [
      {
        composer: [`Ludwig van Beethoven (1770-1827)`],
        info: `String quintet in C major ‘The Storm’, Op. 29`,
        artists: [
          `Jesus Reina violin`,
          `Anna Margrethe Nilsen violin`,
          `Tomoko Akasaka viola`,
          `Chieh-Fan Yiu viola`,
          `Øyvind Gimse cello`,
        ],
      },
    ],
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653686311/M%C3%A1laga%20Cl%C3%A1sica/day-5_uqvxm1.webp',
    image_position: `center`,
  },

  // Conciert0 31 de mayo
  {
    id: 8,
    locale: 'es',
    date: `31 de mayo, 2023`,
    price: `regular`,
    title: `NUEVOS CAMINOS - Concierto de apertura`,
    location: `Teatro Echegaray, 20:00 h.`,
    sentence: [
      `El deseo de expresión ha sido una causa importante en el desarrollo de las técnicas en las artes. El deseo de representar elementos naturales a través de diferentes medios, como la pintura, la escultura o la composición musical ha dado forma a cómo se usan dichos medios.`,
      `Eso ocurre con el compositor Biber que recrea sonidos de animales a través del lenguaje del violin y el piano (clavicordio originalmente). P.D.Q. Bach usa la viola de manera caricaturesca, disolviendo los límites entre música y humor, y Cowell transforma el piano en otro instrumento, extendiendo las técnicas usadas para interpretar sobre él.`,
      `Paganini limita el instrumento (la viola en este caso) a una cuerda, y a la vez, abre un mundo de posibilidades expresivas con sólo esa cuerda, mientras que John Cage llama a la contemplación en silencio, siendo este simple hecho una revolución en sí mismo. Berio explora texturas con sonido y ritmo, como un pintor lo haría con la estructura y Bartok incorpora elementos el folclore en modos creativos, dando lugar a la obra de Kodaly, que funde el folclore con técnicas compositivas sofisticadas, creando un nuevo organismo en el mundo de la música. `,
    ],
    detailsOne: [
      {
        composer: [`Heinrich Ignaz Franz von Biber (1644-1704)`],
        info: `Sonata representativa en La mayor, para violín y piano`,
        artists: [`Robert Kowalski violín`, `Julien Quentin piano`],
      },
      {
        composer: [`P.D.Q. Bach (Peter Schickele) (1742-1807)`],
        info: `Sonata para viola a 4 manos y piano`,
        artists: [`Laura Romero Alba viola`, `Tomoko Akasaka viola`],
      },
      {
        composer: [`Henry Cowell (1897-1965)`],
        info: `‘Aeolian Harp’, para piano solo`,
        artists: [`Julien Quentin piano`],
      },
      {
        composer: [`Niccolò Paganini (1782-1840)`],
        info: `‘Fantasia de Moises’ en la cuerda Sol, MS 23, arr. para violín y piano`,
        artists: [`Robert Kowalski violín`, `Natalia Kuchaeva piano`],
      },
      {
        composer: [`John Cage (1912-1992)`],
        info: `‘4:33’, para piano solo`,
        artists: [`Julien Quentin piano`],
      },
    ],
    detailsTwo: [
      {
        composer: [`Béla Bartók (1882-1945)`, `Luciano Berio (1925-2003)`],
        info: `Selección de dúos para dos violines`,
        artists: [`Joanna Wronko violín`, `Anna Margrethe Nilsen violín`],
      },
      {
        composer: [`Zoltán Kodály (1882-1967)`],
        info: `Dúo para violín y violonchelo, Op.7`,
        artists: [`Jesus Reina violín`, `Adolfo Gutiérrez violonchelo`],
      },
    ],
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653686310/M%C3%A1laga%20Cl%C3%A1sica/day-1_cdxl2h.webp',
    image_position: `top center`,
  },

  // Conciert0 01 de junio
  {
    id: 9,
    locale: 'es',
    date: `01 de junio, 2023`,
    price: `regular`,
    title: `REVOLUCION POPULAR`,
    location: `Teatro Echegaray, 20:00 h.`,
    sentence: [
      `Una obra de arte procede de un lugar tan poderoso, que su fuerza y empuje puede verdaderamente mover montañas. La manera en la que las obras de arte resuenan con la gente puede encender la chispa de una revolución que haya estado creciendo en el corazón de las personas.`,
      `La obra de Auber hizo justo eso, siendo la única ópera (que se sepa) que haya causado directamente una revuelta social, dando pie a la revolución belga.`,
      `El resto del programa presenta la unión que puede traer la música, y la manera en la que diferentes pueblos y naciones han expresado su idealismo, cambio y triunfo a través del poder de la música. `,
    ],
    detailsOne: [
      {
        composer: [`Frederic Rzewski (1938-2021)`],
        info: `Tema de ‘The People United Will Never Be Defeated’, para piano solo`,
        artists: [`Natalia Kuchaeva piano`],
      },
      {
        composer: [`Daniel Auber (1782-1871)`],
        info: `‘Du pauvre seul ami fidèle’ de la opera La muda de Portici, para tenor y piano`,
        artists: [`Nils Georg Nilsen tenor`, `Natalia Kuchaeva piano`],
      },
      {
        composer: [`Francis Poulenc (1899-1963)`],
        info: `‘Ave Maria’ de la opera Diálogos de carmelitas, para soprano y piano`,
        artists: [`Susanne Hvinden Hals soprano`, `Natalia Kuchaeva piano`],
      },
      {
        composer: [`Francis Poulenc (1899-1963)`],
        info: `Sonata para violín and piano, FP119`,
        artists: [`Robert Kowalski violín`, `Julien Quentin piano`],
      },
      {
        composer: [`Henri Vieuxtemps (1820-1881)`],
        info: `‘Souvenir d’Amerique’, Variaciones sobre ‘Yankee Doodle’, para violín y piano`,
        artists: [`Joanna Wronko violín`, `Natalia Kuchaeva piano`],
      },
    ],
    detailsTwo: [
      {
        composer: [`Dmitri Shostakovich (1906-1975)`],
        info: `Quarteto de cuerda No. 8 en Do menor, Op.110`,
        artists: [
          `Robert Kowalski violín`,
          `Joanna Wronko violín`,
          `Laura Romero Alba viola`,
          `Øyvind Gimse violonchelo`,
        ],
      },
      {
        composer: [`Claude-Michel Schönberg (1944-)`, `Alain Boublil (1941-)`],
        info: `Selección de canciones del musical Los miserables:`,
        songs: [
          `‘I Dreamed a Dream’, para soprano y piano`,
          `‘Bring Him Home’, para tenor y piano`,
          `‘Do You Hear the People Sing?’, ensemble y piano`,
        ],
        artists: [
          `Susanne Hvinden Hals soprano`,
          `Nils Georg Nilsen tenor`,
          `Julien Quentin piano`,
        ],
      },
    ],
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653686310/M%C3%A1laga%20Cl%C3%A1sica/day-2_jlqsfq.webp',
    image_position: `top center`,
  },

  // Conciert0 02 de junio
  {
    id: 10,
    locale: 'es',
    date: `02 de junio, 2023`,
    price: `regular`,
    title: `¡ESCÁNDALO!`,
    location: `Teatro Echegaray, 20:00 h.`,
    sentence: [
      `Según el pintor Kandinsky ‘cada obra de arte es hijo de su tiempo’. Dar esta afirmación por verdad hace de cada obra de arte algo único e irrepetible, como lo es cada momento. Esto no quiere decir que la obra de arte esté atada a un tiempo, ya que el contenido que le da forma es atemporal.`,
      `A menudo, la obra resultante no es sólo malentendida en el tiempo de su creación, sino brutalmente rechazada. Cada pieza presentada en este concierto causó revueltas en sus estrenos, siendo su existencia percibida como un escándalo para el público. El amplio espacio temporal cubierto en este programa muestra con no es una excepción que esto ocurra, sino más bien un fenómeno que está presente a lo largo de la historia.`,
    ],
    detailsOne: [
      {
        composer: [`Ígor Stravinski (1882-1971)`],
        info: `La Consagración de la Primavera’, selección de movimientos, para piano a 4 manos`,
        artists: [`Natalia Kuchaeva piano`, `Julien Quentin piano`],
      },
      {
        composer: [`Georges Bizet (1838-1875)`],
        info: `‘Je dis que rien’, de la opera Carmen, para soprano y piano, ‘La fleur que tu m´avais jetée’, de la opera Carmen, para tenor y piano`,
      },
      {
        composer: [`Guiseppe Verdi (1813-1901)`],
        info: `‘Parigi, o cara’ de la opera La traviata, dúo para soprano y tenor, con piano`,
        artists: [
          `Susanne Hvinden Hals soprano`,
          `Nils Georg Nilsen tenor`,
          `Natalia Kuchaeva piano`,
        ],
      },
    ],
    detailsTwo: [
      {
        composer: [`George Rochberg (1918-2005)`],
        info: `Cuarteto de cuerda No. 3`,
        artists: [
          `Joanna Wronko violín`,
          `Robert Kowalski violín`,
          `Chieh-Fan Yiu viola`,
          `Øyvind Gimse violonchelo`,
        ],
      },
      {
        composer: [`Giacomo Puccini (1858-1924)`],
        info: `‘Addio, fiorito asil’ de la opera Madama Butterfly, para tenor y piano`,
        artists: [`Nils Georg Nilsen tenor`, `Natalia Kuchaeva piano`],
      },
      {
        composer: [`Gioachino Rossini (1792-1868)`],
        info: `‘Una voce poco fa’ de la opera El barbero de Sevilla, para soprano y piano`,
        artists: [`Susanne Hvinden Hals soprano`, `Natalia Kuchaeva piano`],
      },
    ],
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653686311/M%C3%A1laga%20Cl%C3%A1sica/day-3_ot1nh3.webp',
    image_position: `top right`,
  },

  // Conciert0 03 de junio
  {
    id: 11,
    locale: 'es',
    date: `03 de junio, 2023`,
    price: `regular`,
    title: `PIONEROS`,
    location: `Teatro Echegaray, 20:00 h.`,
    sentence: [
      `Arnold Schönberg creó un nuevo sistema de composición en el que una obra se desarrolla a partir de doce tonos predeterminados, las doce notas que forman la escala cromática. Este programa muestra al revolucionario sistema gestándose, a través de la obra de los pupilos de Schönberg, Berg y Webern. Culmina esta gestación con la disonante Phantasy de Schönberg.`,
      `Es interesante escuchar inmediatamente después Noche transfigurada, una obra más temprana que estira los límites de la tonalidad. Las causas y consecuencias de este modo de componer son complejas.`,
      `La estética chocante de las obras son el resultado de una búsqueda artística profunda en medio de unos momentos críticos en la historia, rodeado de violencia, guerra, y la exaltación de valores que corrompían el alma humana.`,
    ],
    detailsOne: [
      {
        composer: [`Alban Berg (1885-1935)`],
        info: `Selección de canciones de ‘7 canciones tempranas’, para soprano y piano`,
        artists: [`Susanne Hvinden Hals soprano`, `Julien Quentin piano`],
      },
      {
        composer: [`Arnold Schoenberg (1874-1951)`],
        info: `‘Erwartung’ de 4 Canciones, Op 2. No.1, para tenor y piano`,
        artists: [`Nils Georg Nilsen tenor`, `Julien Quentin piano`],
      },
      {
        composer: [`Anton Webern (1883-1945)`],
        info: `Cuatro obras para violín y piano, Op. 7`,
        artists: [`Joanna Wronko violín`, `Natalia Kuchaeva piano`],
      },
      {
        composer: [`Arnold Schoenberg (1874-1951)`],
        info: `‘Fantasía’, Op.47, para violín y piano`,
        artists: [`Jesus Reina violín`, ` Julien Quentin piano`],
      },
    ],
    detailsTwo: [
      {
        composer: [`Arnold Schoenberg (1874-1951)`],
        info: `‘Noche transfigurada’, Op.4, para sexteto de cuerda`,
        artists: [
          `Anna Margrethe Nilsen violín`,
          `Jesus Reina violín`,
          `Chieh-Fan Yiu viola`,
          `Tomoko Akasaka viola`,
          `Adolfo Gutiérrez violonchelo`,
          `Øyvind Gimse violonchelo`,
        ],
      },
    ],
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653686311/M%C3%A1laga%20Cl%C3%A1sica/day-4_uqgq9g.webp',
    image_position: `top right`,
  },

  // Conciert0 04 de junio
  {
    id: 12,
    locale: 'es',
    date: `04 de junio, 2023`,
    price: `regular`,
    title: `LA GRANDEZA DE BEETHOVEN`,
    location: `Teatro Cervantes, 19:00 h.`,
    sentence: [
      `El extenso catálogo de la obra de Beethoven ha enriquecido e influido el repertorio sinfónico, camerístico e instrumental. Las obras presentadas en este programa además, vienen de dos momentos interesantes en el desarrollo compositivo de Beethoven. El trio op. 70 está ubicado en el periodo medio mientras que el quinteto op. 29 es la última obra de su primer periodo. `,
      `La vida musical de Beethoven fue una revolución vista desde su plenitud. El mundo ha mantenido vigente algunos éxitos de Beethoven a través de los cuales se muestra la imagen cliché de un genio creativo, quien de un plumazo rompió toda forma musical existente.`,
      `El proceso sin embargo fue cocinado a fuego lento, más parecido a una evolución que una revolución, hasta que su llama creativa se avivo y causó una onda expansiva a través del tiempo, convirtiéndose en una fuente de inspiración para las artes durante los siglos venideros.
      `,
    ],
    detailsOne: [
      {
        composer: [`Ludwig van Beethoven (1770-1827)`],
        info: `Trío en Re mayor ‘Fantasma’, Op.70, No.1, para violín, violonchelo y piano`,
        artists: [
          `Anna Margrethe Nilsen violín`,
          `Adolfo Gutiérrez violonchelo`,
          `Natalia Kuchaeva piano`,
        ],
      },
    ],
    detailsTwo: [
      {
        composer: [`Ludwig van Beethoven (1770-1827)`],
        info: `Quinteto de cuerda en Do mayor ‘La tormenta’, Op. 29`,
        artists: [
          `Jesus Reina violín`,
          `Anna Margrethe Nilsen violín`,
          `Tomoko Akasaka viola`,
          `Chieh-Fan Yiu viola`,
          `Øyvind Gimse violonchelo`,
        ],
      },
    ],
    image:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/v1653686311/M%C3%A1laga%20Cl%C3%A1sica/day-5_uqvxm1.webp',
    image_position: `center`,
  },
];

export default events;
