import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ProjectCard } from "@/components/ui/project-card"
import projectEcommerce from "@/assets/project-ecommerce.jpg"
import projectDashboard from "@/assets/project-dashboard.jpg"
import projectPortfolio from "@/assets/project-portfolio.jpg"

const projects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with modern UI, secure payments, and inventory management. Built with React, Node.js, and PostgreSQL.",
    image: projectEcommerce,
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: "2024"
  },
  {
    id: "2",
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with data visualization, user metrics, and business intelligence features. Responsive design with dark theme support.",
    image: projectDashboard,
    technologies: ["Next.js", "TypeScript", "Chart.js", "Prisma", "shadcn/ui"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: "2024"
  },
  {
    id: "3",
    title: "Creative Portfolio",
    description: "Minimalist portfolio website showcasing creative work with smooth animations, image galleries, and contact forms. Optimized for performance.",
    image: projectPortfolio,
    technologies: ["React", "Framer Motion", "Sanity CMS", "Vercel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: "2023"
  },
  {
    id: "4",
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team collaboration, and project tracking capabilities.",
    image: projectDashboard,
    technologies: ["Vue.js", "Firebase", "Vuetify", "PWA"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: "2023"
  },
  {
    id: "5",
    title: "Blog Platform",
    description: "Modern blogging platform with markdown support, SEO optimization, and content management system. Fast and accessible.",
    image: projectPortfolio,
    technologies: ["Gatsby", "GraphQL", "Contentful", "Netlify"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: "2023"
  }
]

export function ProjectCarousel() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {projects.map((project) => (
            <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-12 bg-card/80 backdrop-blur-sm border-border hover:bg-card hover:border-primary" />
        <CarouselNext className="hidden md:flex -right-12 bg-card/80 backdrop-blur-sm border-border hover:bg-card hover:border-primary" />
      </Carousel>
    </div>
  )
}