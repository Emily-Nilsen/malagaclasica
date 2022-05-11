const artists = [
  // Jesús Reina
  {
    locale: `es`,
    name: `Jesús Reina`,
    slug_name: `Jesús Reina ES`,
    instrument: `Dirección Artística, violín`,
    para_1: `Más allá de su virtuosismo y su total dominio del instrumento, el violinista malagueño Jesús Reina es ensalzado por la crítica gracias a su “personalidad radiante y llena de alma” —John Rockwell, su “frescura y espontaneidad desbordante”, y la “belleza de su sonido caracterizado por una verdadera musicalidad, temperamento y carisma” —El País, con el que conquistó al público desde su infancia.`,
    para_2: `Jesús se inició en el violín de la mano de su abuelo José Reina en el ámbito de la música folclórica y su talento llamó muy pronto la atención de grandes maestros. A los 8 años fue invitado a estudiar con Yehudi Menuhin y Natasha Boyarskaya en la Yehudi Menuhin School. A los 10 años ingresó en la Escuela Reina Sofía bajo la tutela de José Luis García Asensio. Dos años más tarde fue becado en la Indiana University para estudiar con Mauricio Fuks y a los 15 años entró en la Manhattan School of Music de Nueva York como alumno de Patinka Kopec y Pinchas Zukerman.`,
    para_3: `Se ha presentado en grandes salas como el Wigmore Hall y el Royal Festival Hall de Londres, el Carnegie Hall de Nueva York, el National Arts Centre de Ottawa, la Filarmónica de San Petersburgo, el Auditorio Nacional de Madrid o el Palau de la Música de Barcelona y en festivales internacionales como el Miami Piano Festival o el Music@Menlo de California, así como en algunas de las programaciones más importantes españolas como el Auditorio de Zaragoza, el Festival del Escorial, el Festival Musika-Música de Bilbao y la Sociedad de Conciertos de Alicante.`,
    para_4: `Entre las orquestas con las que ha compartido escenario se encuentran la Orquesta Filarmónica del Teatro Mariinsky, la Orquesta de Cámara de Munich, la Orquesta de Baja California, la Orquesta Sinfónica de Yucatán, la Sinfónica de Barcelona, la Filarmónica de Málaga, la Sinfónica de Murcia o la Sinfónica del Principado de Asturias, invitado por directores como Valery Gergiev, Pinchas Zukerman, Manuel Hernández Silva, Virginia Martínez, Juan Carlos Lomónaco, Sebastian Hamman, Eiji Oue o Ari Rasilainen.`,
    para_5: `Su entusiasmo por la música de cámara le ha llevado a unirse a otros músicos como el violinista Guy Braunstein, el violista Paul Neubauer, los pianistas Judith Jáuregui y Josu de Solaun o los violonchelistas Øyvind Gimse, Amanda Forsyth y Kyril Slotnikov.`,
    para_6: `Recientemente destacan invitaciones de la Orquesta Filarmónica de Málaga, la Orquesta de Córdoba y la Orquesta Sinfónica del Principado de Asturias, con la que actuó en la celebración de los Premios Princesa de Asturias rindiendo homenaje a los galardonados Ennio Morricone y John Williams. También participó en la Sociedad Filarmónica de Valencia y la Quincena Musical de San Sebastián, en un recital con gran acogida de público y crítica. Próximamente tiene compromisos en la temporada de cámara de Getxo, el concierto 15 aniversario de la Camerata Gala, la temporada de cámara de la Filarmónica de Málaga y la grabación de los conciertos de Bruch y Mendelssohn con la Filarmónica de Malta y el director Oliver Díaz para el sello Aria Classics.`,
    para_7: `Artista inquieto y de energía emprendedora, Jesús regresó para establecerse en su ciudad natal y cofundar el Festival Málaga Clásica, junto a la violinista Anna Nilsen. Como codirector artístico, acaba de realizar su novena edición, reuniendo a algunos de los mejores músicos internacionales en encuentros camerísticos. Paralelamente es cofundador de la Academia Galamian, un centro de alta especialización musical. Su labor y compromiso con la ciudad le han valido la Medalla de Honor de Málaga y el Premio Puerta de Andalucía, reconocimiento otorgado a personas, entidades e instituciones que resaltan los valores andaluces por el mundo.`,
    para_8: `Aparece semanalmente en el exito televisivo de Canal Sur, “Tierra de Talento”, conducido por el humorista Manu Sánchez. Además de ejercer la labor de jurado del programa, también ha colaborado con grandes artistas de diversos géneros musicales, como José Mercé, María Villalón, Mariola Cantarero, India Martínez, Pasión Vega, El Kanka y Ale Romero.`,
    image: `/static/jesus-reina.webp`,
    image_position: `top`,
  },

  // Anna Nilsen
  {
    locale: `es`,
    name: `Anna Nilsen`,
    slug_name: `Anna Nilsen ES`,
    instrument: `Dirección Artística, violín`,
    para_1: `Anna Margrethe Nilsen ha sido elogiada por su “virtuosismo, expresividad y una acertadísima convergencia de líneas interpretativas sensibles junto a un exquisito trato melódico” (Revista “Ritmo”).`,
    para_2: `A la edad de nueve años hizo su debut como solista con la Orquesta de Radiotelevisión de Noruega, y luego fue invitada a actuar como solista con la Orquesta Filarmónica de Bergen, la Orquesta de Cámara de Kaliningrado, la Orquesta Sinfónica de Murcia, la Orquesta Sinfónica de Trondheim, la Orquesta Sinfónica de Kristiansand, las Orquestas Sinfónicas de Asker y Bærum, Orquesta de Cámara de Novgorod, Orquesta de Ópera de Noruega, Orquesta de Cámara de Galicia, la Orquesta Filarmónica Manhattan School of Music, Orquesta Sinfónica Estatal de San Petersburgo y Orquesta de Cámara Estatal de Bielorrusia.`,
    para_3: `Ha actuado por toda Europa, en Asia, Norteamérica y Sudamérica, en prestigiosos escenarios como Wiener Konzerthaus, Oslo Concert Hall, Carnegie Hall, Grieg Hall de Bergen, Teatro Cervantes de Málaga, Leon Auditorio, St. Petersburg Philharmonic Glinka Hall y Teatro de las Condes en Santiago (Chile).`,
    para_4: `Como ávida músico de cámara ha tenido el placer de tocar junto a artistas distinguidos como Lars Anders Tomter, Guy Braunstein, Liza Fershtman, Henri Demarquette, Øyvind Gimse, el American String Quartet, Paul Neubauer, Amanda Forsyth y Pinchas Zukerman, y es una de los violinistas del recién formado Cuarteto Picasso.`,
    para_5: `Como concertino invitada de la Orquesta Santa Cecilia, realizó una gira por España actuando en el Auditorio Nacional de Madrid, Auditorio de Zaragoza y Palau de Valencia, con el director y violinista Julian Rachlin.`,
    para_6: `Comenzó a tocar el violín a la edad de 4 años y ha estudiado con el profesor Isaac Schuldman, obtuvo una Bachelor y Master de Música en la Manhattan School of Music en Nueva York, estudiando con Patinka Kopec y Pinchas Zukerman, como parte del “The Pinchas Zukerman Performance Program”.`,
    para_7: `Nilsen es ganadora de los concursos Sparre Olsen (Noruega), Eisenberg-Fried (Nueva York), Lillian Fuchs (Nueva York) y Nacional de Violín para Jóvenes Noruegos, y ha recibido el Premio Dobloug, el Premio Hugo Kortschak y la Medalla de Honor de Málaga. Destacados recientes y futuros incluyen actuaciones como solista con la Orquesta de la Universidad Nacional de Santiago (Chile), la Orquesta Sinfónica de Murcia, la Orquesta Juvenil de León, la Orquesta de la Academia Galamian y la Orquesta de Cámara Barratt Due, interpretando conciertos para violín de Tchaikovsky, Brahms, Mendelssohn, Mozart y Vivaldi, recitales y conciertos de música de cámara con Pinchas Zukerman en Nueva York, en el Festival Internacional de Piano de Miami en Florida, el Festival de Música MurciArt en Murcia (España), el festival Podium en Haugesund (Noruega), y grabaciones en CD para el sello Aria Classics, de las sonatas completas de Busoni y Brahms, junto a los pianistas Josu de Solaun y Oscar Martín.`,
    para_8: `Es cofundadora y profesora de violín en la Academia Internacional Galamian y cofundadora y directora del festival Málaga Clásica.`,
    image: `/static/anna-nilsen.webp`,
    image_position: `center`,
  },

  // Alissa Margulis
  {
    locale: `es`,
    name: `Alissa Margulis`,
    slug_name: `Alissa Margulis ES`,
    instrument: `violín`,
    para_1: `Alissa Margulis es apreciada por sus actuaciones emotivas y expresivas. Nació en Alemania en una familia rusa de músicos y estudió con Zakhar Bron, Augustin Dumay y Pavel Vernikov. Ha tocado con numerosas orquestas reconocidas, incluida la English Chamber Orchestra, Orchestre National d'Ile de France, New Russia Orchestra y Orchestra Sinfonica di Milano Giuseppe Verdi.`,
    para_2: `Actúa frecuentemente en salas de conciertos importantes como la Filarmónica de Berlín, el Carnegie Hall, el Palacio de Bellas Artes en la Ciudad de México y la Filarmónica de San Petersburgo. Ha ganado numerosos premios en concursos internacionales de violín y fue galardonada con el premio "Pro Europa" de la Fundación Cultural Europea.`,
    para_3: `Además de su carrera como solista, es una entusiasta de música de cámara y ha colaborado con artistas como Martha Argerich, Yuri Bashmet, Ivry Gitlis, Gidon Kremer y Mischa Maisky. La virtuosa ha lanzado más de una docena de CD con sellos de renombre como EMI Classics, Novalis y Avanti Classic.`,
    image: `/static/alissa-margulis.webp`,
    image_position: `center`,
  },

  // Alexander Sitkovetsky
  {
    locale: `es`,
    name: `Alexander Sitkovetsky`,
    slug_name: `Alexander Sitkovetsky ES`,
    instrument: `violín`,
    para_1: `El violinista Alexander Sitkovetsky, nacido en Moscú, hizo su debut a la edad de ocho años y luego se mudó al Reino Unido para estudiar en la Escuela Menuhin. La temporada pasada debutó en el Musikverein de Viena con la Tonkünstler Orchestre, volvió a visitar Anima Musicae Budapest y Russian Philharmonic Novosibirsk y se presentó con el Sitkovetsky Trio en festivales de España, Finlandia, Dinamarca, Suiza y Alemania.`,
    para_2: `Recientemente actuó con la Sinfónica de Yomiuri Nippon, la Sinfónica de Tokio, la Filarmónica Real, la Konzerthaus Orchester de Berlín, la Sinfónica Escocesa de la BBC, la Filarmónica de los Países Bajos, la Sinfónica de Tokio, la Sinfónica de Moscú y San Petersburgo, la Orquesta Filarmónica de Bolivia, la Orquesta Nacional de Gales de la BBC, la Filarmónica de Londres y la Orquesta Filarmónica. Dirige y actúa como solista regularmente con orquestas de cámara, incluidas la Australian Chamber Orchestra, Norwegian Chamber Orchestra, Amsterdam Sinfonietta, London Mozart Players, New York Chamber Players, Camerata Zurich y Romanian Sinfonietta.`,
    para_3: `Es miembro fundador del Sitkovetsky Trio, que se presenta regularmente en Europa, Asia y las Américas. El cuarto disco del trío para BIS Records, Ravel's Piano Trio y Saint-Saëns's Second Trio, fue lanzado con gran éxito de crítica en julio de 2021. Sitkovetsky es alumno del Programa Bowers de CMS y toca el violín 'Parera' Antonio Stradivari de 1679, amablemente prestado a él a través de la Sociedad Internacional de Violín de Beare por un generoso patrocinador.`,
    image: `/static/alexander-sitkovetsky.webp`,
    image_position: `center`,
  },

  // María del Mar Jurado Jiménez
  {
    locale: `es`,
    name: `María del Mar Jurado Jiménez`,
    slug_name: `María del Mar Jurado Jiménez ES`,
    instrument: `violín`,
    para_1: `Nacida en La Carolina (Jaén) inició en el violín a la edad de siete años. Debutó como solista en el Teatro Nuevo Apolo de Madrid con la Orquesta Camerata Musicalis y el director Edgar Martín y, posteriormente, actuó en el Auditorio Nacional de Madrid con la Orquesta Metropolitana de la capital.`,
    para_2: `Ha participado en festivales como el Festival de Música de la Mancha, Festival MUSEG en Segovia o el festival Nits de Classics, y recibido clases magistrales con violinistas y músicos de renombre como Mariana Todorova, David Marco, Sergey Teslia, Christoph Schickedanz, Anna Baget, Leticia Moreno, Kirill Zlotnikov, Grigory Kalinovsky, Aitor Hevia, Miguel Colom, Alissa Margulis y Sarah Chang.`,
    para_3: `Ha ganado el Primer Premio Música de Cámara "Visitación Magarzo", Primer Premio II Concurso Jóvenes Intérpretes de Jaén, Segundo Premio de Música de Cámara “Lorenzo Palomo “, Primer Premio y Premio Especial a la mejor Intérprete de Cuerda en el 16º Premio "Intercentros Melómano " y Primer Premio Jóvenes Intérpretes Málaga Crea 2021, y sido finalista en el concurso de TV “Tierra de Talento”.`,
    para_4: `Es actualmente alumna activa de la Academia de Estudios Orquestales Baremboim Said, compatibilizando estos estudios con su formación en la Academia Internacional Galamian y el Conservatorio Superior de Música de Málaga.`,
    image: `/static/maria-jimenez.webp`,
    image_position: `top`,
  },

  // Rumen Cvetkov
  {
    locale: `es`,
    name: `Rumen Cvetkov`,
    slug_name: `Rumen Cvetkov ES`,
    instrument: `viola`,
    para_1: `Ha actuado en importantes escenarios como el Berliner Filharmoniker Hall, Carnegie Hall, Wigmore Hall, Walt Disney Hall, Palacio de Bellas Artes de Ciudad de México, y ha colaborado con músicos como Ida Haendel, Ber- nard Greenhouse, Mihail Muntian, sir Harold Martina, José Feghali, Christian Tetzlaff o Vladimir Mendelssohn, y los miembros de los cuartetos Borromeo, Kronos, Aviv, Jerusalem y Verdi.`,
    para_2: `En 2012, el maestro Zubin Mehta le invitó a ser el nuevo solista de viola del Palau de Les Arts Reina Sofia de Valencia. En 2019 editó su primer CD con sonatas de Brahms junto con el pianista Ludmil Angelov.`,
    para_3: `Es profesor de Viola en el Conservatorio de Tilburg (Países Bajos) y en la New Bulgarian University (Sofía, Bulgaria), fundador del ensemble Solistas Mediterráneos, y es cofundador y codirector artístico del MurciArt Music Festival.`,
    image: `/static/rumen-cvetkov.webp`,
    image_position: `center`,
  },

  // Tomoko Akasaka
  {
    locale: `es`,
    name: `Tomoko Akasaka`,
    slug_name: `Tomoko Akasaka ES`,
    instrument: `viola`,
    para_1: `Tomoko Akasaka es valorada por su extraordinario carisma y presencia escénica. Ganó el “Concurso de Música Clásica de Japón y tercer premio en el Concurso Internacional ARD, apareciendo como solista con orquestas como Sinfónica de la Radio de Bavaria, de Cámara de Munich, Kremerata Báltica, Chambre Genève, Ensemble Contrechamps, FIlarmonica Banatul Timisoara, Sinfónica de Venezuela y de Cámara de Japón con directores como ara, Venezuelan Symphony Orchestra and Japan Chamber Orchestra under conductors such as Seiji Ozawa, Johannes Kalitzke, Rüdiger Bohn, Gheorghe Costin, Olivier Cuendet, Roman Kofman y Günther Herbig.`,
    para_2: `Entre los músicos con quienes colabora Tomoko se encuentran Gidon Kremer, Yuri Bashmet, Daniel Hope, Juliane Banse, Heinz Holliger, Menahem Pressler, Julian Steckel, Andreas Ottensamer, Daishin Kashimoto y el Kuss Quartet , realizando conciertos en Lockenhaus, Salzburg Festival, Pablo Casals Festival, Verbier, Lucerne, Kissinger Sommer, San Francisco Musical Days, Olivier Messiaen Festival, Zagreb Chamber Music Festival, Kronberg Cello Festival, Alba Music Festival y Schubertiade.`,
    para_3: `Tomoko Akasaka también ha actuado en el Concertgebouw Amsterdam, Tonhalle Zurich, Mozarteum Salzburg, Victoria Hall London, Grand Theater Geneva, Konzerthaus y Philharmonie Berlin, Elmau Castle, Suntory Hall Tokyo y Nymphenburg Castle Munich.`,
    para_4: `Empezó a tocar el violín con cinco años y atendió la escuela especial de la Universidad de Música de Toho. Tras graduarse, estudió en la Academia Liszt de Budapest. Al poco tiempo cambió a la viola estudió en la Universidad de Toho Tokyo, continuando después en el Conservatorio de Ginebra con Nobuko Imai, siendo además su asistente. También fue profesora invitada en el Conservatorio de Neuchatel. Tomoko se unió al Cuarteto Amaryllis en 2016.`,
    image: `/static/tomoko.webp`,
    image_position: `center`,
  },

  // Razvan Popovici
  {
    locale: `es`,
    name: `Razvan Popovici`,
    slug_name: `Razvan Popovici ES`,
    instrument: `viola`,
    para_1: `El violista rumano Razvan Popovici ha actuado en escenarios prestigiosos, como Théatre-dés-Champs-Elysées (París), Filarmónica de Colonia, Carnegie Hall (Nueva York), Concertgebouw (Ámsterdam), Wigmore Hall (Londres), Suntory Hall (Tokio), Gasteig (Munich), Kennedy Center (Washington) y el Vienna Konzerthaus y Musikverein, Atheneum (Bucarest), Prinzregententheater (Munich), De Singel (Antwerpen), BOZAR (Bruselas), y con orquestas como la Orquesta de Cámara de Colonia, Kamerata Kronstadt, Kobe Chamber Orchestra, Lohja City Orchestra, Transylvania Symphony Orchestra Cluj, Sibiu State Philharmonic, Romanian National Radio Orchestra y George Enescu Philharmonic Bucharest.`,
    para_2: `Como músico de cámara ha colaborado con Natalia Gutman, Shlomo Mintz, Enrico Pace, Giovanni Sollima, Konstantin Lifschitz, Lawrence Power, así como con los cuartetos Szymanowski, Vertavo, Casal, Danel, Kelémen, Glinka o Schumann, miembros del quarteto Amadeus y Ensemble Wien-Berlin, y ha lanzado ocho CDs con el Ensemble Raro, que realiza giras frecuentes por Europa, Japón y América del Norte.`,
    para_3: `Es el Fundador y Director Ejecutivo del Festival Chiemgauer Musikfrühling en Alemania, del Festival SoNoRo en Bucarest y del Festival SoNoRo Arezzo en Toscana, así como Director Artístico de la Serie de Música de Cámara DA CAPO en Bucarest. Enseña regularmente en Villa Musica y es profesor invitado en el Conservatorio Real de Amberes.`,
    para_4: ``,
    image: `/static/razvan-popovici.webp`,
    image_position: `top`,
  },

  // Gabriel Ureña
  {
    locale: `es`,
    name: `Gabriel Ureña`,
    slug_name: `Gabriel Ureña ES`,
    instrument: `violoncelo`,
    para_1: `Gabriel Ureña ha tocado como solista con la London City Orchestra, Oviedo Filarmonía o Arteus Orquesta y en salas internacionales prestigiosas como el Musikverein (Viena), Teatro de los Campos Elíseos (París), Seoul Arts Center, Auditorio Nacional de Música (Madrid), Palau de la Música (Barcelona) o el Teatro de la Maestranza (Sevilla).`,
    para_2: `Ha compartido escenario con artistas como Leo Nucci, Edita Gruberová, Ainhoa Arteta, Ruggero Raimondi, Anna Netrebko, Ilya Gringolts, Benjamin Schmid, las hermanas Labèque, Natalia Gutman o Midori, y ha ganado el Primer Premio del Concurso de Cello de Arquillos (Jaén) y del Concurso Internacional de Música de Cámara "Ciudad de Manresa”.`,
    para_3: `Entre los hitos más recientes de su carrera figuran la publicación de su primer CD, con el sello Aria Classics, con obras de Prokofiev, Shostakovich y Rachmaninov, junto al pianista Patxi Aizpiri, su concierto como solista con la Orquesta Filarmónica de Málaga o su debut con la Orquesta Nacional de Colombia en el Teatro Colón de Bogotá.`,
    image: `/static/gabriel-urena.webp`,
    image_position: `center`,
  },

  // Adolfo Gutiérrez
  {
    locale: `es`,
    name: `Adolfo Gutiérrez`,
    slug_name: `Adolfo Gutiérrez ES`,
    instrument: `violoncelo`,
    para_1: `Adolfo Gutiérrez, ganador del premio Ravel 2012, debutó con la London Symphony Orchestra en el prestigioso ciclo Ibermusica, en Madrid, interpretando el Concierto para violonchelo de Elgar y enseguida fue invitado a actuar con la Royal Philharmonic Orchestra (Charles Dutoit), Orquesta Nacional de España (Ton Koopman) y en el Festival Mendelssohn en la Gewandhaus de Leipzig.`,
    para_2: `Entre sus compromisos caben a destacar actuaciones como solista con la Orquesta Filarmónica de Londres (Vladimir Jurowski), la Orquesta Nacional de España (Krzysztof Penderecki), la Sinfónica de Fort Worth bajo la dirección de Miguel Harth-Bedoya, la Orquesta Sinfónica Nacional de Colombia y actuaciones en el Festival de Ravinia y el Festival de Verano de la Sinfónica de Montreal.`,
    para_3: `Adolfo ha actuado en escenarios importantes como el Concertgebouw de Ámsterdam, el Auditorio Nacional de Música de Madrid, el Ford Theatre de Los Ángeles, l'Auditori y Palau de la Música de Barcelona, ​​la Sala Bulgaria de Sofía o el Palacio Euskalduna de Bilbao, y ha colaborado con directores como como Edward Gardner, José Ramón Encinar, Roberto Minczuk, Pablo González, Anu Tali y Antoni Ros-Marbà.`,
    para_4: `Adolfo ha grabado Barber, Rachmaninov, Piazzolla y el ciclo completo de las suites para violonchelo de J.S. Bach con el sello Verso. Su grabación reciente de las sonatas completas de Beethoven con el pianista Christopher Park ha recibido excelentes críticas. Adolfo toca un Francesco Ruggieri, hecho a mano en Cremona en 1673.`,
    image: `/static/adolfo-gutierrez.webp`,
    image_position: `center`,
  },

  // Natalia Margulis
  {
    locale: `es`,
    name: `Natalia Margulis`,
    slug_name: `Natalia Margulis ES`,
    instrument: `violonchelo`,
    para_1: `Como solista activa y músico de cámara, Natalia Margulis ha actuado en Europa, Estados Unidos y Asia. Ha realizado conciertos en el Auditorio Nacional de Madrid, el Megaron Hall en Thessaloniki, Grecia, el Walton Arts Center en Arkansas, USA, el Schoenberg Hall en Los Ángeles, el Palais des Beaux-Arts, Bélgica y el Chamber Music Hall de la Filarmónica de San Petersburgo.`,
    para_2: `Ha actuado con artistas como Martha Argerich, Ivry Gitlis, Gabriela Montero, Dora Schwarzberg y Misha Maisky. Ha aparecido como solista con la Orquesta Nacional Griega, la Orquesta Sinfónica del Norte de Arkansas y la Orquesta Juvenil de Colonia. Ha realizado giras y grabaciones con la sueca Camerata Nordica. Su actuación con el Trío Margulis del Triple Concierto de Beethoven fue transmitida por televisión y radio en los Estados Unidos.`,
    para_3: `Frecuentemente graba para la Radio Española. Ha participado en festivales internacionales de música como el Festival de Santander y la Academia Verbier, el Festival de Música de Cámara de Eilat, los Conciertos Schloss Elmau, el festival SoNoRo de Bucarest, el Festival de la Semana Internacional del Conservatorio de San Petersburgo y el Progetto Argerich de Lugano donde participó.`,
    para_4: `También forma parte de la grabación en CD ‘Argerich and friends’ con su Margulis Trio. Desde 2007 ocupa el cargo de Ayuda de solista de Violoncello en el Teatro Real de Madrid.`,
    image: `/static/natalia-margulis.webp`,
    image_position: `center`,
  },

  // Uxía Martínez Botana
  {
    locale: `es`,
    name: `Uxía Martínez Botana`,
    slug_name: `Uxía Martínez Botana ES`,
    instrument: `contrabajo`,
    para_1: `Seleccionada por la revista americana de contrabajo “No treble” como una de las 10 mejores bajistas del mundo, Uxía Martínez Botana consiguió su primer contrato profesional con la Orquesta Sinfónica de Galicia a los 16 años.`,
    para_2: `Posteriormente ha trabajado en orquestas como la Real Concertgebouw, Netherlands Philharmonisch Orkest y Amsterdam Sinfonietta, como contrabajo principal invitado en la Philharmonie Zuid-Nederland, cámara escocesa, Orchestre D'Auvergne, Royal Scottish National Orchestra, Oxford Philharmonic, la Philharmonica De Gran Canaria y Antwerp Symphony, y como doble principal Bajo de la Weinberger Kammerorchester (Zurich) y la Filarmónica de Bruselas.`,
    para_3: `Como solista ha actuado con el New European Ensemble, la Orquesta de Cámara de Stellenbosch en Sudáfrica, la Orquesta Sinfónica de Galicia (director Dima Slobodeniouk), la Orquesta Filarmónica de Cámara Checa (violinista Josef Spacek) y la Orquesta de Cámara Franz Liszt (director Robert Farkas), y como músico de cámara con músicos como Julia Fischer, Anna Chumachenko, Yuri Bashmet, Natalia Gutman, Andras Schiff, Christian Tetzlaff, Lars Vogt, Nobuko Imai, Tabea Zimmermann, Polina Leschenko, Natascha Kruditskaya, Philippe Graffin, Gary Hoffman, David Cohen, Kian Soltani, Ante Weithaas, Alissa Margulis, Mischa Maisky, Sol Gabetta, Alina Ibragimova, Lawrence Power y Tatiana Masurenko.`,
    para_4: `Es profesora en la ESMUC Escuela Superior de Música de Cataluña en Barcelona y en la Academia Barenboim-Said.`,
    para_5: `Tocó el contrabajo “The English Lady” (1800 c.a) de la colección “Willem Vogelaar”, patrocinado por The National Dutch Musical Instrument Foundation, y el “Ludwig Neuner” (1854) cedido por un patrocinador privado.`,
    image: `/static/uxia-botana.webp`,
    image_position: `center`,
  },

  // Antonio Ortíz
  {
    locale: `es`,
    name: `Antonio Ortíz`,
    slug_name: `Antonio Ortíz ES`,
    instrument: `piano`,
    para_1: `Participa frecuentemente en el Festival Internacional de Música y Danza de Granada, Festival “Rafael Orozco” de Córdoba, Encuentro de Música y Academia de Santander, y en prestigiosas salas como el Auditorio Nacional de Música de Madrid, Teatro Real y Palau de la Música de Barcelona, entre muchas otras.`,
    para_2: `Además de España ha actuado en Francia, Italia, Bélgica, Rusia, Portugal, Puerto Rico, Colombia y Estados Unidos. Ha realizado conciertos con las principales orquestas españolas como la Orquesta Sinfónica de Radio Televisión Española, Joven Orquesta Nacional de España y Orquesta Filarmónica de Málaga, bajo la dirección de Aldo Ceccato, Bruno Aprea, Fusao Kajima, Pablo Mielgo, Manuel Hernández-Silva, Roselín Pabón y Blanca Trabalón.`,
    para_3: `Ha obtenido premios en los concursos "Manuel de Falla” y "José Roca” y  efectuado diferentes grabaciones para TVE y Radio Clásica de RNE. Recientemente ha grabado para la Fundación Málaga la integral de la “Suite Iberia” de Isaac Albéniz. Estudió con Dimitri Bashkirov en la Escuela Reina Sofía de Madrid y actualmente compagina su actividad concertística con la docencia en el Conservatorio Superior de Música de Málaga.`,
    image: `/static/antonio-ortiz.webp`,
    image_position: `center`,
  },

  // Josu De Solaun
  {
    locale: `es`,
    name: `Josu De Solaun`,
    slug_name: `Josu De Solaun ES`,
    instrument: `piano`,
    para_1: `El pianista hispanoamericano Josu De Solaun es el ganador del Primer Premio del XIII Concurso Internacional de Piano George Enescu, Bucarest, el XV Concurso Internacional de Piano José Iturbi y el Primer Concurso de Piano de la Unión Europea.`,
    para_2: `Ha sido invitado a actuar en distinguidas salas de conciertos de todo el mundo, incluyendo al Ateneo Rumano de Bucarest, el Teatro La Fenice de Venecia, el Teatro Mariinsky de San Petersburgo, el Kennedy Center de Washington, Carnegie Hall y Metropolitan Opera de Nueva York, Southbank Centre de Londres, Salle Cortot de París, Schumann Haus de Leipzig, Novel Hall en Taipei, la Sala Silvestre Revueltas de la Ciudad de México, el Palacio Nostitz de Praga, la Academia de España en Roma, el Festival Internacional de Música de Menton y todas las principales ciudades de España.`,
    para_3: `La temporada 2020-2021 contó con su concierto–debut de improvisación libre al piano, panDEMiCity, en el Auditorio Ciudad de León, así como actuaciones como solista con orquestas en España, República Checa y Rumanía. En 2021, también recibió el prestigioso premio ICMA (International Classical Music Awards) por su grabación de Sonatas para violín y piano francesas con la violinista Franziska Pietsch («Fantasque«). Su último álbum en solitario de obras de Brahms y Schumann para el sello IBS Classical – «Digressions» – ha cosechado excelentes críticas.`,
    image: `/static/josu-de-solaun.webp`,
    image_position: `center`,
  },

  // Nils Nilsen
  {
    locale: `es`,
    name: `Nils Nilsen`,
    slug_name: `Nils Nilsen ES`,
    instrument: `tenor`,
    para_1: `El tenor Nils Georg Nilsen debutó en el Lincoln Center de Nueva York  tras recibir su Master de Música de la Manhattan School of Music en 2012. Desde entonces, ha cantado como solista con la Orquesta Sinfónica de Chicago, en la Ópera de Israel, la Ópera National de Noruega y Opera Tampa en Florida, y ha actuado en varios festivales y conciertos internacionales en Europa y los Estados Unidos.`,
    para_2: `Nils Georg ha sido el ganador del Premio Solveig en el Concurso Edvard Grieg, el Premio del Público durante el festival LidalNorth en numerosas ocasiones y el Concurso de Música para Jóvenes en Noruega.`,
    para_3: `Recientemente ha cantado el Mozart Requiem con la Orquesta de Radio Noruega, Rossinis Stabat Mater y Handels Messiah con la Orquesta Sinfónica Drammen y en el Festival Ravinia en los Estados Unidos, y es Profesor de Voz en la Academia Internacional Galamian en Málaga. Desde 2021 forma parte del grupo vocal Nordic Tenors, junto a los tenores Jan-Tore Saltnes and Roald Haarr.`,
    image: `/static/nils-nilsen.webp`,
    image_position: `top`,
  },

  // Juan Antonio López Cabezuelos
  {
    locale: `es`,
    name: `Juan Antonio López Cabezuelos`,
    slug_name: `Juan Antonio López Cabezuelos ES`,
    instrument: `flauta`,
    para_1: `Juan Antonio López Cabezuelos nace en Meschede ( Alemania), realiza sus estudios en musicales en el Conservatorio Superior “Oscar Esplà” de Alicante con los profesores Rafael Casasempere, Jose Mª Ferrìz, acabando sus estudios de Grado Superior con el profesor Josè Domínguez, obteniendo el “Premio Extraordinario fin de Carrera”. `,
    para_2: `Realiza estudios de perfeccionamiento con Antonio Arias, solista de la “Orquesta Nacional de España”, Sheridan Stokes, reconocido flautista Estadounidense y en la especialidad de flautín con la solista de la “BBC Orchestra” Pat Morris.`,
    para_3: `Comienza sus actividad pedagógica en el Conservatorio Municipal de Benidorm, a partir de 1991 ocupa la plaza de profesor de flauta en el Conservatorio de música y danza municipal de Albacete donde realiza su actividad hasta que en 1993 aprueba por concurso oposición la plaza de Profesor Músico De Flauta/Flautín en la Orquesta Filarmónica de Málaga, con la cual ha colaborado con solistas nacionales e internacionales, como Montserrat Caballè, Alfredo Kraus, Ray Charles y Joan Manuel Serrat entre otros, además de trabajar bajo algunas de las más destacadas batutas como Jesús Lòpez Cobos, Rafael Frubeck de Burgos y Aldo Ceccato.`,
    image: `/static/juan-lopez.webp`,
    image_position: `center`,
  },

  // José Antonio Gonzaga
  {
    locale: `es`,
    name: `José Antonio Gonzaga`,
    slug_name: `José Antonio Gonzaga ES`,
    instrument: `oboe`,
    para_1: `José Antonio Gonzaga colabora regularmente con diversas agrupaciones de cámara destacando la labor que realiza con instrumentos originales en el grupo “In Modo Antiquo”.`,
    para_2: `Ha actuado con diversas orquestas interpretando, entre otros, el Concierto de oboe de R. Vaughan Williams, el Concierto para violín y oboe en do m. de J.S. Bach, la Sinfonía Concertante de J. Haydn, Concierto en Do Mayor de Mozart, así como el Concierto para dos oboes de amor de Telemann.`,
    para_3: `Realizó sus estudios en el Conservatorio Superior “Oscar Esplá” de Alicante obteniendo el Premio Extraordinario de final de carrera así como el Premio de Interpretación de la Sociedad de Conciertos de Alicante. `,
    para_4: `En el campo de la docencia ha impartido cursos en los Conservatorios Superiores de Alicante, Málaga y Granada, asistiendo como profesor de oboe y música de cámara a la Joven Orquesta Nacional de España y a la Orquesta Joven de Andalucía. Desde 1991 es oboe solista de la Orquesta Filarmónica de Málaga.`,
    image: `/static/jose-gonzaga.webp`,
    image_position: `top`,
  },

  // Juan Crisóstomo Subiela Durá
  {
    locale: `es`,
    name: `Juan Crisóstomo Subiela Durá`,
    slug_name: `Juan Crisóstomo Subiela Durá ES`,
    instrument: `clarinete`,
    para_1: `Clarinetista Juan Crisóstomo Subiela Durá finaliza los estudios superiores de clarinete en el Real Conservatorio Superior de Música de Madrid y perfecciona su formación principalmente en el Conservatorio de Amberes con el clarinetista de renombre internacional Walter Boeykens.`,
    para_2: `Ha sido profesor de clarinete en el Conservatorio Profesional de Ávila y en el Real Conservatorio Superior de Música de Madrid. Desde 1993 es solista de clarinete de la Orquesta Filarmónica de Málaga.`,
    para_3: `Ha actuado en conciertos, tanto de música de cámara como de concertista, recibiendo excelentes críticas por su interpretación. Ha impartido cursos en la Joven Orquesta Nacional de Cataluña y en diferentes agrupaciones musicales de la Comunidad Valenciana.`,
    image: `/static/juan-dura.webp`,
    image_position: `center`,
  },

  // Alexander Moustachiev
  {
    locale: `es`,
    name: `Alexander Moustachiev`,
    slug_name: `Alexander Moustachiev ES`,
    instrument: `trompa`,
    para_1: `El trompista Alexander Moustachiev, nacido en Sofía, Bulgaria, comienza sus estudios musicales de Trompa con el prestigioso profesor checo Carel Stari.`,
    para_2: `Tras licenciarse en la escuela estatal musical, ingresa en el Conservatorio Superior de Sofía continuando su formación con Vladislav Grigorov. Su actividad como trompista profesional comenzará con la Orquesta de la Radiotelevisión Búlgara donde ocupará el puesto de ayuda de solista y continuará con la Orquesta Filarmónica de Málaga donde sigue siendo solista en la actualidad.`,
    para_3: `Durante su actividad profesional citar que ha sido miembro de La Orquesta de Cámara “Orfeus” de Pernick, miembro invitado de la Orquesta Camerata de Bonn y solista en numerosos programas de Música de Cámara con distintas formaciones y amplio repertorio.`,
    image: `/static/alexander-moustachiev.webp`,
    image_position: `top`,
  },

  // Antonio Lozano
  {
    locale: `es`,
    name: `Antonio Lozano`,
    slug_name: `Antonio Lozano ES`,
    instrument: `fagot`,
    para_1: `Antonio Lozano ha sido invitado como solista de fagot en las orquestas Teatre del Liceu, Deutsche Kammer Philarmonie de Bremen, R.T.V.E., Orquesta de Cámara de Andalucía, Ciudad de Granada, Sinfónica de La Coruña, Sinfónica de Sevilla y de Valencia. También ha colaborado con las orquestas de la Comunidad Valenciana, Les Arts, Comunidad de Madrid, Hochschule de Stuttgart y Palma de Mallorca.`,
    para_2: `Tras iniciar sus estudios musicales en Alicante con Aurelio Bernabeu, el Conservatorio “Oscar Esplá” con los profesores Juan Torres y Juan Iznardo y el Real Conservatorio Superior de Música de Madrid con el profesor Francisco Más obtuvo el Premio Fin de Carrera y amplió sus estudios en la Musikhochschule de Stuttgart con el profesor Sergio Azzolini. Además realiza cursos de perfeccionamiento con los profesores Dag Jensen, Herman Jung, Vicente Merenciano, Otto Hartman, Klaus Thunemann y Marco Postinger.`,
    para_3: `Ha ejercido de profesor en el Conservatorio Profesional de Música “Manuel Carra” de Málaga, obteniendo posteriormente la Cátedra de Fagot del Conservatorio Superior de Málaga y siendo profesor invitado de la Orquesta de Andalucía y de la Jove Orquestra de Catalunya. Desde 1993, ocupa el puesto de fagot solista en la Orquesta Filarmónica de Málaga.`,
    image: `/static/antonio-lozano.webp`,
    image_position: `top`,
  },

  // Artist 21
  // {
  //   locale: `es`,
  //   name: ``,
  //   slug_name: ``,
  //   instrument: ``,
  //   para_1: ``,
  //   para_2: ``,
  //   para_3: ``,
  //   image: ``,
  //   image_position: ``,
  // },

  // Artist 22
  // {
  //   locale: `es`,
  //   name: ``,
  //   slug_name: ``,
  //   instrument: ``,
  //   para_1: ``,
  //   para_2: ``,
  //   para_3: ``,
  //   image: ``,
  //   image_position: ``,
  // },
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // English - Jesús Reina
  {
    locale: `en`,
    name: `Jesús Reina`,
    slug_name: `Jesús Reina EN`,
    instrument: `Artistic Director, violin`,
    para_1: `Beyond his virtuosity on the instrument, critics praise the Spanish violinist Jesús Reina for his “sunny and soulful personality” —John Rockwell, for his “freshness and boundless spontaneity”, and for the “beauty of his sound, characterized by true musicality, temperament and charisma” —El País.`,
    para_2: `Jesús' grandfather, José Reina, introduced him to the violin through folk music and his talent soon called the attention of great masters. When he was eight years old, Yehudi Menuhin and Natasha Boyarskaya invited Jesús to study at the Yehudi Menuhin School. At 10 years of age he was accepted to the Reina Sofía School under the tutelage of José Luis García Asensio. Two years later, Jesús entered Indiana University to study with Mauricio Fuks. Then, at age 15, he attended the Manhattan School of Music in New York with Patinka Kopec and Pinchas Zukerman.`,
    para_3: `Jesús has been presented at various renowned venues, such as Wigmore Hall and Royal Festival Hall in London, Weill Hall at Carnegie Hall in New York, the National Arts Centre in Ottawa, Saint Petersburg’s Philharmonic Glinka Hall, the National Auditorium in Madrid, and Palau de la Música in Barcelona. Furthermore, Jesús has performed at international festivals such as the Miami International Piano Festival and Music@Menlo in California, as well as in some of the most predominant music series in Spain, including Auditorio de Zaragoza, Festival del Escorial, Festival Musika-Música in Bilbao and Sociedad de Conciertos de Alicante.`,
    para_4: `Among the orchestras which Jesús has concertized with are Mariinski Philharmonic, Munich Chamber Orchestra, Orchestra of Lower California, Yucatán Symphony, Barcelona Symphony, Málaga Philharmonic, Murcia Symphony or Asturias Symphony, being invited by conductors such as Valery Gergiev, Pinchas Zukerman, Manuel Hernández Silva, Francisco Valero, Tomás Grau, Virginia Martínez, Juan Carlos Lomónaco, Sebastian Hamman, Eiji Oue and Ari Rasilainen.`,
    para_5: `Jesús’ enthusiasm for chamber music has led to collaborations with musicians such as violinist Guy Braunstein, violist Paul Neubauer, pianists Judith Jáuregui and Josu de Solaun, and cellists Øyvind Gimse, Amanda Forsyth, and Kyril Slotnikov.`,
    para_6: `Recent highlights include performances with Málaga Philharmonic, Cordoba Symphony and Asturias Symphony. Jesús performed at Premios Princesa de Asturias to prize recipients Ennio Morricone and John Williams. He also participated in the New Year and 20th-anniversary concert of the City of Almería Orchestra, and the 30th anniversary of the Cervantes Institute celebrated at Sofia’s Philharmonic Hall (Bulgaria). Soon, Jesús will record the Bruch and Mendelssohn violin concertos with the Malta Philharmonic and conductor Óliver Díaz for the Aria Classics label.`,
    para_7: `An artist of entrepreneurial energy, Jesús returned to establish himself in his birth city and co-founded the Málaga Clásica Festival with violinist Anna Nilsen. Jesús has since been part of nine successful editions as artistic director of the festival, uniting some of the best international musicians in chamber music encounters. At the same time, he led the creation of the Galamian Academy, a centre for musical specialization. His endeavours have earned him the Medal of Honor of Málaga and the Doors of Andalucía Award, an acknowledgement given to people, entities and institutions that highlight the values of Andalucía throughout the world.`,
    para_8: `Jesús appears on the weekly Canal Sur’s hit television show, “Tierra de Talento”, hosted by comedian Manu Sánchez. In addition to exercising jury work in the show, he has also collaborated with great artists from various musical genres, such as José Mercé, María Villalón, Mariola Cantarero, India Martínez, Pasión Vega, El Kanka and Ale Romero.`,
    image: `/static/jesus-reina.webp`,
    image_position: `top`,
  },

  // English - Anna Nilsen
  {
    locale: `en`,
    name: `Anna Nilsen`,
    slug_name: `Anna Nilsen EN`,
    instrument: `Artistic Director, violin`,
    para_1: `Critics have praised Anna for her “virtuosity, expression, very wise convergence of sensitive interpretative lines, together with her exquisite melodic treatment” (“Ritmo” Magazine).`,
    para_2: `Anna Margrethe Nilsen made her solo debut with the Norwegian Broadcasting Orchestra at age nine. She later soloed with the Bergen Philharmonic, Kaliningrad Chamber, Trondheim Symphony, Kristiansand Symphony, Bærum and Asker Symphony, Novgorod Chamber, Norwegian Opera, Galician Chamber, Manhattan School of Music Philharmonia, St. Petersburg State Symphony and the Belarussian State Chamber Orchestra.`,
    para_3: `At age four, Anna Nilsen began playing the violin and started her studies with Professor Isaac Schuldman. She obtained a Master of Music at the Manhattan School of Music, studying with Patinka Kopec and Pinchas Zukerman in “The Pinchas Zukerman Performance Program”. Anna Nilsen is a winner of the competitions Sparre Olsen (Norway), Eisenberg-Fried (New York), Lillian Fuchs (New York) and the National Violin Competition for Youth (Norway). She has also received the Medal of Honor of Málaga.`,
    para_4: `She has performed all over Europe, Asia, North America and South America in prestigious venues such as the Wiener Konzerthaus, Oslo Concert Hall, Carnegie Hall, Grieg Hall of Bergen, Teatro Cervantes in Málaga, Leon Auditorio, St. Petersburg Philharmonic Glinka Hall and Teatro de Las Condes in Santiago (Chile).`,
    para_5: `Anna Nilsen is an avid chamber musician and has performed alongside distinguished artists, such as Lars Anders Tomter, Guy Braunstein, Liza Fershtman, Henri Demarquette, Øyvind Gimse, the American String Quartet, Paul Neubauer, Amanda Forsyth and Pinchas Zukerman. Moreover, she is one of the violinists in the newly formed Picasso String Quartet.`,
    para_6: `Anna Nilsen toured Spain as a guest concertmaster of the Santa Cecilia Orchestra. She performed in Madrid’s National Auditorium, Auditorium of Zaragoza and Palau de Valencia with conductor and violinist Julian Rachlin. Furthermore, she has recorded works by Szymanowski, Bartók and Grieg for the Centaur Records label.`,
    para_7: `Recent and upcoming highlights include performances as a soloist with the Santiago National University Orchestra (Chile), Murcia Symphony Orchestra, Leon Youth Orchestra, Galamian Academy Orchestra, and the Barratt Due Chamber Orchestra. Performances include violin concertos by Tchaikovsky, Brahms, Mendelssohn, Mozart and Vivaldi, recitals and chamber music appearances with Pinchas Zukerman (New York) at the Miami International Piano Festival (Florida), MurciArt Music Festival in Murcia and the Podium Festival in Haugesund (Norway).`,
    para_8: `Additionally, Anna Nilsen has performed CD recordings for the Aria Classics Label of the complete sonatas by Busoni and Brahms together with pianists Josu de Solaun and Oscar Martín. She is currently the co-founder and professor of violin at the Galamian International Academy (Málaga) and co-founder and director of the Málaga Clásica festival.`,
    image: `/static/anna-nilsen.webp`,
    image_position: `center`,
  },

  // Alissa Margulis
  {
    locale: `en`,
    name: `Alissa Margulis`,
    slug_name: `Alissa Margulis EN`,
    instrument: `violin`,
    para_1: `Critics appreciate Alissa Margulis for her emotional and expressive performances. She was born into a Russian family of musicians in Germany and studied with Zakhar Bron, Augustin Dumay and Pavel Vernikov. She has since played with numerous renowned orchestras, including the English Chamber Orchestra, Orchestre National d'Ile de France, New Russia Orchestra, and the Orchestra Sinfonica di Milano Giuseppe Verdi.`,
    para_2: `Alissa Margulis regularly performs in famous concert halls such as the Berlin Philharmony, Carnegie Hall, Palacio de Bellas Artes in Mexico City, and St. Petersburg Philharmonic Hall. She has won numerous prizes at international violin competitions and received the "Pro Europa" prize from the European Cultural Foundation.`,
    para_3: `In addition to her solo career, she is an enthusiastic chamber musician. She has collaborated with artists like Martha Argerich, Yuri Bashmet, Ivry Gitlis, Gidon Kremer and Mischa Maisky. The virtuoso has released more than a dozen CDs on renowned labels such as EMI Classics, Novalis, and Avanti Classic.`,
    image: `/static/alissa-margulis.webp`,
    image_position: `center`,
  },

  // Alexander Sitkovetsky
  {
    locale: `en`,
    name: `Alexander Sitkovetsky`,
    slug_name: `Alexander Sitkovetsky EN`,
    instrument: `violin`,
    para_1: `Violinist Alexander Sitkovetsky, born in Moscow, made his concerto debut at age eight and later moved to the UK to study at the Menuhin School. Last season he debuted at Vienna’s Musikverein with the Tonkünstler Orchester, visited Anima Musicae Budapest and Russian Philharmonic Novosibirsk and appeared with the Sitkovetsky Trio at festivals throughout Spain, Finland, Denmark, Switzerland, and Germany.`,
    para_2: `He recently performed with the Yomiuri Nippon Symphony, Tokyo Symphony, Royal Philharmonic, Konzerthaus Orchester Berlin, BBC Scottish Symphony, Netherlands Philharmonic, Tokyo Symphony, Moscow and St Petersburg Symphony, Orquesta Filarmónica de Bolivia, BBC National Orchestra of Wales, London Philharmonic and the Philharmonia Orchestra. He regularly directs and performs as a soloist with chamber orchestras, including the Australian Chamber Orchestra, Norwegian Chamber Orchestra, Amsterdam Sinfonietta, London Mozart Players, New York Chamber Players, Camerata Zurich, and Romanian Sinfonietta.`,
    para_3: `Alexander Sitkovetsky is a founding member of the Sitkovetsky Trio, and they regularly perform throughout Europe, Asia, and the Americas. The trio’s fourth disc for BIS Records, Ravel’s Piano Trio and Saint-Saëns’s Second Trio, was released to great critical acclaim in July 2021. Sitkovetsky is an alum of CMS’s Bowers Program. He plays the 1679 ‘Parera’ Antonio Stradivari violin, kindly loaned to him through the Beare’s International Violin Society by a generous sponsor.`,
    image: `/static/alexander-sitkovetsky.webp`,
    image_position: `center`,
  },

  // María del Mar Jurado Jiménez
  {
    locale: `en`,
    name: `María del Mar Jurado Jiménez`,
    slug_name: `María del Mar Jurado Jiménez EN`,
    instrument: `violin`,
    para_1: `Born in La Carolina (Jaén), María del Mar Jurado Jiménez began playing the violin at age seven. She debuted as a soloist at the Teatro Nuevo Apolo in Madrid with the Camerata Musicalis Orchestra and the director Edgar Martín. She later performed at the National Auditorium in Madrid with the capital’s Metropolitan Orchestra.`,
    para_2: `She has participated in the La Mancha Music Festival, MUSEG Festival in Segovia and the Nits de Classics festival. María Jiménez received masterclasses from musicians such as Mariana Todorova, David Marco, Sergey Teslia, Christoph Schickedanz, Anna Baget, Leticia Moreno, Kirill Zlotnikov, Grigory Kalinovsky, Aitor Hevia, Miguel Colom, Alissa Margulis, and Sarah Chang.`,
    para_3: `María Jiménez has won first prize at the “Visitación Magarzo” Chamber Music Competition and the Contest for Young Performers of Jaén. She has also won second prize at the “Lorenzo Palomo” Chamber Music Competition, first prize and the Special Prize for the best String Performer at the 16th Prize “Intercentros Music Lover”. In addition, she has won first prize for Young Performers Málaga Crea 2021 and was a finalist in the TV contest “Tierra de Talento”.`,
    para_4: `She is currently an active student at the Baremboing Said Academy of Orchestral Studies. She combines these studies with her training at the Galamian International Academy and the Malaga Conservatory of Music.`,
    image: `/static/maria-jimenez.webp`,
    image_position: `top`,
  },

  // Rumen Cvetkov
  {
    locale: `en`,
    name: `Rumen Cvetkov`,
    slug_name: `Rumen Cvetkov EN`,
    instrument: `viola`,
    para_1: `Rumen Cvetkov has performed in important venues worldwide, such as the Berliner Philharmoniker Hall, Carnegie Hall, Wigmore Hall, Walt Disney Hall, and Palacio de Bellas Artes of Mexico City. He has also collaborated with musicians such as Ida Haendel, Bernard Greenhouse, Mihail Muntian, Sir Harold Martina, Jose Feghali, Christian Tetzlaff, and Vladimir Mendelssohn.`,
    para_2: `In 2012 he was invited by Maestro Zubin Mehta to become the solo violist of the Royal Spanish Opera House “Queen Sofia” in Valencia. His debut solo CD is “Brahms Alliance” with pianist Ludmil Angelov.`,
    para_3: `Currently, he is a Professor of Viola at Tilburg Conservatory (Holland) and New Bulgarian University (Sofia, Bulgaria). Furthermore, Rumen Cvetkov is the founder and Artistic Leader of Chamber Orchestra “Mediterranean Soloists” and founder and Artistic Director of MurciArt Music Festival.`,
    image: `/static/rumen-cvetkov.webp`,
    image_position: `center`,
  },

  // Tomoko Akasaka
  {
    locale: `en`,
    name: `Tomoko Akasaka`,
    slug_name: `Tomoko Akasaka EN`,
    instrument: `viola`,
    para_1: `Critics appreciate Tomoko Akasaka for her extraordinary charisma and stage presence. She won the "Japan Classical Music Competition" and third prize at the International Music Competition of ARD. She also appeared as a soloist with the Bavarian Radio Symphony Orchestra, Munich Chamber Orchestra, Kremerata Baltica, Orchestre de Chambre Genève, Ensemble Contrechamps, Filarmonica Banatul Timisoara, Venezuelan Symphony Orchestra and Japan Chamber Orchestra under conductors such as Seiji Ozawa, Johannes Kalitzke, Rüdiger Bohn, Gheorghe Costin, Olivier Cuendet, Roman Kofman and Günther Herbig.`,
    para_2: `Tomoko's chamber music partners include Gidon Kremer, Yuri Bashmet, Daniel Hope, Juliane Banse, Heinz Holliger, Menahem Pressler, Julian Steckel, Andreas Ottensamer, Daishin Kashimoto and the Kuss Quartet, performing at Lockenhaus, Salzburg Festival, Pablo Casals Festival, Verbier, Lucerne, Kissinger Sommer, San Francisco Musical Days, Olivier Messiaen Festival, Zagreb Chamber Music Festival, Kronberg Cello Festival, Alba Music Festival and Schubertiade.`,
    para_3: `Tomoko Akasaka has played at the Concertgebouw Amsterdam, Tonhalle Zurich, Mozarteum Salzburg, Victoria Hall London, Grand Theater in Geneva, Konzerthaus and Philharmonie Berlin, Elmau Castle, Suntory Hall Tokyo and Nymphenburg Castle Munich.`,
    para_4: ``,
    image: `/static/tomoko.webp`,
    image_position: `center`,
  },

  // Razvan Popovici
  {
    locale: `en`,
    name: `Razvan Popovici`,
    slug_name: `Razvan Popovici EN`,
    instrument: `viola`,
    para_1: `The Romanian violist Razvan Popovici has performed in prestigious venues, including Théatre-dés-Champs-Elysées (Paris), Cologne Philharmony, Carnegie Hall (New York), Concertgebouw (Amsterdam), Wigmore Hall (London), Suntory Hall (Tokyo), Gasteig (Munich), Kennedy Center (Washington) and the Vienna Konzerthaus and Musikverein, Atheneum (Bucharest), Prinzregententheater (Munich), De Singel (Antwerpen), BOZAR (Brussels).`,
    para_2: `He has also performed with orchestras such as the Cologne Chamber Orchestra, Kamerata Kronstadt, Kobe Chamber Orchestra, Lohja City Orchestra, Transylvania Symphony Orchestra Cluj, Sibiu State Philharmonic, Romanian National Radio Orchestra and George Enescu Philharmonic Bucharest.`,
    para_3: `Razvan Popovici has collaborated with Natalia Gutman, Shlomo Mintz, Enrico Pace, Giovanni Sollima, Konstantin Lifschitz, and Lawrence Power as a chamber musician. He has also played alongside the Szymanowski, Vertavo, Casal, Danel, Kelémen, Glinka and Schumann Quartets and Amadeus Quartet and Ensemble Wien-Berlin members. He has released eight CDs with the Ensemble Raro, which frequently tours Europe, Japan and North America.`,
    para_4: `Popovici is the Founder and Executive Director of the Chiemgauer Musikfrühling Festival in Germany, the SoNoRo Festival in Bucharest and the SoNoRo Arezzo Festival in Tuscany. Furthermore, he is the Artistic Director of the DA CAPO Chamber Music Series in Bucharest. He regularly teaches at the Villa Musica and is a visiting professor at the Royal Conservatory in Antwerp.`,
    image: `/static/razvan-popovici.webp`,
    image_position: `top`,
  },

  // Gabriel Ureña
  {
    locale: `en`,
    name: `Gabriel Ureña`,
    slug_name: `Gabriel Ureña EN`,
    instrument: `cello`,
    para_1: `Gabriel Ureña has performed as a soloist with the London City Orchestra, Oviedo Philharmonic and the Artemus Orquesta and in prestigious international venues, such as the Musikverein (Vienna), Theater of the Champs Elysees (Paris), Seoul Arts Center, National Auditorium of Music (Madrid), Palau de la Música (Barcelona) and the Teatro de la Maestranza (Seville).`,
    para_2: `He has shared the stage with artists such as Leo Nucci, Edita Gruberová, Ainhoa ​​Arteta, Ruggero Raimondi, Anna Netrebko, Ilya Gringolts, Benjamin Schmid, the Labèque sisters, Natalia Gutman and Midori. Gabriel Ureña is the First Prize Winner of the Cello Competition of Arquillos (Jaén) and the International Chamber Music Competition "The City of Manresa".`,
    para_3: `Among the most recent milestones of his career is the publication of his first CD for the label Aria Classics, with works by Prokofiev, Shostakovich and Rachmaninov, together with the pianist Patxi Aizpiri, his solo appearance with the Malaga Philharmonic Orchestra and his debut with the Colombian National Orchestra at the Teatro Colón in Bogotá.`,
    image: `/static/gabriel-urena.webp`,
    image_position: `center`,
  },

  // Adolfo Gutiérrez
  {
    locale: `en`,
    name: `Adolfo Gutiérrez`,
    slug_name: `Adolfo Gutiérrez EN`,
    instrument: `cello`,
    para_1: `Adolfo Gutiérrez won the Ravel Prize in 2012. He debuted with the London Symphony Orchestra in the prestigious Ibermusica series in Madrid, performing Elgar's Cello Concerto. He was then invited to perform with the Royal Philharmonic Orchestra (Charles Dutoit), Orquesta Nacional de España (Ton Koopman) and at the Mendelssohn Festival at Leipzig’s Gewandhaus.`,
    para_2: `Current highlights include performances as a soloist with the London Philharmonic Orchestra (Vladimir Jurowski), Orquesta Nacional de España (Krzysztof Penderecki), Fort Worth Symphony under Miguel Harth-Bedoya, Orquesta Sinfónica Nacional de Colombia and performances at the Ravinia Festival and Montreal Symphony's Summer Festival.`,
    para_3: `Adolfo has performed at major venues such as Amsterdam’s Concertgebouw, Auditorio Nacional de Música in Madrid, Ford Theatre in Los Angeles, l’Auditori and Palau de la Música in Barcelona, Bulgaria Hall in Sofia and Palacio Euskalduna in Bilbao, and collaborated with conductors such as Edward Gardner, José Ramón Encinar, Roberto Minczuk, Pablo González, Anu Tali and Antoni Ros-Marbà.`,
    para_4: `Adolfo has recorded Barber, Rachmaninov, Piazzolla and the complete cycle of J.S. Bach's cello suites on the Verso label. His recent recording of the complete Beethoven Sonatas with pianist Christopher Park received great critical acclaim. Adolfo plays a Francesco Ruggieri, handcrafted in Cremona in 1673.`,
    image: `/static/adolfo-gutierrez.webp`,
    image_position: `center`,
  },

  // Natalia Margulis
  {
    locale: `en`,
    name: `Natalia Margulis`,
    slug_name: `Natalia Margulis EN`,
    instrument: `cello`,
    para_1: `As an active soloist and chamber musician, Natalia Margulis has performed in Europe, the United States and Asia. She has performed concerts at the National Auditorium in Madrid, the Megaron Hall in Thessaloniki, Greece, the Walton Arts Center in Arkansas, USA, the Schoenberg Hall in Los Angeles, and the Palais des Beaux-Arts, Belgium and the Chamber Music Hall of the Philharmonic from Saint Petersburg.`,
    para_2: `Natalia has performed with artists such as Martha Argerich, Ivry Gitlis, Gabriela Montero, Dora Schwarzberg, and Misha Maisky. She has appeared as a soloist with the Greek National Orchestra, the North Arkansas Symphony Orchestra, and the Cologne Youth Orchestra. She has toured and recorded with the Swedish Camerata Nordica. United States television and radio broadcasted her performance with the Margulis Trio of Beethoven's Triple Concerto.`,
    para_3: `Natalia frequently records for Spanish Radio. She has participated in international music festivals such as the Santander Festival and the Verbier Academy, the Eilat Chamber Music Festival, the Schloss Elmau Concerts, the Bucharest SoNoRo festival, and the Saint Petersburg Conservatory International Week Festival. In addition, Natalia performed in the Progetto Argerich of Lugano.`,
    para_4: `Natalia Margulis is also part of the CD recording 'Argerich and friends' with his Margulis Trio. Since 2007 she has held the position of Co-Principal Cellist at the Teatro Real in Madrid.`,
    image: `/static/natalia-margulis.webp`,
    image_position: `center`,
  },

  // Uxía Martínez Botana
  {
    locale: `en`,
    name: `Uxía Martínez Botana`,
    slug_name: `Uxía Martínez Botana EN`,
    instrument: `bass`,
    para_1: `Uxía Martínez Botana received her first professional contract with the Symphony Orchestra of Galicia at age sixteen. She was selected by the American bass magazine “No Treble” as one of the world’s top ten bass players.`,
    para_2: `Uxía has worked in orchestras such as the Royal Concertgebouw, Netherlands Philharmonisch Orkest and Amsterdam Sinfonietta. She performed as Guest Principal Double Bass at the Philharmonie Zuid-Nederland, Scottish Chamber, Orchestre D’Auvergne, Royal Scottish National Orchestra, Oxford Philharmonic, la Philharmonica De Gran Canaria and Antwerp Symphony, and as Principal Double Bass of the Weinberger Kammerorchester (Zurich) and Brussels Philharmonic.`,
    para_3: `As a soloist, she has performed with the New European Ensemble, Stellenbosch Chamber Orchestra in South Africa, Symphony Orchestra of Galicia (conductor Dima Slobodeniouk), Czech Philharmonic Chamber Orchestra (violinist Josef Spacek) and Franz Liszt Chamber Orchestra (conductor Robert Farkas).`,
    para_4: `Uxía has also performed as a chamber musician with musicians such as Julia Fischer, Anna Chumachenko, Yuri Bashmet, Natalia Gutman, Andras Schiff, Christian Tetzlaff, Lars Vogt, Nobuko Imai, Tabea Zimmermann, Polina Leschenko, Natascha Kruditskaya, Philippe Graffin, Gary Hoffman, David Cohen, Kian Soltani, Ante Weithaas, Alissa Margulis, Mischa Maisky, Sol Gabetta, Alina Ibragimova, Lawrence Power and Tatiana Masurenko.`,
    para_5: `Uxía is currently a professor at the ESMUC College of Music of Catalonia in Barcelona and the Barenboim-Said Academy. She played on the double bass “The English Lady” (1800 c.a) of the “Willem Vogelaar” collection, sponsored by The National Dutch Musical Instrument Foundation, and on the “Ludwig Neuner” (1854) loaned by a private sponsor.`,
    image: `/static/uxia-botana.webp`,
    image_position: `center`,
  },

  // Antonio Ortíz
  {
    locale: `en`,
    name: `Antonio Ortíz`,
    slug_name: `Antonio Ortíz EN`,
    instrument: `piano`,
    para_1: `Antonio Ortíz frequently performs at the Granada International Music and Dance Festival, Cordoba’s “Rafael Orozco” Festival, and Musical Encounters and Academy in Santander. He is also often invited to prestigious halls such as National Auditorium in Madrid, Teatro Real and Palau de la Música de Barcelona, among many others.`,
    para_2: `Besides Spain, Antonio has performed in France, Italy, Belgium, Russia, Portugal, Puerto Rico, Colombia and the USA. He has also performed with some of the leading Spanish orchestras, such as the Radio Television Symphony, National Youth Symphony of Spain and Malaga Philharmonic, under the direction of Aldo Ceccato, Bruno Aprea, Fusao Kajima, Pablo Mielgo, Manuel Hernández-Silva, Roselín Pabón and Blanca Trabalón.`,
    para_3: `He received the “Manuel de Falla” and “José Roca” awards. Moreover, Antonio Ortíz made recordings for National Spanish Television and National Spanish Radio. Recently, he recorded Isaac Albeniz’s “Suite Iberia” for Fundación Málaga. He studied with Dimitri Bashkirov at Queen Sofía Music College in Madrid and currently combines his concert career with a teaching position at Málaga’s Superior Conservatory of Music.`,
    image: `/static/antonio-ortiz.webp`,
    image_position: `center`,
  },

  // Josu De Solaun
  {
    locale: `en`,
    name: `Josu De Solaun`,
    slug_name: `Josu De Solaun EN`,
    instrument: `piano`,
    para_1: `Spanish-American pianist Josu De Solaun won first prize in the XIII George Enescu International Piano Competition, Bucharest, the XV José Iturbi International Piano Competition and the First Piano Competition of the European Union.`,
    para_2: `He has performed in distinguished concert halls around the world, including the Romanian Athenaeum in Bucharest, the La Fenice Theater in Venice, the Mariinsky Theater in St. Petersburg, the Kennedy Center in Washington, Carnegie Hall and the Metropolitan Opera in New York, the Southbank Center in London, the Salle Cortot in Paris, the Schumann Haus in Leipzig, the Novel Hall in Taipei, the Sala Silvestre Revueltas in Mexico City, the Nostitz Palace in Prague, the Spanish Academy in Rome, the International Music Festival of Menton and in all main cities of Spain.`,
    para_3: `The 2020-2021 season featured his free improvisation concert debut on piano, panDEMiCity, at the León Auditorium. He also held solo performances with orchestras in Spain, the Czech Republic and Romania. In 2021, he received the prestigious ICMA (International Classical Music Awards) award for his recording of French Violin and Piano Sonatas with violinist Franziska Pietsch (“Fantasque”). His latest solo album of works by Brahms and Schumann for the IBS Classical label – “Digressions” – has garnered excellent reviews.`,
    image: `/static/josu-de-solaun.webp`,
    image_position: `center`,
  },

  // Nils Nilsen
  {
    locale: `en`,
    name: `Nils Nilsen`,
    slug_name: `Nils Nilsen EN`,
    instrument: `tenor`,
    para_1: `Tenor Nils Georg Nilsen debuted at the Lincoln Center in New York after receiving his Master’s degree in Music from the Manhattan School of Music in 2012. Since then, he has appeared as a soloist with the Chicago Symphony Orchestra, at the Israeli Opera, the Norwegian Opera House and Opera Tampa in Florida, and performed in several international festivals and concerts in Europe and the US.`,
    para_2: `In addition to being a Professor of Voice at the Galamian International Academy in Malaga, Nils Georg is a sought-after tenor. Nils Georg has won the Solveig’s Award in the Edvard Grieg Competition. He has also won the Audience Award during the festival LidalNorth and the Youth Music Competition in Norway.`,
    para_3: `Recent highlights include Mozart Requiem with the Norwegian Radio Orchestra, Rossini’s Stabat Mater and Handels Messiah with Drammen Symphony Orchestra and performances at the Ravinia Festival in the US. Since 2021 Nils Nilsen has been part of the vocal group Nordic Tenors, together with tenors Jan-Tore Saltnes and Roald Haarr.`,
    image: `/static/nils-nilsen.webp`,
    image_position: `top`,
  },

  // Juan Antonio López Cabezuelos
  {
    locale: `en`,
    name: `Juan Antonio López Cabezuelos`,
    slug_name: `Juan Antonio López Cabezuelos ES`,
    instrument: `flute`,
    para_1: `Juan Antonio López Cabezuelos was born in Meschede, Germany. He studied at the “Oscar Esplà” Superior Conservatory in Alicante with professors Rafael Casasempere and Jose Mª Ferrìz. He finished his Bachelor’s Degree with professor Josè Domínguez, obtaining the “Extraordinary End of Career Award”.`,
    para_2: `He later studied the flute with Antonio Arias, soloist of the “Orquesta Nacional de España”, and Sheridan Stokes, renowned American flautist. In addition, he studied the piccolo with the soloist of the “BBC Orchestra” Pat Morris.`,
    para_3: `He began his pedagogical activity at the Municipal Conservatory of Benidorm. From 1991 he held the position of flute teacher at the Municipal Music and Dance Conservatory of Albacete. In 1993 he was granted the role of Musical Professor of Flute/Piccolo at the Malaga Philharmonic Orchestra.`,
    para_4: `He has collaborated with national and international soloists, such as Montserrat Caballè, Alfredo Kraus, Ray Charles, and Joan Manuel Serrat. He has also worked under some of the most outstanding batons, such as Jesús Lòpez Cobos, Rafael Frubeck de Burgos and Aldo Ceccato.`,
    image: `/static/juan-lopez.webp`,
    image_position: `center`,
  },

  // José Antonio Gonzaga
  {
    locale: `en`,
    name: `José Antonio Gonzaga`,
    slug_name: `José Antonio Gonzaga EN`,
    instrument: `oboe`,
    para_1: `José Antonio Gonzaga regularly collaborates with various chamber groups, highlighting his work with original instruments in the “In Modo Antiquo” group.`,
    para_2: `José has performed with various orchestras performing, among others, the Oboe Concerto by R. Vaughan Williams, the Concerto for violin and oboe in C Major by J.S. Bach, J. Haydn’s Symphony Concertante, Mozart’s Concerto in C Major, as well as Telemann’s Love Concerto for two oboes.`,
    para_3: `He studied at the Conservatorio Superior “Oscar Esplá” in Alicante, receiving the Premio Extraordinario (the highest recognition) upon graduation and the Performance Prize at the Sociedad de Conciertos in Alicante.`,
    para_4: `José Antonio has taught at courses at the superior conservatories of Alicante, Málaga and Granada, and has been Guest Professor of Oboe and Chamber Music at the Joven Orquesta Nacional de España and Orquesta Joven de Andalucía. Since 1991, he has held the Principal Oboe position at the Orquesta Filarmónica de Málaga.`,
    image: `/static/jose-gonzaga.webp`,
    image_position: `top`,
  },

  // Juan Crisóstomo Subiela Durá
  {
    locale: `en`,
    name: `Juan Crisóstomo Subiela Durá`,
    slug_name: `Juan Crisóstomo Subiela Durá EN`,
    instrument: `clarinet`,
    para_1: `Clarinettist Juan Crisóstomo Subiela Durá completed his Bachelor's Degree at the Madrid Royal Conservatory of Music. He then perfected most of his training at the Antwerp Conservatory with the internationally renowned clarinettist Walter Boeykens.`,
    para_2: `He has been a clarinet professor at the Ávila Professional Conservatory and the Madrid Royal Conservatory of Music. Since 1993 he has held the position of Clarinet Soloist of the Malaga Philharmonic Orchestra.`,
    para_3: `Juan has performed in concerts, both chamber music and soloist, receiving excellent reviews for his interpretation. He has also taught courses at the National Youth Orchestra of Catalonia and in different musical groups in the Valencian Community.`,
    image: `/static/juan-dura.webp`,
    image_position: `center`,
  },

  // Alexander Moustachiev
  {
    locale: `en`,
    name: `Alexander Moustachiev`,
    slug_name: `Alexander Moustachiev EN`,
    instrument: `Horn`,
    para_1: `Horn player Alexander Moustachiev, born in Sofia, Bulgaria, began his musical studies of horn with the prestigious Czech professor Carel Stari.`,
    para_2: `After graduating from the State Music School, he entered the Conservatory of Sofia, continuing his training with Vladislav Grigorov. His career as a professional horn player began with the Bulgarian Radio and Television Orchestra holding the position of an Assistant Soloist. He continued his career with the Malaga Philharmonic Orchestra, where he presently has the role of Horn Soloist.`,
    para_3: `Alexander Moustachiev has notably been a member of the Pernick “Orfeus” Chamber Orchestra during his professional activity. He has also been a guest member of the Bonn Camerata Orchestra and a soloist in numerous Chamber Music programs with different formations and a vast repertoire.`,
    image: `/static/alexander-moustachiev.webp`,
    image_position: `top`,
  },

  // Antonio Lozano
  {
    locale: `en`,
    name: `Antonio Lozano`,
    slug_name: `Antonio Lozano EN`,
    instrument: `bassoon`,
    para_1: `Antonio Lozano has been a guest bassoon principal in the orchestras of Teatre del Liceo, Deutsche Kammer Philarmonie in Bremen, Spanish Radio-television, Chamber Orchestra of Andalucia, Granada Symphony, Coruña Symphony, Sevilla Symphony and Valencia Symphony. He has also collaborated with the orchestras of the Valencia Autonomy, Les Arts, Madrid, Stuttgart Hochschule and Palma de Mallorca.`,
    para_2: `Following his initial studies in Alicante with Aurelio Bernabeu, at the Conservatorio “Oscar Esplá” with Juan Torres and Juan Iznardo and the Real Conservatorio Superior de Música de Madrid with Francisco Más, he obtained the End of Degree Award (highest recognition in the degree). He furthered his studies in the Musikhochschule in Stuttgart with Professor Sergio Azzolini. In addition, he received masterclasses with Dag Jensen, Herman Jung, Vicente Merenciano, Otto Hartman, Klaus Thunemann and Marco Postinger.`,
    para_3: `Antonio has been a professor at the Conservatorio Profesional de Música “Manuel Carra” in Málaga. He later obtained the position of Cátedra de Fagot at the Conservatorio Superior in Málaga. He was also a guest professor at the Orquesta Joven de Andalucía and the Jove Orquestra de Catalunya. Since 1993, he has held the principal bassoon position at the Orquesta Filarmónica de Málaga.`,
    image: `/static/antonio-lozano.webp`,
    image_position: `top`,
  },
];

export default artists;
