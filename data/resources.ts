import type { Resource } from "@/types/resource";

export const developerResources: Resource[] = [
  // --- Web Fundamentals & Languages ---
  {
    id: "1",
    slug: "mdn-web-docs",
    title: "MDN Web Docs",
    description: "Resources for developers, by developers. The definitive guide to HTML, CSS, and JavaScript.",
    url: "https://developer.mozilla.org",
    category: "Web Development",
    type: "documentation",
    technologies: ["HTML", "CSS", "JavaScript"],
    tags: ["frontend", "reference", "web"],
    dateAdded: "2026-01-15"
  },
  {
    id: "2",
    slug: "typescript-handbook",
    title: "TypeScript Handbook",
    description: "A comprehensive guide to TypeScript language features, types, and best practices.",
    url: "https://www.typescriptlang.org/docs/",
    category: "Languages",
    type: "documentation",
    technologies: ["TypeScript", "JavaScript"],
    tags: ["types", "programming", "compiler"],
    dateAdded: "2026-01-18"
  },
  {
    id: "3",
    slug: "python-tutorial",
    title: "The Python Tutorial",
    description: "Official guide covering basic and advanced concepts of the Python programming language.",
    url: "https://docs.python.org/3/tutorial/index.html",
    category: "Languages",
    type: "tutorial",
    technologies: ["Python"],
    tags: ["backend", "scripting", "data-science"],
    dateAdded: "2026-02-20"
  },
  {
    id: "4",
    slug: "rust-book",
    title: "The Rust Programming Language (The Book)",
    description: "The official introductory book to Rust, covering memory safety, concurrency, and fearless refactoring.",
    url: "https://doc.rust-lang.org/book/",
    category: "Languages",
    type: "documentation",
    technologies: ["Rust"],
    tags: ["systems", "performance", "memory-safety"],
    dateAdded: "2026-02-21"
  },
  {
    id: "5",
    slug: "golang-tour",
    title: "A Tour of Go",
    description: "An interactive introduction to Go covering basic syntax, methods, interfaces, and concurrency.",
    url: "https://tour.golang.org",
    category: "Languages",
    type: "tutorial",
    technologies: ["Go"],
    tags: ["backend", "concurrency", "cloud"],
    dateAdded: "2026-02-22"
  },

  // --- Frontend Frameworks & Libraries ---
  {
    id: "6",
    slug: "react-docs",
    title: "React Official Documentation",
    description: "The library for web and native user interfaces. Learn React with interactive examples.",
    url: "https://react.dev",
    category: "Frontend Frameworks",
    type: "documentation",
    technologies: ["React", "JavaScript", "TypeScript"],
    tags: ["ui", "frontend", "components"],
    dateAdded: "2026-01-16"
  },
  {
    id: "7",
    slug: "nextjs-docs",
    title: "Next.js Documentation",
    description: "The React Framework for the Web supporting server-side rendering and static site generation.",
    url: "https://nextjs.org/docs",
    category: "Frontend Frameworks",
    type: "documentation",
    technologies: ["React", "Next.js", "TypeScript"],
    tags: ["ssr", "fullstack", "react"],
    dateAdded: "2026-02-23"
  },
  {
    id: "8",
    slug: "vuejs-guide",
    title: "Vue.js Documentation",
    description: "The progressive JavaScript framework for building approachable and performant user interfaces.",
    url: "https://vuejs.org/guide/introduction.html",
    category: "Frontend Frameworks",
    type: "documentation",
    technologies: ["Vue.js", "JavaScript"],
    tags: ["frontend", "progressive", "reactive"],
    dateAdded: "2026-02-24"
  },
  {
    id: "9",
    slug: "angular-docs",
    title: "Angular Documentation",
    description: "The web development framework for building scalable web applications and enterprise apps.",
    url: "https://angular.io/docs",
    category: "Frontend Frameworks",
    type: "documentation",
    technologies: ["Angular", "TypeScript"],
    tags: ["enterprise", "spa", "typescript"],
    dateAdded: "2026-02-25"
  },
  {
    id: "10",
    slug: "svelte-tutorial",
    title: "Svelte Tutorial",
    description: "Learn Svelte, a compiler that transforms declarative components into surgically precise DOM updates.",
    url: "https://svelte.dev/tutorial",
    category: "Frontend Frameworks",
    type: "tutorial",
    technologies: ["Svelte", "JavaScript"],
    tags: ["compiler", "lightweight", "frontend"],
    dateAdded: "2026-02-26"
  },
  {
    id: "11",
    slug: "tailwind-css",
    title: "Tailwind CSS Documentation",
    description: "A utility-first CSS framework packed with classes to build any design directly in markup.",
    url: "https://tailwindcss.com/docs",
    category: "Styling",
    type: "documentation",
    technologies: ["CSS", "Tailwind CSS"],
    tags: ["frontend", "styling", "design"],
    dateAdded: "2026-02-12"
  },

  // --- Backend & APIs ---
  {
    id: "12",
    slug: "nodejs-docs",
    title: "Node.js Documentation",
    description: "Official API reference and guides for building scalable network applications with Node.js.",
    url: "https://nodejs.org/docs/latest/api/",
    category: "Backend",
    type: "documentation",
    technologies: ["Node.js", "JavaScript"],
    tags: ["backend", "runtime", "server"],
    dateAdded: "2026-02-01"
  },
  {
    id: "13",
    slug: "express-guide",
    title: "Express.js Guide",
    description: "Fast, unopinionated, minimalist web framework for building robust backend APIs in Node.js.",
    url: "https://expressjs.com/en/guide/routing.html",
    category: "Backend",
    type: "guide",
    technologies: ["Node.js", "Express", "JavaScript"],
    tags: ["api", "backend", "web-server"],
    dateAdded: "2026-02-27"
  },
  {
    id: "14",
    slug: "fastapi-tutorial",
    title: "FastAPI Documentation",
    description: "Modern, fast web framework for building APIs with Python based on standard type hints.",
    url: "https://fastapi.tiangolo.com/tutorial/",
    category: "Backend",
    type: "tutorial",
    technologies: ["Python", "FastAPI"],
    tags: ["api", "async", "python"],
    dateAdded: "2026-02-28"
  },
  {
    id: "15",
    slug: "django-docs",
    title: "Django Documentation",
    description: "The web framework for perfectionists with deadlines, emphasizing rapid development and clean design.",
    url: "https://docs.djangoproject.com/",
    category: "Backend",
    type: "documentation",
    technologies: ["Python", "Django"],
    tags: ["fullstack", "orm", "python"],
    dateAdded: "2026-03-01"
  },
  {
    id: "16",
    slug: "graphql-docs",
    title: "GraphQL Documentation",
    description: "A query language for your API and a runtime for fulfilling queries with your existing data.",
    url: "https://graphql.org/learn/",
    category: "API Development",
    type: "documentation",
    technologies: ["GraphQL", "API"],
    tags: ["api", "query-language", "backend"],
    dateAdded: "2026-03-02"
  },

  // --- Databases & Storage ---
  {
    id: "17",
    slug: "postgresql-docs",
    title: "PostgreSQL Documentation",
    description: "Comprehensive guide to the world's most advanced open source relational database.",
    url: "https://www.postgresql.org/docs/",
    category: "Databases",
    type: "documentation",
    technologies: ["PostgreSQL", "SQL"],
    tags: ["database", "sql", "storage"],
    dateAdded: "2026-02-05"
  },
  {
    id: "18",
    slug: "mongodb-docs",
    title: "MongoDB Documentation",
    description: "Developer data platform offering flexible document storage and high-performance querying.",
    url: "https://www.mongodb.com/docs/",
    category: "Databases",
    type: "documentation",
    technologies: ["MongoDB", "NoSQL"],
    tags: ["database", "nosql", "json"],
    dateAdded: "2026-03-03"
  },
  {
    id: "19",
    slug: "redis-docs",
    title: "Redis Documentation",
    description: "In-memory data store used as a distributed, in-memory key-value database, cache, and message broker.",
    url: "https://redis.io/docs/",
    category: "Databases",
    type: "documentation",
    technologies: ["Redis"],
    tags: ["cache", "in-memory", "database"],
    dateAdded: "2026-03-04"
  },
  {
    id: "20",
    slug: "prisma-docs",
    title: "Prisma Documentation",
    description: "Next-generation ORM for Node.js and TypeScript supporting PostgreSQL, MySQL, SQLite, and MongoDB.",
    url: "https://www.prisma.io/docs",
    category: "Databases",
    type: "documentation",
    technologies: ["TypeScript", "Prisma", "SQL"],
    tags: ["orm", "database", "typescript"],
    dateAdded: "2026-03-05"
  },

  // --- DevOps, Containers, & Cloud ---
  {
    id: "21",
    slug: "docker-getting-started",
    title: "Docker Getting Started Guide",
    description: "Learn how to containerize applications, manage images, and use Docker Compose.",
    url: "https://docs.docker.com/get-started/",
    category: "DevOps",
    type: "guide",
    technologies: ["Docker", "Containers"],
    tags: ["devops", "deployment", "infrastructure"],
    dateAdded: "2026-01-20"
  },
  {
    id: "22",
    slug: "kubernetes-docs",
    title: "Kubernetes Documentation",
    description: "Production-grade container orchestration system for automating deployment, scaling, and management.",
    url: "https://kubernetes.io/docs/home/",
    category: "DevOps",
    type: "documentation",
    technologies: ["Kubernetes", "Docker"],
    tags: ["orchestration", "devops", "cloud-native"],
    dateAdded: "2026-03-06"
  },
  {
    id: "23",
    slug: "terraform-docs",
    title: "Terraform Documentation",
    description: "Infrastructure as Code (IaC) tool to provision and manage cloud infrastructure safely and efficiently.",
    url: "https://developer.hashicorp.com/terraform/docs",
    category: "DevOps",
    type: "documentation",
    technologies: ["Terraform", "Cloud"],
    tags: ["iac", "devops", "infrastructure"],
    dateAdded: "2026-03-07"
  },
  {
    id: "24",
    slug: "aws-documentation",
    title: "Amazon Web Services (AWS) Documentation",
    description: "Comprehensive guides, tutorials, and API references for building on cloud infrastructure.",
    url: "https://docs.aws.amazon.com/",
    category: "Cloud",
    type: "documentation",
    technologies: ["AWS", "Cloud"],
    tags: ["cloud", "serverless", "infrastructure"],
    dateAdded: "2026-03-08"
  },
  {
    id: "25",
    slug: "github-actions-docs",
    title: "GitHub Actions Documentation",
    description: "Automate, customize, and execute your software development workflows right in your repository.",
    url: "https://docs.github.com/en/actions",
    category: "DevOps",
    type: "documentation",
    technologies: ["GitHub", "CI/CD"],
    tags: ["ci-cd", "automation", "workflow"],
    dateAdded: "2026-03-09"
  },

  // --- Version Control & Tools ---
  {
    id: "26",
    slug: "git-scm-documentation",
    title: "Git Documentation",
    description: "The official Git reference manual, Pro Git book, and command guides.",
    url: "https://git-scm.com/doc",
    category: "Version Control",
    type: "documentation",
    technologies: ["Git"],
    tags: ["version-control", "collaboration", "CLI"],
    dateAdded: "2026-01-22"
  },
  {
    id: "27",
    slug: "postman-api-platform",
    title: "Postman",
    description: "An API platform for building and using APIs through automated testing and collaboration.",
    url: "https://www.postman.com",
    category: "API Development",
    type: "tool",
    technologies: ["REST", "GraphQL", "HTTP"],
    tags: ["api", "testing", "backend"],
    dateAdded: "2026-01-25"
  },
  {
    id: "28",
    slug: "vscode-docs",
    title: "Visual Studio Code Documentation",
    description: "Get up and running with extensions, keyboard shortcuts, debugging, and settings configuration.",
    url: "https://code.visualstudio.com/docs",
    category: "Development Tools",
    type: "documentation",
    technologies: ["VS Code"],
    tags: ["editor", "ide", "productivity"],
    dateAdded: "2026-03-10"
  },
  {
    id: "29",
    slug: "figma",
    title: "Figma",
    description: "The collaborative interface design tool for teams to build meaningful products together.",
    url: "https://www.figma.com",
    category: "Design",
    type: "tool",
    technologies: ["UI/UX"],
    tags: ["design", "prototyping", "collaboration"],
    dateAdded: "2026-02-15"
  },
  {
    id: "30",
    slug: "vite-docs",
    title: "Vite Documentation",
    description: "Next-generation frontend tooling offering lightning-fast cold server start and HMR.",
    url: "https://vitejs.dev/guide/",
    category: "Development Tools",
    type: "documentation",
    technologies: ["JavaScript", "Vite", "TypeScript"],
    tags: ["bundler", "frontend", "build-tool"],
    dateAdded: "2026-03-11"
  },

  // --- Testing & Quality Assurance ---
  {
    id: "31",
    slug: "jest-docs",
    title: "Jest Testing Framework",
    description: "Delightful JavaScript Testing Framework with a focus on simplicity and snapshot testing.",
    url: "https://jestjs.io/docs/getting-started",
    category: "Testing",
    type: "documentation",
    technologies: ["JavaScript", "TypeScript", "Jest"],
    tags: ["testing", "unit-test", "qa"],
    dateAdded: "2026-03-12"
  },
  {
    id: "32",
    slug: "playwright-docs",
    title: "Playwright Documentation",
    description: "Fast and reliable end-to-end testing for modern web apps across all modern browsers.",
    url: "https://playwright.dev/docs/intro",
    category: "Testing",
    type: "documentation",
    technologies: ["JavaScript", "TypeScript"],
    tags: ["e2e", "testing", "automation"],
    dateAdded: "2026-03-13"
  },
  {
    id: "33",
    slug: "cypress-docs",
    title: "Cypress Documentation",
    description: "Next generation front end testing tool built for the modern web.",
    url: "https://docs.cypress.io",
    category: "Testing",
    type: "documentation",
    technologies: ["JavaScript", "TypeScript"],
    tags: ["e2e", "testing", "frontend"],
    dateAdded: "2026-03-14"
  },

  // --- AI & Machine Learning ---
  {
    id: "34",
    slug: "pytorch-docs",
    title: "PyTorch Documentation",
    description: "An open source machine learning framework that accelerates the path from research prototyping to production.",
    url: "https://pytorch.org/docs/stable/index.html",
    category: "AI & Machine Learning",
    type: "documentation",
    technologies: ["Python", "PyTorch"],
    tags: ["machine-learning", "deep-learning", "ai"],
    dateAdded: "2026-03-15"
  },
  {
    id: "35",
    slug: "huggingface-docs",
    title: "Hugging Face Documentation",
    description: "The AI community building the future. State-of-the-art machine learning models, datasets, and libraries.",
    url: "https://huggingface.co/docs",
    category: "AI & Machine Learning",
    type: "documentation",
    technologies: ["Python", "Transformers"],
    tags: ["ai", "llm", "nlp"],
    dateAdded: "2026-03-16"
  },
  {
    id: "36",
    slug: "openai-api-docs",
    title: "OpenAI API Documentation",
    description: "Guides and reference for integrating GPT models, embeddings, and fine-tuning into applications.",
    url: "https://platform.openai.com/docs/",
    category: "AI & Machine Learning",
    type: "documentation",
    technologies: ["Python", "JavaScript", "REST"],
    tags: ["ai", "llm", "api"],
    dateAdded: "2026-03-17"
  },

  // --- Mobile & Cross-Platform ---
  {
    id: "37",
    slug: "react-native-docs",
    title: "React Native Documentation",
    description: "Build native mobile apps using JavaScript and React.",
    url: "https://reactnative.dev/docs/getting-started",
    category: "Mobile Development",
    type: "documentation",
    technologies: ["React Native", "JavaScript", "TypeScript"],
    tags: ["mobile", "ios", "android"],
    dateAdded: "2026-03-18"
  },
  {
    id: "38",
    slug: "flutter-docs",
    title: "Flutter Documentation",
    description: "Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop.",
    url: "https://docs.flutter.dev/",
    category: "Mobile Development",
    type: "documentation",
    technologies: ["Dart", "Flutter"],
    tags: ["mobile", "cross-platform", "ui"],
    dateAdded: "2026-03-19"
  },
  {
    id: "39",
    slug: "swift-docs",
    title: "Swift.org Documentation",
    description: "Official guide and reference for Swift, powerful and intuitive programming language for iOS and macOS.",
    url: "https://www.swift.org/documentation/",
    category: "Mobile Development",
    type: "documentation",
    technologies: ["Swift", "iOS"],
    tags: ["mobile", "apple", "ios"],
    dateAdded: "2026-03-20"
  },

  // --- Learning Platforms & Courses ---
  {
    id: "40",
    slug: "freecodecamp",
    title: "freeCodeCamp",
    description: "Learn to code for free with thousands of programming tutorials, courses, and certifications.",
    url: "https://www.freecodecamp.org",
    category: "Learning Platforms",
    type: "course",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "SQL"],
    tags: ["education", "beginner", "fullstack"],
    dateAdded: "2026-02-10"
  },
  {
    id: "41",
    slug: "the-odin-project",
    title: "The Odin Project",
    description: "A free open source full stack curriculum supported by a passionate open source community.",
    url: "https://www.theodinproject.com",
    category: "Learning Platforms",
    type: "course",
    technologies: ["JavaScript", "Ruby", "HTML", "CSS"],
    tags: ["fullstack", "curriculum", "community"],
    dateAdded: "2026-03-21"
  },
  {
    id: "42",
    slug: "leetcode",
    title: "LeetCode",
    description: "The best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.",
    url: "https://leetcode.com",
    category: "Interview Prep",
    type: "tool",
    technologies: ["Algorithms", "Data Structures"],
    tags: ["interviews", "coding-challenges", "algorithms"],
    dateAdded: "2026-03-22"
  },
  {
    id: "43",
    slug: "frontend-masters",
    title: "Frontend Masters",
    description: "Advanced courses on modern frontend engineering, JavaScript, web performance, and frameworks.",
    url: "https://frontendmasters.com",
    category: "Learning Platforms",
    type: "course",
    technologies: ["JavaScript", "React", "CSS"],
    tags: ["advanced", "frontend", "masterclass"],
    dateAdded: "2026-03-23"
  },
  {
    id: "44",
    slug: "exercism",
    title: "Exercism",
    description: "Code practice and mentorship on 60+ programming languages with developer feedback.",
    url: "https://exercism.org",
    category: "Learning Platforms",
    type: "tutorial",
    technologies: ["Multiple Languages"],
    tags: ["practice", "mentorship", "exercises"],
    dateAdded: "2026-03-24"
  },

  // --- Security & Web Standards ---
  {
    id: "45",
    slug: "owasp-top-ten",
    title: "OWASP Top Ten Security Risks",
    description: "Standard awareness document representing the most critical security risks to web applications.",
    url: "https://owasp.org/www-project-top-ten/",
    category: "Security",
    type: "guide",
    technologies: ["Web Security"],
    tags: ["security", "vulnerabilities", "best-practices"],
    dateAdded: "2026-03-25"
  },
  {
    id: "46",
    slug: "caching-tutorial",
    title: "HTTP Caching Guide (MDN)",
    description: "Learn how to optimize web performance and reduce bandwidth consumption using HTTP caching headers.",
    url: "https://developer.mozilla.org/en-US/docs/Web_HTTP/Caching",
    category: "Web Development",
    type: "tutorial",
    technologies: ["HTTP", "Web"],
    tags: ["performance", "caching", "networking"],
    dateAdded: "2026-03-26"
  },

  // --- System Design & Architecture ---
  {
    id: "47",
    slug: "system-design-primer",
    title: "The System Design Primer",
    description: "Learn how to design large-scale systems and prepare for system design interviews.",
    url: "https://github.com/donnemartin/system-design-primer",
    category: "Architecture",
    type: "guide",
    technologies: ["Scalability", "Distributed Systems"],
    tags: ["system-design", "architecture", "scalability"],
    dateAdded: "2026-03-27"
  },
  {
    id: "48",
    slug: "microservices-io",
    title: "Microservices.io",
    description: "Pattern language for microservice architecture, communication, and data management.",
    url: "https://microservices.io",
    category: "Architecture",
    type: "guide",
    technologies: ["Microservices", "Architecture"],
    tags: ["patterns", "architecture", "distributed"],
    dateAdded: "2026-03-28"
  },

  // --- Community & Reference ---
  {
    id: "49",
    slug: "stackoverflow",
    title: "Stack Overflow",
    description: "The largest, most trusted online community for developers to learn, share, and troubleshoot code.",
    url: "https://stackoverflow.com",
    category: "Community",
    type: "other",
    technologies: ["Multiple Technologies"],
    tags: ["qa", "community", "troubleshooting"],
    dateAdded: "2026-03-29"
  },
  {
    id: "50",
    slug: "github",
    title: "GitHub",
    description: "The world's leading AI-powered developer platform to build, ship, and maintain software.",
    url: "https://github.com",
    category: "Version Control",
    type: "tool",
    technologies: ["Git", "CI/CD"],
    tags: ["repository", "collaboration", "open-source"],
    dateAdded: "2026-03-30"
  },
  {
    id: "51",
    slug: "regexr",
    title: "RegExr",
    description: "An online tool to learn, build, test, and debug Regular Expressions with live highlighting.",
    url: "https://regexr.com",
    category: "Development Tools",
    type: "tool",
    technologies: ["RegEx"],
    tags: ["utility", "regex", "testing"],
    dateAdded: "2026-03-31"
  },
  {
    id: "52",
    slug: "caniuse",
    title: "Can I use...",
    description: "Support tables for HTML5, CSS3, SVG and more in desktop and mobile web browsers.",
    url: "https://caniuse.com",
    category: "Web Development",
    type: "tool",
    technologies: ["HTML", "CSS", "JavaScript"],
    tags: ["browser-support", "reference", "frontend"],
    dateAdded: "2026-04-01"
  }
];