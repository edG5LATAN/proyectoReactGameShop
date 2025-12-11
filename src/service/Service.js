const datos = [
  {
    "id": 1,
    "imagen": "https://i.pinimg.com/736x/d2/8e/40/d28e4041f5d4ebf56c6c34e21e5f4cb6.jpg",
    "categoria": "consolas",
    "marca": "XBOX",
    "modelo": "XBOX-S",
    "precio": "60",
    "descripcion1": "Consola Xbox Series X/S: potente rendimiento para gaming de última generación y experiencias inmersivas.",
    "descripcion2": "La Xbox Series X/S, lanzada en 2020, representa la última generación de consolas Microsoft con arquitectura Zen 2 y RDNA 2. La Series X ofrece 12 TFLOPS, GPU de 52 CUs a 1.825 GHz, CPU 8-core a 3.8 GHz, 16 GB RAM GDDR6 y SSD NVMe 1 TB. Soporta 4K a 120 fps, ray tracing en tiempo real, Quick Resume para múltiples juegos y retrocompatibilidad con cuatro generaciones anteriores. La Series S es versión digital con 4 TFLOPS, 10 GB RAM y 512 GB SSD, enfocada en 1440p. Ambas incluyen Xbox Velocity Architecture para carga ultrarrápida y soportan Game Pass con cientos de títulos.",
    "promocion": true
  },
  {
    "id": 2,
    "imagen": "https://i.pinimg.com/736x/bd/48/cf/bd48cf05d7805af8706b83270c7a081f.jpg",
    "categoria": "consolas",
    "marca": "XBOX",
    "modelo": "360",
    "precio": "70",
    "descripcion1": "Xbox 360: consola revolucionaria que definió una generación con Xbox Live y juegos emblemáticos.",
    "descripcion2": "La Xbox 360, lanzada en 2005, inició la séptima generación compitiendo con PS3 y Wii. Usaba CPU IBM PowerPC tri-core a 3.2 GHz, GPU ATI Xenos con 10 MB eDRAM y 512 MB RAM GDDR3. Introdujo logros Gamerscore, perfiles gamers y Xbox Live Arcade. Sufrió fallo técnico 'Anillo Rojo de la Muerte' por sobrecalentamiento, solucionado en revisiones posteriores. Su mando Wireless Controller fue referente ergonómico con disposición analógico asimétrico. Kinect, lanzado en 2010, permitía control por movimiento sin mando. Exclusivos como Gears of War, Halo 3, Fable II y Mass Effect definieron su catálogo.",
    "promocion": false
  },
  {
    "id": 3,
    "imagen": "https://i.pinimg.com/736x/58/be/97/58be978e42d4c5169abc59b7b72d2e21.jpg",
    "categoria": "consolas",
    "marca": "PLAY STATION",
    "modelo": "PS4",
    "precio": "999",
    "descripcion1": "PlayStation 4: consola líder de Sony con potente hardware, exclusivos premiados y comunidad vibrante.",
    "descripcion2": "La PlayStation 4, lanzada en 2013, revolucionó gaming con arquitectura x86-64 que facilitaba desarrollo. Especificaciones: CPU AMD Jaguar 8-core a 1.6 GHz, GPU AMD GCN con 1.84 TFLOPS, 8 GB GDDR5 unificada y disco duro 500 GB (ampliable). Resolución 1080p a 60 fps, compatibilidad con HDR tras actualización. DualShock 4 introdujo panel táctil, altavoz, barra de luz y botón Compartir. PlayStation Network mejoró con PlayStation Plus para juegos mensuales. PlayStation Camera permitía reconocimiento de voz y gestos. Exclusivos como God of War, The Last of Us Part II, Spider-Man y Bloodborne obtuvieron GOTY.",
    "promocion": false
  },
  {
    "id": 4,
    "imagen": "https://i.pinimg.com/736x/86/93/0d/86930dff6be77e39c33be74b6f948adf.jpg",
    "categoria": "consolas",
    "marca": "NINTENDO",
    "modelo": "SWITCH",
    "precio": 500,
    "descripcion1": "Nintendo Switch: consola híbrida revolucionaria que permite jugar en TV o portátil con versatilidad única.",
    "descripcion2": "La Nintendo Switch, lanzada en 2017, es consola híbrida que funciona como sobremesa (acoplada en dock) y portátil (pantalla 6.2\" LCD táctil 720p). Especificaciones: CPU/GPU NVIDIA Tegra X1 personalizado, 4 GB LPDDR4, almacenamiento 32 GB (ampliable microSD). Joy-Con desmontables incluyen giroscopio, acelerómetro, HD Rumble y cámara IR. Modo TV alcanza 1080p a 60 fps, portátil 720p. Batería ofrece 2.5-6.5 horas según juego. Exclusivos como The Legend of Zelda: Breath of the Wild, Super Mario Odyssey, Animal Crossing: New Horizons y Super Smash Bros. Ultimate batieron récords.",
    "promocion": false
  },
  {
    "id": 5,
    "imagen": "https://i.pinimg.com/736x/b7/7d/e1/b77de1f8f6949cab638d794631c7c660.jpg",
    "categoria": "consolas",
    "marca": "nintendo",
    "modelo": "entretaiment",
    "precio": "100",
    "descripcion1": "NES: consola icónica que salvó la industria del videojuego en los años 80 con títulos clásicos.",
    "descripcion2": "La Nintendo Entertainment System (NES), lanzada en 1985, salvó la industria tras la crisis de 1983. Hardware: CPU Ricoh 2A03 (MOS 6502 modificado) a 1.79 MHz, PPU Ricoh 2C02 para gráficos 256x240, 2 KB RAM + 2 KB VRAM. Cartuchos ROM de 32 KB a 1 MB con chip mapper para más memoria. Controlador rectangular con cruceta de 4 direcciones y botones A/B. Juegos definitorios: Super Mario Bros., The Legend of Zelda, Metroid, Mega Man y Castlevania. Chip de sonido 5 canales. Accesorios: Zapper, R.O.B., Power Pad. Vendió 61.9 millones mundialmente.",
    "promocion": true
  },
  {
    "id": 6,
    "imagen": "https://i.pinimg.com/736x/10/e1/33/10e133c5748080ae8eef4ba2977e4bb0.jpg",
    "categoria": "consolas",
    "marca": "station",
    "modelo": "capcon station",
    "precio": "110",
    "descripcion1": "Capcom Station: sistema arcade con juegos Capcom para experiencias auténticas de salón arcade.",
    "descripcion2": "Las estaciones arcade Capcom, populares en los 90-2000, albergaban hardware CPS (Capcom Power System). CPS-1 (1988) usaba CPU Motorola 68000 a 10 MHz, gráficos 384x224 con 4096 colores, sonido Yamaha YM2151. Juegos icónicos: Street Fighter II (redefinió fighters), Final Fight (beat 'em up), Ghouls 'n Ghosts (plataforma difícil). CPS-2 (1993) añadió protección suicida con batería, mejores sprites. CPS-3 (1996) para Street Fighter III y Warzard. Gabinetes tipos: upright, cocktail, candy. Monedero electrónico para créditos.",
    "promocion": false
  },
  {
    "id": 7,
    "imagen": "https://i.pinimg.com/736x/9b/7f/9e/9b7f9ef2c3b4d203fa415a428f277bc8.jpg",
    "categoria": "video juegos",
    "marca": "xbox one",
    "modelo": "assassin's creed",
    "precio": "10",
    "descripcion1": "Assassin's Creed para Xbox One: aventura histórica de sigilo y parkour en mundos abiertos detallados.",
    "descripcion2": "Assassin's Creed es franquicia de Ubisoft que combina sigilo, parkour y narrativa histórica con ciencia ficción. En Xbox One, títulos como AC: Unity (París Revolución), AC: Syndicate (Londres victoriano) y AC: Origins (Egipto antiguo) aprovechan hardware para mundos densos. Gameplay basado en escalada libre, combate contragolpes y misiones de asesinato. Hilo narrativo moderno involucra Abstergo Industries y Animus para acceder a recuerdos ancestrales. Multijugador asimétrico en algunos títulos. Gráficos en 900p-1080p a 30 fps, mejorados en Xbox One X con 4K.",
    "promocion": true
  },
  {
    "id": 8,
    "imagen": "https://i.pinimg.com/736x/d1/ea/2c/d1ea2c6d3004b1ea51e9d0316577e1a3.jpg",
    "categoria": "video juegos",
    "marca": "xbox one",
    "modelo": "mortal kombat xl",
    "precio": "40",
    "descripcion1": "Mortal Kombat XL para Xbox One: versión definitiva con todos los DLCs y fatalities icónicas.",
    "descripcion2": "Mortal Kombat XL es versión completa de MKX (2015) con todos los personajes DLC: Alien, Predator, Leatherface, Jason Voorhees, Triborg y más. Motor gráfico personalizado NetherRealm para 1080p 60 fps en Xbox One. Sistema de variaciones: cada luchador tiene 3 estilos con movimientos únicos. Fatalities, Brutalities, X-Ray moves. Modos: Story (continuación directa MK9), Towers (clásico, living, prueba), Online (Ranked, Player, King of the Hill). NetherRealm Studios actualizó balance parches. Gráficos detallados con sangre y destrucción ambiental.",
    "promocion": false
  },
  {
    "id": 9,
    "imagen": "https://i.pinimg.com/736x/2f/ac/79/2fac790b213b70b1a39ecfb8a90afae4.jpg",
    "categoria": "video juegos",
    "marca": "nintendo switch",
    "modelo": "super smash bros",
    "precio": "80",
    "descripcion1": "Super Smash Bros. Ultimate: crossover definitivo con todos los personajes de la saga Nintendo.",
    "descripcion2": "Super Smash Bros. Ultimate (2018) es el juego de lucha crossover más grande con 89 personajes de franquicias Nintendo y terceros. Todos los personajes regresan, incluyendo Snake, Cloud, Sonic, Pac-Man, Ryu, Ken, Simon Belmont, Ridley, King K. Rool, Banjo-Kazooie, Joker, Terry Bogard, Byleth, Steve/Alex, Sora. Modos: Classic (ruta personalizada), World of Light (aventura RPG con espíritus), Squad Strike, Tournament, Smash (hasta 8 jugadores). Espíritus sistema: coleccionables que otorgan habilidades. 108 etapas con formas Omega/Battlefield.",
    "promocion": false
  },
  {
    "id": 10,
    "imagen": "https://i.pinimg.com/736x/8c/95/46/8c95461663ae5e8a3a08cc0af585b2dc.jpg",
    "categoria": "video juegos",
    "marca": "PS5",
    "modelo": "street fighter",
    "precio": "60",
    "descripcion1": "Street Fighter 6 para PS5: regreso de la legendaria saga con nuevo motor y modos innovadores.",
    "descripcion2": "Street Fighter 6 (2023) marca renacimiento de la franquicia con RE Engine (usado en Resident Evil). Personajes base: Luke, Jamie, Kimberly, Juri, Chun-Li, Ryu, Ken, Guile, Dhalsim, E. Honda, Blanka, Zangief, Dee Jay, Manon, Marisa, Lily, JP. Sistema de combate Drive Gauge: parry, overhead, rush, impact, reversal. Modos: Fighting Ground (arcade, vs, training), World Tour (RPG mundo abierto con avatar), Battle Hub (online social). Gráficos 4K 60 fps con estilos artísticos realista y cel-shaded. Cross-play entre PS5, Xbox Series, PC.",
    "promocion": true
  },
  {
    "id": 11,
    "imagen": "https://i.pinimg.com/736x/22/e1/55/22e155e35e34052ea255ae71dbab71ef.jpg",
    "categoria": "video juegos",
    "marca": "play 4",
    "modelo": "goldeneye",
    "precio": "34",
    "descripcion1": "GoldenEye 007 para PS4: remaster del clásico shooter de N64 con gráficos modernos y online.",
    "descripcion2": "GoldenEye 007, original de Rare (1997) para N64, fue relanzado en PS4 mediante emulación mejorada. Juego de disparos en primera persona basado en película de James Bond con campaña de 20 misiones. Niveles como Dam, Facility, Archives, Surface ganaron iconicidad por diseño. Armas: PP7, Klobb, RC-P90, sniper rifle, lanzagranadas. Modos multijugador local splitscreen para 4 jugadores (ahora online hasta 8). Personajes jugables: Bond, Trevelyan, Natalya, Xenia, Oddjob. Gráficos remasterizados a 1080p 60 fps con texturas de alta resolución, controles modernizados dual-analógico.",
    "promocion": false
  },
  {
    "id": 12,
    "imagen": "https://i.pinimg.com/736x/6c/bf/9b/6cbf9b8a3912e9e96b81477aee8f10da.jpg",
    "categoria": "video juegos",
    "marca": "nintendo switch",
    "modelo": "bioshock",
    "precio": "34",
    "descripcion1": "BioShock Collection para Switch: trilogía completa de shooters narrativos en versión portátil.",
    "descripcion2": "BioShock Collection incluye BioShock, BioShock 2, BioShock Infinite y todos sus DLCs, optimizados para Switch. BioShock (2007) ambientado en ciudad submarina Rapture, combina FPS, horror y narrativa filosófica con sistema de plásmidos/armas. BioShock 2 (2010) juegas como Big Daddy con drill y mejora relación Little Sister. BioShock Infinite (2013) traslada acción a ciudad flotante Columbia con personaje Elizabeth y mecánicas de gancho/sky-line. Gráficos 1080p docked/720p handheld a 30 fps constante, texturas mejoradas, controles adaptados a Joy-Con.",
    "promocion": true
  },
  {
    "id": 13,
    "imagen": "https://i.pinimg.com/736x/ad/58/d5/ad58d56d7f2ce1c326b794e3c51f7eec.jpg",
    "categoria": "video juegos",
    "marca": "xbox one",
    "modelo": "killer instint",
    "precio": "120",
    "descripcion1": "Killer Instinct para Xbox One: reboot del clásico fighter con combos ultra y sistema breakers.",
    "descripcion2": "Killer Instinct (2013) es reboot del arcade clásico, desarrollado por Double Helix/Iron Galaxy para Xbox One. Sistema de combos: autodouble, linkers, enders, y Ultra Combo para finishers espectaculares. Breakers permiten contraatacar combos en momento preciso. Personajes base: Jago, Sabrewulf, Glacius, Thunder, Sadira, Orchid, más DLCs como Spinal, Fulgore, Rash, Arbiter, General RAAM. Gráficos 1080p 60 fps con modelos detallados y stages dinámicos. Banda sonora de Mick Gordon (Doom 2016) con temas por personaje. Modos: Story, Shadow Lords, Training, Online.",
    "promocion": false
  },
  {
    "id": 14,
    "imagen": "https://i.pinimg.com/736x/19/57/31/1957311a067daf55986b9b7a4729d18d.jpg",
    "categoria": "accesorio varios",
    "marca": "gaming",
    "modelo": "one handed key rgb",
    "precio": "79",
    "descripcion1": "Teclado gaming one-handed RGB: diseño ergonómico para juegos de estrategia y MOBAs con iluminación.",
    "descripcion2": "Teclado gaming para una mano con diseño ergonómico que permite acceso rápido a teclas esenciales en MOBAs, MMOs y shooters. Incluye 20-32 teclas programables con switches mecánicos (Cherry MX Red/Blue/Brown clones) para respuesta táctil. Retroiluminación RGB con 16.8 millones de colores, efectos personalizables via software. Teclas macro grabables on-the-fly con memoria integrada. Cable desmontable USB-C para portabilidad. Base antideslizante con almohadilla de gel para muñeca. Compatible con PC, PS4, PS5, Xbox (mediante adaptador). Software para asignar comandos complejos.",
    "promocion": false
  },
  {
    "id": 15,
    "imagen": "https://i.pinimg.com/736x/d3/d1/af/d3d1afd3ad38e23c06d3ff39a40f0554.jpg",
    "categoria": "accesorio varios",
    "marca": "gaming",
    "modelo": "silla gamer",
    "precio": "19",
    "descripcion1": "Silla gamer económica: confort básico para sesiones de juego cortas con ajustes de altura.",
    "descripcion2": "Silla gamer de entrada con estructura de acero reforzado, asiento y respaldo de espuma de densidad media forrados en cuero sintético PVC. Ajustes: altura mediante pistón gas clase 3 (10 cm), respaldo reclinable 90-135°, brazos 2D (altura/rotación). Ruedas de 60 mm silenciosas para pisos duros/alfombras. Soporta hasta 120 kg. Incluye cojín lumbar y cervical removibles. Ensamblaje con herramientas incluidas (20-40 minutos). Diseño estilo racing con costuras contrastantes. Colores disponibles: negro/rojo, negro/azul, negro/verde. Base de 5 radios en nylon reforzado.",
    "promocion": true
  },
  {
    "id": 16,
    "imagen": "https://i.pinimg.com/736x/8f/44/68/8f4468b02410f68e0fcf4fb0ca319b65.jpg",
    "categoria": "accesorio varios",
    "marca": "GTX",
    "modelo": "mouse gaming",
    "precio": "90",
    "descripcion1": "Mouse gaming GTX: sensor óptico de alta precisión, RGB personalizable y diseño ergonómico.",
    "descripcion2": "Mouse gaming con sensor óptico PixArt PMW3389 (16,000 DPI, 450 IPS, 50G aceleración). Polling rate ajustable 125/500/1000 Hz. 8 botones programables con switches Omron 20 millones de clicks. Iluminación RGB en rueda, logo y base con efectos sincronizables via software. Peso ajustable mediante pesas (hasta 10g extra). Cable trenzado de 1.8 m con filtro anti-interferencia. Superficie PTFE para deslizamiento suave. Forma ergonómica para agarre palm/claw. Software para macros, perfiles por juego, ajustes DPI en pasos (100-16,000). Memoria integrada guarda configuraciones.",
    "promocion": false
  },
  {
    "id": 17,
    "imagen": "https://i.pinimg.com/736x/82/90/94/82909486e3932f4934851a226a4078f7.jpg",
    "categoria": "accesorio varios",
    "marca": "acer",
    "modelo": "monitor 24' gaming",
    "precio": "80",
    "descripcion1": "Monitor Acer 24\" gaming: panel IPS Full HD, 144Hz y 1ms para juegos fluidos sin motion blur.",
    "descripcion2": "Monitor gaming Acer de 24 pulgadas con resolución Full HD (1920x1080), panel IPS para colores vivos (16.7 millones, 99% sRGB) y ángulos de visión 178°. Tasa de refresco 144 Hz nativa (overclock a 165 Hz) y tiempo de respuesta 1ms VRB para eliminar ghosting. Tecnología AMD FreeSync Premium compatible con G-Sync para tear-free gaming. Brillo 250 nits, contraste 1000:1. Conectores: DisplayPort 1.2, HDMI 2.0 (x2), audio out. Soporte VESA 100x100 para montaje en brazo. Diseño bezel-less en 3 lados. Base ajustable: altura, inclinación, giro, pivot.",
    "promocion": false
  },
  {
    "id": 18,
    "imagen": "https://i.pinimg.com/736x/d7/29/25/d729254ba51fa78791d7478895d95579.jpg",
    "categoria": "accesorio varios",
    "marca": "razer",
    "modelo": "Auricular gaming",
    "precio": "110",
    "descripcion1": "Auriculares gaming Razer: sonido surround 7.1, micrófono retráctil y comodidad para largas sesiones.",
    "descripcion2": "Auriculares gaming Razer con sonido surround virtual 7.1 mediante software THX Spatial Audio (requiere Razer Synapse). Drivers de 50 mm con imanes de neodimio para graves profundos y medios claros. Frecuencia respuesta: 20 Hz - 20 kHz. Micrófono omnidireccional retráctil con cancelación de ruido y luz LED de mute. Almohadillas de espuma memory foam con cubierta de tejido transpirable. Diadema ajustable con amortiguación. Controles integrados: volumen, mute mic, encendido. Conexión USB para alimentación y audio digital (también compatible con jack 3.5 mm para consolas).",
    "promocion": false
  },
  {
    "id": 19,
    "imagen": "https://i.pinimg.com/736x/c8/6e/1a/c86e1a74efcbc7bd43ac1b298df5e33a.jpg",
    "categoria": "accesorio varios",
    "marca": "gamer shop",
    "modelo": "alfombra gaming",
    "precio": "17",
    "descripcion1": "Alfombra gaming XL: superficie optimizada para mouse, base antideslizante y diseños personalizados.",
    "descripcion2": "Alfombra gaming de tamaño extendido (900x400 mm o 800x300 mm) que cubre escritorio completo (teclado + mouse). Superficie de tejido de poliéster de alta densidad optimizada para sensores ópticos/láser (DPIs consistentes). Base de goma natural antideslizante de 3 mm de grosor que se adhiere al escritorio. Bordes cosidos para evitar deshilachado. Diseños impresos con tinta sublimada resistente al desgaste (logos de juegos, abstractos, paisajes). Fácil limpieza: lavable a mano con agua fría y secado al aire. Compatible con todos tipos de mouse (óptico, láser, trackball).",
    "promocion": false
  },
  {
    "id": 20,
    "imagen": "https://i.pinimg.com/736x/9e/7d/61/9e7d61a4e7fbff7de8edac3fb320f50c.jpg",
    "categoria": "accesorio varios",
    "marca": "gaming pro",
    "modelo": "mouse pad gaming",
    "precio": "30",
    "descripcion1": "Mouse pad gaming profesional: superficie micro-texturada para precisión extrema y base antideslizante.",
    "descripcion2": "Mouse pad diseñado para gaming profesional con superficie de tejido de poliéster de baja fricción para movimientos rápidos y precisos. Base de goma natural de 4 mm de grosor que evita desplazamientos durante partidas intensas. Tamaño estándar 355x254 mm, ideal para espacios reducidos. Bordes reforzados con costura resistente que previene desgaste. Compatibilidad universal con todos sensores ópticos y láser. Diseño minimalista sin patrones distractivos, colores negro/negro para setups discretos. Superficie resistente a derrames de líquidos (repelente al agua). Fácil mantenimiento: limpieza con paño húmedo.",
    "promocion": true
  }
];

export function obtenerPorCategoria(categoria) {
  return datos.filter(item => item.categoria === categoria);
}

export function obtenerPorId(id) {
  return datos.find(item => item.id == id) || null;
}

export function obtenerPorPromocion(){
  return datos.filter(item=>item.promocion==true)
}

export function obtenerTodosLosDatos(){
  return datos;
}




export default datos;