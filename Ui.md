# CodeMaster — Design System (UI.md)

Companion to CLAUDE.md. Where CLAUDE.md defines what the product does, this file defines what it looks, sounds, and feels like. Read both before touching UI code.

---

## Design philosophy

Warm, hand-built, unmistakably made-for-kids without being babyish — closer to a well-made board game box than a corporate app. The product's whole point is "builders, not copiers," so the interface itself should feel _made_, not templated: rounded, tactile, a little bouncy, never sterile.

Two things this is explicitly not:

- Not a generic SaaS-dashboard look transplanted onto a kids' product with brighter colors slapped on.
- Not emoji-driven. Every place a lesser product would drop an emoji, this one uses a real icon or illustration instead — see Iconography & Illustration below.

Spend visual boldness on the mascot and the celebration moments. Keep the surrounding chrome (nav, settings, forms) calm and disciplined so the fun parts actually read as fun by contrast.

---

## Color tokens

| Token           | Hex                   | Use                                                                                  |
| --------------- | --------------------- | ------------------------------------------------------------------------------------ |
| `bg-cream`      | `#FFF6E8`             | App background, base surface                                                         |
| `bg-cream-deep` | `#FFEBD6`             | Secondary surface, gradient depth                                                    |
| `surface-white` | `#FFFFFF`             | Cards, board panels                                                                  |
| `ink`           | `#3D2B1F`             | Primary text                                                                         |
| `ink-muted`     | `#9A7A5C`             | Secondary text, labels, hints                                                        |
| `accent-orange` | `#FF8A3D`             | Primary action, "Go" block, active states                                            |
| `accent-blue`   | `#3DBBFF`             | Turn block, secondary action, "Next"                                                 |
| `accent-purple` | `#B463FF`             | Loop/repeat block, advanced concepts                                                 |
| `accent-green`  | `#4CD787`             | Success, correct, "Run" button                                                       |
| `accent-yellow` | `#FFD65C`             | Stars, rewards, highlight state                                                      |
| `accent-coral`  | `#FF6B6B` / `#E85D5D` | Errors, crashes, delete — never used punitively, always paired with encouraging copy |

Rules:

- Every color pairing must hit **WCAG AA contrast** minimum for its text/background combination — this is non-negotiable given the accessibility requirement, not a nice-to-have.
- Accent colors are semantic, not decorative. Orange always means "primary action," green always means "success" — don't reassign an accent's meaning screen to screen.
- Coral (error) is never the loudest thing on screen. A crash/wrong-answer state should read as "try again," not "you failed" — keep error states visually softer than success states, not harsher.

---

## Typography

Three roles, deliberately different families — not one font doing everything:

| Role                           | Font                                                                                     | Notes                                                                                                                                                             |
| ------------------------------ | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Display / headers / UI chrome  | **Fredoka** (fallback: Baloo 2)                                                          | Rounded, warm, playful without being babyish. Use bold weights for headers, medium for buttons.                                                                   |
| Body / lesson text             | **System default**, with accessibility toggle to **Lexend** or **Atkinson Hyperlegible** | Toggle lives in onboarding, not buried in settings — see Accessibility.                                                                                           |
| Code editor (plain-text stage) | **JetBrains Mono** (fallback: Cascadia Code)                                             | Ligatures **off** by default. Code should look exactly like what the kid typed.                                                                                   |
| Multilingual fallback          | **Noto Sans**                                                                            | Catches any UI string in a script the primary fonts don't cover (Arabic, CJK, Devanagari, etc.), matched in weight so it doesn't visually clash when it kicks in. |

All fonts sourced free/open via Google Fonts.

Type scale is generous — this app is read by pre-readers through teens on possibly-shared family hardware. Never go below 16px for body text; headers scale up aggressively (kids respond to size as a signal of importance more than adults do).

---

## Iconography & illustration

**No emojis, anywhere, ever.** Every status, reaction, and decorative moment uses a real icon or illustration instead.

- **Icons** (buttons, nav, badges, inline status): Lucide or Phosphor Icons. Pick one family and stay inside it — mixed stroke weights across icon sets is the fastest way an interface starts looking assembled rather than designed.
- **Illustrations** (empty states, onboarding, career-path selection, achievement art): sourced from a small set of consistent libraries so the whole app reads as one style, not a collage:
  - Open Peeps — hand-drawn character/avatar pieces, good for profile creation
  - Storyset (Freepik) — friendly educational scenes, recolorable
  - Blush — mix-and-match styles, useful for finding one consistent look across the app
- **The mascot is not stock.** The core Master character should be custom-drawn or commissioned, not assembled from a stock library — it's the single most repeated visual element in the product and needs to be legally and visually unique to the brand.
- **License check before shipping any asset**: this is a desktop app that bundles assets locally, not a website that hot-links images. Confirm every license permits redistribution inside a packaged app, not just runtime display on a web page.
- **Visual maturity tiers**: the icon/illustration system needs to flex across the age range without forking into two separate apps. Practical approach — same icon family and color tokens throughout, but illustration _density and roundness_ scale down slightly as a kid's selected career-path/age profile increases: younger profiles get rounder, larger, more character-driven art; teen profiles get the same system with tighter, more geometric illustration and less character art per screen.

---

## Shape, elevation, and layout

- **Corner radius:** generous throughout — 12–24px depending on component size. Nothing sharp-cornered; sharp corners read as "tool," rounded corners read as "toy," and this product wants to sit closer to toy.
- **Elevation:** flat drop shadows are avoided in favor of a solid offset "bottom shadow" (a hard-edged shadow a few px below each interactive element, in a darker shade of the element's own color) — gives buttons and blocks a pressable, physical quality. On press, the element shifts down toward its shadow and the shadow shrinks, reinforcing "this is a real button" tactilely, not just visually.
- **Touch targets:** minimum 44×44px, larger for anything meant for the 5–7 age band (block palette, primary actions). This app will be used on touch-capable displays as often as mouse/keyboard.
- **Spacing:** generous whitespace between interactive elements specifically to prevent mis-taps from small hands — err on the side of more padding than a typical adult productivity app.

---

## Motion & sound

Motion and sound carry the emotional feedback this app deliberately doesn't outsource to emoji. Treat both as core interaction design, not decoration.

- **Celebration:** a real confetti burst (`canvas-confetti` or equivalent — lightweight, physics-based) plus a mascot-specific reaction animation (Lottie: happy bounce) on stage completion. The mascot reacting matters more than the confetti — kids bond with the character, not the particle effect.
- **Mistakes:** a small, gentle motion (short shake/wobble) paired with a soft tone and encouraging copy ("Bumped into something — try again"). Never a harsh sound, never a "fail" buzzer register.
- **Micro-interactions:**
  - Buttons compress slightly on press (scale ~0.95) before releasing
  - Progress bars fill with ease-out timing, never snap instantly
  - Stars/badges pop in with a slight stagger rather than appearing all at once
  - 2–3 sound variants per common event (correct answer, block placed) so repetition doesn't get grating over a long session
- **Timing:** keep transitions in the 200–450ms range. Faster reads as glitchy, slower reads as sluggish — this range is where "bouncy" lives without becoming "laggy."
- **Reduced motion / reduced sound is a required toggle, not optional.** Some kids using this app via the accessibility requirement will be genuinely overwhelmed by confetti and sound bursts. The reduced setting should still confirm success clearly — a checkmark and a single quiet tone — just without the full celebration layer. Respect the OS-level `prefers-reduced-motion` setting as the default state before a kid ever touches the toggle manually.

---

## Voice & copy

- **Plain, active, kid-readable.** Say what happens, not how the system works: "Bumped into something," not "Execution halted: collision detected."
- **A button's label and its result use the same word.** If the button says "Go," the mascot's action reflects "going" — don't say "Go" and then show a toast that says "Submitted."
- **Errors never apologize and are never vague, but they're never harsh either.** State what happened, point at what to try next, and keep the tone matched to a patient in-person mentor — not a system log, not a cheerleader.
- **Empty states are invitations, not dead ends** — a blank program row says "Drag blocks here to build your plan," not just "No blocks yet."
- **No filler, no exclamation-point stacking.** Warmth comes from word choice and the illustration/mascot doing the emotional work, not from punctuation doing it.

---

## Accessibility (binding, not aspirational)

- Full screen reader support, adjustable text size and contrast, keyboard-only navigation through the block editor, adjustable/removable time pressure on any timed content including LAN races.
- Reading-font toggle (Lexend / Atkinson Hyperlegible) surfaced during onboarding.
- Reduced motion and reduced sound as a combined, easy-to-find toggle — see Motion & Sound above.
- Every color pairing meets WCAG AA at minimum; primary actions and error states are tested for colorblind-safe distinction, not color alone (icon/shape differences back up every color-coded status).
- This system should be built accessible from the first component, not retrofitted after the visual design is "done."

---
