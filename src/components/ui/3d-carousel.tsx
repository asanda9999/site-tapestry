"use client"

import { memo, useEffect, useLayoutEffect, useState } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  year: string
}

const duration = 0.15
const transition = { duration }
const transitionOverlay = { duration: 0.5 }

const Carousel = memo(
  ({
    handleClick,
    controls,
    projects,
    isCarouselActive,
    onNext,
    onPrev,
  }: {
    handleClick: (project: Project, index: number) => void
    controls: any
    projects: Project[]
    isCarouselActive: boolean
    onNext: () => void
    onPrev: () => void
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
    const cylinderWidth = isScreenSizeSm ? 1000 : 1500
    const faceCount = projects.length
    const faceWidth = cylinderWidth / faceCount
    const radius = cylinderWidth / (2 * Math.PI)
    const rotation = useMotionValue(0)
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    )

    return (
      <div
        className="flex h-full items-center justify-center relative"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) =>
            isCarouselActive &&
            rotation.set(rotation.get() + info.offset.x * 0.05)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.05,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })
          }
          animate={controls}
        >
          {projects.map((project, i) => (
            <motion.div
              key={`project-${project.id}-${i}`}
              className="absolute flex h-full origin-center items-center justify-center rounded-xl bg-card/50 backdrop-blur-sm border border-border p-3"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  i * (360 / faceCount)
                }deg) translateZ(${radius}px)`,
              }}
              onClick={() => handleClick(project, i)}
            >
              <motion.div
                className="relative w-full h-full rounded-lg overflow-hidden group cursor-pointer flex items-center justify-center"
                style={{ aspectRatio: '1/1', maxWidth: '220px', maxHeight: '220px', minWidth: '180px', minHeight: '180px' }}
                initial={{ filter: "blur(4px)" }}
                animate={{ filter: "blur(0px)" }}
                transition={transition}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain"
                  style={{ maxWidth: '100%', maxHeight: '100%', aspectRatio: '1/1' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-foreground font-semibold text-base drop-shadow-lg">{project.title}</h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Navigation Controls */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center pointer-events-none z-10">
          <button
            onClick={onPrev}
            className="pointer-events-auto bg-background/80 backdrop-blur-sm border border-border rounded-full p-3 hover:bg-background/90 transition-colors shadow-lg"
            aria-label="Previous project"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button
            onClick={onNext}
            className="pointer-events-auto bg-background/80 backdrop-blur-sm border border-border rounded-full p-3 hover:bg-background/90 transition-colors shadow-lg"
            aria-label="Next project"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
        
        {/* Keyboard Navigation Hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground bg-background/50 backdrop-blur-sm px-3 py-1 rounded-full">
          Use ← → keys or drag to navigate
        </div>
      </div>
    )
  }
)

function ThreeDPhotoCarousel({ projects }: { projects: Project[] }) {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const [currentRotation, setCurrentRotation] = useState(0)
  const controls = useAnimation()

  const handleClick = (project: Project) => {
    setActiveProject(project)
    setIsCarouselActive(false)
    controls.stop()
  }

  const handleClose = () => {
    setActiveProject(null)
    setIsCarouselActive(true)
  }

  const handleNext = () => {
    const rotationPerProject = 360 / projects.length
    const newRotation = currentRotation - rotationPerProject
    setCurrentRotation(newRotation)
    controls.start({
      rotateY: newRotation,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 30,
        mass: 0.1,
      },
    })
  }

  const handlePrev = () => {
    const rotationPerProject = 360 / projects.length
    const newRotation = currentRotation + rotationPerProject
    setCurrentRotation(newRotation)
    controls.start({
      rotateY: newRotation,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 30,
        mass: 0.1,
      },
    })
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isCarouselActive) return
      
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        handlePrev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        handleNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isCarouselActive, currentRotation])

  return (
    <motion.div layout className="relative">
      <AnimatePresence mode="sync">
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-background/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            style={{ willChange: "opacity" }}
            transition={transitionOverlay}
          >
            <motion.div
              layoutId={`project-container-${activeProject.id}`}
              className="max-w-4xl w-full bg-card rounded-2xl border border-border shadow-2xl overflow-hidden"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <motion.img
                    layoutId={`project-img-${activeProject.id}`}
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-2xl font-bold text-foreground">{activeProject.title}</h2>
                    <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {activeProject.year}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {activeProject.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    {activeProject.liveUrl && (
                      <motion.a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium text-center hover:bg-primary/90 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View Live
                      </motion.a>
                    )}
                    {activeProject.githubUrl && (
                      <motion.a
                        href={activeProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-border rounded-lg font-medium hover:bg-card-hover transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        GitHub
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative h-[400px] w-full overflow-hidden">
        <Carousel
          handleClick={handleClick}
          controls={controls}
          projects={projects}
          isCarouselActive={isCarouselActive}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </div>
    </motion.div>
  )
}

export { ThreeDPhotoCarousel };