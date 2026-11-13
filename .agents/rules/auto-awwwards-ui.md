# Auto-Pilot Awwwards & Impeccable UI Router

## Trigger Scope (Zero Overhead on Non-UI Tasks)
- **Backend / Database / CLI / Logic-only tasks:** Ignore this rule completely. Do NOT load UI skills or references.
- **Any UI, Frontend, Hero, Landing Page, Dashboard, or Design task:** Activate this protocol **automatically** without requiring the user to remember or type skill/command names (`/impeccable`, `awwwards-creative-dev`).

## 1. Automatic Skill & Playbook Dispatching
Whenever generating or modifying UI/frontend code:
1. **Always activate** the `awwwards-creative-dev` skill and consult its `references/blueprints.md` for motion primitives.
2. **Automatically read the matching `impeccable` reference playbook(s)** (from `.agents/skills/impeccable/reference/` or `~/.gemini/config/skills/impeccable/reference/`) based on surface & intent:
   - **Landing / Hero / Portfolio / Showcase (`EXPERIENCE` or `PERSUADE`):** Load `new-work.md`, `overdrive.md`, `animate.md`, and `craft-floor.md`.
   - **Dashboard / Admin / App UI (`OPERATE` or `READ`):** Load `operate.md`, `layout.md`, and `audit.md` (prioritize clarity, speed, and scanability over heavy WebGL).
   - **User says "sıkıcı / düzelt / canlandır / iyileştir":** Load `bolder.md`, `typeset.md`, `delight.md`, and `polish.md`.

## 2. Non-Negotiable Quality Floor (Hero & Showcase Surfaces)
- **Zero AI Slop:** Never output generic purple/blue gradients, Inter/Arial hero defaults, or predictable 3-column icon-box grids.
- **Default Showcase Stack:** When building a modern React/Next.js hero or showcase page, proactively equip it with:
  - Synchronized **Lenis + GSAP ScrollTrigger** smooth scroll (`SmoothScroll`).
  - Masked character/line **SplitType** kinetic typography (`KineticHeading`).
  - Subtle **SVG Turbulence Film Grain** (`NoiseOverlay`) and hairline borders (`border-white/10`) instead of flat plastic backgrounds.
  - Tactile **Magnetic CTAs** or **Mouse Spotlight** interactions where appropriate.
- **No Unnecessary Token Waste:** Load only the specific `impeccable/reference/<command>.md` files needed for the active task—never bulk-load unrelated references.
