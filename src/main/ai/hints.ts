// Local Socratic hint ladder — used offline or when no Groq key is configured.
// Mirrors the AI contract: escalate by tier, never hand over a working solution.

const LADDER: Record<string, string[]> = {
  print: [
    'What command have you seen that sends text to the console?',
    'The command starts with "p" and takes your message in parentheses, like a nickname in brackets.',
    'Type print followed by parentheses, and put your message in quotes inside them.'
  ],
  variables: [
    'A variable is a named box for a value. Which of the two things here is the box, and which is the value going inside?',
    'You can create a box with the word "let". The box name goes on the left of an equals sign.',
    'Write let, then the name you chose, then =, then the value. After that you can print the name and it shows the value.'
  ],
  conditionals: [
    'When do you want one message to appear, and when the other? What single fact decides it?',
    'An if statement takes a question in parentheses. If the answer is yes it runs the first block, otherwise the second.',
    'Write if followed by a true-or-false question in parentheses, then braces. Use else for the other branch.'
  ],
  loops: [
    'Do you want to write the same line three times, or find a way to repeat work for you?',
    'A loop runs a block a set number of times. The block uses braces like a shelf holding your items.',
    'Write repeat, then the count in parentheses, then braces, and put one copy of the line inside.'
  ],
  functions: [
    'You have a job that should run on command. What would you name that job?',
    'A function is a named job: you define it once with braces, then run it by typing its name.',
    'Write function, the name, parentheses, braces for the body. Then call it by typing the name with parentheses.'
  ],
  sequence: [
    'What does the turtle need to do first: move, or turn?',
    'Every step happens in order. Moving and turning are separate blocks you stack.',
    'Add a forward block, then a turn block, then more forward — stacked top to bottom.'
  ],
  logic: [
    'There is a flag that is either true or false. Where does it get to decide things?',
    'The flag fits inside an if question. True runs one block, false runs the other.',
    'Write if with the flag in parentheses, then your first message, then else with the second.'
  ],
  clean_code: [
    'If someone else read your code, what would they learn from the name you chose?',
    'A good name says what the job does in a few words. "draw" tells you more than "doThing".',
    'Pick a name that describes the shape you draw, then call it after defining it.'
  ],
  hello: [
    'What do you want the console to say back to you?',
    'There is a command that shows text in the console.',
    'Use print with your message in quotes inside the parentheses.'
  ],
  datasets: [
    'What is the raw material here, and what is the question you want answered?',
    'A dataset holds raw records. Questions come from someone asking something about those records.',
    'Explain which part is the data and which part is the question you want it to answer.'
  ],
  game_loop: [
    'What does a game need to keep doing so the screen never freezes?',
    'A game is one loop that redraws constantly. What happens between frames?',
    'The loop reads input, updates the world, then draws — over and over. Explain that cycle.'
  ],
  hardware: [
    'A computer chip has two reliable states for every wire. What are they?',
    'On and off are the two states. Everything else is built out of just those.',
    'Explain that 0s and 1s are just "off" and "on", and that logic combines them into decisions.'
  ],
  mobile: [
    'What is the smallest reusable piece of a screen called in Flutter?',
    'Everything you see in a Flutter app is made of these pieces — text, buttons, and layouts are all examples.',
    'A widget is a reusable description of part of the screen. Explain how widgets compose a UI.'
  ],
  web: [
    'When you type a web address, which machines are talking to each other?',
    'Your browser asks a server for files, and the server answers. What does the browser do with the answer?',
    'Explain that the browser sends a request, the server replies with files, and the browser turns them into a page.'
  ]
}

const FALLBACK = [
  'What part of the problem have you already solved?',
  'Look at the pieces you know work. Which one is closest to what you need?',
  'Read your code out loud — the fix is usually in the step right before the trouble.'
]

export function localHint(concept: string, tier: number): string {
  const ladder = LADDER[concept] ?? FALLBACK
  return ladder[Math.min(tier, ladder.length - 1)]
}

export function localExplainCheck(
  explanation: string,
  keywords: string[],
  _concept: string
): string {
  const text = explanation.toLowerCase()
  const missing = keywords.filter((k) => !text.includes(k.toLowerCase()))
  if (missing.length === 0) {
    return `Your explanation mentions the key ideas of this stage. It matches what you built.`
  }
  return `A good explanation would touch on ${missing.join(', ')}. Try saying what each piece does and why you chose it.`
}
