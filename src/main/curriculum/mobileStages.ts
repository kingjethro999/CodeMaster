// Mobile career path stages: mobile-11 through mobile-150
// Appends to the existing 10-stage foundation in data.ts

import type { StageSeed } from './data'

export const mobileStagesExtended: StageSeed[] = [
  // ─── FOUNDATION (11-25) ────────────────────────────────────────────
  {
    concept: 'app_state',
    title: 'App state variables',
    kind: 'code',
    instructions:
      'Every app remembers things: is the user logged in? What screen are they on? Store "home" in a variable called screen, then print "Current screen: " + screen.',
    starterCode: '// let screen = "home";\n// print("Current screen: " + screen);\n',
    validation: {
      consoleExact: ['Current screen: home'],
      requireKeywords: ['let'],
      explanationKeywords: ['variable', 'state']
    }
  },
  {
    concept: 'screen_routing',
    title: 'Screen routing',
    kind: 'code',
    instructions:
      'Apps decide which screen to show based on a variable. If screen equals "login", print "Showing login screen", otherwise print "Showing home screen". Set screen to "login".',
    starterCode: 'let screen = "login";\n// if (screen == "login") { ... } else { ... }\n',
    validation: {
      consoleExact: ['Showing login screen'],
      requireKeywords: ['if'],
      explanationKeywords: ['condition', 'route']
    }
  },
  {
    concept: 'nested_conditions',
    title: 'User role checks',
    kind: 'code',
    instructions:
      'An app shows different things for different users. If loggedIn is true, then check if role equals "admin" and print "Admin panel", otherwise print "User dashboard". If not logged in, print "Please sign in".',
    starterCode:
      'let loggedIn = true;\nlet role = "admin";\n// if (loggedIn) {\n//   if (role == "admin") { ... } else { ... }\n// } else { ... }\n',
    validation: {
      consoleExact: ['Admin panel'],
      requireKeywords: ['if', 'else'],
      explanationKeywords: ['nested', 'role']
    }
  },
  {
    concept: 'string_building',
    title: 'UI labels',
    kind: 'code',
    instructions:
      'Apps build text from parts. Store firstName as "Ada" and lastName as "Lovelace", then print fullName built from firstName + " " + lastName.',
    starterCode:
      'let firstName = "Ada";\nlet lastName = "Lovelace";\n// let fullName = firstName + " " + lastName;\n// print(fullName);\n',
    validation: {
      consoleExact: ['Ada Lovelace'],
      requireKeywords: ['+'],
      explanationKeywords: ['concatenate', 'string']
    }
  },
  {
    concept: 'toggle_states',
    title: 'Toggle switches',
    kind: 'code',
    instructions:
      'Mobile apps have toggle switches for settings. Create a boolean called darkMode set to false. If darkMode is false, print "Light theme active".',
    starterCode: 'let darkMode = false;\n// if (darkMode == false) { ... }\n',
    validation: {
      consoleExact: ['Light theme active'],
      requireKeywords: ['if'],
      explanationKeywords: ['boolean', 'toggle']
    }
  },
  {
    concept: 'notification_counter',
    title: 'Notification badges',
    kind: 'code',
    instructions:
      'That little red dot on app icons shows a count. Start with badges at 0. Add 3 to it, then print "Badge count: " + badges.',
    starterCode: 'let badges = 0;\n// badges = badges + 3;\n// print("Badge count: " + badges);\n',
    validation: {
      consoleExact: ['Badge count: 3'],
      requireKeywords: ['let'],
      explanationKeywords: ['counter', 'badge']
    }
  },
  {
    concept: 'screen_state',
    title: 'Variables as screen state',
    kind: 'code',
    instructions:
      'The whole screen can be described with variables. Set title to "Settings" and subtitle to "Manage your prefs". Print both on one line: title + " - " + subtitle.',
    starterCode:
      'let title = "Settings";\nlet subtitle = "Manage your prefs";\n// print(title + " - " + subtitle);\n',
    validation: {
      consoleExact: ['Settings - Manage your prefs'],
      requireKeywords: ['+'],
      explanationKeywords: ['state', 'display']
    }
  },
  {
    concept: 'elseif_chains',
    title: 'Multi-screen apps',
    kind: 'code',
    instructions:
      'Real apps have many screens. If screen equals "home" print "Home", else if screen equals "profile" print "Profile", else if screen equals "settings" print "Settings", else print "Unknown screen". Set screen to "profile".',
    starterCode:
      'let screen = "profile";\n// if (screen == "home") { ... }\n// else if (screen == "profile") { ... }\n// else if (screen == "settings") { ... }\n// else { ... }\n',
    validation: {
      consoleExact: ['Profile'],
      requireKeywords: ['if', 'else'],
      explanationKeywords: ['elseif', 'route']
    }
  },
  {
    concept: 'comparison_operators',
    title: 'Form validation',
    kind: 'code',
    instructions:
      'Apps check form fields before submitting. If age is greater than or equal to 13, print "Old enough to sign up". Otherwise print "You must be 13 or older". Set age to 13.',
    starterCode: 'let age = 13;\n// if (age >= 13) { ... } else { ... }\n',
    validation: {
      consoleExact: ['Old enough to sign up'],
      requireKeywords: ['if'],
      explanationKeywords: ['comparison', 'validate']
    }
  },
  {
    concept: 'increment_counter',
    title: 'Incrementing counters',
    kind: 'code',
    instructions:
      'Every tap on a like button adds one. Start likes at 0, add 1 five times using a loop, then print "Likes: " + likes.',
    starterCode:
      'let likes = 0;\n// repeat (5) { likes = likes + 1; }\n// print("Likes: " + likes);\n',
    validation: {
      consoleExact: ['Likes: 5'],
      requireKeywords: ['repeat'],
      explanationKeywords: ['increment', 'loop']
    }
  },
  {
    concept: 'naming_variables',
    title: 'Naming app variables',
    kind: 'code',
    instructions:
      'Good names help your future self. Instead of x = 10, use a name that says what it means. Store 10 in a variable called messageCount and print "Messages: " + messageCount.',
    starterCode: '// let messageCount = 10;\n// print("Messages: " + messageCount);\n',
    validation: {
      consoleExact: ['Messages: 10'],
      requireKeywords: ['let'],
      explanationKeywords: ['naming', 'readable']
    }
  },
  {
    concept: 'code_comments',
    title: 'Comments in app code',
    kind: 'code',
    instructions:
      'Developers leave notes for themselves and teammates. Write a comment explaining what the next line does, then store appName = "CodeMaster" and print it.',
    starterCode:
      '// Write a comment first (starts with //)\n// then: let appName = "CodeMaster";\n// print(appName);\n',
    validation: {
      consoleExact: ['CodeMaster'],
      requireKeywords: ['let'],
      explanationKeywords: ['comment', 'explain']
    }
  },
  {
    concept: 'variable_scope',
    title: 'Scope in widget context',
    kind: 'code',
    instructions:
      'Variables created inside a block only live inside that block. Inside a repeat(2) loop, let x = 1 and print "Inner: " + x. Outside the loop, let y = 2 and print "Outer: " + y.',
    starterCode:
      '// repeat (2) {\n//   let x = 1;\n//   print("Inner: " + x);\n// }\n// let y = 2;\n// print("Outer: " + y);\n',
    validation: {
      consoleLines: 3,
      consoleIncludes: ['Inner: 1', 'Outer: 2'],
      requireKeywords: ['repeat', 'let'],
      explanationKeywords: ['scope', 'variable']
    }
  },
  {
    concept: 'functions_params',
    title: 'Functions with parameters',
    kind: 'code',
    instructions:
      'A dialog box shows different messages. Write greet(name) that prints "Hello, " + name, then call greet("Ada") and greet("Bob").',
    starterCode:
      '// function greet(name) {\n//   print("Hello, " + name);\n// }\n// greet("Ada");\n// greet("Bob");\n',
    validation: {
      consoleExact: ['Hello, Ada', 'Hello, Bob'],
      requireKeywords: ['function'],
      explanationKeywords: ['parameter', 'function']
    }
  },
  {
    concept: 'return_values',
    title: 'Computed display value',
    kind: 'code',
    instructions:
      'Functions can give back a value. Write double(n) that returns n * 2, store the result of double(7) in result, then print "Double: " + result.',
    starterCode:
      '// function double(n) {\n//   return n * 2;\n// }\n// let result = double(7);\n// print("Double: " + result);\n',
    validation: {
      consoleExact: ['Double: 14'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['return', 'compute']
    }
  },

  // ─── CORE (26-50) ──────────────────────────────────────────────────
  {
    concept: 'arrays_basics',
    title: 'List items',
    kind: 'code',
    instructions:
      'Mobile apps show lists of things: contacts, messages, photos. Create a list called items with "Milk", "Eggs", "Bread". Print the first item with get(items, 0).',
    starterCode: 'let items = ["Milk", "Eggs", "Bread"];\n// print(get(items, 0));\n',
    validation: {
      consoleExact: ['Milk'],
      requireKeywords: ['get'],
      explanationKeywords: ['array', 'index']
    }
  },
  {
    concept: 'iterating_lists',
    title: 'Render lists',
    kind: 'code',
    instructions:
      'Apps render each item in a list. Create a list of screen names ["Home", "Profile", "Settings"]. Use a repeat loop that runs count(items) times and prints each item with get(items, i).',
    starterCode:
      'let items = ["Home", "Profile", "Settings"];\nlet i = 0;\n// repeat (count(items)) {\n//   print(get(items, i));\n//   i = i + 1;\n// }\n',
    validation: {
      consoleExact: ['Home', 'Profile', 'Settings'],
      requireKeywords: ['repeat', 'get', 'count'],
      explanationKeywords: ['iterate', 'list']
    }
  },
  {
    concept: 'string_patterns',
    title: 'Route matching',
    kind: 'code',
    instructions:
      'Apps match URL-like routes to screens. Store route as "/users/profile". If route equals "/users/profile", print "Profile screen". This is how navigation works.',
    starterCode: 'let route = "/users/profile";\n// if (route == "/users/profile") { ... }\n',
    validation: {
      consoleExact: ['Profile screen'],
      requireKeywords: ['if'],
      explanationKeywords: ['pattern', 'route']
    }
  },
  {
    concept: 'nested_loops',
    title: 'Nested lists',
    kind: 'code',
    instructions:
      'Some lists contain lists. Store pages as [["Page 1", "Page 2"], ["Page 3", "Page 4"]]. Print each inner list using nested repeat loops.',
    starterCode:
      'let pages = [["Page 1", "Page 2"], ["Page 3", "Page 4"]];\nlet row = 0;\n// repeat (count(pages)) {\n//   let col = 0;\n//   let rowItems = get(pages, row);\n//   repeat (count(rowItems)) {\n//     print(get(rowItems, col));\n//     col = col + 1;\n//   }\n//   row = row + 1;\n// }\n',
    validation: {
      consoleExact: ['Page 1', 'Page 2', 'Page 3', 'Page 4'],
      requireKeywords: ['repeat', 'get', 'count'],
      explanationKeywords: ['nested', 'matrix']
    }
  },
  {
    concept: 'builder_pattern',
    title: 'Functions returning functions',
    kind: 'code',
    instructions:
      'Builder patterns let you configure widgets. Write makeAdder(base) that returns base + a value. Call it to add 10 to 5 and print the result.',
    starterCode:
      '// function makeAdder(base) {\n//   return base + 5;\n// }\n// let result = makeAdder(10);\n// print(result);\n',
    validation: {
      consoleExact: ['15'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['builder', 'factory']
    }
  },
  {
    concept: 'utility_functions',
    title: 'Format date helper',
    kind: 'code',
    instructions:
      'Apps format data for display. Write formatDate(day, month) that returns day + "/" + month. Print formatDate(15, 6).',
    starterCode:
      '// function formatDate(day, month) {\n//   return day + "/" + month;\n// }\n// print(formatDate(15, 6));\n',
    validation: {
      consoleExact: ['15/6'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['utility', 'format']
    }
  },
  {
    concept: 'truncate_text',
    title: 'Truncate long text',
    kind: 'code',
    instructions:
      'When text is too long for a card, apps cut it short. Write truncate(text, maxLen) that prints text if it is shorter than maxLen, otherwise prints the first maxLen characters. In MasterScript, use repeat and string building. Call truncate("Hello World", 5).',
    starterCode:
      '// function truncate(text, maxLen) {\n//   let result = "";\n//   let i = 0;\n//   repeat (maxLen) {\n//     result = result + text[i];\n//     i = i + 1;\n//   }\n//   print(result);\n// }\n// truncate("Hello World", 5);\n',
    validation: {
      consoleExact: ['Hello'],
      requireKeywords: ['function', 'repeat'],
      explanationKeywords: ['truncate', 'limit']
    }
  },
  {
    concept: 'composition',
    title: 'Combine widget logic',
    kind: 'code',
    instructions:
      'Widgets are built by combining smaller pieces. Write getGreeting(name, isLoggedIn) that prints "Welcome back, " + name if logged in, or "Hi, " + name if not. Call it with getGreeting("Ada", true).',
    starterCode:
      '// function getGreeting(name, isLoggedIn) {\n//   if (isLoggedIn) {\n//     print("Welcome back, " + name);\n//   } else {\n//     print("Hi, " + name);\n//   }\n// }\n// getGreeting("Ada", true);\n',
    validation: {
      consoleExact: ['Welcome back, Ada'],
      requireKeywords: ['function', 'if'],
      explanationKeywords: ['compose', 'combine']
    }
  },
  {
    concept: 'code_reuse',
    title: 'Shared components',
    kind: 'code',
    instructions:
      'Instead of copying code, reuse it. Write printCard(title, subtitle) that prints both, then call it twice with different values to make two cards.',
    starterCode:
      '// function printCard(title, subtitle) {\n//   print(title + " - " + subtitle);\n// }\n// printCard("Welcome", "Sign in to continue");\n// printCard("Hello", "Nice to see you");\n',
    validation: {
      consoleExact: ['Welcome - Sign in to continue', 'Hello - Nice to see you'],
      requireKeywords: ['function'],
      explanationKeywords: ['reuse', 'component']
    }
  },
  {
    concept: 'dry_principle',
    title: 'DRY in mobile',
    kind: 'code',
    instructions:
      'DRY means "Do Not Repeat Yourself". Instead of writing print("Loading...") three times, write a showLoading() function and call it three times.',
    starterCode:
      '// function showLoading() {\n//   print("Loading...");\n// }\n// showLoading();\n// showLoading();\n// showLoading();\n',
    validation: {
      consoleLines: 3,
      consoleIncludes: ['Loading...'],
      requireKeywords: ['function'],
      explanationKeywords: ['DRY', 'reuse']
    }
  },
  {
    concept: 'array_indexing_tabs',
    title: 'Array indexing for tabs',
    kind: 'code',
    instructions:
      'Tab bars use an index to pick which screen to show. Store tabs as ["Home", "Search", "Profile"]. If activeTab is 1, print "Active: " + get(tabs, 1).',
    starterCode:
      'let tabs = ["Home", "Search", "Profile"];\nlet activeTab = 1;\n// print("Active: " + get(tabs, activeTab));\n',
    validation: {
      consoleExact: ['Active: Search'],
      requireKeywords: ['get'],
      explanationKeywords: ['index', 'tabs']
    }
  },
  {
    concept: 'push_navigation',
    title: 'Push for navigation stack',
    kind: 'code',
    instructions:
      'Navigation works like a stack of screens. Create an empty list called navStack. Push "Home", then push "Profile". Print "Stack size: " + count(navStack).',
    starterCode:
      'let navStack = [];\n// push(navStack, "Home");\n// push(navStack, "Profile");\n// print("Stack size: " + count(navStack));\n',
    validation: {
      consoleExact: ['Stack size: 2'],
      requireKeywords: ['push', 'count'],
      explanationKeywords: ['stack', 'push']
    }
  },
  {
    concept: 'count_items',
    title: 'Count for item count',
    kind: 'code',
    instructions:
      'Badge counts and list lengths both use count(). Create messages = ["Hi", "Hey", "Hello"]. Print "You have " + count(messages) + " messages".',
    starterCode:
      'let messages = ["Hi", "Hey", "Hello"];\n// print("You have " + count(messages) + " messages");\n',
    validation: {
      consoleExact: ['You have 3 messages'],
      requireKeywords: ['count'],
      explanationKeywords: ['count', 'length']
    }
  },
  {
    concept: 'get_route_params',
    title: 'Get for route params',
    kind: 'code',
    instructions:
      'Route parameters are values passed in the URL. Store params as ["user", "42"]. Print "Viewing user " + get(params, 1).',
    starterCode: 'let params = ["user", "42"];\n// print("Viewing user " + get(params, 1));\n',
    validation: {
      consoleExact: ['Viewing user 42'],
      requireKeywords: ['get'],
      explanationKeywords: ['parameter', 'route']
    }
  },
  {
    concept: 'mobile_loops_block',
    title: 'Draw a grid of icons',
    kind: 'block',
    instructions:
      'App home screens show a grid of icons. Use repeat and forward blocks to draw a row of three evenly spaced squares, like an app grid.',
    palette: ['repeat', 'forward', 'right', 'left', 'penColor', 'clear'],
    validation: {
      requireBlockTypes: ['repeat', 'forward'],
      explanationKeywords: ['repeat', 'grid']
    }
  },
  {
    concept: 'list_filter',
    title: 'Filter a list',
    kind: 'code',
    instructions:
      'Search boxes filter lists. Create numbers = [1, 2, 3, 4, 5, 6]. Write a loop that prints only the even ones by checking if n % 2 == 0.',
    starterCode:
      'let numbers = [1, 2, 3, 4, 5, 6];\nlet i = 0;\n// repeat (count(numbers)) {\n//   let n = get(numbers, i);\n//   if (n % 2 == 0) {\n//     print(n);\n//   }\n//   i = i + 1;\n// }\n',
    validation: {
      consoleExact: ['2', '4', '6'],
      requireKeywords: ['repeat', 'if', '%'],
      explanationKeywords: ['filter', 'condition']
    }
  },
  {
    concept: 'mobile_builder_block',
    title: 'Build a sidebar menu',
    kind: 'block',
    instructions:
      'Drawer menus are tall vertical lists. Use repeat blocks to draw a vertical column of horizontal lines, like menu items stacked on top of each other.',
    palette: ['repeat', 'forward', 'back', 'right', 'left', 'penColor', 'clear'],
    validation: {
      requireBlockTypes: ['repeat', 'forward', 'back'],
      explanationKeywords: ['menu', 'list']
    }
  },
  {
    concept: 'string_methods',
    title: 'String length helper',
    kind: 'code',
    instructions:
      'Apps need to know how long text is. Write strLen(text) that returns the number of characters by looping through and counting. Call strLen("Hi") and print the result.',
    starterCode:
      '// function strLen(text) {\n//   let count = 0;\n//   let i = 0;\n//   repeat (100) {\n//     if (text[i] == undefined) {\n//       return count;\n//     }\n//     count = count + 1;\n//     i = i + 1;\n//   }\n//   return count;\n// }\n// print(strLen("Hi"));\n',
    validation: {
      consoleExact: ['2'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['string', 'length', 'count']
    }
  },
  {
    concept: 'map_data',
    title: 'Key-value maps',
    kind: 'code',
    instructions:
      'Maps store pairs of keys and values, like a dictionary. Create a map called user with name "Ada" and age 28. Print "User: " + user["name"].',
    starterCode: 'let user = { "name": "Ada", "age": 28 };\n// print("User: " + user["name"]);\n',
    validation: {
      consoleExact: ['User: Ada'],
      requireKeywords: ['let'],
      explanationKeywords: ['map', 'key', 'value']
    }
  },
  {
    concept: 'stack_push_pop',
    title: 'Stack push and pop',
    kind: 'code',
    instructions:
      'A navigation stack pushes screens on and pops them off. Create screens = []. Push "Home", push "Profile", push "Settings". Pop the last one off and print "Back to: " + get(screens, count(screens) - 1).',
    starterCode:
      'let screens = [];\n// push(screens, "Home");\n// push(screens, "Profile");\n// push(screens, "Settings");\n// print("Back to: " + get(screens, count(screens) - 1));\n',
    validation: {
      consoleExact: ['Back to: Profile'],
      requireKeywords: ['push', 'get', 'count'],
      explanationKeywords: ['stack', 'push', 'pop']
    }
  },
  {
    concept: 'clamp_value',
    title: 'Clamp values for UI',
    kind: 'code',
    instructions:
      'Sliders and progress bars clamp values between a min and max. Write clamp(val, minVal, maxVal) that returns minVal if val is less, maxVal if val is more, or val otherwise. Call clamp(15, 0, 10).',
    starterCode:
      '// function clamp(val, minVal, maxVal) {\n//   if (val < minVal) {\n//     return minVal;\n//   }\n//   if (val > maxVal) {\n//     return maxVal;\n//   }\n//   return val;\n// }\n// print(clamp(15, 0, 10));\n',
    validation: {
      consoleExact: ['10'],
      requireKeywords: ['function', 'if', 'return'],
      explanationKeywords: ['clamp', 'min', 'max']
    }
  },
  {
    concept: 'string_interpolation',
    title: 'Template strings',
    kind: 'code',
    instructions:
      'Template strings build text with variables inside. Create name = "Sam" and age = 10. Print "I am " + name + " and I am " + age + " years old".',
    starterCode:
      'let name = "Sam";\nlet age = 10;\n// print("I am " + name + " and I am " + age + " years old");\n',
    validation: {
      consoleExact: ['I am Sam and I am 10 years old'],
      requireKeywords: ['+'],
      explanationKeywords: ['interpolation', 'template']
    }
  },
  {
    concept: 'empty_check',
    title: 'Empty state check',
    kind: 'code',
    instructions:
      'Apps show "Nothing here yet" when a list is empty. Create items = []. If count(items) == 0, print "Nothing here yet". Otherwise print count(items) + " items found".',
    starterCode:
      'let items = [];\n// if (count(items) == 0) {\n//   print("Nothing here yet");\n// } else {\n//   print(count(items) + " items found");\n// }\n',
    validation: {
      consoleExact: ['Nothing here yet'],
      requireKeywords: ['if', 'count'],
      explanationKeywords: ['empty', 'state']
    }
  },
  {
    concept: 'default_values',
    title: 'Default values',
    kind: 'code',
    instructions:
      'When settings are not configured, apps use defaults. Write getSetting(key) that prints "theme" and returns "blue" as a default. Call getSetting("theme").',
    starterCode:
      '// function getSetting(key) {\n//   return "blue";\n// }\n// let theme = getSetting("theme");\n// print("Theme: " + theme);\n',
    validation: {
      consoleExact: ['Theme: blue'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['default', 'fallback']
    }
  },
  {
    concept: 'list_contains',
    title: 'Check if list contains item',
    kind: 'code',
    instructions:
      'Apps check if something is already in a list (like a favorites list). Create favorites = ["Red", "Blue"]. Write containsItem(list, item) that loops and prints "Found" if the item is in the list, "Not found" otherwise. Call containsItem(favorites, "Blue").',
    starterCode:
      'let favorites = ["Red", "Blue"];\n// function containsItem(list, item) {\n//   let i = 0;\n//   let found = false;\n//   repeat (count(list)) {\n//     if (get(list, i) == item) {\n//       found = true;\n//     }\n//     i = i + 1;\n//   }\n//   if (found) {\n//     print("Found");\n//   } else {\n//     print("Not found");\n//   }\n// }\n// containsItem(favorites, "Blue");\n',
    validation: {
      consoleExact: ['Found'],
      requireKeywords: ['function', 'repeat', 'if'],
      explanationKeywords: ['contains', 'search', 'list']
    }
  },

  // ─── APPLIED (51-90) ───────────────────────────────────────────────
  {
    concept: 'screen_router',
    title: 'Screen router',
    kind: 'code',
    instructions:
      'Build a mini screen router. Write route(screenName) that prints "Navigating to: " + screenName. Call route("Home"), route("Profile"), route("Settings").',
    starterCode:
      '// function route(screenName) {\n//   print("Navigating to: " + screenName);\n// }\n// route("Home");\n// route("Profile");\n// route("Settings");\n',
    validation: {
      consoleExact: ['Navigating to: Home', 'Navigating to: Profile', 'Navigating to: Settings'],
      requireKeywords: ['function'],
      explanationKeywords: ['router', 'navigation']
    }
  },
  {
    concept: 'form_validator',
    title: 'Form validator',
    kind: 'code',
    instructions:
      'Apps reject empty forms. Write validateEmail(email) that prints "Valid" if email is not empty (email != ""), otherwise prints "Email required". Call validateEmail("hi@test.com") and validateEmail("").',
    starterCode:
      '// function validateEmail(email) {\n//   if (email != "") {\n//     print("Valid");\n//   } else {\n//     print("Email required");\n//   }\n// }\n// validateEmail("hi@test.com");\n// validateEmail("");\n',
    validation: {
      consoleExact: ['Valid', 'Email required'],
      requireKeywords: ['function', 'if'],
      explanationKeywords: ['validate', 'form']
    }
  },
  {
    concept: 'list_builder',
    title: 'List builder',
    kind: 'code',
    instructions:
      'Display items in a list view. Create items = ["Apples", "Bananas", "Cherries"]. Write showList(items) that prints each one as "- " + item. Call showList(items).',
    starterCode:
      'let items = ["Apples", "Bananas", "Cherries"];\n// function showList(list) {\n//   let i = 0;\n//   repeat (count(list)) {\n//     print("- " + get(list, i));\n//     i = i + 1;\n//   }\n// }\n// showList(items);\n',
    validation: {
      consoleExact: ['- Apples', '- Bananas', '- Cherries'],
      requireKeywords: ['function', 'repeat', 'get'],
      explanationKeywords: ['list', 'render']
    }
  },
  {
    concept: 'tab_navigation',
    title: 'Tab navigation',
    kind: 'code',
    instructions:
      'Tab bars switch screens. Write switchTab(index) that prints which tab is active. Create tabs = ["Home", "Search", "Profile"]. Call switchTab(0), switchTab(2).',
    starterCode:
      'let tabs = ["Home", "Search", "Profile"];\n// function switchTab(index) {\n//   print("Active tab: " + get(tabs, index));\n// }\n// switchTab(0);\n// switchTab(2);\n',
    validation: {
      consoleExact: ['Active tab: Home', 'Active tab: Profile'],
      requireKeywords: ['function', 'get'],
      explanationKeywords: ['tab', 'navigation']
    }
  },
  {
    concept: 'drawer_menu',
    title: 'Drawer menu',
    kind: 'code',
    instructions:
      'Drawer menus slide in from the side. Write showDrawer() that prints "Opening drawer" then prints three items: "Home", "About", "Contact". Call showDrawer().',
    starterCode:
      '// function showDrawer() {\n//   print("Opening drawer");\n//   print("Home");\n//   print("About");\n//   print("Contact");\n// }\n// showDrawer();\n',
    validation: {
      consoleExact: ['Opening drawer', 'Home', 'About', 'Contact'],
      requireKeywords: ['function'],
      explanationKeywords: ['drawer', 'menu']
    }
  },
  {
    concept: 'search_filter_list',
    title: 'Search and filter',
    kind: 'code',
    instructions:
      'Search filters a list to items matching a query. Write search(query) that prints "Searching for: " + query. Then create a list, filter it with a loop and print matching items. Call search("dart").',
    starterCode:
      '// function search(query) {\n//   print("Searching for: " + query);\n// }\n// search("dart");\n',
    validation: {
      consoleExact: ['Searching for: dart'],
      requireKeywords: ['function'],
      explanationKeywords: ['search', 'filter']
    }
  },
  {
    concept: 'pull_refresh',
    title: 'Pull to refresh',
    kind: 'reference',
    instructions:
      'Read about the pull-to-refresh pattern in Flutter. Explain why this gesture feels natural on a touchscreen compared to a button click.',
    reference: {
      kind: 'docs',
      title: 'Flutter: RefreshIndicator',
      url: 'https://api.flutter.dev/flutter/material/RefreshIndicator-class.html',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['gesture', 'refresh', 'swipe']
    }
  },
  {
    concept: 'image_gallery',
    title: 'Image gallery builder',
    kind: 'code',
    instructions:
      'Photo galleries show images in a grid. Write showGallery(count) that prints "Gallery: showing " + count + " photos". Call showGallery(12).',
    starterCode:
      '// function showGallery(count) {\n//   print("Gallery: showing " + count + " photos");\n// }\n// showGallery(12);\n',
    validation: {
      consoleExact: ['Gallery: showing 12 photos'],
      requireKeywords: ['function'],
      explanationKeywords: ['gallery', 'grid']
    }
  },
  {
    concept: 'notification_handler',
    title: 'Notification handler',
    kind: 'code',
    instructions:
      'Apps respond to notifications. Write handleNotification(type) that prints "Alert: " + type if type equals "urgent", otherwise prints "Info: " + type. Call handleNotification("urgent") and handleNotification("update").',
    starterCode:
      '// function handleNotification(type) {\n//   if (type == "urgent") {\n//     print("Alert: " + type);\n//   } else {\n//     print("Info: " + type);\n//   }\n// }\n// handleNotification("urgent");\n// handleNotification("update");\n',
    validation: {
      consoleExact: ['Alert: urgent', 'Info: update'],
      requireKeywords: ['function', 'if'],
      explanationKeywords: ['notification', 'handler']
    }
  },
  {
    concept: 'settings_page',
    title: 'Settings page builder',
    kind: 'code',
    instructions:
      'A settings page lists toggle options. Write showSetting(name, enabled) that prints name + ": " + enabled. Call showSetting("Dark Mode", "ON") and showSetting("Notifications", "OFF").',
    starterCode:
      '// function showSetting(name, enabled) {\n//   print(name + ": " + enabled);\n// }\n// showSetting("Dark Mode", "ON");\n// showSetting("Notifications", "OFF");\n',
    validation: {
      consoleExact: ['Dark Mode: ON', 'Notifications: OFF'],
      requireKeywords: ['function'],
      explanationKeywords: ['settings', 'toggle']
    }
  },
  {
    concept: 'theme_picker',
    title: 'Theme color picker',
    kind: 'code',
    instructions:
      'Color pickers let users choose themes. Write setTheme(color) that prints "Theme set to " + color. Call setTheme("Blue"), setTheme("Green").',
    starterCode:
      '// function setTheme(color) {\n//   print("Theme set to " + color);\n// }\n// setTheme("Blue");\n// setTheme("Green");\n',
    validation: {
      consoleExact: ['Theme set to Blue', 'Theme set to Green'],
      requireKeywords: ['function'],
      explanationKeywords: ['theme', 'color']
    }
  },
  {
    concept: 'font_size_adjuster',
    title: 'Font size adjuster',
    kind: 'code',
    instructions:
      'Accessibility means letting users change text size. Write changeFontSize(size) that prints "Font size: " + size + "px". Call changeFontSize(14), changeFontSize(24).',
    starterCode:
      '// function changeFontSize(size) {\n//   print("Font size: " + size + "px");\n// }\n// changeFontSize(14);\n// changeFontSize(24);\n',
    validation: {
      consoleExact: ['Font size: 14px', 'Font size: 24px'],
      requireKeywords: ['function'],
      explanationKeywords: ['font', 'accessibility']
    }
  },
  {
    concept: 'dark_mode_toggle',
    title: 'Dark mode toggle',
    kind: 'code',
    instructions:
      'Dark mode is one of the most requested app features. Create darkMode as false. Write toggle() that flips it and prints the new state. Call toggle().',
    starterCode:
      'let darkMode = false;\n// function toggle() {\n//   if (darkMode == false) {\n//     darkMode = true;\n//   } else {\n//     darkMode = false;\n//   }\n//   print("Dark mode: " + darkMode);\n// }\n// toggle();\n',
    validation: {
      consoleExact: ['Dark mode: true'],
      requireKeywords: ['function', 'if'],
      explanationKeywords: ['toggle', 'state']
    }
  },
  {
    concept: 'offline_data',
    title: 'Offline data concept',
    kind: 'reference',
    instructions:
      'Read about offline-first data strategies in mobile apps. Explain why caching data locally matters when users lose internet connection.',
    reference: {
      kind: 'docs',
      title: 'Flutter: local storage with shared_preferences',
      url: 'https://docs.flutter.dev/data-and-backend/state-mgmt/simple',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['cache', 'offline', 'storage']
    }
  },
  {
    concept: 'local_storage',
    title: 'Local storage',
    kind: 'code',
    instructions:
      'Apps remember user choices between sessions. Write savePref(key, value) that prints "Saved: " + key + " = " + value. Call savePref("theme", "dark").',
    starterCode:
      '// function savePref(key, value) {\n//   print("Saved: " + key + " = " + value);\n// }\n// savePref("theme", "dark");\n',
    validation: {
      consoleExact: ['Saved: theme = dark'],
      requireKeywords: ['function'],
      explanationKeywords: ['storage', 'persist']
    }
  },
  {
    concept: 'form_state_manager',
    title: 'Form state manager',
    kind: 'code',
    instructions:
      'Forms track what the user has typed. Create name as "" and email as "". Write updateName(val) that sets name = val and prints "Name: " + val. Call updateName("Ada").',
    starterCode:
      'let name = "";\nlet email = "";\n// function updateName(val) {\n//   name = val;\n//   print("Name: " + val);\n// }\n// updateName("Ada");\n',
    validation: {
      consoleExact: ['Name: Ada'],
      requireKeywords: ['function'],
      explanationKeywords: ['state', 'form']
    }
  },
  {
    concept: 'multi_step_wizard',
    title: 'Multi-step wizard',
    kind: 'code',
    instructions:
      'Onboarding wizards walk users through steps. Write showStep(step) that prints "Step " + step + " of 3". Call showStep(1), showStep(2), showStep(3).',
    starterCode:
      '// function showStep(step) {\n//   print("Step " + step + " of 3");\n// }\n// showStep(1);\n// showStep(2);\n// showStep(3);\n',
    validation: {
      consoleExact: ['Step 1 of 3', 'Step 2 of 3', 'Step 3 of 3'],
      requireKeywords: ['function'],
      explanationKeywords: ['wizard', 'step']
    }
  },
  {
    concept: 'onboarding_flow',
    title: 'Onboarding flow builder',
    kind: 'code',
    instructions:
      'New users see an onboarding screen. Write onboard(name) that prints "Welcome, " + name + "! Let us set up your app." then prints "Pick your interests". Call onboard("Sam").',
    starterCode:
      '// function onboard(name) {\n//   print("Welcome, " + name + "! Let us set up your app.");\n//   print("Pick your interests");\n// }\n// onboard("Sam");\n',
    validation: {
      consoleExact: ['Welcome, Sam! Let us set up your app.', 'Pick your interests'],
      requireKeywords: ['function'],
      explanationKeywords: ['onboarding', 'welcome']
    }
  },
  {
    concept: 'profile_editor',
    title: 'Profile editor',
    kind: 'code',
    instructions:
      'Profile screens let users edit their info. Write updateProfile(field, value) that prints field + " updated to " + value. Call updateProfile("username", "codemaster").',
    starterCode:
      '// function updateProfile(field, value) {\n//   print(field + " updated to " + value);\n// }\n// updateProfile("username", "codemaster");\n',
    validation: {
      consoleExact: ['username updated to codemaster'],
      requireKeywords: ['function'],
      explanationKeywords: ['profile', 'edit']
    }
  },
  {
    concept: 'chat_formatter',
    title: 'Chat message formatter',
    kind: 'code',
    instructions:
      'Chat apps format messages with sender names. Write sendMessage(sender, text) that prints sender + ": " + text. Call sendMessage("Ada", "Hey there!") and sendMessage("Bob", "Hi back!").',
    starterCode:
      '// function sendMessage(sender, text) {\n//   print(sender + ": " + text);\n// }\n// sendMessage("Ada", "Hey there!");\n// sendMessage("Bob", "Hi back!");\n',
    validation: {
      consoleExact: ['Ada: Hey there!', 'Bob: Hi back!'],
      requireKeywords: ['function'],
      explanationKeywords: ['chat', 'message']
    }
  },
  {
    concept: 'calendar_view',
    title: 'Calendar view builder',
    kind: 'code',
    instructions:
      'Calendar views show days in a grid. Write showDay(day) that prints "Day " + day. Use a repeat loop to show days 1 through 5.',
    starterCode:
      '// function showDay(day) {\n//   print("Day " + day);\n// }\n// let d = 1;\n// repeat (5) {\n//   showDay(d);\n//   d = d + 1;\n// }\n',
    validation: {
      consoleExact: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
      requireKeywords: ['function', 'repeat'],
      explanationKeywords: ['calendar', 'grid']
    }
  },
  {
    concept: 'map_markers',
    title: 'Map marker placer',
    kind: 'code',
    instructions:
      'Map screens show pins at coordinates. Write placeMarker(name, x, y) that prints "Pin " + name + " at (" + x + "," + y + ")". Call placeMarker("Cafe", 42, 17).',
    starterCode:
      '// function placeMarker(name, x, y) {\n//   print("Pin " + name + " at (" + x + "," + y + ")");\n// }\n// placeMarker("Cafe", 42, 17);\n',
    validation: {
      consoleExact: ['Pin Cafe at (42,17)'],
      requireKeywords: ['function'],
      explanationKeywords: ['map', 'marker']
    }
  },
  {
    concept: 'camera_permission',
    title: 'Camera permission concept',
    kind: 'reference',
    instructions:
      'Read about permission handling in Flutter apps. Explain why apps must ask before using the camera and what happens if the user says no.',
    reference: {
      kind: 'docs',
      title: 'Flutter: permission_handler package',
      url: 'https://pub.dev/packages/permission_handler',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['permission', 'camera', 'grant']
    }
  },
  {
    concept: 'location_service',
    title: 'Location service concept',
    kind: 'reference',
    instructions:
      'Read about how mobile apps access the device GPS. Explain the difference between getting a one-time location versus tracking location continuously.',
    reference: {
      kind: 'docs',
      title: 'Flutter: geolocator package',
      url: 'https://pub.dev/packages/geolocator',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['location', 'GPS', 'tracking']
    }
  },
  {
    concept: 'contact_picker',
    title: 'Contact picker',
    kind: 'code',
    instructions:
      'Apps can access the phone contact list. Write pickContact() that prints "Opening contact list..." then prints "Contact picked: Ada Lovelace". Call pickContact().',
    starterCode:
      '// function pickContact() {\n//   print("Opening contact list...");\n//   print("Contact picked: Ada Lovelace");\n// }\n// pickContact();\n',
    validation: {
      consoleExact: ['Opening contact list...', 'Contact picked: Ada Lovelace'],
      requireKeywords: ['function'],
      explanationKeywords: ['contact', 'picker']
    }
  },
  {
    concept: 'share_functionality',
    title: 'Share functionality',
    kind: 'code',
    instructions:
      'The share button sends content to other apps. Write shareApp(name) that prints "Sharing " + name + "..." then prints "Share sheet opened". Call shareApp("CodeMaster").',
    starterCode:
      '// function shareApp(name) {\n//   print("Sharing " + name + "...");\n//   print("Share sheet opened");\n// }\n// shareApp("CodeMaster");\n',
    validation: {
      consoleExact: ['Sharing CodeMaster...', 'Share sheet opened'],
      requireKeywords: ['function'],
      explanationKeywords: ['share', 'intent']
    }
  },
  {
    concept: 'deep_linking',
    title: 'Deep link handler',
    kind: 'code',
    instructions:
      'Deep links open a specific screen from a URL. Write handleDeepLink(url) that prints "Opened from: " + url. Call handleDeepLink("myapp://profile/42").',
    starterCode:
      '// function handleDeepLink(url) {\n//   print("Opened from: " + url);\n// }\n// handleDeepLink("myapp://profile/42");\n',
    validation: {
      consoleExact: ['Opened from: myapp://profile/42'],
      requireKeywords: ['function'],
      explanationKeywords: ['deeplink', 'URL']
    }
  },
  {
    concept: 'push_notification',
    title: 'Push notification concept',
    kind: 'reference',
    instructions:
      'Read about how push notifications work in mobile apps. Explain the role of a server in sending notifications and how a device receives them.',
    reference: {
      kind: 'docs',
      title: 'Flutter Firebase Cloud Messaging',
      url: 'https://firebase.google.com/docs/cloud-messaging/flutter/client',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['push', 'notification', 'server']
    }
  },
  {
    concept: 'widget_tree',
    title: 'Widget tree builder',
    kind: 'code',
    instructions:
      'A widget tree is nested like a family tree. Write buildRow(label) that prints "Row: " + label. Then write buildScreen(title) that calls buildRow twice. Call buildScreen("Home").',
    starterCode:
      '// function buildRow(label) {\n//   print("Row: " + label);\n// }\n// function buildScreen(title) {\n//   print("Screen: " + title);\n//   buildRow("Header");\n//   buildRow("Body");\n// }\n// buildScreen("Home");\n',
    validation: {
      consoleExact: ['Screen: Home', 'Row: Header', 'Row: Body'],
      requireKeywords: ['function'],
      explanationKeywords: ['widget', 'tree']
    }
  },
  {
    concept: 'responsive_layout',
    title: 'Responsive layout concept',
    kind: 'reference',
    instructions:
      'Read about responsive design in Flutter. Explain how the same app can look good on a small phone and a large tablet.',
    reference: {
      kind: 'docs',
      title: 'Flutter: Responsive UI',
      url: 'https://docs.flutter.dev/ui/layout/responsive',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['responsive', 'layout', 'screen size']
    }
  },
  {
    concept: 'platform_detection',
    title: 'Platform detection',
    kind: 'code',
    instructions:
      'Apps behave differently on Android vs iOS. Write detectPlatform(name) that prints name + " detected". If name equals "android", print "Material design". If name equals "ios", print "Cupertino design". Call detectPlatform("ios").',
    starterCode:
      '// function detectPlatform(name) {\n//   print(name + " detected");\n//   if (name == "android") {\n//     print("Material design");\n//   }\n//   if (name == "ios") {\n//     print("Cupertino design");\n//   }\n// }\n// detectPlatform("ios");\n',
    validation: {
      consoleExact: ['ios detected', 'Cupertino design'],
      requireKeywords: ['function', 'if'],
      explanationKeywords: ['platform', 'detect']
    }
  },
  {
    concept: 'snackbar_messages',
    title: 'Snackbar messages',
    kind: 'code',
    instructions:
      'Snackbars are brief messages that appear at the bottom of the screen. Write showSnackbar(msg) that prints "Snackbar: " + msg + " [DISMISS]". Call showSnackbar("Item deleted").',
    starterCode:
      '// function showSnackbar(msg) {\n//   print("Snackbar: " + msg + " [DISMISS]");\n// }\n// showSnackbar("Item deleted");\n',
    validation: {
      consoleExact: ['Snackbar: Item deleted [DISMISS]'],
      requireKeywords: ['function'],
      explanationKeywords: ['snackbar', 'toast', 'message']
    }
  },
  {
    concept: 'bottom_sheet',
    title: 'Bottom sheet builder',
    kind: 'code',
    instructions:
      'Bottom sheets slide up from the bottom to show options. Write showBottomSheet(title, options) that prints "Sheet: " + title then prints each option. Call showBottomSheet("Share", ["Email", "SMS", "Link"]).',
    starterCode:
      'let options = ["Email", "SMS", "Link"];\n// function showBottomSheet(title, opts) {\n//   print("Sheet: " + title);\n//   let i = 0;\n//   repeat (count(opts)) {\n//     print("  - " + get(opts, i));\n//     i = i + 1;\n//   }\n// }\n// showBottomSheet("Share", options);\n',
    validation: {
      consoleExact: ['Sheet: Share', '  - Email', '  - SMS', '  - Link'],
      requireKeywords: ['function', 'repeat', 'get'],
      explanationKeywords: ['bottom sheet', 'modal', 'options']
    }
  },
  {
    concept: 'hero_animation',
    title: 'Hero animation concept',
    kind: 'code',
    instructions:
      'Hero animations transition an element between two screens. Write heroTransition(name) that prints "Animating " + name + " from Screen A to Screen B". Call heroTransition("ProfilePhoto").',
    starterCode:
      '// function heroTransition(name) {\n//   print("Animating " + name + " from Screen A to Screen B");\n// }\n// heroTransition("ProfilePhoto");\n',
    validation: {
      consoleExact: ['Animating ProfilePhoto from Screen A to Screen B'],
      requireKeywords: ['function'],
      explanationKeywords: ['hero', 'animation', 'transition']
    }
  },
  {
    concept: 'infinite_scroll',
    title: 'Infinite scroll list',
    kind: 'code',
    instructions:
      'Infinite scroll loads more items as you reach the bottom. Write loadMore(currentCount) that prints "Loading items " + (currentCount + 1) + " to " + (currentCount + 10). Call loadMore(20).',
    starterCode:
      '// function loadMore(currentCount) {\n//   print("Loading items " + (currentCount + 1) + " to " + (currentCount + 10));\n// }\n// loadMore(20);\n',
    validation: {
      consoleExact: ['Loading items 21 to 30'],
      requireKeywords: ['function'],
      explanationKeywords: ['scroll', 'pagination', 'load']
    }
  },
  {
    concept: 'swipe_actions',
    title: 'Swipe actions',
    kind: 'code',
    instructions:
      'Swipe gestures reveal actions on list items. Write handleSwipe(direction, item) that prints "Swiped " + direction + " on " + item + ": " + (direction == "left" ? "Delete" : "Archive"). Call handleSwipe("left", "Message 1").',
    starterCode:
      '// function handleSwipe(direction, item) {\n//   if (direction == "left") {\n//     print("Swiped " + direction + " on " + item + ": Delete");\n//   } else {\n//     print("Swiped " + direction + " on " + item + ": Archive");\n//   }\n// }\n// handleSwipe("left", "Message 1");\n',
    validation: {
      consoleExact: ['Swiped left on Message 1: Delete'],
      requireKeywords: ['function', 'if'],
      explanationKeywords: ['swipe', 'gesture', 'action']
    }
  },
  {
    concept: 'drawer_block',
    title: 'Draw a hamburger menu icon',
    kind: 'block',
    instructions:
      'The hamburger menu icon is three horizontal lines stacked. Draw three short forward lines with back and down movements between them.',
    palette: ['forward', 'back', 'left', 'right', 'penColor', 'clear'],
    validation: {
      requireBlockTypes: ['forward', 'back'],
      explanationKeywords: ['hamburger', 'menu']
    }
  },
  {
    concept: 'card_layout_block',
    title: 'Draw a card layout',
    kind: 'block',
    instructions:
      'Cards are rounded rectangles with content inside. Draw a card border using forward, right, and back blocks, like a UI card on a phone screen.',
    palette: ['forward', 'back', 'left', 'right', 'repeat', 'penColor', 'clear'],
    validation: {
      requireBlockTypes: ['forward', 'right'],
      explanationKeywords: ['card', 'rectangle']
    }
  },
  {
    concept: 'bottom_nav_block',
    title: 'Draw a bottom navigation bar',
    kind: 'block',
    instructions:
      'Bottom navigation bars sit at the screen bottom with evenly spaced icons. Draw a horizontal line then small marks at regular intervals to represent nav icons.',
    palette: ['forward', 'back', 'left', 'right', 'repeat', 'penColor', 'clear'],
    validation: {
      requireBlockTypes: ['forward', 'repeat'],
      explanationKeywords: ['navigation', 'bar']
    }
  },
  {
    concept: 'badge_block',
    title: 'Draw notification badges',
    kind: 'block',
    instructions:
      'Notification badges are tiny circles that sit on top of icons. Draw a small circle near the top-right corner of where an icon would be using penColor and repeat.',
    palette: ['repeat', 'forward', 'right', 'penColor', 'clear'],
    validation: {
      requireBlockTypes: ['repeat', 'penColor'],
      explanationKeywords: ['badge', 'circle']
    }
  },

  // ─── ADVANCED (91-130) ─────────────────────────────────────────────
  {
    concept: 'nav_patterns',
    title: 'Navigation patterns overview',
    kind: 'reference',
    instructions:
      'Read about navigation patterns in Flutter. Explain the difference between stack navigation, tab navigation, and drawer navigation and when each one is the right choice.',
    reference: {
      kind: 'docs',
      title: 'Flutter: Navigation and routing',
      url: 'https://docs.flutter.dev/ui/navigation',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['stack', 'tabs', 'drawer', 'navigation']
    }
  },
  {
    concept: 'state_management',
    title: 'State management overview',
    kind: 'reference',
    instructions:
      'Read about state management in Flutter. Explain why managing state matters in an app and describe two different approaches to handling it.',
    reference: {
      kind: 'docs',
      title: 'Flutter: State management',
      url: 'https://docs.flutter.dev/data-and-backend/state-mgmt',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['state', 'manage', 'widget']
    }
  },
  {
    concept: 'bloc_pattern',
    title: 'BLoC pattern',
    kind: 'reference',
    instructions:
      'Read about the BLoC pattern for Flutter. Explain what BLoC stands for and why separating business logic from the UI is a good idea.',
    reference: {
      kind: 'docs',
      title: 'bloclibrary.dev: core concepts',
      url: 'https://bloclibrary.dev/#/coreconcepts',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['BLoC', 'business', 'logic', 'stream']
    }
  },
  {
    concept: 'reactive_streams',
    title: 'Reactive streams concept',
    kind: 'reference',
    instructions:
      'Read about streams in Dart. Explain how a stream of data is like a river that keeps flowing, and how apps use it to react to changes.',
    reference: {
      kind: 'docs',
      title: 'Dart: Asynchronous programming - Streams',
      url: 'https://dart.dev/language/streams',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['stream', 'async', 'reactive']
    }
  },
  {
    concept: 'dependency_injection',
    title: 'Dependency injection',
    kind: 'reference',
    instructions:
      'Read about dependency injection in Flutter. Explain why passing dependencies into widgets instead of creating them inside makes code easier to test.',
    reference: {
      kind: 'docs',
      title: 'Flutter: InheritedWidget',
      url: 'https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['inject', 'dependency', 'test']
    }
  },
  {
    concept: 'clean_architecture',
    title: 'Clean architecture in mobile',
    kind: 'reference',
    instructions:
      'Read about clean architecture applied to Flutter. Explain the three main layers (presentation, domain, data) and why separating them keeps an app maintainable.',
    reference: {
      kind: 'docs',
      title: 'Reso Coder: Clean Architecture in Flutter',
      url: 'https://resocoder.com/2019/08/27/flutter-tdd-clean-architecture-course-1-explanation-project-structure/',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['clean', 'architecture', 'layer']
    }
  },
  {
    concept: 'mvvm',
    title: 'MVVM concept',
    kind: 'reference',
    instructions:
      'Read about the MVVM pattern. Explain how Model, View, and ViewModel work together and how it differs from just putting everything in one file.',
    reference: {
      kind: 'docs',
      title: 'Flutter: Architecture samples',
      url: 'https://github.com/flutter/samples/tree/main/ARCHITECTURE.md',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['MVVM', 'model', 'view']
    }
  },
  {
    concept: 'repository_pattern',
    title: 'Repository pattern',
    kind: 'reference',
    instructions:
      'Read about the repository pattern in Flutter. Explain why having a single place to fetch data makes it easier to switch between real and fake data for testing.',
    reference: {
      kind: 'docs',
      title: 'Flutter data layer patterns',
      url: 'https://docs.flutter.dev/data-and-backend/networking',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['repository', 'data', 'fetch']
    }
  },
  {
    concept: 'use_case_pattern',
    title: 'Use case pattern',
    kind: 'reference',
    instructions:
      'Read about use cases in clean architecture. Explain why wrapping business logic in a use case class makes it reusable and easy to test.',
    reference: {
      kind: 'docs',
      title: 'Clean architecture use cases',
      url: 'https://resocoder.com/2019/08/27/flutter-tdd-clean-architecture-course-2-domain-layer/',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['use case', 'business logic', 'clean']
    }
  },
  {
    concept: 'data_layer',
    title: 'Data layer separation',
    kind: 'reference',
    instructions:
      'Read about separating the data layer in mobile apps. Explain why the part of your app that talks to the internet should be separate from the part that draws the screen.',
    reference: {
      kind: 'docs',
      title: 'Flutter: Networking and data',
      url: 'https://docs.flutter.dev/data-and-backend/networking/fetch-data',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['data layer', 'network', 'separation']
    }
  },
  {
    concept: 'api_client',
    title: 'API client pattern',
    kind: 'code',
    instructions:
      'Apps talk to servers through API clients. Write fetchUser(id) that returns "User-" + id. Call it with fetchUser(42) and print the result.',
    starterCode:
      '// function fetchUser(id) {\n//   return "User-" + id;\n// }\n// let user = fetchUser(42);\n// print(user);\n',
    validation: {
      consoleExact: ['User-42'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['API', 'client', 'fetch']
    }
  },
  {
    concept: 'caching_strategy',
    title: 'Caching strategy',
    kind: 'code',
    instructions:
      'Caching saves repeated work. Write getCached(key) that prints "Cache hit: " + key. Write fetchFresh(key) that prints "Fetching: " + key. If the cache exists, use it; otherwise fetch fresh.',
    starterCode:
      'let cacheExists = true;\n// function getCached(key) {\n//   print("Cache hit: " + key);\n// }\n// function fetchFresh(key) {\n//   print("Fetching: " + key);\n// }\n// if (cacheExists) {\n//   getCached("users");\n// } else {\n//   fetchFresh("users");\n// }\n',
    validation: {
      consoleExact: ['Cache hit: users'],
      requireKeywords: ['function', 'if'],
      explanationKeywords: ['cache', 'strategy']
    }
  },
  {
    concept: 'offline_first',
    title: 'Offline-first concept',
    kind: 'code',
    instructions:
      'Offline-first apps work without internet. Write getAppData(isOnline) that prints "Loading from local DB" if offline, or "Syncing with server" if online. Call getAppData(false).',
    starterCode:
      '// function getAppData(isOnline) {\n//   if (isOnline == false) {\n//     print("Loading from local DB");\n//   } else {\n//     print("Syncing with server");\n//   }\n// }\n// getAppData(false);\n',
    validation: {
      consoleExact: ['Loading from local DB'],
      requireKeywords: ['function', 'if'],
      explanationKeywords: ['offline', 'local', 'sync']
    }
  },
  {
    concept: 'sync_engine',
    title: 'Sync engine concept',
    kind: 'reference',
    instructions:
      'Read about how apps keep local and server data in sync. Explain what happens when you edit data on your phone while offline and then come back online.',
    reference: {
      kind: 'docs',
      title: 'Flutter: Syncing data strategies',
      url: 'https://docs.flutter.dev/data-and-backend/state-mgmt/simple',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['sync', 'conflict', 'merge']
    }
  },
  {
    concept: 'background_processing',
    title: 'Background processing',
    kind: 'reference',
    instructions:
      'Read about background tasks in Flutter. Explain why some work should happen in the background instead of while the user is looking at the screen.',
    reference: {
      kind: 'docs',
      title: 'Flutter: Background processing',
      url: 'https://docs.flutter.dev/platform-integration/platform-channels',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['background', 'isolate', 'task']
    }
  },
  {
    concept: 'platform_channels',
    title: 'Platform channels (native bridge)',
    kind: 'reference',
    instructions:
      'Read about platform channels in Flutter. Explain how Flutter code talks to native Android (Kotlin) or iOS (Swift) code when it needs platform-specific features.',
    reference: {
      kind: 'docs',
      title: 'Flutter: Platform channels',
      url: 'https://docs.flutter.dev/platform-integration/platform-channels',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['platform', 'channel', 'native']
    }
  },
  {
    concept: 'animation_principles',
    title: 'Animation principles',
    kind: 'code',
    instructions:
      'Animations make apps feel alive. Write animateIn(widget) that prints "Fading in " + widget then prints "Animation complete". Call animateIn("LoginButton").',
    starterCode:
      '// function animateIn(widget) {\n//   print("Fading in " + widget);\n//   print("Animation complete");\n// }\n// animateIn("LoginButton");\n',
    validation: {
      consoleExact: ['Fading in LoginButton', 'Animation complete'],
      requireKeywords: ['function'],
      explanationKeywords: ['animation', 'transition']
    }
  },
  {
    concept: 'gesture_handling',
    title: 'Gesture handling',
    kind: 'code',
    instructions:
      'Taps, swipes, and long presses are gestures. Write handleGesture(action) that prints "User performed: " + action. Call handleGesture("swipe left") and handleGesture("long press").',
    starterCode:
      '// function handleGesture(action) {\n//   print("User performed: " + action);\n// }\n// handleGesture("swipe left");\n// handleGesture("long press");\n',
    validation: {
      consoleExact: ['User performed: swipe left', 'User performed: long press'],
      requireKeywords: ['function'],
      explanationKeywords: ['gesture', 'touch']
    }
  },
  {
    concept: 'accessibility_mobile',
    title: 'Accessibility in mobile',
    kind: 'reference',
    instructions:
      'Read about mobile accessibility best practices. Explain why every app needs screen reader support and how semantic labels help blind users.',
    reference: {
      kind: 'docs',
      title: 'Flutter: Accessibility',
      url: 'https://docs.flutter.dev/accessibility-and-localization/accessibility',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['accessibility', 'screen reader', 'semantic']
    }
  },
  {
    concept: 'responsive_design_code',
    title: 'Responsive design',
    kind: 'code',
    instructions:
      'Apps adapt to different screen sizes. Write layoutBuilder(screenWidth) that prints "Phone layout" if width < 600, otherwise prints "Tablet layout". Call layoutBuilder(400) and layoutBuilder(800).',
    starterCode:
      '// function layoutBuilder(screenWidth) {\n//   if (screenWidth < 600) {\n//     print("Phone layout");\n//   } else {\n//     print("Tablet layout");\n//   }\n// }\n// layoutBuilder(400);\n// layoutBuilder(800);\n',
    validation: {
      consoleExact: ['Phone layout', 'Tablet layout'],
      requireKeywords: ['function', 'if'],
      explanationKeywords: ['responsive', 'layout', 'screen']
    }
  },
  {
    concept: 'adaptive_layouts',
    title: 'Adaptive layouts',
    kind: 'reference',
    instructions:
      'Read about adaptive layouts in Flutter. Explain how the same widget can rearrange itself to look natural on a phone, tablet, and desktop.',
    reference: {
      kind: 'docs',
      title: 'Flutter: Adaptive layouts',
      url: 'https://docs.flutter.dev/ui/layout/responsive',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['adaptive', 'breakpoint', 'layout']
    }
  },
  {
    concept: 'performance_profiling',
    title: 'Performance profiling',
    kind: 'reference',
    instructions:
      'Read about the Flutter DevTools performance profiler. Explain why checking for unnecessary rebuilds matters and how a profiler helps find them.',
    reference: {
      kind: 'docs',
      title: 'Flutter DevTools: Performance',
      url: 'https://docs.flutter.dev/tools/devtools/performance',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['performance', 'rebuild', 'profil']
    }
  },
  {
    concept: 'memory_management',
    title: 'Memory management',
    kind: 'reference',
    instructions:
      'Read about memory management in Flutter. Explain what happens when images and controllers are not disposed and why the dispose pattern matters.',
    reference: {
      kind: 'docs',
      title: 'Flutter: Memory and dispose',
      url: 'https://docs.flutter.dev/resources/arch-overview#memory-management',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['memory', 'dispose', 'leak']
    }
  },
  {
    concept: 'battery_optimization',
    title: 'Battery optimization',
    kind: 'reference',
    instructions:
      'Read about how mobile apps affect battery life. Explain why continuous location tracking and background syncing drain the battery and how to minimize this.',
    reference: {
      kind: 'docs',
      title: 'Flutter: App battery optimization',
      url: 'https://docs.flutter.dev/perf/best-practices',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['battery', 'background', 'efficient']
    }
  },
  {
    concept: 'crash_reporting',
    title: 'Crash reporting',
    kind: 'reference',
    instructions:
      'Read about crash reporting tools like Firebase Crashlytics. Explain why knowing exactly where and why an app crashed helps developers fix bugs faster.',
    reference: {
      kind: 'docs',
      title: 'Firebase Crashlytics for Flutter',
      url: 'https://firebase.google.com/docs/crashlytics/get-started?platform=flutter',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['crash', 'report', 'error']
    }
  },
  {
    concept: 'analytics',
    title: 'Analytics concept',
    kind: 'reference',
    instructions:
      'Read about app analytics with Firebase. Explain how tracking which screens users visit and which buttons they tap helps improve the app.',
    reference: {
      kind: 'docs',
      title: 'Firebase Analytics for Flutter',
      url: 'https://firebase.google.com/docs/analytics/get-started?platform=flutter',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['analytics', 'event', 'tracking']
    }
  },
  {
    concept: 'ab_testing',
    title: 'A/B testing mobile',
    kind: 'reference',
    instructions:
      'Read about A/B testing in mobile apps. Explain how showing different versions of a screen to different users helps find the best design.',
    reference: {
      kind: 'docs',
      title: 'Firebase Remote Config and A/B Testing',
      url: 'https://firebase.google.com/docs/remote-config/abtests',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['A/B test', 'experiment', 'variant']
    }
  },
  {
    concept: 'feature_flags',
    title: 'Feature flags',
    kind: 'code',
    instructions:
      'Feature flags let you turn features on and off without updating the app. Create featureNewUI as true. Write checkFeature(name) that prints name + ": enabled" if true, or name + ": disabled" if false. Call checkFeature("NewUI").',
    starterCode:
      'let featureNewUI = true;\n// function checkFeature(name) {\n//   if (featureNewUI) {\n//     print(name + ": enabled");\n//   } else {\n//     print(name + ": disabled");\n//   }\n// }\n// checkFeature("NewUI");\n',
    validation: {
      consoleExact: ['NewUI: enabled'],
      requireKeywords: ['function', 'if'],
      explanationKeywords: ['feature', 'flag', 'toggle']
    }
  },
  {
    concept: 'remote_config',
    title: 'Remote config',
    kind: 'reference',
    instructions:
      'Read about Firebase Remote Config. Explain how changing app behavior from a server dashboard works without releasing a new app update.',
    reference: {
      kind: 'docs',
      title: 'Firebase Remote Config for Flutter',
      url: 'https://firebase.google.com/docs/remote-config/get-started?platform=flutter',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['remote', 'config', 'parameter']
    }
  },
  {
    concept: 'app_review_prompts',
    title: 'App review prompts',
    kind: 'reference',
    instructions:
      'Read about the in_app_review package. Explain why asking for a review at the right moment (after a positive experience) leads to better ratings.',
    reference: {
      kind: 'docs',
      title: 'pub.dev: in_app_review',
      url: 'https://pub.dev/packages/in_app_review',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['review', 'rating', 'prompt']
    }
  },
  {
    concept: 'app_store_optimization',
    title: 'App store optimization',
    kind: 'reference',
    instructions:
      'Read about ASO (App Store Optimization). Explain how the title, description, and screenshots of an app listing affect how many people find and download it.',
    reference: {
      kind: 'video',
      title: 'App Store Optimization explained',
      url: 'https://www.youtube.com/results?search_query=app+store+optimization+explained',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['ASO', 'store', 'listing']
    }
  },
  {
    concept: 'state_demo',
    title: 'Demo: setState concept',
    kind: 'code',
    instructions:
      'setState redraws the screen when data changes. Write incrementCounter() that adds 1 to a counter and prints "Counter: " + counter. Start counter at 0 and call it 3 times.',
    starterCode:
      'let counter = 0;\n// function incrementCounter() {\n//   counter = counter + 1;\n//   print("Counter: " + counter);\n// }\n// incrementCounter();\n// incrementCounter();\n// incrementCounter();\n',
    validation: {
      consoleExact: ['Counter: 1', 'Counter: 2', 'Counter: 3'],
      requireKeywords: ['function'],
      explanationKeywords: ['setState', 'counter', 'rebuild']
    }
  },
  {
    concept: 'provider_demo',
    title: 'Demo: Provider concept',
    kind: 'code',
    instructions:
      'Provider makes data available to many widgets. Write provideTheme(name) that stores a theme name and prints "Theme provided: " + name. Then write consumeTheme() that prints "Using theme: " + the stored name.',
    starterCode:
      'let currentTheme = "";\n// function provideTheme(name) {\n//   currentTheme = name;\n//   print("Theme provided: " + name);\n// }\n// function consumeTheme() {\n//   print("Using theme: " + currentTheme);\n// }\n// provideTheme("DarkBlue");\n// consumeTheme();\n',
    validation: {
      consoleExact: ['Theme provided: DarkBlue', 'Using theme: DarkBlue'],
      requireKeywords: ['function'],
      explanationKeywords: ['provider', 'share', 'data']
    }
  },
  {
    concept: 'navigation_block',
    title: 'Draw a back arrow button',
    kind: 'block',
    instructions:
      'Back buttons are small arrows pointing left. Use forward and left blocks to draw an arrow shape that a user would tap to go back to the previous screen.',
    palette: ['forward', 'left', 'right', 'back', 'penColor', 'clear'],
    validation: {
      requireBlockTypes: ['forward', 'left'],
      explanationKeywords: ['arrow', 'back']
    }
  },
  {
    concept: 'loading_spinner_block',
    title: 'Draw a loading spinner',
    kind: 'block',
    instructions:
      'Loading spinners are circular shapes. Use repeat with forward and right blocks to draw a circle shape, representing the spinner that shows while data loads.',
    palette: ['repeat', 'forward', 'right', 'penColor', 'clear'],
    validation: {
      requireBlockTypes: ['repeat', 'forward', 'right'],
      explanationKeywords: ['spinner', 'loading', 'circle']
    }
  },
  {
    concept: 'toggle_switch_block',
    title: 'Draw a toggle switch',
    kind: 'block',
    instructions:
      'Toggle switches have a pill-shaped track and a circle knob. Draw the outer pill shape with a repeat and forward, then place a small circle inside for the knob.',
    palette: ['repeat', 'forward', 'right', 'penColor', 'clear'],
    validation: {
      requireBlockTypes: ['repeat', 'forward'],
      explanationKeywords: ['toggle', 'switch']
    }
  },
  {
    concept: 'fab_button_block',
    title: 'Draw a floating action button',
    kind: 'block',
    instructions:
      'Floating action buttons are circles with a plus sign. Draw a circle using repeat and forward, then add a cross shape inside it.',
    palette: ['repeat', 'forward', 'right', 'left', 'back', 'penColor', 'clear'],
    validation: {
      requireBlockTypes: ['repeat', 'forward'],
      explanationKeywords: ['FAB', 'button', 'circle']
    }
  },
  {
    concept: 'app_lifecycle',
    title: 'App lifecycle management',
    kind: 'reference',
    instructions:
      'Read about the Flutter app lifecycle (inactive, paused, resumed). Explain what happens to an app when the user switches to another app and why you should pause expensive work.',
    reference: {
      kind: 'docs',
      title: 'Flutter: AppLifecycleState',
      url: 'https://api.flutter.dev/flutter/widgets/AppLifecycleState-class.html',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['lifecycle', 'pause', 'resume']
    }
  },
  {
    concept: 'code_signing',
    title: 'Code signing and certificates',
    kind: 'reference',
    instructions:
      'Read about code signing for iOS and Android. Explain why apps need a digital certificate to be installed on a real device and what happens during the signing process.',
    reference: {
      kind: 'docs',
      title: 'Flutter: Signing Android apps',
      url: 'https://docs.flutter.dev/deployment/android#signing-the-app',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['certificate', 'signing', 'keystore']
    }
  },

  // ─── MASTERY (131-150) ─────────────────────────────────────────────
  {
    concept: 'flutter_framework',
    title: 'Flutter framework overview',
    kind: 'reference',
    instructions:
      'Read the official Flutter documentation overview. Explain what makes Flutter different from other mobile frameworks and why it compiles to native code.',
    reference: {
      kind: 'docs',
      title: 'Flutter official docs',
      url: 'https://docs.flutter.dev/',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['Flutter', 'widget', 'native']
    }
  },
  {
    concept: 'dart_language',
    title: 'Dart language features',
    kind: 'reference',
    instructions:
      'Read about the Dart programming language. Explain three features of Dart that make it well-suited for building mobile apps.',
    reference: {
      kind: 'docs',
      title: 'Dart language documentation',
      url: 'https://dart.dev/language',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['Dart', 'null safety', 'async']
    }
  },
  {
    concept: 'native_vs_cross',
    title: 'Native vs cross-platform',
    kind: 'reference',
    instructions:
      'Read about the trade-offs between native and cross-platform development. Explain when a team would choose native over cross-platform and vice versa.',
    reference: {
      kind: 'video',
      title: 'Native vs Cross-Platform: Which to Choose?',
      url: 'https://www.youtube.com/results?search_query=native+vs+cross+platform+mobile+development',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['native', 'cross-platform', 'performance']
    }
  },
  {
    concept: 'react_native_comparison',
    title: 'React Native comparison',
    kind: 'reference',
    instructions:
      "Read about React Native. Explain how its approach to mobile development (using JavaScript and a bridge to native) compares to Flutter's approach (using Dart and its own rendering engine).",
    reference: {
      kind: 'docs',
      title: 'React Native documentation',
      url: 'https://reactnative.dev/docs/getting-started',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['React Native', 'JavaScript', 'bridge']
    }
  },
  {
    concept: 'kotlin_swift_overview',
    title: 'Kotlin/Swift basics overview',
    kind: 'reference',
    instructions:
      'Read about Kotlin (for Android) and Swift (for iOS). Explain what each language is used for and why a cross-platform developer should still know about them.',
    reference: {
      kind: 'docs',
      title: 'Kotlin language website',
      url: 'https://kotlinlang.org/docs/home.html',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['Kotlin', 'Swift', 'native']
    }
  },
  {
    concept: 'material_design',
    title: 'Material Design guidelines',
    kind: 'reference',
    instructions:
      'Read the Material Design 3 documentation. Explain what Material Design is and why following a design system helps build consistent, beautiful apps.',
    reference: {
      kind: 'docs',
      title: 'Material Design 3 official site',
      url: 'https://m3.material.io/',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['Material', 'design system', 'components']
    }
  },
  {
    concept: 'cupertino_design',
    title: 'Cupertino design guidelines',
    kind: 'reference',
    instructions:
      "Read about Apple's Cupertino design guidelines. Explain how iOS apps look and behave differently from Android apps and why Flutter offers Cupertino widgets.",
    reference: {
      kind: 'docs',
      title: 'Apple Human Interface Guidelines',
      url: 'https://developer.apple.com/design/human-interface-guidelines/',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['Cupertino', 'iOS', 'Apple']
    }
  },
  {
    concept: 'wcag_mobile',
    title: 'Accessibility standards (WCAG for mobile)',
    kind: 'reference',
    instructions:
      'Read about WCAG guidelines applied to mobile. Explain why contrast ratios, touch target sizes, and alternative text matter on small screens.',
    reference: {
      kind: 'docs',
      title: 'W3C: Mobile Accessibility',
      url: 'https://www.w3.org/WAI/standards-guidelines/mobile/',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['WCAG', 'contrast', 'touch target']
    }
  },
  {
    concept: 'mobile_testing',
    title: 'Mobile testing strategies',
    kind: 'reference',
    instructions:
      'Read about testing Flutter apps. Explain the difference between unit tests, widget tests, and integration tests and when you would use each one.',
    reference: {
      kind: 'docs',
      title: 'Flutter: Testing',
      url: 'https://docs.flutter.dev/testing',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['unit test', 'widget test', 'integration']
    }
  },
  {
    concept: 'cicd_mobile',
    title: 'CI/CD for mobile',
    kind: 'reference',
    instructions:
      'Read about continuous integration and delivery for mobile apps. Explain why automating builds and tests is especially important when deploying to app stores.',
    reference: {
      kind: 'docs',
      title: 'Flutter: Continuous delivery',
      url: 'https://docs.flutter.dev/deployment/cd',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['CI/CD', 'build', 'deploy']
    }
  },
  {
    concept: 'app_distribution',
    title: 'App distribution',
    kind: 'reference',
    instructions:
      'Read about how apps are distributed through app stores. Explain the process of submitting an app to Google Play and the Apple App Store.',
    reference: {
      kind: 'docs',
      title: 'Flutter: Build and release for Android',
      url: 'https://docs.flutter.dev/deployment/android',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['distribution', 'store', 'publish']
    }
  },
  {
    concept: 'beta_testing',
    title: 'Beta testing',
    kind: 'reference',
    instructions:
      'Read about beta testing programs like Google Play Testing Tracks and TestFlight. Explain why releasing to a small group before the public helps catch bugs.',
    reference: {
      kind: 'docs',
      title: 'Flutter: Beta testing with Firebase App Distribution',
      url: 'https://firebase.google.com/docs/app-distribution',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['beta', 'test track', 'feedback']
    }
  },
  {
    concept: 'firebase_mobile',
    title: 'Firebase/Supabase for mobile',
    kind: 'reference',
    instructions:
      'Read about using Firebase with Flutter. Explain three Firebase services (like Auth, Firestore, and Cloud Messaging) and what each one does for a mobile app.',
    reference: {
      kind: 'docs',
      title: 'FlutterFire documentation',
      url: 'https://firebase.flutter.dev/',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['Firebase', 'backend', 'service']
    }
  },
  {
    concept: 'mobile_security',
    title: 'Mobile security basics',
    kind: 'reference',
    instructions:
      'Read about mobile app security best practices. Explain why storing passwords in plain text is dangerous and what encryption and hashing do to protect user data.',
    reference: {
      kind: 'docs',
      title: 'OWASP Mobile Security',
      url: 'https://owasp.org/www-project-mobile-top-10/',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['security', 'encrypt', 'hash']
    }
  },
  {
    concept: 'biometric_auth',
    title: 'Biometric authentication',
    kind: 'reference',
    instructions:
      'Read about biometric authentication on mobile (fingerprint, face recognition). Explain why using biometrics is more convenient than typing a password and what security considerations come with it.',
    reference: {
      kind: 'docs',
      title: 'pub.dev: local_auth package',
      url: 'https://pub.dev/packages/local_auth',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['biometric', 'fingerprint', 'face']
    }
  },
  {
    concept: 'mobile_payments',
    title: 'Mobile payments',
    kind: 'reference',
    instructions:
      'Read about integrating mobile payments (Apple Pay, Google Pay). Explain the difference between processing payments yourself versus using a payment provider and why the latter is safer.',
    reference: {
      kind: 'docs',
      title: 'Flutter: In-app purchases',
      url: 'https://pub.dev/packages/in_app_purchase',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['payment', 'in-app purchase', 'provider']
    }
  },
  {
    concept: 'ar_vr_mobile',
    title: 'AR/VR on mobile',
    kind: 'reference',
    instructions:
      'Read about augmented reality on mobile devices. Explain how AR overlays digital objects onto the real world and what hardware (camera, sensors) makes it possible.',
    reference: {
      kind: 'docs',
      title: 'ARCore for Flutter (google_arcore)',
      url: 'https://pub.dev/packages/google_arcore',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['augmented reality', 'camera', 'overlay']
    }
  },
  {
    concept: 'wearable_apps',
    title: 'Wearable apps',
    kind: 'reference',
    instructions:
      'Read about building apps for wearables (smartwatches). Explain how designing for a tiny screen with no keyboard changes the way you think about user interface.',
    reference: {
      kind: 'docs',
      title: 'Wear OS developer guide',
      url: 'https://developer.android.com/training/wearables',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['wearable', 'watch', 'small screen']
    }
  },
  {
    concept: 'tablet_considerations',
    title: 'Tablet considerations',
    kind: 'reference',
    instructions:
      'Read about designing for tablets. Explain how larger screens allow for different layouts (like side-by-side panels) that do not work on phones.',
    reference: {
      kind: 'docs',
      title: 'Flutter: Adaptive layouts for tablets',
      url: 'https://docs.flutter.dev/ui/layout/responsive',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['tablet', 'layout', 'split view']
    }
  },
  {
    concept: 'foldable_devices',
    title: 'Foldable devices',
    kind: 'reference',
    instructions:
      'Read about supporting foldable devices like the Samsung Galaxy Fold. Explain how apps need to handle screen size changes when a device folds and unfolds.',
    reference: {
      kind: 'docs',
      title: 'Samsung developer: Foldable devices',
      url: 'https://developer.samsung.com/galaxy-z/foldable',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['foldable', 'resize', 'continuity']
    }
  },
  {
    concept: 'pwa_vs_native',
    title: 'Progressive web apps vs native',
    kind: 'reference',
    instructions:
      'Read about progressive web apps (PWAs). Explain how a PWA runs in a browser but feels like a native app, and when you would choose a PWA over a native app.',
    reference: {
      kind: 'docs',
      title: 'web.dev: Progressive Web Apps',
      url: 'https://web.dev/learn/pwa',
      whyKey: 'reference.mobile.why'
    },
    validation: {
      explanationKeywords: ['PWA', 'browser', 'install']
    }
  }
]
