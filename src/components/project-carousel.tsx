import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel"
import podImage from "@/assets/pod.jpg"
import todo from "@/assets/to-do-list.jpg"
import Hydra from "@/assets/world-wide-web.jpg"
import Anchor from "@/assets/anchor.jpg"
import Oracle from "@/assets/generative.jpg"
import XO from "@/assets/tic-tac-toe.jpg"
import Tracker from "@/assets/expenses.jpg"


const projects = [
  // Template for adding your own projects:
  // {
  //   id: "unique-id",                    // Unique identifier for the project
  //   title: "Your Project Title",        // Project name (displayed on card)
  //   description: "Brief description...", // 2-3 sentence description
  //   image: projectImage,                // Import your image from assets
  //   technologies: ["Tech1", "Tech2"],   // Array of technologies used
  //   liveUrl: "https://your-project.com", // Live demo URL (optional)
  //   githubUrl: "https://github.com/...", // GitHub repository URL (optional)
  //   year: "2024"                        // Year the project was completed
  // },

  // Example of your custom project:
  {
    id: "my-project-1",
    title: "Podcast App",
    description: "A modern podcast streaming platform that allows users to discover, stream, and manage their favorite podcasts. Features include audio playback controls, episode search, playlist management, and responsive design for seamless listening across all devices.",
    image: podImage,
    technologies: ["React", "JavaScript", "Vercel", "HTML", "CSS"],
    liveUrl: "https://asamkh-25103-fto-2502-group-a-asand.vercel.app/",
    githubUrl: "https://github.com/asanda9999/ASAMKH25103_FTO2502_GroupA_ASANDA-MKHIZE_DJSPP.git",
    year: "2025"
  },

  // Add more of your projects here:
  {
    id: "my-project-2",
    title: "Hydra Website",
    description: "An IT solutions company website specializing in creating custom landing pages for small businesses. Features modern design, lead generation forms, service showcases, and responsive layouts optimized for conversion and user engagement.",
    image: Hydra,
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Vercel"],
    liveUrl: "https://my-portfolio.vercel.app",
    githubUrl: "https://github.com/yourusername/portfolio",
    year: "2025"
  },

  {
    id: "my-project-3",
    title: "Kanban App",
    description: "A collaborative task management application built with the Kanban methodology. Features drag-and-drop task organization, real-time updates, team collaboration tools, and intuitive project tracking with customizable boards and task categories. Fetches and manages tasks through RESTful API integration.",
    image: todo,
    technologies: ["JavaScript","HTML", "Vercel ", "CSS"],
    liveUrl: "https://asamkh-25103-fto-2502-group-a1-asan.vercel.app/",
    githubUrl: "https://github.com/asanda9999/ASAMKH25103_FTO2502_GROUP-A1_ASANDA_MKHIZEJSL-2025-Portfolio-Piece.git",
    year: "2025"
  },

  {
    id: "6",
    title: "Womarite Website",
    description: "Dynamic social media platform with real-time messaging, media sharing, user profiles, and advanced privacy controls. Built for scalability and user engagement.",
    image: Anchor,
    technologies: ["React", "Typescript", "Framer-motion", "Vercel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    year: "2025"
  },
    {
    id: "7",
    title: "AI Oracle",
    description: "AI-powered oracle service providing real-time answers of my personal experience and knowledge. Features natural language processing, personalized responses, and a user-friendly interface.",
    image: Oracle,
    technologies: ["React", "JavaScript", "Vercel"],
    liveUrl: "https://asanda-ai-oracle.vercel.app/",
    githubUrl: "https://github.com/asanda9999/asanda-ai-oracle.git",
    year: "2025"
  },

      {
    id: "8",
    title: "Tic Tac Toe",
    description: "Classic Tic Tac Toe game with multiplayer mode, and a sleek design.",
    image: XO,
    technologies: ["HTML", "JavaScript", "Vercel","CSS"],
    liveUrl: "https://tic-tac-mocha.vercel.app/",
    githubUrl: "https://github.com/asanda9999/tic-tac.git",
    year: "2025"
  },

      {
    id: "9",
    title: "Expense Tracker",
    description: "A personal finance application that helps users track their expenses and visualize spending habits. Features include expense categorization and detailed financial reports.",
    image: Tracker,
    technologies: ["C#", "ASP.NET MVC", "Bootstrap", "SQL Server"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/asanda9999/Exepnse-Tracker.git",
    year: "2025"
  }
]

export function ProjectCarousel() {
  return (
    <div className="w-full">
      <ThreeDPhotoCarousel projects={projects} />
    </div>
  )
}