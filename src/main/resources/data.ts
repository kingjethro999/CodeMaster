// Self-directed resource library, organized by the same career-path taxonomy.
// Curation rule: explanatory (teaching why) over copy-along tutorials.

import type { CareerPathId } from '../../shared/types'

export interface ResourceEntry {
  id: string
  path: CareerPathId
  kind: 'book' | 'video' | 'docs'
  title: string
  creator: string
  url: string
  why: string
  tags: string[]
}

export const RESOURCES: ResourceEntry[] = [
  {
    id: 'web-mdn',
    path: 'web',
    kind: 'docs',
    title: 'MDN Learn Web Development',
    creator: 'Mozilla',
    url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development',
    why: 'Explains how browsers, servers, and pages fit together before a single line of code.',
    tags: ['html', 'css', 'web']
  },
  {
    id: 'web-jsinfo',
    path: 'web',
    kind: 'docs',
    title: 'The Modern JavaScript Tutorial',
    creator: 'javascript.info',
    url: 'https://javascript.info/',
    why: 'Explains why JavaScript behaves the way it does, not just what to type.',
    tags: ['javascript']
  },
  {
    id: 'web-cs50',
    path: 'web',
    kind: 'video',
    title: 'CS50 lectures',
    creator: 'Harvard',
    url: 'https://www.youtube.com/c/cs50',
    why: 'Expository lectures that build understanding from first principles.',
    tags: ['cs', 'foundations']
  },
  {
    id: 'game-godot',
    path: 'game',
    kind: 'docs',
    title: 'Godot Documentation',
    creator: 'Godot Engine',
    url: 'https://docs.godotengine.org/en/stable/',
    why: 'Explains game concepts like nodes and scenes with clear diagrams.',
    tags: ['engine', 'scenes']
  },
  {
    id: 'game-how-games-work',
    path: 'game',
    kind: 'video',
    title: 'How computers process game loops',
    creator: 'Computerphile',
    url: 'https://www.youtube.com/user/Computerphile',
    why: 'Shows the loop behind every game before you ever touch a game engine.',
    tags: ['game-loop', 'theory']
  },
  {
    id: 'data-kaggle',
    path: 'data',
    kind: 'docs',
    title: 'Kaggle Learn',
    creator: 'Kaggle',
    url: 'https://www.kaggle.com/learn',
    why: 'Micro-courses that teach data questions first, code second.',
    tags: ['datasets', 'python']
  },
  {
    id: 'data-3b1b',
    path: 'data',
    kind: 'video',
    title: '3Blue1Brown',
    creator: '3Blue1Brown',
    url: 'https://www.youtube.com/c/3blue1brown',
    why: 'Visual explanations of the math under data and models.',
    tags: ['math', 'models']
  },
  {
    id: 'embedded-arduino',
    path: 'embedded',
    kind: 'docs',
    title: 'Arduino Documentation',
    creator: 'Arduino',
    url: 'https://docs.arduino.cc/',
    why: 'Explains pins, voltages, and blinking in terms of real hardware.',
    tags: ['arduino', 'pins']
  },
  {
    id: 'embedded-adafruit',
    path: 'embedded',
    kind: 'docs',
    title: 'Adafruit Learning System',
    creator: 'Adafruit',
    url: 'https://learn.adafruit.com/',
    why: 'Hands-on guides that explain why circuits behave the way they do.',
    tags: ['circuits', 'sensors']
  },
  {
    id: 'mobile-flutter',
    path: 'mobile',
    kind: 'docs',
    title: 'Flutter Documentation',
    creator: 'Flutter',
    url: 'https://docs.flutter.dev/',
    why: 'Explains widgets and how screens rebuild, which is the core mental model.',
    tags: ['flutter', 'widgets']
  },
  {
    id: 'mobile-dart',
    path: 'mobile',
    kind: 'docs',
    title: 'Dart Documentation',
    creator: 'Dart',
    url: 'https://dart.dev/guides',
    why: 'Clean explanations of types and functions in Dart.',
    tags: ['dart']
  }
]

export function resourcesForPath(path: CareerPathId): ResourceEntry[] {
  return RESOURCES.filter((r) => r.path === path)
}

export function allResources(): ResourceEntry[] {
  return RESOURCES
}
