// game-11 through game-150 — appended to gameStages in data.ts

import type { StageSeed } from './data'

const gameStagesExtended: StageSeed[] = [
  // ─── Foundation (11–25): Deeper variables, conditionals, string building, functions ───

  {
    concept: 'player_stats',
    title: 'Player stats',
    kind: 'code',
    instructions:
      'A game tracks a player with numbers. Create variables for health (100), attack (15), and defense (8). Print each one on its own line so you can see the full stat sheet.',
    starterCode:
      '// let health = 100;\n// let attack = 15;\n// let defense = 8;\n// print(health);\n// print(attack);\n// print(defense);\n',
    validation: {
      consoleExact: ['100', '15', '8'],
      requireKeywords: ['let'],
      explanationKeywords: ['variable', 'health', 'attack']
    }
  },
  {
    concept: 'health_check',
    title: 'Health check',
    kind: 'code',
    instructions:
      'When health drops to zero, the game is over. Set health to 0 and use an if/else to print "K.O.!" when health equals 0, otherwise print "Still standing."',
    starterCode: 'let health = 0;\n// if (health == 0) { ... } else { ... }\n',
    validation: {
      consoleExact: ['K.O.!'],
      requireKeywords: ['if'],
      explanationKeywords: ['if', 'health', 'equals']
    }
  },
  {
    concept: 'damage',
    title: 'Take damage',
    kind: 'code',
    instructions:
      'A player with 100 health gets hit for 30 damage. Subtract damage from health using the minus sign, then print health. It should show 70.',
    starterCode:
      'let health = 100;\nlet damage = 30;\n// health = health - damage;\n// print(health);\n',
    validation: {
      consoleExact: ['70'],
      requireKeywords: ['let'],
      explanationKeywords: ['subtract', 'damage', 'health']
    }
  },
  {
    concept: 'nested_conditions',
    title: 'Difficulty selector',
    kind: 'code',
    instructions:
      'Games have difficulty levels. If difficulty is "hard", print "Extra enemies!". Otherwise, if difficulty is "medium", print "Balanced". Otherwise print "Relax and explore." Set difficulty to "hard" first.',
    starterCode:
      'let difficulty = "hard";\n// if (difficulty == "hard") { ... } else if (difficulty == "medium") { ... } else { ... }\n',
    validation: {
      consoleExact: ['Extra enemies!'],
      requireKeywords: ['if', 'else'],
      explanationKeywords: ['if', 'else', 'difficulty']
    }
  },
  {
    concept: 'string_building',
    title: 'Player name banner',
    kind: 'code',
    instructions:
      'Combine strings with the plus sign to build a banner. Store "Dragon" in name, then print "Welcome, " + name + "!" so the console shows the full greeting.',
    starterCode: 'let name = "Dragon";\n// print("Welcome, " + name + "!");\n',
    validation: {
      consoleExact: ['Welcome, Dragon!'],
      requireKeywords: ['let'],
      explanationKeywords: ['string', 'plus', 'concatenate']
    }
  },
  {
    concept: 'booleans',
    title: 'Is the player alive?',
    kind: 'code',
    instructions:
      'A boolean is true or false — like a light switch. Set isAlive to true, then print "Alive!" if it is true, "Dead!" otherwise.',
    starterCode: 'let isAlive = true;\n// if (isAlive) { ... } else { ... }\n',
    validation: {
      consoleExact: ['Alive!'],
      requireKeywords: ['if'],
      explanationKeywords: ['boolean', 'true', 'alive']
    }
  },
  {
    concept: 'counters',
    title: 'Score tracker',
    kind: 'code',
    instructions:
      'Start score at 0. Collect three coins by adding 1 to score three times in a row, then print score. It should be 3.',
    starterCode:
      'let score = 0;\n// score = score + 1;\n// score = score + 1;\n// score = score + 1;\n// print(score);\n',
    validation: {
      consoleExact: ['3'],
      explanationKeywords: ['counter', 'score', 'add']
    }
  },
  {
    concept: 'timer',
    title: 'Countdown timer',
    kind: 'code',
    instructions:
      'Games count down from 10 to launch. Use a loop that subtracts 1 each round, then print the final value. Start at 10, run the loop 10 times.',
    starterCode: 'let timer = 10;\n// repeat (10) { timer = timer - 1; }\n// print(timer);\n',
    validation: {
      consoleExact: ['0'],
      requireKeywords: ['repeat'],
      explanationKeywords: ['timer', 'loop', 'subtract']
    }
  },
  {
    concept: 'else_if',
    title: 'Multi-state enemy',
    kind: 'code',
    instructions:
      'Enemies change behavior by health. If health is above 70, print "Aggressive". If health is above 30, print "Cautious". Otherwise print "Fleeing!". Set health to 50.',
    starterCode:
      'let health = 50;\n// if (health > 70) { ... } else if (health > 30) { ... } else { ... }\n',
    validation: {
      consoleExact: ['Cautious'],
      requireKeywords: ['else', 'if'],
      explanationKeywords: ['else', 'if', 'state']
    }
  },
  {
    concept: 'comparisons',
    title: 'Collision bounds',
    kind: 'code',
    instructions:
      'A collision happens when two objects share the same space. If playerX is greater than or equal to wallX, print "Hit wall!". Otherwise print "Safe." Set playerX to 10 and wallX to 10.',
    starterCode:
      'let playerX = 10;\nlet wallX = 10;\n// if (playerX >= wallX) { ... } else { ... }\n',
    validation: {
      consoleExact: ['Hit wall!'],
      requireKeywords: ['if'],
      explanationKeywords: ['comparison', 'greater', 'collision']
    }
  },
  {
    concept: 'increment_score',
    title: 'Combo counter',
    kind: 'code',
    instructions:
      'Start score at 0. Add 5 three times using a loop, then print score. Each loop iteration is one combo hit.',
    starterCode: 'let score = 0;\n// repeat (3) { score = score + 5; }\n// print(score);\n',
    validation: {
      consoleExact: ['15'],
      requireKeywords: ['repeat'],
      explanationKeywords: ['increment', 'score', 'combo']
    }
  },
  {
    concept: 'naming',
    title: 'Name your variables',
    kind: 'code',
    instructions:
      'Good variable names tell you what they hold. Create three variables with clear names: playerHealth (100), playerSpeed (5), and playerLevel (1). Print each one.',
    starterCode:
      '// let playerHealth = 100;\n// let playerSpeed = 5;\n// let playerLevel = 1;\n// print(playerHealth);\n// print(playerSpeed);\n// print(playerLevel);\n',
    validation: {
      consoleExact: ['100', '5', '1'],
      requireKeywords: ['let'],
      explanationKeywords: ['naming', 'readable', 'variable']
    }
  },
  {
    concept: 'comments',
    title: 'Comment your game',
    kind: 'code',
    instructions:
      'Write a short game that prints "Level 1" with a comment above it explaining what the code does. Comments start with // and help other developers understand your logic.',
    starterCode: '// This starts the first level\n// print("Level 1");\n',
    validation: {
      consoleExact: ['Level 1'],
      requireKeywords: ['//'],
      explanationKeywords: ['comment', 'explain', 'readable']
    }
  },
  {
    concept: 'scope',
    title: 'Scope in game context',
    kind: 'code',
    instructions:
      'Variables inside a function only live there. Write a function called startRound that creates a variable roundScore = 10 and prints it. Then outside, try to print roundScore — it should only work inside the function.',
    starterCode:
      '// function startRound() {\n//   let roundScore = 10;\n//   print(roundScore);\n// }\n// startRound();\n',
    validation: {
      consoleExact: ['10'],
      requireKeywords: ['function', 'let'],
      explanationKeywords: ['scope', 'local', 'variable']
    }
  },
  {
    concept: 'function_params',
    title: 'Damage calculator',
    kind: 'code',
    instructions:
      'Write calcDamage(attack, defense) that prints attack minus defense. Call it with (20, 8) to print 12. Parameters let you reuse the same logic with different numbers.',
    starterCode:
      '// function calcDamage(attack, defense) {\n//   let result = attack - defense;\n//   print(result);\n// }\n// calcDamage(20, 8);\n',
    validation: {
      consoleExact: ['12'],
      requireKeywords: ['function'],
      explanationKeywords: ['function', 'parameter', 'damage']
    }
  },
  {
    concept: 'return_values',
    title: 'Distance calculator',
    kind: 'code',
    instructions:
      'A function can return a value instead of printing. Write distance(x1, y1, x2, y2) that returns (x2 - x1) + (y2 - y1). Store the result and print it. Call distance(0, 0, 3, 4).',
    starterCode:
      '// function distance(x1, y1, x2, y2) {\n//   return (x2 - x1) + (y2 - y1);\n// }\n// let d = distance(0, 0, 3, 4);\n// print(d);\n',
    validation: {
      consoleExact: ['7'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['return', 'function', 'value']
    }
  },

  // ─── Core (26–50): Arrays, iteration, patterns, utility functions ───

  {
    concept: 'arrays',
    title: 'Inventory list',
    kind: 'code',
    instructions:
      'An array holds many values in one variable. Create an inventory with three items: "Sword", "Shield", "Potion". Print each item using get(inventory, 0), get(inventory, 1), get(inventory, 2).',
    starterCode:
      'let inventory = ["Sword", "Shield", "Potion"];\n// print(get(inventory, 0));\n// print(get(inventory, 1));\n// print(get(inventory, 2));\n',
    validation: {
      consoleExact: ['Sword', 'Shield', 'Potion'],
      requireKeywords: ['let'],
      explanationKeywords: ['array', 'inventory', 'get']
    }
  },
  {
    concept: 'push_pop',
    title: 'Add to inventory',
    kind: 'code',
    instructions:
      'push() adds an item to the end of an array. Start with ["Sword", "Shield"], push "Potion" onto it, then print the count to show the inventory now has 3 items.',
    starterCode:
      'let inventory = ["Sword", "Shield"];\n// push(inventory, "Potion");\n// print(count(inventory));\n',
    validation: {
      consoleExact: ['3'],
      requireKeywords: ['push'],
      explanationKeywords: ['push', 'array', 'inventory']
    }
  },
  {
    concept: 'count',
    title: 'Count the enemies',
    kind: 'code',
    instructions:
      'count() tells you how many items are in an array. Create an array of three enemy names, then print count(enemies).',
    starterCode: 'let enemies = ["Goblin", "Orc", "Troll"];\n// print(count(enemies));\n',
    validation: {
      consoleExact: ['3'],
      explanationKeywords: ['count', 'array', 'length']
    }
  },
  {
    concept: 'get',
    title: 'Select a weapon',
    kind: 'code',
    instructions:
      'get() picks an item by its position. Create weapons = ["Bow", "Staff", "Dagger"]. Print the third weapon using get(weapons, 2). Remember: positions start at 0!',
    starterCode: 'let weapons = ["Bow", "Staff", "Dagger"];\n// print(get(weapons, 2));\n',
    validation: {
      consoleExact: ['Dagger'],
      explanationKeywords: ['get', 'index', 'position']
    }
  },
  {
    concept: 'iterate_array',
    title: 'Enemy wave',
    kind: 'code',
    instructions:
      'Print each enemy in a wave. Create enemies = ["Goblin", "Goblin", "Orc"]. Loop 3 times, and inside the loop print "Enemy incoming!". The array tells you how many times to loop.',
    starterCode:
      'let enemies = ["Goblin", "Goblin", "Orc"];\n// repeat (count(enemies)) { print("Enemy incoming!"); }\n',
    validation: {
      consoleLines: 3,
      consoleIncludes: ['Enemy incoming!'],
      requireKeywords: ['repeat', 'count'],
      explanationKeywords: ['iterate', 'loop', 'array']
    }
  },
  {
    concept: 'string_patterns',
    title: 'Level name builder',
    kind: 'code',
    instructions:
      'Build level names from parts. Store world = "Forest" and num = 3. Print "World " + num + ": " + world + " of Shadows" to create a fancy level name.',
    starterCode:
      'let world = "Forest";\nlet num = 3;\n// print("World " + num + ": " + world + " of Shadows");\n',
    validation: {
      consoleExact: ['World 3: Forest of Shadows'],
      explanationKeywords: ['string', 'concatenate', 'pattern']
    }
  },
  {
    concept: 'nested_loops',
    title: 'AI patrol grid',
    kind: 'code',
    instructions:
      'An enemy patrols a 3x3 grid. Use a loop that runs 3 times, and inside it print "Scan row" three times with a nested loop. That is 9 scans total.',
    starterCode: '// repeat (3) {\n//   repeat (3) { print("Scan row"); }\n// }\n',
    validation: {
      consoleLines: 9,
      consoleIncludes: ['Scan row'],
      requireKeywords: ['repeat'],
      explanationKeywords: ['nested', 'loop', 'grid']
    }
  },
  {
    concept: 'power_up_gen',
    title: 'Power-up generator',
    kind: 'code',
    instructions:
      'Write getPowerUp() that returns "Shield". Write getAttack() that returns "Fireball". Print getPowerUp() + " + " + getAttack() to show a combo.',
    starterCode:
      '// function getPowerUp() { return "Shield"; }\n// function getAttack() { return "Fireball"; }\n// print(getPowerUp() + " + " + getAttack());\n',
    validation: {
      consoleExact: ['Shield + Fireball'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['function', 'return', 'compose']
    }
  },
  {
    concept: 'utility_clamp',
    title: 'Clamp helper',
    kind: 'code',
    instructions:
      'Clamp keeps a number between min and max. Write clamp(value, min, max) that returns min if value is below min, max if value is above max, otherwise value. Test clamp(150, 0, 100).',
    starterCode:
      '// function clamp(value, min, max) {\n//   if (value < min) { return min; }\n//   if (value > max) { return max; }\n//   return value;\n// }\n// print(clamp(150, 0, 100));\n',
    validation: {
      consoleExact: ['100'],
      requireKeywords: ['function', 'return', 'if'],
      explanationKeywords: ['clamp', 'limit', 'boundary']
    }
  },
  {
    concept: 'utility_lerp',
    title: 'Lerp concept',
    kind: 'code',
    instructions:
      'Lerp blends two values: half-way between 0 and 100 is 50. Write lerp(a, b) that returns (a + b) / 2 and print lerp(0, 100). This is how smooth animation works.',
    starterCode:
      '// function lerp(a, b) {\n//   return (a + b) / 2;\n// }\n// print(lerp(0, 100));\n',
    validation: {
      consoleExact: ['50'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['lerp', 'interpolate', 'blend']
    }
  },
  {
    concept: 'composition',
    title: 'Attack + defense combo',
    kind: 'code',
    instructions:
      'Write attack() that prints "Swing!" and defend() that prints "Block!". Call attack() then defend() to make a combo move. Functions compose like building blocks.',
    starterCode:
      '// function attack() { print("Swing!"); }\n// function defend() { print("Block!"); }\n// attack();\n// defend();\n',
    validation: {
      consoleExact: ['Swing!', 'Block!'],
      requireKeywords: ['function'],
      explanationKeywords: ['compose', 'function', 'sequence']
    }
  },
  {
    concept: 'code_reuse',
    title: 'Shared enemy logic',
    kind: 'code',
    instructions:
      'Write spawnEnemy(name, health) that prints name + " appeared with " + health + " HP". Call it twice: once for ("Goblin", 30) and once for ("Troll", 80). One function, two enemies.',
    starterCode:
      '// function spawnEnemy(name, health) {\n//   print(name + " appeared with " + health + " HP");\n// }\n// spawnEnemy("Goblin", 30);\n// spawnEnemy("Troll", 80);\n',
    validation: {
      consoleExact: ['Goblin appeared with 30 HP', 'Troll appeared with 80 HP'],
      requireKeywords: ['function'],
      explanationKeywords: ['reuse', 'function', 'parameter']
    }
  },
  {
    concept: 'dry',
    title: 'DRY in games',
    kind: 'code',
    instructions:
      'DRY means Do Not Repeat Yourself. Instead of printing "Coin!" five times, write coin() and call it five times. Your code stays short and changes only happen in one place.',
    starterCode:
      '// function coin() { print("Coin!"); }\n// coin();\n// coin();\n// coin();\n// coin();\n// coin();\n',
    validation: {
      consoleLines: 5,
      consoleIncludes: ['Coin!'],
      requireKeywords: ['function'],
      explanationKeywords: ['DRY', 'reuse', 'function']
    }
  },
  {
    concept: 'array_index',
    title: 'Pick your character',
    kind: 'code',
    instructions:
      'Characters = ["Warrior", "Mage", "Rogue"]. Print "I chose " + get(characters, 1) to select the Mage (position 1). Array indexing lets you pick from a list.',
    starterCode:
      'let characters = ["Warrior", "Mage", "Rogue"];\n// print("I chose " + get(characters, 1));\n',
    validation: {
      consoleExact: ['I chose Mage'],
      explanationKeywords: ['index', 'array', 'position']
    }
  },
  {
    concept: 'pop',
    title: 'Pop from inventory',
    kind: 'code',
    instructions:
      'In MasterScript you can use pop() to remove the last item. Start with ["Sword", "Shield", "Potion"], pop an item off, then print count(inventory) to show it is now 2.',
    starterCode:
      'let inventory = ["Sword", "Shield", "Potion"];\n// pop(inventory);\n// print(count(inventory));\n',
    validation: {
      consoleExact: ['2'],
      requireKeywords: ['pop'],
      explanationKeywords: ['pop', 'remove', 'array']
    }
  },
  {
    concept: 'count_scoring',
    title: 'Tally the score',
    kind: 'code',
    instructions:
      'Score each hit in an array of results. Create hits = [10, 20, 5]. Loop through and add each to total. Total should be 35. Print total at the end.',
    starterCode:
      'let hits = [10, 20, 5];\nlet total = 0;\n// repeat (count(hits)) {\n//   total = total + get(hits, 0);\n//   // hint: you can shift items or use an index\n// }\n// print(total);\n',
    validation: {
      consoleExact: ['35'],
      requireKeywords: ['repeat'],
      explanationKeywords: ['sum', 'array', 'score']
    }
  },
  {
    concept: 'get_access',
    title: 'Access game objects',
    kind: 'code',
    instructions:
      'tiles = ["Grass", "Water", "Stone", "Lava"]. Print the first tile, then the last tile. Use get() with the right positions.',
    starterCode:
      'let tiles = ["Grass", "Water", "Stone", "Lava"];\n// print(get(tiles, 0));\n// print(get(tiles, 3));\n',
    validation: {
      consoleExact: ['Grass', 'Lava'],
      explanationKeywords: ['get', 'first', 'last']
    }
  },

  // ─── Applied (51–90): Game-specific systems ───

  {
    concept: 'enemy_spawn',
    title: 'Enemy spawn system',
    kind: 'code',
    instructions:
      'Write spawn(name, x, y) that prints name + " at (" + x + "," + y + ")". Call spawn("Slime", 5, 10) to place an enemy on the map.',
    starterCode:
      '// function spawn(name, x, y) {\n//   print(name + " at (" + x + "," + y + ")");\n// }\n// spawn("Slime", 5, 10);\n',
    validation: {
      consoleExact: ['Slime at (5,10)'],
      requireKeywords: ['function'],
      explanationKeywords: ['spawn', 'position', 'coordinate']
    }
  },
  {
    concept: 'health_bar',
    title: 'Health bar display',
    kind: 'code',
    instructions:
      'Write healthBar(current, max) that prints "HP: " + current + "/" + max. Call it with (75, 100) to show "HP: 75/100". This is how games show health on screen.',
    starterCode:
      '// function healthBar(current, max) {\n//   print("HP: " + current + "/" + max);\n// }\n// healthBar(75, 100);\n',
    validation: {
      consoleExact: ['HP: 75/100'],
      requireKeywords: ['function'],
      explanationKeywords: ['health', 'bar', 'display']
    }
  },
  {
    concept: 'inventory_manager',
    title: 'Inventory manager',
    kind: 'code',
    instructions:
      'Write addItem(inv, item) that pushes an item onto the array. Create inv = ["Sword"], add "Shield" and "Potion", then print count(inv) to show all 3 items.',
    starterCode:
      'let inv = ["Sword"];\n// function addItem(arr, item) { push(arr, item); }\n// addItem(inv, "Shield");\n// addItem(inv, "Potion");\n// print(count(inv));\n',
    validation: {
      consoleExact: ['3'],
      requireKeywords: ['function', 'push'],
      explanationKeywords: ['inventory', 'push', 'manager']
    }
  },
  {
    concept: 'level_loader',
    title: 'Level loader',
    kind: 'code',
    instructions:
      'Write loadLevel(num) that prints "Loading level " + num + "...". Call loadLevel(1), loadLevel(2), loadLevel(3) to simulate loading three levels.',
    starterCode:
      '// function loadLevel(num) {\n//   print("Loading level " + num + "...");\n// }\n// loadLevel(1);\n// loadLevel(2);\n// loadLevel(3);\n',
    validation: {
      consoleExact: ['Loading level 1...', 'Loading level 2...', 'Loading level 3...'],
      requireKeywords: ['function'],
      explanationKeywords: ['function', 'parameter', 'level']
    }
  },
  {
    concept: 'power_up_system',
    title: 'Power-up system',
    kind: 'code',
    instructions:
      'Write applyPowerUp(type, duration) that prints type + " active for " + duration + " turns". Call it with ("Speed Boost", 5). Power-ups are temporary buffs.',
    starterCode:
      '// function applyPowerUp(type, duration) {\n//   print(type + " active for " + duration + " turns");\n// }\n// applyPowerUp("Speed Boost", 5);\n',
    validation: {
      consoleExact: ['Speed Boost active for 5 turns'],
      requireKeywords: ['function'],
      explanationKeywords: ['power-up', 'buff', 'temporary']
    }
  },
  {
    concept: 'damage_calc',
    title: 'Damage calculator v2',
    kind: 'code',
    instructions:
      'Write calcDamage(attack, defense, multiplier) that returns (attack - defense) * multiplier. Call it with (25, 10, 2) and print the result. Real damage formulas use multipliers for crits and combos.',
    starterCode:
      '// function calcDamage(attack, defense, multiplier) {\n//   return (attack - defense) * multiplier;\n// }\n// print(calcDamage(25, 10, 2));\n',
    validation: {
      consoleExact: ['30'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['formula', 'multiplier', 'damage']
    }
  },
  {
    concept: 'collision_concept',
    title: 'Collision checker',
    kind: 'code',
    instructions:
      'Write checkCollision(x1, y1, x2, y2) that returns true if both coordinates match, false otherwise. Call checkCollision(5, 5, 5, 5) and print the result.',
    starterCode:
      '// function checkCollision(x1, y1, x2, y2) {\n//   if (x1 == x2) {\n//     if (y1 == y2) {\n//       return true;\n//     }\n//   }\n//   return false;\n// }\n// print(checkCollision(5, 5, 5, 5));\n',
    validation: {
      consoleExact: ['true'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['collision', 'boolean', 'compare']
    }
  },
  {
    concept: 'score_multiplier',
    title: 'Score multiplier',
    kind: 'code',
    instructions:
      'Write getMultiplier(level) that returns level * 2. Calculate score = 100 * getMultiplier(3) and print it. Higher levels mean bigger multipliers.',
    starterCode:
      '// function getMultiplier(level) { return level * 2; }\n// let score = 100 * getMultiplier(3);\n// print(score);\n',
    validation: {
      consoleExact: ['600'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['multiplier', 'score', 'scaling']
    }
  },
  {
    concept: 'combo_system',
    title: 'Combo system',
    kind: 'code',
    instructions:
      'Write comboDamage(base, hits) that returns base * hits + (hits * 5). Call comboDamage(10, 3) and print it. Combos reward chaining attacks.',
    starterCode:
      '// function comboDamage(base, hits) {\n//   return base * hits + (hits * 5);\n// }\n// print(comboDamage(10, 3));\n',
    validation: {
      consoleExact: ['45'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['combo', 'chain', 'bonus']
    }
  },
  {
    concept: 'wave_spawner',
    title: 'Wave spawner',
    kind: 'code',
    instructions:
      'Write spawnWave(count) that loops count times and prints "Wave incoming!" each time. Call spawnWave(4) to spawn 4 waves.',
    starterCode:
      '// function spawnWave(count) {\n//   repeat (count) { print("Wave incoming!"); }\n// }\n// spawnWave(4);\n',
    validation: {
      consoleLines: 4,
      consoleIncludes: ['Wave incoming!'],
      requireKeywords: ['function', 'repeat'],
      explanationKeywords: ['wave', 'spawn', 'loop']
    }
  },
  {
    concept: 'character_stats',
    title: 'Character stat sheet',
    kind: 'code',
    instructions:
      'Write printStats(name, hp, atk, def) that prints name + " | HP:" + hp + " ATK:" + atk + " DEF:" + def. Call it for "Knight" with 100, 20, 15.',
    starterCode:
      '// function printStats(name, hp, atk, def) {\n//   print(name + " | HP:" + hp + " ATK:" + atk + " DEF:" + def);\n// }\n// printStats("Knight", 100, 20, 15);\n',
    validation: {
      consoleExact: ['Knight | HP:100 ATK:20 DEF:15'],
      requireKeywords: ['function'],
      explanationKeywords: ['stats', 'parameter', 'display']
    }
  },
  {
    concept: 'equipment_system',
    title: 'Equipment system',
    kind: 'code',
    instructions:
      'Write equip(slot, item) that prints "Equipped " + item + " in " + slot + " slot". Call equip("weapon", "Fire Sword") and equip("armor", "Plate Mail").',
    starterCode:
      '// function equip(slot, item) {\n//   print("Equipped " + item + " in " + slot + " slot");\n// }\n// equip("weapon", "Fire Sword");\n// equip("armor", "Plate Mail");\n',
    validation: {
      consoleExact: ['Equipped Fire Sword in weapon slot', 'Equipped Plate Mail in armor slot'],
      requireKeywords: ['function'],
      explanationKeywords: ['equipment', 'slot', 'item']
    }
  },
  {
    concept: 'quest_tracker',
    title: 'Quest tracker',
    kind: 'code',
    instructions:
      'Write trackQuest(name, progress) that prints "Quest: " + name + " (" + progress + "%)". Call trackQuest("Dragon Slayer", 65).',
    starterCode:
      '// function trackQuest(name, progress) {\n//   print("Quest: " + name + " (" + progress + "%)");\n// }\n// trackQuest("Dragon Slayer", 65);\n',
    validation: {
      consoleExact: ['Quest: Dragon Slayer (65%)'],
      requireKeywords: ['function'],
      explanationKeywords: ['quest', 'progress', 'tracker']
    }
  },
  {
    concept: 'dialogue_tree',
    title: 'Dialogue tree',
    kind: 'code',
    instructions:
      'Write talk(npc) that prints different lines for different NPCs. If npc is "Guard", print "Halt, traveler!". If npc is "Merchant", print "Goods for sale!" Call talk("Guard").',
    starterCode:
      '// function talk(npc) {\n//   if (npc == "Guard") { print("Halt, traveler!"); }\n//   if (npc == "Merchant") { print("Goods for sale!"); }\n// }\n// talk("Guard");\n',
    validation: {
      consoleExact: ['Halt, traveler!'],
      requireKeywords: ['function', 'if'],
      explanationKeywords: ['dialogue', 'branch', 'npc']
    }
  },
  {
    concept: 'shop_system',
    title: 'Shop system',
    kind: 'code',
    instructions:
      'Write buy(item, price) that prints "Bought " + item + " for " + price + " gold". Start with gold = 100, call buy("Health Potion", 25), then print remaining gold (75).',
    starterCode:
      'let gold = 100;\n// function buy(item, price) {\n//   print("Bought " + item + " for " + price + " gold");\n// }\n// buy("Health Potion", 25);\n// gold = gold - 25;\n// print(gold);\n',
    validation: {
      consoleExact: ['Bought Health Potion for 25 gold', '75'],
      requireKeywords: ['function'],
      explanationKeywords: ['shop', 'buy', 'currency']
    }
  },
  {
    concept: 'crafting',
    title: 'Crafting recipe',
    kind: 'code',
    instructions:
      'Write craft(item1, item2) that prints "Crafted " + item1 + " + " + item2. Call craft("Iron", "Oak Wood") to make a "Steel Blade". Players combine materials to make new gear.',
    starterCode:
      '// function craft(item1, item2) {\n//   print("Crafted " + item1 + " + " + item2);\n// }\n// craft("Iron", "Oak Wood");\n',
    validation: {
      consoleExact: ['Crafted Iron + Oak Wood'],
      requireKeywords: ['function'],
      explanationKeywords: ['crafting', 'combine', 'recipe']
    }
  },
  {
    concept: 'loot_table',
    title: 'Loot table',
    kind: 'code',
    instructions:
      'Write getLoot(dropRate) that returns "Rare Drop" if dropRate > 80, "Common" otherwise. Call getLoot(90) and print it. Loot tables make rewards exciting.',
    starterCode:
      '// function getLoot(dropRate) {\n//   if (dropRate > 80) { return "Rare Drop"; }\n//   return "Common";\n// }\n// print(getLoot(90));\n',
    validation: {
      consoleExact: ['Rare Drop'],
      requireKeywords: ['function', 'return', 'if'],
      explanationKeywords: ['loot', 'random', 'drop']
    }
  },
  {
    concept: 'random_encounter',
    title: 'Random encounter',
    kind: 'code',
    instructions:
      'Write encounter() that returns "Goblin" if roll is greater than 50, "Slime" otherwise. Set roll to 75 and print encounter(). Randomness keeps gameplay fresh.',
    starterCode:
      'let roll = 75;\n// function encounter() {\n//   if (roll > 50) { return "Goblin"; }\n//   return "Slime";\n// }\n// print(encounter());\n',
    validation: {
      consoleExact: ['Goblin'],
      requireKeywords: ['function', 'return', 'if'],
      explanationKeywords: ['random', 'encounter', 'chance']
    }
  },
  {
    concept: 'xp_leveling',
    title: 'XP and leveling',
    kind: 'code',
    instructions:
      'Write checkLevel(xp) that prints "Level Up!" if xp is >= 100, otherwise "Keep training." Set xp to 120 and call checkLevel(xp).',
    starterCode:
      'let xp = 120;\n// function checkLevel(xp) {\n//   if (xp >= 100) { print("Level Up!"); } else { print("Keep training."); }\n// }\n// checkLevel(xp);\n',
    validation: {
      consoleExact: ['Level Up!'],
      requireKeywords: ['function', 'if'],
      explanationKeywords: ['experience', 'level', 'progress']
    }
  },
  {
    concept: 'weather_system',
    title: 'Weather system',
    kind: 'code',
    instructions:
      'Write getWeather(season) that prints the season + " weather active". Call getWeather("Winter"). Different seasons change gameplay.',
    starterCode:
      '// function getWeather(season) {\n//   print(season + " weather active");\n// }\n// getWeather("Winter");\n',
    validation: {
      consoleExact: ['Winter weather active'],
      requireKeywords: ['function'],
      explanationKeywords: ['weather', 'season', 'dynamic']
    }
  },
  {
    concept: 'day_night',
    title: 'Day/night cycle',
    kind: 'code',
    instructions:
      'Write getTimeOfDay(hour) that prints "Night" if hour < 6 or hour > 20, otherwise "Day". Call getTimeOfDay(22). Day/night changes what enemies appear.',
    starterCode:
      '// function getTimeOfDay(hour) {\n//   if (hour < 6) { print("Night"); }\n//   else if (hour > 20) { print("Night"); }\n//   else { print("Day"); }\n// }\n// getTimeOfDay(22);\n',
    validation: {
      consoleExact: ['Night'],
      requireKeywords: ['function', 'if', 'else'],
      explanationKeywords: ['cycle', 'time', 'state']
    }
  },
  {
    concept: 'achievement',
    title: 'Achievement tracker',
    kind: 'code',
    instructions:
      'Write unlock(name) that prints "Achievement Unlocked: " + name + "!". Call unlock("First Blood"). Achievements reward players for milestones.',
    starterCode:
      '// function unlock(name) {\n//   print("Achievement Unlocked: " + name + "!");\n// }\n// unlock("First Blood");\n',
    validation: {
      consoleExact: ['Achievement Unlocked: First Blood!'],
      requireKeywords: ['function'],
      explanationKeywords: ['achievement', 'unlock', 'reward']
    }
  },
  {
    concept: 'minimap_data',
    title: 'Minimap data',
    kind: 'code',
    instructions:
      'A minimap is a small version of the world. Create map = ["...", ".#.", "..."] and print get(map, 1) to show the middle row. Arrays of strings make simple maps.',
    starterCode: 'let map = ["...", ".#.", "..."];\n// print(get(map, 1));\n',
    validation: {
      consoleExact: ['.#.'],
      explanationKeywords: ['minimap', 'array', 'grid']
    }
  },
  {
    concept: 'pathfinding',
    title: 'Simple grid path',
    kind: 'code',
    instructions:
      'Write canMove(x, y) that returns true if x and y are both less than 5 (inside the map), false otherwise. Call canMove(3, 4) and print it.',
    starterCode:
      '// function canMove(x, y) {\n//   if (x < 5) {\n//     if (y < 5) {\n//       return true;\n//     }\n//   }\n//   return false;\n// }\n// print(canMove(3, 4));\n',
    validation: {
      consoleExact: ['true'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['pathfinding', 'grid', 'boundary']
    }
  },
  {
    concept: 'particle_logic',
    title: 'Particle effect logic',
    kind: 'code',
    instructions:
      'Write emit(x, y) that prints "Particle at " + x + "," + y. Emit 3 particles at increasing positions: emit(10, 10), emit(12, 11), emit(14, 12).',
    starterCode:
      '// function emit(x, y) {\n//   print("Particle at " + x + "," + y);\n// }\n// emit(10, 10);\n// emit(12, 11);\n// emit(14, 12);\n',
    validation: {
      consoleExact: ['Particle at 10,10', 'Particle at 12,11', 'Particle at 14,12'],
      requireKeywords: ['function'],
      explanationKeywords: ['particle', 'effect', 'spawn']
    }
  },
  {
    concept: 'screen_shake',
    title: 'Screen shake timer',
    kind: 'code',
    instructions:
      'Write shake(duration) that loops duration times printing "Shake!" each time, then prints "Done". Call shake(3). Screen shake gives impact to big hits.',
    starterCode:
      '// function shake(duration) {\n//   repeat (duration) { print("Shake!"); }\n//   print("Done");\n// }\n// shake(3);\n',
    validation: {
      consoleExact: ['Shake!', 'Shake!', 'Shake!', 'Done'],
      requireKeywords: ['function', 'repeat'],
      explanationKeywords: ['shake', 'timer', 'effect']
    }
  },
  {
    concept: 'camera_follow',
    title: 'Camera follow logic',
    kind: 'code',
    instructions:
      'Write followCamera(playerX, targetX) that prints "Camera at " + (playerX + targetX) / 2 + " (centered)". Call followCamera(10, 30). The camera tracks between player and target.',
    starterCode:
      '// function followCamera(playerX, targetX) {\n//   let mid = (playerX + targetX) / 2;\n//   print("Camera at " + mid + " (centered)");\n// }\n// followCamera(10, 30);\n',
    validation: {
      consoleExact: ['Camera at 20 (centered)'],
      requireKeywords: ['function'],
      explanationKeywords: ['camera', 'follow', 'position']
    }
  },
  {
    concept: 'boss_pattern',
    title: 'Boss pattern generator',
    kind: 'code',
    instructions:
      'Write bossAttack(turn) that prints the attack for each turn. Turn 1: "Sweep", turn 2: "Slam", turn 3: "Laser". Use if/else if/else to pick the move for turn = 2.',
    starterCode:
      '// function bossAttack(turn) {\n//   if (turn == 1) { print("Sweep"); }\n//   else if (turn == 2) { print("Slam"); }\n//   else { print("Laser"); }\n// }\n// bossAttack(2);\n',
    validation: {
      consoleExact: ['Slam'],
      requireKeywords: ['function', 'if', 'else'],
      explanationKeywords: ['boss', 'pattern', 'turn']
    }
  },
  {
    concept: 'enemy_ai',
    title: 'Enemy AI states',
    kind: 'code',
    instructions:
      'Write ai(state) that prints the enemy action for each state: "Patrol" if state is "idle", "Chase" if state is "alert", "Attack" if state is "aggressive". Call ai("alert").',
    starterCode:
      '// function ai(state) {\n//   if (state == "idle") { print("Patrol"); }\n//   else if (state == "alert") { print("Chase"); }\n//   else { print("Attack"); }\n// }\n// ai("alert");\n',
    validation: {
      consoleExact: ['Chase'],
      requireKeywords: ['function', 'if', 'else'],
      explanationKeywords: ['AI', 'state', 'behavior']
    }
  },
  {
    concept: 'save_load',
    title: 'Save/load concept',
    kind: 'code',
    instructions:
      'Write saveGame(slot, data) that prints "Saving to slot " + slot + ": " + data. Call saveGame(1, "Level3"). Save systems let players resume where they left off.',
    starterCode:
      '// function saveGame(slot, data) {\n//   print("Saving to slot " + slot + ": " + data);\n// }\n// saveGame(1, "Level3");\n',
    validation: {
      consoleExact: ['Saving to slot 1: Level3'],
      requireKeywords: ['function'],
      explanationKeywords: ['save', 'load', 'persistence']
    }
  },

  // ─── Block stages mixed in (Applied tier) ───

  {
    concept: 'draw_enemy',
    title: 'Draw a slime enemy',
    kind: 'block',
    instructions:
      'Enemies need a shape! Use blocks to draw a small square for a slime: forward, right, forward, right, forward, right, forward, right.',
    palette: ['forward', 'right', 'penColor', 'clear'],
    validation: {
      requireBlockTypes: ['forward', 'right'],
      explanationKeywords: ['draw', 'square', 'enemy']
    }
  },
  {
    concept: 'platform_pattern',
    title: 'Platform pattern',
    kind: 'block',
    instructions:
      'Draw a repeating platform shape using a repeat block: forward, back, then move. This is how platformers tile the ground.',
    palette: ['repeat', 'forward', 'back', 'right', 'penColor', 'clear'],
    validation: {
      requireBlockTypes: ['repeat', 'forward', 'back'],
      explanationKeywords: ['platform', 'pattern', 'tile']
    }
  },
  {
    concept: 'maze_border',
    title: 'Maze walls',
    kind: 'block',
    instructions:
      'Build a maze wall with blocks: go forward a long stretch, turn right, and repeat to make a rectangular room border.',
    palette: ['repeat', 'forward', 'right', 'penColor', 'clear'],
    validation: {
      requireBlockTypes: ['repeat', 'forward', 'right'],
      explanationKeywords: ['maze', 'wall', 'border']
    }
  },

  // ─── Advanced (91–130): Game patterns, networking, design ───

  {
    concept: 'state_machine',
    title: 'State machine: menu/playing/paused',
    kind: 'code',
    instructions:
      'Games have states like a light switch with more options. Write stateGame(state) that prints "Show menu" if state is "menu", "Play!" if state is "playing", "Paused" if state is "paused". Call stateGame("playing").',
    starterCode:
      '// function stateGame(state) {\n//   if (state == "menu") { print("Show menu"); }\n//   else if (state == "playing") { print("Play!"); }\n//   else { print("Paused"); }\n// }\n// stateGame("playing");\n',
    validation: {
      consoleExact: ['Play!'],
      requireKeywords: ['function', 'if', 'else'],
      explanationKeywords: ['state', 'machine', 'transition']
    }
  },
  {
    concept: 'event_system',
    title: 'Event system',
    kind: 'code',
    instructions:
      'Write onEvent(name) that prints "Event fired: " + name. Call onEvent("enemyDied") and onEvent("levelComplete"). Events let game parts talk to each other without knowing about each other.',
    starterCode:
      '// function onEvent(name) {\n//   print("Event fired: " + name);\n// }\n// onEvent("enemyDied");\n// onEvent("levelComplete");\n',
    validation: {
      consoleExact: ['Event fired: enemyDied', 'Event fired: levelComplete'],
      requireKeywords: ['function'],
      explanationKeywords: ['event', 'signal', 'observer']
    }
  },
  {
    concept: 'component_pattern',
    title: 'Component pattern',
    kind: 'code',
    instructions:
      'Write getComponent(entity, comp) that prints entity + " has " + comp. Call getComponent("Player", "Health"). Components let you build entities from parts.',
    starterCode:
      '// function getComponent(entity, comp) {\n//   print(entity + " has " + comp);\n// }\n// getComponent("Player", "Health");\n',
    validation: {
      consoleExact: ['Player has Health'],
      requireKeywords: ['function'],
      explanationKeywords: ['component', 'entity', 'modular']
    }
  },
  {
    concept: 'object_pool',
    title: 'Object pooling concept',
    kind: 'code',
    instructions:
      'Write getFromPool(type) that prints "Spawning " + type + " from pool". Call getFromPool("Bullet"). Object pooling reuses objects instead of creating new ones.',
    starterCode:
      '// function getFromPool(type) {\n//   print("Spawning " + type + " from pool");\n// }\n// getFromPool("Bullet");\n',
    validation: {
      consoleExact: ['Spawning Bullet from pool'],
      requireKeywords: ['function'],
      explanationKeywords: ['pool', 'reuse', 'performance']
    }
  },
  {
    concept: 'tweening',
    title: 'Tweening and easing',
    kind: 'code',
    instructions:
      'Write ease(t) that returns (t * t) / 100. This squares the value over 0-100 to make things ease in. Print ease(50) to see a value partway through the curve.',
    starterCode: '// function ease(t) {\n//   return (t * t) / 100;\n// }\n// print(ease(50));\n',
    validation: {
      consoleExact: ['25'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['tween', 'ease', 'animation']
    }
  },
  {
    concept: 'procedural_gen',
    title: 'Procedural generation',
    kind: 'code',
    instructions:
      'Write generateRow(seed) that returns "Row" + seed. Generate rows 1 through 5 using a loop and print each. Procedural gen creates content from code, not hand-crafted.',
    starterCode:
      '// function generateRow(seed) {\n//   return "Row" + seed;\n// }\n// repeat (5) {\n//   // generate and print each row\n// }\n',
    validation: {
      consoleExact: ['Row1', 'Row2', 'Row3', 'Row4', 'Row5'],
      requireKeywords: ['function', 'repeat'],
      explanationKeywords: ['procedural', 'generate', 'seed']
    }
  },
  {
    concept: 'noise_concept',
    title: 'Noise for terrain',
    kind: 'code',
    instructions:
      'Noise creates smooth randomness. Write noiseAt(x) that returns (x * 7 + 3) % 10. Print noiseAt(1), noiseAt(2), noiseAt(3). This pseudo-randomness makes terrain feel natural.',
    starterCode:
      '// function noiseAt(x) {\n//   return (x * 7 + 3) % 10;\n// }\n// print(noiseAt(1));\n// print(noiseAt(2));\n// print(noiseAt(3));\n',
    validation: {
      consoleExact: ['0', '7', '4'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['noise', 'random', 'terrain']
    }
  },
  {
    concept: 'bsp_concept',
    title: 'BSP dungeon concept',
    kind: 'code',
    instructions:
      'BSP splits a space in halves recursively. Write splitArea(size) that prints "Split into " + (size / 2) + " halves". Call splitArea(16). This is how roguelike dungeons are built.',
    starterCode:
      '// function splitArea(size) {\n//   print("Split into " + (size / 2) + " halves");\n// }\n// splitArea(16);\n',
    validation: {
      consoleExact: ['Split into 8 halves'],
      requireKeywords: ['function'],
      explanationKeywords: ['BSP', 'dungeon', 'split']
    }
  },
  {
    concept: 'astar_overview',
    title: 'A* pathfinding overview',
    kind: 'reference',
    instructions:
      'Watch this explanation of A* pathfinding — the algorithm games use to find the shortest route. Your goal: explain in your own words why A* is faster than checking every possible path.',
    reference: {
      kind: 'video',
      title: 'A* Pathfinding — Red Blob Games',
      url: 'https://www.redblobgames.com/pathfinding/a-star/introduction.html',
      whyKey: 'reference.game.why'
    },
    validation: {
      explanationKeywords: ['path', 'shortest', 'heuristic']
    }
  },
  {
    concept: 'physics_gravity',
    title: 'Gravity and velocity',
    kind: 'code',
    instructions:
      'Write applyGravity(v) that returns v + 9.8 (gravity pulls things down). Call applyGravity(0) to see an object start falling. Games fake physics with simple math.',
    starterCode:
      '// function applyGravity(v) {\n//   return v + 9;\n// }\n// print(applyGravity(0));\n',
    validation: {
      consoleExact: ['9'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['gravity', 'velocity', 'physics']
    }
  },
  {
    concept: 'velocity_bounce',
    title: 'Bounce off walls',
    kind: 'code',
    instructions:
      'Write bounce(v) that returns -v. A positive velocity becomes negative (bouncing back). Print bounce(5) to see -5. This reverses direction on wall hit.',
    starterCode: '// function bounce(v) {\n//   return -v;\n// }\n// print(bounce(5));\n',
    validation: {
      consoleExact: ['-5'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['bounce', 'velocity', 'reverse']
    }
  },
  {
    concept: 'multiplayer_basics',
    title: 'Multiplayer basics',
    kind: 'reference',
    instructions:
      'Read this introduction to how multiplayer games connect players over a network. Your goal: explain the difference between hosting and joining a game.',
    reference: {
      kind: 'docs',
      title: 'Gabriel Gambetta: Fast-Paced Multiplayer',
      url: 'https://www.gabrielgambetta.com/client-server-game-architecture.html',
      whyKey: 'reference.game.why'
    },
    validation: {
      explanationKeywords: ['host', 'client', 'network']
    }
  },
  {
    concept: 'netcode_concept',
    title: 'Netcode concepts',
    kind: 'reference',
    instructions:
      'Watch this explainer on netcode — the code that makes online games feel fair despite lag. Your goal: explain what "prediction" means in netcode.',
    reference: {
      kind: 'video',
      title: 'GDC: Understanding Netcode',
      url: 'https://www.youtube.com/results?search_query=gdc+netcode+explainer',
      whyKey: 'reference.game.why'
    },
    validation: {
      explanationKeywords: ['prediction', 'lag', 'netcode']
    }
  },
  {
    concept: 'game_networking',
    title: 'Game networking models',
    kind: 'code',
    instructions:
      'Write netModel(type) that prints "P2P" if type is "peer", "Authoritative" if type is "server", "Hybrid" if type is "mix". Call netModel("server").',
    starterCode:
      '// function netModel(type) {\n//   if (type == "peer") { print("P2P"); }\n//   else if (type == "server") { print("Authoritative"); }\n//   else { print("Hybrid"); }\n// }\n// netModel("server");\n',
    validation: {
      consoleExact: ['Authoritative'],
      requireKeywords: ['function', 'if', 'else'],
      explanationKeywords: ['networking', 'model', 'server']
    }
  },
  {
    concept: 'lag_compensation',
    title: 'Lag compensation',
    kind: 'code',
    instructions:
      'Write lagCompensate(delay) that prints "Adjusting " + delay + "ms behind". Call lagCompensate(50). Lag compensation keeps things fair for players with slow internet.',
    starterCode:
      '// function lagCompensate(delay) {\n//   print("Adjusting " + delay + "ms behind");\n// }\n// lagCompensate(50);\n',
    validation: {
      consoleExact: ['Adjusting 50ms behind'],
      requireKeywords: ['function'],
      explanationKeywords: ['lag', 'compensation', 'delay']
    }
  },
  {
    concept: 'interpolation',
    title: 'Interpolation in games',
    kind: 'code',
    instructions:
      'Write interpolate(from, to, t) that returns from + (to - from) * t / 100. Call interpolate(0, 100, 50) and print. Interpolation fills in frames between two known positions.',
    starterCode:
      '// function interpolate(from, to, t) {\n//   return from + (to - from) * t / 100;\n// }\n// print(interpolate(0, 100, 50));\n',
    validation: {
      consoleExact: ['50'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['interpolation', 'smooth', 'frame']
    }
  },
  {
    concept: 'tick_rate',
    title: 'Tick rate',
    kind: 'code',
    instructions:
      'Write ticksPerSecond(hz) that prints "Game updates " + hz + " times per second". Call ticksPerSecond(20). Higher tick rates feel more responsive but cost more CPU.',
    starterCode:
      '// function ticksPerSecond(hz) {\n//   print("Game updates " + hz + " times per second");\n// }\n// ticksPerSecond(20);\n',
    validation: {
      consoleExact: ['Game updates 20 times per second'],
      requireKeywords: ['function'],
      explanationKeywords: ['tick', 'rate', 'update']
    }
  },
  {
    concept: 'authority_model',
    title: 'Authority model',
    kind: 'code',
    instructions:
      'Write getAuthority(role) that prints role + " has authority". Call getAuthority("Server"). In multiplayer, the server decides what is real — clients just display it.',
    starterCode:
      '// function getAuthority(role) {\n//   print(role + " has authority");\n// }\n// getAuthority("Server");\n',
    validation: {
      consoleExact: ['Server has authority'],
      requireKeywords: ['function'],
      explanationKeywords: ['authority', 'server', 'trust']
    }
  },
  {
    concept: 'replay_system',
    title: 'Replay system concept',
    kind: 'code',
    instructions:
      'Write recordReplay(action) that prints "Recording: " + action. Call recordReplay("jump") and recordReplay("shoot"). Replays store inputs, not video — they are tiny files.',
    starterCode:
      '// function recordReplay(action) {\n//   print("Recording: " + action);\n// }\n// recordReplay("jump");\n// recordReplay("shoot");\n',
    validation: {
      consoleExact: ['Recording: jump', 'Recording: shoot'],
      requireKeywords: ['function'],
      explanationKeywords: ['replay', 'record', 'input']
    }
  },
  {
    concept: 'modding',
    title: 'Modding support',
    kind: 'reference',
    instructions:
      'Read this overview of how modding works in games. Your goal: explain why games like Minecraft and Skyrim became massive because of their modding communities.',
    reference: {
      kind: 'docs',
      title: 'GDC: Modding as a Game Design Philosophy',
      url: 'https://www.gdcvault.com/search.php#&conference_id=&category=free&firstfocus=&keyword=modding',
      whyKey: 'reference.game.why'
    },
    validation: {
      explanationKeywords: ['mod', 'community', 'creative']
    }
  },
  {
    concept: 'localization_games',
    title: 'Localization in games',
    kind: 'code',
    instructions:
      'Write say(key) that prints "Hello" if key is "greeting", "Goodbye" if key is "farewell". Call say("greeting"). Localization lets games speak many languages without rewriting code.',
    starterCode:
      '// function say(key) {\n//   if (key == "greeting") { print("Hello"); }\n//   else if (key == "farewell") { print("Goodbye"); }\n// }\n// say("greeting");\n',
    validation: {
      consoleExact: ['Hello'],
      requireKeywords: ['function', 'if'],
      explanationKeywords: ['localization', 'translate', 'language']
    }
  },
  {
    concept: 'game_balance',
    title: 'Game balance math',
    kind: 'code',
    instructions:
      'Write isBalanced(attack, defense) that returns true if attack equals defense, false otherwise. Call isBalanced(15, 15) and print. Balance means no single strategy dominates.',
    starterCode:
      '// function isBalanced(attack, defense) {\n//   if (attack == defense) { return true; }\n//   return false;\n// }\n// print(isBalanced(15, 15));\n',
    validation: {
      consoleExact: ['true'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['balance', 'fair', 'compare']
    }
  },
  {
    concept: 'difficulty_curve',
    title: 'Difficulty curve',
    kind: 'code',
    instructions:
      'Write enemyHP(level) that returns 20 + level * 10. Print enemyHP(1), enemyHP(5), enemyHP(10). Difficulty curves make early levels easy and later ones hard.',
    starterCode:
      '// function enemyHP(level) {\n//   return 20 + level * 10;\n// }\n// print(enemyHP(1));\n// print(enemyHP(5));\n// print(enemyHP(10));\n',
    validation: {
      consoleExact: ['30', '70', '120'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['difficulty', 'curve', 'scaling']
    }
  },
  {
    concept: 'monetization_ethics',
    title: 'Monetization ethics',
    kind: 'reference',
    instructions:
      'Read this analysis of ethical game monetization. Your goal: explain the difference between a fair cosmetic shop and predatory loot boxes.',
    reference: {
      kind: 'docs',
      title: 'Extra Credits: Ethics of Game Monetization',
      url: 'https://www.youtube.com/watch?v=2Lu205WhUn4',
      whyKey: 'reference.game.why'
    },
    validation: {
      explanationKeywords: ['ethics', 'monetization', 'fair']
    }
  },

  // ─── More block stages for Advanced tier ───

  {
    concept: 'dungeon_room',
    title: 'Dungeon room shape',
    kind: 'block',
    instructions:
      'Draw a dungeon room: a rectangle using repeat with forward and right. Each room starts as a simple box before we add doors.',
    palette: ['repeat', 'forward', 'right', 'penColor', 'clear'],
    validation: {
      requireBlockTypes: ['repeat', 'forward', 'right'],
      explanationKeywords: ['dungeon', 'room', 'rectangle']
    }
  },
  {
    concept: 'path_pattern',
    title: 'Stepping stone path',
    kind: 'block',
    instructions:
      'Draw a zigzag path using blocks: forward, right, forward, left — repeated. This is how games lay winding paths through levels.',
    palette: ['repeat', 'forward', 'right', 'left', 'penColor', 'clear'],
    validation: {
      requireBlockTypes: ['repeat', 'forward', 'right', 'left'],
      explanationKeywords: ['path', 'zigzag', 'pattern']
    }
  },

  // ─── Mastery (131–150): Reference stages with real URLs ───

  {
    concept: 'game_loop_frames',
    title: 'How game loops and frames work',
    kind: 'reference',
    instructions:
      'Watch this GDC Vault talk on how game loops drive every frame of a game. Your goal: explain why 60 frames per second is the standard and what happens when a frame takes too long.',
    reference: {
      kind: 'video',
      title: 'GDC: Game Loop and Frame Rate',
      url: 'https://www.youtube.com/results?search_query=gdc+game+loop+frame+rate',
      whyKey: 'reference.game.why'
    },
    validation: {
      explanationKeywords: ['loop', 'frame', 'update']
    }
  },
  {
    concept: 'sprite_vs_vector',
    title: 'Sprite vs vector graphics',
    kind: 'reference',
    instructions:
      'Read this explainer on the two main ways games draw characters and objects. Your goal: explain the difference between a sprite (pixel image) and a vector (math-drawn) shape, and when you would pick each.',
    reference: {
      kind: 'docs',
      title: 'Game Art: Sprites vs Vectors',
      url: 'https://www.gamedeveloper.com/art/sprites-vs-vectors',
      whyKey: 'reference.game.why'
    },
    validation: {
      explanationKeywords: ['sprite', 'vector', 'pixel']
    }
  },
  {
    concept: 'tile_maps',
    title: 'Tile maps explained',
    kind: 'reference',
    instructions:
      'Read how tile maps work — the grid system that builds classic game worlds like Zelda and Pokemon. Your goal: explain how a small set of tiles can create a huge varied world.',
    reference: {
      kind: 'docs',
      title: 'Tiled Map Editor: Getting Started',
      url: 'https://www.mapeditor.org/docs',
      whyKey: 'reference.game.why'
    },
    validation: {
      explanationKeywords: ['tile', 'grid', 'map']
    }
  },
  {
    concept: 'animation_principles',
    title: 'Animation principles in games',
    kind: 'reference',
    instructions:
      'Watch this overview of the 12 principles of animation applied to games. Your goal: explain why "squash and stretch" and "anticipation" make game characters feel alive.',
    reference: {
      kind: 'video',
      title: '12 Principles of Animation for Games',
      url: 'https://www.youtube.com/results?search_query=12+principles+animation+games',
      whyKey: 'reference.game.why'
    },
    validation: {
      explanationKeywords: ['animation', 'squash', 'anticipation']
    }
  },
  {
    concept: 'physics_engines',
    title: 'Game physics engines',
    kind: 'reference',
    instructions:
      'Read about how physics engines simulate gravity, collisions, and rigid bodies in games. Your goal: explain why games use simplified physics instead of real-world physics.',
    reference: {
      kind: 'docs',
      title: 'How Physics Engines Work',
      url: 'https://www.gamedevelopment.jp/articles.php?article=design_overview',
      whyKey: 'reference.game.why'
    },
    validation: {
      explanationKeywords: ['physics', 'collision', 'simulation']
    }
  },
  {
    concept: 'game_audio',
    title: 'Audio in games',
    kind: 'reference',
    instructions:
      'Watch this GDC talk on how game audio creates atmosphere and feedback. Your goal: explain the difference between music, sound effects, and ambient audio in a game.',
    reference: {
      kind: 'video',
      title: 'GDC: Game Audio Design',
      url: 'https://www.youtube.com/results?search_query=gdc+game+audio+design',
      whyKey: 'reference.game.why'
    },
    validation: {
      explanationKeywords: ['audio', 'music', 'sound']
    }
  },
  {
    concept: 'game_ui_ux',
    title: 'UI/UX in games',
    kind: 'reference',
    instructions:
      'Read this guide to game UI and UX design. Your goal: explain why a game HUD should communicate information at a glance without cluttering the screen.',
    reference: {
      kind: 'docs',
      title: 'Game UI Database: Design Patterns',
      url: 'https://www.gameuidatabase.com',
      whyKey: 'reference.game.why'
    },
    validation: {
      explanationKeywords: ['UI', 'HUD', 'interface']
    }
  },
  {
    concept: 'accessibility_games',
    title: 'Accessibility in games',
    kind: 'reference',
    instructions:
      'Watch this talk on making games accessible to all players. Your goal: explain three specific design choices that make a game playable for someone who is colorblind or cannot use a controller.',
    reference: {
      kind: 'video',
      title: 'GDC: Accessibility in Game Design',
      url: 'https://www.youtube.com/results?search_query=gdc+accessibility+game+design',
      whyKey: 'reference.game.why'
    },
    validation: {
      explanationKeywords: ['accessibility', 'inclusive', 'options']
    }
  },
  {
    concept: 'game_testing',
    title: 'Game testing and QA',
    kind: 'reference',
    instructions:
      'Read this introduction to how games are tested before release. Your goal: explain the difference between functional testing (finding bugs) and playtesting (finding if the game is fun).',
    reference: {
      kind: 'docs',
      title: 'IGDA: Game Testing Fundamentals',
      url: 'https://www.igda.org',
      whyKey: 'reference.game.why'
    },
    validation: {
      explanationKeywords: ['testing', 'QA', 'bug']
    }
  },
  {
    concept: 'playtesting',
    title: 'Playtesting concepts',
    kind: 'reference',
    instructions:
      'Watch this talk on how to run a playtest session for your game. Your goal: explain why watching someone else play your game is more valuable than asking them if they liked it.',
    reference: {
      kind: 'video',
      title: 'GDC: The Art of Playtesting',
      url: 'https://www.youtube.com/results?search_query=gdc+playtesting',
      whyKey: 'reference.game.why'
    },
    validation: {
      explanationKeywords: ['playtest', 'feedback', 'observe']
    }
  },
  {
    concept: 'gdd',
    title: 'Game design documents',
    kind: 'reference',
    instructions:
      'Read this guide to writing a Game Design Document (GDD). Your goal: explain why writing the plan before building the game saves time and prevents confusion.',
    reference: {
      kind: 'docs',
      title: 'How to Write a Game Design Document',
      url: 'https://www.gamedeveloper.com/design/how-to-write-a-game-design-document',
      whyKey: 'reference.game.why'
    },
    validation: {
      explanationKeywords: ['GDD', 'design', 'document']
    }
  },
  {
    concept: 'version_control_games',
    title: 'Version control for games',
    kind: 'reference',
    instructions:
      'Read this article on how game teams use version control to track changes and collaborate. Your goal: explain why version control is even more important for game projects than regular software.',
    reference: {
      kind: 'docs',
      title: 'Perforce: Version Control for Game Dev',
      url: 'https://www.perforce.com/blog/vcs/video-game-developers',
      whyKey: 'reference.game.why'
    },
    validation: {
      explanationKeywords: ['version', 'control', 'collaborate']
    }
  },
  {
    concept: 'game_engines',
    title: 'Game engines overview',
    kind: 'reference',
    instructions:
      'Watch this comparison of Unity, Godot, and other game engines. Your goal: explain what a game engine does for you and why most developers do not build their own from scratch.',
    reference: {
      kind: 'video',
      title: 'Unity vs Godot vs Unreal — explained',
      url: 'https://www.youtube.com/results?search_query=unity+godot+unreal+comparison+beginners',
      whyKey: 'reference.game.why'
    },
    validation: {
      explanationKeywords: ['engine', 'Unity', 'Godot']
    }
  },
  {
    concept: 'shader_basics',
    title: 'Shader basics',
    kind: 'reference',
    instructions:
      'Read this beginner guide to what shaders are and how they color every pixel on screen. Your goal: explain the difference between a vertex shader and a pixel shader in simple terms.',
    reference: {
      kind: 'docs',
      title: 'Shadertoy: Beginner Introduction',
      url: 'https://www.shadertoy.com/view/lsdsRN',
      whyKey: 'reference.game.why'
    },
    validation: {
      explanationKeywords: ['shader', 'pixel', 'render']
    }
  },
  {
    concept: '2d_vs_3d',
    title: '2D vs 3D rendering',
    kind: 'reference',
    instructions:
      'Watch this explainer on how 2D and 3D games are rendered differently. Your goal: explain why a 2D game can still look 3D (isometric, parallax) and when pure 2D is the better choice.',
    reference: {
      kind: 'video',
      title: '2D vs 3D Game Rendering Explained',
      url: 'https://www.youtube.com/results?search_query=2d+3d+rendering+games+explained',
      whyKey: 'reference.game.why'
    },
    validation: {
      explanationKeywords: ['2D', '3D', 'render']
    }
  },
  {
    concept: 'game_monetization',
    title: 'Game monetization models',
    kind: 'reference',
    instructions:
      'Read this overview of how games make money: premium, free-to-play, subscriptions, cosmetics. Your goal: explain which model you think is fairest to players and why.',
    reference: {
      kind: 'docs',
      title: 'Game Monetization Strategies',
      url: 'https://www.gameanalytics.com/blog/monetization-strategies-mobile-games/',
      whyKey: 'reference.game.why'
    },
    validation: {
      explanationKeywords: ['monetization', 'free-to-play', 'premium']
    }
  },
  {
    concept: 'game_communities',
    title: 'Game communities',
    kind: 'reference',
    instructions:
      'Watch this talk on how game communities shape a game long after launch. Your goal: explain how community feedback through forums, Discord, and social media influences game updates.',
    reference: {
      kind: 'video',
      title: 'Building and Managing Game Communities',
      url: 'https://www.youtube.com/results?search_query=game+community+management+gdc',
      whyKey: 'reference.game.why'
    },
    validation: {
      explanationKeywords: ['community', 'feedback', 'social']
    }
  },
  {
    concept: 'game_jams',
    title: 'Game jams',
    kind: 'reference',
    instructions:
      'Read about game jams like Ludum Dare and Global Game Jam. Your goal: explain why making a complete game in 48 hours teaches you more than months of tutorials.',
    reference: {
      kind: 'docs',
      title: 'Ludum Dare: How to Join a Game Jam',
      url: 'https://ldjam.com',
      whyKey: 'reference.game.why'
    },
    validation: {
      explanationKeywords: ['game jam', 'deadline', 'complete']
    }
  },
  {
    concept: 'portfolio',
    title: 'Portfolio building for game dev',
    kind: 'reference',
    instructions:
      'Read this guide on building a game development portfolio. Your goal: explain why showing small, finished projects is more impressive than showing one giant unfinished project.',
    reference: {
      kind: 'docs',
      title: 'Game Dev Portfolio Guide',
      url: 'https://www.gamedeveloper.com/programming/how-to-build-a-game-developer-portfolio',
      whyKey: 'reference.game.why'
    },
    validation: {
      explanationKeywords: ['portfolio', 'showcase', 'projects']
    }
  },

  // ─── Fill remaining slots with more code, block, and reference stages ───
  // These ensure we hit exactly 140 stages total (game-11 through game-150)

  {
    concept: 'healing',
    title: 'Healing potion',
    kind: 'code',
    instructions:
      'Write heal(current, max, amount) that returns current + amount if current + amount is less than max, otherwise returns max. Call heal(80, 100, 30) and print. You cannot heal above max HP.',
    starterCode:
      '// function heal(current, max, amount) {\n//   let newHP = current + amount;\n//   if (newHP > max) { return max; }\n//   return newHP;\n// }\n// print(heal(80, 100, 30));\n',
    validation: {
      consoleExact: ['100'],
      requireKeywords: ['function', 'return', 'if'],
      explanationKeywords: ['heal', 'clamp', 'health']
    }
  },
  {
    concept: 'mana_system',
    title: 'Mana system',
    kind: 'code',
    instructions:
      'Write castSpell(mana, cost) that prints "Cast!" if mana >= cost, otherwise "Not enough mana!". Call castSpell(50, 30). Mana is the energy pool for special abilities.',
    starterCode:
      '// function castSpell(mana, cost) {\n//   if (mana >= cost) { print("Cast!"); }\n//   else { print("Not enough mana!"); }\n// }\n// castSpell(50, 30);\n',
    validation: {
      consoleExact: ['Cast!'],
      requireKeywords: ['function', 'if', 'else'],
      explanationKeywords: ['mana', 'spell', 'cost']
    }
  },
  {
    concept: 'exp_table',
    title: 'Experience table',
    kind: 'code',
    instructions:
      'Write xpForLevel(level) that returns level * level * 100. Print xpForLevel(1), xpForLevel(2), xpForLevel(3). Higher levels need exponentially more XP.',
    starterCode:
      '// function xpForLevel(level) {\n//   return level * level * 100;\n// }\n// print(xpForLevel(1));\n// print(xpForLevel(2));\n// print(xpForLevel(3));\n',
    validation: {
      consoleExact: ['100', '400', '900'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['XP', 'level', 'progression']
    }
  },
  {
    concept: 'cooldown',
    title: 'Ability cooldown',
    kind: 'code',
    instructions:
      'Write isReady(currentCooldown) that returns true if currentCooldown is 0, false otherwise. Print isReady(0) and isReady(5). Cooldowns prevent spamming powerful abilities.',
    starterCode:
      '// function isReady(currentCooldown) {\n//   if (currentCooldown == 0) { return true; }\n//   return false;\n// }\n// print(isReady(0));\n// print(isReady(5));\n',
    validation: {
      consoleExact: ['true', 'false'],
      requireKeywords: ['function', 'return', 'if'],
      explanationKeywords: ['cooldown', 'ready', 'timer']
    }
  },
  {
    concept: 'drop_rate',
    title: 'Drop rate calculator',
    kind: 'code',
    instructions:
      'Write willDrop(chance) that returns true if chance > 50, false otherwise. Print willDrop(75) and willDrop(20). Drop rates control how often rare items appear.',
    starterCode:
      '// function willDrop(chance) {\n//   if (chance > 50) { return true; }\n//   return false;\n// }\n// print(willDrop(75));\n// print(willDrop(20));\n',
    validation: {
      consoleExact: ['true', 'false'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['drop', 'rate', 'chance']
    }
  },
  {
    concept: 'movement',
    title: 'Movement speed',
    kind: 'code',
    instructions:
      'Write moveDistance(speed, time) that returns speed * time. Call moveDistance(5, 3) and print. Distance equals speed times time — the same math real games use.',
    starterCode:
      '// function moveDistance(speed, time) {\n//   return speed * time;\n// }\n// print(moveDistance(5, 3));\n',
    validation: {
      consoleExact: ['15'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['speed', 'distance', 'movement']
    }
  },
  {
    concept: 'respawn',
    title: 'Respawn timer',
    kind: 'code',
    instructions:
      'Write respawn(countdown) that loops countdown times, printing "Respawning in " + (countdown - i) each time. Call respawn(3). The countdown tells the player when they will come back.',
    starterCode:
      '// function respawn(countdown) {\n//   let i = 0;\n//   repeat (countdown) {\n//     i = i + 1;\n//     print("Respawning in " + (countdown - i + 1));\n//   }\n// }\n// respawn(3);\n',
    validation: {
      consoleExact: ['Respawning in 3', 'Respawning in 2', 'Respawning in 1'],
      requireKeywords: ['function', 'repeat'],
      explanationKeywords: ['respawn', 'countdown', 'timer']
    }
  },
  {
    concept: 'resource_gathering',
    title: 'Resource gathering',
    kind: 'code',
    instructions:
      'Write gather(resource, amount) that prints "Collected " + amount + " " + resource. Call gather("Wood", 5) and gather("Stone", 3). Resources are the building blocks of crafting.',
    starterCode:
      '// function gather(resource, amount) {\n//   print("Collected " + amount + " " + resource);\n// }\n// gather("Wood", 5);\n// gather("Stone", 3);\n',
    validation: {
      consoleExact: ['Collected 5 Wood', 'Collected 3 Stone'],
      requireKeywords: ['function'],
      explanationKeywords: ['gather', 'resource', 'collect']
    }
  },
  {
    concept: 'stealth',
    title: 'Stealth detection',
    kind: 'code',
    instructions:
      'Write isDetected(stealthLevel, enemyPerception) that returns true if enemyPerception > stealthLevel. Print isDetected(3, 5) and isDetected(8, 4). Stealth games are about staying unseen.',
    starterCode:
      '// function isDetected(stealthLevel, enemyPerception) {\n//   if (enemyPerception > stealthLevel) { return true; }\n//   return false;\n// }\n// print(isDetected(3, 5));\n// print(isDetected(8, 4));\n',
    validation: {
      consoleExact: ['true', 'false'],
      requireKeywords: ['function', 'return', 'if'],
      explanationKeywords: ['stealth', 'detection', 'compare']
    }
  },
  {
    concept: 'boss_health',
    title: 'Boss health phases',
    kind: 'code',
    instructions:
      'Write bossPhase(health) that prints "Phase 1" if health > 66, "Phase 2" if health > 33, "Enrage" otherwise. Call bossPhase(50). Bosses change tactics as they lose health.',
    starterCode:
      '// function bossPhase(health) {\n//   if (health > 66) { print("Phase 1"); }\n//   else if (health > 33) { print("Phase 2"); }\n//   else { print("Enrage"); }\n// }\n// bossPhase(50);\n',
    validation: {
      consoleExact: ['Phase 2'],
      requireKeywords: ['function', 'if', 'else'],
      explanationKeywords: ['boss', 'phase', 'health']
    }
  },
  {
    concept: 'inventory_sort',
    title: 'Inventory sort concept',
    kind: 'code',
    instructions:
      'Write sortSize(a, b) that returns a if a > b, otherwise b (picks the bigger one). Call sortSize(10, 25) and print. Sorting helps players find items fast.',
    starterCode:
      '// function sortSize(a, b) {\n//   if (a > b) { return a; }\n//   return b;\n// }\n// print(sortSize(10, 25));\n',
    validation: {
      consoleExact: ['25'],
      requireKeywords: ['function', 'return', 'if'],
      explanationKeywords: ['sort', 'compare', 'bigger']
    }
  },
  {
    concept: 'item_rarity',
    title: 'Item rarity tier',
    kind: 'code',
    instructions:
      'Write rarity(tier) that prints "Common" if tier <= 3, "Rare" if tier <= 6, "Legendary" if tier <= 9, "Mythic" otherwise. Call rarity(7). Rarity systems excite players.',
    starterCode:
      '// function rarity(tier) {\n//   if (tier <= 3) { print("Common"); }\n//   else if (tier <= 6) { print("Rare"); }\n//   else if (tier <= 9) { print("Legendary"); }\n//   else { print("Mythic"); }\n// }\n// rarity(7);\n',
    validation: {
      consoleExact: ['Legendary'],
      requireKeywords: ['function', 'if', 'else'],
      explanationKeywords: ['rarity', 'tier', 'loot']
    }
  },
  {
    concept: 'navigation',
    title: 'Simple navigation',
    kind: 'block',
    instructions:
      'Program the player to navigate around an obstacle: go forward, turn right, go forward, turn left, go forward. This is how characters walk around walls.',
    palette: ['forward', 'right', 'left', 'penColor', 'clear'],
    validation: {
      requireBlockTypes: ['forward', 'right', 'left'],
      explanationKeywords: ['navigate', 'avoid', 'path']
    }
  },
  {
    concept: 'spiral_pattern',
    title: 'Spiral pattern',
    kind: 'block',
    instructions:
      'Draw a spiral using blocks: repeat with forward (getting shorter each time) and right. A spiral makes a great decorative pattern for a game world.',
    palette: ['repeat', 'forward', 'right', 'penColor', 'clear'],
    validation: {
      requireBlockTypes: ['repeat', 'forward', 'right'],
      explanationKeywords: ['spiral', 'pattern', 'repeat']
    }
  },
  {
    concept: 'star_shape',
    title: 'Star power-up shape',
    kind: 'block',
    instructions:
      'Draw a 5-pointed star using blocks: repeat 5 times with forward, then turn 144 degrees (right, right, right, right, right, right, right, right, right, right, right, right, right, right).',
    palette: ['repeat', 'forward', 'right', 'penColor', 'clear'],
    validation: {
      requireBlockTypes: ['repeat', 'forward', 'right'],
      explanationKeywords: ['star', 'shape', 'turn']
    }
  },
  {
    concept: 'death_penalty',
    title: 'Death penalty system',
    kind: 'code',
    instructions:
      'Write deathPenalty(gold) that returns gold - 10 if gold > 10, otherwise 0. Call deathPenalty(25) and print. Death should cost something but never take everything.',
    starterCode:
      '// function deathPenalty(gold) {\n//   if (gold > 10) { return gold - 10; }\n//   return 0;\n// }\n// print(deathPenalty(25));\n',
    validation: {
      consoleExact: ['15'],
      requireKeywords: ['function', 'return', 'if'],
      explanationKeywords: ['death', 'penalty', 'gold']
    }
  },
  {
    concept: 'buff_system',
    title: 'Buff duration tracker',
    kind: 'code',
    instructions:
      'Write tickBuff(duration) that prints "Buff active" if duration > 0, "Buff expired" otherwise. Call tickBuff(3) then tickBuff(0). Buffs wear off over time.',
    starterCode:
      '// function tickBuff(duration) {\n//   if (duration > 0) { print("Buff active"); }\n//   else { print("Buff expired"); }\n// }\n// tickBuff(3);\n// tickBuff(0);\n',
    validation: {
      consoleExact: ['Buff active', 'Buff expired'],
      requireKeywords: ['function', 'if', 'else'],
      explanationKeywords: ['buff', 'duration', 'tick']
    }
  },
  {
    concept: 'kill_counter',
    title: 'Kill counter',
    kind: 'code',
    instructions:
      'Write announceKill(killCount) that prints "Kill #" + killCount + "! Double kill!" if killCount == 2, or just "Kill #" + killCount otherwise. Call announceKill(2).',
    starterCode:
      '// function announceKill(killCount) {\n//   if (killCount == 2) { print("Kill #" + killCount + "! Double kill!"); }\n//   else { print("Kill #" + killCount); }\n// }\n// announceKill(2);\n',
    validation: {
      consoleExact: ['Kill #2! Double kill!'],
      requireKeywords: ['function', 'if', 'else'],
      explanationKeywords: ['kill', 'counter', 'milestone']
    }
  },
  {
    concept: 'npc_dialogue',
    title: 'NPC quest offer',
    kind: 'code',
    instructions:
      'Write offerQuest(playerLevel) that prints "Tutorial quest" if level < 5, "Side quest" if level < 10, "Main quest" otherwise. Call offerQuest(7). NPCs scale quests to player power.',
    starterCode:
      '// function offerQuest(playerLevel) {\n//   if (playerLevel < 5) { print("Tutorial quest"); }\n//   else if (playerLevel < 10) { print("Side quest"); }\n//   else { print("Main quest"); }\n// }\n// offerQuest(7);\n',
    validation: {
      consoleExact: ['Side quest'],
      requireKeywords: ['function', 'if', 'else'],
      explanationKeywords: ['NPC', 'quest', 'scale']
    }
  },
  {
    concept: 'minimap_render',
    title: 'Minimap rendering',
    kind: 'code',
    instructions:
      'Write renderMinimap(playerX, playerY) that prints "Player at " + playerX + "," + playerY + " on minimap". Call renderMinimap(3, 7). The minimap shows your position in the world.',
    starterCode:
      '// function renderMinimap(playerX, playerY) {\n//   print("Player at " + playerX + "," + playerY + " on minimap");\n// }\n// renderMinimap(3, 7);\n',
    validation: {
      consoleExact: ['Player at 3,7 on minimap'],
      requireKeywords: ['function'],
      explanationKeywords: ['minimap', 'position', 'render']
    }
  },
  {
    concept: 'entity_factory',
    title: 'Entity factory',
    kind: 'code',
    instructions:
      'Write createEntity(type, hp) that prints type + " spawned with " + hp + " HP". Call createEntity("Dragon", 500). Factories produce game objects consistently.',
    starterCode:
      '// function createEntity(type, hp) {\n//   print(type + " spawned with " + hp + " HP");\n// }\n// createEntity("Dragon", 500);\n',
    validation: {
      consoleExact: ['Dragon spawned with 500 HP'],
      requireKeywords: ['function'],
      explanationKeywords: ['factory', 'entity', 'spawn']
    }
  },
  {
    concept: 'animation_frame',
    title: 'Animation frame counter',
    kind: 'code',
    instructions:
      'Write animate(frameCount) that loops frameCount times printing "Frame " + i each time (starting i at 1). Call animate(4). Animations are just rapid frame displays.',
    starterCode:
      '// function animate(frameCount) {\n//   let i = 0;\n//   repeat (frameCount) {\n//     i = i + 1;\n//     print("Frame " + i);\n//   }\n// }\n// animate(4);\n',
    validation: {
      consoleExact: ['Frame 1', 'Frame 2', 'Frame 3', 'Frame 4'],
      requireKeywords: ['function', 'repeat'],
      explanationKeywords: ['animation', 'frame', 'sequence']
    }
  },
  {
    concept: 'particle_burst',
    title: 'Particle burst',
    kind: 'code',
    instructions:
      'Write burst(x, y, count) that loops count times and prints "Particle at " + x + "," + y each time. Call burst(50, 50, 3). Bursts create explosion effects.',
    starterCode:
      '// function burst(x, y, count) {\n//   repeat (count) {\n//     print("Particle at " + x + "," + y);\n//   }\n// }\n// burst(50, 50, 3);\n',
    validation: {
      consoleLines: 3,
      consoleIncludes: ['Particle at 50,50'],
      requireKeywords: ['function', 'repeat'],
      explanationKeywords: ['particle', 'burst', 'effect']
    }
  },
  {
    concept: 'damage_number',
    title: 'Damage number popup',
    kind: 'code',
    instructions:
      'Write showDamage(x, y, amount) that prints "+" + amount + " at " + x + "," + y. Call showDamage(100, 200, 42). Floating damage numbers give instant combat feedback.',
    starterCode:
      '// function showDamage(x, y, amount) {\n//   print("+" + amount + " at " + x + "," + y);\n// }\n// showDamage(100, 200, 42);\n',
    validation: {
      consoleExact: ['+42 at 100,200'],
      requireKeywords: ['function'],
      explanationKeywords: ['damage', 'popup', 'feedback']
    }
  },
  {
    concept: 'camera_shake_intensity',
    title: 'Camera shake intensity',
    kind: 'code',
    instructions:
      'Write shakeIntensity(power) that prints "Shake power: " + power. Call shakeIntensity(8). More powerful attacks shake the screen harder.',
    starterCode:
      '// function shakeIntensity(power) {\n//   print("Shake power: " + power);\n// }\n// shakeIntensity(8);\n',
    validation: {
      consoleExact: ['Shake power: 8'],
      requireKeywords: ['function'],
      explanationKeywords: ['shake', 'intensity', 'camera']
    }
  },
  {
    concept: 'victory_screen',
    title: 'Victory screen',
    kind: 'code',
    instructions:
      'Write victory(name, score) that print "Victory! " + name + " scored " + score + " points". Call victory("Hero", 9500). Victory screens celebrate achievement.',
    starterCode:
      '// function victory(name, score) {\n//   print("Victory! " + name + " scored " + score + " points");\n// }\n// victory("Hero", 9500);\n',
    validation: {
      consoleExact: ['Victory! Hero scored 9500 points'],
      requireKeywords: ['function'],
      explanationKeywords: ['victory', 'score', 'celebrate']
    }
  },
  {
    concept: 'game_over_screen',
    title: 'Game over screen',
    kind: 'code',
    instructions:
      'Write gameOver(reason) that prints "GAME OVER: " + reason + ". Try again?" Call gameOver("All lives lost"). Game over screens tell players what happened and invite retry.',
    starterCode:
      '// function gameOver(reason) {\n//   print("GAME OVER: " + reason + ". Try again?");\n// }\n// gameOver("All lives lost");\n',
    validation: {
      consoleExact: ['GAME OVER: All lives lost. Try again?'],
      requireKeywords: ['function'],
      explanationKeywords: ['game over', 'reason', 'retry']
    }
  },
  {
    concept: 'speedrun_timer',
    title: 'Speedrun timer',
    kind: 'code',
    instructions:
      'Write speedrunResult(seconds) that prints "Time: " + seconds + "s — " + (if under 60 "New record!" otherwise "Keep trying!") Call speedrunResult(45).',
    starterCode:
      '// function speedrunResult(seconds) {\n//   if (seconds < 60) { print("Time: " + seconds + "s — New record!"); }\n//   else { print("Time: " + seconds + "s — Keep trying!"); }\n// }\n// speedrunResult(45);\n',
    validation: {
      consoleExact: ['Time: 45s — New record!'],
      requireKeywords: ['function', 'if'],
      explanationKeywords: ['speedrun', 'timer', 'record']
    }
  },
  {
    concept: 'loot_drop',
    title: 'Loot drop system',
    kind: 'code',
    instructions:
      'Write lootDrop(tier) that returns "Gold" if tier <= 3, "Magic Ring" if tier <= 6, "Legendary Sword" if tier <= 9, "Mythic Armor" otherwise. Call lootDrop(8) and print.',
    starterCode:
      '// function lootDrop(tier) {\n//   if (tier <= 3) { return "Gold"; }\n//   else if (tier <= 6) { return "Magic Ring"; }\n//   else if (tier <= 9) { return "Legendary Sword"; }\n//   return "Mythic Armor";\n// }\n// print(lootDrop(8));\n',
    validation: {
      consoleExact: ['Legendary Sword'],
      requireKeywords: ['function', 'return', 'if', 'else'],
      explanationKeywords: ['loot', 'tier', 'reward']
    }
  }
]

export { gameStagesExtended }
