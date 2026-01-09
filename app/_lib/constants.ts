import { m } from "framer-motion";

export const techCardsItems = [
  {
    name: "Figma",
    description: "Design Tool",
    imageUrl: "/imgs/logos/figma-logo.svg",
    bgColor: "bg-[#0ACF83]/20",
  },
  {
    name: "TypeScript",
    description: "JavaScript but better",
    imageUrl: "/imgs/logos/typescript.svg",
    bgColor: "bg-[#3178C6]/20",
  },
  {
    name: "React",
    description: "JavaScript Library",
    imageUrl: "/imgs/logos/react.svg",
    bgColor: "bg-[#61DAFB]/20",
  },
  {
    name: "NextJS",
    description: "React framework",
    imageUrl: "/imgs/logos/nextjs.svg",
    bgColor: "bg-dark-200/10 dark:bg-white/10",
  },
  {
    name: "Tailwind",
    description: "CSS framework",
    imageUrl: "/imgs/logos/tailwind.svg",
    bgColor: "bg-[#0EA5E9]/20",
  },
  {
    name: "Git",
    description: "Version control",
    imageUrl: "/imgs/logos/git.svg",
    bgColor: "bg-[#F1502F]/20",
  },
  {
    name: "Supabase",
    description: "Backend tool",
    imageUrl: "/imgs/logos/supabase.svg",
    bgColor: "bg-[#3ECF8E]/20",
  },
  {
    name: "NodeJS",
    description: "Backend",
    imageUrl: "/imgs/logos/node-js.svg",
    bgColor: "bg-[#689F63]/30",
  },
  {
    name: "MongoDB",
    description: "NoSQL database",
    imageUrl: "/imgs/logos/mongodb.svg",
    bgColor: "bg-[#599636]/30",
  },
  {
    name: "Prisma",
    description: "ORM",
    imageUrl: "/imgs/logos/prisma.svg",
    bgColor: "bg-[#0C344B]/20",
  },
  {
    name: "PostgreSQL",
    description: "OR database system",
    imageUrl: "/imgs/logos/postgresql.svg",
    bgColor: "bg-[#336791]/20",
  },
  {
    name: "Vue",
    description: "JavaScript framework",
    imageUrl: "/imgs/logos/vue.svg",
    bgColor: "bg-[#3fb984]/20",
  },
];

export const workExperiences = [
  {
    id: "playstation",
    heading: "PlayStation",
    subheading: "Software Engineer (Contract) · Jul 2024 – Jul 2025",
    description:
      "Developed and maintained internal SDKs and C++ libraries powering PlayStation’s machine learning deployments on console. Enabled real-time inference, seamless platform integration, and reliable over-the-air ML updates used by millions of devices worldwide.",
    companyLogo: "/imgs/work/playstation.png",
    techStack: [
      "C++",
      "TypeScript",
      "React",
      "React Native",
      "TensorFlow Lite",
      "LiteRT",
      "AWS",
      "CI/CD",
      "A/B Testing",
    ],
    liveDemoUrl: "",
    sourceCodeUrl: "",
  },
  {
    id: "google",
    heading: "Google",
    subheading: "Software Engineering Fellow · Nov 2024 – Feb 2025",
    description:
      "Refactored and optimized UI components for performance and accessibility. Collaborated with product and engineering leads to ship features ahead of schedule and support multiple high-impact launches.",
    companyLogo: "/imgs/work/techprep.jpg",
    techStack: [
      "React",
      "TypeScript",
      "UI/UX Optimization",
      "Agile/Scrum",
    ],
    liveDemoUrl: "",
    sourceCodeUrl: "",
  },
  {
    id: "techtonica",
    heading: "Techtonica",
    subheading: "Full-Stack Software Engineer · Nov 2022 – Dec 2023",
    description:
      "Built and scaled production-ready React-based curriculum tools for 600+ developers. Led cross-functional teams and implemented robust front-end and back-end systems using modern web technologies.",
    companyLogo: "/imgs/work/techtonica.jpg",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "OpenAPI",
      "Agile/Scrum",
      "Testing",
    ],
    liveDemoUrl: "",
    sourceCodeUrl: "",
  },
  {
    id: "edge-in-tech",
    heading: "EDGE in Tech™ (UC Berkeley)",
    subheading: "Software Developer · Aug 2021 – May 2022",
    description:
      "Developed responsive React UI components for applications visualizing large-scale testing data and maintained Python-based analysis tooling to improve education technology insights.",
    companyLogo: "/imgs/work/ucberkeley.jpg",
    techStack: [
      "React",
      "Python",
      "Data Analysis",
      "UI Development",
      "Visualization",
    ],
    liveDemoUrl: "",
    sourceCodeUrl: "",
  },
  {
    id: "uc-berkeley-research",
    heading: "UC Berkeley",
    subheading: "Undergraduate Researcher · Sep 2021 – May 2022",
    description:
      "Worked on a distributed real-time data processing system for financial market analysis, handling high-throughput data streams with low-latency and high-availability requirements.",
    companyLogo: "/imgs/work/school_education.jpg",
    techStack: [
      "Python",
      "FastAPI",
      "Apache Kafka",
      "Redis",
      "Celery",
      "Elasticsearch",
      "Docker",
      "Distributed Systems",
    ],
    liveDemoUrl: "",
    sourceCodeUrl: "",
  },
];

export const portfolioProjects = [
  {
    id: "shoptidy",
    heading: "Shoptidy",
    subheading: "a modern e-commerce website",
    description:
      "A modern website with all ecommerce functionalities. It includes features like product browsing, shopping cart, user authentication, ordering a product... The application is developed with react + typescript for frontend part, and Supabase as backend.",
    imageUrl: "/imgs/projects/portfolio-mockup2.png",
    techStack: [
      "TypeScript",
      "React",
      "Redux",
      "Supabase",
      "TailwindCSS",
      "shadcn/ui",
    ],
    liveDemoUrl: "",
    sourceCodeUrl: "",
  },
  {
    id: "exptracker",
    heading: "ExpenseTracker",
    subheading: "application for tracking your incomes and expenses.",
    description:
      "Track your incomes and expenses in an easy way. Clear chart overviews will improve your organization. The application is developed with react + typescript for frontend part, and nodejs with mongodb.",
    imageUrl: "/imgs/projects/portfolio-mockup4.png",
    techStack: [
      "TypeScript",
      "React",
      "NodeJS",
      "MongoDB",
      "ExpressJS",
      "TailwindCSS",
      "shadcn/ui",
    ],
    liveDemoUrl: "",
    sourceCodeUrl: "",
  },
  {
    id: "socialsphere",
    heading: "SocialSphere",
    subheading: "connect with your friends online",
    description:
      "Beautifully designed social media application with all functionalities of modern social app. Users can create, edit, and delete posts, as well as explore posts from others. The app features profile management where users can view and edit their profiles, and also save posts for later.",
    imageUrl: "/imgs/projects/portfolio-mockup1.png",
    techStack: [
      "JavaScript",
      "React",
      "CRUD",
      "Appwrite",
      "TailwindCSS",
      "TanStack",
    ],
    liveDemoUrl: "",
    sourceCodeUrl: "",
  },
  {
    id: "nextcut",
    heading: "NextCut",
    subheading: "a fresh cut in a few clicks",
    description:
      "A responsive web application designed to schedule and manage barber appointments. Potentional customers can create their account and schedule a new haircut. There is clearly defined period of time that is awailable for bookings. Admin have information about all appointments on dashboard page, and he is able to manage them in few clicks.",
    imageUrl: "/imgs/projects/portfolio-mockup3.jpg",
    techStack: [
      "TypeScript",
      "NextJS",
      "Appwrite",
      "TailwindCSS",
      "Advanced forms",
    ],
    liveDemoUrl: "",
    sourceCodeUrl: "",
  },
];

export const tooltipItems = [
  {
    id: 1,
    name: "Michelle Glauser",
    designation: "Great Engineer!",
    image: "/imgs/avatars/Michelle.jpeg",
  },
  {
    id: 2,
    name: "Matt Maher",
    designation: "Highly recommended!",
    image: "/imgs/avatars/Matt.jpg",
  },
  {
    id: 3,
    name: "Karena Tyan",
    designation: "Key contributor!",
    image: "/imgs/avatars/Karena.jpg",
  },
  {
    id: 4,
    name: "Keri Carpenter",
    designation: "Exceeded Expectations!",
    image: "/imgs/avatars/Keri.jpg",
  },
  {
    id: 5,
    name: "Anil Aksay",
    designation: "Great job!",
    image: "/imgs/avatars/Anil.jpg",
  },
];

export const testimonialItems = [
  {
    id: 1,
    stars: 5,
    name: "Anil Aksay",
    proffesion: "Staff Engineer at Linkedin",
    description:
      "“Working with Rahma was a very smooth experience. Always ready to answer questions or provide  updates. She is enthusiastic in suggesting improvements. If you're looking for a reliable developer who brings efficiency to the table, Rahma is the right person.”",
    image: "/imgs/avatars/Anil.jpg",
  },
  {
    id: 2,
    stars: 5,
    name: "Keri Carpenter",
    proffesion: "Senior Engineering Manager at Sony Interactive Entertainment",
    description:
      "Rahma is an outstanding professional and presents consistently high level of work. During our work together, she has demonstrated extraordinary skills in simplifying complex ideas into clean, functional, and visually appealing designs. Her communication is to the point and time management is perfect, even for the most pressing deadlines. I would highly recommend her to any company looking to bring on a fullstack software developer with strong technical skills and an keen eye for design.”",
    image: "/imgs/avatars/Keri.jpg",
  },
  {
    id: 3,
    stars: 5,
    name: "Karena Tyan",
    proffesion: "Staff Technical Program Manager at Sony Interactive Media",
    description:
      "Rahma is such an incredible member of our team, so productive, positibe, and collabrorative. I am envious of wherever she goes next. They'll be lucky to have her! On several occasions, I have had the privilege to work with Rahma, and she has never failed to impress. She pays attention to the project requirements, raises up some pertinent issues, and most importantly delivers beyond the call of duty. Rahma is the kind of person who adds value to the team she's in!”",
    image: "/imgs/avatars/Karena.jpg",
  },
];

export const mainNavigationLinks = [
  {
    url: "/",
    label: "Home",
  },
  {
    url: "#work",
    label: "Work",
  },
  {
    url: "#about",
    label: "About",
  },
  {
    url: "#contact",
    label: "Contact",
  },
];

export const socialLinks = [
  {
    url: "https://www.linkedin.com/in/rahmamahdi/",
    label: "LinkedIn",
  },
  {
    url: "https://github.com/rahmamahdi02",
    label: "Github",
  },
];
