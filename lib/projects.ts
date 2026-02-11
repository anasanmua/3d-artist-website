export interface Project {
  id: string
  title: string
  category: string
  description: string
  thumbnail: string
  tags: string[]
  videoUrl?: string
  images?: string[]
  details?: string
}

export const categories = [
  "All",
  "VFX",
  "Animation",
  "Rigging",
  "Modeling",
  "Architecture",
  "Procedural Tools",
  "Real Time",
  "Concepts",
]

export const projects: Project[] = [
  {
    id: "vfx-explosion",
    title: "VFX for Character Attack",
    category: "VFX",
    description: "Real-time explosion and debris effects created for a AAA game project. Features dynamic lighting, volumetric smoke, and particle systems.",
    thumbnail: "/placeholder.svg?height=600&width=800",
    tags: ["Houdini", "Unreal Engine", "Niagara"],
    videoUrl: "", // Paste YouTube URL here, e.g. "https://www.youtube.com/watch?v=XXXXX"
    details: "This project showcases advanced particle systems with GPU-driven simulations. The explosion effect includes multiple layers of debris, smoke, fire, and shockwave distortion effects that respond to environmental conditions.",
  },
  {
    id: "character-animation",
    title: "Character Combat System",
    category: "Animation",
    description: "Full combat animation system with blend trees, state machines, and procedural reactions for a third-person action game.",
    thumbnail: "/placeholder.svg?height=600&width=800",
    tags: ["Maya", "Motion Builder", "Unreal Engine"],
    videoUrl: "", // Paste YouTube URL here
    details: "A comprehensive combat animation system featuring over 50 unique animations with seamless transitions. Includes hit reactions, combo chains, and locomotion blending.",
  },
  {
    id: "creature-rig",
    title: "Quadruped Creature Rig",
    category: "Rigging",
    description: "Advanced quadruped rig with muscle simulation, facial controls, and dynamic secondary motion systems.",
    thumbnail: "/placeholder.svg?height=600&width=800",
    tags: ["Maya", "Python", "Muscle System"],
    videoUrl: "", // Paste YouTube URL here
    details: "Custom rigging solution for a fantasy creature featuring IK/FK blending, space switching, and an intuitive control scheme for animators.",
  },
  {
    id: "scifi-environment",
    title: "Sci-Fi Station Interior",
    category: "Modeling",
    description: "Modular sci-fi space station environment with PBR materials and optimized for real-time rendering.",
    thumbnail: "/placeholder.svg?height=600&width=800",
    tags: ["Blender", "Substance Painter", "Unreal Engine"],
    videoUrl: "", // Paste YouTube URL here
    details: "A fully modular environment kit with over 200 unique assets. Designed for optimal performance while maintaining AAA visual quality.",
  },
  {
    id: "arch-viz-tower",
    title: "Luxury Residential Tower",
    category: "Architecture",
    description: "Photorealistic architectural visualization for a high-rise residential project with interior and exterior views.",
    thumbnail: "/placeholder.svg?height=600&width=800",
    tags: ["3ds Max", "V-Ray", "Corona"],
    videoUrl: "", // Paste YouTube URL here
    details: "Complete architectural visualization package including exterior renders, interior walkthroughs, and aerial drone-style animations.",
  },
  {
    id: "procedural-city",
    title: "Procedural City Generator",
    category: "Procedural Tools",
    description: "Houdini-based procedural tool for generating infinite urban environments with customizable building styles.",
    thumbnail: "/placeholder.svg?height=600&width=800",
    tags: ["Houdini", "Python", "Unreal Engine"],
    videoUrl: "", // Paste YouTube URL here
    details: "A powerful procedural system that generates unique cityscapes with adjustable parameters for building density, height variation, and architectural styles.",
  },
  {
    id: "realtime-character",
    title: "Real-Time Character",
    category: "Real Time",
    description: "Game-ready character with full facial rig, clothing simulation, and optimized for mobile and console platforms.",
    thumbnail: "/placeholder.svg?height=600&width=800",
    tags: ["ZBrush", "Marvelous Designer", "Unreal Engine"],
    videoUrl: "", // Paste YouTube URL here
    details: "High-fidelity game character optimized for multiple platforms with LOD system and performance-conscious material setup.",
  },
  {
    id: "concept-vehicle",
    title: "Concept Vehicle Design",
    category: "Concepts",
    description: "Futuristic vehicle concept with full 3D blockout, refined model, and presentation renders.",
    thumbnail: "/placeholder.svg?height=600&width=800",
    tags: ["Blender", "KeyShot", "Photoshop"],
    videoUrl: "", // Paste YouTube URL here
    details: "From initial sketch to final presentation, this project showcases the complete concept design pipeline for a futuristic hover vehicle.",
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id)
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return projects
  return projects.filter(project => project.category === category)
}
