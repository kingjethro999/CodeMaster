// 140 new StageSeed entries for the embedded career path (embedded-11 through embedded-150).
// Append the contents of `embeddedStagesExtended` to the `embeddedStages` array in data.ts.

import type { StageSeed } from './data'

export const embeddedStagesExtended: StageSeed[] = [
  // ═══════════════════════════════════════════════════════════════
  // FOUNDATION (11–25): Deeper variables, conditionals, loops, functions
  // ═══════════════════════════════════════════════════════════════

  {
    concept: 'pin_values',
    title: 'Sensor on pin A0',
    kind: 'code',
    instructions:
      'A sensor is connected to analog pin A0. Store 512 in a variable called sensorPin and print "Pin A0 reads: " followed by the value. In real hardware, the microcontroller reads voltage on a pin and turns it into a number just like this.',
    starterCode: '// let sensorPin = 512;\n// print("Pin A0 reads: " + sensorPin);\n',
    validation: {
      consoleExact: ['Pin A0 reads: 512'],
      explanationKeywords: ['pin', 'sensor', 'variable']
    }
  },
  {
    concept: 'sensor_reading',
    title: 'Read the temperature',
    kind: 'code',
    instructions:
      'A temperature sensor returns 73. Simulate the reading by storing 73 in a variable called temp, then print "Temperature: " plus the value. Real sensors give numbers that your code interprets.',
    starterCode: '// let temp = 73;\n// print("Temperature: " + temp);\n',
    validation: {
      consoleExact: ['Temperature: 73'],
      explanationKeywords: ['sensor', 'temperature', 'reading']
    }
  },
  {
    concept: 'threshold_check',
    title: 'Is it too hot?',
    kind: 'code',
    instructions:
      'Your sensor reads 85. If the temperature is greater than 80, print "Too hot — fan on!". Otherwise print "Temperature normal.". Threshold checks are how embedded systems react to the real world.',
    starterCode: 'let temp = 85;\n// if (temp > 80) { ... } else { ... }\n',
    validation: {
      consoleExact: ['Too hot — fan on!'],
      requireKeywords: ['if'],
      explanationKeywords: ['threshold', 'temperature', 'condition']
    }
  },
  {
    concept: 'nested_conditions',
    title: 'Multi-sensor decision',
    kind: 'code',
    instructions:
      'A robot reads both a light sensor (value 40) and a distance sensor (value 15). If light is below 50 AND distance is below 20, print "Turn on headlight". Otherwise print "All clear". Use nested if statements to check both.',
    starterCode:
      'let light = 40;\nlet distance = 15;\n// if (light < 50) {\n//   if (distance < 20) { ... } else { ... }\n// } else { ... }\n',
    validation: {
      consoleExact: ['Turn on headlight'],
      requireKeywords: ['if'],
      explanationKeywords: ['nested', 'sensor', 'decision']
    }
  },
  {
    concept: 'string_building',
    title: 'Build a status message',
    kind: 'code',
    instructions:
      'Build a status message by combining strings and numbers. Set device to "Sensor1" and value to 42, then print "Device: Sensor1 Value: 42" using string concatenation with the + operator.',
    starterCode:
      'let device = "Sensor1";\nlet value = 42;\n// print("Device: " + device + " Value: " + value);\n',
    validation: {
      consoleExact: ['Device: Sensor1 Value: 42'],
      explanationKeywords: ['string', 'concatenation', 'message']
    }
  },
  {
    concept: 'boolean_digital',
    title: 'Digital read',
    kind: 'code',
    instructions:
      'A button is either pressed or not — that is a boolean. Store true in a variable called buttonPressed, then if it is true print "Button active", otherwise print "No press". Digital pins read only true or false.',
    starterCode: 'let buttonPressed = true;\n// if (buttonPressed) { ... } else { ... }\n',
    validation: {
      consoleExact: ['Button active'],
      requireKeywords: ['if'],
      explanationKeywords: ['boolean', 'digital', 'button']
    }
  },
  {
    concept: 'pulse_counter',
    title: 'Count the pulses',
    kind: 'code',
    instructions:
      'A sensor sends pulses. Start count at 0, then use a repeat that runs 6 times and adds 1 to count each time. After the loop, print count. Pulse counting is how tachometers measure RPM.',
    starterCode: 'let count = 0;\n// repeat (6) { count = count + 1; }\n// print(count);\n',
    validation: {
      consoleExact: ['6'],
      requireKeywords: ['repeat'],
      explanationKeywords: ['pulse', 'count', 'loop']
    }
  },
  {
    concept: 'sensor_state',
    title: 'Track sensor state',
    kind: 'code',
    instructions:
      'A motion sensor is either triggered or idle. Store "triggered" in a variable called sensorState, then print "Motion: triggered". State tracking is how firmware knows what happened between reads.',
    starterCode: 'let sensorState = "triggered";\n// print("Motion: " + sensorState);\n',
    validation: {
      consoleExact: ['Motion: triggered'],
      explanationKeywords: ['state', 'sensor', 'variable']
    }
  },
  {
    concept: 'else_if_chains',
    title: 'Multiple thresholds',
    kind: 'code',
    instructions:
      'A battery sensor reads 35. If voltage is greater than 40 print "Full", else if voltage is greater than 25 print "Medium", else print "Low". Store voltage as 35 and use if/else-if/else to pick the right message.',
    starterCode:
      'let voltage = 35;\n// if (voltage > 40) { ... } else if (voltage > 25) { ... } else { ... }\n',
    validation: {
      consoleExact: ['Medium'],
      requireKeywords: ['if', 'else'],
      explanationKeywords: ['else-if', 'threshold', 'battery']
    }
  },
  {
    concept: 'range_check',
    title: 'Safe range check',
    kind: 'code',
    instructions:
      'A sensor reading must stay between 200 and 800 to be valid. Store reading at 350. If reading is greater than or equal to 200 AND less than or equal to 800, print "Reading valid". Otherwise print "Out of range".',
    starterCode:
      'let reading = 350;\n// if (reading >= 200 && reading <= 800) { ... } else { ... }\n',
    validation: {
      consoleExact: ['Reading valid'],
      requireKeywords: ['if'],
      explanationKeywords: ['range', 'comparison', 'validation']
    }
  },
  {
    concept: 'incrementing_counter',
    title: 'Sample counter',
    kind: 'code',
    instructions:
      'Every time a sensor takes a reading, the sample counter goes up by 1. Start samples at 0, increment 10 times in a repeat loop, then print "Total samples: " plus samples. This is how data loggers track how many readings they collected.',
    starterCode:
      'let samples = 0;\n// repeat (10) { samples = samples + 1; }\n// print("Total samples: " + samples);\n',
    validation: {
      consoleExact: ['Total samples: 10'],
      requireKeywords: ['repeat'],
      explanationKeywords: ['counter', 'increment', 'sample']
    }
  },
  {
    concept: 'hardware_naming',
    title: 'Name your hardware',
    kind: 'code',
    instructions:
      'Good variable names tell you what the hardware does. Create ledPin = 13, sensorPin = "A0", and motorPin = 9, then print "LED on pin 13". Clear names help when wiring gets complex.',
    starterCode:
      'let ledPin = 13;\nlet sensorPin = "A0";\nlet motorPin = 9;\n// print("LED on pin " + ledPin);\n',
    validation: {
      consoleExact: ['LED on pin 13'],
      explanationKeywords: ['naming', 'variable', 'hardware']
    }
  },
  {
    concept: 'comments_firmware',
    title: 'Comment your circuit',
    kind: 'code',
    instructions:
      'Firmware runs for years on a device. Comments explain WHY, not just what. Write a program that blinks an LED (print "LED on" then "LED off") and add a comment explaining that pin 13 is the built-in LED.',
    starterCode:
      '// Pin 13 is the built-in LED on most boards\n// print("LED on");\n// print("LED off");\n',
    validation: {
      consoleExact: ['LED on', 'LED off'],
      explanationKeywords: ['comment', 'documentation', 'hardware']
    }
  },
  {
    concept: 'scope_firmware',
    title: 'Variable scope in firmware',
    kind: 'code',
    instructions:
      'In embedded code, variables inside functions disappear when the function ends. Write a function readSensor() that creates a local variable value = 42, prints it, then outside the function try to print value again — it will not exist. This is scope.',
    starterCode:
      '// function readSensor() {\n//   let value = 42;\n//   print(value);\n// }\n// readSensor();\n// print(value);\n',
    validation: {
      consoleExact: ['42'],
      requireKeywords: ['function'],
      explanationKeywords: ['scope', 'variable', 'function']
    }
  },
  {
    concept: 'function_params',
    title: 'Delay with a parameter',
    kind: 'code',
    instructions:
      'Embedded programs use delays to wait. Write a function waitFor(ms) that prints "Waiting: " followed by the ms value, then call it with 500. Parameters let one function handle many different delay times.',
    starterCode:
      '// function waitFor(ms) {\n//   print("Waiting: " + ms);\n// }\n// waitFor(500);\n',
    validation: {
      consoleExact: ['Waiting: 500'],
      requireKeywords: ['function'],
      explanationKeywords: ['parameter', 'delay', 'function']
    }
  },
  {
    concept: 'return_values',
    title: 'Compute a sensor value',
    kind: 'code',
    instructions:
      'Raw sensor readings need conversion. Write a function toCelsius(raw) that returns raw divided by 4 (using MasterScript division), then store the result of toCelsius(100) in a variable and print "Temperature: 25". Return values let functions hand results back to the caller.',
    starterCode:
      '// function toCelsius(raw) {\n//   return raw / 4;\n// }\n// let temp = toCelsius(100);\n// print("Temperature: " + temp);\n',
    validation: {
      consoleExact: ['Temperature: 25'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['return', 'function', 'conversion']
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // CORE (26–50): Arrays, iteration, utilities, composition, DRY
  // ═══════════════════════════════════════════════════════════════

  {
    concept: 'arrays',
    title: 'Sensor history buffer',
    kind: 'code',
    instructions:
      'Sensors store past readings in a buffer — that is just an array. Create an array called history with values [20, 22, 19, 25, 21], then print the count of how many readings are stored.',
    starterCode: 'let history = [20, 22, 19, 25, 21];\n// print(count(history));\n',
    validation: {
      consoleExact: ['5'],
      explanationKeywords: ['array', 'buffer', 'sensor']
    }
  },
  {
    concept: 'iterate_readings',
    title: 'Loop through readings',
    kind: 'code',
    instructions:
      'Print every reading in a sensor log. Create readings = [10, 20, 30] and use repeat with get() to print each value. Arrays let you process many sensor values with the same code.',
    starterCode:
      'let readings = [10, 20, 30];\n// repeat (3) {\n//   print(get(readings, ???));\n// }\n',
    validation: {
      consoleExact: ['10', '20', '30'],
      requireKeywords: ['repeat', 'get'],
      explanationKeywords: ['iterate', 'array', 'reading']
    }
  },
  {
    concept: 'moving_average',
    title: 'Moving average concept',
    kind: 'code',
    instructions:
      'A moving average smooths noisy sensor data. Given readings [10, 20, 30, 40], compute the average of all four (10+20+30+40 divided by 4 = 25) and print "Average: 25". Averaging reduces random spikes.',
    starterCode:
      'let readings = [10, 20, 30, 40];\nlet sum = 0;\n// repeat (4) { ... }\n// print("Average: " + average);\n',
    validation: {
      consoleExact: ['Average: 25'],
      requireKeywords: ['repeat'],
      explanationKeywords: ['average', 'moving', 'smooth']
    }
  },
  {
    concept: 'string_patterns',
    title: 'Serial protocol strings',
    kind: 'code',
    instructions:
      'Serial communication sends formatted strings. Build a message "TEMP:72;HUM:45" by concatenating parts. Print the full message. Protocols use patterns like KEY:VALUE separated by semicolons.',
    starterCode:
      'let temp = 72;\nlet hum = 45;\n// let msg = "TEMP:" + temp + ";HUM:" + hum;\n// print(msg);\n',
    validation: {
      consoleExact: ['TEMP:72;HUM:45'],
      explanationKeywords: ['protocol', 'string', 'serial']
    }
  },
  {
    concept: 'nested_loops',
    title: 'Matrix scanning',
    kind: 'code',
    instructions:
      'A keypad matrix has rows and columns. Print a 3x3 grid by nesting two repeats: for each row (1 to 3), print "Row " + row + " Col 1", "Row " + row + " Col 2", "Row " + row + " Col 3". Nested loops scan every key.',
    starterCode: '// repeat (3) {\n//   let row = ???;\n//   repeat (3) { ... }\n// }\n',
    validation: {
      consoleLines: 9,
      requireKeywords: ['repeat'],
      explanationKeywords: ['nested', 'loop', 'matrix']
    }
  },
  {
    concept: 'factory_pattern',
    title: 'Sensor factory function',
    kind: 'code',
    instructions:
      'Different sensors need different calibration. Write a function makeSensor(type) that returns a number: if type is "temp" return 100, if type is "light" return 500, otherwise return 0. Call makeSensor("temp") and print the result.',
    starterCode:
      '// function makeSensor(type) {\n//   if (type == "temp") { return 100; }\n//   if (type == "light") { return 500; }\n//   return 0;\n// }\n// print(makeSensor("temp"));\n',
    validation: {
      consoleExact: ['100'],
      requireKeywords: ['function', 'return'],
      explanationKeywords: ['factory', 'function', 'sensor']
    }
  },
  {
    concept: 'map_range',
    title: 'Map range utility',
    kind: 'code',
    instructions:
      'ADC reads 0–1023, but your servo needs 0–180. Write a function mapValue(val) that returns val / 1023 * 180 (integer part). If val is 512, print "Servo: 90". This map function is one of the most used utilities in embedded.',
    starterCode:
      '// function mapValue(val) {\n//   return val * 180 / 1023;\n// }\n// print("Servo: " + mapValue(512));\n',
    validation: {
      consoleExact: ['Servo: 90'],
      requireKeywords: ['function'],
      explanationKeywords: ['map', 'range', 'conversion']
    }
  },
  {
    concept: 'constrain',
    title: 'Constrain values',
    kind: 'code',
    instructions:
      'Actuators have limits. Write a function constrain(val, min, max) that returns val if it is between min and max, otherwise returns the nearest boundary. Test with constrain(200, 0, 100) and print "Output: 100".',
    starterCode:
      '// function constrain(val, min, max) {\n//   if (val < min) { return min; }\n//   if (val > max) { return max; }\n//   return val;\n// }\n// print("Output: " + constrain(200, 0, 100));\n',
    validation: {
      consoleExact: ['Output: 100'],
      requireKeywords: ['function', 'if'],
      explanationKeywords: ['constrain', 'limit', 'actuator']
    }
  },
  {
    concept: 'composition',
    title: 'Sensor plus actuator',
    kind: 'code',
    instructions:
      'Combine a sensor read with an actuator action. Write readTemp() that returns 85, then write controlFan(temp) that prints "Fan ON" if temp is greater than 80, "Fan off" otherwise. Call controlFan with the result of readTemp().',
    starterCode:
      '// function readTemp() {\n//   return 85;\n// }\n// function controlFan(temp) {\n//   if (temp > 80) { print("Fan ON"); } else { print("Fan off"); }\n// }\n// controlFan(readTemp());\n',
    validation: {
      consoleExact: ['Fan ON'],
      requireKeywords: ['function'],
      explanationKeywords: ['composition', 'sensor', 'actuator']
    }
  },
  {
    concept: 'code_reuse',
    title: 'Shared driver function',
    kind: 'code',
    instructions:
      'A display driver sends data to an OLED screen. Write sendByte(data) that prints "Sent: " + data, then call it three times with values 0x01, 0x02, 0x03. Reusing one function for all sends keeps code DRY.',
    starterCode:
      '// function sendByte(data) {\n//   print("Sent: " + data);\n// }\n// sendByte(1);\n// sendByte(2);\n// sendByte(3);\n',
    validation: {
      consoleExact: ['Sent: 1', 'Sent: 2', 'Sent: 3'],
      requireKeywords: ['function'],
      explanationKeywords: ['reuse', 'driver', 'DRY']
    }
  },
  {
    concept: 'dry_embedded',
    title: 'DRY: one buzzer function',
    kind: 'code',
    instructions:
      'Instead of writing tone on/off code for each frequency, write a single function beep(freq, duration) that prints "Tone: " + freq + " for " + duration + "ms". Call it with (1000, 200) and (500, 400). DRY means Do Not Repeat Yourself.',
    starterCode:
      '// function beep(freq, duration) {\n//   print("Tone: " + freq + " for " + duration + "ms");\n// }\n// beep(1000, 200);\n// beep(500, 400);\n',
    validation: {
      consoleExact: ['Tone: 1000 for 200ms', 'Tone: 500 for 400ms'],
      requireKeywords: ['function'],
      explanationKeywords: ['DRY', 'function', 'reuse']
    }
  },
  {
    concept: 'array_indexing',
    title: 'Register-like access',
    kind: 'code',
    instructions:
      'Hardware registers are like array slots — each one controls a different setting. Create an array config = [1, 0, 1, 1, 0] and print "Register 2: " followed by get(config, 2). Each index is a different config register.',
    starterCode: 'let config = [1, 0, 1, 1, 0];\n// print("Register 2: " + get(config, 2));\n',
    validation: {
      consoleExact: ['Register 2: 1'],
      explanationKeywords: ['index', 'register', 'array']
    }
  },
  {
    concept: 'push_logging',
    title: 'Push for data logging',
    kind: 'code',
    instructions:
      'A data logger pushes readings into a buffer. Start with log = [], then push 10, 20, and 30 into it, then print the count of entries. push() grows the array as new data arrives.',
    starterCode:
      'let log = [];\n// push(log, 10);\n// push(log, 20);\n// push(log, 30);\n// print(count(log));\n',
    validation: {
      consoleExact: ['3'],
      explanationKeywords: ['push', 'log', 'array']
    }
  },
  {
    concept: 'count_sampling',
    title: 'Count for sampling rate',
    kind: 'code',
    instructions:
      'A sensor samples at a fixed rate. Create a samples array and push the values 100, 200, 300, 400, 500 into it. Then print "Sample rate: " followed by count(samples). Knowing how many samples you have is essential for analysis.',
    starterCode:
      'let samples = [];\n// push(samples, 100);\n// push(samples, 200);\n// push(samples, 300);\n// push(samples, 400);\n// push(samples, 500);\n// print("Sample rate: " + count(samples));\n',
    validation: {
      consoleExact: ['Sample rate: 5'],
      explanationKeywords: ['count', 'sampling', 'array']
    }
  },
  {
    concept: 'get_register',
    title: 'Get: read a register',
    kind: 'code',
    instructions:
      'Reading a specific hardware register is like reading one slot of an array. Create status = ["idle", "running", "error", "done"] and print "State: " + get(status, 2). get() picks one value from a specific position.',
    starterCode:
      'let status = ["idle", "running", "error", "done"];\n// print("State: " + get(status, 2));\n',
    validation: {
      consoleExact: ['State: error'],
      explanationKeywords: ['get', 'register', 'array']
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // APPLIED (51–90): Embedded-specific exercises
  // ═══════════════════════════════════════════════════════════════

  {
    concept: 'led_blink_morse',
    title: 'Morse code LED',
    kind: 'code',
    instructions:
      'Morse code uses short and long LED blinks. Print "Dot" once, then "Dash" three times to send the letter S (...). Real Morse uses timed LED on/off — here we simulate with print.',
    starterCode: '// print("Dot");\n// print("Dash");\n// print("Dash");\n// print("Dash");\n',
    validation: {
      consoleExact: ['Dot', 'Dash', 'Dash', 'Dash'],
      explanationKeywords: ['morse', 'LED', 'blink']
    }
  },
  {
    concept: 'temperature_monitor',
    title: 'Temperature monitor',
    kind: 'code',
    instructions:
      'Build a temperature monitor. Store temp at 78. If temp is greater than 75, print "Warning: overheating!", otherwise print "Temp normal". Then print "Logged: " + temp. Monitoring is the first job of most embedded systems.',
    starterCode:
      'let temp = 78;\n// if (temp > 75) {\n//   print("Warning: overheating!");\n// } else {\n//   print("Temp normal");\n// }\n// print("Logged: " + temp);\n',
    validation: {
      consoleExact: ['Warning: overheating!', 'Logged: 78'],
      requireKeywords: ['if'],
      explanationKeywords: ['monitor', 'temperature', 'threshold']
    }
  },
  {
    concept: 'light_led_control',
    title: 'Light-controlled LED',
    kind: 'code',
    instructions:
      'A light sensor controls an LED. If lightLevel is less than 100 (it is dark), print "LED ON — it is dark". Otherwise print "LED off — enough light". Set lightLevel to 65.',
    starterCode:
      'let lightLevel = 65;\n// if (lightLevel < 100) {\n//   print("LED ON — it is dark");\n// } else {\n//   print("LED off — enough light");\n// }\n',
    validation: {
      consoleExact: ['LED ON — it is dark'],
      requireKeywords: ['if'],
      explanationKeywords: ['light', 'LED', 'sensor']
    }
  },
  {
    concept: 'servo_position',
    title: 'Servo position calculator',
    kind: 'code',
    instructions:
      'A servo rotates 0–180 degrees. Write a function servoAngle(percent) that returns percent * 180 / 100. Print "Angle: " + servoAngle(50). Converting percentages to angles is how you control servos from a knob.',
    starterCode:
      '// function servoAngle(percent) {\n//   return percent * 180 / 100;\n// }\n// print("Angle: " + servoAngle(50));\n',
    validation: {
      consoleExact: ['Angle: 90'],
      requireKeywords: ['function'],
      explanationKeywords: ['servo', 'angle', 'conversion']
    }
  },
  {
    concept: 'ultrasonic_distance',
    title: 'Ultrasonic distance concept',
    kind: 'code',
    instructions:
      'An ultrasonic sensor measures distance by timing sound waves. Store distance at 35 cm. If distance is less than 30, print "Obstacle nearby!". Else if distance is less than 60, print "Approaching". Else print "Clear path".',
    starterCode:
      'let distance = 35;\n// if (distance < 30) { ... } else if (distance < 60) { ... } else { ... }\n',
    validation: {
      consoleExact: ['Approaching'],
      requireKeywords: ['if', 'else'],
      explanationKeywords: ['ultrasonic', 'distance', 'obstacle']
    }
  },
  {
    concept: 'motor_speed',
    title: 'Motor speed controller',
    kind: 'code',
    instructions:
      'A motor speed is set by a value 0–255 (PWM). Write a function motorSpeed(duty) that prints "Motor: " + duty + "% power". Call it with 200. Higher duty cycle means faster spin.',
    starterCode:
      '// function motorSpeed(duty) {\n//   print("Motor: " + duty + "% power");\n// }\n// motorSpeed(200);\n',
    validation: {
      consoleExact: ['Motor: 200% power'],
      requireKeywords: ['function'],
      explanationKeywords: ['motor', 'PWM', 'speed']
    }
  },
  {
    concept: 'simplified_pid',
    title: 'PID concept (simplified)',
    kind: 'code',
    instructions:
      'PID control keeps a value at a target. Target is 100, current is 85. The error is target minus current (15). Print "Error: 15". Then if error is greater than 0, print "Increase power". PID is the backbone of robotics and automation.',
    starterCode:
      'let target = 100;\nlet current = 85;\nlet error = target - current;\n// print("Error: " + error);\n// if (error > 0) { ... }\n',
    validation: {
      consoleExact: ['Error: 15', 'Increase power'],
      requireKeywords: ['if'],
      explanationKeywords: ['PID', 'error', 'control']
    }
  },
  {
    concept: 'serial_protocol',
    title: 'Serial protocol handler',
    kind: 'code',
    instructions:
      'Devices talk using serial messages. Parse "LED:ON" — if the message starts with "LED:", check the rest. Store cmd = "LED:ON". If cmd includes "ON", print "LED turned on". If it includes "OFF", print "LED turned off".',
    starterCode:
      'let cmd = "LED:ON";\n// if (cmd == "LED:ON") {\n//   print("LED turned on");\n// } else if (cmd == "LED:OFF") {\n//   print("LED turned off");\n// }\n',
    validation: {
      consoleExact: ['LED turned on'],
      requireKeywords: ['if'],
      explanationKeywords: ['serial', 'protocol', 'parse']
    }
  },
  {
    concept: 'i2c_concept',
    title: 'I2C concept',
    kind: 'code',
    instructions:
      'I2C lets one controller talk to many devices using addresses. Store addresses [0x20, 0x3C, 0x68] and print "Scanning..." for each, then print "Found 3 devices". I2C uses just two wires to connect many sensors.',
    starterCode:
      'let addresses = [32, 60, 104];\n// repeat (3) {\n//   print("Scanning address " + get(addresses, ???));\n// }\n// print("Found " + count(addresses) + " devices");\n',
    validation: {
      consoleLines: 4,
      requireKeywords: ['repeat', 'get'],
      explanationKeywords: ['I2C', 'address', 'bus']
    }
  },
  {
    concept: 'spi_concept',
    title: 'SPI concept',
    kind: 'code',
    instructions:
      'SPI is fast, point-to-point communication. Write a function spiTransfer(data) that prints "SPI sent: " + data, then call it three times with 0xFF, 0x00, 0xAA. SPI uses a clock pin to sync data transfer.',
    starterCode:
      '// function spiTransfer(data) {\n//   print("SPI sent: " + data);\n// }\n// spiTransfer(255);\n// spiTransfer(0);\n// spiTransfer(170);\n',
    validation: {
      consoleExact: ['SPI sent: 255', 'SPI sent: 0', 'SPI sent: 170'],
      requireKeywords: ['function'],
      explanationKeywords: ['SPI', 'transfer', 'communication']
    }
  },
  {
    concept: 'adc_reading',
    title: 'ADC reading processor',
    kind: 'code',
    instructions:
      'An ADC converts voltage (0–5V) into a number (0–1023). Store adcValue at 750 and compute voltage = adcValue * 5 / 1023. Print "Voltage: " + voltage (approximately 3). ADCs bridge the analog and digital worlds.',
    starterCode:
      'let adcValue = 750;\nlet voltage = adcValue * 5 / 1023;\n// print("Voltage: " + voltage);\n',
    validation: {
      consoleExact: ['Voltage: 3'],
      explanationKeywords: ['ADC', 'voltage', 'conversion']
    }
  },
  {
    concept: 'pwm_duty_cycle',
    title: 'PWM duty cycle',
    kind: 'code',
    instructions:
      'PWM controls brightness by toggling a pin fast. Duty cycle 75 means the LED is on 75% of the time. Print "Duty: 75%". Write a function brightness(duty) that prints "LED brightness: " + duty + "%". PWM is how embedded systems dim LEDs without analog circuits.',
    starterCode:
      '// function brightness(duty) {\n//   print("LED brightness: " + duty + "%");\n// }\n// brightness(75);\n',
    validation: {
      consoleExact: ['LED brightness: 75%'],
      requireKeywords: ['function'],
      explanationKeywords: ['PWM', 'duty', 'brightness']
    }
  },
  {
    concept: 'button_debounce',
    title: 'Button debounce logic',
    kind: 'code',
    instructions:
      'Mechanical buttons bounce — one press looks like many. Simulate debounce by storing lastState = 0 and currentState = 1. If currentState is not equal to lastState, print "Button pressed" and update lastState. This prevents ghost presses.',
    starterCode:
      'let lastState = 0;\nlet currentState = 1;\n// if (currentState != lastState) {\n//   print("Button pressed");\n//   lastState = currentState;\n// }\n',
    validation: {
      consoleExact: ['Button pressed'],
      requireKeywords: ['if'],
      explanationKeywords: ['debounce', 'button', 'state']
    }
  },
  {
    concept: 'state_machine',
    title: 'Hardware state machine',
    kind: 'code',
    instructions:
      'Hardware moves through states. Start state at "idle". If state is "idle", print "Waiting..." and change state to "running". If state is "running", print "Active!". State machines keep firmware organized.',
    starterCode:
      'let state = "idle";\n// if (state == "idle") {\n//   print("Waiting...");\n//   state = "running";\n// }\n// if (state == "running") {\n//   print("Active!");\n// }\n',
    validation: {
      consoleExact: ['Waiting...', 'Active!'],
      requireKeywords: ['if'],
      explanationKeywords: ['state', 'machine', 'firmware']
    }
  },
  {
    concept: 'watchdog_timer',
    title: 'Watchdog timer concept',
    kind: 'code',
    instructions:
      'A watchdog timer resets the system if the software freezes. Store timer = 5 and heartbeat = true. If heartbeat is true, print "Feeding watchdog — timer reset to 5". Then set timer to 5. If the program forgets to "feed" it, the chip resets.',
    starterCode:
      'let timer = 5;\nlet heartbeat = true;\n// if (heartbeat == true) {\n//   print("Feeding watchdog — timer reset to 5");\n//   timer = 5;\n// }\n',
    validation: {
      consoleExact: ['Feeding watchdog — timer reset to 5'],
      requireKeywords: ['if'],
      explanationKeywords: ['watchdog', 'safety', 'reset']
    }
  },
  {
    concept: 'power_management',
    title: 'Power management',
    kind: 'code',
    instructions:
      'Battery devices must save power. Store batteryLevel at 15. If batteryLevel is less than 20, print "Low battery — entering sleep mode". Otherwise print "Running normally". Smart power management keeps sensors alive longer.',
    starterCode:
      'let batteryLevel = 15;\n// if (batteryLevel < 20) {\n//   print("Low battery — entering sleep mode");\n// } else {\n//   print("Running normally");\n// }\n',
    validation: {
      consoleExact: ['Low battery — entering sleep mode'],
      requireKeywords: ['if'],
      explanationKeywords: ['power', 'sleep', 'battery']
    }
  },
  {
    concept: 'sleep_mode',
    title: 'Sleep mode logic',
    kind: 'code',
    instructions:
      'Sleep mode shuts down parts of the chip to save energy. Store mode = "active". If mode is "active", print "Shutting down peripherals" then set mode to "sleep". Then print "Current mode: sleep". Arduino-style devices can reduce power by 90% in sleep.',
    starterCode:
      'let mode = "active";\n// if (mode == "active") {\n//   print("Shutting down peripherals");\n//   mode = "sleep";\n// }\n// print("Current mode: " + mode);\n',
    validation: {
      consoleExact: ['Shutting down peripherals', 'Current mode: sleep'],
      requireKeywords: ['if'],
      explanationKeywords: ['sleep', 'power', 'mode']
    }
  },
  {
    concept: 'interrupt_concept',
    title: 'Interrupt handler concept',
    kind: 'code',
    instructions:
      'An interrupt stops the current task to handle something urgent. Print "Normal task running..." then print "INTERRUPT: Button pressed!" then print "Resuming normal task". Interrupts let hardware react instantly to events.',
    starterCode:
      '// print("Normal task running...");\n// print("INTERRUPT: Button pressed!");\n// print("Resuming normal task");\n',
    validation: {
      consoleExact: [
        'Normal task running...',
        'INTERRUPT: Button pressed!',
        'Resuming normal task'
      ],
      explanationKeywords: ['interrupt', 'priority', 'urgent']
    }
  },
  {
    concept: 'timer_sampling',
    title: 'Timer-based sampling',
    kind: 'code',
    instructions:
      'A timer triggers sensor reads at fixed intervals. Use a repeat loop (5 iterations) to simulate 5 timer ticks. Each tick, push the tick number into a readings array. Then print "Collected " + count(readings) + " samples".',
    starterCode:
      'let readings = [];\n// repeat (5) {\n//   push(readings, ???);\n// }\n// print("Collected " + count(readings) + " samples");\n',
    validation: {
      consoleExact: ['Collected 5 samples'],
      requireKeywords: ['repeat', 'push'],
      explanationKeywords: ['timer', 'sampling', 'interval']
    }
  },
  {
    concept: 'calibration',
    title: 'Calibration routine',
    kind: 'code',
    instructions:
      'Sensors need calibration. Write a function calibrate(raw) that returns raw minus 12 (the offset). Print "Calibrated: " + calibrate(100). Calibration subtracts known errors from raw readings.',
    starterCode:
      '// function calibrate(raw) {\n//   return raw - 12;\n// }\n// print("Calibrated: " + calibrate(100));\n',
    validation: {
      consoleExact: ['Calibrated: 88'],
      requireKeywords: ['function'],
      explanationKeywords: ['calibration', 'offset', 'accuracy']
    }
  },
  {
    concept: 'alarm_system',
    title: 'Alarm system logic',
    kind: 'code',
    instructions:
      'An alarm triggers when motion is detected and the system is armed. Store motion = true and armed = true. If both are true, print "ALARM! Intrusion detected!". Otherwise print "System normal". Security systems check multiple conditions.',
    starterCode:
      'let motion = true;\nlet armed = true;\n// if (motion == true && armed == true) {\n//   print("ALARM! Intrusion detected!");\n// } else {\n//   print("System normal");\n// }\n',
    validation: {
      consoleExact: ['ALARM! Intrusion detected!'],
      requireKeywords: ['if'],
      explanationKeywords: ['alarm', 'security', 'condition']
    }
  },
  {
    concept: 'traffic_light',
    title: 'Traffic light controller',
    kind: 'code',
    instructions:
      'A traffic light cycles through states. Start light = "green". Print "Green — Go". Set light = "yellow" and print "Yellow — Slow". Set light = "red" and print "Red — Stop". State machines control traffic lights in real intersections.',
    starterCode:
      'let light = "green";\n// print("Green — Go");\n// light = "yellow";\n// print("Yellow — Slow");\n// light = "red";\n// print("Red — Stop");\n',
    validation: {
      consoleExact: ['Green — Go', 'Yellow — Slow', 'Red — Stop'],
      explanationKeywords: ['traffic', 'state', 'sequence']
    }
  },
  {
    concept: 'robot_navigation',
    title: 'Robot navigation',
    kind: 'block',
    instructions:
      'Program a robot to navigate a room: move forward, turn right at a wall, move forward again, then turn left to face a new direction. Use the block canvas to chain these movements.',
    palette: ['forward', 'right', 'left', 'penColor', 'clear'],
    validation: {
      requireBlockTypes: ['forward', 'right', 'left'],
      explanationKeywords: ['navigate', 'robot', 'movement']
    }
  },
  {
    concept: 'line_follower',
    title: 'Line follower logic',
    kind: 'block',
    instructions:
      'A line-following robot uses two sensors. Draw a path that goes forward, adjusts with small left and right turns to stay on track. Use repeat blocks to keep the robot following the line continuously.',
    palette: ['repeat', 'forward', 'left', 'right', 'clear'],
    validation: {
      requireBlockTypes: ['repeat', 'forward'],
      explanationKeywords: ['line', 'follow', 'sensor']
    }
  },
  {
    concept: 'obstacle_avoidance',
    title: 'Obstacle avoidance concept',
    kind: 'code',
    instructions:
      'A robot avoids obstacles using a distance sensor. Store distance at 25. If distance is less than 30, print "Obstacle ahead — turning right", otherwise print "Path clear — moving forward". Autonomous robots make decisions from sensor data.',
    starterCode:
      'let distance = 25;\n// if (distance < 30) {\n//   print("Obstacle ahead — turning right");\n// } else {\n//   print("Path clear — moving forward");\n// }\n',
    validation: {
      consoleExact: ['Obstacle ahead — turning right'],
      requireKeywords: ['if'],
      explanationKeywords: ['obstacle', 'avoidance', 'distance']
    }
  },
  {
    concept: 'wireless_concept',
    title: 'Wireless communication concept',
    kind: 'code',
    instructions:
      'Wireless modules send data through the air. Write a function sendPacket(id, payload) that prints "TX -> " + id + ": " + payload. Call it with (1, "temp=72"). Wireless lets sensors report without wires.',
    starterCode:
      '// function sendPacket(id, payload) {\n//   print("TX -> " + id + ": " + payload);\n// }\n// sendPacket(1, "temp=72");\n',
    validation: {
      consoleExact: ['TX -> 1: temp=72'],
      requireKeywords: ['function'],
      explanationKeywords: ['wireless', 'packet', 'transmit']
    }
  },
  {
    concept: 'battery_monitor',
    title: 'Battery level monitor',
    kind: 'code',
    instructions:
      'Track battery level with a series of checks. Store level at 30. If level is greater than 50, print "Battery good". Else if level is greater than 20, print "Battery medium — conserve power". Else print "Battery critical!". Good firmware always watches the battery.',
    starterCode:
      'let level = 30;\n// if (level > 50) {\n//   print("Battery good");\n// } else if (level > 20) {\n//   print("Battery medium — conserve power");\n// } else {\n//   print("Battery critical!");\n// }\n',
    validation: {
      consoleExact: ['Battery medium — conserve power'],
      requireKeywords: ['if', 'else'],
      explanationKeywords: ['battery', 'monitor', 'power']
    }
  },
  {
    concept: 'self_test',
    title: 'Power-on self-test',
    kind: 'code',
    instructions:
      'Devices run a self-test when powered on. Print "POST: Checking memory... OK", then "POST: Checking sensors... OK", then "POST: System ready". Self-tests catch hardware problems before the system runs.',
    starterCode:
      '// print("POST: Checking memory... OK");\n// print("POST: Checking sensors... OK");\n// print("POST: System ready");\n',
    validation: {
      consoleExact: [
        'POST: Checking memory... OK',
        'POST: Checking sensors... OK',
        'POST: System ready'
      ],
      explanationKeywords: ['self-test', 'POST', 'boot']
    }
  },
  {
    concept: 'boot_sequence',
    title: 'Boot sequence',
    kind: 'code',
    instructions:
      'Every device has a boot sequence. Create a function boot() that prints "Initializing hardware...", then "Loading config...", then "Booting complete!". Call it. The boot sequence is the first code that runs.',
    starterCode:
      '// function boot() {\n//   print("Initializing hardware...");\n//   print("Loading config...");\n//   print("Booting complete!");\n// }\n// boot();\n',
    validation: {
      consoleExact: ['Initializing hardware...', 'Loading config...', 'Booting complete!'],
      requireKeywords: ['function'],
      explanationKeywords: ['boot', 'sequence', 'initialization']
    }
  },
  {
    concept: 'firmware_update',
    title: 'Firmware update concept',
    kind: 'code',
    instructions:
      'Firmware updates replace the program on a chip. Store version = 1. Print "Current firmware: v" + version. Then set version = 2. Print "Updated firmware: v" + version. OTA (over-the-air) updates let devices improve without opening the case.',
    starterCode:
      'let version = 1;\n// print("Current firmware: v" + version);\n// version = 2;\n// print("Updated firmware: v" + version);\n',
    validation: {
      consoleExact: ['Current firmware: v1', 'Updated firmware: v2'],
      explanationKeywords: ['firmware', 'update', 'version']
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // ADVANCED (91–130): Embedded patterns and concepts
  // ═══════════════════════════════════════════════════════════════

  {
    concept: 'realtime_system',
    title: 'Real-time systems concept',
    kind: 'reference',
    instructions:
      'Read about real-time operating systems and why timing matters in embedded. Explain in your own words the difference between a hard real-time deadline and a soft one.',
    reference: {
      kind: 'docs',
      title: 'FreeRTOS: real-time concepts',
      url: 'https://www.freertos.org/Documentation/01-FreeRTOS-Quick-start/01-Introduction-to-FreeRTOS/01-Real-time-operating-systems',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['real-time', 'deadline', 'timing']
    }
  },
  {
    concept: 'rtos_basics',
    title: 'RTOS basics',
    kind: 'reference',
    instructions:
      'Watch an introductory video on FreeRTOS or similar RTOS. Your goal: explain what a task is and how an RTOS switches between many tasks on one chip.',
    reference: {
      kind: 'video',
      title: 'FreeRTOS beginner tutorial',
      url: 'https://www.youtube.com/watch?v=J6_x_1CWeJk',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['RTOS', 'task', 'scheduler']
    }
  },
  {
    concept: 'task_scheduling',
    title: 'Task scheduling',
    kind: 'code',
    instructions:
      'A scheduler decides which task runs. Simulate 3 tasks with priorities: task "sensor" has priority 3, "display" has 2, "log" has 1. Print "Running: sensor (priority 3)". Higher priority runs first. Scheduling keeps the most important work on top.',
    starterCode:
      '// print("Running: sensor (priority 3)");\n// print("Running: display (priority 2)");\n// print("Running: log (priority 1)");\n',
    validation: {
      consoleExact: [
        'Running: sensor (priority 3)',
        'Running: display (priority 2)',
        'Running: log (priority 1)'
      ],
      explanationKeywords: ['scheduling', 'priority', 'task']
    }
  },
  {
    concept: 'priority_preemption',
    title: 'Priority and preemption',
    kind: 'code',
    instructions:
      'Preemption means a high-priority task can interrupt a low-priority one. Print "Task A running...", then "Preempted by Task B!", then "Task A resumes". This is how urgent events like safety alarms get immediate attention.',
    starterCode:
      '// print("Task A running...");\n// print("Preempted by Task B!");\n// print("Task A resumes");\n',
    validation: {
      consoleExact: ['Task A running...', 'Preempted by Task B!', 'Task A resumes'],
      explanationKeywords: ['preemption', 'priority', 'interrupt']
    }
  },
  {
    concept: 'memory_management',
    title: 'Memory management in embedded',
    kind: 'reference',
    instructions:
      'Read about how embedded devices manage limited RAM. Explain why dynamic memory allocation (like malloc) is often avoided in safety-critical firmware and how static allocation is preferred.',
    reference: {
      kind: 'docs',
      title: 'SparkFun: embedded memory guide',
      url: 'https://learn.sparkfun.com/tutorials/gherkin-guide/all',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['memory', 'RAM', 'allocation']
    }
  },
  {
    concept: 'dma_concept',
    title: 'DMA concept',
    kind: 'reference',
    instructions:
      'DMA lets peripherals move data without involving the CPU. Read about how DMA works and explain in your own words why DMA frees the processor to do other work while data transfers happen.',
    reference: {
      kind: 'docs',
      title: 'STM32 DMA documentation',
      url: 'https://www.st.com/resource/en/reference_manual/rm0433-stm32h745755-and-stm32h747577-32-bit-armbased-mcus-stmicroelectronics.pdf',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['DMA', 'transfer', 'CPU']
    }
  },
  {
    concept: 'hal_pattern',
    title: 'Hardware abstraction layer',
    kind: 'code',
    instructions:
      'A HAL hides hardware details behind clean functions. Write function digitalRead(pin) that returns 1 and function digitalWrite(pin, val) that prints "Pin " + pin + " set to " + val. HALs let you reuse code across different chips.',
    starterCode:
      '// function digitalRead(pin) {\n//   return 1;\n// }\n// function digitalWrite(pin, val) {\n//   print("Pin " + pin + " set to " + val);\n// }\n// digitalWrite(13, 1);\n',
    validation: {
      consoleExact: ['Pin 13 set to 1'],
      requireKeywords: ['function'],
      explanationKeywords: ['HAL', 'abstraction', 'portability']
    }
  },
  {
    concept: 'driver_pattern',
    title: 'Driver patterns',
    kind: 'code',
    instructions:
      'A driver wraps all operations for one device. Write a function sensorInit() that prints "Sensor initialized" and function sensorRead() that returns 42. Then init and read. Drivers keep device code in one place.',
    starterCode:
      '// function sensorInit() {\n//   print("Sensor initialized");\n// }\n// function sensorRead() {\n//   return 42;\n// }\n// sensorInit();\n// let val = sensorRead();\n// print("Reading: " + val);\n',
    validation: {
      consoleExact: ['Sensor initialized', 'Reading: 42'],
      requireKeywords: ['function'],
      explanationKeywords: ['driver', 'init', 'read']
    }
  },
  {
    concept: 'register_concept',
    title: 'Register manipulation concept',
    kind: 'reference',
    instructions:
      'Direct register access gives maximum control over hardware. Read about how GPIO registers work (SET, CLEAR, TOGGLE) and explain why sometimes you need direct register access instead of a library function.',
    reference: {
      kind: 'docs',
      title: 'Arduino: direct port manipulation',
      url: 'https://www.arduino.cc/reference/en/language/functions/digital-io/digitalwrite/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['register', 'GPIO', 'bitwise']
    }
  },
  {
    concept: 'interrupt_priority',
    title: 'Interrupt priority',
    kind: 'code',
    instructions:
      'Not all interrupts are equal. Print "HIGH priority interrupt: safety sensor triggered!", then "LOW priority interrupt: log timestamp". Safety always comes first. Interrupt priorities let urgent events jump the queue.',
    starterCode:
      '// print("HIGH priority interrupt: safety sensor triggered!");\n// print("LOW priority interrupt: log timestamp");\n',
    validation: {
      consoleExact: [
        'HIGH priority interrupt: safety sensor triggered!',
        'LOW priority interrupt: log timestamp'
      ],
      explanationKeywords: ['priority', 'interrupt', 'safety']
    }
  },
  {
    concept: 'race_conditions',
    title: 'Race conditions in embedded',
    kind: 'reference',
    instructions:
      'A race condition happens when two tasks access shared data at the same time. Read about race conditions and explain a real scenario where a sensor reading and a display update could conflict.',
    reference: {
      kind: 'docs',
      title: 'FreeRTOS: critical sections',
      url: 'https://www.freertos.org/Documentation/02-Kernel/04-API-references/13-task-notifications/01-task-notification-api',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['race', 'shared', 'critical']
    }
  },
  {
    concept: 'shared_memory',
    title: 'Shared memory',
    kind: 'code',
    instructions:
      'Tasks share data through memory. Create a shared sensorValue = 75. Task A reads it and prints "Task A reads: 75". Task B also reads it and prints "Task B reads: 75". In real systems, you need locks to prevent conflicts.',
    starterCode:
      'let sensorValue = 75;\n// print("Task A reads: " + sensorValue);\n// print("Task B reads: " + sensorValue);\n',
    validation: {
      consoleExact: ['Task A reads: 75', 'Task B reads: 75'],
      explanationKeywords: ['shared', 'memory', 'concurrent']
    }
  },
  {
    concept: 'ring_buffer',
    title: 'Ring buffers',
    kind: 'code',
    instructions:
      'A ring buffer (circular queue) stores data in a fixed-size array and wraps around. Create a buffer of size 4 with values [10, 20, 30, 40]. Print each value. Ring buffers are used everywhere in embedded for UART and SPI data.',
    starterCode:
      'let buffer = [10, 20, 30, 40];\nlet size = 4;\nlet i = 0;\n// repeat (4) {\n//   print("Buffer[" + i + "] = " + get(buffer, i));\n//   i = i + 1;\n// }\n',
    validation: {
      consoleExact: ['Buffer[0] = 10', 'Buffer[1] = 20', 'Buffer[2] = 30', 'Buffer[3] = 40'],
      requireKeywords: ['repeat', 'get'],
      explanationKeywords: ['ring buffer', 'circular', 'queue']
    }
  },
  {
    concept: 'circular_queue',
    title: 'Circular queues for data flow',
    kind: 'code',
    instructions:
      'A circular queue processes data in order. Create a queue with readings [5, 10, 15, 20]. Print "Processing: 5" then "Processing: 10" then "Processing: 15" then "Processing: 20". FIFO order ensures data is handled in sequence.',
    starterCode:
      'let queue = [5, 10, 15, 20];\n// repeat (4) {\n//   print("Processing: " + get(queue, ???));\n// }\n',
    validation: {
      consoleExact: ['Processing: 5', 'Processing: 10', 'Processing: 15', 'Processing: 20'],
      requireKeywords: ['repeat', 'get'],
      explanationKeywords: ['queue', 'FIFO', 'data flow']
    }
  },
  {
    concept: 'state_charts',
    title: 'State charts',
    kind: 'code',
    instructions:
      'State charts formalize state machines with events. Start state = "closed". Event "open" changes state to "open" — print "Door opened". Event "close" changes state to "closed" — print "Door closed". State charts handle complex transitions cleanly.',
    starterCode:
      'let state = "closed";\nlet event = "open";\n// if (event == "open") {\n//   state = "open";\n//   print("Door opened");\n// }\n// event = "close";\n// if (event == "close") {\n//   state = "closed";\n//   print("Door closed");\n// }\n',
    validation: {
      consoleExact: ['Door opened', 'Door closed'],
      requireKeywords: ['if'],
      explanationKeywords: ['state', 'chart', 'event']
    }
  },
  {
    concept: 'event_driven',
    title: 'Event-driven architecture',
    kind: 'code',
    instructions:
      'Event-driven code reacts to events rather than polling. Simulate three events: print "Event: button pressed", "Event: sensor updated", "Event: timer expired". Each event triggers its own response. This pattern saves power by not constantly checking sensors.',
    starterCode:
      '// print("Event: button pressed");\n// print("Event: sensor updated");\n// print("Event: timer expired");\n',
    validation: {
      consoleExact: ['Event: button pressed', 'Event: sensor updated', 'Event: timer expired'],
      explanationKeywords: ['event', 'driven', 'react']
    }
  },
  {
    concept: 'hardware_debugging',
    title: 'Hardware debugging',
    kind: 'reference',
    instructions:
      'Read about hardware debugging techniques including breakpoints, watchpoints, and JTAG. Explain in your own words how setting a breakpoint pauses the processor so you can inspect variable values.',
    reference: {
      kind: 'docs',
      title: 'Arduino debugging guide',
      url: 'https://www.arduino.cc/reference/en/language/structure/sketch/attachinterrupt/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['debug', 'breakpoint', 'JTAG']
    }
  },
  {
    concept: 'oscilloscope',
    title: 'Oscilloscope concept',
    kind: 'reference',
    instructions:
      'An oscilloscope shows voltage over time — it is like an eye for electrical signals. Read about how oscilloscopes work and explain what you would measure with one on a blinking LED circuit.',
    reference: {
      kind: 'video',
      title: 'EEVblog: oscilloscope basics',
      url: 'https://www.youtube.com/watch?v=2K5g0G0srVc',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['oscilloscope', 'voltage', 'signal']
    }
  },
  {
    concept: 'logic_analyzer',
    title: 'Logic analyzer',
    kind: 'reference',
    instructions:
      'A logic analyzer captures digital signals across many channels at once. Read about logic analyzers and explain why they are useful for debugging protocols like SPI and I2C.',
    reference: {
      kind: 'docs',
      title: 'SparkFun: logic analyzer guide',
      url: 'https://learn.sparkfun.com/tutorials/saleae-logic-and-the-logic-analyzer/introduction',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['logic analyzer', 'digital', 'protocol']
    }
  },
  {
    concept: 'in_circuit_debug',
    title: 'In-circuit debugging',
    kind: 'reference',
    instructions:
      'In-circuit debugging lets you test code while it runs on the real hardware. Read about how a debugger connects through SWD or JTAG pins. Explain why debugging on real hardware is different from simulating.',
    reference: {
      kind: 'docs',
      title: 'SEGGER: in-circuit debugging',
      url: 'https://www.segger.com/products/debug-probes/j-link/technology/about-j-link/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['debug', 'SWD', 'real hardware']
    }
  },
  {
    concept: 'firmware_versioning',
    title: 'Firmware versioning',
    kind: 'code',
    instructions:
      'Track firmware versions carefully. Store major = 2, minor = 5, patch = 1. Print "Firmware v" + major + "." + minor + "." + patch. Semantic versioning tells users what changed: major = breaking, minor = feature, patch = fix.',
    starterCode:
      'let major = 2;\nlet minor = 5;\nlet patch = 1;\n// print("Firmware v" + major + "." + minor + "." + patch);\n',
    validation: {
      consoleExact: ['Firmware v2.5.1'],
      explanationKeywords: ['versioning', 'semantic', 'firmware']
    }
  },
  {
    concept: 'ota_update',
    title: 'OTA update concept',
    kind: 'reference',
    instructions:
      'OTA (Over-The-Air) updates let devices receive new firmware wirelessly. Read about how Arduino IoT or ESP32 OTA works and explain what happens if an OTA update is interrupted halfway through.',
    reference: {
      kind: 'docs',
      title: 'Arduino: OTA updates',
      url: 'https://www.arduino.cc/reference/en/libraries/arduinoota/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['OTA', 'wireless', 'update']
    }
  },
  {
    concept: 'device_provisioning',
    title: 'Device provisioning',
    kind: 'code',
    instructions:
      'New devices need setup before use. Write a function provision() that prints "Scanning WiFi...", then "Connecting to network...", then "Device provisioned!". Call it. Provisioning is the device equivalent of a first-time phone setup.',
    starterCode:
      '// function provision() {\n//   print("Scanning WiFi...");\n//   print("Connecting to network...");\n//   print("Device provisioned!");\n// }\n// provision();\n',
    validation: {
      consoleExact: ['Scanning WiFi...', 'Connecting to network...', 'Device provisioned!'],
      requireKeywords: ['function'],
      explanationKeywords: ['provisioning', 'setup', 'network']
    }
  },
  {
    concept: 'field_calibration',
    title: 'Field calibration',
    kind: 'code',
    instructions:
      'Sensors drift over time and need recalibration in the field. Write a function fieldCalibrate(raw, offset) that returns raw + offset. Print "Corrected: " + fieldCalibrate(450, 12). Field calibration corrects for real-world drift.',
    starterCode:
      '// function fieldCalibrate(raw, offset) {\n//   return raw + offset;\n// }\n// print("Corrected: " + fieldCalibrate(450, 12));\n',
    validation: {
      consoleExact: ['Corrected: 462'],
      requireKeywords: ['function'],
      explanationKeywords: ['calibration', 'field', 'drift']
    }
  },
  {
    concept: 'predictive_maintenance',
    title: 'Predictive maintenance concept',
    kind: 'reference',
    instructions:
      "Predictive maintenance uses sensor data to predict when a machine will fail. Read about vibration analysis and explain how monitoring a motor's vibration over time can predict bearing failure before it happens.",
    reference: {
      kind: 'docs',
      title: 'Arduino: predictive maintenance with sensors',
      url: 'https://docs.arduino.cc/learn/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['predictive', 'maintenance', 'vibration']
    }
  },
  {
    concept: 'sensor_fusion',
    title: 'Sensor fusion',
    kind: 'code',
    instructions:
      'Sensor fusion combines multiple sensors for better accuracy. Store gyro = 85, accel = 90. Compute fused = (gyro + accel) / 2. Print "Fused angle: 87". Combining two noisy sensors gives a more reliable result than either alone.',
    starterCode:
      'let gyro = 85;\nlet accel = 90;\nlet fused = (gyro + accel) / 2;\n// print("Fused angle: " + fused);\n',
    validation: {
      consoleExact: ['Fused angle: 87'],
      explanationKeywords: ['fusion', 'combine', 'accuracy']
    }
  },
  {
    concept: 'edge_processing',
    title: 'Edge processing',
    kind: 'reference',
    instructions:
      'Edge processing means analyzing data on the device itself instead of sending it all to the cloud. Read about edge computing in IoT and explain why processing temperature data locally is faster and uses less bandwidth.',
    reference: {
      kind: 'docs',
      title: 'Arduino IoT Cloud: edge concepts',
      url: 'https://docs.arduino.cc/arduino-iot-cloud/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['edge', 'local', 'bandwidth']
    }
  },
  {
    concept: 'fog_computing',
    title: 'Fog computing concept',
    kind: 'reference',
    instructions:
      'Fog computing sits between edge devices and the cloud — local gateways process data before sending summaries upstream. Read about fog computing and explain its advantage over sending every sensor reading to the cloud.',
    reference: {
      kind: 'docs',
      title: 'Cisco: fog computing overview',
      url: 'https://www.cisco.com/c/en/us/solutions/internet-of-things/fog-computing.html',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['fog', 'gateway', 'cloud']
    }
  },
  {
    concept: 'embedded_security',
    title: 'Embedded security basics',
    kind: 'reference',
    instructions:
      'Embedded devices need security just like phones and computers. Read about common embedded security threats (firmware extraction, side-channel attacks) and explain why a smart lock needs more protection than a temperature sensor.',
    reference: {
      kind: 'docs',
      title: 'OWASP: IoT security guide',
      url: 'https://owasp.org/www-project-internet-of-things/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['security', 'firmware', 'threat']
    }
  },
  {
    concept: 'secure_boot',
    title: 'Secure boot',
    kind: 'reference',
    instructions:
      'Secure boot verifies that firmware is authentic before running it. Read about secure boot chains and explain why a device should refuse to run firmware that was not signed by the manufacturer.',
    reference: {
      kind: 'docs',
      title: 'Arduino: secure boot concepts',
      url: 'https://www.arduino.cc/reference/en/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['secure boot', 'signature', 'authenticity']
    }
  },
  {
    concept: 'hardware_debugging_jtag',
    title: 'JTAG and SWD debugging',
    kind: 'reference',
    instructions:
      'JTAG and SWD are standardized ways to debug embedded hardware. Read about how a JTAG probe connects to a chip and allows single-stepping through code. Explain the difference between JTAG and SWD.',
    reference: {
      kind: 'docs',
      title: 'SEGGER JTAG/SWD reference',
      url: 'https://www.segger.com/products/debug-probes/j-link/technology/about-j-link/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['JTAG', 'SWD', 'debug probe']
    }
  },
  {
    concept: 'protocol_analyzer',
    title: 'Protocol analyzer tools',
    kind: 'reference',
    instructions:
      'Protocol analyzers decode serial communication so you can see exactly what data flows between devices. Read about Saleae Logic and explain how seeing raw SPI bytes helps you debug a sensor that is not responding.',
    reference: {
      kind: 'docs',
      title: 'Saleae: protocol analysis',
      url: 'https://www.saleae.com/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['protocol', 'analyzer', 'decode']
    }
  },
  {
    concept: 'power_profiling',
    title: 'Power profiling techniques',
    kind: 'reference',
    instructions:
      'Power profiling measures how much current a device uses in each state. Read about low-power design techniques and explain why turning off an LED between reads can extend battery life from days to months.',
    reference: {
      kind: 'docs',
      title: 'Adafruit: low-power guide',
      url: 'https://learn.adafruit.com/low-power-wireless-weather-station/overview',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['power', 'current', 'low-power']
    }
  },
  {
    concept: 'emc_concept',
    title: 'EMC (electromagnetic compatibility)',
    kind: 'reference',
    instructions:
      'EMC ensures that a device neither emits too much electromagnetic noise nor is disrupted by noise from other devices. Read about EMC basics and explain why adding a capacitor near a motor driver helps with EMC.',
    reference: {
      kind: 'docs',
      title: 'SparkFun: EMC and noise filtering',
      url: 'https://learn.sparkfun.com/tutorials/6',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['EMC', 'noise', 'interference']
    }
  },
  {
    concept: 'pcb_basics',
    title: 'PCB design basics',
    kind: 'reference',
    instructions:
      'A PCB (printed circuit board) physically connects components with copper traces. Read about PCB layers, traces, and vias. Explain why a PCB is better than breadboard wiring for a finished product.',
    reference: {
      kind: 'docs',
      title: 'SparkFun: PCB basics',
      url: 'https://learn.sparkfun.com/tutorials/pcb-basics/all',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['PCB', 'trace', 'copper']
    }
  },
  {
    concept: 'eagle_kicad',
    title: 'EDA tools: KiCad and Eagle',
    kind: 'reference',
    instructions:
      'KiCad and Eagle are tools for designing PCBs. Read about how schematic capture works — turning a circuit diagram into a board layout. Explain why both a schematic and a board layout are needed.',
    reference: {
      kind: 'docs',
      title: 'KiCad getting started',
      url: 'https://docs.kicad.org/8.0/en/getting_started_with_kicad/getting_started_with_kicad.html',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['KiCad', 'schematic', 'layout']
    }
  },
  {
    concept: 'schematic_reading',
    title: 'Reading schematics',
    kind: 'reference',
    instructions:
      'Schematics are the blueprints of electronics. Read about common schematic symbols (resistors, capacitors, LEDs, transistors) and explain what a pull-up resistor does on a button input.',
    reference: {
      kind: 'docs',
      title: 'SparkFun: schematic symbols',
      url: 'https://learn.sparkfun.com/tutorials/how-to-read-a-schematic/all',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['schematic', 'symbol', 'resistor']
    }
  },
  {
    concept: 'communication_protocols',
    title: 'Communication protocols comparison',
    kind: 'reference',
    instructions:
      'Embedded systems use many protocols: UART, SPI, I2C, CAN. Read a comparison of these protocols and explain which one you would choose for connecting a temperature sensor to a microcontroller and why.',
    reference: {
      kind: 'docs',
      title: 'SparkFun: I2C vs SPI vs UART',
      url: 'https://learn.sparkfun.com/tutorials/communication',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['UART', 'SPI', 'I2C']
    }
  },
  {
    concept: 'can_bus',
    title: 'CAN bus',
    kind: 'reference',
    instructions:
      'CAN bus is the communication network inside cars. Read about how CAN works and explain why cars use CAN instead of running a separate wire for every sensor to every controller.',
    reference: {
      kind: 'docs',
      title: 'Arduino CAN bus library',
      url: 'https://www.arduino.cc/reference/en/libraries/arduino-can/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['CAN', 'automotive', 'bus']
    }
  },
  {
    concept: 'automotive_embedded',
    title: 'Automotive embedded systems',
    kind: 'reference',
    instructions:
      'Modern cars have 50–100 microcontrollers. Read about automotive embedded systems and explain the difference between safety-critical systems (like airbag controllers) and comfort systems (like seat heaters).',
    reference: {
      kind: 'docs',
      title: 'NXP: automotive solutions',
      url: 'https://www.nxp.com/applications/automotive',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['automotive', 'safety', 'ECU']
    }
  },
  {
    concept: 'medical_devices',
    title: 'Medical devices overview',
    kind: 'reference',
    instructions:
      'Medical embedded devices (pacemakers, insulin pumps) have the highest reliability requirements. Read about FDA regulations for medical devices and explain why medical firmware undergoes much more testing than consumer electronics.',
    reference: {
      kind: 'docs',
      title: 'Arduino medical device considerations',
      url: 'https://www.arduino.cc/reference/en/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['medical', 'reliability', 'regulation']
    }
  },
  {
    concept: 'industrial_iot',
    title: 'Industrial IoT',
    kind: 'reference',
    instructions:
      'Industrial IoT (IIoT) connects factory machines, sensors, and controllers. Read about IIoT and explain why factories use edge devices to process sensor data before sending it to the cloud.',
    reference: {
      kind: 'docs',
      title: 'Arduino Industrial IoT',
      url: 'https://www.arduino.cc/reference/en/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['IIoT', 'factory', 'edge']
    }
  },
  {
    concept: 'smart_home_protocols',
    title: 'Smart home protocols: Zigbee, Z-Wave, MQTT',
    kind: 'reference',
    instructions:
      'Smart homes use Zigbee, Z-Wave, and MQTT to connect devices. Read about these protocols and explain why Zigbee is good for light bulbs (many small messages) while MQTT is good for dashboards (summarized data).',
    reference: {
      kind: 'docs',
      title: 'MQTT essentials',
      url: 'https://mqtt.org/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['Zigbee', 'Z-Wave', 'MQTT']
    }
  },
  {
    concept: 'robotics_sensors',
    title: 'Robotics sensors overview',
    kind: 'reference',
    instructions:
      'Robots use many types of sensors: ultrasonic, infrared, LiDAR, IMU, encoders. Read about robotics sensors and explain why a self-driving car needs LiDAR while a line-following robot only needs two IR sensors.',
    reference: {
      kind: 'docs',
      title: 'Arduino robotics sensor guide',
      url: 'https://www.arduino.cc/reference/en/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['sensor', 'LiDAR', 'IMU']
    }
  },
  {
    concept: 'motor_types',
    title: 'Motor types',
    kind: 'reference',
    instructions:
      'DC motors, stepper motors, and servos each have different strengths. Read about the differences and explain when you would choose a stepper motor (precise positioning) over a DC motor (speed).',
    reference: {
      kind: 'docs',
      title: 'Adafruit: motor selection guide',
      url: 'https://learn.adafruit.com/adafruit-motor-shield-library/overview',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['motor', 'stepper', 'servo']
    }
  },
  {
    concept: 'power_electronics',
    title: 'Power electronics basics',
    kind: 'reference',
    instructions:
      'Power electronics handle the high currents that motors, heaters, and lights need. Read about MOSFETs and H-bridges and explain why you need a transistor to switch a motor instead of connecting it directly to a microcontroller pin.',
    reference: {
      kind: 'docs',
      title: 'SparkFun: MOSFET tutorial',
      url: 'https://learn.sparkfun.com/tutorials/mosfet-fet-tutorial/all',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['MOSFET', 'current', 'switching']
    }
  },
  {
    concept: 'embedded_careers',
    title: 'Embedded systems careers',
    kind: 'reference',
    instructions:
      'Embedded engineers work in automotive, medical, aerospace, consumer electronics, and IoT. Read about embedded career paths and explain what kind of embedded work interests you most and why.',
    reference: {
      kind: 'docs',
      title: 'Embedded.com: career guide',
      url: 'https://www.embedded.com/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['career', 'embedded', 'industry']
    }
  },
  {
    concept: 'maker_community',
    title: 'Maker community resources',
    kind: 'reference',
    instructions:
      'The maker community is a global network of people who build hardware projects. Explore Hackster.io and explain how maker projects differ from commercial products in terms of design and documentation.',
    reference: {
      kind: 'docs',
      title: 'Hackster.io projects',
      url: 'https://www.hackster.io/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['maker', 'community', 'project']
    }
  },
  {
    concept: 'hackaday_resources',
    title: 'Hackaday and Instructables',
    kind: 'reference',
    instructions:
      'Hackaday and Instructables are huge libraries of hardware projects. Browse both sites and explain the difference between Hackaday (engineering-focused write-ups) and Instructables (step-by-step build guides).',
    reference: {
      kind: 'docs',
      title: 'Hackaday: hardware projects',
      url: 'https://hackaday.com/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['Hackaday', 'Instructables', 'project']
    }
  },
  {
    concept: 'open_hardware',
    title: 'Open hardware licenses',
    kind: 'reference',
    instructions:
      'Open-source hardware (like OSHW) lets anyone study, modify, and build hardware designs. Read about the OSHW definition and explain how an open-hardware license differs from an open-source software license.',
    reference: {
      kind: 'docs',
      title: 'Open Source Hardware Association',
      url: 'https://www.oshwa.org/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['open hardware', 'OSHW', 'license']
    }
  },
  {
    concept: 'arduino_ecosystem',
    title: 'Arduino ecosystem',
    kind: 'reference',
    instructions:
      'Read about the Arduino platform — its boards, libraries, and IDE. Explain why Arduino became the most popular platform for learning embedded: what makes it beginner-friendly?',
    reference: {
      kind: 'docs',
      title: 'Arduino official documentation',
      url: 'https://www.arduino.cc/reference/en/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['Arduino', 'library', 'beginner']
    }
  },
  {
    concept: 'rpi_vs_arduino',
    title: 'Raspberry Pi vs Arduino',
    kind: 'reference',
    instructions:
      'Raspberry Pi runs Linux; Arduino runs bare-metal code. Read about the differences and explain when you would choose a Pi (complex processing, video) versus an Arduino (real-time, low power).',
    reference: {
      kind: 'docs',
      title: 'Raspberry Pi vs Arduino comparison',
      url: 'https://www.raspberrypi.org/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['Raspberry Pi', 'Arduino', 'Linux']
    }
  },
  {
    concept: 'esp32_iot',
    title: 'ESP32 and IoT platforms',
    kind: 'reference',
    instructions:
      'The ESP32 has built-in WiFi and Bluetooth, making it ideal for IoT. Read about ESP32 capabilities and explain why a WiFi-enabled microcontroller is perfect for a remote temperature sensor that reports to the cloud.',
    reference: {
      kind: 'docs',
      title: 'ESP32 documentation',
      url: 'https://docs.espressif.com/projects/esp-idf/en/latest/esp32/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['ESP32', 'WiFi', 'IoT']
    }
  },
  {
    concept: 'embedded_linux',
    title: 'Embedded Linux basics',
    kind: 'reference',
    instructions:
      'Embedded Linux runs on more powerful hardware like Raspberry Pi. Read about why you might use embedded Linux instead of a microcontroller and explain the trade-off: more capability but more complexity.',
    reference: {
      kind: 'docs',
      title: 'Yocto Project overview',
      url: 'https://www.yoctoproject.org/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['Linux', 'embedded', 'complexity']
    }
  },
  {
    concept: 'yocto_openwrt',
    title: 'Yocto and OpenWrt',
    kind: 'reference',
    instructions:
      'Yocto and OpenWrt are tools for building custom Linux distributions for embedded devices. Read about both and explain why a router manufacturer uses OpenWrt while an automotive infotainment system uses Yocto.',
    reference: {
      kind: 'docs',
      title: 'OpenWrt: embedded Linux',
      url: 'https://openwrt.org/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['Yocto', 'OpenWrt', 'Linux distribution']
    }
  },
  {
    concept: 'sensor_types_overview',
    title: 'Sensor types overview',
    kind: 'reference',
    instructions:
      'Sensors come in many types: temperature, pressure, gyro, accelerometer, magnetic, ultrasonic, light. Read about sensor categories (analog vs digital, active vs passive) and explain why choosing the right sensor matters for your project.',
    reference: {
      kind: 'docs',
      title: 'Adafruit sensor selection guide',
      url: 'https://www.adafruit.com/category/35',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['sensor', 'analog', 'digital']
    }
  },

  // ═══════════════════════════════════════════════════════════════
  // MASTERY (131–150): Advanced reference stages with real URLs
  // ═══════════════════════════════════════════════════════════════

  {
    concept: 'ros_robotics',
    title: 'ROS (Robot Operating System)',
    kind: 'reference',
    instructions:
      'ROS is a middleware framework for building robots. Read about ROS concepts (nodes, topics, services) and explain how ROS helps multiple robots share sensor data and coordinate movements.',
    reference: {
      kind: 'docs',
      title: 'ROS documentation',
      url: 'https://docs.ros.org/en/humble/Tutorials.html',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['ROS', 'robotics', 'nodes']
    }
  },
  {
    concept: 'mqtt_deep',
    title: 'MQTT in depth',
    kind: 'reference',
    instructions:
      'MQTT is a lightweight publish-subscribe protocol for IoT. Read the MQTT specification overview and explain the difference between QoS 0 (fire and forget), QoS 1 (at least once), and QoS 2 (exactly once).',
    reference: {
      kind: 'docs',
      title: 'MQTT protocol specification',
      url: 'https://docs.oasis-open.org/mqtt/mqtt/v5.0/mqtt-v5.0.html',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['MQTT', 'QoS', 'publish']
    }
  },
  {
    concept: 'lorawan',
    title: 'LoRaWAN for long-range IoT',
    kind: 'reference',
    instructions:
      'LoRaWAN connects devices over kilometers using low-power radio. Read about LoRa range (up to 15 km outdoors) and explain why LoRaWAN is perfect for agricultural sensors in fields far from WiFi.',
    reference: {
      kind: 'docs',
      title: 'The Things Network: LoRaWAN',
      url: 'https://www.thethingsnetwork.org/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['LoRa', 'range', 'agriculture']
    }
  },
  {
    concept: 'coap_protocol',
    title: 'CoAP protocol',
    kind: 'reference',
    instructions:
      'CoAP (Constrained Application Protocol) is like HTTP for tiny devices. Read about CoAP and explain why HTTP is too heavy for a small sensor and how CoAP solves that.',
    reference: {
      kind: 'docs',
      title: 'CoAP protocol RFC',
      url: 'https://datatracker.ietf.org/doc/html/rfc7252',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['CoAP', 'constrained', 'HTTP']
    }
  },
  {
    concept: 'mbedtls',
    title: 'Embedded TLS (mbedTLS)',
    kind: 'reference',
    instructions:
      'TLS encrypts internet traffic — even on tiny devices. Read about mbedTLS and explain why an IoT temperature sensor sending data to the cloud needs TLS encryption.',
    reference: {
      kind: 'docs',
      title: 'Mbed TLS documentation',
      url: 'https://os.mbed.com/mbed-os/-docs/mbed-os-api-reference/api/mbed-tls/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['TLS', 'encryption', 'security']
    }
  },
  {
    concept: 'fatfs_storage',
    title: 'File systems for embedded storage',
    kind: 'reference',
    instructions:
      'Embedded devices sometimes need to store data on SD cards or flash chips using FAT or littlefs. Read about LittleFS and explain why a simple filesystem matters when a device needs to store logs that survive power loss.',
    reference: {
      kind: 'docs',
      title: 'LittleFS documentation',
      url: 'https://github.com/geky/littlefs',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['filesystem', 'storage', 'littlefs']
    }
  },
  {
    concept: 'nrf52_ble',
    title: 'BLE with nRF52',
    kind: 'reference',
    instructions:
      'Bluetooth Low Energy (BLE) is the wireless protocol for wearables and IoT sensors. Read about nRF52 BLE chips and explain why BLE uses less power than classic Bluetooth.',
    reference: {
      kind: 'docs',
      title: 'Nordic nRF52 documentation',
      url: 'https://www.nordicsemi.com/Products/nRF52840',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['BLE', 'Bluetooth', 'nRF52']
    }
  },
  {
    concept: 'zephyr_rtos',
    title: 'Zephyr RTOS',
    kind: 'reference',
    instructions:
      'Zephyr is a modern RTOS backed by the Linux Foundation, supporting hundreds of boards. Read about Zephyr and explain how device trees in Zephyr help support many different hardware platforms.',
    reference: {
      kind: 'docs',
      title: 'Zephyr Project documentation',
      url: 'https://docs.zephyrproject.org/latest/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['Zephyr', 'RTOS', 'device tree']
    }
  },
  {
    concept: 'arm_cortex',
    title: 'ARM Cortex-M processors',
    kind: 'reference',
    instructions:
      'ARM Cortex-M is the most common processor family in embedded (M0, M3, M4, M7). Read about the Cortex-M family and explain why Cortex-M0 is good for cheap sensors while Cortex-M7 is used for audio processing.',
    reference: {
      kind: 'docs',
      title: 'ARM Cortex-M documentation',
      url: 'https://developer.arm.com/Processors/Cortex-M4',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['ARM', 'Cortex', 'processor']
    }
  },
  {
    concept: 'risc_v',
    title: 'RISC-V in embedded',
    kind: 'reference',
    instructions:
      'RISC-V is an open-source processor architecture that is challenging ARM in embedded. Read about RISC-V and explain why an open instruction set matters for the future of embedded hardware.',
    reference: {
      kind: 'docs',
      title: 'RISC-V International',
      url: 'https://riscv.org/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['RISC-V', 'open source', 'architecture']
    }
  },
  {
    concept: 'digital_twin',
    title: 'Digital twin concept',
    kind: 'reference',
    instructions:
      'A digital twin is a software model of a physical device. Read about digital twins in industrial IoT and explain how a digital twin of a motor helps engineers predict failures before they happen.',
    reference: {
      kind: 'docs',
      title: 'AWS IoT: digital twins',
      url: 'https://aws.amazon.com/iot-site-wise/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['digital twin', 'model', 'predict']
    }
  },
  {
    concept: 'matter_protocol',
    title: 'Matter smart home standard',
    kind: 'reference',
    instructions:
      'Matter is a new unified standard for smart home devices backed by Apple, Google, and Amazon. Read about Matter and explain why having one standard matters more than having the fastest protocol.',
    reference: {
      kind: 'docs',
      title: 'Matter smart home standard',
      url: 'https://csa-iot.org/all-solutions/matter/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['Matter', 'standard', 'interoperability']
    }
  },
  {
    concept: 'nvram_persistence',
    title: 'NVRAM and persistent storage',
    kind: 'reference',
    instructions:
      'NVRAM (non-volatile RAM) keeps data when power is off. Read about EEPROM and flash storage on microcontrollers and explain why storing calibration data in NVRAM means a sensor remembers its settings after a power cycle.',
    reference: {
      kind: 'docs',
      title: 'Arduino EEPROM library',
      url: 'https://www.arduino.cc/reference/en/libraries/eeprom/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['NVRAM', 'EEPROM', 'persistent']
    }
  },
  {
    concept: 'sbc_vs_mcu',
    title: 'Single-board computers vs MCUs',
    kind: 'reference',
    instructions:
      'A single-board computer (like Raspberry Pi) runs Linux; a microcontroller (like Arduino) runs bare-metal. Read about both and explain why a washing machine uses an MCU (deterministic, cheap) while a kiosk uses an SBC (complex UI).',
    reference: {
      kind: 'docs',
      title: 'Raspberry Pi documentation',
      url: 'https://www.raspberrypi.com/documentation/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['SBC', 'MCU', 'Linux']
    }
  },
  {
    concept: 'noise_filtering',
    title: 'Noise filtering in sensor data',
    kind: 'code',
    instructions:
      'Raw sensor readings are noisy. Store 5 readings: [48, 52, 49, 51, 50]. The average is 50. Print "Filtered value: 50". A simple moving average filter removes random noise from sensor data.',
    starterCode:
      'let readings = [48, 52, 49, 51, 50];\nlet sum = 0;\n// repeat (5) {\n//   sum = sum + get(readings, ???);\n// }\n// let filtered = sum / 5;\n// print("Filtered value: " + filtered);\n',
    validation: {
      consoleExact: ['Filtered value: 50'],
      requireKeywords: ['repeat', 'get'],
      explanationKeywords: ['filter', 'noise', 'average']
    }
  },
  {
    concept: 'comparator_circuit',
    title: 'Comparator and threshold detection',
    kind: 'code',
    instructions:
      'A comparator checks if a voltage crosses a threshold. Store sensor = 180 and threshold = 150. If sensor is greater than threshold, print "Signal detected — voltage above threshold". Comparators are the building blocks of analog sensing.',
    starterCode:
      'let sensor = 180;\nlet threshold = 150;\n// if (sensor > threshold) {\n//   print("Signal detected — voltage above threshold");\n// } else {\n//   print("Below threshold");\n// }\n',
    validation: {
      consoleExact: ['Signal detected — voltage above threshold'],
      requireKeywords: ['if'],
      explanationKeywords: ['comparator', 'threshold', 'voltage']
    }
  },
  {
    concept: 'adc_multiplexing',
    title: 'ADC multiplexing',
    kind: 'code',
    instructions:
      'An ADC multiplexer lets one converter read many channels. Create channels = ["temp", "light", "pressure"] and a values array with [72, 450, 1013]. Print each: "Channel temp: 72", "Channel light: 450", "Channel pressure: 1013". Mux switches between inputs one at a time.',
    starterCode:
      'let channels = ["temp", "light", "pressure"];\nlet values = [72, 450, 1013];\nlet i = 0;\n// repeat (3) {\n//   print("Channel " + get(channels, i) + ": " + get(values, i));\n//   i = i + 1;\n// }\n',
    validation: {
      consoleExact: ['Channel temp: 72', 'Channel light: 450', 'Channel pressure: 1013'],
      requireKeywords: ['repeat', 'get'],
      explanationKeywords: ['multiplexer', 'ADC', 'channel']
    }
  },
  {
    concept: 'dac_output',
    title: 'DAC output concept',
    kind: 'code',
    instructions:
      'A DAC converts a number back into voltage. Write a function dacOutput(level) that prints "DAC: " + level + " (voltage proportional to value)". Call it with 200. DACs are the reverse of ADCs — they turn numbers into real electrical signals.',
    starterCode:
      '// function dacOutput(level) {\n//   print("DAC: " + level + " (voltage proportional to value)");\n// }\n// dacOutput(200);\n',
    validation: {
      consoleExact: ['DAC: 200 (voltage proportional to value)'],
      requireKeywords: ['function'],
      explanationKeywords: ['DAC', 'output', 'voltage']
    }
  },
  {
    concept: 'crc_check',
    title: 'CRC error checking',
    kind: 'code',
    instructions:
      'CRC (Cyclic Redundancy Check) detects data corruption in transmission. Print "Data: 0x5A", then "CRC: computed checksum", then "Transmission verified — no corruption". CRC is used in UART, SPI, and network packets.',
    starterCode:
      '// print("Data: 0x5A");\n// print("CRC: computed checksum");\n// print("Transmission verified — no corruption");\n',
    validation: {
      consoleExact: [
        'Data: 0x5A',
        'CRC: computed checksum',
        'Transmission verified — no corruption'
      ],
      explanationKeywords: ['CRC', 'checksum', 'error detection']
    }
  },
  {
    concept: 'watchdog_full',
    title: 'Full watchdog implementation',
    kind: 'code',
    instructions:
      'Implement a proper watchdog pattern. Store feedCount = 0 and maxFeeds = 5. In a repeat loop, increment feedCount and print "Feed " + feedCount. After the loop, print "Watchdog satisfied — system alive". The watchdog only resets if the loop stops running.',
    starterCode:
      'let feedCount = 0;\nlet maxFeeds = 5;\n// repeat (5) {\n//   feedCount = feedCount + 1;\n//   print("Feed " + feedCount);\n// }\n// print("Watchdog satisfied — system alive");\n',
    validation: {
      consoleExact: [
        'Feed 1',
        'Feed 2',
        'Feed 3',
        'Feed 4',
        'Feed 5',
        'Watchdog satisfied — system alive'
      ],
      requireKeywords: ['repeat'],
      explanationKeywords: ['watchdog', 'feed', 'safety']
    }
  },
  {
    concept: 'dma_transfer',
    title: 'DMA transfer simulation',
    kind: 'code',
    instructions:
      'DMA transfers data without CPU involvement. Create a source = [10, 20, 30] and a destination = []. Push each value from source into destination, then print "DMA complete: " + count(destination) + " bytes transferred". In real hardware the DMA controller does this autonomously.',
    starterCode:
      'let source = [10, 20, 30];\nlet destination = [];\n// push(destination, get(source, 0));\n// push(destination, get(source, 1));\n// push(destination, get(source, 2));\n// print("DMA complete: " + count(destination) + " bytes transferred");\n',
    validation: {
      consoleExact: ['DMA complete: 3 bytes transferred'],
      requireKeywords: ['push', 'get'],
      explanationKeywords: ['DMA', 'transfer', 'autonomous']
    }
  },
  {
    concept: 'hal_example',
    title: 'HAL driver example',
    kind: 'code',
    instructions:
      'Build a hardware abstraction layer for an LED. Write function ledInit(pin) that prints "LED on pin " + pin + " ready", and function ledToggle(pin) that prints "LED " + pin + " toggled". Init pin 13, then toggle it. HALs make code portable across boards.',
    starterCode:
      '// function ledInit(pin) {\n//   print("LED on pin " + pin + " ready");\n// }\n// function ledToggle(pin) {\n//   print("LED " + pin + " toggled");\n// }\n// ledInit(13);\n// ledToggle(13);\n',
    validation: {
      consoleExact: ['LED on pin 13 ready', 'LED 13 toggled'],
      requireKeywords: ['function'],
      explanationKeywords: ['HAL', 'driver', 'portable']
    }
  },
  {
    concept: 'morse_full',
    title: 'Morse code encoder',
    kind: 'code',
    instructions:
      'Encode "SOS" in Morse: S = ..., O = ---. Print each element with "Dot" or "Dash". Print "Dot" 3 times, then "Dash" 3 times, then "Dot" 3 times. Real Morse encoders translate text characters to timed signals automatically.',
    starterCode:
      '// S = ...\n// print("Dot");\n// print("Dot");\n// print("Dot");\n// O = ---\n// print("Dash");\n// print("Dash");\n// print("Dash");\n// S = ...\n// print("Dot");\n// print("Dot");\n// print("Dot");\n',
    validation: {
      consoleExact: ['Dot', 'Dot', 'Dot', 'Dash', 'Dash', 'Dash', 'Dot', 'Dot', 'Dot'],
      explanationKeywords: ['morse', 'encode', 'SOS']
    }
  },
  {
    concept: 'debounce_full',
    title: 'Full debounce with timer',
    kind: 'code',
    instructions:
      'Debouncing filters out mechanical bounce over time. Store lastPress = 0, currentTime = 100, and debounceDelay = 50. If currentTime minus lastPress is greater than debounceDelay, print "Valid press" and set lastPress = currentTime. Otherwise print "Bounce ignored".',
    starterCode:
      'let lastPress = 0;\nlet currentTime = 100;\nlet debounceDelay = 50;\n// if (currentTime - lastPress > debounceDelay) {\n//   print("Valid press");\n//   lastPress = currentTime;\n// } else {\n//   print("Bounce ignored");\n// }\n',
    validation: {
      consoleExact: ['Valid press'],
      requireKeywords: ['if'],
      explanationKeywords: ['debounce', 'timer', 'mechanical']
    }
  },
  {
    concept: 'led_brightness_ramp',
    title: 'LED brightness ramp',
    kind: 'code',
    instructions:
      'Fade an LED by ramping PWM duty from 0 to 100. Use a repeat that runs 5 times, and each iteration set brightness to i * 25. Print "Brightness: 0", "Brightness: 25", "Brightness: 50", "Brightness: 75", "Brightness: 100".',
    starterCode:
      'let brightness = 0;\nlet i = 0;\n// repeat (5) {\n//   brightness = i * 25;\n//   print("Brightness: " + brightness);\n//   i = i + 1;\n// }\n',
    validation: {
      consoleExact: [
        'Brightness: 0',
        'Brightness: 25',
        'Brightness: 50',
        'Brightness: 75',
        'Brightness: 100'
      ],
      requireKeywords: ['repeat'],
      explanationKeywords: ['PWM', 'fade', 'brightness']
    }
  },
  {
    concept: 'serial_echo',
    title: 'Serial echo server',
    kind: 'code',
    instructions:
      'An echo server sends back whatever it receives. Print "Received: HELLO", then "Echo: HELLO". Print "Received: PING", then "Echo: PING". Echo servers are the simplest communication test — if data comes back, the link works.',
    starterCode:
      '// print("Received: HELLO");\n// print("Echo: HELLO");\n// print("Received: PING");\n// print("Echo: PING");\n',
    validation: {
      consoleExact: ['Received: HELLO', 'Echo: HELLO', 'Received: PING', 'Echo: PING'],
      explanationKeywords: ['echo', 'serial', 'communication']
    }
  },
  {
    concept: 'led_matrix',
    title: 'LED matrix scanning',
    kind: 'code',
    instructions:
      'An 8x8 LED matrix is scanned one row at a time. Print "Row 0: ON ON OFF ON ON OFF ON ON", then "Row 1: OFF ON ON ON OFF ON ON OFF". Each row is displayed briefly, and persistence of vision makes it look like all LEDs are on.',
    starterCode:
      '// print("Row 0: ON ON OFF ON ON OFF ON ON");\n// print("Row 1: OFF ON ON ON OFF ON ON OFF");\n',
    validation: {
      consoleExact: ['Row 0: ON ON OFF ON ON OFF ON ON', 'Row 1: OFF ON ON ON OFF ON ON OFF'],
      explanationKeywords: ['matrix', 'scanning', 'POV']
    }
  },
  {
    concept: 'ring_buffer_full',
    title: 'Ring buffer implementation',
    kind: 'code',
    instructions:
      'Implement a 4-element ring buffer. Create buffer = [0, 0, 0, 0], head = 0, and push values 10, 20, 30 into it. Then print "Buffer[0]=10", "Buffer[1]=20", "Buffer[2]=30". Ring buffers wrap around when they reach the end.',
    starterCode:
      'let buffer = [0, 0, 0, 0];\nlet head = 0;\n// push(buffer, 10);\n// push(buffer, 20);\n// push(buffer, 30);\n// print("Buffer[0]=10");\n// print("Buffer[1]=20");\n// print("Buffer[2]=30");\n',
    validation: {
      consoleExact: ['Buffer[0]=10', 'Buffer[1]=20', 'Buffer[2]=30'],
      explanationKeywords: ['ring buffer', 'head', 'wrap']
    }
  },
  {
    concept: 'state_machine_full',
    title: 'Full state machine: vending machine',
    kind: 'code',
    instructions:
      'Model a vending machine. State starts at "idle". Print "State: idle — insert coin". Set state = "coin_inserted" and print "State: coin_inserted — select item". Set state = "dispensing" and print "State: dispensing — item dropped". State machines make complex logic understandable.',
    starterCode:
      '// let state = "idle";\n// print("State: idle — insert coin");\n// state = "coin_inserted";\n// print("State: coin_inserted — select item");\n// state = "dispensing";\n// print("State: dispensing — item dropped");\n',
    validation: {
      consoleExact: [
        'State: idle — insert coin',
        'State: coin_inserted — select item',
        'State: dispensing — item dropped'
      ],
      explanationKeywords: ['state machine', 'vending', 'transition']
    }
  },
  {
    concept: 'event_handler',
    title: 'Event handler registration',
    kind: 'code',
    instructions:
      'Event handlers respond to hardware events. Write a function onButtonPress() that prints "Button event: toggle LED" and function onSensorReady() that prints "Sensor event: read value". Call both. Events decouple detection from response.',
    starterCode:
      '// function onButtonPress() {\n//   print("Button event: toggle LED");\n// }\n// function onSensorReady() {\n//   print("Sensor event: read value");\n// }\n// onButtonPress();\n// onSensorReady();\n',
    validation: {
      consoleExact: ['Button event: toggle LED', 'Sensor event: read value'],
      requireKeywords: ['function'],
      explanationKeywords: ['event', 'handler', 'callback']
    }
  },
  {
    concept: 'mutex_concept',
    title: 'Mutex for shared resources',
    kind: 'code',
    instructions:
      'A mutex (mutual exclusion lock) prevents two tasks from using a resource at once. Print "Lock acquired — Task A writing sensor data", then "Lock released". Then "Lock acquired — Task B reading display", then "Lock released". Without mutexes, shared data gets corrupted.',
    starterCode:
      '// print("Lock acquired — Task A writing sensor data");\n// print("Lock released");\n// print("Lock acquired — Task B reading display");\n// print("Lock released");\n',
    validation: {
      consoleExact: [
        'Lock acquired — Task A writing sensor data',
        'Lock released',
        'Lock acquired — Task B reading display',
        'Lock released'
      ],
      explanationKeywords: ['mutex', 'lock', 'shared resource']
    }
  },
  {
    concept: 'semaphore',
    title: 'Semaphore for task signaling',
    kind: 'code',
    instructions:
      'A semaphore lets one task signal another that data is ready. Print "Semaphore posted — sensor data available", then "Task B: reading semaphore, processing data". Semaphores coordinate work between independent tasks in an RTOS.',
    starterCode:
      '// print("Semaphore posted — sensor data available");\n// print("Task B: reading semaphore, processing data");\n',
    validation: {
      consoleExact: [
        'Semaphore posted — sensor data available',
        'Task B: reading semaphore, processing data'
      ],
      explanationKeywords: ['semaphore', 'signal', 'RTOS']
    }
  },
  {
    concept: 'timer_interrupt',
    title: 'Timer interrupt pattern',
    kind: 'code',
    instructions:
      'A timer interrupt fires at a fixed rate. Store sampleRate = 100 and print "Timer ISR: sampling at " + sampleRate + "Hz". Then print "Reading: 42". Timer interrupts are the heartbeat of real-time embedded systems.',
    starterCode:
      'let sampleRate = 100;\n// print("Timer ISR: sampling at " + sampleRate + "Hz");\n// print("Reading: 42");\n',
    validation: {
      consoleExact: ['Timer ISR: sampling at 100Hz', 'Reading: 42'],
      explanationKeywords: ['timer', 'interrupt', 'sampling']
    }
  },
  {
    concept: 'power_down',
    title: 'Deep sleep and wake sources',
    kind: 'reference',
    instructions:
      'Deep sleep can reduce microcontroller power consumption to microamps. Read about ESP32 deep sleep and explain what wake sources (timer, GPIO, touch) allow the device to wake up.',
    reference: {
      kind: 'docs',
      title: 'ESP32 deep sleep documentation',
      url: 'https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/system/sleep_modes.html',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['deep sleep', 'wake', 'low power']
    }
  },
  {
    concept: 'battery_management',
    title: 'Battery management system (BMS)',
    kind: 'reference',
    instructions:
      'A BMS monitors lithium battery voltage, current, and temperature to charge safely. Read about lithium battery charging and explain why charging a LiPo battery at the wrong voltage is dangerous.',
    reference: {
      kind: 'docs',
      title: 'Adafruit: LiPo battery guide',
      url: 'https://learn.adafruit.com/lithium-polymer-esp32-processing-over-usb',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['BMS', 'lithium', 'charging']
    }
  },
  {
    concept: 'power_supply_design',
    title: 'Power supply design for embedded',
    kind: 'reference',
    instructions:
      'Embedded systems need clean, stable power. Read about voltage regulators (LDO and buck converters) and explain why you need a voltage regulator when a 9V battery powers a 3.3V microcontroller.',
    reference: {
      kind: 'docs',
      title: 'SparkFun: voltage regulators',
      url: 'https://learn.sparkfun.com/tutorials/voltage-regulators/all',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['regulator', 'voltage', 'LDO']
    }
  },
  {
    concept: 'esd_protection',
    title: 'ESD protection',
    kind: 'reference',
    instructions:
      'Electrostatic discharge (ESD) can destroy chips instantly. Read about ESD protection diodes and explain why touching a microcontroller pin with your finger can zap it with thousands of volts.',
    reference: {
      kind: 'docs',
      title: 'SparkFun: ESD protection',
      url: 'https://learn.sparkfun.com/tutorials/6',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['ESD', 'protection', 'static']
    }
  },
  {
    concept: 'wireless_mesh',
    title: 'Wireless mesh networking',
    kind: 'reference',
    instructions:
      'Mesh networks let devices relay data through each other to extend range. Read about Zigbee mesh and explain how a mesh network in a smart home lets a sensor in the basement talk to a hub on the second floor.',
    reference: {
      kind: 'docs',
      title: 'Zigbee mesh networking',
      url: 'https://zigbeealliance.org/zigbee-cluster-library/',
      whyKey: 'reference.embedded.why'
    },
    validation: {
      explanationKeywords: ['mesh', 'relay', 'Zigbee']
    }
  },
  {
    concept: 'digital_filter',
    title: 'Digital filters: low-pass concept',
    kind: 'code',
    instructions:
      'A low-pass filter smooths rapid changes. Store readings [10, 80, 15, 75, 20] and compute the average (40). Print "Filtered output: 40". Low-pass filters remove high-frequency noise from sensor data — critical for stable control loops.',
    starterCode:
      'let readings = [10, 80, 15, 75, 20];\nlet sum = 0;\n// repeat (5) {\n//   sum = sum + get(readings, ???);\n// }\n// let filtered = sum / 5;\n// print("Filtered output: " + filtered);\n',
    validation: {
      consoleExact: ['Filtered output: 40'],
      requireKeywords: ['repeat', 'get'],
      explanationKeywords: ['filter', 'low-pass', 'smooth']
    }
  },
  {
    concept: 'motion_detection',
    title: 'PIR motion detection logic',
    kind: 'code',
    instructions:
      'A PIR (passive infrared) sensor detects motion. Store motionDetected = true. If motionDetected is true, print "Motion detected — activating camera", otherwise print "No motion — system idle". PIR sensors are the backbone of security systems.',
    starterCode:
      'let motionDetected = true;\n// if (motionDetected == true) {\n//   print("Motion detected — activating camera");\n// } else {\n//   print("No motion — system idle");\n// }\n',
    validation: {
      consoleExact: ['Motion detected — activating camera'],
      requireKeywords: ['if'],
      explanationKeywords: ['PIR', 'motion', 'detection']
    }
  },
  {
    concept: 'relay_control',
    title: 'Relay control for high-power devices',
    kind: 'code',
    instructions:
      'Relays let a microcontroller switch high-power devices like fans and motors. Write a function relayControl(device, state) that prints "Relay: " + device + " -> " + state. Call it with ("fan", "ON"). Relays bridge the gap between low-voltage logic and high-voltage loads.',
    starterCode:
      '// function relayControl(device, state) {\n//   print("Relay: " + device + " -> " + state);\n// }\n// relayControl("fan", "ON");\n',
    validation: {
      consoleExact: ['Relay: fan -> ON'],
      requireKeywords: ['function'],
      explanationKeywords: ['relay', 'switch', 'high-power']
    }
  },
  {
    concept: 'step_motor',
    title: 'Stepper motor control',
    kind: 'code',
    instructions:
      'A stepper motor moves in precise steps. Store stepsPerRev = 200 and targetAngle = 90. Compute stepsNeeded = stepsPerRev * targetAngle / 360. Print "Moving " + stepsNeeded + " steps for 90 degrees". Steppers give exact positioning without feedback.',
    starterCode:
      'let stepsPerRev = 200;\nlet targetAngle = 90;\nlet stepsNeeded = stepsPerRev * targetAngle / 360;\n// print("Moving " + stepsNeeded + " steps for 90 degrees");\n',
    validation: {
      consoleExact: ['Moving 50 steps for 90 degrees'],
      explanationKeywords: ['stepper', 'motor', 'steps']
    }
  },
  {
    concept: 'compass_heading',
    title: 'Compass heading calculation',
    kind: 'code',
    instructions:
      'A magnetometer gives raw X/Y values to compute a heading. Store magX = 30, magY = 40. Compute heading = (magX + magY) / 2. Print "Heading: 35". Real compass heading uses atan2, but this shows how sensor pairs produce derived values.',
    starterCode:
      'let magX = 30;\nlet magY = 40;\nlet heading = (magX + magY) / 2;\n// print("Heading: " + heading);\n',
    validation: {
      consoleExact: ['Heading: 35'],
      explanationKeywords: ['compass', 'heading', 'magnetometer']
    }
  },
  {
    concept: 'power_monitoring',
    title: 'Real-time power monitoring',
    kind: 'code',
    instructions:
      'Monitor power consumption with a current sensor. Store currentMA = 450 and voltageMV = 3300. Compute powerMW = currentMA * voltageMV / 1000. Print "Power: " + powerMW + " mW". Monitoring power in real time helps optimize battery life.',
    starterCode:
      'let currentMA = 450;\nlet voltageMV = 3300;\nlet powerMW = currentMA * voltageMV / 1000;\n// print("Power: " + powerMW + " mW");\n',
    validation: {
      consoleExact: ['Power: 1485 mW'],
      explanationKeywords: ['power', 'current', 'monitoring']
    }
  },
  {
    concept: 'gps_parsing',
    title: 'GPS NMEA parsing concept',
    kind: 'code',
    instructions:
      'GPS modules send NMEA sentences like "$GPGGA,123519,4807.038,N,01131.000,E,1,08,0.9,545.4,M". Store a simplified lat = 48.117 and lon = 11.517. Print "Lat: 48.117 Lon: 11.517". Parsing GPS data is a classic embedded string-processing task.',
    starterCode:
      'let lat = 48.117;\nlet lon = 11.517;\n// print("Lat: " + lat + " Lon: " + lon);\n',
    validation: {
      consoleExact: ['Lat: 48.117 Lon: 11.517'],
      explanationKeywords: ['GPS', 'NMEA', 'parse']
    }
  },
  {
    concept: 'humidity_sensor',
    title: 'Humidity and dew point',
    kind: 'code',
    instructions:
      'A humidity sensor reads relative humidity. Store humidity = 65 and temperature = 22. Compute dewPoint = temperature - (100 - humidity) / 5. Print "Dew point: 11". Dew point tells you when condensation will form on your circuit.',
    starterCode:
      'let humidity = 65;\nlet temperature = 22;\nlet dewPoint = temperature - (100 - humidity) / 5;\n// print("Dew point: " + dewPoint);\n',
    validation: {
      consoleExact: ['Dew point: 11'],
      explanationKeywords: ['humidity', 'dew point', 'environment']
    }
  },
  {
    concept: 'threshold_hysteresis',
    title: 'Hysteresis to prevent chatter',
    kind: 'code',
    instructions:
      'Without hysteresis, a thermostat at 25 degrees toggles rapidly near the threshold. Store temp = 25, onThreshold = 25, offThreshold = 23. If temp is greater than or equal to onThreshold, print "Heater ON". Else if temp is less than or equal to offThreshold, print "Heater OFF". Else print "Heater holding".',
    starterCode:
      'let temp = 25;\nlet onThreshold = 25;\nlet offThreshold = 23;\n// if (temp >= onThreshold) {\n//   print("Heater ON");\n// } else if (temp <= offThreshold) {\n//   print("Heater OFF");\n// } else {\n//   print("Heater holding");\n// }\n',
    validation: {
      consoleExact: ['Heater ON'],
      requireKeywords: ['if', 'else'],
      explanationKeywords: ['hysteresis', 'threshold', 'chatter']
    }
  }
]
