const dataByStyle = {
  nordico: {
    title: "Galeria Nordica",
    description: "Lineas limpias, luz natural y texturas suaves.",
    intro:
      "El estilo nordico equilibra serenidad y funcionalidad con una base clara, luminosa y muy ordenada. Se apoya en maderas naturales de tono medio, textiles agradables al tacto y una distribucion limpia que favorece la circulacion y la sensacion de amplitud. Para que funcione de verdad, conviene trabajar por capas: primero una paleta neutra coherente, despues mobiliario de lineas simples y por ultimo acentos calidos como lana, lino, ceramica artesanal o detalles en fibras vegetales. La iluminacion tambien es clave: combina luz general suave con puntos de luz ambiental para crear escenas acogedoras en la tarde sin perder la frescura visual durante el dia.",
    introImage: "./images/nordico/panoramica1.jpg",
    cards: [
      {
        room: "Sala luminosa",
        note: "Sofa claro, madera y manta de lana.",
        image: "./images/nordico/salon.jpg",
      },
      {
        room: "Comedor sereno",
        note: "Mesa de roble y lampara escultorica.",
        image: "./images/nordico/cocina-nordico.jpg",
      },
      {
        room: "Dormitorio calma",
        note: "Ropa de cama neutra y fibras naturales.",
        image: "./images/nordico/dormitorio-nordico.jpg",
      },
    ],
  },
  minimalista: {
    title: "Galeria Minimalista",
    description: "Menos elementos, mayor impacto visual.",
    intro:
      "El minimalismo busca intencion en cada decision y elimina lo superfluo para que el espacio respire. No se trata solo de tener pocos muebles, sino de elegir piezas con buena proporcion, excelente funcionalidad y acabados consistentes entre si. La clave esta en controlar la paleta cromatica, mantener superficies despejadas y resolver el almacenaje de forma invisible para evitar ruido visual. Cuando esta bien planteado, transmite calma, orden y sofisticacion: cada objeto tiene un motivo para estar ahi y cada vacio aporta equilibrio. Para evitar que el resultado se sienta frio, puedes introducir textura a traves de madera, piedra, textiles mates y una iluminacion bien graduada por zonas.",
    introImage: "./images/minimalista/minimalista-intro.jpg",
    cards: [
      {
        room: "Sala esencial",
        note: "Paleta neutra y muebles de baja altura.",
        image: "./images/minimalista/salon-minimalista.jpg",
      },
      {
        room: "Cocina limpia",
        note: "Superficies lisas y almacenamiento oculto.",
        image: "./images/minimalista/cocina-minimalista.jpg",
      },
      {
        room: "Estudio despejado",
        note: "Escritorio simple y estanteria integrada.",
        image: "./images/minimalista/dormitorio-minimalista.jpg",
      },
    ],
  },
  bohemio: {
    title: "Galeria Bohemia",
    description: "Capas de color, arte y textiles con personalidad.",
    intro:
      "El estilo bohemio celebra la mezcla consciente de colores, texturas y piezas con historia para construir ambientes expresivos y llenos de identidad. Funciona muy bien cuando combinas arte mural, alfombras con patron, cojines de diferentes tramas, madera natural y abundante vegetacion interior. El secreto para que no se vea caotico es mantener una base que conecte todo: puede ser un tono de pared neutro, una familia cromatica dominante o materiales repetidos en varios puntos del ambiente. A partir de ahi, sumas capas de forma progresiva hasta lograr profundidad visual. Es ideal para hogares que quieren transmitir creatividad, calidez y un estilo de vida mas personal, relajado y autentico.",
    introImage: "./images/bohemio/bohemio-intro.jpg",
    cards: [
      {
        room: "Salon creativo",
        note: "Cojines con patrones y obras en galeria.",
        image: "./images/bohemio/salon-bohemio.jpg",
      },
      {
        room: "Cocina bohemia",
        note: "Butaca vintage y lampara calida.",
        image: "./images/bohemio/cocina-bohemio.jpg",
      },
      {
        room: "Dormitorio chill",
        note: "Fibras, faroles y vegetacion abundante.",
        image: "./images/bohemio/dormitorio-bohemio.jpg",
      },
    ],
  },
  industrial: {
    title: "Galeria Industrial",
    description: "Materiales honestos: metal, hormigon y madera oscura.",
    intro:
      "La decoracion industrial apuesta por la autenticidad de los materiales y por una estetica urbana con caracter. Metal negro, madera oscura, cuero, cemento y acabados minerales se combinan para crear espacios con personalidad fuerte y un lenguaje contemporaneo. Para equilibrar esa base robusta, conviene introducir luz calida, textiles tactiles y piezas puntuales que suavicen el conjunto sin perder identidad. Tambien funciona muy bien jugar con contrastes: elementos estructurales visibles frente a mobiliario comodo, o tonos profundos combinados con superficies claras para mantener legibilidad visual. El resultado es un ambiente sofisticado, practico y contundente, perfecto para quien busca una imagen moderna con sensacion de permanencia y estilo atemporal.",
    introImage: "./images/industrial/industrial-intro.jpg",
    cards: [
      {
        room: "Loft urbano",
        note: "Muros de ladrillo y estanterias metalicas.",
        image: "./images/industrial/salon-industrial.jpg",
      },
      {
        room: "Cocina factory",
        note: "Taburetes altos y luminarias de hierro.",
        image: "./images/industrial/cocina-industrial.jpg",
      },
      {
        room: "Dormitorio robusto",
        note: "Escritorio robusto y cuero envejecido.",
        image: "./images/industrial/dormitorio-industrial.jpg",
      },
    ],
  },
};

const tips = [
  "Combina 3 texturas distintas en una misma zona para dar profundidad visual.",
  "Si el techo es bajo, usa cortinas desde arriba de la ventana para alargar la pared.",
  "Los espejos frente a una entrada de luz multiplican claridad y amplitud.",
  "Agrupa objetos decorativos en numero impar para composiciones mas dinamicas.",
];

const panoramaImages = [
  {
    image: "images/panoramicas/panoramica1.jpg",
    alt: "Vista panoramica de sala principal",
  },
  {
    image: "images/panoramicas/panoramica2.jpg",
    alt: "Vista panoramica de comedor y cocina",
  },
  {
    image: "images/panoramicas/panoramica3.jpg",
    alt: "Vista panoramica de salon",
  },
];

const pricingByRoom = [
  {
    room: "Salon",
    plans: [
      {
        name: "Compacto",
        size: "12 - 16 m2",
        price: "EUR 2,800 - 5,500",
        description:
          "Distribucion funcional con foco en circulacion y almacenaje ligero.",
        image: "./images/planos/salon_ajustado.png",
      },
      {
        name: "Espacioso",
        size: "24 - 34 m2",
        price: "EUR 6,500 - 12,800",
        description:
          "Zona social amplia, lectura lateral y composicion decorativa completa.",
        image: "./images/planos/salon_amplio.png",
      },
    ],
  },
  {
    room: "Cocina",
    plans: [
      {
        name: "Compacta",
        size: "8 - 12 m2",
        price: "EUR 3,200 - 7,200",
        description:
          "Formato en L con triangulo de trabajo optimizado y comedor integrado.",
        image: "./images/planos/cocina_ajustada.png",
      },
      {
        name: "Espaciosa",
        size: "16 - 24 m2",
        price: "EUR 8,500 - 16,900",
        description:
          "Isla central, mas almacenaje alto y zona de apoyo para invitados.",
        image: "./images/planos/cocina_amplia.png",
      },
    ],
  },
  {
    room: "Habitacion",
    plans: [
      {
        name: "Compacta",
        size: "10 - 14 m2",
        price: "EUR 2,200 - 4,900",
        description:
          "Cama principal, armario lineal y escritorio compacto sin saturar el paso.",
        image: "./images/planos/dormitorio_ajustado.png",
      },
      {
        name: "Espaciosa",
        size: "18 - 28 m2",
        price: "EUR 5,600 - 11,600",
        description:
          "Area de descanso amplia con vestidor, tocador y zona de lectura.",
        image: "./images/planos/dormitorio_amplio.png",
      },
    ],
  },
];

function App() {
  const [styleKey, setStyleKey] = React.useState("nordico");
  const [showingStyleInfo, setShowingStyleInfo] = React.useState(true);
  const [showWelcome, setShowWelcome] = React.useState(true);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [activeSection, setActiveSection] = React.useState("hero");
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const sectionRefs = React.useRef({});

  const navItems = [
    { key: "hero", label: "Inicio" },
    { key: "gallery", label: "Galeria" },
    { key: "panorama", label: "Panoramica" },
    { key: "prices", label: "Precios" },
    { key: "contact", label: "Contacto" },
  ];

  React.useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -40px 0px" },
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
      observer.disconnect();
    };
  }, [styleKey, showWelcome]);

  React.useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionKey = entry.target.getAttribute("data-nav-section");
            if (sectionKey) {
              setActiveSection(sectionKey);
            }
          }
        });
      },
      { threshold: 0.45 },
    );

    navItems.forEach((item) => {
      const section = sectionRefs.current[item.key];
      if (section) {
        observer.observe(section);
      }
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [showWelcome]);

  React.useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setIsNavOpen(false);
      }
    }

    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isNavOpen]);

  function scrollToSection(key) {
    const target = sectionRefs.current[key];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsNavOpen(false);
    }
  }

  const styleData = dataByStyle[styleKey];

  const introText = showingStyleInfo
    ? styleData.intro
    : "Modo funcional: enfocate en distribucion, iluminacion y circulacion del espacio. Define primero las zonas de uso, luego establece puntos de luz principal y ambiental, y finalmente ajusta mobiliario y accesorios para mantener equilibrio visual, comodidad diaria y una lectura clara del ambiente.";

  function pickRandomTip() {
    const index = Math.floor(Math.random() * tips.length);
    setTipText(tips[index]);
  }

  return (
    <main className="wrap">
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="main-navbar">
        <ul>
          {navItems.map((item) => (
            <li key={item.key}>
              <button
                className={`main-nav-btn ${activeSection === item.key ? "active" : ""}`}
                onClick={() => scrollToSection(item.key)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      

      {showWelcome && (
        <section
          className="welcome reveal from-top"
          data-reveal
          data-nav-section="hero"
          ref={(el) => {
            sectionRefs.current.hero = el;
          }}
        >
          <div className="welcome-layout">
            <div className="welcome-copy">
              <h2>Bienvenido a Interiores Vivo</h2>
              <p>
                Este espacio esta pensado para inspirarte con propuestas reales
                de decoracion interior, ayudandote a visualizar como se
                transforman salas, comedores, dormitorios y zonas de trabajo
                mediante una seleccion cuidada de colores, materiales,
                iluminacion y distribucion del mobiliario.
              </p>
              <p>
                Recorre cada estilo, compara atmosferas y descubre ideas
                aplicables a tu hogar sin necesidad de conocimientos tecnicos:
                aqui encontraras referencias visuales, descripciones detalladas
                y sugerencias practicas para que tomes decisiones con confianza,
                coherencia estetica y personalidad propia.
              </p>
              <div className="explore-btn-container">
                <button
                  className="btn primary"
                  onClick={() => setShowWelcome(false)}
                >
                  Comenzar a explorar
                </button>
              </div>
            </div>

            <img
              className="welcome-logo-slot"
              src="./images/logo.png"
              alt="Espacio para tu logo de marca"
              onError={(event) => {
                event.currentTarget.removeAttribute("src");
              }}
            />
          </div>
        </section>
      )}

      <section
        className="hero reveal from-top"
        data-reveal
        data-nav-section="hero"
        ref={(el) => {
          sectionRefs.current.hero = el;
        }}
      >
        <h1>Tu catalogo visual para transformar espacios</h1>

        <div className="hero-top">
          <div className="intro-copy">
            <p>{introText}</p>
          </div>

          <img
            className="intro-photo"
            src={styleData.introImage}
            alt={`Referencia visual del estilo ${styleKey}`}
            onError={(event) => {
              event.currentTarget.removeAttribute("src");
              event.currentTarget.alt = "Espacio para foto de introduccion";
            }}
          />
        </div>

        <div className="filters">
          {Object.keys(dataByStyle).map((key) => (
            <button
              key={key}
              className={`filter-btn ${styleKey === key ? "active" : ""}`}
              onClick={() => setStyleKey(key)}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>
      </section>

      <section
        className="reveal from-left"
        data-reveal
        data-nav-section="gallery"
        ref={(el) => {
          sectionRefs.current.gallery = el;
        }}
      >
        <div className="section-head reveal from-right" data-reveal>
          <h2>{styleData.title}</h2>
          <p>{styleData.description}</p>
        </div>

        <div className="gallery">
          {styleData.cards.slice(0, 2).map((item, index) => (
            <article
              className={`card reveal ${index % 2 === 0 ? "from-left" : "from-right"}`}
              data-reveal
              key={item.room}
            >
              <img
                className="photo-slot"
                src={item.image}
                alt={`Espacio ${item.room}`}
                onError={(event) => {
                  event.currentTarget.removeAttribute("src");
                  event.currentTarget.alt = "Espacio para tu foto";
                }}
              />
              <div className="card-body">
                <h3>{item.room}</h3>
                <p>{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="panorama-section reveal from-top"
        data-reveal
        data-nav-section="panorama"
        ref={(el) => {
          sectionRefs.current.panorama = el;
        }}
      >
        <h3>Inspiracion Panoramica</h3>
        <div className="panorama-grid">
          {panoramaImages.map((item, index) => (
            <img
              key={item.image}
              className={`panorama-photo reveal ${index % 2 === 0 ? "from-left" : "from-right"}`}
              data-reveal
              src={item.image}
              alt={item.alt}
              onError={(event) => {
                event.currentTarget.removeAttribute("src");
                event.currentTarget.alt = "Espacio para foto panoramica";
              }}
            />
          ))}
        </div>
      </section>

      <section
        className="prices-section reveal from-top"
        data-reveal
        data-nav-section="prices"
        ref={(el) => {
          sectionRefs.current.prices = el;
        }}
      >
        <div className="section-head">
          <h2>Rango de Precios e Imagenes de Referencia</h2>
          <p>
            Estimaciones orientativas segun tamano y ejemplos visuales para cada
            opcion.
          </p>
        </div>

        <div className="price-room-grid">
          {pricingByRoom.map((roomGroup, roomIndex) => (
            <article
              className={`room-pricing-card reveal ${roomIndex % 2 === 0 ? "from-left" : "from-right"}`}
              data-reveal
              key={roomGroup.room}
            >
              <h3>{roomGroup.room}</h3>

              <div className="plan-variants">
                {roomGroup.plans.map((plan, planIndex) => (
                  <div
                    className="plan-variant"
                    key={`${roomGroup.room}-${plan.name}`}
                  >
                    <div className="plan-meta">
                      <h4>{plan.name}</h4>
                      <p>{plan.size}</p>
                      <p className="plan-price">{plan.price}</p>
                      <p>{plan.description}</p>
                    </div>

                    <img
                      className={`plan-photo reveal ${planIndex % 2 === 0 ? "from-top" : "from-right"}`}
                      data-reveal
                      src={plan.image}
                      alt={`Referencia ${roomGroup.room} ${plan.name}`}
                      onError={(event) => {
                        event.currentTarget.removeAttribute("src");
                        event.currentTarget.alt =
                          "Espacio para imagen de referencia";
                      }}
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer
        className="site-footer reveal from-top"
        data-reveal
        data-nav-section="contact"
        ref={(el) => {
          sectionRefs.current.contact = el;
        }}
      >
        <div>
          <h4>Contacto</h4>
          <p>Telefono: +34 600 000 000</p>
          <p>Email: contacto@interioresvivo.com</p>
        </div>
        <div>
          <h4>Direccion</h4>
          <p>Calle Principal 123</p>
          <p>28001 Madrid, Espana</p>
        </div>
        <div>
          <h4>Horario</h4>
          <p>Lunes a Viernes: 09:00 - 19:00</p>
          <p>Sabado: 10:00 - 14:00</p>
        </div>
      </footer>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
