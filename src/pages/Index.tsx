import { Squares } from "@/components/ui/squares-background"
import { ProjectCarousel } from "@/components/project-carousel"
import { Button } from "@/components/ui/button"
import { Github, Mail, ArrowDown } from "lucide-react"

const Index = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Animated Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Squares 
            direction="diagonal"
            speed={0.5}
            squareSize={40}
            borderColor="hsl(var(--grid-border))"
            hoverFillColor="hsl(var(--grid-hover))"
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6 tracking-tight">
              HIS WORK
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A collection of websites and applications crafted with passion, 
              precision, and cutting-edge technology.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow transition-all duration-300 hover:shadow-glow/80"
            >
              View Projects
              <ArrowDown className="ml-2 w-4 h-4" />
            </Button>
            
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="lg"
                className="border-border backdrop-blur-sm"
                asChild
              >
                <a href="https://github.com/asanda9999" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-border backdrop-blur-sm"
                asChild
              >
                <a href="mailto:asandamkhize9@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </a>
              </Button>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-muted-foreground mx-auto" />
          </div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none" />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-48 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-28">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-10">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
              Each project represents a unique challenge solved with innovative 
              solutions and modern web technologies. Drag to explore the 3D carousel.
            </p>
          </div>
          
          <div className="py-16">
            <ProjectCarousel />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 backdrop-blur-sm py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4">
         All rights reserved © 2025 Hydra Tech.
          </p>
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://github.com/asanda9999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:asandamkhize9@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index