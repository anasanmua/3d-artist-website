"use client"

import { Button } from "@/components/ui/button"
import { useLang } from "@/lib/i18n-provider"
import { dictionary } from "@/lib/i18n"

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

/** Wireframe crystal (two rotated hexagons) with a glowing core. */
function Crystal() {
  const hexPoints = "0,-110 95.3,-55 95.3,55 0,110 -95.3,55 -95.3,-55"
  return (
    <div className="relative h-[24rem] w-[24rem] sm:h-[26rem] sm:w-[26rem]">
      {/* Orbiting HUD rings */}
      <div className="crystal-ring h-[22rem] w-[22rem] border border-primary/40 sm:h-[24rem] sm:w-[24rem]">
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
        <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-primary/60" />
      </div>
      <div
        className="crystal-ring crystal-ring-reverse h-[16.5rem] w-[16.5rem] border border-dashed border-border sm:h-[18rem] sm:w-[18rem]"
        style={{ animationDuration: "40s" }}
      />

      {/* Floating group */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ animation: "float 7s ease-in-out infinite" }}>
        <svg
          viewBox="-160 -160 320 320"
          className="relative h-full w-full"
          style={{
            transform: "rotateX(52deg) rotateZ(18deg)",
            transformStyle: "preserve-3d",
          }}
          fill="none"
          aria-hidden
        >
          <g
            stroke="var(--primary)"
            strokeWidth="2"
            strokeOpacity="0.85"
            style={{ animation: "spin 45s linear infinite", transformOrigin: "0 0" }}
          >
            <polygon points={hexPoints} />
            <polygon points={hexPoints} transform="rotate(60)" />
            <line x1="0" y1="-110" x2="0" y2="110" strokeOpacity="0.3" />
            <line x1="95.3" y1="-55" x2="-95.3" y2="55" strokeOpacity="0.3" />
            <line x1="-95.3" y1="-55" x2="95.3" y2="55" strokeOpacity="0.3" />
          </g>
          <g stroke="var(--primary)" strokeWidth="1" strokeOpacity="0.35">
            <polygon points="0,-62 53.7,-31 53.7,31 0,62 -53.7,31 -53.7,-31" />
          </g>
        </svg>

        {/* Glowing core */}
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_30px_8px] shadow-primary/40" />
      </div>

      {/* Floor glows */}
      <div className="absolute -bottom-6 left-1/2 h-16 w-56 -translate-x-1/2 rounded-full bg-primary/10 blur-2xl" />
    </div>
  )
}

export function Hero() {
  const { t } = useLang()

  const caps = [
    { n: "01", label: t(dictionary.hero.capabilities.vfx) },
    { n: "02", label: t(dictionary.hero.capabilities.animation) },
    { n: "03", label: t(dictionary.hero.capabilities.rigging) },
    { n: "04", label: t(dictionary.hero.capabilities.modeling) },
    { n: "05", label: t(dictionary.hero.capabilities.realTime) },
  ]

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Background layers */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_78%_42%,_var(--primary)/8%,_transparent_55%)]" />
        <div className="absolute -left-40 top-24 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Grid pattern with radial vignette */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* HUD corner brackets */}
      <div className="pointer-events-none absolute left-6 top-24 hidden h-16 w-16 border-l border-t border-primary/40 lg:block" />
      <div className="pointer-events-none absolute bottom-8 right-6 hidden h-16 w-16 border-b border-r border-primary/40 lg:block" />
      <div className="pointer-events-none absolute bottom-8 right-8 hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground lg:flex">
        <span className="h-px w-8 bg-border" />
        JRG — Portfolio 2026
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 lg:grid-cols-12 lg:gap-8">
        {/* Left rail — rotated coordinates */}
        <div className="relative hidden h-full min-h-[20rem] justify-center lg:flex">
          <span
            className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.45em] text-muted-foreground/70"
            style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
          >
            40.4168° N — 3.7038° W // MAD
          </span>
        </div>

        {/* Content — left aligned */}
        <div className="lg:col-span-7">
          <div className="mb-7 inline-flex items-center gap-3 clip-notch border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.25em] text-primary">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {t(dictionary.hero.role)}
          </div>

          <h1 className="mb-8 font-display text-6xl font-bold uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            <span className="block text-foreground">Jaime</span>
            <span className="block text-foreground">Rosado</span>
            <span className="text-stroke block">Garcie</span>
          </h1>

          <p className="mb-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {t(dictionary.hero.tagline)}
          </p>

          <div className="mb-14 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="clip-notch h-12 px-8 font-display font-semibold uppercase tracking-wide"
              onClick={() => scrollTo("work")}
            >
              {t(dictionary.hero.viewWork)}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="clip-notch h-12 border-primary/40 bg-transparent px-8 font-display font-semibold uppercase tracking-wide text-foreground hover:border-primary hover:bg-primary/10 hover:text-primary"
              onClick={() => scrollTo("contact")}
            >
              {t(dictionary.hero.contactMe)}
            </Button>
          </div>

          {/* Capability index */}
          <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 lg:grid-cols-5 lg:max-w-2xl">
            {caps.map((c) => (
              <li
                key={c.n}
                className="flex items-baseline gap-2 border-t border-border pt-3 font-mono text-xs text-muted-foreground"
              >
                <span className="text-primary">{c.n}</span>
                <span className="uppercase tracking-wider">{c.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Wireframe crystal */}
        <div className="hidden justify-center lg:flex lg:col-span-4">
          <Crystal />
        </div>
      </div>

      {/* Vertical scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-4 md:flex">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
          {t(dictionary.hero.scroll)}
        </span>
        <div className="relative h-16 w-px overflow-hidden bg-border">
          <div
            className="absolute inset-x-0 top-0 h-6 bg-primary"
            style={{ animation: "scrollBeam 2s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  )
}
