// Extended web career path stages: web-11 through web-150

import type { StageSeed } from './data'

export const webStagesExtended: StageSeed[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // FOUNDATION (web-11 → web-25)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    concept: 'variables',
    title: 'Reassign a variable',
    kind: 'code',
    instructions:
      'A variable can hold one value today and a different one tomorrow. Store 10 in a variable called score, then change it to 25, then print score.',
    starterCode: '// let score = 10;\n// score = 25;\n// print(score);\n',
    validation: {
      consoleExact: ['25'],
      requireKeywords: ['let'],
      explanationKeywords: ['variable', 'reassign', 'change']
    }
  },
  {
    concept: 'conditionals',
    title: 'Is it a pass?',
    kind: 'code',
    instructions:
      'Set grade to 72. If grade is greater than or equal to 60, print "Pass", otherwise print "Fail". Comparing with >= means 60 itself also passes.',
    starterCode: 'let grade = 72;\n// if (grade >= 60) { ... } else { ... }\n',
    validation: {
      consoleExact: ['Pass'],
      requireKeywords: ['if'],
      explanationKeywords: ['if', 'pass', 'grade']
    }
  },
  {
    concept: 'conditionals',
    title: 'Nested yes-or-no',
    kind: 'code',
    instructions:
      'Sometimes one decision lives inside another. Set hasTicket to true and age to 12. If hasTicket is true, then if age is greater than 10, print "Premium seat", otherwise print "Standard seat". If hasTicket is false, print "Buy a ticket first".',
    starterCode:
      'let hasTicket = true;\nlet age = 12;\n// if (hasTicket) {\n//   if (age > 10) { ... } else { ... }\n// } else {\n//   ...\n// }\n',
    validation: {
      consoleExact: ['Premium seat'],
      requireKeywords: ['if'],
      explanationKeywords: ['nested', 'condition', 'inside']
    }
  },
  {
    concept: 'strings',
    title: 'Build a heading',
    kind: 'code',
    instructions:
      'Web pages need headings. Store "Welcome to" in one variable and "CodeMaster" in another. Print them joined with a space between using +.',
    starterCode:
      'let part1 = "Welcome to";\nlet part2 = "CodeMaster";\n// print(part1 + " " + part2);\n',
    validation: {
      consoleExact: ['Welcome to CodeMaster'],
      requireKeywords: ['+'],
      explanationKeywords: ['string', 'concatenate', 'join']
    }
  },
  {
    concept: 'types',
    title: 'Numbers vs text',
    kind: 'code',
    instructions:
      'A number and a piece of text that looks like a number behave differently. Store 5 in a variable called num and "5" in a variable called text. Print num + num (you will see 10) then print text + text (you will see 55).',
    starterCode: 'let num = 5;\nlet text = "5";\n// print(num + num);\n// print(text + text);\n',
    validation: {
      consoleExact: ['10', '55'],
      requireKeywords: ['let'],
      explanationKeywords: ['number', 'string', 'type']
    }
  },
  {
    concept: 'booleans',
    title: 'Toggle a flag',
    kind: 'code',
    instructions:
      'Store true in a variable called nightMode. Print nightMode, then set it to false and print it again. Booleans flip between true and false like a light switch.',
    starterCode:
      'let nightMode = true;\n// print(nightMode);\n// nightMode = false;\n// print(nightMode);\n',
    validation: {
      consoleExact: ['true', 'false'],
      requireKeywords: ['let'],
      explanationKeywords: ['boolean', 'true', 'false']
    }
  },
  {
    concept: 'conditionals',
    title: 'Else-if grade bands',
    kind: 'code',
    instructions:
      'A website might show different badges based on score. Set score to 85. If score >= 90 print "Gold", else if score >= 70 print "Silver", else if score >= 50 print "Bronze", otherwise print "No badge".',
    starterCode:
      'let score = 85;\n// if (score >= 90) { ... }\n// else if (score >= 70) { ... }\n// else if (score >= 50) { ... }\n// else { ... }\n',
    validation: {
      consoleExact: ['Silver'],
      requireKeywords: ['if', 'else'],
      explanationKeywords: ['else if', 'chain', 'multiple']
    }
  },
  {
    concept: 'comparisons',
    title: 'Equal or not?',
    kind: 'code',
    instructions:
      'Set password to "secret". If password == "secret" print "Access granted", otherwise print "Wrong password". Then set guess to "hello" and use != to check if guess is NOT equal to password, printing "Correctly rejected".',
    starterCode:
      'let password = "secret";\n// if (password == "secret") { ... } else { ... }\nlet guess = "hello";\n// if (guess != password) { ... }\n',
    validation: {
      consoleExact: ['Access granted', 'Correctly rejected'],
      requireKeywords: ['if', '==', '!='],
      explanationKeywords: ['equal', 'not equal', 'compare']
    }
  },
  {
    concept: 'variables',
    title: 'Increment a counter',
    kind: 'code',
    instructions:
      'Websites count clicks. Store 0 in clicks. Add 1 to clicks three times using clicks = clicks + 1. Print clicks after each addition. You should see 1, 2, 3.',
    starterCode:
      'let clicks = 0;\n// clicks = clicks + 1;\n// print(clicks);\n// clicks = clicks + 1;\n// print(clicks);\n// clicks = clicks + 1;\n// print(clicks);\n',
    validation: {
      consoleExact: ['1', '2', '3'],
      requireKeywords: ['let'],
      explanationKeywords: ['increment', 'counter', 'add']
    }
  },
  {
    concept: 'variables',
    title: 'Counter in a loop',
    kind: 'code',
    instructions:
      'Start items at 0. Use repeat 5 to add 1 each time (items = items + 1). Print "Cart has " + items + " items" after the loop. A loop-driven counter is a pattern you will use constantly.',
    starterCode:
      'let items = 0;\n// repeat (5) { items = items + 1; }\n// print("Cart has " + items + " items");\n',
    validation: {
      consoleExact: ['Cart has 5 items'],
      requireKeywords: ['repeat', 'let'],
      explanationKeywords: ['counter', 'loop', 'accumulator']
    }
  },
  {
    concept: 'naming',
    title: 'Name it like a builder',
    kind: 'code',
    instructions:
      'Good names explain what a variable holds. Store 99 in a variable called priceInCents, then print "Price: " + priceInCents. Compare that to storing it in a variable called x -- which one tells you what it is?',
    starterCode: 'let priceInCents = 99;\n// print("Price: " + priceInCents);\n',
    validation: {
      consoleExact: ['Price: 99'],
      requireKeywords: ['let'],
      explanationKeywords: ['name', 'readable', 'meaningful']
    }
  },
  {
    concept: 'comments',
    title: 'Leave a note for yourself',
    kind: 'code',
    instructions:
      'Comments are notes to future-you. Write a line that prints "Hello" and put a comment above it explaining what the line does. Use // for a single-line comment.',
    starterCode: '// This prints a greeting to the console\n// print("Hello");\n',
    validation: {
      consoleExact: ['Hello'],
      requireKeywords: ['//'],
      explanationKeywords: ['comment', 'note', 'explain']
    }
  },
  {
    concept: 'scope',
    title: 'Where does a variable live?',
    kind: 'code',
    instructions:
      'Variables only exist inside the block where you create them. Create a variable called secret inside a repeat block (set it to 42 and print it). The variable lives inside the block -- that is scope.',
    starterCode: '// repeat (1) {\n//   let secret = 42;\n//   print(secret);\n// }\n',
    validation: {
      consoleExact: ['42'],
      requireKeywords: ['let', 'repeat'],
      explanationKeywords: ['scope', 'block', 'inside']
    }
  },
  {
    concept: 'functions',
    title: 'Functions with parameters',
    kind: 'code',
    instructions:
      'A parameter lets a function accept input. Write a function say(message) that prints the message, then call say("Hello") and say("Goodbye"). One function, two different outputs.',
    starterCode:
      '// function say(message) {\n//   ...\n// }\n// say("Hello");\n// say("Goodbye");\n',
    validation: {
      consoleExact: ['Hello', 'Goodbye'],
      requireKeywords: ['function'],
      explanationKeywords: ['parameter', 'argument', 'input']
    }
  },
  {
    concept: 'functions',
    title: 'Return values',
    kind: 'code',
    instructions:
      'A function can send a value back instead of printing directly. Write double(n) that returns n * 2. Then store the result in answer and print "Double 7 is " + answer.',
    starterCode:
      '// function double(n) {\n//   ...\n// }\n// let answer = double(7);\n// print("Double 7 is " + answer);\n',
    validation: {
      consoleExact: ['Double 7 is 14'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['return', 'output', 'result']
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CORE (web-26 → web-50)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    concept: 'arrays',
    title: 'Create a list',
    kind: 'code',
    instructions:
      'Web pages display lists of things. Create an array called colors holding "red", "green", "blue". Then print the first item with get(colors, 0) -- arrays start counting at 0.',
    starterCode: '// let colors = ["red", "green", "blue"];\n// print(get(colors, 0));\n',
    validation: {
      consoleExact: ['red'],
      requireKeywords: ['let', 'get'],
      explanationKeywords: ['array', 'list', 'index']
    }
  },
  {
    concept: 'arrays',
    title: 'Read by index',
    kind: 'code',
    instructions:
      'Each item in an array has a position number called an index. Create a fruits array with "apple", "banana", "cherry". Print the second fruit using get(fruits, 1). Remember: 0 is the first, 1 is the second.',
    starterCode: '// let fruits = ["apple", "banana", "cherry"];\n// print(get(fruits, 1));\n',
    validation: {
      consoleExact: ['banana'],
      requireKeywords: ['get'],
      explanationKeywords: ['index', 'position', 'array']
    }
  },
  {
    concept: 'arrays',
    title: 'Push new items',
    kind: 'code',
    instructions:
      'A shopping cart starts empty and grows. Create an empty array called cart. Push "shoes" and then "hat" into it. Print the count with count(cart).',
    starterCode:
      '// let cart = [];\n// push(cart, "shoes");\n// push(cart, "hat");\n// print(count(cart));\n',
    validation: {
      consoleExact: ['2'],
      requireKeywords: ['push', 'count'],
      explanationKeywords: ['push', 'add', 'array']
    }
  },
  {
    concept: 'arrays',
    title: 'Count the items',
    kind: 'code',
    instructions:
      'The count() helper tells you how many items are in an array. Create an array called tags with "html", "css", "javascript". Print count(tags) to see how many tags there are.',
    starterCode: '// let tags = ["html", "css", "javascript"];\n// print(count(tags));\n',
    validation: {
      consoleExact: ['3'],
      requireKeywords: ['count'],
      explanationKeywords: ['count', 'length', 'size']
    }
  },
  {
    concept: 'iteration',
    title: 'Walk through every item',
    kind: 'code',
    instructions:
      'Sometimes you need to visit every item in a list. Create an array ["nav", "main", "footer"] and use repeat with count() to print each one with get(). Print "Section: " + get(sections, i) where i goes 0, 1, 2.',
    starterCode:
      '// let sections = ["nav", "main", "footer"];\n// let i = 0;\n// repeat (count(sections)) {\n//   print("Section: " + get(sections, i));\n//   i = i + 1;\n// }\n',
    validation: {
      consoleExact: ['Section: nav', 'Section: main', 'Section: footer'],
      requireKeywords: ['repeat', 'get', 'count'],
      explanationKeywords: ['iterate', 'loop', 'each']
    }
  },
  {
    concept: 'iteration',
    title: 'Count and check',
    kind: 'code',
    instructions:
      'Combine a loop with a condition. Start at 1 and repeat 10 times. Each time, if the number is even (n % 2 == 0), print it. You should see 2, 4, 6, 8, 10.',
    starterCode:
      '// let n = 1;\n// repeat (10) {\n//   if (n % 2 == 0) { print(n); }\n//   n = n + 1;\n// }\n',
    validation: {
      consoleExact: ['2', '4', '6', '8', '10'],
      requireKeywords: ['repeat', 'if', '%'],
      explanationKeywords: ['even', 'modulo', 'condition']
    }
  },
  {
    concept: 'strings',
    title: 'How long is a string?',
    kind: 'code',
    instructions:
      'In web development you often need to know string length. Store "CodeMaster" in a variable. This string has 10 characters. Print the length as 10 -- we are learning the concept that strings have a measurable size.',
    starterCode: 'let siteName = "CodeMaster";\n// The string has 10 characters\n// print(10);\n',
    validation: {
      consoleExact: ['10'],
      requireKeywords: ['let'],
      explanationKeywords: ['length', 'string', 'characters']
    }
  },
  {
    concept: 'strings',
    title: 'Build a greeting card',
    kind: 'code',
    instructions:
      'Concatenate several strings to build a complete message. Store "Dear" in greeting1, "Student" in greeting2, and "welcome aboard!" in greeting3. Print them all on one line with spaces between.',
    starterCode:
      'let greeting1 = "Dear";\nlet greeting2 = "Student";\nlet greeting3 = "welcome aboard!";\n// print(greeting1 + " " + greeting2 + ", " + greeting3);\n',
    validation: {
      consoleExact: ['Dear Student, welcome aboard!'],
      requireKeywords: ['+'],
      explanationKeywords: ['concatenate', 'string', 'build']
    }
  },
  {
    concept: 'loops',
    title: 'Nested repetition',
    kind: 'code',
    instructions:
      'A grid of dots can be built with a loop inside a loop. The outer repeat runs 3 times for 3 rows. The inner repeat builds each row with three stars. Print 3 rows of " * * *".',
    starterCode:
      '// repeat (3) {\n//   let row = "";\n//   repeat (3) {\n//     row = row + " *";\n//   }\n//   print(row);\n// }\n',
    validation: {
      consoleLines: 3,
      consoleIncludes: ['*'],
      requireKeywords: ['repeat'],
      explanationKeywords: ['nested', 'row', 'grid']
    }
  },
  {
    concept: 'functions',
    title: 'Build a utility function',
    kind: 'code',
    instructions:
      'Web developers build small reusable tools. Write a function add(a, b) that returns a + b. Then call add(3, 4) and print the result. A utility is a tiny function that does one job well.',
    starterCode: '// function add(a, b) {\n//   return a + b;\n// }\n// print(add(3, 4));\n',
    validation: {
      consoleExact: ['7'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['utility', 'reusable', 'function']
    }
  },
  {
    concept: 'functions',
    title: 'Functions calling functions',
    kind: 'code',
    instructions:
      'One function can use another. Write double(n) that returns n * 2, then write doubleAndAdd(a, b) that returns double(a) + double(b). Print doubleAndAdd(3, 5) -- you should get 16.',
    starterCode:
      '// function double(n) {\n//   return n * 2;\n// }\n// function doubleAndAdd(a, b) {\n//   return double(a) + double(b);\n// }\n// print(doubleAndAdd(3, 5));\n',
    validation: {
      consoleExact: ['16'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['compose', 'call', 'chain']
    }
  },
  {
    concept: 'functions',
    title: 'Function composition',
    kind: 'code',
    instructions:
      'Composing functions means building new behavior from small pieces. Write square(n) returning n * n, then wrap(n) returning "[" + square(n) + "]". Print wrap(5) to see [25].',
    starterCode:
      '// function square(n) {\n//   return n * n;\n// }\n// function wrap(n) {\n//   return "[" + square(n) + "]";\n// }\n// print(wrap(5));\n',
    validation: {
      consoleExact: ['[25]'],
      requireKeywords: ['function'],
      explanationKeywords: ['compose', 'combine', 'wrapper']
    }
  },
  {
    concept: 'reuse',
    title: 'Dont repeat yourself',
    kind: 'code',
    instructions:
      'Imagine printing "Loading..." three times without a function. Now imagine the designer wants to change it. With a function you only change one line. Write showLoading() that prints "Loading..." and call it three times.',
    starterCode:
      '// function showLoading() {\n//   print("Loading...");\n// }\n// showLoading();\n// showLoading();\n// showLoading();\n',
    validation: {
      consoleLines: 3,
      consoleIncludes: ['Loading...'],
      requireKeywords: ['function'],
      explanationKeywords: ['DRY', 'reuse', 'function']
    }
  },
  {
    concept: 'dry_principle',
    title: 'DRY: one change, many places',
    kind: 'code',
    instructions:
      'DRY means "Dont Repeat Yourself". Write formatItem(name, price) that prints name + ": $" + price. Use it for "Shirt: $29", "Shoes: $89", "Hat: $15". If the format changes, you only fix formatItem.',
    starterCode:
      '// function formatItem(name, price) {\n//   print(name + ": $" + price);\n// }\n// formatItem("Shirt", 29);\n// formatItem("Shoes", 89);\n// formatItem("Hat", 15);\n',
    validation: {
      consoleExact: ['Shirt: $29', 'Shoes: $89', 'Hat: $15'],
      requireKeywords: ['function'],
      explanationKeywords: ['DRY', 'reusable', 'single']
    }
  },
  {
    concept: 'arrays',
    title: 'Loop through a cart',
    kind: 'code',
    instructions:
      'Web stores loop through cart items to calculate a total. Create a cart array with item prices [10, 25, 15]. Loop through, adding each price to a total. Print "Total: $" + total.',
    starterCode:
      '// let cart = [10, 25, 15];\n// let total = 0;\n// let i = 0;\n// repeat (count(cart)) {\n//   total = total + get(cart, i);\n//   i = i + 1;\n// }\n// print("Total: $" + total);\n',
    validation: {
      consoleExact: ['Total: $50'],
      requireKeywords: ['repeat', 'get', 'count'],
      explanationKeywords: ['sum', 'loop', 'accumulate']
    }
  },
  {
    concept: 'arrays',
    title: 'Find the biggest price',
    kind: 'code',
    instructions:
      'Finding the highest value in an array is a common web pattern (highest bid, most expensive item). Create prices [12, 45, 8, 33]. Loop through: if the current price is bigger than the biggest you have seen, update biggest. Print "Biggest: $" + biggest.',
    starterCode:
      '// let prices = [12, 45, 8, 33];\n// let biggest = get(prices, 0);\n// let i = 1;\n// repeat (count(prices) - 1) {\n//   if (get(prices, i) > biggest) {\n//     biggest = get(prices, i);\n//   }\n//   i = i + 1;\n// }\n// print("Biggest: $" + biggest);\n',
    validation: {
      consoleExact: ['Biggest: $45'],
      requireKeywords: ['repeat', 'if', 'get'],
      explanationKeywords: ['max', 'compare', 'biggest']
    }
  },
  {
    concept: 'functions',
    title: 'Return a string',
    kind: 'code',
    instructions:
      'Functions can return strings too, not just numbers. Write badge(score) that returns "Gold" if score >= 90, "Silver" if score >= 70, otherwise "Bronze". Print badge(85).',
    starterCode:
      '// function badge(score) {\n//   if (score >= 90) { return "Gold"; }\n//   if (score >= 70) { return "Silver"; }\n//   return "Bronze";\n// }\n// print(badge(85));\n',
    validation: {
      consoleExact: ['Silver'],
      requireKeywords: ['function', 'return', 'if'],
      explanationKeywords: ['return', 'condition', 'badge']
    }
  },
  {
    concept: 'arrays',
    title: 'Filter items from a list',
    kind: 'code',
    instructions:
      'Web apps filter data all the time (search results, dropdowns). Create items ["red", "blue", "green", "yellow"]. Loop through and print only "green" and "yellow" using a condition.',
    starterCode:
      '// let items = ["red", "blue", "green", "yellow"];\n// let i = 0;\n// repeat (count(items)) {\n//   let word = get(items, i);\n//   if (word == "green" || word == "yellow") {\n//     print(word);\n//   }\n//   i = i + 1;\n// }\n',
    validation: {
      consoleExact: ['green', 'yellow'],
      requireKeywords: ['repeat', 'get', 'if'],
      explanationKeywords: ['filter', 'condition', 'select']
    }
  },
  {
    concept: 'strings',
    title: 'Build HTML-like output',
    kind: 'code',
    instructions:
      'Web developers build HTML strings. Store "div" in tag, "Hello" in content. Build and print an opening tag + content + closing tag: "<div>Hello</div>". String building is how templates work.',
    starterCode:
      'let tag = "div";\nlet content = "Hello";\n// print("<" + tag + ">" + content + "</" + tag + ">");\n',
    validation: {
      consoleExact: ['<div>Hello</div>'],
      requireKeywords: ['+'],
      explanationKeywords: ['tag', 'html', 'concatenate']
    }
  },
  {
    concept: 'functions',
    title: 'A function that builds a list item',
    kind: 'code',
    instructions:
      'Write li(text) that returns "<li>" + text + "</li>". Use it to build three items: li("Home"), li("About"), li("Contact"). Print each on its own line.',
    starterCode:
      '// function li(text) {\n//   return "<li>" + text + "</li>";\n// }\n// print(li("Home"));\n// print(li("About"));\n// print(li("Contact"));\n',
    validation: {
      consoleExact: ['<li>Home</li>', '<li>About</li>', '<li>Contact</li>'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['function', 'template', 'reusable']
    }
  },
  {
    concept: 'iteration',
    title: 'Generate a nav from data',
    kind: 'code',
    instructions:
      'Combine arrays, loops, and functions to generate HTML. Create pages ["Home", "About", "Blog"]. Write li(text) returning "<li>" + text + "</li>". Loop through pages and print each as an li. This is how real sites generate navigation.',
    starterCode:
      '// let pages = ["Home", "About", "Blog"];\n// function li(text) {\n//   return "<li>" + text + "</li>";\n// }\n// let i = 0;\n// repeat (count(pages)) {\n//   print(li(get(pages, i)));\n//   i = i + 1;\n// }\n',
    validation: {
      consoleExact: ['<li>Home</li>', '<li>About</li>', '<li>Blog</li>'],
      requireKeywords: ['function', 'repeat', 'get', 'count'],
      explanationKeywords: ['generate', 'loop', 'template']
    }
  },
  {
    concept: 'dry_principle',
    title: 'DRY: extract the pattern',
    kind: 'code',
    instructions:
      'You keep printing "Item: " + differentName for different items. Stop. Write printItem(name) that does it once. Then use it for "Item: Shoes", "Item: Socks", "Item: Jacket". One function, three calls.',
    starterCode:
      '// function printItem(name) {\n//   print("Item: " + name);\n// }\n// printItem("Shoes");\n// printItem("Socks");\n// printItem("Jacket");\n',
    validation: {
      consoleExact: ['Item: Shoes', 'Item: Socks', 'Item: Jacket'],
      requireKeywords: ['function'],
      explanationKeywords: ['DRY', 'extract', 'single']
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // APPLIED (web-51 → web-90)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    concept: 'nav_bar',
    title: 'Build a nav bar',
    kind: 'code',
    instructions:
      'Navigation bars are the top strip on every website. Create a function navItem(label) that returns "[ " + label + " ]". Use it to build a full nav bar by concatenating three calls. This is how websites render menus.',
    starterCode:
      '// function navItem(label) {\n//   return "[ " + label + " ]";\n// }\n// print(navItem("Home") + navItem("About") + navItem("Contact"));\n',
    validation: {
      consoleExact: ['[ Home ] [ About ] [ Contact ]'],
      requireKeywords: ['function'],
      explanationKeywords: ['nav', 'menu', 'component']
    }
  },
  {
    concept: 'form_validation',
    title: 'Check if a field is empty',
    kind: 'code',
    instructions:
      'Forms must not be empty. Store an empty string in username. If username == "", print "Error: username is required", otherwise print "Valid!". Form validation keeps data clean.',
    starterCode:
      'let username = "";\n// if (username == "") {\n//   print("Error: username is required");\n// } else {\n//   print("Valid!");\n// }\n',
    validation: {
      consoleExact: ['Error: username is required'],
      requireKeywords: ['if'],
      explanationKeywords: ['validate', 'empty', 'required']
    }
  },
  {
    concept: 'form_validation',
    title: 'Check minimum length',
    kind: 'code',
    instructions:
      'Usernames must be at least 3 characters. Store "ab" in username. If it is shorter than "abc", print "Too short, need 3+ characters". This simulates checking a minimum length.',
    starterCode:
      'let username = "ab";\n// if (username == "ab") {\n//   print("Too short, need 3+ characters");\n// }\n',
    validation: {
      consoleExact: ['Too short, need 3+ characters'],
      requireKeywords: ['if'],
      explanationKeywords: ['length', 'minimum', 'validate']
    }
  },
  {
    concept: 'shopping_cart',
    title: 'Add to cart and total',
    kind: 'code',
    instructions:
      'Build a mini shopping cart. Create an empty cart array. Push item prices 25, 10, 35 into it. Loop through to calculate total. Print "Cart total: $" + total.',
    starterCode:
      '// let cart = [];\n// push(cart, 25);\n// push(cart, 10);\n// push(cart, 35);\n// let total = 0;\n// let i = 0;\n// repeat (count(cart)) {\n//   total = total + get(cart, i);\n//   i = i + 1;\n// }\n// print("Cart total: $" + total);\n',
    validation: {
      consoleExact: ['Cart total: $70'],
      requireKeywords: ['push', 'repeat', 'count', 'get'],
      explanationKeywords: ['cart', 'total', 'loop']
    }
  },
  {
    concept: 'todo_list',
    title: 'Build a todo list',
    kind: 'code',
    instructions:
      'Todos are just arrays of strings. Create todos ["Buy milk", "Walk dog", "Read book"]. Loop through and print each with a number prefix: "1. Buy milk", "2. Walk dog", etc.',
    starterCode:
      '// let todos = ["Buy milk", "Walk dog", "Read book"];\n// let i = 0;\n// repeat (count(todos)) {\n//   print((i + 1) + ". " + get(todos, i));\n//   i = i + 1;\n// }\n',
    validation: {
      consoleExact: ['1. Buy milk', '2. Walk dog', '3. Read book'],
      requireKeywords: ['repeat', 'get', 'count'],
      explanationKeywords: ['todo', 'list', 'number']
    }
  },
  {
    concept: 'color_picker',
    title: 'Color from a condition',
    kind: 'code',
    instructions:
      'Websites pick colors based on conditions. Store theme in "dark". If theme == "dark", print "Background: #000, Text: #fff". If theme == "light", print "Background: #fff, Text: #000".',
    starterCode:
      'let theme = "dark";\n// if (theme == "dark") {\n//   print("Background: #000, Text: #fff");\n// } else if (theme == "light") {\n//   print("Background: #fff, Text: #000");\n// }\n',
    validation: {
      consoleExact: ['Background: #000, Text: #fff'],
      requireKeywords: ['if'],
      explanationKeywords: ['theme', 'color', 'condition']
    }
  },
  {
    concept: 'css_logic',
    title: 'Style by class name',
    kind: 'code',
    instructions:
      'CSS applies different styles to different classes. Write style(className) that returns different values: if className == "btn", return "padding: 10px; border-radius: 5px". If className == "card", return "padding: 20px; box-shadow: 2px". Print style("btn").',
    starterCode:
      '// function style(className) {\n//   if (className == "btn") {\n//     return "padding: 10px; border-radius: 5px";\n//   }\n//   if (className == "card") {\n//     return "padding: 20px; box-shadow: 2px";\n//   }\n//   return "no styles";\n// }\n// print(style("btn"));\n',
    validation: {
      consoleExact: ['padding: 10px; border-radius: 5px'],
      requireKeywords: ['function', 'return', 'if'],
      explanationKeywords: ['style', 'class', 'css']
    }
  },
  {
    concept: 'dom_data',
    title: 'Change a label on a condition',
    kind: 'code',
    instructions:
      'Websites change what users see based on state. Store isLoggedIn to true. If logged in, set greeting to "Welcome back!". If not, set greeting to "Please sign in". Print the greeting. This is DOM manipulation logic.',
    starterCode:
      'let isLoggedIn = true;\nlet greeting = "";\n// if (isLoggedIn) {\n//   greeting = "Welcome back!";\n// } else {\n//   greeting = "Please sign in";\n// }\n// print(greeting);\n',
    validation: {
      consoleExact: ['Welcome back!'],
      requireKeywords: ['if'],
      explanationKeywords: ['dom', 'state', 'update']
    }
  },
  {
    concept: 'api_mock',
    title: 'Mock a GET endpoint',
    kind: 'code',
    instructions:
      'APIs return data based on the path requested. Write a function getRoute(path) that returns different data: if path == "/users", return "List of users". If path == "/posts", return "List of posts". Otherwise return "404 Not Found". Print getRoute("/users").',
    starterCode:
      '// function getRoute(path) {\n//   if (path == "/users") { return "List of users"; }\n//   if (path == "/posts") { return "List of posts"; }\n//   return "404 Not Found";\n// }\n// print(getRoute("/users"));\n',
    validation: {
      consoleExact: ['List of users'],
      requireKeywords: ['function', 'return', 'if'],
      explanationKeywords: ['api', 'route', 'endpoint']
    }
  },
  {
    concept: 'user_data',
    title: 'Process user data',
    kind: 'code',
    instructions:
      'Web apps process arrays of user data. Create names ["Alice", "Bob", "Charlie"] and ages [25, 30, 22]. Loop through and print "Alice is 25", "Bob is 30", "Charlie is 22" by matching indices.',
    starterCode:
      '// let names = ["Alice", "Bob", "Charlie"];\n// let ages = [25, 30, 22];\n// let i = 0;\n// repeat (count(names)) {\n//   print(get(names, i) + " is " + get(ages, i));\n//   i = i + 1;\n// }\n',
    validation: {
      consoleExact: ['Alice is 25', 'Bob is 30', 'Charlie is 22'],
      requireKeywords: ['repeat', 'get', 'count'],
      explanationKeywords: ['user', 'data', 'parallel']
    }
  },
  {
    concept: 'url_validation',
    title: 'Validate a URL',
    kind: 'code',
    instructions:
      'A real URL validator checks if a string starts with "https://". Store url as "https://example.com". If url == "https://example.com", print "Secure URL". Otherwise print "Insecure URL". This is basic URL checking.',
    starterCode:
      'let url = "https://example.com";\n// if (url == "https://example.com") {\n//   print("Secure URL");\n// } else {\n//   print("Insecure URL");\n// }\n',
    validation: {
      consoleExact: ['Secure URL'],
      requireKeywords: ['if'],
      explanationKeywords: ['url', 'validate', 'secure']
    }
  },
  {
    concept: 'password_checker',
    title: 'Check a password',
    kind: 'code',
    instructions:
      'Websites check passwords for basic rules. Store password as "abc1". A strong password has at least 4 characters and contains a number. Since "abc1" is 4 characters and has a digit, print "Strong password". Set another test with "ab" to see "Too short".',
    starterCode:
      'let password = "abc1";\n// A strong password: 4+ chars and has a digit\n// "abc1" passes both checks\n// if (password == "abc1") {\n//   print("Strong password");\n// } else {\n//   print("Too short");\n// }\n',
    validation: {
      consoleExact: ['Strong password'],
      requireKeywords: ['if'],
      explanationKeywords: ['password', 'strength', 'check']
    }
  },
  {
    concept: 'url_router',
    title: 'Match a URL path',
    kind: 'code',
    instructions:
      'Web frameworks route requests by URL path. Write route(path) that returns the right page: "/home" returns "Home page", "/about" returns "About page", "/contact" returns "Contact page". Anything else returns "404". Print route("/about").',
    starterCode:
      '// function route(path) {\n//   if (path == "/home") { return "Home page"; }\n//   if (path == "/about") { return "About page"; }\n//   if (path == "/contact") { return "Contact page"; }\n//   return "404";\n// }\n// print(route("/about"));\n',
    validation: {
      consoleExact: ['About page'],
      requireKeywords: ['function', 'return', 'if'],
      explanationKeywords: ['route', 'path', 'match']
    }
  },
  {
    concept: 'search_filter',
    title: 'Search through items',
    kind: 'code',
    instructions:
      'Search bars filter items by name. Create items ["apple", "banana", "avocado", "blueberry"]. Loop through and print items that start with "a" (check if the item == "apple" or == "avocado"). You should see "apple" and "avocado".',
    starterCode:
      '// let items = ["apple", "banana", "avocado", "blueberry"];\n// let i = 0;\n// repeat (count(items)) {\n//   let item = get(items, i);\n//   if (item == "apple" || item == "avocado") {\n//     print(item);\n//   }\n//   i = i + 1;\n// }\n',
    validation: {
      consoleExact: ['apple', 'avocado'],
      requireKeywords: ['repeat', 'get', 'if'],
      explanationKeywords: ['search', 'filter', 'match']
    }
  },
  {
    concept: 'contact_list',
    title: 'Manage a contact list',
    kind: 'code',
    instructions:
      'A contact list stores names and phone numbers. Create names ["Alice", "Bob"] and phones ["555-1234", "555-5678"]. Loop through and print "Alice: 555-1234" and "Bob: 555-5678".',
    starterCode:
      '// let names = ["Alice", "Bob"];\n// let phones = ["555-1234", "555-5678"];\n// let i = 0;\n// repeat (count(names)) {\n//   print(get(names, i) + ": " + get(phones, i));\n//   i = i + 1;\n// }\n',
    validation: {
      consoleExact: ['Alice: 555-1234', 'Bob: 555-5678'],
      requireKeywords: ['repeat', 'get', 'count'],
      explanationKeywords: ['contact', 'list', 'pair']
    }
  },
  {
    concept: 'form_validator',
    title: 'Validator chain',
    kind: 'code',
    instructions:
      'Forms need multiple checks. Write validateEmail(email) that checks three things: if email == "", return "Email is required". If email == "bad", return "Invalid email". Otherwise return "Valid". Print validateEmail("").',
    starterCode:
      '// function validateEmail(email) {\n//   if (email == "") { return "Email is required"; }\n//   if (email == "bad") { return "Invalid email"; }\n//   return "Valid";\n// }\n// print(validateEmail(""));\n',
    validation: {
      consoleExact: ['Email is required'],
      requireKeywords: ['function', 'return', 'if'],
      explanationKeywords: ['validate', 'chain', 'multiple']
    }
  },
  {
    concept: 'data_table',
    title: 'Print table rows',
    kind: 'code',
    instructions:
      'Data tables display rows of data. Create names ["Alice", "Bob"] and scores [95, 82]. Print a header "Name | Score" then loop through printing each row: "Alice | 95" and "Bob | 82".',
    starterCode:
      '// print("Name | Score");\n// let names = ["Alice", "Bob"];\n// let scores = [95, 82];\n// let i = 0;\n// repeat (count(names)) {\n//   print(get(names, i) + " | " + get(scores, i));\n//   i = i + 1;\n// }\n',
    validation: {
      consoleExact: ['Name | Score', 'Alice | 95', 'Bob | 82'],
      requireKeywords: ['repeat', 'get'],
      explanationKeywords: ['table', 'row', 'display']
    }
  },
  {
    concept: 'pagination',
    title: 'Show page 1 of results',
    kind: 'code',
    instructions:
      'Pagination shows a slice of results. Create items [10, 20, 30, 40, 50]. Page size is 2. Print items 0 and 1 (the first page): "Page 1: 10, 20". We use get() with calculated indices.',
    starterCode:
      '// let items = [10, 20, 30, 40, 50];\n// let pageSize = 2;\n// let page = 0;\n// let start = page * pageSize;\n// print("Page 1: " + get(items, start) + ", " + get(items, start + 1));\n',
    validation: {
      consoleExact: ['Page 1: 10, 20'],
      requireKeywords: ['get'],
      explanationKeywords: ['page', 'slice', 'offset']
    }
  },
  {
    concept: 'notifications',
    title: 'Build a notification system',
    kind: 'code',
    instructions:
      'Apps show notifications by type. Write notify(type) that returns different messages: "error" returns "Something went wrong", "success" returns "All good!", "info" returns "FYI". Print notify("error").',
    starterCode:
      '// function notify(type) {\n//   if (type == "error") { return "Something went wrong"; }\n//   if (type == "success") { return "All good!"; }\n//   return "FYI";\n// }\n// print(notify("error"));\n',
    validation: {
      consoleExact: ['Something went wrong'],
      requireKeywords: ['function', 'return', 'if'],
      explanationKeywords: ['notification', 'type', 'message']
    }
  },
  {
    concept: 'sessions',
    title: 'Cookie and session basics',
    kind: 'reference',
    instructions:
      'Read about how cookies and sessions work on the web. Your goal: explain the difference between a cookie (stored on the user browser) and a session (stored on the server) in your own words.',
    reference: {
      kind: 'docs',
      title: 'MDN: HTTP Cookies',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies',
      whyKey: 'reference.web.why'
    },
    validation: {
      explanationKeywords: ['cookie', 'session', 'browser', 'server']
    }
  },
  {
    concept: 'form_state',
    title: 'Form state machine',
    kind: 'code',
    instructions:
      'Forms have states: "empty", "editing", "submitted". Store state as "editing". If state == "empty" print "Start typing", if "editing" print "Form is active", if "submitted" print "Thank you!".',
    starterCode:
      'let state = "editing";\n// if (state == "empty") { print("Start typing"); }\n// if (state == "editing") { print("Form is active"); }\n// if (state == "submitted") { print("Thank you!"); }\n',
    validation: {
      consoleExact: ['Form is active'],
      requireKeywords: ['if'],
      explanationKeywords: ['state', 'machine', 'form']
    }
  },
  {
    concept: 'sanitization',
    title: 'Clean user input',
    kind: 'code',
    instructions:
      'User input can contain harmful characters. Store input as "hello <script>". A sanitizer replaces dangerous tags. Write sanitize(input) that returns "hello [removed]" if input contains "<script>", otherwise returns the input unchanged. Print sanitize("hello <script>").',
    starterCode:
      '// function sanitize(input) {\n//   if (input == "hello <script>") {\n//     return "hello [removed]";\n//   }\n//   return input;\n// }\n// print(sanitize("hello <script>"));\n',
    validation: {
      consoleExact: ['hello [removed]'],
      requireKeywords: ['function', 'return', 'if'],
      explanationKeywords: ['sanitize', 'clean', 'safe']
    }
  },
  {
    concept: 'templates',
    title: 'Build a template',
    kind: 'code',
    instructions:
      'Templates let you plug data into text. Write template(name, item) that returns "Hi " + name + ", you ordered " + item + ".". Print template("Ada", "shoes").',
    starterCode:
      '// function template(name, item) {\n//   return "Hi " + name + ", you ordered " + item + ".";\n// }\n// print(template("Ada", "shoes"));\n',
    validation: {
      consoleExact: ['Hi Ada, you ordered shoes.'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['template', 'placeholder', 'dynamic']
    }
  },
  {
    concept: 'markdown',
    title: 'A mini markdown parser',
    kind: 'code',
    instructions:
      'Markdown uses # for headings. Write parseMarkdown(text) that returns "<h1>" + text + "</h1>" when text starts with "# ". Since "# Hello" is the input, print parseMarkdown("# Hello") and you should see "<h1>Hello</h1>".',
    starterCode:
      '// function parseMarkdown(text) {\n//   if (text == "# Hello") {\n//     return "<h1>Hello</h1>";\n//   }\n//   return text;\n// }\n// print(parseMarkdown("# Hello"));\n',
    validation: {
      consoleExact: ['<h1>Hello</h1>'],
      requireKeywords: ['function', 'return', 'if'],
      explanationKeywords: ['markdown', 'parse', 'convert']
    }
  },
  {
    concept: 'calendar',
    title: 'Days in a month',
    kind: 'code',
    instructions:
      'A calendar function returns how many days a month has. Write daysInMonth(month) that returns 31 for months 1,3,5,7,8,10,12 and 30 for months 4,6,9,11. Print daysInMonth(1) to see 31.',
    starterCode:
      '// function daysInMonth(month) {\n//   if (month == 1 || month == 3 || month == 5) { return 31; }\n//   if (month == 7 || month == 8 || month == 10) { return 31; }\n//   if (month == 12) { return 31; }\n//   return 30;\n// }\n// print(daysInMonth(1));\n',
    validation: {
      consoleExact: ['31'],
      requireKeywords: ['function', 'return', 'if'],
      explanationKeywords: ['calendar', 'days', 'month']
    }
  },
  {
    concept: 'unit_converter',
    title: 'Convert inches to centimeters',
    kind: 'code',
    instructions:
      'Websites convert units for users. Write toCm(inches) that returns inches * 2.54. Print toCm(10) to see 25.4. Real converters use math, not magic.',
    starterCode:
      '// function toCm(inches) {\n//   return inches * 2.54;\n// }\n// print(toCm(10));\n',
    validation: {
      consoleExact: ['25.4'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['convert', 'unit', 'math']
    }
  },
  {
    concept: 'tip_calculator',
    title: 'Calculate a tip',
    kind: 'code',
    instructions:
      'Restaurants apps calculate tips. Write tip(bill, percent) that returns bill * percent / 100. Print tip(50, 20) to see 10 (20% of $50). Then print "Tip: $" + tip(50, 20).',
    starterCode:
      '// function tip(bill, percent) {\n//   return bill * percent / 100;\n// }\n// print("Tip: $" + tip(50, 20));\n',
    validation: {
      consoleExact: ['Tip: $10'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['tip', 'percent', 'calculate']
    }
  },
  {
    concept: 'shopping_cart',
    title: 'Remove from cart',
    kind: 'code',
    instructions:
      'A cart needs to remove items too. Create cart with ["shoes", "hat", "belt"]. Loop through and print items that are NOT "hat" (skip it). You should see "shoes" and "belt".',
    starterCode:
      '// let cart = ["shoes", "hat", "belt"];\n// let i = 0;\n// repeat (count(cart)) {\n//   if (get(cart, i) != "hat") {\n//     print(get(cart, i));\n//   }\n//   i = i + 1;\n// }\n',
    validation: {
      consoleExact: ['shoes', 'belt'],
      requireKeywords: ['repeat', 'get', 'if'],
      explanationKeywords: ['remove', 'cart', 'filter']
    }
  },
  {
    concept: 'api_mock',
    title: 'Mock a POST endpoint',
    kind: 'code',
    instructions:
      'POST endpoints create new data. Write createItem(name) that returns "Created: " + name. If name == "", return "Error: name required". Print createItem("Widget").',
    starterCode:
      '// function createItem(name) {\n//   if (name == "") { return "Error: name required"; }\n//   return "Created: " + name;\n// }\n// print(createItem("Widget"));\n',
    validation: {
      consoleExact: ['Created: Widget'],
      requireKeywords: ['function', 'return', 'if'],
      explanationKeywords: ['post', 'create', 'api']
    }
  },
  {
    concept: 'form_validation',
    title: 'Validate a signup form',
    kind: 'code',
    instructions:
      'Signup forms check multiple fields. Write signup(user, pass) that returns "OK" if both user and pass are not empty (neither == ""). If user is empty, return "User required". If pass is empty, return "Pass required". Print signup("ada", "secret").',
    starterCode:
      '// function signup(user, pass) {\n//   if (user == "") { return "User required"; }\n//   if (pass == "") { return "Pass required"; }\n//   return "OK";\n// }\n// print(signup("ada", "secret"));\n',
    validation: {
      consoleExact: ['OK'],
      requireKeywords: ['function', 'return', 'if'],
      explanationKeywords: ['signup', 'validate', 'fields']
    }
  },
  {
    concept: 'cart_total',
    title: 'Apply a discount',
    kind: 'code',
    instructions:
      'Shopping carts apply discount codes. Write discountedTotal(total, code) that returns total * 90 / 100 if code == "SAVE10" (10% off). Otherwise return total. Print discountedTotal(100, "SAVE10").',
    starterCode:
      '// function discountedTotal(total, code) {\n//   if (code == "SAVE10") {\n//     return total * 90 / 100;\n//   }\n//   return total;\n// }\n// print(discountedTotal(100, "SAVE10"));\n',
    validation: {
      consoleExact: ['90'],
      requireKeywords: ['function', 'return', 'if'],
      explanationKeywords: ['discount', 'coupon', 'total']
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ADVANCED (web-91 → web-130)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    concept: 'recursion',
    title: 'Countdown with recursion',
    kind: 'code',
    instructions:
      'Recursion is a function that calls itself. Write countdown(n) that prints n, then calls countdown(n - 1) if n > 1. Call countdown(3) and you should see 3, 2, 1.',
    starterCode:
      '// function countdown(n) {\n//   print(n);\n//   if (n > 1) {\n//     countdown(n - 1);\n//   }\n// }\n// countdown(3);\n',
    validation: {
      consoleExact: ['3', '2', '1'],
      requireKeywords: ['function'],
      explanationKeywords: ['recursion', 'self', 'base case']
    }
  },
  {
    concept: 'nested_data',
    title: 'Nested data structures',
    kind: 'code',
    instructions:
      'Real data is nested: a user has a name and a list of orders. Create users ["Alice", "Bob"] and ordersPerUser [3, 7]. Loop through: if orders > 5, print name + " is a big customer". You should see "Bob is a big customer".',
    starterCode:
      '// let users = ["Alice", "Bob"];\n// let ordersPerUser = [3, 7];\n// let i = 0;\n// repeat (count(users)) {\n//   if (get(ordersPerUser, i) > 5) {\n//     print(get(users, i) + " is a big customer");\n//   }\n//   i = i + 1;\n// }\n',
    validation: {
      consoleExact: ['Bob is a big customer'],
      requireKeywords: ['repeat', 'get', 'if'],
      explanationKeywords: ['nested', 'structure', 'related']
    }
  },
  {
    concept: 'sorting',
    title: 'Bubble sort concept',
    kind: 'code',
    instructions:
      'Sorting arranges data in order. Given [3, 1, 2], we compare adjacent pairs and swap if needed. After one pass: compare 3 and 1, swap to get [1, 3, 2]. Compare 3 and 2, swap to get [1, 2, 3]. Print "1, 2, 3".',
    starterCode:
      '// let a = [3, 1, 2];\n// Bubble sort: compare adjacent pairs\n// First pass: 3>1 swap, 3>2 swap\n// Result: 1, 2, 3\n// print("1, 2, 3");\n',
    validation: {
      consoleExact: ['1, 2, 3'],
      requireKeywords: ['let'],
      explanationKeywords: ['sort', 'compare', 'swap']
    }
  },
  {
    concept: 'searching',
    title: 'Linear search',
    kind: 'code',
    instructions:
      'Search means finding an item in a list. Create items [10, 25, 30, 45, 50]. Look for 30. Loop through: when you find it, print "Found 30 at position 2". Position counts from 0.',
    starterCode:
      '// let items = [10, 25, 30, 45, 50];\n// let target = 30;\n// let i = 0;\n// repeat (count(items)) {\n//   if (get(items, i) == target) {\n//     print("Found " + target + " at position " + i);\n//   }\n//   i = i + 1;\n// }\n',
    validation: {
      consoleExact: ['Found 30 at position 2'],
      requireKeywords: ['repeat', 'get', 'if'],
      explanationKeywords: ['search', 'find', 'linear']
    }
  },
  {
    concept: 'events',
    title: 'Event handler pattern',
    kind: 'code',
    instructions:
      'Web pages respond to events. Write handleClick(button) that returns "Clicked: " + button. Call it for three buttons: handleClick("Submit"), handleClick("Cancel"), handleClick("Save").',
    starterCode:
      '// function handleClick(button) {\n//   return "Clicked: " + button;\n// }\n// print(handleClick("Submit"));\n// print(handleClick("Cancel"));\n// print(handleClick("Save"));\n',
    validation: {
      consoleExact: ['Clicked: Submit', 'Clicked: Cancel', 'Clicked: Save'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['event', 'handler', 'click']
    }
  },
  {
    concept: 'state_management',
    title: 'Manage app state',
    kind: 'code',
    instructions:
      'Apps store state in variables. Create count = 0. Write increment() that sets count = count + 1 and prints "Count: " + count. Call increment() three times. You should see Count: 1, Count: 2, Count: 3.',
    starterCode:
      'let count = 0;\n// function increment() {\n//   count = count + 1;\n//   print("Count: " + count);\n// }\n// increment();\n// increment();\n// increment();\n',
    validation: {
      consoleExact: ['Count: 1', 'Count: 2', 'Count: 3'],
      requireKeywords: ['function'],
      explanationKeywords: ['state', 'mutable', 'update']
    }
  },
  {
    concept: 'async_concepts',
    title: 'Sequential async steps',
    kind: 'code',
    instructions:
      'Async operations happen in order: first fetch data, then display it. Write fetchData() returning "Data loaded", then displayData() returning "Displaying: Data loaded". Call them in sequence and print each result.',
    starterCode:
      '// function fetchData() {\n//   return "Data loaded";\n// }\n// function displayData() {\n//   return "Displaying: " + fetchData();\n// }\n// print(fetchData());\n// print(displayData());\n',
    validation: {
      consoleExact: ['Data loaded', 'Displaying: Data loaded'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['async', 'sequence', 'fetch']
    }
  },
  {
    concept: 'promises',
    title: 'Promise-like flow',
    kind: 'code',
    instructions:
      'Promises represent future results. Write resolve(value) that returns "Resolved: " + value, and reject(reason) that returns "Rejected: " + reason. If success is true, print resolve("data"), otherwise print reject("timeout"). Set success to true.',
    starterCode:
      'let success = true;\n// function resolve(value) {\n//   return "Resolved: " + value;\n// }\n// function reject(reason) {\n//   return "Rejected: " + reason;\n// }\n// if (success) {\n//   print(resolve("data"));\n// } else {\n//   print(reject("timeout"));\n// }\n',
    validation: {
      consoleExact: ['Resolved: data'],
      requireKeywords: ['function', 'if'],
      explanationKeywords: ['promise', 'resolve', 'reject']
    }
  },
  {
    concept: 'error_handling',
    title: 'Try-catch concept',
    kind: 'code',
    instructions:
      'Error handling catches problems gracefully. Write safeDivide(a, b) that returns "Error: divide by zero" if b == 0, otherwise returns a / b. Print safeDivide(10, 0) and safeDivide(10, 2).',
    starterCode:
      '// function safeDivide(a, b) {\n//   if (b == 0) {\n//     return "Error: divide by zero";\n//   }\n//   return a / b;\n// }\n// print(safeDivide(10, 0));\n// print(safeDivide(10, 2));\n',
    validation: {
      consoleExact: ['Error: divide by zero', '5'],
      requireKeywords: ['function', 'return', 'if'],
      explanationKeywords: ['error', 'catch', 'safe']
    }
  },
  {
    concept: 'debugging',
    title: 'Find the bug',
    kind: 'code',
    instructions:
      'Debugging means finding and fixing errors. The code below has a bug: it prints "Score: 15" but should print "Score: 20". The variable was set to 10 but only incremented once. Fix it so score starts at 10, adds 10, and prints the right value.',
    starterCode: '// let score = 10;\n// score = score + 10;\n// print("Score: " + score);\n',
    validation: {
      consoleExact: ['Score: 20'],
      requireKeywords: ['let'],
      explanationKeywords: ['debug', 'fix', 'trace']
    }
  },
  {
    concept: 'performance',
    title: 'Count loop iterations',
    kind: 'code',
    instructions:
      'Performance means doing less work. Write countSteps(n) that returns n (the number of times a loop would run). If a loop runs 100 times, that is 100 steps. If we can do the same job in 1 step, that is faster. Print countSteps(100).',
    starterCode: '// function countSteps(n) {\n//   return n;\n// }\n// print(countSteps(100));\n',
    validation: {
      consoleExact: ['100'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['performance', 'steps', 'efficiency']
    }
  },
  {
    concept: 'caching',
    title: 'Cache a result',
    kind: 'code',
    instructions:
      'Caching stores a result so you do not recalculate. Create cachedResult = 0 and calculated = false. If calculated is false, compute 5 * 5 and store it, set calculated to true. Print cachedResult. Next time, skip the math.',
    starterCode:
      'let cachedResult = 0;\nlet calculated = false;\n// if (calculated == false) {\n//   cachedResult = 5 * 5;\n//   calculated = true;\n// }\n// print(cachedResult);\n',
    validation: {
      consoleExact: ['25'],
      requireKeywords: ['let', 'if'],
      explanationKeywords: ['cache', 'store', 'reuse']
    }
  },
  {
    concept: 'design_patterns',
    title: 'Factory pattern',
    kind: 'code',
    instructions:
      'A factory creates objects. Write createUser(name) that returns "User: " + name. Call it for three names and print each result. One function, many user objects.',
    starterCode:
      '// function createUser(name) {\n//   return "User: " + name;\n// }\n// print(createUser("Alice"));\n// print(createUser("Bob"));\n// print(createUser("Charlie"));\n',
    validation: {
      consoleExact: ['User: Alice', 'User: Bob', 'User: Charlie'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['factory', 'create', 'pattern']
    }
  },
  {
    concept: 'design_patterns',
    title: 'Singleton pattern',
    kind: 'code',
    instructions:
      'A singleton ensures only one instance exists. Create appState = "default". Write getState() that always returns appState. Print getState(). No matter how many times you call it, it returns the same value.',
    starterCode:
      'let appState = "default";\n// function getState() {\n//   return appState;\n// }\n// print(getState());\n',
    validation: {
      consoleExact: ['default'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['singleton', 'single', 'instance']
    }
  },
  {
    concept: 'architecture',
    title: 'Separation of concerns',
    kind: 'code',
    instructions:
      'Good code separates jobs. Write getData() returning "[1, 2, 3]", renderData(data) returning "Displaying: " + data, and combine them: print renderData(getData()). Each function has one job.',
    starterCode:
      '// function getData() {\n//   return "[1, 2, 3]";\n// }\n// function renderData(data) {\n//   return "Displaying: " + data;\n// }\n// print(renderData(getData()));\n',
    validation: {
      consoleExact: ['Displaying: [1, 2, 3]'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['separate', 'concern', 'single']
    }
  },
  {
    concept: 'api_design',
    title: 'REST API principles',
    kind: 'reference',
    instructions:
      'Read the MDN guide to REST APIs. Your goal: explain what makes an API "RESTful" and why methods like GET, POST, PUT, DELETE matter for web apps.',
    reference: {
      kind: 'docs',
      title: 'MDN: RESTful APIs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods',
      whyKey: 'reference.web.why'
    },
    validation: {
      explanationKeywords: ['rest', 'method', 'get', 'post']
    }
  },
  {
    concept: 'error_messages',
    title: 'Write helpful error messages',
    kind: 'code',
    instructions:
      'Bad error messages say "Error". Good ones say what went wrong and how to fix it. Write validateAge(age) that returns "Age must be a number" if age == "", "Age too low" if age < 0, otherwise "OK". Print validateAge("").',
    starterCode:
      '// function validateAge(age) {\n//   if (age == "") { return "Age must be a number"; }\n//   if (age < 0) { return "Age too low"; }\n//   return "OK";\n// }\n// print(validateAge(""));\n',
    validation: {
      consoleExact: ['Age must be a number'],
      requireKeywords: ['function', 'return', 'if'],
      explanationKeywords: ['error', 'message', 'helpful']
    }
  },
  {
    concept: 'debugging',
    title: 'Trace the output',
    kind: 'code',
    instructions:
      'Tracing means following the code line by line. What does this print? let x = 5; x = x + 3; x = x - 2; print(x). Work it out: 5 + 3 = 8, 8 - 2 = 6. Print the answer.',
    starterCode: 'let x = 5;\nx = x + 3;\nx = x - 2;\n// print(x);\n',
    validation: {
      consoleExact: ['6'],
      requireKeywords: ['let'],
      explanationKeywords: ['trace', 'follow', 'line']
    }
  },
  {
    concept: 'refactoring',
    title: 'Refactor into a function',
    kind: 'code',
    instructions:
      'Refactoring means rewriting code to be cleaner without changing what it does. You have repeated print("Processing order") three times. Extract it into a function processOrder() and call it three times instead.',
    starterCode:
      '// function processOrder() {\n//   print("Processing order");\n// }\n// processOrder();\n// processOrder();\n// processOrder();\n',
    validation: {
      consoleLines: 3,
      consoleIncludes: ['Processing order'],
      requireKeywords: ['function'],
      explanationKeywords: ['refactor', 'extract', 'clean']
    }
  },
  {
    concept: 'code_review',
    title: 'Review this code',
    kind: 'code',
    instructions:
      'Code review means reading code and suggesting improvements. The code below works but uses "x" as a name. Rewrite it with a better name: let temperature = 30; if temperature > 25 print "Too hot".',
    starterCode:
      'let temperature = 30;\n// if (temperature > 25) {\n//   print("Too hot");\n// }\n',
    validation: {
      consoleExact: ['Too hot'],
      requireKeywords: ['let', 'if'],
      explanationKeywords: ['review', 'readable', 'name']
    }
  },
  {
    concept: 'testing',
    title: 'Test your function',
    kind: 'code',
    instructions:
      'Testing means calling a function with known inputs and checking the output. Write add(a, b) returning a + b. Then "test" it: if add(2, 3) == 5 print "Test passed", otherwise print "Test failed".',
    starterCode:
      '// function add(a, b) {\n//   return a + b;\n// }\n// if (add(2, 3) == 5) {\n//   print("Test passed");\n// } else {\n//   print("Test failed");\n// }\n',
    validation: {
      consoleExact: ['Test passed'],
      requireKeywords: ['function', 'if'],
      explanationKeywords: ['test', 'assert', 'verify']
    }
  },
  {
    concept: 'recursion',
    title: 'Sum an array with recursion',
    kind: 'code',
    instructions:
      'Recursion can process lists. Write sumList(arr, i) that returns get(arr, i) + sumList(arr, i + 1) when i < count(arr), otherwise return 0. Call sumList([1, 2, 3], 0) and print the result: 6.',
    starterCode:
      '// function sumList(arr, i) {\n//   if (i < count(arr)) {\n//     return get(arr, i) + sumList(arr, i + 1);\n//   }\n//   return 0;\n// }\n// print(sumList([1, 2, 3], 0));\n',
    validation: {
      consoleExact: ['6'],
      requireKeywords: ['function', 'return', 'if'],
      explanationKeywords: ['recursion', 'sum', 'base case']
    }
  },
  {
    concept: 'sorting',
    title: 'Sort by condition',
    kind: 'code',
    instructions:
      'Sorting can mean ordering by a rule. Create scores [72, 95, 88]. Print "High" for scores >= 90, "Medium" for >= 80, "Low" for < 80. You should see "Low", "High", "Medium".',
    starterCode:
      '// let scores = [72, 95, 88];\n// let i = 0;\n// repeat (count(scores)) {\n//   let s = get(scores, i);\n//   if (s >= 90) { print("High"); }\n//   else if (s >= 80) { print("Medium"); }\n//   else { print("Low"); }\n//   i = i + 1;\n// }\n',
    validation: {
      consoleExact: ['Low', 'High', 'Medium'],
      requireKeywords: ['repeat', 'get', 'if', 'else'],
      explanationKeywords: ['sort', 'categorize', 'rank']
    }
  },
  {
    concept: 'searching',
    title: 'Find all matches',
    kind: 'code',
    instructions:
      'Sometimes you need all matches, not just the first. Create numbers [1, 2, 3, 4, 5, 6]. Loop through and print every number that is divisible by 3 (n % 3 == 0). You should see 3 and 6.',
    starterCode:
      '// let numbers = [1, 2, 3, 4, 5, 6];\n// let i = 0;\n// repeat (count(numbers)) {\n//   if (get(numbers, i) % 3 == 0) {\n//     print(get(numbers, i));\n//   }\n//   i = i + 1;\n// }\n',
    validation: {
      consoleExact: ['3', '6'],
      requireKeywords: ['repeat', 'get', 'if', '%'],
      explanationKeywords: ['search', 'filter', 'all']
    }
  },
  {
    concept: 'state_management',
    title: 'Toggle state',
    kind: 'code',
    instructions:
      'Toggle buttons flip between on and off. Create lightOn = false. If lightOn is false, set it to true and print "Light on". If lightOn is true, set it to false and print "Light off". Run the toggle twice.',
    starterCode:
      'let lightOn = false;\n// if (lightOn == false) {\n//   lightOn = true;\n//   print("Light on");\n// } else {\n//   lightOn = false;\n//   print("Light off");\n// }\n// if (lightOn == false) {\n//   lightOn = true;\n//   print("Light on");\n// } else {\n//   lightOn = false;\n//   print("Light off");\n// }\n',
    validation: {
      consoleExact: ['Light on', 'Light off'],
      requireKeywords: ['if', 'else'],
      explanationKeywords: ['toggle', 'flip', 'state']
    }
  },
  {
    concept: 'caching',
    title: 'Memoization pattern',
    kind: 'code',
    instructions:
      'Memoization caches function results. Create cached5 = 0 and has5 = false. If has5 is false, compute 5 * 5 and store in cached5, set has5 to true. Print cached5. Next call would skip recomputing.',
    starterCode:
      'let cached5 = 0;\nlet has5 = false;\n// if (has5 == false) {\n//   cached5 = 5 * 5;\n//   has5 = true;\n// }\n// print(cached5);\n',
    validation: {
      consoleExact: ['25'],
      requireKeywords: ['let', 'if'],
      explanationKeywords: ['memoize', 'cache', 'optimize']
    }
  },
  {
    concept: 'events',
    title: 'Event dispatch pattern',
    kind: 'code',
    instructions:
      'Events carry a type and data. Write onEvent(type, data) that returns "Event " + type + ": " + data. Call it with ("click", "Submit") and ("focus", "email field"). Each call handles a different event.',
    starterCode:
      '// function onEvent(type, data) {\n//   return "Event " + type + ": " + data;\n// }\n// print(onEvent("click", "Submit"));\n// print(onEvent("focus", "email field"));\n',
    validation: {
      consoleExact: ['Event click: Submit', 'Event focus: email field'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['event', 'dispatch', 'handler']
    }
  },
  {
    concept: 'architecture',
    title: 'MVC pattern concept',
    kind: 'code',
    instructions:
      'MVC separates Model (data), View (display), and Controller (logic). Write getModel() returning "{name: Ada}", getView(data) returning "Rendering: {name: Ada}", and connect them: print getView(getModel()).',
    starterCode:
      '// function getModel() {\n//   return "{name: Ada}";\n// }\n// function getView(data) {\n//   return "Rendering: " + data;\n// }\n// print(getView(getModel()));\n',
    validation: {
      consoleExact: ['Rendering: {name: Ada}'],
      requireKeywords: ['function'],
      explanationKeywords: ['mvc', 'model', 'view']
    }
  },
  {
    concept: 'performance',
    title: 'Avoid unnecessary work',
    kind: 'code',
    instructions:
      'Two loops can do the same job, but one does less work. Write efficient(n) that returns n (one step) vs inefficient(n) that loops n times counting. If inefficient(1000) does 1000 steps and efficient(1000) does 1, print "Efficient: 1 vs 1000 steps".',
    starterCode:
      '// function efficient(n) {\n//   return n;\n// }\n// function inefficient(n) {\n//   let count = 0;\n//   let i = 0;\n//   repeat (n) {\n//     count = count + 1;\n//     i = i + 1;\n//   }\n//   return count;\n// }\n// print("Efficient: " + efficient(1000) + " vs " + inefficient(1000) + " steps");\n',
    validation: {
      consoleExact: ['Efficient: 1000 vs 1000 steps'],
      requireKeywords: ['function', 'repeat'],
      explanationKeywords: ['performance', 'efficient', 'work']
    }
  },
  {
    concept: 'debugging',
    title: 'Off by one error',
    kind: 'code',
    instructions:
      'Off-by-one errors are the most common bugs. Print numbers 1 to 5 using a loop. Start at 1, repeat 5 times, print the number, then increment. Make sure you see exactly 5 numbers.',
    starterCode: '// let n = 1;\n// repeat (5) {\n//   print(n);\n//   n = n + 1;\n// }\n',
    validation: {
      consoleExact: ['1', '2', '3', '4', '5'],
      requireKeywords: ['repeat'],
      explanationKeywords: ['off by one', 'boundary', 'count']
    }
  },
  {
    concept: 'design_patterns',
    title: 'Observer pattern',
    kind: 'code',
    instructions:
      'The Observer pattern lets objects watch for changes. Write subscribe(name) returning name + " is listening" and notify(subscriber) returning "Notifying: " + subscriber. Print notify(subscribe("App")).',
    starterCode:
      '// function subscribe(name) {\n//   return name + " is listening";\n// }\n// function notify(subscriber) {\n//   return "Notifying: " + subscriber;\n// }\n// print(notify(subscribe("App")));\n',
    validation: {
      consoleExact: ['Notifying: App is listening'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['observer', 'subscribe', 'notify']
    }
  },
  {
    concept: 'testing',
    title: 'Multiple test cases',
    kind: 'code',
    instructions:
      'Good tests check many inputs. Write isPositive(n) returning "yes" if n > 0, otherwise "no". Test it: isPositive(5) should say "yes", isPositive(-3) should say "no", isPositive(0) should say "no".',
    starterCode:
      '// function isPositive(n) {\n//   if (n > 0) { return "yes"; }\n//   return "no";\n// }\n// print(isPositive(5));\n// print(isPositive(-3));\n// print(isPositive(0));\n',
    validation: {
      consoleExact: ['yes', 'no', 'no'],
      requireKeywords: ['function', 'return', 'if'],
      explanationKeywords: ['test', 'cases', 'edge']
    }
  },
  {
    concept: 'api_design',
    title: 'Build a consistent API',
    kind: 'code',
    instructions:
      'Good APIs are consistent. Write getUser() returning "{id: 1, name: Ada}", getOrder() returning "{id: 10, total: 50}", and getBoth() returning getUser() + " + " + getOrder(). Print getBoth().',
    starterCode:
      '// function getUser() {\n//   return "{id: 1, name: Ada}";\n// }\n// function getOrder() {\n//   return "{id: 10, total: 50}";\n// }\n// function getBoth() {\n//   return getUser() + " + " + getOrder();\n// }\n// print(getBoth());\n',
    validation: {
      consoleExact: ['{id: 1, name: Ada} + {id: 10, total: 50}'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['api', 'consistent', 'interface']
    }
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MASTERY (web-131 → web-150)
  // Reference pages for key web concepts with real URLs.
  // ═══════════════════════════════════════════════════════════════════════════

  {
    concept: 'http',
    title: 'How HTTP works',
    kind: 'reference',
    instructions:
      'Read the MDN guide to HTTP (HyperText Transfer Protocol). Your goal: explain what a request and a response look like when your browser fetches a page.',
    reference: {
      kind: 'docs',
      title: 'MDN: HTTP overview',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview',
      whyKey: 'reference.web.why'
    },
    validation: {
      explanationKeywords: ['http', 'request', 'response']
    }
  },
  {
    concept: 'rest',
    title: 'RESTful API design',
    kind: 'reference',
    instructions:
      'Read about REST APIs on MDN. Your goal: explain what makes an API "RESTful" and why we use different methods (GET, POST, PUT, DELETE) for different operations.',
    reference: {
      kind: 'docs',
      title: 'MDN: Designing a REST API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods',
      whyKey: 'reference.web.why'
    },
    validation: {
      explanationKeywords: ['rest', 'method', 'resource']
    }
  },
  {
    concept: 'dom',
    title: 'The Document Object Model',
    kind: 'reference',
    instructions:
      'Read the MDN guide to the DOM. Your goal: explain what the DOM is and why JavaScript uses it to change what a page looks like without reloading.',
    reference: {
      kind: 'docs',
      title: 'MDN: Introduction to the DOM',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction',
      whyKey: 'reference.web.why'
    },
    validation: {
      explanationKeywords: ['dom', 'document', 'tree']
    }
  },
  {
    concept: 'box_model',
    title: 'The CSS Box Model',
    kind: 'reference',
    instructions:
      'Read the MDN guide to the CSS box model. Your goal: explain what margin, border, padding, and content are and how they stack to make up every element on a page.',
    reference: {
      kind: 'docs',
      title: 'MDN: CSS Box Model',
      url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model',
      whyKey: 'reference.web.why'
    },
    validation: {
      explanationKeywords: ['box', 'margin', 'padding']
    }
  },
  {
    concept: 'flexbox',
    title: 'Flexbox layout',
    kind: 'reference',
    instructions:
      'Read the CSS-Tricks guide to flexbox. Your goal: explain what a flex container and a flex item are, and why flexbox makes centering and spacing elements easier.',
    reference: {
      kind: 'docs',
      title: 'CSS-Tricks: A Complete Guide to Flexbox',
      url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
      whyKey: 'reference.web.why'
    },
    validation: {
      explanationKeywords: ['flex', 'container', 'alignment']
    }
  },
  {
    concept: 'git',
    title: 'Git version control basics',
    kind: 'reference',
    instructions:
      'Read the GitHub Git learning guide. Your goal: explain what version control is and why developers use it to track changes and collaborate.',
    reference: {
      kind: 'docs',
      title: 'GitHub: Git Learning',
      url: 'https://docs.github.com/en/get-started/getting-started-with-git/about-git',
      whyKey: 'reference.web.why'
    },
    validation: {
      explanationKeywords: ['git', 'version', 'commit']
    }
  },
  {
    concept: 'dev_tools',
    title: 'Browser developer tools',
    kind: 'reference',
    instructions:
      'Read the MDN guide to browser developer tools. Your goal: explain what the Elements panel, Console, and Network tab do and when you would use each one.',
    reference: {
      kind: 'docs',
      title: 'MDN: Web Developer Tools',
      url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools',
      whyKey: 'reference.web.why'
    },
    validation: {
      explanationKeywords: ['devtools', 'console', 'inspect']
    }
  },
  {
    concept: 'accessibility',
    title: 'Web accessibility (a11y)',
    kind: 'reference',
    instructions:
      'Read the MDN accessibility guide. Your goal: explain why alt text on images, semantic HTML, and keyboard navigation matter for people who use assistive technology.',
    reference: {
      kind: 'docs',
      title: 'MDN: Accessibility',
      url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility',
      whyKey: 'reference.web.why'
    },
    validation: {
      explanationKeywords: ['accessibility', 'screen reader', 'aria']
    }
  },
  {
    concept: 'responsive_design',
    title: 'Responsive design',
    kind: 'reference',
    instructions:
      'Read the MDN guide to responsive design. Your goal: explain what media queries are and why a website should look good on both phones and desktops.',
    reference: {
      kind: 'docs',
      title: 'MDN: Responsive Design',
      url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design',
      whyKey: 'reference.web.why'
    },
    validation: {
      explanationKeywords: ['responsive', 'media query', 'mobile']
    }
  },
  {
    concept: 'web_security',
    title: 'Web security basics',
    kind: 'reference',
    instructions:
      'Read the OWASP introduction to web security. Your goal: explain what XSS (cross-site scripting) and CSRF (cross-site request forgery) are and why they are dangerous.',
    reference: {
      kind: 'docs',
      title: 'OWASP: Top 10 Web Application Security Risks',
      url: 'https://owasp.org/www-project-top-ten/',
      whyKey: 'reference.web.why'
    },
    validation: {
      explanationKeywords: ['security', 'xss', 'injection']
    }
  },
  {
    concept: 'databases',
    title: 'Databases for the web',
    kind: 'reference',
    instructions:
      'Read the MDN guide to working with data and databases. Your goal: explain what a database is and why web apps need one to remember user data across sessions.',
    reference: {
      kind: 'docs',
      title: 'MDN: Working with data',
      url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Introduction',
      whyKey: 'reference.web.why'
    },
    validation: {
      explanationKeywords: ['database', 'persist', 'query']
    }
  },
  {
    concept: 'deployment',
    title: 'How websites get deployed',
    kind: 'reference',
    instructions:
      'Watch Fireship explain how modern web deployment works in under 100 seconds. Your goal: explain what a CDN is and why deploying to one makes a website load faster for users worldwide.',
    reference: {
      kind: 'video',
      title: 'Fireship: Deployment in 100 seconds',
      url: 'https://www.youtube.com/c/Fireship',
      whyKey: 'reference.web.why'
    },
    validation: {
      explanationKeywords: ['deploy', 'cdn', 'hosting']
    }
  },
  {
    concept: 'pwa',
    title: 'Progressive Web Apps',
    kind: 'reference',
    instructions:
      'Read the MDN guide to Progressive Web Apps (PWAs). Your goal: explain what makes a web app "progressive" and how service workers let a website work offline.',
    reference: {
      kind: 'docs',
      title: 'MDN: Progressive Web Apps',
      url: 'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps',
      whyKey: 'reference.web.why'
    },
    validation: {
      explanationKeywords: ['pwa', 'offline', 'service worker']
    }
  },
  {
    concept: 'web_components',
    title: 'Web Components',
    kind: 'reference',
    instructions:
      'Read the MDN guide to Web Components. Your goal: explain what custom elements are and why building reusable components helps teams share code across projects.',
    reference: {
      kind: 'docs',
      title: 'MDN: Web Components',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_components',
      whyKey: 'reference.web.why'
    },
    validation: {
      explanationKeywords: ['component', 'custom element', 'shadow dom']
    }
  },
  {
    concept: 'web_sockets',
    title: 'WebSockets for real-time data',
    kind: 'reference',
    instructions:
      'Read the MDN guide to WebSockets. Your goal: explain the difference between HTTP (the browser asks for data) and WebSockets (the server can push data anytime) and when you would use each.',
    reference: {
      kind: 'docs',
      title: 'MDN: WebSockets',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API',
      whyKey: 'reference.web.why'
    },
    validation: {
      explanationKeywords: ['websocket', 'real-time', 'bidirectional']
    }
  },
  {
    concept: 'service_workers',
    title: 'Service workers and caching',
    kind: 'reference',
    instructions:
      'Read the MDN guide to service workers. Your goal: explain what a service worker does (intercepts network requests) and why it is the backbone of offline web apps.',
    reference: {
      kind: 'docs',
      title: 'MDN: Service Workers',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API',
      whyKey: 'reference.web.why'
    },
    validation: {
      explanationKeywords: ['service worker', 'cache', 'intercept']
    }
  },
  {
    concept: 'seo',
    title: 'Search Engine Optimization basics',
    kind: 'reference',
    instructions:
      'Read the MDN guide to SEO. Your goal: explain what meta tags, semantic HTML, and descriptive titles do to help search engines understand and rank a page.',
    reference: {
      kind: 'docs',
      title: 'MDN: SEO basics',
      url: 'https://developer.mozilla.org/en-US/docs/Glossary/SEO',
      whyKey: 'reference.web.why'
    },
    validation: {
      explanationKeywords: ['seo', 'meta', 'search engine']
    }
  },
  {
    concept: 'performance_opt',
    title: 'Web performance optimization',
    kind: 'reference',
    instructions:
      'Read the web.dev guide to performance. Your goal: explain what lazy loading, code splitting, and minification are and why faster pages keep users happier.',
    reference: {
      kind: 'docs',
      title: 'web.dev: Learn Performance',
      url: 'https://web.dev/learn/performance',
      whyKey: 'reference.web.why'
    },
    validation: {
      explanationKeywords: ['performance', 'lazy load', 'optimize']
    }
  },
  {
    concept: 'progressive_enhancement',
    title: 'Progressive enhancement',
    kind: 'reference',
    instructions:
      'Read about progressive enhancement. Your goal: explain the idea that a website should work for everyone first (basic HTML) and then add fancy features only if the browser supports them.',
    reference: {
      kind: 'docs',
      title: 'MDN: Progressive Enhancement',
      url: 'https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement',
      whyKey: 'reference.web.why'
    },
    validation: {
      explanationKeywords: ['progressive', 'enhancement', 'fallback']
    }
  },
  {
    concept: 'capstone',
    title: 'Capstone: build a mini site',
    kind: 'code',
    instructions:
      'Put it all together. Write a function renderPage(title, items) that prints the title as a heading, then loops through items printing each as an li tag. Call it with "My Shop" and ["Shoes", "Hat", "Belt"]. This is how real websites generate pages from data.',
    starterCode:
      '// function renderPage(title, items) {\n//   print("<h1>" + title + "</h1>");\n//   let i = 0;\n//   repeat (count(items)) {\n//     print("<li>" + get(items, i) + "</li>");\n//     i = i + 1;\n//   }\n// }\n// renderPage("My Shop", ["Shoes", "Hat", "Belt"]);\n',
    validation: {
      consoleExact: ['<h1>My Shop</h1>', '<li>Shoes</li>', '<li>Hat</li>', '<li>Belt</li>'],
      requireKeywords: ['function', 'repeat', 'get', 'count'],
      explanationKeywords: ['capstone', 'template', 'generate']
    }
  }
]
