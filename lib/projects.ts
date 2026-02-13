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
      "WIP: Right now the AI can: Patrol between points. Detect the player within a defined range. Switch states depending on player presence React in a way that supports gameplay, not just visuals.",
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
      "This project showcases a real-time shader and render study focused on visual quality, lighting interaction, and material definition. The piece highlights surface detail, reflections, and overall mood through a cinematic presentation designed to emphasize realism and atmosphere.",
    thumbnail: "/placeholder.svg?height=600&width=800",
    tags: ["Unreal Engine", "Real Time"],
    videoUrl: "https://www.youtube.com/watch?v=yuc5ra19jAw",
    details:
      "In this shader, I used vertex color, wetness, and dot product, combining them to achieve different effects on my objects.",
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
    tags: [ "UnrealEngine", "UI/UX"],
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
      "logica-instancia-plano.png",
      "plano-instancia-character.png",
      "materialON.png",
      "materialOFF.png",
      "vfxlogicut.png",
      "vfxlogicut2.png",
      "animbegin.png",
      "animend.png",
      "profiling.png",
      "profiling2.png",
      ],
    description:
      "Interactive foliage system where vegetation responds physically to character attacks through the use of Runtime Virtual Textures (RVT), creating dynamic environmental interaction and enhanced scene realism.",
    thumbnail: "/placeholder.svg?height=600&width=800",
    tags: ["Unreal Engine" , "Real Time"],
    videoUrl: "https://www.youtube.com/watch?v=xWu4G5J24Ts",
    details:
      "The mechanic for creating a mask using RVT is executed when the character attacks and an instance of a plane is created, since RVTs are not temporary and, without creating a plane that projects this mask, the cut would not be permanent. When attacking, the character can interact with the surrounding grass, causing it to be cut and change color, giving the sensation of being frozen.",
  },
  {
    id: "procedural-biome-creation",
    title: "Procedural Biome Creation Tool",
    category: "Tools",
    cardImage: "ProceduralBiomeCreationTool.png",
      galleryVideos: [],
      galleryImages: [],
    description:
      "A procedural tool designed to generate closed splines for the purpose of streamlining the creation of biomes. It supports up to four fully customizable biome types, configurable through numerical parameters, percentages, and mesh swapping.",
    thumbnail: "/placeholder.svg?height=600&width=800",
    tags: ["Unreal Engine", "Real Time"],
    videoUrl: "https://www.youtube.com/watch?v=FzrGe1QIAEo",
    details:
      "The tool also includes an open spline that can be used as a path. When this path crosses the closed splines of any biome, it subtracts their information, allowing the biome to adapt and respect the route of the path. This path is also fully customizable and automatically conforms to the terrain’s height. Additionally, the tool features a Landscape Material that allows you to paint different texture types, which in turn generate geometry depending on the selected biome. Painting is performed exclusively in Landscape Paint Mode.",
  },
  {
    id: "export-tool-project",
    title: "Export Blender Tool",
    category: "Tools",
    cardImage: "exportTool.png",
      galleryVideos: [],
      galleryImages: [],
    description:
      "Blender Export Tool is an add-on for Blender that streamlines the export of assets with hierarchy, collisions, and LODs (up to 10 LODs with a custom mesh reduction percentage), as well as materials and applied transformations. It is ideal for artists and developers who import models from other software and want to export them to FBX or OBJ without issues related to scale, position, or materials.",
    thumbnail: "/placeholder.svg?height=600&width=800",
    tags: ["Blender"],
    videoUrl: "https://www.youtube.com/watch?v=PaOvpJxmmvg",
    details:
      "FeaturesEport of selected objects with full hierarchy.Automatic creation of UCX collisions if they do not exist.Automatic LOD generation using the Decimate modifier.Application of Weighted Normals to meshes.Automatic material assignment if materials do not exist.Button to apply all transformations (Ctrl+A) to the selected objects.Export to FBX and OBJ formats.Flexible configuration of names, paths, number of LODs, and reduction ratios.UsageSelect the objects you want to export.Press the “Apply Transformations (Ctrl+A)” button if the object comes from another software. This applies location, rotation, and scale.Configure the asset name, export path, collisions, LODs, and format.Click “Export Asset” to generate the files.",
  },
  {
    id: "demoreel",
    title: "Demo Reel",
    category: "DemoReel",
    cardImage: "JRGdemoreel.png",
      galleryVideos: [],
      galleryImages: [],
    description:
      "3D animation demo reel developed in Autodesk Maya and Unreal Engine, focused on character animation, acting performance, body mechanics, and real-time cinematics.",
    thumbnail: "/placeholder.svg?height=600&width=800",
    tags: ["Autodesk Maya", "UnrealEngine", "ZBrush",  "Photoshop",],
    videoUrl: "https://www.youtube.com/watch?v=nRqz9fQOOfk",
    details:
      "",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return projects;
  return projects.filter((project) => project.category === category);
}
