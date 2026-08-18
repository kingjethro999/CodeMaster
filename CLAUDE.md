# CodeMaster — Project Context for Claude Code

## What this is

A desktop application that teaches kids and teens to actually **build**, not just copy tutorials. Block-based coding progressing into plain text code, structured around a chosen career path rather than a single language, with local multiplayer races over LAN. AI is a support layer on top of the human's own understanding — never a replacement for it.

This file is the standing context for any Claude Code session working on this repo. Read it before making architectural decisions.

---

## Core philosophy (do not compromise on this)

- **Builders, not coders.** The product exists to replace copy-paste tutorial culture. A kid who finishes a stage must be able to explain their own solution in their own words before it counts as complete. No stage is "done" just because the tests passed.
- **AI assists existing knowledge, it does not replace it.** AI never hands over working code as a hint. It asks leading questions first, escalating gradually. See "AI Layer" below for the exact ladder.
- **Manual coding is the point.** The block-building mode is a stepping stone toward plain text code, not a permanent training-wheel product. Every path eventually requires writing real code by hand.
- **One path can look completely different for two kids and both be right.** Curriculum is organized by career path (e.g. web, game dev, data, embedded, mobile) which determines the mix of languages and concepts taught — not a single fixed language track.

---

## Platform

- **Desktop application.** Not a web app, not offline-first — online is the assumed default state, offline is a supported feature/fallback, not the design center.
- Cross-platform desktop (Windows/macOS/Linux) — evaluate Electron vs. Tauri; lean toward Tauri for a lighter footprint given this is a long-running app for lower-spec family/school machines, but confirm against block-editor rendering needs (Blockly/canvas performance) before committing.
- Local **SQLite** database for all profile, progress, and curriculum state. This is local application storage, not a cloud/hosted database — the "no database" instruction from the founder means no external hosted DB dependency, not "no persistence." SQLite + local filesystem storage is the persistence layer.

---

## Profiles & accounts

- **Multiple local profiles per install** — one machine, one household/classroom, many kids.
- **Guest mode** — a visiting kid can try a stage without creating a profile. Guest progress is ephemeral (session-only, not written to long-term progress tables) unless they choose to convert the guest session into a saved profile at the end.
- **Onboarding asks for a career path, not a language.** Based on the selected path, the curriculum engine populates the required language mix and concept sequence automatically. The kid doesn't pick "Python" or "JavaScript" up front — they pick "I want to build games" or "I want to build websites," and the system decides what that requires.

---

## Curriculum model

- Full ladder from `hello world` through variables, loops, functions, conditionals, up through APIs, datasets/models, networking basics, naming conventions, and clean code practice. Nothing skipped — this is the direct response to the founder's own experience watching classmates get lost going straight into loops/functions without foundation.
- A "stage" can be any of:
  - A block-building exercise
  - A plain text code exercise
  - A pure reference: a specific chapter/section of an open-source doc, a specific book (via OceanPDF integration), or a specific YouTube video — some lessons are legitimately "go read/watch this," not an interactive exercise
- **Explanatory, not tutorial.** Any video/reference material surfaced by the app should be evaluated (manually curated, and/or AI-assisted curation) for being explanatory in nature — teaching _why_ — rather than screen-recorded copy-along tutorials. This is a curation rule, not just a UI feature.
- **Completion gate:** a stage is only marked complete after the kid explains their solution back (typed or recorded) and the explanation is checked against the actual logic they wrote. This is the mechanism that stops copy-through-the-motions completion.

---

## Resource library

- Dedicated resource area, separate from the guided curriculum, for self-directed follow-up: books (via OceanPDF) and videos (YouTube), organized by the same career-path/topic taxonomy as the curriculum so a kid can go deeper on something they just learned.

---

## Competitive LAN multiplayer

- Peer-to-peer over LAN, no internet dependency for the match itself.
- Rooms of 2–10 players.
- Two match modes:
  1. **First to finish** — race to complete a given exercise
  2. **Most completed in a time window** — highest count of correctly-solved stages within a set time limit
- Post-match retrospective (AI-assisted): show that different winners/participants reached valid solutions via different approaches. Explicitly not framed as ranking who is "smartest" — framed as "here are the different ways this got solved."

---

## AI layer

AI is an **online-only enhancement layer**. Every core feature (block building, plain-code stages, progress tracking, LAN races, offline access to already-downloaded reference material) must work fully without AI or connectivity. When offline, AI-dependent UI simply doesn't appear rather than erroring.

AI responsibilities, in order of how central they are:

1. **Socratic hint ladder.** When a kid is stuck: first response is always a leading question, never a solution. Hints escalate through several levels of directness only after repeated struggle is detected (time-on-task, repeated failed runs). The last resort is a strong hint — still never a full working answer.
2. **Explain-it-back verification.** AI reads the kid's typed/recorded explanation of their own solution and checks it's consistent with the code they actually wrote, flagging mismatches (signal of copied/pasted work) rather than grading style.
3. **Problem variation generation.** AI generates fresh variants of a given concept's exercise so that two kids on the same curriculum (siblings, classmates) can't just hand each other answers.
4. **Personalized analogies.** Only triggered after the default explanation has already failed to land (measured via quiz misses / time-on-task) — reframes a concept using an interest from the kid's profile.
5. **Post-hoc code review.** After a project/stage is submitted, not during — reviews naming, structure, and clean-code practice, explained in terms of lessons the kid has already had, styled like mentor feedback rather than autocomplete.
6. **LAN match retrospectives.** As described above.

### AI state persistence (important — explicit founder requirement)

AI-generated exercises, hints, and variation state must **not** live only in memory. Whenever the AI layer generates:

- a problem variant,
- a hint-ladder position for a given attempt,
- or an in-progress personalized exercise line,

that generated content and the kid's current position within it must be **persisted to SQLite immediately**, not just held in app state. If the machine loses power or the app crashes mid-exercise, resuming must return the kid to the exact same AI-generated exercise and hint state — not silently regenerate a new, different problem. Treat "AI turn" the same way you'd treat any other transactional write: generate → persist → then render. Never render-then-persist.

---

## Accessibility (high necessity, not a stretch goal)

- Full accessibility support for children with special needs: screen reader compatibility, adjustable text size/contrast, reduced-motion mode, keyboard-only navigation through block editor, adjustable pacing/time limits on any timed content (including LAN races — consider an accessible/non-timed race variant).
- This is a first-class requirement to design around from the start, not an accessibility pass done at the end.

---

## Localization

- UI localized into **at least 5 non-English languages**, in addition to English.
- Programming language keywords/syntax themselves are never translated (code stays as real code — `for`, `if`, `function`, etc. remain standard). Only the surrounding UI, lesson prose, and hint/explanation text are localized.

---

## Visual language

- **No emojis anywhere in the UI.**
- Icons and illustrations are a high-necessity requirement for interactivity and engagement — this is how the product should communicate warmth and feedback instead of emoji. Treat iconography/illustration as core to the design system, not decoration bolted on later.
- Age range spans pre-readers through teens, so the icon/illustration system needs to carry meaning on its own for the youngest users, while not reading as babyish to older teens — likely needs a tiered visual maturity system tied to career path/age rather than one universal style.

---

## Explicit non-goals

- Not a copy-along video tutorial platform.
- Not a single-language-first product — language is a downstream consequence of career path, not the starting choice.
- Not cloud-database-backed. Local SQLite + local storage is the persistence model.
- Not offline-first. Offline is a supported fallback feature.
- AI is never a code-writing shortcut for the user. It never outputs a working solution as a "hint."

---

## Open questions to resolve before/during build

- LAN discovery/matchmaking protocol for room creation (mDNS/Bonjour-style discovery vs. manual IP/room code entry).
- Exact schema for persisted AI exercise/hint state (see "AI state persistence" above) — needs a table design before the AI layer is implemented, not after.
- Curation pipeline/criteria for what counts as "explanatory" vs. "tutorial" video content, and how much of that curation is manual vs. AI-assisted.
- OceanPDF integration method (API availability, licensing/legal review for book access).

we use groq and pnpm
icon only, no emoji, you can use your web scrape tools,to get resources, illustrations, etc

https://getillustrations.com/blog/top-100-websites-for-free-high-quality-vector-illustrations-2025-ultimate-edition/
https://www.openpeeps.com/
https://storyset.com/
https://blush.design/
https://lottiefiles.com/
https://kenney.nl/
https://fonts.google.com/

Open PeepsHand-drawn, mix-and-match character illustrations. CC0 — good for kid/avatar-style figures in onboarding and profile creation.openpeeps.com
StorysetFreepik's illustration set, heavy on friendly/educational scenes with adjustable colors. Free tier needs attribution; paid tier removes it.storyset.com
BlushMultiple artist styles you can mix, recolor, and compose in-browser before export. Good for finding one consistent style across your whole app.blush.design
LottieFilesLightweight animated vector files (Lottie/JSON) — the format behind most 'mascot bounces/claps' animations in Duolingo-style apps.lottiefiles.com
Kenney Game AssetsCC0 game asset packs, including UI sound effect bundles — chimes, pops, clicks. Great fit for a solo/small-team budget.kenney.nl
Google FontsFree, open-license source for Fredoka, Baloo 2, Atkinson Hyperlegible, Lexend, and Noto Sans — everything in the font system above.fonts.google.com

For icons (buttons, nav, badges — separate from full illustrations), you already have Lucide and Phosphor Icons as solid free/open sets with consistent stroke weight, which matters more than people expect — mixing icon styles is one of the fastest ways an app starts looking cheap.
Good questions to lock down early — these become part of the design system in CLAUDE.md once you're happy with them.

## Fonts

Given your constraints (pre-readers through teens, accessibility-first, 5+ non-English languages), one font won't do the whole job — you need a small system:

- **Display / headers / UI chrome:** something rounded and warm — **Fredoka** or **Baloo 2**. Both read as friendly without tipping into babyish, and both scale down reasonably for older teens if you dial back the weight.
- **Body / reading text — with an accessibility toggle:** default to something clean and comfortable, but give kids/parents a one-tap switch to **Atkinson Hyperlegible** or **Lexend**. Lexend widens horizontal spacing to reduce the visual crowding that slows down dyslexic and ADHD readers, while Atkinson Hyperlegible — built by the Braille Institute — leans on exaggerated character differences so easily-confused letters like I/l/1 or O/0 never collapse into each other. Given your "high necessity" accessibility line, I'd make this toggle visible in onboarding, not buried in settings.
- **Code editor font (plain-text stage):** a real monospace — JetBrains Mono or Cascadia Code. Turn ligatures **off** by default for beginners; ligatures that merge `!=` or `=>` into a single glyph are exactly the kind of "why does the code not look like what I typed" confusion you're trying to avoid.
- **Multilingual fallback:** Fredoka/Baloo won't cover every script you'll eventually need (Arabic, CJK, Devanagari, etc.). Set **Noto Sans** as the fallback stack for whichever non-Latin languages you pick — it's built specifically to have a matching weight/style across nearly every script, so it won't clash visually when a UI string falls back to it.

## Illustrations

One thing to flag before you pick a source: you're shipping a **desktop app that bundles assets locally**, not just hot-linking images on a website. Some "free for web use" licenses are actually scoped to that — always check the license permits redistribution inside a packaged app, not just runtime display on a page.

For your actual mascot (the Master/bug character) — I'd commission or hand-draw that one specifically rather than pull it from a stock library. A brand mascot built from stock parts tends to look assembled, and it's also a licensing risk if the same stock character shows up in someone else's app. Save the libraries below for supporting art: empty states, achievement badges, onboarding screens, career-path icons.For icons (buttons, nav, badges — separate from full illustrations), you already have **Lucide** and **Phosphor Icons** as solid free/open sets with consistent stroke weight, which matters more than people expect — mixing icon styles is one of the fastest ways an app starts looking cheap.

## Subtle completion moments

The stuff that makes it feel alive without being loud:

- **Confetti** — the `canvas-confetti` library is the standard here (tiny, physics-based burst). What I built in the CodeMaster artifact was a hand-rolled version of the same idea; worth swapping to the real library once this moves into the actual repo.
- **Mascot reactions over generic animation** — instead of just confetti, give the Master itself a small animated state change on win/fail (a Lottie file: happy bounce, sad wobble, thinking pause during hints). Kids bond with the character reacting, not the particle effect.
- **Micro details that read as "polish":** buttons compress slightly on press (scale ~0.95), a soft chime on correct stage completion (not the same chime every time — 2–3 variants so it doesn't get grating on repeat), progress bars that fill with a slight ease-out rather than snapping, stars/badges that pop in with a tiny stagger rather than all at once.
- **A reduced-motion / reduced-sound toggle is not optional here** — given your accessibility requirement, confetti and sound bursts can genuinely overwhelm some kids with sensory sensitivities. Build the celebratory layer as something that can be turned down to "just a checkmark and a quiet tone" without losing functionality.

Locked in as a companion doc to CLAUDE.md — color tokens, the three-font type system, icon/illustration sourcing rules with the licensing caveat, the shadow/button "pressable" style from the earlier prototype formalized, motion and sound timing, and a voice/copy section since tone matters as much as visuals in something kids will read error messages from.

@UI.md
