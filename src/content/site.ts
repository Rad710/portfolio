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
            tagline: "A self-hostable assistant that answers questions in plain language by writing safe, read-only SQL.",
            problem:
              "Letting a language model write SQL over a real database is powerful but dangerous — one wrong query can leak or destroy data. I wanted a system that turns natural-language questions into trustworthy answers with the safety guaranteed in code, not by hoping the model behaves.",
            approach:
              "An agentic loop that retrieves the relevant schema, drafts a SELECT, runs it read-only, reads any error, and self-corrects. Safety is defense-in-depth: a SELECT-only database user, AST-level SQL validation (sqlglot) that rejects any write or dangerous function, an enforced LIMIT, and connection hardening. Results stream over SSE as structured rows the UI rebuilds into a table and chart.",
            outcome:
              "Runs for a reviewer with zero setup — a deterministic mock model and an offline embedder mean no API key or GPU needed. Backed by strict typing, an 80% test-coverage floor, full Playwright end-to-end tests, and a committed decision log. The same safe query layer is also exposed as an MCP server.",
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
          },
          {
            id: "dyr-transportes",
            name: "D y R Transportes",
            tagline: "A logistics platform in daily production use by a grain-transport company for trips, cargo, and driver payments.",
            problem:
              "A family grain-hauling company tracked every driver trip, cargo load, and payment on spreadsheets — slow, error-prone, and impossible to report on for the national transport regulator.",
            approach:
              "A full-stack app: a React + TypeScript + Vite frontend on Material UI (with the X Data Grid and Charts), and a Flask backend on a modern typed SQLAlchemy ORM over MySQL. It handles JWT auth, payroll generation, Excel exports, DINATRAN regulatory reporting, audit trails, and live database backups — all bilingual (EN/ES).",
            outcome:
              "In daily production use. Self-hosted end-to-end with a solo-built Jenkins pipeline: lint and SonarQube gates, automatic version tagging, multi-architecture Docker builds, GitHub releases, and remote deployment over SSH.",
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
          },
          {
            id: "sentiment-analysis",
            name: "Sentiment Analysis on Financial News",
            tagline: "Final degree project — recognised by faculty as an outstanding project of the 2024 cohort.",
            problem:
              "Does the tone of financial news actually track stock-price movement, and which NLP method captures it best?",
            approach:
              "Collected an original financial-news dataset and compared machine-learning methods — pyABSA and finBERT — for classifying article tone against subsequent price movement.",
            outcome:
              "Recognised by faculty as an outstanding project of the 2024 cohort.",
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
            tagline: "Un asistente autoalojable que responde preguntas en lenguaje natural escribiendo SQL seguro y de solo lectura.",
            problem:
              "Dejar que un modelo de lenguaje escriba SQL sobre una base de datos real es potente pero peligroso — una consulta mal formada puede filtrar o destruir datos. Quería un sistema que convierta preguntas en lenguaje natural en respuestas confiables, con la seguridad garantizada en el código y no confiando en que el modelo se porte bien.",
            approach:
              "Un bucle agéntico que recupera el esquema relevante, redacta un SELECT, lo ejecuta en solo lectura, lee cualquier error y se autocorrige. La seguridad es en profundidad: un usuario de base de datos solo-SELECT, validación de SQL a nivel de AST (sqlglot) que rechaza cualquier escritura o función peligrosa, un LIMIT forzado y endurecimiento de la conexión. Los resultados se transmiten por SSE como filas estructuradas que la interfaz reconstruye en tabla y gráfico.",
            outcome:
              "Corre para quien lo revise sin ninguna configuración — un modelo mock determinista y un embedder offline evitan necesitar clave de API o GPU. Respaldado por tipado estricto, un piso de 80% de cobertura de tests, pruebas end-to-end completas con Playwright y un registro de decisiones versionado. La misma capa de consultas seguras se expone además como servidor MCP.",
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
          },
          {
            id: "dyr-transportes",
            name: "D y R Transportes",
            tagline: "Una plataforma logística en uso diario en producción por una empresa de transporte de granos para viajes, carga y pagos a choferes.",
            problem:
              "Una empresa familiar de transporte de granos registraba cada viaje, carga y pago en planillas — lento, propenso a errores e imposible de reportar al ente regulador nacional de transporte.",
            approach:
              "Una app full-stack: un frontend en React + TypeScript + Vite sobre Material UI (con el X Data Grid y Charts), y un backend en Flask sobre un ORM moderno y tipado de SQLAlchemy sobre MySQL. Maneja autenticación JWT, generación de planillas de pago, exportación a Excel, reportes regulatorios para DINATRAN, trazas de auditoría y respaldos en vivo de la base de datos — todo bilingüe (EN/ES).",
            outcome:
              "En uso diario en producción. Autoalojado de punta a punta con un pipeline de Jenkins hecho en solitario: gates de lint y SonarQube, etiquetado automático de versiones, builds de Docker multiarquitectura, releases en GitHub y despliegue remoto por SSH.",
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
          },
          {
            id: "sentiment-analysis",
            name: "Análisis de Sentimiento en Noticias Financieras",
            tagline: "Proyecto final de carrera — reconocido por la facultad como un proyecto destacado de la promoción 2024.",
            problem:
              "¿El tono de las noticias financieras realmente sigue el movimiento del precio de las acciones, y qué método de NLP lo captura mejor?",
            approach:
              "Recolecté un dataset original de noticias financieras y comparé métodos de machine learning — pyABSA y finBERT — para clasificar el tono de los artículos contra el movimiento posterior del precio.",
            outcome:
              "Reconocido por la facultad como un proyecto destacado de la promoción 2024.",
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
