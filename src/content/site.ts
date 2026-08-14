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
                headline: "Rolando Medina Rosner",
                lead: "For the past three years I've worked on the software Paraguay's public hospitals use every day. I mostly handle the backend and deployment, but I also led the rewrite of the frontend to React and built an offline version for the hospitals where the connection drops for days at a time.",
                ctaWork: "See my work",
                ctaContact: "Get in touch",
                location: "Asunción, Paraguay · open to remote",
            },
            about: {
                title: "About",
                lead: "Mostly backend, but I do the whole stack.",
                body: [
                    "I'm on a three-person team that builds the hospital information system clinical staff use every day across Paraguay's public hospitals. I own the inpatient clinical modules, and I'm usually the one the team comes to for the backend, deployment, and the harder frontend work.",
                    "The part I actually enjoy is the plumbing: taking a legacy module nobody could maintain and rebuilding it as a clean TypeScript app with a proper API, or keeping a hospital running through days with no connection. Lately it's meant getting a self-hosted model to answer questions about the database without ever being able to change the data.",
                    "Outside work I self-host almost everything I build: my own servers, CI, and tunnels. That's where most of my infrastructure and deployment habits come from.",
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
                            "One of three engineers on the system. I handle most of the frontend, the backend internals, and deployment, and I led both the move off the legacy code to React and the switch to containerized deploys with CI/CD.",
                        bullets: [
                            "Own inpatient clinical modules end-to-end — physician orders, diagnoses, nursing workflows, pharmacy and medication requests, and medical-history PDF export — used daily by clinical staff nationwide.",
                            "Rebuilt the largest legacy module from unmaintainable JSP and jQuery into structured TypeScript, and restructured its Struts backend into a DAO/DTO JSON API; replaced webpack with rsbuild, cutting build times by ~60%.",
                            "Chose React over Lit for the rewrite (Lit couldn't meet SSR requirements), built the entire project setup, and shipped the three most complex modules to production.",
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
                            "Ask a question in plain language and get the answer from the database, without writing any SQL yourself.",
                        description:
                            "It works out which tables matter, writes a SELECT, runs it, and shows the result as a table or chart. Nothing it generates can touch the data: every query is checked first and rejected if it isn't read-only. The whole thing runs on my own hardware, with no external API calls.",
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
                            "The tool a grain-transport company uses to track its trips, cargo, and driver pay.",
                        description:
                            "It records every trip, works out what each driver is owed, and produces the reports the national transport regulator asks for. I built all of it: the React frontend, the Flask and MySQL API, and the self-hosted pipeline that deploys it.",
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
                        live: "https://dyr.rad710.com",
                        code: "https://github.com/Rad710/dyrtransportes_react",
                        featured: true,
                        image: "/projects/dyr-transportes.png",
                    },
                    {
                        id: "sentiment-analysis",
                        name: "Sentiment Analysis on Financial News",
                        tagline:
                            "My final-year thesis: comparing NLP models (finBERT, pyABSA) at reading the tone of financial news, then checking it against how the stock actually moved. The department flagged it as one of the standout projects of the 2024 class.",
                        tech: ["PyTorch", "finBERT", "pyABSA", "pandas", "scikit-learn"],
                        featured: false,
                    },
                ],
            },
            skills: {
                title: "Skills",
                lead: "The tools I work with most, by area.",
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
                headline: "Rolando Medina Rosner",
                lead: "Los últimos tres años trabajé en el software que los hospitales públicos del Paraguay usan todos los días. Me encargo sobre todo del backend y el despliegue, pero también lideré la reescritura del frontend a React y armé una versión que sigue andando cuando el internet se cae por días.",
                ctaWork: "Ver mis proyectos",
                ctaContact: "Contactarme",
                location: "Asunción, Paraguay · abierto a remoto",
            },
            about: {
                title: "Sobre mí",
                lead: "Sobre todo backend, pero hago todo el stack.",
                body: [
                    "Estoy en un equipo de tres personas que construye el sistema de información hospitalaria que el personal clínico usa todos los días en los hospitales públicos del Paraguay. Soy dueño de los módulos clínicos de internación, y suelo ser a quien el equipo recurre para el backend, el despliegue y el frontend más complicado.",
                    "Lo que de verdad disfruto es la parte de abajo: agarrar un módulo legado que nadie podía mantener y rehacerlo como una app limpia de TypeScript con una API en condiciones, o mantener un hospital operando durante días sin conexión. Últimamente eso significó lograr que un modelo autoalojado responda preguntas sobre la base de datos sin poder modificar nunca los datos.",
                    "Fuera del trabajo autoalojo casi todo lo que hago: mis propios servidores, el CI, los túneles. De ahí viene buena parte de mis mañas de infraestructura y despliegue.",
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
                            "Uno de los tres ingenieros del sistema. Me encargo de la mayor parte del frontend, de los internals del backend y del despliegue, y lideré tanto la salida del código legado hacia React como el paso a despliegues en contenedores con CI/CD.",
                        bullets: [
                            "Soy dueño de módulos clínicos de internación de punta a punta — indicaciones médicas, diagnósticos, flujos de enfermería, farmacia y solicitudes de medicamentos, y exportación del historial clínico a PDF — usados a diario por el personal clínico a nivel nacional.",
                            "Reconstruí el módulo legado más grande, de JSP y jQuery inmantenibles a TypeScript estructurado, y reestructuré su backend en Struts hacia una API JSON con DAO/DTO; reemplacé webpack por rsbuild, reduciendo los tiempos de build en ~60%.",
                            "Elegí React sobre Lit para la reescritura (Lit no cumplía los requisitos de SSR), construí toda la configuración del proyecto y llevé a producción los tres módulos más complejos.",
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
                            "Preguntá en lenguaje natural y obtené la respuesta directo de la base de datos, sin escribir nada de SQL.",
                        description:
                            "Descubre qué tablas importan, escribe un SELECT, lo ejecuta y muestra el resultado como tabla o gráfico. Nada de lo que genera puede tocar los datos: cada consulta se revisa antes y se rechaza si no es de solo lectura. Todo corre en mi propio hardware, sin llamadas a APIs externas.",
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
                            "La herramienta con la que una empresa de transporte de granos lleva sus viajes, la carga y los pagos a los choferes.",
                        description:
                            "Registra cada viaje, calcula lo que le corresponde a cada chofer y genera los reportes que exige el ente regulador nacional de transporte. Lo hice todo: el frontend en React, la API en Flask y MySQL, y el pipeline autoalojado que lo despliega.",
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
                        live: "https://dyr.rad710.com",
                        code: "https://github.com/Rad710/dyrtransportes_react",
                        featured: true,
                        image: "/projects/dyr-transportes.png",
                    },
                    {
                        id: "sentiment-analysis",
                        name: "Análisis de Sentimiento en Noticias Financieras",
                        tagline:
                            "Mi tesis de fin de carrera: comparar modelos de NLP (finBERT, pyABSA) leyendo el tono de las noticias financieras y cruzándolo con cómo se movió realmente la acción. La facultad lo marcó como uno de los proyectos destacados de la promoción 2024.",
                        tech: ["PyTorch", "finBERT", "pyABSA", "pandas", "scikit-learn"],
                        featured: false,
                    },
                ],
            },
            skills: {
                title: "Habilidades",
                lead: "Las herramientas que más uso, por área.",
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
