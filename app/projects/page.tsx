import Link from "next/link"
import { ExternalLink, Github, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      github: "https://github.com",
      demo: "https://demo.com",
      date: "2024",
      status: "Completed",
    },
    {
      title: "Weather Analytics Dashboard",
      description:
        "Real-time weather data visualization with interactive charts and forecasting. Built with Next.js and integrated with multiple weather APIs.",
      technologies: ["Next.js", "TypeScript", "Chart.js", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
      date: "2024",
      status: "In Progress",
    },
    {
      title: "Task Management API",
      description:
        "RESTful API for task management with user authentication, real-time updates, and comprehensive documentation.",
      technologies: ["Python", "FastAPI", "MongoDB", "Docker", "Redis"],
      github: "https://github.com",
      date: "2023",
      status: "Completed",
    },
    {
      title: "Mobile Expense Tracker",
      description: "Cross-platform mobile app for expense tracking with offline support and data synchronization.",
      technologies: ["React Native", "SQLite", "Redux", "Firebase"],
      github: "https://github.com",
      demo: "https://demo.com",
      date: "2023",
      status: "Completed",
    },
    {
      title: "AI Content Generator",
      description:
        "AI-powered content generation tool with multiple templates and customization options. Integrated with OpenAI API.",
      technologies: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.com",
      date: "2024",
      status: "In Progress",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website with interactive journey visualization and photo gallery. Built with modern web technologies.",
      technologies: ["Next.js", "React Flow", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com",
      demo: "https://demo.com",
      date: "2024",
      status: "Completed",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
      <Navigation />
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've worked on, from web applications to mobile apps and APIs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <Badge variant={project.status === "Completed" ? "default" : "secondary"}>{project.status}</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {project.date}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.github} className="flex items-center gap-1">
                      <Github className="w-4 h-4" />
                      Code
                    </Link>
                  </Button>
                  {project.demo && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.demo} className="flex items-center gap-1">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
