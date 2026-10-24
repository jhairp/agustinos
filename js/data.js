/**
 * Base de Datos Institucional - Agustinos Bolivia (Vicariato de Bolivia - O.S.A.)
 */
const AGUSTINOS_DATA = {
  quotes: [
    {
      text: "Nos hiciste, Señor, para ti, y nuestro corazón está inquieto hasta que descanse en ti.",
      source: "San Agustín — Confesiones, I, 1"
    },
    {
      text: "La medida del amor es amar sin medida.",
      source: "San Agustín"
    },
    {
      text: "Vuelve a ti mismo; en el hombre interior habita la verdad.",
      source: "San Agustín — De vera religione, 39, 72"
    },
    {
      text: "Ante todo, vivid unánimes en la casa, teniendo una sola alma y un solo corazón orientados hacia Dios.",
      source: "Regla de San Agustín, I, 2"
    },
    {
      text: "Canta y camina: no te desvíes, no retrocedas, no te detengas.",
      source: "San Agustín — Sermón 256"
    }
  ],

  communities: [
    {
      id: "cbba-colegio",
      name: "Comunidad y Colegio San Agustín",
      city: "Cochabamba",
      dept: "cochabamba",
      role: "Educación y Vida Comunitaria",
      address: "Av. Ramón Rivero y Pantaleón Dalence, Cochabamba",
      phone: "+591 (4) 425-4550",
      email: "info@sanagustin.edu.bo",
      schedule: "Misas: Domingos 8:30 y 19:00",
      description: "Fundado en 1954 por los frailes agustinos. Referente educativo nacional de excelencia integral y formación en valores cristianos agustinianos.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "cbba-teologado",
      name: "Teologado Latinoamericano Fray Antonio de la Calancha",
      city: "Cochabamba (Tupuraya)",
      dept: "cochabamba",
      role: "Casa de Formación Superior y Teología",
      address: "Zona Tupuraya, Cochabamba",
      phone: "+591 (4) 448-9120",
      email: "teologado@agustinosbolivia.org",
      schedule: "Oración comunitaria y Laudes diarias: 06:45",
      description: "Centro de formación teológica y discernimiento para jóvenes frailes agustinos de Bolivia y países del Cono Sur.",
      image: "https://images.unsplash.com/photo-1519491058849-c4ed9422df72?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "lpz-san-nicolas",
      name: "Convento San Nicolás de Tolentino",
      city: "La Paz",
      dept: "la-paz",
      role: "Sede del Vicariato y Casa de Acogida",
      address: "Calle Mercado y Ayacucho, Casco Urbano Central, La Paz",
      phone: "+591 (2) 231-1580",
      email: "vicariato@agustinosbolivia.org",
      schedule: "Misas: Martes a Sábados 12:00, Domingos 10:00 y 18:30",
      description: "Sede central de animación pastoral agustiniana en La Paz, vinculada a la histórica devoción a San Nicolás de Tolentino.",
      image: "https://images.unsplash.com/photo-1548625361-16a798993264?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "lpz-vander-vloodt",
      name: "Casa de Formación P. Tomás Van der Vloodt",
      city: "La Paz",
      dept: "la-paz",
      role: "Pastoral Vocacional y Pre-noviciado",
      address: "Zona Sur, La Paz",
      phone: "+591 (2) 279-3410",
      email: "vocaciones@agustinosbolivia.org",
      schedule: "Encuentros de discernimiento primer fin de semana de cada mes",
      description: "Espacio fraterno para jóvenes bolivianos en etapa de discernimiento vocacional para la vida consagrada agustiniana.",
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "yungas-chirca",
      name: "Misión Histórica de Chirca y Sud Yungas",
      city: "Chirca / Chulumani (Yungas)",
      dept: "yungas",
      role: "Pastoral Misionera Rural y Comunitaria",
      address: "Parroquia Nuestra Señora de la Asunción, Chirca",
      phone: "+591 (2) 213-5012",
      email: "misiones@agustinosbolivia.org",
      schedule: "Celebraciones dominicales en comunidades rurales",
      description: "Cuna de la presencia contemporánea agustiniana en Bolivia desde hace más de 90 años, atendiendo comunidades campesinas e interculturales.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "scz-pastoral",
      name: "Pastoral Agustiniana del Oriente",
      city: "Santa Cruz de la Sierra",
      dept: "santa-cruz",
      role: "Pastoral Juvenil y Universitaria",
      address: "Zona Norte, Santa Cruz",
      phone: "+591 (3) 344-8890",
      email: "santacruz@agustinosbolivia.org",
      schedule: "Grupos juveniles: Sábados 16:30",
      description: "Acompañamiento a jóvenes universitarios y familias inspirados en la búsqueda de la verdad y el carisma de San Agustín.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
    }
  ],

  saints: [
    {
      id: "san-agustin",
      name: "San Agustín de Hipona",
      title: "Padre y Doctor de la Iglesia, Fundador espiritual",
      feast: "28 de Agosto",
      bio: "Nacido en Tagaste (África) en 354. Tras una intensa búsqueda de la verdad, se convirtió y fue obispo de Hipona. Su carisma de interioridad, amistad y comunión sigue inspirando al mundo entero.",
      quote: "Tarde te amé, hermosura tan antigua y tan nueva, tarde te amé."
    },
    {
      id: "santa-monica",
      name: "Santa Mónica",
      title: "Madre de San Agustín, Modelo de perseverancia",
      feast: "27 de Agosto",
      bio: "Madre ejemplar cuya incansable oración y lágrimas consiguieron la conversión de su hijo Agustín. Es protectora de las madres cristianas y patrona de la paciencia orante.",
      quote: "Una sola cosa os pido: que dondequiera que estéis os acordéis de mí ante el altar del Señor."
    },
    {
      id: "san-nicolas-tolentino",
      name: "San Nicolás de Tolentino",
      title: "Primer santo de la Orden de San Agustín canonizado",
      feast: "10 de Septiembre",
      bio: "Fraile agustino distinguido por su cercanía a los enfermos, los pobres y las almas del purgatorio. Su pan bendito es signo de caridad viva en las comunidades bolivianas.",
      quote: "Quien da al necesitado con alegría, siembra para la vida eterna."
    },
    {
      id: "santa-rita",
      name: "Santa Rita de Casia",
      title: "Abogada de las causas imposibles",
      feast: "22 de Mayo",
      bio: "Monja agustina italiana que vivió el perdón heroico y la caridad profunda. Portó en su frente una espina de la Pasión de Cristo durante 15 años.",
      quote: "Nada hay imposible para quien cree y ama a Cristo crucificado."
    },
    {
      id: "fray-antonio-calancha",
      name: "Fray Antonio de la Calancha",
      title: "Cronista insigne de Charcas y Bolivia",
      feast: "Memoria Histórica",
      bio: "Nacido en Chuquisaca (Sucre) hacia 1584, fue fraile agustino, teólogo e ilustre cronista moralizado del Perú y Charcas. El Teologado de Cochabamba honra su nombre.",
      quote: "La historia y la verdad son el testimonio sagrado de las obras de Dios en estas tierras."
    },
    {
      id: "san-ezequiel-moreno",
      name: "San Ezequiel Moreno",
      title: "Obispo misionero y patrono de los enfermos de cáncer",
      feast: "19 de Agosto",
      bio: "Religioso agustino que entregó su vida a las misiones en América con ardiente ardor apostólico y entrañable amor al Sagrado Corazón de Jesús.",
      quote: "Solo Dios basta; cumplir su voluntad es nuestro único descanso."
    }
  ],

  news: [
    {
      id: 1,
      title: "Celebración por más de 90 años del Vicariato Agustino en Bolivia",
      category: "vicariato",
      categoryLabel: "Vicariato",
      date: "18 Oct 2026",
      readTime: "4 min de lectura",
      thumb: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=800&q=80",
      excerpt: "Con una solemne Eucaristía de acción de gracias en La Paz y Cochabamba, la comunidad agustiniana rememoró la llegada de los primeros frailes a los valles y Yungas bolivianos.",
      content: `Con profunda alegría y gratitud, el Vicariato de Bolivia de la Orden de San Agustín conmemoró más de nueve décadas de presencia activa ininterrumpida. La jornada comenzó con la celebración litúrgica presidida por el Vicario Regional, acompañado por la fraternidad de frailes, docentes del Colegio San Agustín, estudiantes del Teologado Latinoamericano y representantes de las pastorales de La Paz, Cochabamba y Yungas.

Durante la homilía se recordó con especial cariño a los primeros misioneros que llegaron a la localidad de Chirca, superando caminos difíciles para llevar el Evangelio y fundar escuelas rurales. 'Hoy renovamos nuestro compromiso de seguir siendo una sola alma y un solo corazón orientados hacia el Señor, sirviendo al pueblo boliviano en la educación, la parroquia y la promoción social', destacó el prior.`
    },
    {
      id: 2,
      title: "Colegio San Agustín de Cochabamba inaugura su nueva aula de innovación y ciencias",
      category: "educacion",
      categoryLabel: "Educación",
      date: "12 Oct 2026",
      readTime: "3 min de lectura",
      thumb: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      excerpt: "El emblemático colegio cochabambino refuerza su proyecto pedagógico integrando robótica, ciencias experimentales y formación ética con sello agustiniano.",
      content: `El Colegio San Agustín de Cochabamba, reconocido como uno de los centros educativos más destacados de Bolivia, dio un paso clave en su propuesta formativa con la bendición y apertura de sus nuevos laboratorios de Ciencias y Tecnología Agustiniana.

El proyecto busca que los estudiantes no solo alcancen la vanguardia académica en ciencias exactas y humanidades, sino que comprendan la ciencia como una búsqueda sincera de la verdad ('Veritas') orientada al servicio del bien común y de las comunidades más necesitadas de Bolivia.`
    },
    {
      id: 3,
      title: "Jornada Vocacional 2026: 'Cor Inquietum' convoca a jóvenes en La Paz",
      category: "vocaciones",
      categoryLabel: "Vocaciones",
      date: "04 Oct 2026",
      readTime: "5 min de lectura",
      thumb: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
      excerpt: "Jóvenes de diferentes ciudades de Bolivia se reunieron en la Casa de Formación P. Tomás Van der Vloodt para reflexionar sobre el llamado a la vida consagrada.",
      content: `Bajo el lema 'Cor Inquietum: Escucha la voz de tu corazón', la Pastoral Vocacional Agustiniana recibió a más de 35 jóvenes de La Paz, Oruro, Cochabamba y Santa Cruz. El encuentro combinó momentos de silencio y adoración eucarística con talleres de vida fraterna, deporte y diálogo con frailes de diversas edades.

Los participantes profundizaron en el itinerario de San Agustín, reflexionando sobre cómo responder con valentía a las inquietudes profundas del corazón en el mundo contemporáneo.`
    },
    {
      id: 4,
      title: "Misiones Agustinianas en los Yungas: apoyo alimentario y escolar para familias",
      category: "pastoral",
      categoryLabel: "Pastoral Social",
      date: "28 Sep 2026",
      readTime: "4 min de lectura",
      thumb: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      excerpt: "Voluntarios y frailes entregaron kits escolares y brindaron atención en comunidades rurales de Chirca y Sud Yungas.",
      content: `En fidelidad al espíritu de caridad de San Nicolás de Tolentino y San Juan de Sahagún, la delegación de Pastoral Social del Vicariato recorrió varias comunidades campesinas de Sud Yungas.

Además del apoyo material con material didáctico para niños de escuelas rurales, se realizaron jornadas de salud comunitaria y catequesis familiar, fortaleciendo el tejido comunitario con los habitantes de la región.`
    },
    {
      id: 5,
      title: "Teologado Fray Antonio de la Calancha inicia ciclo de conferencias sobre Interioridad",
      category: "educacion",
      categoryLabel: "Cultura y Fe",
      date: "19 Sep 2026",
      readTime: "3 min de lectura",
      thumb: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
      excerpt: "Destacados teólogos abordan la relevancia del pensamiento agustiniano ante la sobreestimulación digital y la búsqueda de paz interior.",
      content: `El Teologado Agustino de Tupuraya (Cochabamba) abrió sus puertas para el seminario abierto 'Vuelve a tu interior: San Agustín para el siglo XXI'. 

Durante las ponencias se analizó cómo la práctica de la interioridad agustiniana permite a las personas cultivar el discernimiento crítico, la salud espiritual y la empatía en una sociedad acelerada.`
    },
    {
      id: 6,
      title: "Red de Juventudes Agustinianas prepara campamento nacional en Cochabamba",
      category: "pastoral",
      categoryLabel: "Juventud",
      date: "08 Sep 2026",
      readTime: "3 min de lectura",
      thumb: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80",
      excerpt: "Grupos juveniles de parroquias y colegios agustinianos compartirán 3 días de fraternidad, oración y servicio solidario.",
      content: `Con entusiasmo se iniciaron las inscripciones para el Campamento Agustiniano Juvenil 2026. Frailes y animadores laicos preparan una experiencia vivencial de comunidad cristiana donde la música, el servicio a los más necesitados y el encuentro con Cristo serán los ejes centrales.`
    }
  ],

  faqs: [
    {
      q: "¿Quiénes son los Agustinos y cuál es su misión en Bolivia?",
      a: "Los Agustinos (Orden de San Agustín - O.S.A.) somos una orden religiosa de la Iglesia Católica fundada bajo la regla y espiritualidad de San Agustín de Hipona. En Bolivia, el Vicariato desarrolla su misión evangelizadora desde hace más de 90 años a través de la educación de excelencia (como el Colegio San Agustín de Cochabamba), la animación de parroquias, casas de formación teológica y obras misioneras y sociales en La Paz, Cochabamba y los Yungas."
    },
    {
      q: "¿Cuáles son los pilares fundamentales del carisma agustiniano?",
      a: "El carisma agustiniano se sostiene en tres columnas inseparables: 1) La Interioridad: el camino hacia el interior del corazón donde habita la Verdad; 2) La Vida en Comunidad: vivir con 'un solo corazón y una sola alma orientados hacia Dios' compartiendo la fraternidad; y 3) El Apostolado y Servicio: poner los dones comunitarios al servicio desinteresado de la Iglesia y de los más vulnerables."
    },
    {
      q: "¿Cómo es el proceso o itinerario para ser fraile agustino en Bolivia?",
      a: "El itinerario consta de: Acompañamiento y Discernimiento Vocacional (encuentros periódicos), Pre-noviciado (en la Casa P. Tomás Van der Vloodt en La Paz), Noviciado (año de profunda vida de oración y consagración), Profesión de Votos Simples, y los estudios filosóficos y teológicos en el Teologado Latinoamericano Fray Antonio de la Calancha en Cochabamba."
    },
    {
      q: "¿Cómo puedo colaborar o ser voluntario en las obras sociales y misiones agustinianas?",
      a: "Puedes sumarte como voluntario en nuestras campañas pastorales en los Yungas, participar en las actividades juveniles o colaborar con donaciones y apoyo para proyectos educativos y sociales comunicándote a través de nuestro formulario de contacto o en las sedes de La Paz y Cochabamba."
    }
  ]
};
