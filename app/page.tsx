import Link from "next/link"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"

export default function HomePage() {
  // const skills = ["React", "Next.js", "TypeScript", "Python", "Node.js", "PostgreSQL", "AWS", "Docker", "Git", "Figma"];
  const skills = {
    "Programming Languages & Libraries": [
      "Python",
      "Pandas",
      "Numpy",
      "Scikit-Learn",
      "Tensorflow",
      "PyTorch",
      "OpenCV",
      "Flask",
      "Jupyter",
      "C++",
      "C",
      "SQL",
      "GraphQL",
      "Java",
      "Springboot",
      "JavaScript",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "ReactJS",
      "NextJS"
    ],

    "Software Engineering": [
      "Object-Oriented Design",
      "Data Structures & Algorithms",
      "Software Development Life Cycle",
      "Operating Systems",
      "Version Control",
      "Relational Databases",
      "Agile Methodologies",
      "Integration Testing",
      "CI/CD Pipelines"
    ],

    "AI & Data Science": [
      "LLMs",
      "RAG",
      "Vector Embeddings",
      "Nonlinear Optimization",
      "Regression",
      "Classification",
      "Clustering"
    ],

    "Cloud & Data Engineering": [
      "Google Cloud Platform",
      "BigQuery",
      "GCS",
      "Vertex AI",
      "Composer",
      "Cloud Run",
      "Kubernetes",
      "Apache Airflow",
      "Docker",
      "Real-time Data Pipelines",
      "Distributed Systems",
      "Concurrency",
      "Memory Optimization"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
      <Navigation />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center text-white text-4xl font-bold">
            VS
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Veer Sandhu
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Full-stack developer passionate about creating beautiful, functional web experiences. Currently building the
            future of digital products.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com" className="flex items-center gap-2">
                <Github className="w-5 h-5" />
                GitHub
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://linkedin.com" className="flex items-center gap-2">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="mailto:john@example.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact
              </Link>
            </Button>
          </div>
        </div>

        {/* Programming Languages & Libraries */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Programming Languages & Libraries</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {skills['Programming Languages & Libraries'].map((skill) => (
                <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        {/* Software Engineering */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Software Engineering</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {skills['Software Engineering'].map((skill) => (
                <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        {/* AI & Data Science */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">AI & Data Science</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {skills['AI & Data Science'].map((skill) => (
                <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        {/* Cloud & Data Engineering & */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Cloud & Data Engineering</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {skills['Cloud & Data Engineering'].map((skill) => (
                <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Current Work Section */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6">What I'm Working On</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-lg">AI-Powered Task Manager</h3>
                <p className="text-muted-foreground">
                  Building an intelligent task management system that learns from user behavior to optimize productivity
                  and suggest better workflows.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-lg">Open Source Contributions</h3>
                <p className="text-muted-foreground">
                  Contributing to React ecosystem tools and maintaining several npm packages focused on developer
                  experience improvements.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Navigation */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <Link href="/projects" className="block">
                <h3 className="font-semibold text-lg mb-2 flex items-center justify-between">
                  Projects
                  <ArrowRight className="w-5 h-5" />
                </h3>
                <p className="text-muted-foreground">Explore my latest work and side projects</p>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <Link href="/journey" className="block">
                <h3 className="font-semibold text-lg mb-2 flex items-center justify-between">
                  Journey
                  <ArrowRight className="w-5 h-5" />
                </h3>
                <p className="text-muted-foreground">Interactive timeline of my life and career</p>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <Link href="/gallery" className="block">
                <h3 className="font-semibold text-lg mb-2 flex items-center justify-between">
                  Gallery
                  <ArrowRight className="w-5 h-5" />
                </h3>
                <p className="text-muted-foreground">Photos from my travels around the world</p>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
