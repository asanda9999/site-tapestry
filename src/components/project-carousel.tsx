import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel"
import projectEcommerce from "@/assets/project-ecommerce.jpg"
import projectDashboard from "@/assets/project-dashboard.jpg"
import projectPortfolio from "@/assets/project-portfolio.jpg"

const projects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with modern UI, secure payments, and inventory management. Built with React, Node.js, and PostgreSQL for optimal performance and scalability.",
    image: projectEcommerce,
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: "2024"
  },
  {
    id: "2",
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with comprehensive data visualization, user metrics, and business intelligence features. Responsive design with dark theme support and interactive charts.",
    image: projectDashboard,
    technologies: ["Next.js", "TypeScript", "Chart.js", "Prisma", "shadcn/ui"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: "2024"
  },
  {
    id: "3",
    title: "Creative Portfolio",
    description: "Minimalist portfolio website showcasing creative work with smooth animations, optimized image galleries, and integrated contact forms. Performance-optimized for fast loading.",
    image: projectPortfolio,
    technologies: ["React", "Framer Motion", "Sanity CMS", "Vercel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: "2023"
  },
  {
    id: "4",
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team collaboration tools, project tracking capabilities, and comprehensive reporting features.",
    image: projectDashboard,
    technologies: ["Vue.js", "Firebase", "Vuetify", "PWA"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: "2023"
  },
  {
    id: "5",
    title: "Blog Platform",
    description: "Modern blogging platform with markdown support, SEO optimization, content management system, and social sharing. Fast, accessible, and user-friendly interface.",
    image: projectPortfolio,
    technologies: ["Gatsby", "GraphQL", "Contentful", "Netlify"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: "2023"
  },
  {
    id: "6",
    title: "Social Media App",
    description: "Dynamic social media platform with real-time messaging, media sharing, user profiles, and advanced privacy controls. Built for scalability and user engagement.",
    image: projectEcommerce,
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: "2022"
  }
]

export function ProjectCarousel() {
  return (
    <div className="w-full">
      <ThreeDPhotoCarousel projects={projects} />
    </div>
  )
}