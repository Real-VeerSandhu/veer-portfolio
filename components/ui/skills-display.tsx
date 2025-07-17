import React from "react";
import { Card, CardContent } from "@/components/ui/card"; // adjust to your path

type Skills = {
  [category: string]: string[];
};

const skills: Skills = {
  "Programming Languages & Libraries": [
    "Python", "Pandas", "Numpy", "Scikit-Learn", "Tensorflow", "PyTorch", "OpenCV", "Flask", "Jupyter",
    "C++", "C", "SQL", "GraphQL", "Java", "Springboot", "JavaScript", "NodeJS", "ExpressJS", "MongoDB", "ReactJS", "NextJS"
  ],
  "Software Engineering": [
    "Object-Oriented Design", "Data Structures & Algorithms", "Software Development Life Cycle", "Operating Systems",
    "Version Control", "Relational Databases", "Agile Methodologies", "Integration Testing", "CI/CD Pipelines"
  ],
  "AI & Data Science": [
    "LLMs", "RAG", "Vector Embeddings", "Nonlinear Optimization", "Regression", "Classification", "Clustering"
  ],
  "Cloud & Data Engineering": [
    "Google Cloud Platform", "BigQuery", "GCS", "Vertex AI", "Composer", "Cloud Run", "Kubernetes",
    "Apache Airflow", "Docker", "Real-time Data Pipelines", "Distributed Systems", "Concurrency", "Memory Optimization"
  ]
};

type CategoryCardProps = {
  title: string;
  skills: string[];
};

const CategoryCard: React.FC<CategoryCardProps> = ({ title, skills }) => (
  <Card className="mb-12 rounded-xl shadow-md border border-gray-200">
    <CardContent className="p-8">
      <h2 className="text-2xl font-bold text-white text-center rounded-md py-2 mb-6"
        style={{
          background: "linear-gradient(to right, #6366f1, #3b82f6)" // Indigo to Blue
        }}
      >
        {title}
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-4 justify-center">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-indigo-100 text-indigo-800 px-4 py-2 text-sm rounded-full shadow-sm cursor-default transition-transform transform hover:scale-105 hover:bg-indigo-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsDisplay: React.FC = () => (
  <div className="px-4 md:px-12 lg:px-24 py-8">
    {Object.entries(skills).map(([category, skillList]) => (
      <CategoryCard key={category} title={category} skills={skillList} />
    ))}
  </div>
);

export default SkillsDisplay;