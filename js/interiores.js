
        const dataByStyle = {
            nordico: {
                title: "Galeria Nordica",
                description: "Lineas limpias, luz natural y texturas suaves.",
                intro: "El estilo nordico equilibra serenidad y funcionalidad: combina tonos claros, madera natural, textiles suaves y una iluminacion limpia que amplifica la sensacion de orden. Para lograrlo, prioriza muebles de lineas simples, deja zonas de paso despejadas y suma piezas calidas como mantas, fibras y ceramica artesanal para que el espacio no se sienta frio.",
                introImage: "./images/nordico/panoramica1.jpg",
                cards: [
                    { room: "Sala luminosa", note: "Sofa claro, madera y manta de lana.", image: "./images/nordico/salon.jpg" },
                    { room: "Comedor sereno", note: "Mesa de roble y lampara escultorica.", image: "./images/nordico/cocina-nordico.jpg" },
                    { room: "Dormitorio calma", note: "Ropa de cama neutra y fibras naturales.", image: "./images/nordico/dormitorio-nordico.jpg" }
                ]
            },
            minimalista: {
                title: "Galeria Minimalista",
                description: "Menos elementos, mayor impacto visual.",
                intro: "El minimalismo busca intencion en cada decision: menos objetos, mejores proporciones y una paleta muy controlada para que cada elemento tenga protagonismo. Trabaja con superficies limpias, almacenaje oculto y materiales consistentes; asi obtendras ambientes elegantes, faciles de mantener y visualmente descansados, sin perder personalidad.",
                introImage: "./images/minimalista/salon1.jpg",
                cards: [
                    { room: "Sala esencial", note: "Paleta neutra y muebles de baja altura.", image: "./images/minimalista/minimalista-sala.jpg" },
                    { room: "Cocina limpia", note: "Superficies lisas y almacenamiento oculto.", image: "./images/minimalista/minimalista-cocina.jpg" },
                    { room: "Estudio despejado", note: "Escritorio simple y estanteria integrada.", image: "./images/minimalista/minimalista-estudio.jpg" }
                ]
            },
            bohemio: {
                title: "Galeria Bohemia",
                description: "Capas de color, arte y textiles con personalidad.",
                intro: "El estilo bohemio celebra la mezcla consciente: patrones, arte mural, plantas y objetos con historia para crear espacios llenos de caracter. La clave esta en superponer texturas y colores con una base neutra que ordene la composicion; de esta manera consigues un ambiente vibrante pero armonico, ideal para zonas sociales y rincones creativos.",
                introImage: "./images/bohemio/bohemio.jpg",
                cards: [
                    { room: "Salon creativo", note: "Cojines con patrones y obras en galeria.", image: "./images/bohemio/bohemio-salon.jpg" },
                    { room: "Rincon de lectura", note: "Butaca vintage y lampara calida.", image: "./images/bohemio/bohemio-rincon.jpg" },
                    { room: "Terraza chill", note: "Fibras, faroles y vegetacion abundante.", image: "./images/bohemio/bohemio-terraza.jpg" }
                ]
            },
            industrial: {
                title: "Galeria Industrial",
                description: "Materiales honestos: metal, hormigon y madera oscura.",
                intro: "La decoracion industrial apuesta por la autenticidad de los materiales: metal, madera oscura, cuero y superficies minerales con presencia. Funciona muy bien cuando contrastas piezas robustas con luz calida y detalles suaves para equilibrar; asi transformas un entorno urbano en un espacio sofisticado, funcional y con identidad contemporanea.",
                introImage: "./images/industrial/industrial.jpg",
                cards: [
                    { room: "Loft urbano", note: "Muros de ladrillo y estanterias metalicas.", image: "images/industrial-loft.jpg" },
                    { room: "Cocina factory", note: "Taburetes altos y luminarias de hierro.", image: "images/industrial-cocina.jpg" },
                    { room: "Home office", note: "Escritorio robusto y cuero envejecido.", image: "images/industrial-office.jpg" }
                ]
            }
        };

        const tips = [
            "Combina 3 texturas distintas en una misma zona para dar profundidad visual.",
            "Si el techo es bajo, usa cortinas desde arriba de la ventana para alargar la pared.",
            "Los espejos frente a una entrada de luz multiplican claridad y amplitud.",
            "Agrupa objetos decorativos en numero impar para composiciones mas dinamicas."
        ];

        const panoramaImages = [
            { image: "images/panoramica-1.jpg", alt: "Vista panoramica de sala principal" },
            { image: "images/panoramica-2.jpg", alt: "Vista panoramica de comedor y cocina" },
            { image: "images/panoramica-3.jpg", alt: "Vista panoramica de dormitorio" }
        ];

        const pricingByRoom = [
            {
                room: "Salon",
                plans: [
                    {
                        name: "Compacto",
                        size: "12 - 16 m2",
                        price: "EUR 2,800 - 5,500",
                        description: "Distribucion funcional con foco en circulacion y almacenaje ligero.",
                        walls: [
                            { x: 48, y: 8, length: 62, angle: 90 },
                            { x: 48, y: 48, length: 44, angle: 0 },
                            { x: 8, y: 30, length: 24, angle: 0 }
                        ],
                        items: [
                            { label: "Sofa", type: "sofa", x: 7, y: 58, w: 44, h: 28 },
                            { label: "TV", type: "tv", x: 69, y: 20, w: 20, h: 14 },
                            { label: "Mesa", type: "table", x: 55, y: 57, w: 20, h: 17 },
                            { label: "Mueble", type: "storage", x: 7, y: 16, w: 34, h: 14 }
                        ]
                    },
                    {
                        name: "Espacioso",
                        size: "24 - 34 m2",
                        price: "EUR 6,500 - 12,800",
                        description: "Zona social amplia, lectura lateral y composicion decorativa completa.",
                        walls: [
                            { x: 41, y: 8, length: 64, angle: 90 },
                            { x: 41, y: 34, length: 45, angle: 0 },
                            { x: 68, y: 34, length: 43, angle: 90 }
                        ],
                        items: [
                            { label: "Sofa", type: "sofa", x: 8, y: 58, w: 34, h: 26 },
                            { label: "Sofa 2", type: "sofa", x: 47, y: 58, w: 25, h: 26 },
                            { label: "TV", type: "tv", x: 75, y: 19, w: 17, h: 14 },
                            { label: "Mesa", type: "table", x: 40, y: 36, w: 16, h: 14 },
                            { label: "Librero", type: "storage", x: 9, y: 15, w: 26, h: 13 }
                        ]
                    }
                ]
            },
            {
                room: "Cocina",
                plans: [
                    {
                        name: "Compacta",
                        size: "8 - 12 m2",
                        price: "EUR 3,200 - 7,200",
                        description: "Formato en L con triangulo de trabajo optimizado y comedor integrado.",
                        walls: [
                            { x: 46, y: 10, length: 70, angle: 90 },
                            { x: 46, y: 45, length: 46, angle: 0 },
                            { x: 72, y: 10, length: 34, angle: 90 }
                        ],
                        items: [
                            { label: "Encimera", type: "counter", x: 8, y: 12, w: 37, h: 14 },
                            { label: "Encimera", type: "counter", x: 8, y: 31, w: 20, h: 42 },
                            { label: "Mesa", type: "table", x: 51, y: 47, w: 24, h: 21 },
                            { label: "Frigo", type: "appliance", x: 78, y: 15, w: 13, h: 21 }
                        ]
                    },
                    {
                        name: "Espaciosa",
                        size: "16 - 24 m2",
                        price: "EUR 8,500 - 16,900",
                        description: "Isla central, mas almacenaje alto y zona de apoyo para invitados.",
                        walls: [
                            { x: 42, y: 9, length: 73, angle: 90 },
                            { x: 42, y: 33, length: 48, angle: 0 },
                            { x: 70, y: 33, length: 49, angle: 90 }
                        ],
                        items: [
                            { label: "Linea A", type: "counter", x: 7, y: 12, w: 33, h: 13 },
                            { label: "Linea B", type: "counter", x: 7, y: 29, w: 21, h: 41 },
                            { label: "Isla", type: "island", x: 44, y: 40, w: 24, h: 18 },
                            { label: "Comedor", type: "table", x: 73, y: 44, w: 19, h: 25 },
                            { label: "Frigo", type: "appliance", x: 79, y: 13, w: 13, h: 20 }
                        ]
                    }
                ]
            },
            {
                room: "Habitacion",
                plans: [
                    {
                        name: "Compacta",
                        size: "10 - 14 m2",
                        price: "EUR 2,200 - 4,900",
                        description: "Cama principal, armario lineal y escritorio compacto sin saturar el paso.",
                        walls: [
                            { x: 54, y: 8, length: 74, angle: 90 },
                            { x: 54, y: 40, length: 36, angle: 0 },
                            { x: 28, y: 40, length: 28, angle: 90 }
                        ],
                        items: [
                            { label: "Cama", type: "bed", x: 10, y: 34, w: 38, h: 44 },
                            { label: "Armario", type: "storage", x: 57, y: 16, w: 34, h: 16 },
                            { label: "Escritorio", type: "table", x: 60, y: 40, w: 29, h: 18 }
                        ]
                    },
                    {
                        name: "Espaciosa",
                        size: "18 - 28 m2",
                        price: "EUR 5,600 - 11,600",
                        description: "Area de descanso amplia con vestidor, tocador y zona de lectura.",
                        walls: [
                            { x: 47, y: 8, length: 75, angle: 90 },
                            { x: 47, y: 34, length: 44, angle: 0 },
                            { x: 72, y: 34, length: 46, angle: 90 }
                        ],
                        items: [
                            { label: "Cama", type: "bed", x: 11, y: 31, w: 32, h: 45 },
                            { label: "Vestidor", type: "storage", x: 50, y: 13, w: 40, h: 19 },
                            { label: "Tocador", type: "table", x: 53, y: 40, w: 19, h: 15 },
                            { label: "Butaca", type: "sofa", x: 74, y: 44, w: 17, h: 22 }
                        ]
                    }
                ]
            }
        ];

        function App() {
            const [styleKey, setStyleKey] = React.useState("nordico");
            const [showingStyleInfo, setShowingStyleInfo] = React.useState(true); 
            const [showWelcome, setShowWelcome] = React.useState(true);

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
                    { threshold: 0.18, rootMargin: "0px 0px -40px 0px" }
                );

                items.forEach((item) => observer.observe(item));

                return () => {
                    items.forEach((item) => observer.unobserve(item));
                    observer.disconnect();
                };
            }, [styleKey, showWelcome]);

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
                    {showWelcome && (
                        <section className="welcome reveal from-top" data-reveal>
                            <div className="welcome-layout">
                                <div className="welcome-copy">
                                    <h2>Bienvenido a Interiores Vivo</h2>
                                    <p>
                                        Este espacio esta pensado para inspirarte con propuestas reales de decoracion interior,
                                        ayudandote a visualizar como se transforman salas, comedores, dormitorios y zonas de trabajo
                                        mediante una seleccion cuidada de colores, materiales, iluminacion y distribucion del mobiliario.
                                    </p>
                                    <p>
                                        Recorre cada estilo, compara atmosferas y descubre ideas aplicables a tu hogar sin necesidad
                                        de conocimientos tecnicos: aqui encontraras referencias visuales, descripciones detalladas y
                                        sugerencias practicas para que tomes decisiones con confianza, coherencia estetica y personalidad propia.
                                    </p>
                                    <button className="btn primary" onClick={() => setShowWelcome(false)}>
                                        Comenzar a explorar
                                    </button>
                                </div>

                                <img
                                    className="welcome-logo-slot"
                                    src="./images/logo2.png"
                                    alt="Espacio para tu logo de marca"
                                    onError={(event) => {
                                        event.currentTarget.removeAttribute("src");
                                       
                                    }}
                                />
                            </div>
                        </section>
                    )}

                    <section className="hero reveal from-top" data-reveal>
                       
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

                        <div className="actions">
                            <button className="btn primary" onClick={() => setShowingStyleInfo((prev) => !prev)}>
                                Cambiar enfoque
                            </button>
                            <button className="btn" onClick={pickRandomTip}>Sugerencia rapida</button>
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

                    <section className="reveal from-left" data-reveal>
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

                   

                    <section className="panorama-section reveal from-top" data-reveal>
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

                    <section className="price-section reveal from-top" data-reveal>
                        <div className="section-head">
                            <h2>Rango de Precios y Planos 2D</h2>
                            <p>Estimaciones orientativas segun tamano y nivel de equipamiento.</p>
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
                                            <div className="plan-variant" key={`${roomGroup.room}-${plan.name}`}>
                                                <div className="plan-meta">
                                                    <h4>{plan.name}</h4>
                                                    <p>{plan.size}</p>
                                                    <p className="plan-price">{plan.price}</p>
                                                    <p>{plan.description}</p>
                                                </div>

                                                <div
                                                    className={`plan-canvas reveal ${planIndex % 2 === 0 ? "from-top" : "from-right"}`}
                                                    data-reveal
                                                >
                                                    {plan.walls.map((wall, wallIndex) => (
                                                        <div
                                                            key={`${plan.name}-wall-${wallIndex}`}
                                                            className="plan-wall"
                                                            style={{
                                                                left: `${wall.x}%`,
                                                                top: `${wall.y}%`,
                                                                width: `${wall.length}%`,
                                                                transform: `rotate(${wall.angle}deg)`
                                                            }}
                                                        />
                                                    ))}

                                                    {plan.items.map((item, itemIndex) => (
                                                        <div
                                                            key={`${plan.name}-${item.label}-${itemIndex}`}
                                                            className={`plan-item ${item.type}`}
                                                            style={{
                                                                left: `${item.x}%`,
                                                                top: `${item.y}%`,
                                                                width: `${item.w}%`,
                                                                height: `${item.h}%`
                                                            }}
                                                            title={item.label}
                                                        >
                                                            <span>{item.label}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    <footer className="site-footer reveal from-top" data-reveal>
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
    