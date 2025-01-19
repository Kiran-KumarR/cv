import {
  ConsultlyLogo,
  MonitoLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Kiran Kumar R",
  initials: "KKR",
  location: "Bengaluru , India",
  locationLink: "https://www.google.com/maps/place/Bengaluru,+Karnataka",
  about:
    "Full Stack Dev, Building a career in Software Development.",
  summary: (
    <ol>
      <li>Software Developer with hands-on experience building dynamic, responsive web applications with a strong focus on performance, SEO optimization, and user-centric design. I&apos;m passionate about continuous learning and staying at the forefront of evolving technologies.
      </li>
    </ol>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/141916203?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "kkr1392001@gmail.com",
    tel: "+91-9008765605",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Kiran-KumarR",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kiran-kumar-r-3a8874213/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/KRYPTON_kiran",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "JSS Academy of Technical Education",
      degree: "Bachelor's of Engineering in Computer Science",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Kaplan",
      link: "https://kaplan.com/",
      badges: ["React", "Next.js", "TypeScript", "Contentful CMS", "StoryBook"],
      title: "Software Engineer 1",
      logo: ConsultlyLogo,
      start: "Aug 2023",
      end: null,
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Maintaining a repository for custom Contenful-Apps powered by Next.js (Pages Router) + working on Kaplan’s multi-domain application codebase utilizing latest Next.js 14.2.20 (App Router) for server-side rendering and optimized performance, improving SEO and reducing load times.
            </li>
            <li>
              Leveraged Forma36 UI components, Contentful’s (SDK,CDA,CMA), and React Toolkit to build user-friendly Contentful-Apps. Built Dynamic Product Upload, Form Generation, Navigation Apps.
            </li>
            <li>
              Implemented various UI components and API routes, integrating AWS Secrets Manager for secure management utilizing TTLCache, NPM-Cache for efficient caching and improved performance.
            </li>
            <li>
              Worked extensively on integrating external APIs, from Google-APIs to third-party services including GTM to enhance security and user interaction within the website.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Magna",
      link: "https://www.magna.com/",
      badges: [
        "ADAS", "VectorCAST", "GoogleTest (C++)", "DNN", "CNN"
      ],
      title: "ADAS Intern",
      logo: ParabolLogo,
      start: "Feb 2023",
      end: "July 2023",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Worked on implementing features for MobileNet SSD architecture, SqueezeNet 1.0 and Kalman filter
              algorithm, adding support for image(jpg,png) and video(mp4) formats in live stream object detection.
            </li>
            <li>
              Furthermore, used Gtest to perform functional tests and VectorCast for unit testing, achieving  maxi-
              mum code coverage for ADAS features like ISA, DOW, BSM.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Next.js",
    "React.js",
    "Context API",
    "Node.js",
    "Express.js",
    "Contentful CMS",
    "StoryBook",
    "TypeScript",
    "JavaScript",
    "Python",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Material UI",
    "Tailwind CSS",
    "Forma-36",
    "REST APIs",
    "GraphQL",
    "WebHooks",
    "Git / GitHub",
    "MySQL",
    "MongoDB",
    "Figma",
    "Postman",
    "Firebase",
    "Linux OS",
    "Docker",
    "Jenkins (CI/CD)",
  ],
  projects: [
    {
      title: "Kap-Insight",
      techStack: ["React.js", "Node.js", "CrUX", "Lighthouse", "JWT", "NLP"],
      description:
        "Comprehensive web application using the CrUX, LightHouse and custom scraper service that tries to scrape data and pass it to an AI model that provides a comprehensive data analysis dashboard.",
      logo: MonitoLogo,
      link: {
        label: "Kap-Insight",
        href: "https://github.com/Kiran-KumarR/KapInsight",
      },
    },
    {
      title: "Analytics Dashboard",
      techStack: [
        "React.js", "Apollo GraphQL", "Sequelize", "Nivo Charts"],
      description:
        "Web application designed to provide detailed insights into retail operations. It leverages seamless user experience for managing products, customers, orders, and reviews data.",
      logo: ConsultlyLogo,
      link: {
        label: "dashboard",
        href: "https://github.com/Kiran-KumarR/DataVisualization-Dashboard",
      },
    },
    {
      title: "Force Graph",
      techStack: ["Python", "React.js"],
      description:
        "2D & 3D Force-Graph of creating a complex web of dependencies that can be visualized as a clickable dependency graph or force-graph, showing all dependencies up to 5 levels.",
      logo: MonitoLogo,
      link: {
        label: "Force Graph",
        href: "https://github.com/Kiran-KumarR/forced-graph",
      },
    },
    {
      title: "Book Verse",
      techStack: ["C#", ",Net Core","MVC","xUnit"],
      description:
        "Comprehensive Web-API designed for interfacing with external book APIs and storing the obtained data in a SQL Server database. Supports a range of HTTP methods, providing robust functionality for handling various scenarios related to book information management.",
      logo: MonitoLogo,
      link: {
        label: "Book Verse",
        href: "https://github.com/Kiran-KumarR/BooksAPI",
      },
    },
    {
      title: "Smart Attendance System",
      techStack: ["Python", "OpenCV","dlib","FTP" ,"Socket Programming","PyQt5"],
      description:
        "With the assistance of this system, the instructor may take the attendance of the entire class without interruption. This proposed can read, detect and recognize faces from an image, video, and live stream.",
      logo: MonitoLogo,
      link: {
        label: "Smart Attendance System",
        href: "https://github.com/nitin-vk/face-recognition-based-attendance",
      },
    },
    {
      title: "Time-Table Management System",
      techStack: ["JavaScript", "HTML/CSS" ,"MongoDB"],
      description:
        "A college timetable is a temporal arrangement of set of lectures and classroom in which all given constraints are satisfied. By introducing a practical timetabling algorithm capable of taking care of bot strong and weak constraints effectively",
      logo: MonitoLogo,
      link: {
        label: "Time-Table Management System",
        href: "https://github.com/KiranR-max/timetable-management-system",
      },
    },
  ],
} as const;
