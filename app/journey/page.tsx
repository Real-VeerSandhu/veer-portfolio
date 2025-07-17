"use client"

import { useCallback, useState } from "react"
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
} from "reactflow"
import "reactflow/dist/style.css"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"

const initialNodes = [
  {
    id: "1",
    type: "default",
    position: { x: 250, y: 25 },
    data: {
      label: "Born in Toronto 🍼",
      details: {
        year: "1995",
        description: "Started my journey in Toronto, Canada",
        type: "personal",
      },
    },
  },
  {
    id: "2",
    type: "default",
    position: { x: 100, y: 125 },
    data: {
      label: "First Computer 💻",
      details: {
        year: "2005",
        description: "Got my first computer and discovered programming through games",
        type: "milestone",
      },
    },
  },
  {
    id: "3",
    type: "default",
    position: { x: 400, y: 125 },
    data: {
      label: "High School Graduation 🎓",
      details: {
        year: "2013",
        description: "Graduated with honors, decided to pursue Computer Science",
        type: "education",
      },
    },
  },
  {
    id: "4",
    type: "default",
    position: { x: 250, y: 225 },
    data: {
      label: "Started University 🏫",
      details: {
        year: "2013",
        description: "Began Computer Science degree at University of Toronto",
        type: "education",
      },
    },
  },
  {
    id: "5",
    type: "default",
    position: { x: 100, y: 325 },
    data: {
      label: "First Internship 💼",
      details: {
        year: "2015",
        description: "Software development intern at a local startup",
        type: "career",
      },
    },
  },
  {
    id: "6",
    type: "default",
    position: { x: 400, y: 325 },
    data: {
      label: "Scotiabank Internship 🏦",
      details: {
        year: "2016",
        description: "Backend developer intern at Scotiabank, worked on banking APIs",
        type: "career",
      },
    },
  },
  {
    id: "7",
    type: "default",
    position: { x: 250, y: 425 },
    data: {
      label: "University Graduation 🎓",
      details: {
        year: "2017",
        description: "Graduated with Bachelor of Computer Science, Magna Cum Laude",
        type: "education",
      },
    },
  },
  {
    id: "8",
    type: "default",
    position: { x: 100, y: 525 },
    data: {
      label: "First Full-time Job 🚀",
      details: {
        year: "2017",
        description: "Junior Full-stack Developer at TechCorp",
        type: "career",
      },
    },
  },
  {
    id: "9",
    type: "default",
    position: { x: 400, y: 525 },
    data: {
      label: "Promoted to Senior Dev 📈",
      details: {
        year: "2019",
        description: "Promoted to Senior Developer, leading a team of 3 developers",
        type: "career",
      },
    },
  },
  {
    id: "10",
    type: "default",
    position: { x: 250, y: 625 },
    data: {
      label: "Started Freelancing 💡",
      details: {
        year: "2021",
        description: "Began freelance work while maintaining full-time position",
        type: "career",
      },
    },
  },
  {
    id: "11",
    type: "default",
    position: { x: 100, y: 725 },
    data: {
      label: "Traveled to Japan 🗾",
      details: {
        year: "2022",
        description: "First major international trip, fell in love with travel photography",
        type: "personal",
      },
    },
  },
  {
    id: "12",
    type: "default",
    position: { x: 400, y: 725 },
    data: {
      label: "Launched SaaS Product 🚀",
      details: {
        year: "2023",
        description: "Successfully launched my first SaaS product with 1000+ users",
        type: "milestone",
      },
    },
  },
  {
    id: "13",
    type: "default",
    position: { x: 250, y: 825 },
    data: {
      label: "Present Day 🌟",
      details: {
        year: "2024",
        description: "Currently building innovative web solutions and exploring AI",
        type: "current",
      },
    },
  },
]

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3", animated: true },
  { id: "e3-4", source: "3", target: "4", animated: true },
  { id: "e4-5", source: "4", target: "5", animated: true },
  { id: "e4-6", source: "4", target: "6", animated: true },
  { id: "e5-7", source: "5", target: "7", animated: true },
  { id: "e6-7", source: "6", target: "7", animated: true },
  { id: "e7-8", source: "7", target: "8", animated: true },
  { id: "e8-9", source: "8", target: "9", animated: true },
  { id: "e9-10", source: "9", target: "10", animated: true },
  { id: "e10-11", source: "10", target: "11", animated: true },
  { id: "e10-12", source: "10", target: "12", animated: true },
  { id: "e11-13", source: "11", target: "13", animated: true },
  { id: "e12-13", source: "12", target: "13", animated: true },
]

export default function JourneyPage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const [selectedNode, setSelectedNode] = useState(null)

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges])

  const onNodeClick = useCallback((event, node) => {
    setSelectedNode(node)
  }, [])

  const getTypeColor = (type) => {
    switch (type) {
      case "education":
        return "bg-blue-500"
      case "career":
        return "bg-green-500"
      case "personal":
        return "bg-purple-500"
      case "milestone":
        return "bg-orange-500"
      case "current":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
      <Navigation />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">My Journey</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            An interactive visualization of my life's key moments. Click on any node to explore details, zoom and drag
            to navigate through time.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Card className="h-[600px]">
              <CardContent className="p-0 h-full">
                <ReactFlow
                  nodes={nodes}
                  edges={edges}
                  onNodesChange={onNodesChange}
                  onEdgesChange={onEdgesChange}
                  onConnect={onConnect}
                  onNodeClick={onNodeClick}
                  fitView
                  className="bg-white dark:bg-slate-800"
                >
                  <Controls />
                  <MiniMap />
                  <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
                </ReactFlow>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Legend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm">Education</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm">Career</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span className="text-sm">Personal</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-sm">Milestone</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-sm">Current</span>
                </div>
              </CardContent>
            </Card>

            {selectedNode && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${getTypeColor(selectedNode.data.details.type)}`}></div>
                    {selectedNode.data.details.year}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-2">{selectedNode.data.label}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{selectedNode.data.details.description}</p>
                  <Badge variant="outline">{selectedNode.data.details.type}</Badge>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Instructions</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• Click on nodes to see details</p>
                <p>• Drag to pan around the graph</p>
                <p>• Use mouse wheel to zoom</p>
                <p>• Use the minimap for navigation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
