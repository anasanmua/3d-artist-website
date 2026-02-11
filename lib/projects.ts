export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  tags: string[];
  cardImage: string;
  videoUrl?: string;
  images?: string[];
  details?: string;
  galleryImages?: string[];
  galleryVideos?: string[];
}

export const categories = [
  "All",
  "Tools",
  "Technical",
  "VFX",
  "Animation",
  "Shaders",
  "Real Time",
  "DemoReel",
];

export const projects: Project[] = [
  {
    id: "vfx-character",
    title: "VFX for Character Attacks",
    category: "VFX",
    cardImage: "vfx.png",
      galleryVideos: [ ],
      galleryImages: [
          "vfx-1.png",
          "vfx-2.png",
          "vfx-3.png",
          "vfx-4.png",
          "vfx-5.png",
          "vfx-6.png",
          "vfx-7.png",
          "vfx-8.png",
          "vfx-9.png",
          "vfx-10.png",
          "vfx-11.png",
      ],
    description:
      "Projects carried out in Unreal and Houdini. Development of advanced VFX for character attack sequences using Niagara, incorporating particle simulations, collision events, and decal-based impact systems. Built Niagara modules tightly synchronized with character animation, utilizing slashes, ribbons, smoke, and procedural simulations to enhance visual dynamism. Refined timing for magic-driven growth effects, chromatic aberration, and cinematic camera movements to maximize immersion. Implemented post-processing layers to unify character, VFX, and environment into a cohesive visual presentation. Additionally, designed custom audio elements for magical interactions to achieve a richer and more immersive audiovisual experience.",
    thumbnail: "/placeholder.svg?height=600&width=800",
    tags: ["Houdini", "Unreal Engine", "Niagara"],
    videoUrl: "https://www.youtube.com/watch?v=JGQmourtGYI",
    details:
      "This project showcases advanced real-time VFX for character attack sequences developed in Unreal Engine and Houdini, using Niagara systems with particle simulations, collision events, and decal-based impact effects.Custom modules, procedural effects, post-processing layers, and synchronized audio were implemented to enhance visual dynamism, cinematic impact, and overall audiovisual immersion.",
  },
  {
    id: "animation",
    title: "Insexcts",
    category: "Animation",
    cardImage: "Insexcts.jpg", // aquí CAMBIAR imagen
      galleryVideos: ["https://www.youtube.com/watch?v=sEcETyQ4NOY" , "https://www.youtube.com/watch?v=96M1e0EYgho" , "https://www.youtube.com/watch?v=36O_TCr5P7I" , "https://www.youtube.com/watch?v=FTrG1ID2gTc" ],
      galleryImages: [
          "mantisfem.jpg",
          "mantismasc.jpg",
          "mantisfemcloseup.jpg",
          "closeupmantismasc.jpg",
          "mantisfemtextures.jpg",
          "mantismasctextures.jpg",
          "mantisfemretopo.jpg",
          "mantismascretopo.jpg",
          "mantisfemzbrush.jpg",
          "mantismasczbrush.jpg",
      ],
    description:
      "Short animated film created by CEV students, set in a hostile alien ecosystem where insect-like creatures enter their reproductive cycle, only to uncover the dangers of their surroundings and the relentless hunters that threaten their survival.",
    thumbnail: "/placeholder.svg?height=600&width=800",
    tags: ["Autodesk Maya", "ZBrush", "Substance 3D Painter" , "Photoshop"],
    videoUrl: "https://www.youtube.com/watch?v=YsnYH8K-UxU&t=32s", 
    details:
      "Our main character is a mantis searching for its soulmate across a dangerous alien world, witnessing how different species attempt to reproduce, yet all perish in the process. When its moment finally arrives, it moves toward its beloved without hesitation, unaware that this encounter will ultimately mark its end.",
  },
  {
    id: "logic-ai-mechanics",
    title: "AI Mechanics",
    category: "Technical",
    cardImage: "behaviortree.png", // aquí CAMBIAR imagen
      galleryVideos: [],
      galleryImages: [],
    description:
      "AI Gameplay Mechanics  where enemies can detect, patrol and react to the player in real time. The focus isn’t just on “enemy follows player”, but on making their behavior feel readable and connected to gameplay.",
    thumbnail: "/placeholder.svg?height=600&width=800",
    tags: ["Maya", "Python", "Muscle System"],
    videoUrl: "https://www.youtube.com/watch?v=PB08dnmL69U", // Paste YouTube URL here
    details:
      "Right now the AI can: Patrol between points. Detect the player within a defined range. Switch states depending on player presence React in a way that supports gameplay, not just visuals.",
  },
  {
    id: "shaders",
    title: "Shaders",
    category: "Shaders",
    cardImage: "Shaders.png",
      galleryVideos: [],
      galleryImages: [
          "MM LANDSCAPE.png",
          "BASE MATERIAL LANDSCAPE.png",
          "masmateriales.png",
          "LLAMADAS.png",
          "MM VERTEX COLOR.png",
          "MM DOT PRODUCT .png",
          "MM WETNESS.png",
          "agua.png",
          "MATERIAL AGUA .png",
          "MI AGUA .png",
      ],
    description:
      "Modular sci-fi space station environment with PBR materials and optimized for real-time rendering.",
    thumbnail: "/placeholder.svg?height=600&width=800",
    tags: ["Blender", "Substance Painter", "Unreal Engine"],
    videoUrl: "https://www.youtube.com/watch?v=yuc5ra19jAw",
    details:
      "A fully modular environment kit with over 200 unique assets. Designed for optimal performance while maintaining AAA visual quality.",
  },
  {
    id: "ui-basics",
    title: "UI Basics",
    category: "Technical",
    cardImage: "uibasics.png", // aquí CAMBIAR imagen
      galleryVideos: [],
      galleryImages: [
          "uibasic.png",
          "sprintui.png",
          "barrastamina.png",
          "barravida.png",
      ],
    description:
      "UI Basics in Unreal Engine, including health bars, stamina bars, Item Collection Counter and a sprinting system. The UI elements are designed to be clear and responsive, providing players with essential information about their character's status during gameplay.",
    thumbnail: "/placeholder.svg?height=600&width=800",
    tags: ["3ds Max", "V-Ray", "Corona"],
    videoUrl: "https://www.youtube.com/watch?v=X2WQPjlmhOc", // Paste YouTube URL here
    details:
      " Gameplay logic lives in the Character Blueprint, while UI updates are handled in a Widget Blueprint using normalized values and event-based updates for efficiency.This phase is about getting systems solid first, then iterating on visual polish and UX clarity.",
  },
  {
    id: "cutting-grass-mechanic",
    title: "Cutting Grass Mechanic",
    category: "Real Time",
    cardImage: "CuttingGrassMechanic.png",
    galleryVideos: ["https://www.youtube.com/watch?v=DFUJJkmd5DM" , "https://www.youtube.com/watch?v=5v1_pCoqosg"],
    galleryImages: [
      "material-planta-cut.png",
      "mf-cutgrass.png",
      "characterplano.png",
      "characterplanortv.png",
      "meshON.png",
      "meshOFF.png",
      "animnotibegin.png",
      "animnotiend.png",
      "logicainstancias.png",
      "checkbox.png",
      "checkbox2.png",


    ],
    description:
      "Interactive foliage system where vegetation responds physically to character attacks through the use of Runtime Virtual Textures (RVT), creating dynamic environmental interaction and enhanced scene realism.",
    thumbnail: "/placeholder.svg?height=600&width=800",
    tags: ["Python", "Unreal Engine" , "Real Time"],
    videoUrl: "https://www.youtube.com/watch?v=xWu4G5J24Ts",
    details:
      "A powerful procedural system that generates unique cityscapes with adjustable parameters for building density, height variation, and architectural styles.",
  },
  {
    id: "procedural-biome-creation",
    title: "Procedural Biome Creation Tool",
    category: "Tools",
    cardImage: "ProceduralBiomeCreationTool.png",
      galleryVideos: ["https://www.youtube.com/watch?v=DFUJJkmd5DM"],
      galleryImages: [
          "cutting-grass-1.png",
          "cutting-grass-2.png",
          "cutting-grass-3.png",
      ],
    description:
      "Game-ready character with full facial rig, clothing simulation, and optimized for mobile and console platforms.",
    thumbnail: "/placeholder.svg?height=600&width=800",
    tags: ["ZBrush", "Marvelous Designer", "Unreal Engine"],
    videoUrl: "https://www.youtube.com/watch?v=FzrGe1QIAEo",
    details:
      "High-fidelity game character optimized for multiple platforms with LOD system and performance-conscious material setup.",
  },
  {
    id: "export-tool-project",
    title: "Export Blender Tool",
    category: "Tools",
    cardImage: "exportTool.png",
      galleryVideos: ["https://www.youtube.com/watch?v=DFUJJkmd5DM"],
      galleryImages: [
          "cutting-grass-1.png",
          "cutting-grass-2.png",
          "cutting-grass-3.png",
      ],
    description:
      "Futuristic vehicle concept with full 3D blockout, refined model, and presentation renders.",
    thumbnail: "/placeholder.svg?height=600&width=800",
    tags: ["Blender", "KeyShot", "Photoshop"],
    videoUrl: "https://www.youtube.com/watch?v=PaOvpJxmmvg",
    details:
      "From initial sketch to final presentation, this project showcases the complete concept design pipeline for a futuristic hover vehicle.",
  },
  {
    id: "demoreel",
    title: "Demo Reel",
    category: "DemoReel",
    cardImage: "JRGdemoreel.png",
      galleryVideos: [],
      galleryImages: [],
    description:
      "Futuristic vehicle concept with full 3D blockout, refined model, and presentation renders.",
    thumbnail: "/placeholder.svg?height=600&width=800",
    tags: ["Blender", "KeyShot", "Photoshop"],
    videoUrl: "https://www.youtube.com/watch?v=nRqz9fQOOfk",
    details:
      "From initial sketch to final presentation, this project showcases the complete concept design pipeline for a futuristic hover vehicle.",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return projects;
  return projects.filter((project) => project.category === category);
}
