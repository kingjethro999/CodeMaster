// Career paths, block palette, and the full stage ladder for each path.
// The mini-language ("MasterScript") powers both block and text stages.

import type { CareerPath, CareerPathId, Stage } from '../../shared/types'
import { webStagesExtended } from './webStagesExtended'
import { gameStagesExtended } from './gameStagesExtended'
import { dataStagesExtended } from './dataStagesExtended'
import { embeddedStagesExtended } from './embedded-stages-extended'
import { mobileStagesExtended } from './mobileStages'

export { BLOCK_LIBRARY, BLOCK_ARG_OPTIONS } from '../../shared/blocklib'

export interface StageSeed {
  concept: string
  title: string
  kind: Stage['kind']
  instructions: string
  palette?: string[]
  starterCode?: string
  validation: Stage['validation']
  reference?: Stage['reference']
}

const webStages: StageSeed[] = [
  {
    concept: 'hello',
    title: 'Hello from JavaScript',
    kind: 'code',
    instructions:
      'Every web developer starts here. Print the message "Hello from JavaScript" so the console shows it back to you.',
    starterCode: '// Type a print() line below this comment.\n',
    validation: {
      consoleExact: ['Hello from JavaScript'],
      explanationKeywords: ['print']
    }
  },
  {
    concept: 'variables',
    title: 'Storing a name',
    kind: 'code',
    instructions:
      'A variable is a named box for a value. Create a variable called name holding "Ada", then print "Hi, " followed by the variable.',
    starterCode: '// let name = "Ada";\n// print("Hi, " + name);\n',
    validation: {
      consoleExact: ['Hi, Ada'],
      explanationKeywords: ['variable']
    }
  },
  {
    concept: 'conditionals',
    title: 'Level up',
    kind: 'code',
    instructions:
      'If a player score is greater than 5, print "Level up!". Otherwise print "Keep going.". Set score to 8 before the check.',
    starterCode: 'let score = 8;\n// if (score > 5) { ... } else { ... }\n',
    validation: {
      consoleExact: ['Level up!'],
      requireKeywords: ['if'],
      explanationKeywords: ['if', 'condition']
    }
  },
  {
    concept: 'loops',
    title: 'Three reminders',
    kind: 'code',
    instructions:
      'A loop repeats work for you. Use repeat to print "Fix the bug!" exactly three times without writing the line three times.',
    starterCode: '// repeat (3) { ... }\n',
    validation: {
      consoleLines: 3,
      consoleIncludes: ['Fix the bug!'],
      requireKeywords: ['repeat'],
      explanationKeywords: ['loop', 'repeat']
    }
  },
  {
    concept: 'functions',
    title: 'Your first function',
    kind: 'code',
    instructions:
      'A function packages a named job so you can run it many times. Define greet() that prints "Hello!", then call it.',
    starterCode: '// function greet() { ... }\n// greet();\n',
    validation: {
      consoleExact: ['Hello!'],
      requireKeywords: ['function'],
      explanationKeywords: ['function']
    }
  },
  {
    concept: 'sequence',
    title: 'Draw a square',
    kind: 'block',
    instructions:
      'Build a program with blocks that draws a square: move forward, turn right, and repeat that until the shape closes. Start at 50 steps per side.',
    palette: ['forward', 'right', 'penColor', 'clear'],
    validation: {
      requireBlockTypes: ['forward', 'right'],
      explanationKeywords: ['forward', 'turn']
    }
  },
  {
    concept: 'loops',
    title: 'Square with a loop',
    kind: 'block',
    instructions:
      'Now draw the same square using a repeat block. Four sides, one turn each: a loop is shorter than four copies.',
    palette: ['repeat', 'forward', 'right', 'clear'],
    validation: {
      requireBlockTypes: ['repeat', 'forward', 'right'],
      explanationKeywords: ['repeat', 'loop']
    }
  },
  {
    concept: 'logic',
    title: 'Night mode',
    kind: 'code',
    instructions:
      'Combine a variable with a condition. If dark is true, print "Night mode on", otherwise print "Day mode". Set dark to true.',
    starterCode: 'let dark = true;\n// if (dark) { ... } else { ... }\n',
    validation: {
      consoleExact: ['Night mode on'],
      requireKeywords: ['if', 'else'],
      explanationKeywords: ['if', 'else']
    }
  },
  {
    concept: 'web',
    title: 'How the web works',
    kind: 'reference',
    instructions:
      'Read the MDN guide to how the web works. The point is not to memorize — it is to be able to explain what happens when you visit a page.',
    reference: {
      kind: 'docs',
      title: 'MDN: How the web works',
      url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works',
      whyKey: 'reference.web.why'
    },
    validation: {
      explanationKeywords: ['server', 'request', 'browser']
    }
  },
  {
    concept: 'clean_code',
    title: 'Capstone: name your parts',
    kind: 'code',
    instructions:
      'A function that draws deserves a good name. Write a function drawStar() that draws a 5-point star using repeat and turn, then call it. Clean names are part of building, not decorating.',
    starterCode: '// function drawStar() { ... }\n// drawStar();\n',
    validation: {
      requireKeywords: ['function', 'repeat'],
      explanationKeywords: ['name', 'function']
    }
  }
]

const gameStages: StageSeed[] = [
  {
    concept: 'hello',
    title: 'Player ready',
    kind: 'code',
    instructions: 'Print "Player ready!" to the console — the first thing every game prints.',
    starterCode: '// print("Player ready!");\n',
    validation: {
      consoleExact: ['Player ready!'],
      explanationKeywords: ['print']
    }
  },
  {
    concept: 'variables',
    title: 'Three lives',
    kind: 'code',
    instructions: 'Store lives as a variable set to 3, then print "Lives: " plus the variable.',
    starterCode: '// let lives = 3;\n// print("Lives: " + lives);\n',
    validation: {
      consoleExact: ['Lives: 3'],
      explanationKeywords: ['variable', 'lives']
    }
  },
  {
    concept: 'conditionals',
    title: 'Game on',
    kind: 'code',
    instructions: 'If lives is greater than 0, print "Game on!". Otherwise print "Game over.".',
    starterCode: 'let lives = 3;\n// if (lives > 0) { ... } else { ... }\n',
    validation: {
      consoleExact: ['Game on!'],
      requireKeywords: ['if'],
      explanationKeywords: ['if', 'lives']
    }
  },
  {
    concept: 'loops',
    title: 'Coin rush',
    kind: 'code',
    instructions:
      'Use a loop to print "Coin collected" five times. A level designer would never copy-paste this five times.',
    starterCode: '// repeat (5) { ... }\n',
    validation: {
      consoleLines: 5,
      consoleIncludes: ['Coin collected'],
      requireKeywords: ['repeat'],
      explanationKeywords: ['repeat']
    }
  },
  {
    concept: 'functions',
    title: 'Jump!',
    kind: 'code',
    instructions:
      'Write a jump() function that prints "Jump!", then call it twice so the hero can double-jump.',
    starterCode: '// function jump() { ... }\n// jump();\n// jump();\n',
    validation: {
      consoleExact: ['Jump!', 'Jump!'],
      requireKeywords: ['function'],
      explanationKeywords: ['function', 'call']
    }
  },
  {
    concept: 'sequence',
    title: 'Player spawn',
    kind: 'block',
    instructions:
      'Games place the player with coordinates. Use blocks to draw a square at the spawn point (forward, right, repeat a little).',
    palette: ['forward', 'right', 'penColor', 'clear'],
    validation: {
      requireBlockTypes: ['forward', 'right'],
      explanationKeywords: ['forward']
    }
  },
  {
    concept: 'loops',
    title: 'Square arena',
    kind: 'block',
    instructions:
      'Draw the arena border as a square using a repeat block instead of four copied corners.',
    palette: ['repeat', 'forward', 'right', 'clear'],
    validation: {
      requireBlockTypes: ['repeat', 'forward', 'right'],
      explanationKeywords: ['repeat']
    }
  },
  {
    concept: 'logic',
    title: 'Double points',
    kind: 'code',
    instructions:
      'If a powerUp flag is true, multiply score by 2 before printing it. score starts at 10.',
    starterCode:
      'let score = 10;\nlet powerUp = true;\n// if (powerUp) { score = score * 2; }\n// print(score);\n',
    validation: {
      consoleExact: ['20'],
      requireKeywords: ['if'],
      explanationKeywords: ['if', 'multiply']
    }
  },
  {
    concept: 'game_loop',
    title: 'What a game loop is',
    kind: 'reference',
    instructions:
      'Watch the explanatory video on how game loops work. Your goal: explain why a game needs to re-draw every frame.',
    reference: {
      kind: 'video',
      title: 'CS50: game development intro',
      url: 'https://www.youtube.com/c/cs50',
      whyKey: 'reference.game.why'
    },
    validation: {
      explanationKeywords: ['loop', 'frame']
    }
  },
  {
    concept: 'clean_code',
    title: 'Capstone: draw a star',
    kind: 'code',
    instructions:
      'Write drawStar() that draws a 5-point star using repeat and turn, then call it. Give it a name that says what it does.',
    starterCode: '// function drawStar() { ... }\n// drawStar();\n',
    validation: {
      requireKeywords: ['function', 'repeat'],
      explanationKeywords: ['function', 'repeat']
    }
  }
]

const dataStages: StageSeed[] = [
  {
    concept: 'hello',
    title: 'Data time',
    kind: 'code',
    instructions: 'Print "Data time!" — the start of every analysis.',
    starterCode: '// print("Data time!");\n',
    validation: {
      consoleExact: ['Data time!'],
      explanationKeywords: ['print']
    }
  },
  {
    concept: 'variables',
    title: 'Store the total',
    kind: 'code',
    instructions: 'Store 42 in a variable called total, then print it.',
    starterCode: '// let total = 42;\n// print(total);\n',
    validation: {
      consoleExact: ['42'],
      explanationKeywords: ['variable', 'total']
    }
  },
  {
    concept: 'conditionals',
    title: 'Hot day',
    kind: 'code',
    instructions:
      'If temperature is greater than 30, print "Hot day!", otherwise print "Cool enough."',
    starterCode: 'let temperature = 34;\n// if (temperature > 30) { ... } else { ... }\n',
    validation: {
      consoleExact: ['Hot day!'],
      requireKeywords: ['if'],
      explanationKeywords: ['if', 'temperature']
    }
  },
  {
    concept: 'loops',
    title: 'Five readings',
    kind: 'code',
    instructions: 'A sensor takes readings on a loop. Print "Reading" five times with a repeat.',
    starterCode: '// repeat (5) { ... }\n',
    validation: {
      consoleLines: 5,
      consoleIncludes: ['Reading'],
      requireKeywords: ['repeat'],
      explanationKeywords: ['repeat']
    }
  },
  {
    concept: 'functions',
    title: 'Average helper',
    kind: 'code',
    instructions:
      'Write average() that prints "Average: 50" (compute it with variables), then call it.',
    starterCode: '// function average() { ... }\n// average();\n',
    validation: {
      consoleExact: ['Average: 50'],
      requireKeywords: ['function'],
      explanationKeywords: ['function']
    }
  },
  {
    concept: 'sequence',
    title: 'Plot a line',
    kind: 'block',
    instructions:
      'Analysts draw trends. Use blocks to draw a rising line on the turtle canvas: forward, then turn.',
    palette: ['forward', 'left', 'right', 'penColor', 'clear'],
    validation: {
      requireBlockTypes: ['forward'],
      explanationKeywords: ['forward', 'line']
    }
  },
  {
    concept: 'loops',
    title: 'Bar chart',
    kind: 'block',
    instructions:
      'Build a bar chart out of a repeat block: each bar is forward then back, with a turn between bars.',
    palette: ['repeat', 'forward', 'back', 'right', 'left', 'clear'],
    validation: {
      requireBlockTypes: ['repeat', 'forward'],
      explanationKeywords: ['repeat', 'bar']
    }
  },
  {
    concept: 'logic',
    title: 'Count to ten',
    kind: 'code',
    instructions:
      'Start n at 0. Inside a repeat that runs 5 times, add 2 to n. Print n afterwards. This is how loops build data.',
    starterCode: 'let n = 0;\n// repeat (5) { n = n + 2; }\n// print(n);\n',
    validation: {
      consoleExact: ['10'],
      requireKeywords: ['repeat'],
      explanationKeywords: ['repeat', 'add']
    }
  },
  {
    concept: 'datasets',
    title: 'What a dataset is',
    kind: 'reference',
    instructions:
      'Read the guide on datasets. Your goal is to explain the difference between raw data and a question a dataset can answer.',
    reference: {
      kind: 'docs',
      title: 'Kaggle Learn: data concepts',
      url: 'https://www.kaggle.com/learn',
      whyKey: 'reference.data.why'
    },
    validation: {
      explanationKeywords: ['data', 'question']
    }
  },
  {
    concept: 'clean_code',
    title: 'Capstone: summarize',
    kind: 'code',
    instructions:
      'Write summarize() that prints the count of a list [1, 2, 3, 4, 5] using the count() helper, then call it.',
    starterCode: '// function summarize() { ... }\n// summarize();\n',
    validation: {
      consoleExact: ['5'],
      requireKeywords: ['function'],
      explanationKeywords: ['function', 'count']
    }
  }
]

const embeddedStages: StageSeed[] = [
  {
    concept: 'hello',
    title: 'Hello from C',
    kind: 'code',
    instructions: 'Print "Hello from C" — the tradition every embedded developer honors.',
    starterCode: '// print("Hello from C");\n',
    validation: {
      consoleExact: ['Hello from C'],
      explanationKeywords: ['print']
    }
  },
  {
    concept: 'variables',
    title: 'Pin 13',
    kind: 'code',
    instructions:
      'Store 13 in a variable called pin, then print it. Pins are just numbers to a program.',
    starterCode: '// let pin = 13;\n// print(pin);\n',
    validation: {
      consoleExact: ['13'],
      explanationKeywords: ['variable', 'pin']
    }
  },
  {
    concept: 'conditionals',
    title: 'LED on',
    kind: 'code',
    instructions: 'If buttonPress equals 1, print "LED on", otherwise print "LED off".',
    starterCode: 'let buttonPress = 1;\n// if (buttonPress == 1) { ... } else { ... }\n',
    validation: {
      consoleExact: ['LED on'],
      requireKeywords: ['if'],
      explanationKeywords: ['if', 'button']
    }
  },
  {
    concept: 'loops',
    title: 'Blink three times',
    kind: 'code',
    instructions: 'An LED blinks on a loop. Print "Blink" three times with a repeat.',
    starterCode: '// repeat (3) { ... }\n',
    validation: {
      consoleLines: 3,
      consoleIncludes: ['Blink'],
      requireKeywords: ['repeat'],
      explanationKeywords: ['repeat', 'blink']
    }
  },
  {
    concept: 'functions',
    title: 'Setup function',
    kind: 'code',
    instructions:
      'Embedded programs run a setup function. Write setup() that prints "System ready", then call it.',
    starterCode: '// function setup() { ... }\n// setup();\n',
    validation: {
      consoleExact: ['System ready'],
      requireKeywords: ['function'],
      explanationKeywords: ['function']
    }
  },
  {
    concept: 'sequence',
    title: 'Robot path',
    kind: 'block',
    instructions:
      'Program a little robot to move in a straight line with forward blocks, then come back.',
    palette: ['forward', 'back', 'penColor', 'clear'],
    validation: {
      requireBlockTypes: ['forward', 'back'],
      explanationKeywords: ['forward']
    }
  },
  {
    concept: 'loops',
    title: 'Circuit loop',
    kind: 'block',
    instructions:
      'The robot should patrol a square. Use a repeat block with forward and right to trace the square.',
    palette: ['repeat', 'forward', 'right', 'clear'],
    validation: {
      requireBlockTypes: ['repeat', 'forward', 'right'],
      explanationKeywords: ['repeat']
    }
  },
  {
    concept: 'logic',
    title: 'Sensor threshold',
    kind: 'code',
    instructions:
      'If lightLevel is below 200, print "Too dark", otherwise print "Light ok". Set lightLevel to 150.',
    starterCode: 'let lightLevel = 150;\n// if (lightLevel < 200) { ... } else { ... }\n',
    validation: {
      consoleExact: ['Too dark'],
      requireKeywords: ['if', 'else'],
      explanationKeywords: ['if', 'threshold']
    }
  },
  {
    concept: 'hardware',
    title: 'How a chip thinks',
    kind: 'reference',
    instructions:
      'Watch the explanatory video on how computers turn electricity into logic. Your goal: explain why 0s and 1s are enough for a program.',
    reference: {
      kind: 'video',
      title: 'Computerphile: how computers work',
      url: 'https://www.youtube.com/user/Computerphile',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['bit', 'electricity']
    }
  },
  {
    concept: 'clean_code',
    title: 'Capstone: patrol',
    kind: 'code',
    instructions:
      'Write patrol() that draws a square using repeat and right, then call it twice so the robot circles twice.',
    starterCode: '// function patrol() { ... }\n// patrol();\n// patrol();\n',
    validation: {
      requireKeywords: ['function', 'repeat'],
      explanationKeywords: ['function', 'repeat']
    }
  }
]

const mobileStages: StageSeed[] = [
  {
    concept: 'hello',
    title: 'Hello from Dart',
    kind: 'code',
    instructions: 'Print "Hello from Dart" — your first line of a mobile app.',
    starterCode: '// print("Hello from Dart");\n',
    validation: {
      consoleExact: ['Hello from Dart'],
      explanationKeywords: ['print']
    }
  },
  {
    concept: 'variables',
    title: 'App title',
    kind: 'code',
    instructions: 'Store "My App" in a variable called title, then print it.',
    starterCode: '// let title = "My App";\n// print(title);\n',
    validation: {
      consoleExact: ['My App'],
      explanationKeywords: ['variable', 'title']
    }
  },
  {
    concept: 'conditionals',
    title: 'Welcome back',
    kind: 'code',
    instructions: 'If loggedIn is true, print "Welcome", otherwise print "Sign in".',
    starterCode: 'let loggedIn = true;\n// if (loggedIn) { ... } else { ... }\n',
    validation: {
      consoleExact: ['Welcome'],
      requireKeywords: ['if'],
      explanationKeywords: ['if', 'loggedIn']
    }
  },
  {
    concept: 'loops',
    title: 'Loading',
    kind: 'code',
    instructions:
      'Apps show loading spinners on a loop. Print "Loading" three times with a repeat.',
    starterCode: '// repeat (3) { ... }\n',
    validation: {
      consoleLines: 3,
      consoleIncludes: ['Loading'],
      requireKeywords: ['repeat'],
      explanationKeywords: ['repeat']
    }
  },
  {
    concept: 'functions',
    title: 'Render screen',
    kind: 'code',
    instructions: 'Write render() that prints "Screen ready", then call it.',
    starterCode: '// function render() { ... }\n// render();\n',
    validation: {
      consoleExact: ['Screen ready'],
      requireKeywords: ['function'],
      explanationKeywords: ['function']
    }
  },
  {
    concept: 'sequence',
    title: 'Draw the icon',
    kind: 'block',
    instructions: 'Apps start with an icon. Use blocks to draw a simple square icon on the canvas.',
    palette: ['forward', 'right', 'penColor', 'clear'],
    validation: {
      requireBlockTypes: ['forward', 'right'],
      explanationKeywords: ['forward']
    }
  },
  {
    concept: 'loops',
    title: 'Rounded button',
    kind: 'block',
    instructions:
      'Buttons are rounded rectangles. Draw a square border with a repeat block, then a small corner turn each time.',
    palette: ['repeat', 'forward', 'right', 'clear'],
    validation: {
      requireBlockTypes: ['repeat', 'forward', 'right'],
      explanationKeywords: ['repeat']
    }
  },
  {
    concept: 'logic',
    title: 'Notifications',
    kind: 'code',
    instructions:
      'If notifications is greater than 0, print "You have updates", otherwise print "All clear".',
    starterCode: 'let notifications = 3;\n// if (notifications > 0) { ... } else { ... }\n',
    validation: {
      consoleExact: ['You have updates'],
      requireKeywords: ['if'],
      explanationKeywords: ['if', 'notifications']
    }
  },
  {
    concept: 'mobile',
    title: 'What a widget is',
    kind: 'reference',
    instructions:
      'Read the Flutter documentation on widgets. Your goal: explain what a widget is in your own words.',
    reference: {
      kind: 'docs',
      title: 'Flutter: intro to widgets',
      url: 'https://docs.flutter.dev/ui',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['widget', 'screen']
    }
  },
  {
    concept: 'clean_code',
    title: 'Capstone: draw a phone',
    kind: 'code',
    instructions:
      'Write drawPhone() that draws a rectangle like a phone screen using repeat and right, then call it.',
    starterCode: '// function drawPhone() { ... }\n// drawPhone();\n',
    validation: {
      requireKeywords: ['function', 'repeat'],
      explanationKeywords: ['function', 'repeat']
    }
  }
]

const allMobileStages = [...mobileStages, ...mobileStagesExtended]
const allWebStages = [...webStages, ...webStagesExtended]
const allGameStages = [...gameStages, ...gameStagesExtended]
const allDataStages = [...dataStages, ...dataStagesExtended]
const allEmbeddedStages = [...embeddedStages, ...embeddedStagesExtended]

export const PATHS: CareerPath[] = [
  {
    id: 'web',
    nameKey: 'path.web.name',
    icon: 'Globe',
    color: 'var(--accent-blue)',
    descriptionKey: 'path.web.description',
    languages: ['JavaScript', 'HTML', 'CSS'],
    stageKeys: allWebStages.map((_, i) => `web-${i + 1}`)
  },
  {
    id: 'game',
    nameKey: 'path.game.name',
    icon: 'Gamepad2',
    color: 'var(--accent-purple)',
    descriptionKey: 'path.game.description',
    languages: ['Python'],
    stageKeys: allGameStages.map((_, i) => `game-${i + 1}`)
  },
  {
    id: 'data',
    nameKey: 'path.data.name',
    icon: 'ChartColumn',
    color: 'var(--accent-green)',
    descriptionKey: 'path.data.description',
    languages: ['Python', 'SQL'],
    stageKeys: allDataStages.map((_, i) => `data-${i + 1}`)
  },
  {
    id: 'embedded',
    nameKey: 'path.embedded.name',
    icon: 'Cpu',
    color: 'var(--accent-orange)',
    descriptionKey: 'path.embedded.description',
    languages: ['C'],
    stageKeys: allEmbeddedStages.map((_, i) => `embedded-${i + 1}`)
  },
  {
    id: 'mobile',
    nameKey: 'path.mobile.name',
    icon: 'Smartphone',
    color: 'var(--accent-coral)',
    descriptionKey: 'path.mobile.description',
    languages: ['Dart'],
    stageKeys: allMobileStages.map((_, i) => `mobile-${i + 1}`)
  }
]

const seedsByPath: Record<CareerPathId, StageSeed[]> = {
  web: allWebStages,
  game: allGameStages,
  data: allDataStages,
  embedded: allEmbeddedStages,
  mobile: allMobileStages
}

let cache: Stage[] | null = null

export function allStages(): Stage[] {
  if (cache) return cache
  const stages: Stage[] = []
  for (const path of PATHS) {
    const seeds = seedsByPath[path.id]
    seeds.forEach((seed, i) => {
      stages.push({
        key: `${path.id}-${i + 1}`,
        path: path.id,
        index: i,
        conceptKey: `concept.${seed.concept}`,
        titleKey: seed.title,
        kind: seed.kind,
        instructionsKey: seed.instructions,
        palette: seed.palette,
        starterCode: seed.starterCode,
        validation: seed.validation,
        reference: seed.reference
      })
    })
  }
  cache = stages
  return stages
}

export function getStage(key: string): Stage | undefined {
  return allStages().find((s) => s.key === key)
}

export function stagesForPath(path: CareerPathId): Stage[] {
  return allStages().filter((s) => s.path === path)
}
