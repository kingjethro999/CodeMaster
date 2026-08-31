import type { StageSeed } from './data'

export const dataStagesExtended: StageSeed[] = [
  // ─── Foundation (11-25) ───
  {
    concept: 'variables',
    title: 'Store the temperature',
    kind: 'code',
    instructions:
      'A sensor reports 37. Store it in a variable called temp, then print "Temp: " plus the value.',
    starterCode: '// let temp = 37;\n// print("Temp: " + temp);\n',
    validation: {
      consoleExact: ['Temp: 37'],
      explanationKeywords: ['variable', 'store']
    }
  },
  {
    concept: 'conditionals',
    title: 'Above average',
    kind: 'code',
    instructions:
      'If a test score is greater than 75, print "Above average". Otherwise print "Keep studying." Store the score as 82.',
    starterCode: 'let score = 82;\n// if (score > 75) { ... } else { ... }\n',
    validation: {
      consoleExact: ['Above average'],
      requireKeywords: ['if'],
      explanationKeywords: ['if', 'threshold']
    }
  },
  {
    concept: 'conditionals',
    title: 'Grade ranges',
    kind: 'code',
    instructions:
      'If grade is 90 or above print "A", otherwise if grade is 80 or above print "B", otherwise print "C". Set grade to 85.',
    starterCode:
      'let grade = 85;\n// if (grade >= 90) { print("A"); } else { if (grade >= 80) { print("B"); } else { print("C"); } }\n',
    validation: {
      consoleExact: ['B'],
      requireKeywords: ['if', 'else'],
      explanationKeywords: ['range', 'else-if']
    }
  },
  {
    concept: 'strings',
    title: 'Build a label',
    kind: 'code',
    instructions:
      'Combine first and last into a full name. Let first = "Ada" and let last = "Lovelace". Print first + " " + last.',
    starterCode: 'let first = "Ada";\nlet last = "Lovelace";\n// print(first + " " + last);\n',
    validation: {
      consoleExact: ['Ada Lovelace'],
      explanationKeywords: ['concatenate', 'string']
    }
  },
  {
    concept: 'booleans',
    title: 'Data quality flag',
    kind: 'code',
    instructions:
      'A record is valid if isValid is true. Set isValid to true, then if it is true print "Record OK" else print "Discard".',
    starterCode: 'let isValid = true;\n// if (isValid) { ... } else { ... }\n',
    validation: {
      consoleExact: ['Record OK'],
      requireKeywords: ['if'],
      explanationKeywords: ['boolean', 'flag']
    }
  },
  {
    concept: 'counters',
    title: 'Count the rows',
    kind: 'code',
    instructions: 'Start count at 0. Add 1 five times using a repeat loop. Print the final count.',
    starterCode: 'let count = 0;\n// repeat (5) { count = count + 1; }\n// print(count);\n',
    validation: {
      consoleExact: ['5'],
      requireKeywords: ['repeat'],
      explanationKeywords: ['counter', 'loop']
    }
  },
  {
    concept: 'accumulators',
    title: 'Running total',
    kind: 'code',
    instructions:
      'Start total at 0. Inside a repeat that runs 4 times, add 10 to total each time. Print total at the end.',
    starterCode: 'let total = 0;\n// repeat (4) { total = total + 10; }\n// print(total);\n',
    validation: {
      consoleExact: ['40'],
      requireKeywords: ['repeat'],
      explanationKeywords: ['accumulator', 'sum']
    }
  },
  {
    concept: 'conditionals',
    title: 'Filter outliers',
    kind: 'code',
    instructions:
      'If value is less than 0 or greater than 100, print "Outlier". Otherwise print "Valid". Set value to -5.',
    starterCode:
      'let value = -5;\n// if (value < 0) { ... } else { if (value > 100) { ... } else { ... } }\n',
    validation: {
      consoleExact: ['Outlier'],
      requireKeywords: ['if'],
      explanationKeywords: ['outlier', 'filter']
    }
  },
  {
    concept: 'comparison',
    title: 'Compare two readings',
    kind: 'code',
    instructions:
      'Set a to 15 and b to 23. If a is greater than b print "a wins", otherwise print "b wins".',
    starterCode: 'let a = 15;\nlet b = 23;\n// if (a > b) { ... } else { ... }\n',
    validation: {
      consoleExact: ['b wins'],
      requireKeywords: ['if'],
      explanationKeywords: ['compare', 'operator']
    }
  },
  {
    concept: 'counters',
    title: 'Count matching items',
    kind: 'code',
    instructions:
      'Start hits at 0. Repeat 5 times: each time add 1 to hits. Then print "Found " plus hits + " matches".',
    starterCode:
      'let hits = 0;\n// repeat (5) { hits = hits + 1; }\n// print("Found " + hits + " matches");\n',
    validation: {
      consoleExact: ['Found 5 matches'],
      requireKeywords: ['repeat'],
      explanationKeywords: ['counter', 'count']
    }
  },
  {
    concept: 'naming',
    title: 'Name your variables',
    kind: 'code',
    instructions:
      'Good data variable names say what they hold. Create a variable called studentCount = 30 and print it. Think about why "studentCount" is better than "x".',
    starterCode: '// let studentCount = 30;\n// print(studentCount);\n',
    validation: {
      consoleExact: ['30'],
      requireKeywords: ['studentCount'],
      explanationKeywords: ['naming', 'readable']
    }
  },
  {
    concept: 'scope',
    title: 'Inside and outside',
    kind: 'code',
    instructions:
      'Create a variable x = 10 outside a function. Inside the function, print x. Then print x outside. Both should print 10.',
    starterCode: 'let x = 10;\nfunction showX() {\n  print(x);\n}\n// showX();\n// print(x);\n',
    validation: {
      consoleExact: ['10', '10'],
      requireKeywords: ['function'],
      explanationKeywords: ['scope', 'variable']
    }
  },
  {
    concept: 'functions',
    title: 'Double it',
    kind: 'code',
    instructions:
      'Write a doubleIt() function that sets a variable n to 7, doubles it (n = n + n), then prints n. Call doubleIt().',
    starterCode:
      'function doubleIt() {\n  let n = 7;\n  n = n + n;\n  print(n);\n}\n// doubleIt();\n',
    validation: {
      consoleExact: ['14'],
      requireKeywords: ['function'],
      explanationKeywords: ['function', 'compute']
    }
  },
  {
    concept: 'functions',
    title: 'Print a report header',
    kind: 'code',
    instructions:
      'Write a function called reportHeader that prints "--- Sales Report ---". Call it, then print "End of report" after.',
    starterCode:
      'function reportHeader() {\n  print("--- Sales Report ---");\n}\n// reportHeader();\n// print("End of report");\n',
    validation: {
      consoleExact: ['--- Sales Report ---', 'End of report'],
      requireKeywords: ['function'],
      explanationKeywords: ['function', 'reusable']
    }
  },
  {
    concept: 'logic',
    title: 'Absolute value',
    kind: 'code',
    instructions:
      'If n is less than 0, print 0 minus n. Otherwise print n. Set n to -8. This computes the absolute value.',
    starterCode: 'let n = -8;\n// if (n < 0) { print(0 - n); } else { print(n); }\n',
    validation: {
      consoleExact: ['8'],
      requireKeywords: ['if'],
      explanationKeywords: ['absolute', 'condition']
    }
  },
  // ─── Core (26-50) ───
  {
    concept: 'arrays',
    title: 'A list of scores',
    kind: 'code',
    instructions:
      'Create an array of three scores: 85, 92, 78. Print the count of items in the list.',
    starterCode: 'let scores = [85, 92, 78];\n// print(count(scores));\n',
    validation: {
      consoleExact: ['3'],
      explanationKeywords: ['array', 'count']
    }
  },
  {
    concept: 'arrays',
    title: 'Get the first score',
    kind: 'code',
    instructions: 'Create scores = [85, 92, 78]. Print the first item using get().',
    starterCode: 'let scores = [85, 92, 78];\n// print(get(scores, 0));\n',
    validation: {
      consoleExact: ['85'],
      explanationKeywords: ['array', 'index']
    }
  },
  {
    concept: 'arrays',
    title: 'Add a score',
    kind: 'code',
    instructions:
      'Start with scores = [85, 92]. Push 78 onto the list. Then print the count. It should be 3.',
    starterCode: 'let scores = [85, 92];\n// push(scores, 78);\n// print(count(scores));\n',
    validation: {
      consoleExact: ['3'],
      requireKeywords: ['push'],
      explanationKeywords: ['push', 'add']
    }
  },
  {
    concept: 'iteration',
    title: 'Print each score',
    kind: 'code',
    instructions:
      'Given scores = [85, 92, 78], use a repeat loop that runs count(scores) times. Inside, print "Score" each time.',
    starterCode: 'let scores = [85, 92, 78];\n// repeat (3) { print("Score"); }\n',
    validation: {
      consoleLines: 3,
      consoleIncludes: ['Score'],
      requireKeywords: ['repeat'],
      explanationKeywords: ['iterate', 'loop']
    }
  },
  {
    concept: 'iteration',
    title: 'Sum the list',
    kind: 'code',
    instructions:
      'Start total = 0 and scores = [10, 20, 30]. Repeat 3 times: add the matching score to total each time using get(scores, i). Print total.',
    starterCode:
      'let total = 0;\nlet scores = [10, 20, 30];\n// repeat (3) { total = total + get(scores, 0); }\n// print(total);\n',
    validation: {
      consoleExact: ['60'],
      requireKeywords: ['repeat', 'get'],
      explanationKeywords: ['sum', 'iterate']
    }
  },
  {
    concept: 'strings',
    title: 'CSV row',
    kind: 'code',
    instructions: 'Build a CSV-like string: "name,age,city". Print it. Then print "Ada,30,London".',
    starterCode: '// print("name,age,city");\n// print("Ada,30,London");\n',
    validation: {
      consoleExact: ['name,age,city', 'Ada,30,London'],
      explanationKeywords: ['csv', 'format']
    }
  },
  {
    concept: 'nested_loops',
    title: 'Table of values',
    kind: 'code',
    instructions:
      'Print a 3x2 table of marks. Repeat 3 times (rows), and inside each row repeat 2 times printing "X". After each inner loop, print a new line "row done".',
    starterCode: '// repeat (3) { repeat (2) { print("X"); } print("row done"); }\n',
    validation: {
      consoleLines: 9,
      requireKeywords: ['repeat'],
      explanationKeywords: ['nested', 'table']
    }
  },
  {
    concept: 'functions',
    title: 'Average of three',
    kind: 'code',
    instructions:
      'Write calcAvg() that sets a = 80, b = 90, c = 70, computes sum = a + b + c, then avg = sum / 3, then prints avg. Call it.',
    starterCode:
      'function calcAvg() {\n  let a = 80;\n  let b = 90;\n  let c = 70;\n  let sum = a + b + c;\n  let avg = sum / 3;\n  print(avg);\n}\n// calcAvg();\n',
    validation: {
      consoleExact: ['80'],
      requireKeywords: ['function'],
      explanationKeywords: ['average', 'function']
    }
  },
  {
    concept: 'functions',
    title: 'Find the maximum',
    kind: 'code',
    instructions:
      'Write findMax() that sets x = 15 and y = 23. If x > y print x, else print y. Call it.',
    starterCode:
      'function findMax() {\n  let x = 15;\n  let y = 23;\n  if (x > y) { print(x); } else { print(y); }\n}\n// findMax();\n',
    validation: {
      consoleExact: ['23'],
      requireKeywords: ['function', 'if'],
      explanationKeywords: ['maximum', 'compare']
    }
  },
  {
    concept: 'composition',
    title: 'Filter and count',
    kind: 'code',
    instructions:
      'Write countHigh() that sets scores = [85, 60, 92, 45, 78], then counts how many are above 70. Print the count. Hint: use a variable and a loop.',
    starterCode:
      'function countHigh() {\n  let scores = [85, 60, 92, 45, 78];\n  let n = 0;\n  // use repeat and conditionals\n  print(n);\n}\n// countHigh();\n',
    validation: {
      consoleExact: ['3'],
      requireKeywords: ['function', 'repeat'],
      explanationKeywords: ['filter', 'count']
    }
  },
  {
    concept: 'reuse',
    title: 'Shared helper',
    kind: 'code',
    instructions:
      'Write a function addFive() that sets n = 10 and prints n + 5. Call it twice. Notice how one function does the same job each time.',
    starterCode:
      'function addFive() {\n  let n = 10;\n  print(n + 5);\n}\n// addFive();\n// addFive();\n',
    validation: {
      consoleExact: ['15', '15'],
      requireKeywords: ['function'],
      explanationKeywords: ['reuse', 'DRY']
    }
  },
  {
    concept: 'arrays',
    title: 'Get the last item',
    kind: 'code',
    instructions:
      'Given items = ["apple", "banana", "cherry"], print the last item. Use get() with index 2.',
    starterCode: 'let items = ["apple", "banana", "cherry"];\n// print(get(items, 2));\n',
    validation: {
      consoleExact: ['cherry'],
      explanationKeywords: ['array', 'index']
    }
  },
  {
    concept: 'iteration',
    title: 'Double each value',
    kind: 'code',
    instructions:
      'Given nums = [3, 7, 5], print each value doubled. Repeat 3 times, print the doubled value each time.',
    starterCode:
      'let nums = [3, 7, 5];\n// repeat (1) { print(6); }\n// repeat (1) { print(14); }\n// repeat (1) { print(10); }\n',
    validation: {
      consoleExact: ['6', '14', '10'],
      requireKeywords: ['repeat'],
      explanationKeywords: ['transform', 'double']
    }
  },
  {
    concept: 'composition',
    title: 'Build a report',
    kind: 'code',
    instructions:
      'Write printReport() that prints "=== Report ===", then sets total = 42 and prints "Total: " + total, then prints "=== End ===". Call it.',
    starterCode:
      'function printReport() {\n  print("=== Report ===");\n  let total = 42;\n  print("Total: " + total);\n  print("=== End ===");\n}\n// printReport();\n',
    validation: {
      consoleExact: ['=== Report ===', 'Total: 42', '=== End ==='],
      requireKeywords: ['function'],
      explanationKeywords: ['report', 'compose']
    }
  },
  {
    concept: 'arrays',
    title: 'Build a list',
    kind: 'code',
    instructions:
      'Start with an empty list. Push "cat", "dog", "fish" onto it. Print the count of the list.',
    starterCode:
      'let pets = [];\n// push(pets, "cat");\n// push(pets, "dog");\n// push(pets, "fish");\n// print(count(pets));\n',
    validation: {
      consoleExact: ['3'],
      requireKeywords: ['push'],
      explanationKeywords: ['push', 'build']
    }
  },
  // ─── Applied (51-90) ───
  {
    concept: 'csv_parsing',
    title: 'Parse a CSV line',
    kind: 'code',
    instructions:
      'A CSV line is "Alice,90,85". The fields are name, test1, test2. Set the line, then print "Name: Alice" by building a new string.',
    starterCode: 'let line = "Alice,90,85";\n// print("Name: Alice");\n',
    validation: {
      consoleExact: ['Name: Alice'],
      explanationKeywords: ['csv', 'parse']
    }
  },
  {
    concept: 'filtering',
    title: 'Filter passing scores',
    kind: 'code',
    instructions:
      'Given scores = [45, 82, 67, 91, 38], count how many are 60 or above. Print the count.',
    starterCode:
      'let scores = [45, 82, 67, 91, 38];\nlet passed = 0;\n// repeat 5 times: if score >= 60 then passed = passed + 1\n// print(passed);\n',
    validation: {
      consoleExact: ['3'],
      requireKeywords: ['repeat', 'if'],
      explanationKeywords: ['filter', 'threshold']
    }
  },
  {
    concept: 'aggregation',
    title: 'Calculate average',
    kind: 'code',
    instructions:
      'Set values = [80, 90, 70, 85, 75]. Compute the total (400) then divide by count (5). Print the average.',
    starterCode:
      'let values = [80, 90, 70, 85, 75];\nlet total = 80 + 90 + 70 + 85 + 75;\nlet avg = total / 5;\n// print(avg);\n',
    validation: {
      consoleExact: ['80'],
      explanationKeywords: ['average', 'aggregate']
    }
  },
  {
    concept: 'sorting',
    title: 'Sort three numbers',
    kind: 'code',
    instructions:
      'Given a = 30, b = 10, c = 20. Print them in order: first the smallest, then middle, then largest. Use if/else to figure it out.',
    starterCode:
      'let a = 30;\nlet b = 10;\nlet c = 20;\n// print 10, then 20, then 30 using conditions\n',
    validation: {
      consoleExact: ['10', '20', '30'],
      requireKeywords: ['if'],
      explanationKeywords: ['sort', 'order']
    }
  },
  {
    concept: 'statistics',
    title: 'Find the minimum',
    kind: 'code',
    instructions:
      'Given vals = [45, 23, 67, 12, 89], find and print the smallest value. Start by assuming the first is smallest.',
    starterCode:
      'let vals = [45, 23, 67, 12, 89];\nlet smallest = 45;\n// check each value, update smallest if smaller\n// print(smallest);\n',
    validation: {
      consoleExact: ['12'],
      explanationKeywords: ['minimum', 'search']
    }
  },
  {
    concept: 'statistics',
    title: 'Find the maximum',
    kind: 'code',
    instructions: 'Given vals = [45, 23, 67, 12, 89], find and print the largest value.',
    starterCode:
      'let vals = [45, 23, 67, 12, 89];\nlet biggest = 45;\n// check each value, update biggest if larger\n// print(biggest);\n',
    validation: {
      consoleExact: ['89'],
      explanationKeywords: ['maximum', 'search']
    }
  },
  {
    concept: 'outliers',
    title: 'Spot the outlier',
    kind: 'code',
    instructions:
      'Given readings = [20, 22, 19, 21, 150], print any value greater than 100 as "Outlier found: " plus the value.',
    starterCode:
      'let readings = [20, 22, 19, 21, 150];\n// repeat 5 times: if value > 100, print "Outlier found: " + value\n',
    validation: {
      consoleExact: ['Outlier found: 150'],
      requireKeywords: ['repeat', 'if'],
      explanationKeywords: ['outlier', 'detect']
    }
  },
  {
    concept: 'cleaning',
    title: 'Remove invalid entries',
    kind: 'code',
    instructions:
      'Given data = [10, -1, 25, 0, 30], count how many values are greater than 0. Print the count of valid entries.',
    starterCode:
      'let data = [10, -1, 25, 0, 30];\nlet valid = 0;\n// repeat 5 times: if value > 0, valid = valid + 1\n// print(valid);\n',
    validation: {
      consoleExact: ['3'],
      requireKeywords: ['repeat', 'if'],
      explanationKeywords: ['clean', 'valid']
    }
  },
  {
    concept: 'grouping',
    title: 'Count by category',
    kind: 'code',
    instructions:
      'Print "Red: 3" then "Blue: 2". Imagine grouping items by color and counting each group.',
    starterCode: '// print("Red: 3");\n// print("Blue: 2");\n',
    validation: {
      consoleExact: ['Red: 3', 'Blue: 2'],
      explanationKeywords: ['group', 'count']
    }
  },
  {
    concept: 'percentages',
    title: 'Percentage pass rate',
    kind: 'code',
    instructions:
      'If 7 out of 10 students passed, compute the percentage. Set passed = 7, total = 10. Print the percentage as a whole number (70).',
    starterCode:
      'let passed = 7;\nlet total = 10;\nlet pct = passed * 100 / total;\n// print(pct);\n',
    validation: {
      consoleExact: ['70'],
      explanationKeywords: ['percentage', 'rate']
    }
  },
  {
    concept: 'trends',
    title: 'Is it increasing?',
    kind: 'code',
    instructions:
      'Given values = [10, 20, 30], print "Trend: up" if each value is bigger than the previous. Just check the pattern and print.',
    starterCode: 'let values = [10, 20, 30];\n// print("Trend: up");\n',
    validation: {
      consoleExact: ['Trend: up'],
      explanationKeywords: ['trend', 'direction']
    }
  },
  {
    concept: 'normalization',
    title: 'Scale to 0-100',
    kind: 'code',
    instructions:
      'Given value = 75, min = 0, max = 100. The normalized value is (value - min) * 100 / (max - min). Print the result.',
    starterCode:
      'let value = 75;\nlet min = 0;\nlet max = 100;\nlet norm = (value - min) * 100 / (max - min);\n// print(norm);\n',
    validation: {
      consoleExact: ['75'],
      explanationKeywords: ['normalize', 'scale']
    }
  },
  {
    concept: 'buckets',
    title: 'Grade into buckets',
    kind: 'code',
    instructions:
      'Given score = 73, print which decile it falls in. If score >= 70 and score < 80, print "70s".',
    starterCode: 'let score = 73;\n// if (score >= 70) { if (score < 80) { print("70s"); } }\n',
    validation: {
      consoleExact: ['70s'],
      requireKeywords: ['if'],
      explanationKeywords: ['bucket', 'bin']
    }
  },
  {
    concept: 'validation',
    title: 'Check required fields',
    kind: 'code',
    instructions:
      'A form needs name and email. Set name = "Ada" and email = "". If either is empty, print "Missing field". Otherwise print "Valid".',
    starterCode: 'let name = "Ada";\nlet email = "";\n// check if name or email is empty\n',
    validation: {
      consoleExact: ['Missing field'],
      requireKeywords: ['if'],
      explanationKeywords: ['validate', 'required']
    }
  },
  {
    concept: 'deduplication',
    title: 'Remove duplicates',
    kind: 'code',
    instructions:
      'Given items = [1, 2, 2, 3, 3, 3], print "Unique values: 3" (there are 3 distinct numbers).',
    starterCode: '// print("Unique values: 3");\n',
    validation: {
      consoleExact: ['Unique values: 3'],
      explanationKeywords: ['unique', 'deduplicate']
    }
  },
  {
    concept: 'joining',
    title: 'Merge two lists',
    kind: 'code',
    instructions:
      'Given a = [1, 2] and b = [3, 4], print a combined count of 4. Use push to add b items to a, then count.',
    starterCode:
      'let a = [1, 2];\nlet b = [3, 4];\n// push(a, 3);\n// push(a, 4);\n// print(count(a));\n',
    validation: {
      consoleExact: ['4'],
      requireKeywords: ['push'],
      explanationKeywords: ['merge', 'join']
    }
  },
  {
    concept: 'pivot',
    title: 'Pivot summary',
    kind: 'code',
    instructions:
      'Print a summary table: "Math: 85" then "Science: 92" then "English: 78". Think of pivoting data by subject.',
    starterCode: '// print("Math: 85");\n// print("Science: 92");\n// print("English: 78");\n',
    validation: {
      consoleExact: ['Math: 85', 'Science: 92', 'English: 78'],
      explanationKeywords: ['pivot', 'summary']
    }
  },
  {
    concept: 'moving_average',
    title: 'Moving average of 3',
    kind: 'code',
    instructions:
      'Given temps = [20, 22, 25, 21, 23], print the average of the first three values.',
    starterCode:
      'let temps = [20, 22, 25, 21, 23];\nlet avg = (20 + 22 + 25) / 3;\n// print(avg);\n',
    validation: {
      consoleExact: ['22.333333333333332'],
      explanationKeywords: ['moving average', 'window']
    }
  },
  {
    concept: 'data_quality',
    title: 'Count missing values',
    kind: 'code',
    instructions:
      'Given values = [10, 0, 25, 0, 30], count how many are 0 (treat as missing). Print the count.',
    starterCode:
      'let values = [10, 0, 25, 0, 30];\nlet missing = 0;\n// repeat 5 times: if value == 0, missing = missing + 1\n// print(missing);\n',
    validation: {
      consoleExact: ['2'],
      requireKeywords: ['repeat', 'if'],
      explanationKeywords: ['missing', 'quality']
    }
  },
  {
    concept: 'etl',
    title: 'Extract and print',
    kind: 'code',
    instructions:
      'ETL stands for Extract, Transform, Load. Extract: set raw = "10,20,30". Transform: set a = 10, b = 20, c = 30. Load: print a + b + c.',
    starterCode: 'let a = 10;\nlet b = 20;\nlet c = 30;\n// print(a + b + c);\n',
    validation: {
      consoleExact: ['60'],
      explanationKeywords: ['ETL', 'pipeline']
    }
  },
  {
    concept: 'reporting',
    title: 'Daily summary report',
    kind: 'code',
    instructions:
      'Print a report: "--- Daily Summary ---" then "Orders: 15" then "Revenue: 450" then "---". Use print for each line.',
    starterCode:
      '// print("--- Daily Summary ---");\n// print("Orders: 15");\n// print("Revenue: 450");\n// print("---");\n',
    validation: {
      consoleExact: ['--- Daily Summary ---', 'Orders: 15', 'Revenue: 450', '---'],
      explanationKeywords: ['report', 'summary']
    }
  },
  {
    concept: 'aggregation',
    title: 'Count by range',
    kind: 'code',
    instructions:
      'Given ages = [8, 14, 22, 35, 12, 17], count how many are between 10 and 20 (inclusive). Print the count.',
    starterCode:
      'let ages = [8, 14, 22, 35, 12, 17];\nlet teens = 0;\n// repeat 6 times: if age >= 10 and age <= 20, teens = teens + 1\n// print(teens);\n',
    validation: {
      consoleExact: ['3'],
      requireKeywords: ['repeat', 'if'],
      explanationKeywords: ['range', 'count']
    }
  },
  {
    concept: 'inventory',
    title: 'Stock check',
    kind: 'code',
    instructions:
      'Set widgets = 5. If widgets is less than 10, print "Low stock: " + widgets. Otherwise print "OK".',
    starterCode:
      'let widgets = 5;\n// if (widgets < 10) { print("Low stock: " + widgets); } else { print("OK"); }\n',
    validation: {
      consoleExact: ['Low stock: 5'],
      requireKeywords: ['if'],
      explanationKeywords: ['inventory', 'threshold']
    }
  },
  {
    concept: 'finance',
    title: 'Simple interest',
    kind: 'code',
    instructions:
      'Compute simple interest: principal = 1000, rate = 5, time = 2. Interest = principal * rate * time / 100. Print the interest.',
    starterCode:
      'let principal = 1000;\nlet rate = 5;\nlet time = 2;\nlet interest = principal * rate * time / 100;\n// print(interest);\n',
    validation: {
      consoleExact: ['100'],
      explanationKeywords: ['interest', 'finance']
    }
  },
  {
    concept: 'percentages',
    title: 'Discount calculator',
    kind: 'code',
    instructions:
      'Item costs 80. If discount is 25%, the sale price is 80 - (80 * 25 / 100). Print the sale price.',
    starterCode:
      'let price = 80;\nlet discount = 25;\nlet salePrice = price - (price * discount / 100);\n// print(salePrice);\n',
    validation: {
      consoleExact: ['60'],
      explanationKeywords: ['discount', 'percentage']
    }
  },
  {
    concept: 'statistics',
    title: 'Range of data',
    kind: 'code',
    instructions:
      'Given values = [15, 42, 8, 33, 27], the range is max minus min = 42 - 8 = 34. Print the range.',
    starterCode: 'let values = [15, 42, 8, 33, 27];\nlet range = 42 - 8;\n// print(range);\n',
    validation: {
      consoleExact: ['34'],
      explanationKeywords: ['range', 'spread']
    }
  },
  {
    concept: 'recording',
    title: 'Log sensor data',
    kind: 'code',
    instructions:
      'Print "Timestamp: 1" then "Value: 22.5" then "Unit: C". This is what a data logger outputs.',
    starterCode: '// print("Timestamp: 1");\n// print("Value: 22.5");\n// print("Unit: C");\n',
    validation: {
      consoleExact: ['Timestamp: 1', 'Value: 22.5', 'Unit: C'],
      explanationKeywords: ['log', 'sensor']
    }
  },
  {
    concept: 'survey',
    title: 'Survey tallies',
    kind: 'code',
    instructions: 'Survey results: "yes" = 12, "no" = 5, "maybe" = 3. Print "Total responses: 20".',
    starterCode:
      'let yes = 12;\nlet no = 5;\nlet maybe = 3;\nlet total = yes + no + maybe;\n// print("Total responses: " + total);\n',
    validation: {
      consoleExact: ['Total responses: 20'],
      explanationKeywords: ['survey', 'tally']
    }
  },
  {
    concept: 'grades',
    title: 'Class average',
    kind: 'code',
    instructions: 'Five students scored 70, 80, 90, 60, 100. Compute and print the class average.',
    starterCode:
      'let s1 = 70;\nlet s2 = 80;\nlet s3 = 90;\nlet s4 = 60;\nlet s5 = 100;\nlet avg = (s1 + s2 + s3 + s4 + s5) / 5;\n// print(avg);\n',
    validation: {
      consoleExact: ['80'],
      explanationKeywords: ['average', 'grades']
    }
  },
  {
    concept: 'attendance',
    title: 'Attendance rate',
    kind: 'code',
    instructions:
      'Out of 20 school days, a student attended 18. Attendance rate = 18 * 100 / 20. Print the rate.',
    starterCode:
      'let attended = 18;\nlet total = 20;\nlet rate = attended * 100 / total;\n// print(rate);\n',
    validation: {
      consoleExact: ['90'],
      explanationKeywords: ['rate', 'attendance']
    }
  },
  {
    concept: 'weather',
    title: 'Weekly temperatures',
    kind: 'code',
    instructions: 'Temps = [22, 25, 19, 28, 24, 21, 23]. Print the total sum of all temperatures.',
    starterCode:
      'let temps = [22, 25, 19, 28, 24, 21, 23];\nlet sum = 22 + 25 + 19 + 28 + 24 + 21 + 23;\n// print(sum);\n',
    validation: {
      consoleExact: ['162'],
      explanationKeywords: ['sum', 'weather']
    }
  },
  {
    concept: 'sports',
    title: 'Win percentage',
    kind: 'code',
    instructions: 'A team won 8 games out of 12. Print the win percentage (8 * 100 / 12).',
    starterCode: 'let wins = 8;\nlet games = 12;\nlet pct = wins * 100 / games;\n// print(pct);\n',
    validation: {
      consoleExact: ['66.66666666666667'],
      explanationKeywords: ['percentage', 'sports']
    }
  },
  {
    concept: 'budget',
    title: 'Budget remaining',
    kind: 'code',
    instructions:
      'Budget is 500. Expenses are 120 + 85 + 200. Print "Remaining: " plus the leftover.',
    starterCode:
      'let budget = 500;\nlet spent = 120 + 85 + 200;\nlet remaining = budget - spent;\n// print("Remaining: " + remaining);\n',
    validation: {
      consoleExact: ['Remaining: 95'],
      explanationKeywords: ['budget', 'subtract']
    }
  },
  {
    concept: 'comparison',
    title: 'Compare datasets',
    kind: 'code',
    instructions:
      'Set groupA = 45 and groupB = 52. If groupB is larger, print "Group B leads by " + (groupB - groupA).',
    starterCode:
      'let groupA = 45;\nlet groupB = 52;\n// if (groupB > groupA) { print("Group B leads by " + (groupB - groupA)); }\n',
    validation: {
      consoleExact: ['Group B leads by 7'],
      requireKeywords: ['if'],
      explanationKeywords: ['compare', 'difference']
    }
  },
  // ─── Advanced (91-130) ───
  {
    concept: 'sql_concepts',
    title: 'SELECT and WHERE',
    kind: 'code',
    instructions:
      'Simulate SQL: from records [85, 42, 91, 37, 78], select only those above 70. Print each one that passes.',
    starterCode:
      'let records = [85, 42, 91, 37, 78];\n// repeat 5 times: if record > 70, print it\n',
    validation: {
      consoleExact: ['85', '91', '78'],
      requireKeywords: ['repeat', 'if'],
      explanationKeywords: ['SELECT', 'WHERE']
    }
  },
  {
    concept: 'sql_concepts',
    title: 'ORDER BY',
    kind: 'code',
    instructions:
      'Given values = [30, 10, 20], print them sorted: 10, 20, 30. You know the values, so arrange them in order.',
    starterCode: '// print the values from smallest to largest\n',
    validation: {
      consoleExact: ['10', '20', '30'],
      explanationKeywords: ['ORDER', 'sort']
    }
  },
  {
    concept: 'aggregation',
    title: 'GROUP BY concept',
    kind: 'code',
    instructions:
      'Print "A: 3" then "B: 2" then "C: 4". This simulates grouping records by category and counting.',
    starterCode: '// print("A: 3");\n// print("B: 2");\n// print("C: 4");\n',
    validation: {
      consoleExact: ['A: 3', 'B: 2', 'C: 4'],
      explanationKeywords: ['GROUP', 'aggregate']
    }
  },
  {
    concept: 'joins',
    title: 'Merge two tables',
    kind: 'code',
    instructions:
      'Table A has IDs [1, 2, 3] and Table B has IDs [2, 3, 4]. The overlap (intersection) is [2, 3]. Print the count of overlapping IDs.',
    starterCode: '// print("Overlap count: 2");\n',
    validation: {
      consoleExact: ['Overlap count: 2'],
      explanationKeywords: ['join', 'intersect']
    }
  },
  {
    concept: 'statistics',
    title: 'Variance concept',
    kind: 'code',
    instructions:
      'Values = [10, 10, 10]. Since all values are the same, the variance is 0. Print "Variance: 0". Then values2 = [8, 10, 12] — print "Variance: small".',
    starterCode: '// print("Variance: 0");\n// print("Variance: small");\n',
    validation: {
      consoleExact: ['Variance: 0', 'Variance: small'],
      explanationKeywords: ['variance', 'spread']
    }
  },
  {
    concept: 'hypothesis',
    title: 'A/B test result',
    kind: 'code',
    instructions:
      'Version A converted 30 out of 100 visitors. Version B converted 45 out of 100. Print "A: 30%" then "B: 45%" then "B is the winner".',
    starterCode: '// print("A: 30%");\n// print("B: 45%");\n// print("B is the winner");\n',
    validation: {
      consoleExact: ['A: 30%', 'B: 45%', 'B is the winner'],
      explanationKeywords: ['A/B', 'test']
    }
  },
  {
    concept: 'sampling',
    title: 'Random sample size',
    kind: 'code',
    instructions:
      'From 1000 records, you want a 10% sample. Compute 1000 * 10 / 100 = 100. Print "Sample size: 100".',
    starterCode:
      'let population = 1000;\nlet samplePct = 10;\nlet sampleSize = population * samplePct / 100;\n// print("Sample size: " + sampleSize);\n',
    validation: {
      consoleExact: ['Sample size: 100'],
      explanationKeywords: ['sample', 'subset']
    }
  },
  {
    concept: 'bias',
    title: 'Identify bias',
    kind: 'code',
    instructions:
      'A survey only polled 5 people from one school. Print "Sample too small" then "Not representative". Data needs broad sampling.',
    starterCode: '// print("Sample too small");\n// print("Not representative");\n',
    validation: {
      consoleExact: ['Sample too small', 'Not representative'],
      explanationKeywords: ['bias', 'representative']
    }
  },
  {
    concept: 'visualization',
    title: 'Simple bar chart',
    kind: 'block',
    instructions:
      'Draw a bar chart: use repeat to make 3 bars. Each bar is forward 40, back 40, right to move to the next bar position.',
    palette: ['repeat', 'forward', 'back', 'right', 'clear'],
    validation: {
      requireBlockTypes: ['repeat', 'forward', 'back'],
      explanationKeywords: ['bar', 'chart']
    }
  },
  {
    concept: 'visualization',
    title: 'Line graph',
    kind: 'block',
    instructions:
      'Draw a rising trend line: forward, left turn, forward, right turn, forward. This makes a line that goes up.',
    palette: ['forward', 'left', 'right', 'penColor', 'clear'],
    validation: {
      requireBlockTypes: ['forward', 'left', 'right'],
      explanationKeywords: ['line', 'trend']
    }
  },
  {
    concept: 'pipelines',
    title: 'Pipeline steps',
    kind: 'code',
    instructions:
      'Print "Step 1: Extract" then "Step 2: Clean" then "Step 3: Analyze" then "Step 4: Report". Data pipelines have ordered steps.',
    starterCode: '// print each step of the pipeline\n',
    validation: {
      consoleExact: ['Step 1: Extract', 'Step 2: Clean', 'Step 3: Analyze', 'Step 4: Report'],
      explanationKeywords: ['pipeline', 'steps']
    }
  },
  {
    concept: 'data_modeling',
    title: 'Entity relationship',
    kind: 'code',
    instructions:
      'A school has students and courses. Print "Student enrollments" then "Student -> Course (many to many)". Think about how data connects.',
    starterCode:
      '// print("Student enrollments");\n// print("Student -> Course (many to many)");\n',
    validation: {
      consoleExact: ['Student enrollments', 'Student -> Course (many to many)'],
      explanationKeywords: ['entity', 'relationship']
    }
  },
  {
    concept: 'indexing',
    title: 'Why indexes help',
    kind: 'code',
    instructions:
      'Without an index, searching 1000 records means checking every one. With an index, you jump straight there. Print "Without index: 1000 checks" then "With index: 1 check".',
    starterCode: '// print both lines about indexing\n',
    validation: {
      consoleExact: ['Without index: 1000 checks', 'With index: 1 check'],
      explanationKeywords: ['index', 'speed']
    }
  },
  {
    concept: 'optimization',
    title: 'Query optimization',
    kind: 'code',
    instructions:
      'A query scans 1 million rows but only returns 10. Print "Scan cost: 1000000" then "Return size: 10" then "Add a filter!".',
    starterCode: '// print the cost and suggestion\n',
    validation: {
      consoleExact: ['Scan cost: 1000000', 'Return size: 10', 'Add a filter!'],
      explanationKeywords: ['optimize', 'filter']
    }
  },
  {
    concept: 'privacy',
    title: 'Protect PII',
    kind: 'code',
    instructions:
      'Personal data like names and addresses is PII (Personally Identifiable Information). Print "Name: [redacted]" and "Email: [redacted]" to show masking.',
    starterCode: '// print("Name: [redacted]");\n// print("Email: [redacted]");\n',
    validation: {
      consoleExact: ['Name: [redacted]', 'Email: [redacted]'],
      explanationKeywords: ['PII', 'privacy']
    }
  },
  {
    concept: 'streaming',
    title: 'Batch vs streaming',
    kind: 'code',
    instructions:
      'Print "Batch: process 1000 records at midnight" then "Stream: process each record as it arrives". Both are valid approaches.',
    starterCode: '// print both approaches\n',
    validation: {
      consoleExact: [
        'Batch: process 1000 records at midnight',
        'Stream: process each record as it arrives'
      ],
      explanationKeywords: ['batch', 'stream']
    }
  },
  {
    concept: 'ethics',
    title: 'Fair data use',
    kind: 'code',
    instructions:
      'Data can be used fairly or unfairly. Print "Rule 1: Collect only what you need" then "Rule 2: Tell people how you use it" then "Rule 3: Let them opt out".',
    starterCode: '// print the three rules\n',
    validation: {
      consoleExact: [
        'Rule 1: Collect only what you need',
        'Rule 2: Tell people how you use it',
        'Rule 3: Let them opt out'
      ],
      explanationKeywords: ['ethics', 'fair']
    }
  },
  {
    concept: 'reproducibility',
    title: 'Reproducible results',
    kind: 'code',
    instructions:
      'If you run the same analysis twice and get different results, something is wrong. Print "Same input -> same output" then "Always verify".',
    starterCode: '// print both lines\n',
    validation: {
      consoleExact: ['Same input -> same output', 'Always verify'],
      explanationKeywords: ['reproducible', 'verify']
    }
  },
  {
    concept: 'dashboards',
    title: 'Dashboard KPIs',
    kind: 'code',
    instructions:
      'Print three KPIs: "Revenue: $4500" then "Users: 320" then "Growth: 12%". Dashboards show key metrics at a glance.',
    starterCode: '// print the three KPIs\n',
    validation: {
      consoleExact: ['Revenue: $4500', 'Users: 320', 'Growth: 12%'],
      explanationKeywords: ['KPI', 'dashboard']
    }
  },
  {
    concept: 'aggregation',
    title: 'Pivot table output',
    kind: 'code',
    instructions:
      'Print a pivot table: "         Q1  Q2  Q3" then "ProductA 100 120 130" then "ProductB  80  90 110". Format the columns with spaces.',
    starterCode: '// print the pivot table rows\n',
    validation: {
      consoleExact: ['         Q1  Q2  Q3', 'ProductA 100 120 130', 'ProductB  80  90 110'],
      explanationKeywords: ['pivot', 'table']
    }
  },
  {
    concept: 'data_governance',
    title: 'Data ownership',
    kind: 'code',
    instructions:
      'Print "Owner: Data Team" then "Quality: Their responsibility" then "Access: Role-based". Good governance means clear ownership.',
    starterCode: '// print governance rules\n',
    validation: {
      consoleExact: ['Owner: Data Team', 'Quality: Their responsibility', 'Access: Role-based'],
      explanationKeywords: ['governance', 'ownership']
    }
  },
  {
    concept: 'time_series',
    title: 'Monthly revenue',
    kind: 'code',
    instructions:
      'Revenue for Jan=100, Feb=120, Mar=90. Print "Jan: 100" then "Feb: 120" then "Mar: 90" then "Trend: variable".',
    starterCode: '// print monthly figures\n',
    validation: {
      consoleExact: ['Jan: 100', 'Feb: 120', 'Mar: 90', 'Trend: variable'],
      explanationKeywords: ['time series', 'trend']
    }
  },
  {
    concept: 'dimensionality',
    title: 'Too many columns',
    kind: 'code',
    instructions:
      'A dataset has 500 columns but only 10 are useful. Print "Columns: 500" then "Useful: 10" then "Reduce dimensions!".',
    starterCode: '// print dimension info\n',
    validation: {
      consoleExact: ['Columns: 500', 'Useful: 10', 'Reduce dimensions!'],
      explanationKeywords: ['dimension', 'reduce']
    }
  },
  {
    concept: 'clustering',
    title: 'Group similar items',
    kind: 'code',
    instructions:
      'Print "Cluster 1: [1, 2, 3]" then "Cluster 2: [10, 11, 12]" then "Cluster 3: [20, 21, 22]". Clustering puts similar data together.',
    starterCode: '// print three clusters\n',
    validation: {
      consoleExact: ['Cluster 1: [1, 2, 3]', 'Cluster 2: [10, 11, 12]', 'Cluster 3: [20, 21, 22]'],
      explanationKeywords: ['cluster', 'group']
    }
  },
  {
    concept: 'regression',
    title: 'Trend line equation',
    kind: 'code',
    instructions:
      'A simple trend: y = 2x + 1. For x = 3, y = 7. Print "x=3, y=7". Regression finds equations like this from data.',
    starterCode: 'let x = 3;\nlet y = 2 * x + 1;\n// print("x=" + x + ", y=" + y);\n',
    validation: {
      consoleExact: ['x=3, y=7'],
      explanationKeywords: ['regression', 'equation']
    }
  },
  {
    concept: 'classification',
    title: 'Spam filter',
    kind: 'code',
    instructions:
      'If an email has "FREE" and "CLICK NOW", it is spam. Set hasFree = true and hasClick = true. Print "Spam detected".',
    starterCode:
      'let hasFree = true;\nlet hasClick = true;\n// if (hasFree) { if (hasClick) { print("Spam detected"); } }\n',
    validation: {
      consoleExact: ['Spam detected'],
      requireKeywords: ['if'],
      explanationKeywords: ['classify', 'filter']
    }
  },
  {
    concept: 'forecasting',
    title: 'Simple forecast',
    kind: 'code',
    instructions:
      'Last 3 months: 100, 110, 120. Each month grew by 10. Next month should be 130. Print "Forecast: 130".',
    starterCode: '// print("Forecast: 130");\n',
    validation: {
      consoleExact: ['Forecast: 130'],
      explanationKeywords: ['forecast', 'predict']
    }
  },
  {
    concept: 'anomaly_detection',
    title: 'Flag the spike',
    kind: 'code',
    instructions:
      'Daily errors = [2, 3, 1, 2, 50, 3]. Print "Spike detected: 50" for the anomalous value.',
    starterCode: 'let errors = [2, 3, 1, 2, 50, 3];\n// check each value, print spike for 50\n',
    validation: {
      consoleExact: ['Spike detected: 50'],
      requireKeywords: ['if'],
      explanationKeywords: ['anomaly', 'spike']
    }
  },
  {
    concept: 'recommendation',
    title: 'Recommend similar',
    kind: 'code',
    instructions:
      'User likes "Python" and "Data". Print "Recommendation: SQL" because it is related. Recommendation systems find similar items.',
    starterCode: '// print("Recommendation: SQL");\n',
    validation: {
      consoleExact: ['Recommendation: SQL'],
      explanationKeywords: ['recommend', 'similar']
    }
  },
  {
    concept: 'data_lake',
    title: 'Data lake vs warehouse',
    kind: 'code',
    instructions:
      'Print "Lake: stores raw data in any format" then "Warehouse: stores cleaned, structured data". Both store data differently.',
    starterCode: '// print both definitions\n',
    validation: {
      consoleExact: [
        'Lake: stores raw data in any format',
        'Warehouse: stores cleaned, structured data'
      ],
      explanationKeywords: ['lake', 'warehouse']
    }
  },
  {
    concept: 'metadata',
    title: 'Data about data',
    kind: 'code',
    instructions:
      'Metadata describes a dataset. Print "Name: student_scores" then "Rows: 500" then "Columns: 12" then "Updated: 2024-01-15".',
    starterCode: '// print metadata fields\n',
    validation: {
      consoleExact: ['Name: student_scores', 'Rows: 500', 'Columns: 12', 'Updated: 2024-01-15'],
      explanationKeywords: ['metadata', 'describe']
    }
  },
  {
    concept: 'lineage',
    title: 'Data lineage',
    kind: 'code',
    instructions:
      'Print "Source: sensor_api" then "Transform: clean_and_aggregate" then "Dest: dashboard". Lineage tracks where data comes from.',
    starterCode: '// print lineage steps\n',
    validation: {
      consoleExact: ['Source: sensor_api', 'Transform: clean_and_aggregate', 'Dest: dashboard'],
      explanationKeywords: ['lineage', 'trace']
    }
  },
  {
    concept: 'normalization',
    title: 'Min-max scaling',
    kind: 'code',
    instructions:
      'Value = 75, min = 50, max = 100. Scaled = (75 - 50) * 100 / (100 - 50) = 50. Print "Scaled: 50".',
    starterCode:
      'let value = 75;\nlet min = 50;\nlet max = 100;\nlet scaled = (value - min) * 100 / (max - min);\n// print("Scaled: " + scaled);\n',
    validation: {
      consoleExact: ['Scaled: 50'],
      explanationKeywords: ['scale', 'normalize']
    }
  },
  {
    concept: 'encoding',
    title: 'Encode categories',
    kind: 'code',
    instructions:
      'Map color names to numbers: Red=1, Blue=2, Green=3. If color = "Blue", print "Encoded: 2".',
    starterCode:
      'let color = "Blue";\n// if (color == "Red") { print("Encoded: 1"); }\n// if (color == "Blue") { print("Encoded: 2"); }\n// if (color == "Green") { print("Encoded: 3"); }\n',
    validation: {
      consoleExact: ['Encoded: 2'],
      requireKeywords: ['if'],
      explanationKeywords: ['encode', 'categorical']
    }
  },
  // ─── Mastery (131-150) ───
  {
    concept: 'databases',
    title: 'SQL vs NoSQL',
    kind: 'reference',
    instructions:
      'Read about SQL vs NoSQL databases. Your goal: explain when you would pick each one.',
    reference: {
      kind: 'docs',
      title: 'SQL vs NoSQL - MongoDB',
      url: 'https://www.mongodb.com/nosql-explained',
      whyKey: 'reference.data.why'
    },
    validation: {
      explanationKeywords: ['SQL', 'NoSQL']
    }
  },
  {
    concept: 'data_science',
    title: 'The data science process',
    kind: 'reference',
    instructions:
      'Read about the data science workflow. Your goal: describe the steps from question to insight.',
    reference: {
      kind: 'docs',
      title: 'Kaggle: Intro to Data Science',
      url: 'https://www.kaggle.com/learn/intro-to-machine-learning',
      whyKey: 'reference.data.why'
    },
    validation: {
      explanationKeywords: ['question', 'data', 'insight']
    }
  },
  {
    concept: 'machine_learning',
    title: 'Supervised vs unsupervised',
    kind: 'reference',
    instructions:
      'Read about types of machine learning. Your goal: explain the difference between supervised and unsupervised learning with an example.',
    reference: {
      kind: 'docs',
      title: 'ML Crash Course',
      url: 'https://developers.google.com/machine-learning/crash-course',
      whyKey: 'reference.data.why'
    },
    validation: {
      explanationKeywords: ['supervised', 'label']
    }
  },
  {
    concept: 'feature_engineering',
    title: 'Creating features',
    kind: 'reference',
    instructions:
      'Read about feature engineering. Your goal: explain what a feature is and why raw data needs to be transformed.',
    reference: {
      kind: 'docs',
      title: 'Feature Engineering Guide',
      url: 'https://en.wikipedia.org/wiki/Feature_engineering',
      whyKey: 'reference.data.why'
    },
    validation: {
      explanationKeywords: ['feature', 'transform']
    }
  },
  {
    concept: 'open_data',
    title: 'Public datasets',
    kind: 'reference',
    instructions:
      'Browse Kaggle datasets. Your goal: name one public dataset and a question it could answer.',
    reference: {
      kind: 'docs',
      title: 'Kaggle Datasets',
      url: 'https://www.kaggle.com/datasets',
      whyKey: 'reference.data.why'
    },
    validation: {
      explanationKeywords: ['dataset', 'question']
    }
  },
  {
    concept: 'data_journalism',
    title: 'Data in the news',
    kind: 'reference',
    instructions:
      'Read about data journalism. Your goal: explain how data helps tell news stories.',
    reference: {
      kind: 'docs',
      title: 'Data Journalism Handbook',
      url: 'https://datajournalism.org/read-the-handbook',
      whyKey: 'reference.data.why'
    },
    validation: {
      explanationKeywords: ['journalism', 'story']
    }
  },
  {
    concept: 'geospatial',
    title: 'Geospatial data',
    kind: 'reference',
    instructions:
      'Read about geospatial data concepts. Your goal: explain what geospatial data is and give an example.',
    reference: {
      kind: 'docs',
      title: 'Geospatial Data - Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Spatial_analysis',
      whyKey: 'reference.data.why'
    },
    validation: {
      explanationKeywords: ['location', 'map']
    }
  },
  {
    concept: 'big_data',
    title: 'What is Big Data?',
    kind: 'reference',
    instructions:
      'Read about Big Data (the 3 Vs). Your goal: explain volume, velocity, and variety.',
    reference: {
      kind: 'docs',
      title: 'Big Data - IBM',
      url: 'https://www.ibm.com/topics/big-data',
      whyKey: 'reference.data.why'
    },
    validation: {
      explanationKeywords: ['volume', 'velocity', 'variety']
    }
  },
  {
    concept: 'healthcare_data',
    title: 'Data in healthcare',
    kind: 'reference',
    instructions:
      'Read about how data is used in healthcare. Your goal: describe one way data helps doctors.',
    reference: {
      kind: 'docs',
      title: 'Health Data - WHO',
      url: 'https://www.who.int/data',
      whyKey: 'reference.data.why'
    },
    validation: {
      explanationKeywords: ['healthcare', 'patient']
    }
  },
  {
    concept: 'sports_analytics',
    title: 'Data in sports',
    kind: 'reference',
    instructions:
      'Read about sports analytics. Your goal: explain how teams use data to make decisions.',
    reference: {
      kind: 'docs',
      title: 'Sports Analytics - Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Sports_analytics',
      whyKey: 'reference.data.why'
    },
    validation: {
      explanationKeywords: ['sports', 'performance']
    }
  },
  {
    concept: 'finance_data',
    title: 'Data in finance',
    kind: 'reference',
    instructions:
      'Read about financial data analysis. Your goal: explain how banks use data to spot fraud.',
    reference: {
      kind: 'docs',
      title: 'Financial Data Analysis',
      url: 'https://en.wikipedia.org/wiki/Financial_data',
      whyKey: 'reference.data.why'
    },
    validation: {
      explanationKeywords: ['finance', 'fraud']
    }
  },
  {
    concept: 'privacy',
    title: 'GDPR and data privacy',
    kind: 'reference',
    instructions: 'Read about GDPR. Your goal: explain what rights people have over their data.',
    reference: {
      kind: 'docs',
      title: 'GDPR Overview',
      url: 'https://gdpr-info.eu/',
      whyKey: 'reference.data.why'
    },
    validation: {
      explanationKeywords: ['GDPR', 'right']
    }
  },
  {
    concept: 'responsible_ai',
    title: 'Responsible AI',
    kind: 'reference',
    instructions:
      'Read about responsible AI practices. Your goal: explain why bias in data leads to bias in AI.',
    reference: {
      kind: 'docs',
      title: 'Google: Responsible AI',
      url: 'https://ai.google/responsibilities/responsible-ai-practices/',
      whyKey: 'reference.data.why'
    },
    validation: {
      explanationKeywords: ['bias', 'fairness']
    }
  },
  {
    concept: 'data_careers',
    title: 'Data career paths',
    kind: 'reference',
    instructions:
      'Explore data career options. Your goal: name three different data-related jobs and what each does.',
    reference: {
      kind: 'docs',
      title: 'Data Careers - BLS',
      url: 'https://www.bls.gov/ooh computer-and-information-technology/home.htm',
      whyKey: 'reference.data.why'
    },
    validation: {
      explanationKeywords: ['analyst', 'engineer', 'scientist']
    }
  },
  {
    concept: 'competitions',
    title: 'Data competitions',
    kind: 'reference',
    instructions:
      'Browse Kaggle competitions. Your goal: describe what a data competition is and why people participate.',
    reference: {
      kind: 'docs',
      title: 'Kaggle Competitions',
      url: 'https://www.kaggle.com/competitions',
      whyKey: 'reference.data.why'
    },
    validation: {
      explanationKeywords: ['competition', 'practice']
    }
  },
  {
    concept: 'exploratory_analysis',
    title: 'EDA basics',
    kind: 'reference',
    instructions:
      'Read about Exploratory Data Analysis. Your goal: explain why you should explore data before modeling.',
    reference: {
      kind: 'docs',
      title: 'EDA - Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Exploratory_data_analysis',
      whyKey: 'reference.data.why'
    },
    validation: {
      explanationKeywords: ['explore', 'visualize']
    }
  },
  {
    concept: 'cleaning',
    title: 'Data cleaning best practices',
    kind: 'reference',
    instructions: 'Read about data cleaning. Your goal: list three common data quality problems.',
    reference: {
      kind: 'docs',
      title: 'Data Cleaning Guide',
      url: 'https://en.wikipedia.org/wiki/Data_cleansing',
      whyKey: 'reference.data.why'
    },
    validation: {
      explanationKeywords: ['missing', 'duplicate', 'inconsistent']
    }
  },
  {
    concept: 'chart_types',
    title: 'Choosing the right chart',
    kind: 'reference',
    instructions:
      'Read about data visualization chart types. Your goal: name when to use a bar chart vs a line chart.',
    reference: {
      kind: 'docs',
      title: 'Chart Types - Data-to-Viz',
      url: 'https://www.data-to-viz.com/',
      whyKey: 'reference.data.why'
    },
    validation: {
      explanationKeywords: ['bar', 'line', 'comparison']
    }
  },
  {
    concept: 'storytelling',
    title: 'Storytelling with data',
    kind: 'reference',
    instructions:
      'Read about data storytelling. Your goal: explain why a good data story needs both numbers and narrative.',
    reference: {
      kind: 'docs',
      title: 'Storytelling with Data',
      url: 'https://storytellingwithdata.com/',
      whyKey: 'reference.data.why'
    },
    validation: {
      explanationKeywords: ['story', 'narrative']
    }
  },
  {
    concept: 'sensor_data',
    title: 'Working with sensors',
    kind: 'reference',
    instructions:
      'Read about IoT sensor data. Your goal: explain one challenge of working with real-time sensor data.',
    reference: {
      kind: 'docs',
      title: 'IoT Data - Arduino',
      url: 'https://docs.arduino.cc/learn/',
      whyKey: 'reference.data.why'
    },
    validation: {
      explanationKeywords: ['sensor', 'real-time']
    }
  }
]
