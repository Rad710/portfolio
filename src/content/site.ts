/**
 * Single source of truth for all site copy, as i18next resource bundles.
 * EN and ES must stay shape-identical. Structured lists (experience, projects,
 * skills) are read with `t(key, { returnObjects: true })` and typed via the
 * helpers in `src/content/types.ts`.
 */

export const resources = {
    en: {
        translation: {
            meta: {
                title: "Rolando Medina Rosner — Full-stack engineer",
                description:
                    "Full-stack engineer building and modernizing Paraguay's national hospital information system. React, TypeScript, Java, Python, and self-hosted infrastructure.",
            },
            nav: {
                about: "About",
                experience: "Experience",
                work: "Work",
                skills: "Skills",
                contact: "Contact",
                resume: "Résumé",
            },
            hero: {
                eyebrow: "Full-stack engineer",
                headline: "I build software that hospitals run on.",
                lead: "Full-stack engineer with three years building and modernizing the hospital information system used across Paraguay's national public hospital network — frontend, backend internals, deployment, and applied AI.",
                ctaWork: "See my work",
                ctaContact: "Get in touch",
                location: "Asunción, Paraguay · open to remote",
            },
            about: {
                title: "About",
                lead: "I like the parts of the stack most people avoid.",
                body: [
                    "I'm a full-stack engineer on a three-person team responsible for the hospital information system used daily by clinical staff across Paraguay's national public hospital network. I own inpatient clinical modules end-to-end and I'm the go-to person for frontend, backend internals, and deployment.",
                    "My favorite work sits below the UI: turning an unmaintainable legacy module into a structured TypeScript app and a clean JSON API, making a hospital keep working through multi-day connectivity loss, or getting a self-hosted language model to answer questions over a clinical database safely. I care about systems that stay correct under real-world constraints.",
                    "Backend-leaning by taste, but I ship the frontend too — and I care that it looks and feels right.",
                ],
            },
            experience: {
                title: "Experience",
                items: [
                    {
                        role: "Software Engineer",
                        company: "Taiwan ICDF — National Hospital Information System",
                        location: "Asunción, Paraguay",
                        period: "Mar 2024 — present",
                        summary:
                            "On a three-person team, I'm the go-to engineer for frontend, backend internals, and deployment — I led the system's legacy-to-React migration and introduced its containerized deployment and CI/CD.",
                        bullets: [
                            "Own inpatient clinical modules end-to-end — physician orders, diagnoses, nursing workflows, pharmacy and medication requests, and medical-history PDF export — used daily by clinical staff nationwide.",
                            "Rebuilt the largest legacy module from unmaintainable JSP and jQuery into structured TypeScript, and restructured its Struts backend into a DAO/DTO JSON API; replaced webpack with rsbuild to cut build times.",
                            "Evaluated Lit and React for the frontend rewrite, proposed React after Lit couldn't meet SSR requirements, built the entire project setup, and migrated the three most complex modules — shipping to production with only minor launch-day issues.",
                            "Building an offline-first PWA so rural hospitals keep operating through multi-day connectivity loss — service-worker background sync, an IndexedDB outbox, and version-tagged DTOs that migrate stale client data on reconnect.",
                            "Replaced script-based WAR deployments with a two-image Docker Compose setup; prototyped a k3s cluster with Helm and evaluated OpenYurt for edge-deployed hospital servers.",
                            "Self-hosted a language model (vLLM, quantized Gemma) and built the schema, retrieval, and prompt layer for natural-language-to-SQL queries over the clinical database.",
                        ],
                        tech: [
                            "TypeScript",
                            "React",
                            "Next.js",
                            "Java / Struts",
                            "PostgreSQL",
                            "Docker",
                            "k3s",
                            "PWA",
                            "Self-hosted LLM",
                        ],
                    },
                    {
                        role: "DevOps Engineer Jr.",
                        company: "ROSHKA S.A.",
                        location: "Asunción, Paraguay",
                        period: "Aug 2023 — Feb 2024",
                        summary:
                            "Started as a frontend developer intern on a banking web app and was hired full-time into an engineering role at the internship's conclusion.",
                        bullets: [
                            "Built Jenkins CI/CD pipelines using Git Flow and GitHub Flow, containerized services with Docker, and integrated SonarQube quality gates.",
                            "Contributed React frontend work to a banking web application as an intern; hired into a full-time engineering role at its conclusion.",
                        ],
                        tech: ["Jenkins", "Docker", "SonarQube", "React", "Git Flow"],
                    },
                ],
            },
            projects: {
                title: "Selected work",
                lead: "Two production systems I built and run, and a research project.",
                liveLabel: "Live",
                codeLabel: "Code",
                featuredLabel: "Featured",
                items: [
                    {
                        id: "text-to-sql-rag",
                        name: "Text-to-SQL RAG",
                        tagline:
                            "Ask a question in plain English and get an answer from the database — as safe, read-only SQL.",
                        description:
                            "It finds the relevant tables, writes a SELECT, runs it, and shows the result as a table or chart. Every query is validated before it runs, so the model can read the database but never change it. Runs fully self-hosted.",
                        tech: [
                            "FastAPI",
                            "Python",
                            "React 19",
                            "Tailwind v4",
                            "ChromaDB",
                            "sqlglot",
                            "Ollama / vLLM",
                            "PostgreSQL",
                            "MySQL",
                            "Docker",
                        ],
                        live: "https://dyr-ai.rad710.com/login",
                        code: "https://github.com/Rad710/text-to-sql-rag",
                        featured: true,
                        image: "/projects/text-to-sql-rag.png",
                    },
                    {
                        id: "dyr-transportes",
                        name: "D y R Transportes",
                        tagline:
                            "The logistics platform a grain-transport company runs its day-to-day on — trips, cargo, and driver payments.",
                        description:
                            "It logs trips, generates driver payrolls, and exports the reports the national transport regulator requires. I built the whole stack — the React front end, the Flask/MySQL API — and the self-hosted CI/CD pipeline that ships it.",
                        tech: [
                            "React 19",
                            "TypeScript",
                            "Vite",
                            "Material UI",
                            "Flask",
                            "SQLAlchemy 2.0",
                            "MySQL",
                            "Docker",
                            "Jenkins",
                        ],
                        live: "https://rad710.pythonanywhere.com/",
                        code: "https://github.com/Rad710/dyrtransportes_react",
                        featured: true,
                        image: "/projects/dyr-transportes.png",
                    },
                    {
                        id: "sentiment-analysis",
                        name: "Sentiment Analysis on Financial News",
                        tagline:
                            "Final-year research comparing NLP methods (pyABSA, finBERT) for classifying financial-news tone against stock-price movement — recognised by faculty as an outstanding project of the 2024 cohort.",
                        tech: ["PyTorch", "finBERT", "pyABSA", "pandas", "scikit-learn"],
                        featured: false,
                    },
                ],
            },
            skills: {
                title: "Skills",
                lead: "What I reach for, grouped by where it lives in the stack.",
                groups: [
                    {
                        label: "Languages",
                        items: ["TypeScript", "Python", "Java", "SQL", "C / C++"],
                    },
                    {
                        label: "Frontend",
                        items: [
                            "React",
                            "Next.js",
                            "PWA & service workers",
                            "IndexedDB",
                            "Tailwind CSS",
                            "Material UI",
                            "shadcn/ui",
                        ],
                    },
                    {
                        label: "Backend",
                        items: [
                            "Java (Struts, Spring Boot)",
                            "Python (Flask, FastAPI)",
                            "REST API design",
                            "SQLAlchemy",
                            "MySQL",
                            "PostgreSQL",
                        ],
                    },
                    {
                        label: "Infrastructure",
                        items: [
                            "Docker",
                            "Kubernetes (k3s)",
                            "Terraform",
                            "Proxmox",
                            "Jenkins",
                            "GitLab CI",
                            "Linux",
                        ],
                    },
                    {
                        label: "AI / Data",
                        items: [
                            "RAG",
                            "Self-hosted LLMs (vLLM)",
                            "ChromaDB",
                            "PyTorch",
                            "scikit-learn",
                            "pandas",
                        ],
                    },
                ],
            },
            languages: {
                title: "Languages",
                items: [
                    { name: "Spanish", level: "Native" },
                    { name: "English", level: "TOEFL iBT 109/120" },
                    { name: "German", level: "B1" },
                    { name: "Mandarin", level: "Elementary" },
                ],
            },
            contact: {
                title: "Let's talk",
                lead: "Open to full-stack and backend roles, remote or relocation. The fastest way to reach me is email.",
                emailLabel: "Email",
                email: "rolmedro@gmail.com",
                githubLabel: "GitHub",
                linkedinLabel: "LinkedIn",
                resumeLead: "Prefer the one-pager?",
                resumeEn: "Download CV (English)",
                resumeEs: "Descargar CV (Español)",
            },
            footer: {
                built: "Built with Next.js, React, and Tailwind. Source on GitHub.",
                rights: "Rolando Medina Rosner",
            },
        },
    },
    es: {
        translation: {
            meta: {
                title: "Rolando Medina Rosner — Ingeniero full-stack",
                description:
                    "Ingeniero full-stack que construye y moderniza el sistema de información hospitalaria de la red pública nacional del Paraguay. React, TypeScript, Java, Python e infraestructura autoalojada.",
            },
            nav: {
                about: "Sobre mí",
                experience: "Experiencia",
                work: "Proyectos",
                skills: "Habilidades",
                contact: "Contacto",
                resume: "CV",
            },
            hero: {
                eyebrow: "Ingeniero full-stack",
                headline: "Construyo el software sobre el que funcionan los hospitales.",
                lead: "Ingeniero full-stack con tres años construyendo y modernizando el sistema de información hospitalaria de la red pública nacional del Paraguay — frontend, internals del backend, despliegue e IA aplicada.",
                ctaWork: "Ver mis proyectos",
                ctaContact: "Contactarme",
                location: "Asunción, Paraguay · abierto a remoto",
            },
            about: {
                title: "Sobre mí",
                lead: "Me gustan las partes del stack que la mayoría evita.",
                body: [
                    "Soy ingeniero full-stack en un equipo de tres personas responsable del sistema de información hospitalaria que el personal clínico usa a diario en toda la red pública nacional del Paraguay. Soy dueño de módulos clínicos de internación de punta a punta y la persona de referencia para frontend, internals del backend y despliegue.",
                    "Mi trabajo favorito está debajo de la interfaz: convertir un módulo legado inmantenible en una app estructurada de TypeScript con una API JSON limpia, lograr que un hospital siga funcionando durante días sin conexión, o hacer que un modelo de lenguaje autoalojado responda de forma segura sobre una base de datos clínica. Me importan los sistemas que siguen siendo correctos bajo restricciones reales.",
                    "De preferencia backend, pero también entrego el frontend — y me importa que se vea y se sienta bien.",
                ],
            },
            experience: {
                title: "Experiencia",
                items: [
                    {
                        role: "Ingeniero de Software",
                        company: "Taiwan ICDF — Sistema Nacional de Información Hospitalaria",
                        location: "Asunción, Paraguay",
                        period: "Mar 2024 — presente",
                        summary:
                            "En un equipo de tres personas, soy la persona de referencia para frontend, internals del backend y despliegue — lideré la migración del sistema de legado a React e introduje su despliegue en contenedores y CI/CD.",
                        bullets: [
                            "Soy dueño de módulos clínicos de internación de punta a punta — indicaciones médicas, diagnósticos, flujos de enfermería, farmacia y solicitudes de medicamentos, y exportación del historial clínico a PDF — usados a diario por el personal clínico a nivel nacional.",
                            "Reconstruí el módulo legado más grande, de JSP y jQuery inmantenibles a TypeScript estructurado, y reestructuré su backend en Struts hacia una API JSON con DAO/DTO; reemplacé webpack por rsbuild para reducir los tiempos de build.",
                            "Evalué Lit y React para la reescritura del frontend, propuse React tras comprobar que Lit no cumplía los requisitos de SSR, construí toda la configuración del proyecto y migré los tres módulos más complejos — llegando a producción con solo incidencias menores el día del lanzamiento.",
                            "Construyo una PWA offline-first para que los hospitales rurales sigan operando durante días sin conexión — sincronización en segundo plano con service worker, una bandeja de salida en IndexedDB y DTOs versionados que migran datos obsoletos del cliente al reconectar.",
                            "Reemplacé los despliegues de WAR por scripts con un esquema de Docker Compose de dos imágenes; prototipé un clúster k3s con Helm y evalué OpenYurt para servidores hospitalarios en el borde.",
                            "Autoalojé un modelo de lenguaje (vLLM, Gemma cuantizado) y construí el esquema, la recuperación y la capa de prompts para consultas en lenguaje natural a SQL sobre la base de datos clínica.",
                        ],
                        tech: [
                            "TypeScript",
                            "React",
                            "Next.js",
                            "Java / Struts",
                            "PostgreSQL",
                            "Docker",
                            "k3s",
                            "PWA",
                            "LLM autoalojado",
                        ],
                    },
                    {
                        role: "Ingeniero DevOps Jr.",
                        company: "ROSHKA S.A.",
                        location: "Asunción, Paraguay",
                        period: "Ago 2023 — Feb 2024",
                        summary:
                            "Empecé como pasante de frontend en una app web bancaria y fui contratado a tiempo completo en un rol de ingeniería al finalizar la pasantía.",
                        bullets: [
                            "Construí pipelines de CI/CD en Jenkins usando Git Flow y GitHub Flow, contenericé servicios con Docker e integré quality gates de SonarQube.",
                            "Aporté trabajo de frontend en React a una aplicación web bancaria como pasante; contratado a tiempo completo en un rol de ingeniería al finalizar.",
                        ],
                        tech: ["Jenkins", "Docker", "SonarQube", "React", "Git Flow"],
                    },
                ],
            },
            projects: {
                title: "Proyectos seleccionados",
                lead: "Dos sistemas en producción que construí y mantengo, y un proyecto de investigación.",
                liveLabel: "En vivo",
                codeLabel: "Código",
                featuredLabel: "Destacado",
                items: [
                    {
                        id: "text-to-sql-rag",
                        name: "Text-to-SQL RAG",
                        tagline:
                            "Preguntá en lenguaje natural y obtené una respuesta de la base de datos — como SQL seguro y de solo lectura.",
                        description:
                            "Encuentra las tablas relevantes, escribe un SELECT, lo ejecuta y muestra el resultado como tabla o gráfico. Cada consulta se valida antes de ejecutarse, así el modelo puede leer la base de datos pero nunca modificarla. Corre totalmente autoalojado.",
                        tech: [
                            "FastAPI",
                            "Python",
                            "React 19",
                            "Tailwind v4",
                            "ChromaDB",
                            "sqlglot",
                            "Ollama / vLLM",
                            "PostgreSQL",
                            "MySQL",
                            "Docker",
                        ],
                        live: "https://dyr-ai.rad710.com/login",
                        code: "https://github.com/Rad710/text-to-sql-rag",
                        featured: true,
                        image: "/projects/text-to-sql-rag.png",
                    },
                    {
                        id: "dyr-transportes",
                        name: "D y R Transportes",
                        tagline:
                            "La plataforma logística sobre la que una empresa de transporte de granos gestiona su día a día — viajes, carga y pagos a choferes.",
                        description:
                            "Registra viajes, genera las liquidaciones de los choferes y exporta los reportes que exige el ente regulador nacional de transporte. Construí todo el stack — el front-end en React, la API en Flask/MySQL — y el pipeline de CI/CD autoalojado que lo despliega.",
                        tech: [
                            "React 19",
                            "TypeScript",
                            "Vite",
                            "Material UI",
                            "Flask",
                            "SQLAlchemy 2.0",
                            "MySQL",
                            "Docker",
                            "Jenkins",
                        ],
                        live: "https://rad710.pythonanywhere.com/",
                        code: "https://github.com/Rad710/dyrtransportes_react",
                        featured: true,
                        image: "/projects/dyr-transportes.png",
                    },
                    {
                        id: "sentiment-analysis",
                        name: "Análisis de Sentimiento en Noticias Financieras",
                        tagline:
                            "Investigación de fin de carrera comparando métodos de NLP (pyABSA, finBERT) para clasificar el tono de noticias financieras frente al movimiento del precio de las acciones — reconocido por la facultad como un proyecto destacado de la promoción 2024.",
                        tech: ["PyTorch", "finBERT", "pyABSA", "pandas", "scikit-learn"],
                        featured: false,
                    },
                ],
            },
            skills: {
                title: "Habilidades",
                lead: "Lo que uso, agrupado por dónde vive en el stack.",
                groups: [
                    {
                        label: "Lenguajes",
                        items: ["TypeScript", "Python", "Java", "SQL", "C / C++"],
                    },
                    {
                        label: "Frontend",
                        items: [
                            "React",
                            "Next.js",
                            "PWA y service workers",
                            "IndexedDB",
                            "Tailwind CSS",
                            "Material UI",
                            "shadcn/ui",
                        ],
                    },
                    {
                        label: "Backend",
                        items: [
                            "Java (Struts, Spring Boot)",
                            "Python (Flask, FastAPI)",
                            "Diseño de APIs REST",
                            "SQLAlchemy",
                            "MySQL",
                            "PostgreSQL",
                        ],
                    },
                    {
                        label: "Infraestructura",
                        items: [
                            "Docker",
                            "Kubernetes (k3s)",
                            "Terraform",
                            "Proxmox",
                            "Jenkins",
                            "GitLab CI",
                            "Linux",
                        ],
                    },
                    {
                        label: "IA / Datos",
                        items: [
                            "RAG",
                            "LLMs autoalojados (vLLM)",
                            "ChromaDB",
                            "PyTorch",
                            "scikit-learn",
                            "pandas",
                        ],
                    },
                ],
            },
            languages: {
                title: "Idiomas",
                items: [
                    { name: "Español", level: "Nativo" },
                    { name: "Inglés", level: "TOEFL iBT 109/120" },
                    { name: "Alemán", level: "B1" },
                    { name: "Mandarín", level: "Elemental" },
                ],
            },
            contact: {
                title: "Hablemos",
                lead: "Abierto a roles full-stack y backend, en remoto o con relocación. La forma más rápida de contactarme es por correo.",
                emailLabel: "Correo",
                email: "rolmedro@gmail.com",
                githubLabel: "GitHub",
                linkedinLabel: "LinkedIn",
                resumeLead: "¿Preferís el CV de una página?",
                resumeEn: "Descargar CV (Inglés)",
                resumeEs: "Descargar CV (Español)",
            },
            footer: {
                built: "Hecho con Next.js, React y Tailwind. Código en GitHub.",
                rights: "Rolando Medina Rosner",
            },
        },
    },
} as const;

/** Language-independent constants (links, handles). */
export const site = {
    name: "Rolando Medina Rosner",
    email: "rolmedro@gmail.com",
    github: "https://github.com/Rad710",
    githubHandle: "Rad710",
    linkedin: "https://www.linkedin.com/in/rolando-medina-rosner-533718238",
    repo: "https://github.com/Rad710/portfolio",
    cv: {
        en: "/cv/Rolando_Medina_Rosner_CV_EN.pdf",
        es: "/cv/Rolando_Medina_Rosner_CV_ES.pdf",
    },
} as const;
