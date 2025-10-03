import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuizCard } from "@/components/QuizCard";
import { CodeEditor } from "@/components/CodeEditor";
import { Progress } from "@/components/ui/progress";
import {
  Code2,
  Terminal,
  BookOpen,
  Cpu,
  Gamepad2,
  ArrowRight,
  CheckCircle,
  PlayCircle,
  Sparkles,
  Trophy,
  Youtube,
  List,
  Zap,
  FileText
} from "lucide-react";

const pythonQuiz = [
  {
    question: "What makes Python different from languages like C#?",
    options: [
      "Python uses curly braces for code blocks",
      "Python uses indentation to define code blocks",
      "Python requires semicolons at the end of lines",
      "Python needs type declarations for variables"
    ],
    correctAnswer: 1,
    explanation: "Python uses indentation (spaces) instead of curly braces {} to define code blocks. This makes Python code look cleaner and more readable!"
  },
  {
    question: "How do you write a comment in Python?",
    options: [
      "// This is a comment",
      "/* This is a comment */",
      "# This is a comment",
      "<!-- This is a comment -->"
    ],
    correctAnswer: 2,
    explanation: "Python uses the # symbol for comments. Everything after # on that line is ignored by Python!"
  },
  {
    question: "What does the print() function do?",
    options: [
      "Prints on paper",
      "Saves a file",
      "Displays text on the screen",
      "Deletes a variable"
    ],
    correctAnswer: 2,
    explanation: "The print() function displays text on the screen (console). It's how we show output to the user!"
  },
  {
    question: "Which of these is a valid Python variable name?",
    options: [
      "2player",
      "player-score",
      "player_score",
      "player score"
    ],
    correctAnswer: 2,
    explanation: "Python variables can contain letters, numbers, and underscores, but cannot start with a number or contain spaces or hyphens!"
  },
  {
    question: "What does input() function always return?",
    options: [
      "A number",
      "A string (text)",
      "True or False",
      "Nothing"
    ],
    correctAnswer: 1,
    explanation: "The input() function always returns a string (text), even if the user types numbers. Use int() or float() to convert to numbers!"
  },
  {
    question: "How do you check if two values are equal in Python?",
    options: [
      "=",
      "==",
      "equals",
      "is same"
    ],
    correctAnswer: 1,
    explanation: "Use == to check if two values are equal. Single = is for assigning values to variables!"
  },
  {
    question: "Which keyword starts a function definition in Python?",
    options: [
      "function",
      "def",
      "func",
      "method"
    ],
    correctAnswer: 1,
    explanation: "Python uses 'def' to define functions. Example: def my_function():"
  },
  {
    question: "What's special about the 'self' parameter in Python classes?",
    options: [
      "It's optional",
      "It refers to the current instance of the class",
      "It's only used in constructors",
      "It's the same as 'this' in other languages"
    ],
    correctAnswer: 1,
    explanation: "'self' refers to the current instance of the class and must be the first parameter in all methods (except static methods)!"
  },
  {
    question: "How do you create a list in Python?",
    options: [
      "list = {1, 2, 3}",
      "list = (1, 2, 3)",
      "list = [1, 2, 3]",
      "list = <1, 2, 3>"
    ],
    correctAnswer: 2,
    explanation: "Python lists are created with square brackets []. Example: fruits = ['apple', 'banana', 'orange']"
  },
  {
    question: "What does 'len()' function do?",
    options: [
      "Deletes items from a list",
      "Returns the length/size of something",
      "Creates a new list",
      "Sorts a list"
    ],
    correctAnswer: 1,
    explanation: "len() returns the number of items in a list, string, or other collection. Example: len([1,2,3]) returns 3"
  },
  {
    question: "What is Python's philosophy about indentation?",
    options: [
      "Indentation is optional for style",
      "Indentation is syntax - it's part of the language",
      "Only use indentation in classes",
      "Indentation slows down the program"
    ],
    correctAnswer: 1,
    explanation: "In Python, indentation IS syntax! It's not just for style - Python uses indentation to determine which lines belong to which code blocks."
  },
  {
    question: "What does the range() function generate?",
    options: [
      "Random numbers",
      "A sequence of numbers",
      "Letters of the alphabet",
      "Nothing useful"
    ],
    correctAnswer: 1,
    explanation: "range() generates a sequence of numbers. For example, range(5) gives you 0, 1, 2, 3, 4."
  },
  {
    question: "How do you convert a string to an integer in Python?",
    options: [
      "string.toInt()",
      "int(string)",
      "convert(string, int)",
      "string.integer()"
    ],
    correctAnswer: 1,
    explanation: "Use int() to convert a string to an integer. Example: int('42') returns the number 42."
  },
  {
    question: "What does 'elif' mean in Python?",
    options: [
      "End if",
      "Else if",
      "Error if",
      "Exit if"
    ],
    correctAnswer: 1,
    explanation: "'elif' is short for 'else if'. It's used to check additional conditions in an if statement chain."
  },
  {
    question: "Which loop is best for iterating through a list in Python?",
    options: [
      "while loop",
      "for loop with range()",
      "for loop with direct iteration",
      "do-while loop"
    ],
    correctAnswer: 2,
    explanation: "For iterating through a list, use 'for item in list:' - this is the most Pythonic way!"
  },
  {
    question: "What symbol is used to mark the end of an if statement condition in Python?",
    options: [
      "Semicolon ;",
      "Colon :",
      "Curly brace {",
      "Nothing special"
    ],
    correctAnswer: 1,
    explanation: "Python uses a colon : at the end of if statement conditions, then indented code below."
  },
  {
    question: "What does f'Hello {name}' demonstrate?",
    options: [
      "A function call",
      "A formatting error",
      "An f-string (formatted string literal)",
      "A comment"
    ],
    correctAnswer: 2,
    explanation: "f'Hello {name}' is an f-string - a modern way to format strings in Python by embedding variables directly."
  },
  {
    question: "What does the append() method do to a list?",
    options: [
      "Removes the last item",
      "Adds an item to the end",
      "Sorts the list",
      "Clears the list"
    ],
    correctAnswer: 1,
    explanation: "The append() method adds an item to the end of a list. Example: fruits.append('banana')"
  },
  {
    question: "What's the difference between a list and a dictionary in Python?",
    options: [
      "No difference",
      "Lists use [], dictionaries use {}",
      "Lists store ordered items, dictionaries store key-value pairs",
      "Both B and C are correct"
    ],
    correctAnswer: 3,
    explanation: "Lists use [] and store ordered items accessed by index. Dictionaries use {} and store key-value pairs accessed by key."
  },
  {
    question: "What does the __init__ method do in a Python class?",
    options: [
      "Destroys the object",
      "Initializes/sets up a new object when it's created",
      "Prints the object",
      "Copies the object"
    ],
    correctAnswer: 1,
    explanation: "__init__ is the constructor method that runs automatically when you create a new object, setting up initial values."
  },
  {
    question: "How do you access the first item in a Python list?",
    options: [
      "list[1]",
      "list[0]",
      "list.first()",
      "list.get(1)"
    ],
    correctAnswer: 1,
    explanation: "Python lists are zero-indexed, so the first item is at index 0: list[0]"
  },
  {
    question: "What does the 'not' operator do?",
    options: [
      "Deletes a variable",
      "Reverses the True/False value",
      "Creates a comment",
      "Stops the program"
    ],
    correctAnswer: 1,
    explanation: "The 'not' operator reverses boolean values: 'not True' becomes False, 'not False' becomes True."
  },
  {
    question: "In Python, what does 'and' require to return True?",
    options: [
      "Only the first condition to be True",
      "Only the second condition to be True",
      "Both conditions to be True",
      "Neither condition to be True"
    ],
    correctAnswer: 2,
    explanation: "The 'and' operator requires BOTH conditions to be True to return True. If either is False, the result is False."
  },
  {
    question: "What happens if you don't include 'self' as the first parameter in a class method?",
    options: [
      "The method works fine",
      "Python gives an error",
      "The method runs slower",
      "The method becomes static"
    ],
    correctAnswer: 1,
    explanation: "Python requires 'self' as the first parameter in instance methods. Without it, you'll get a TypeError when calling the method."
  },
  {
    question: "What does list slicing list[1:3] return?",
    options: [
      "Items at index 1, 2, and 3",
      "Items at index 1 and 2 only",
      "Items at index 0, 1, and 2",
      "Just the item at index 1"
    ],
    correctAnswer: 1,
    explanation: "List slicing [1:3] returns items from index 1 up to (but not including) index 3, so indices 1 and 2."
  },
  {
    question: "In the text adventure game, what Python feature allows us to store player data like name, health, and inventory together?",
    options: [
      "Variables",
      "Functions",
      "Classes and objects",
      "Comments"
    ],
    correctAnswer: 2,
    explanation: "Classes allow us to bundle related data (properties) and actions (methods) together in objects, like a Player class with health, name, and inventory."
  },
  {
    question: "What does the 'in' keyword do when used with lists?",
    options: [
      "Adds items to the list",
      "Checks if an item exists in the list",
      "Removes items from the list",
      "Counts items in the list"
    ],
    correctAnswer: 1,
    explanation: "The 'in' keyword checks if an item exists in a list. Example: 'apple' in fruits returns True if 'apple' is in the fruits list."
  },
  {
    question: "What does it mean that Python is 'dynamically typed'?",
    options: [
      "You must declare variable types",
      "Variables can change types during runtime",
      "Python only works with one data type",
      "Types are written in comments"
    ],
    correctAnswer: 1,
    explanation: "Dynamically typed means variables can change types during runtime. A variable can start as an integer and later become a string."
  },
  {
    question: "What's the main advantage of using functions in Python?",
    options: [
      "They make programs run faster",
      "They allow code reuse and organization",
      "They use less memory",
      "They prevent errors"
    ],
    correctAnswer: 1,
    explanation: "Functions promote code reuse - write once, use many times. They also help organize code into logical chunks and make debugging easier."
  },
  {
    question: "In Python, what does break do in a loop?",
    options: [
      "Pauses the loop temporarily",
      "Skips to the next iteration",
      "Exits the loop completely",
      "Restarts the loop from the beginning"
    ],
    correctAnswer: 2,
    explanation: "'break' immediately exits the loop completely. The program continues with the code after the loop."
  }
];

const PythonLesson = () => {
  const [currentModule, setCurrentModule] = useState(0);
  const [moduleProgress, setModuleProgress] = useState<number[]>([0, 0, 0, 0, 0, 0]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const modules = [
    {
      title: "Module 0: Environment Setup",
      icon: Youtube,
      duration: "15 mins",
      color: "text-red-500"
    },
    {
      title: "Module 1: Python Fundamentals",
      icon: BookOpen,
      duration: "25 mins",
      color: "text-blue-500"
    },
    {
      title: "Module 2: Control Flow & Logic",
      icon: Cpu,
      duration: "30 mins",
      color: "text-purple-500"
    },
    {
      title: "Module 3: Functions & Modules",
      icon: Code2,
      duration: "25 mins",
      color: "text-green-500"
    },
    {
      title: "Module 4: Data Structures & OOP",
      icon: List,
      duration: "30 mins",
      color: "text-orange-500"
    },
    {
      title: "Module 5: Text Adventure Game",
      icon: Gamepad2,
      duration: "25 mins",
      color: "text-pink-500"
    }
  ];

  const updateModuleProgress = (module: number, progress: number) => {
    const newProgress = [...moduleProgress];
    newProgress[module] = Math.min(100, progress);
    setModuleProgress(newProgress);
  };

  const handleQuizComplete = (correct: boolean) => {
    if (correct) {
      setCorrectAnswers(prev => prev + 1);
    }

    if (quizIndex < pythonQuiz.length - 1) {
      setQuizIndex(prev => prev + 1);
    } else {
      // Quiz finished
      const score = Math.round(((correctAnswers + (correct ? 1 : 0)) / pythonQuiz.length) * 100);
      setShowQuiz(false);
      updateModuleProgress(5, 100);

      setTimeout(() => {
        alert(`🎉 Quiz Complete!\n\nYour Score: ${score}%\n${score >= 70 ? 'Excellent work! You\'ve mastered Python programming!' : 'Good effort! Review the lessons and try again to improve your score.'}`);
      }, 500);

      // Reset for next time
      setQuizIndex(0);
      setCorrectAnswers(0);
    }
  };

  const totalProgress = moduleProgress.reduce((a, b) => a + b, 0) / modules.length;

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Python Programming Adventure
        </h1>
        <p className="text-xl text-muted-foreground">
          Learn Python - The friendly programming language that's perfect for beginners!
        </p>

        <div className="flex items-center justify-center gap-4 mt-4">
          <span className="text-sm font-medium">Overall Progress:</span>
          <Progress value={totalProgress} className="w-64" />
          <span className="text-sm font-bold">{Math.round(totalProgress)}%</span>
        </div>
      </div>

      {/* Module Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {modules.map((module, index) => {
          const Icon = module.icon;
          const isActive = currentModule === index;
          const isCompleted = moduleProgress[index] === 100;

          return (
            <Button
              key={index}
              variant={isActive ? "default" : isCompleted ? "secondary" : "outline"}
              className="h-auto py-4 px-3 flex flex-col gap-2 relative"
              onClick={() => setCurrentModule(index)}
            >
              {isCompleted && (
                <CheckCircle className="absolute top-1 right-1 w-4 h-4 text-green-500" />
              )}
              <Icon className={`w-8 h-8 ${module.color}`} />
              <span className="text-xs font-medium">{module.title.split(':')[0]}</span>
              <span className="text-xs text-muted-foreground">{module.duration}</span>
              <Progress value={moduleProgress[index]} className="w-full h-1" />
            </Button>
          );
        })}
      </div>

      {/* Module 0: Environment Setup */}
      {currentModule === 0 && (
        <div className="space-y-6 animate-bounce-in">
          <Card className="shadow-fun">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Youtube className="w-8 h-8 text-red-500" />
                Module 0: Setting Up Your Python Environment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <p className="text-lg mb-4">
                  Let's get Python ready on your computer so you can start coding!
                </p>
              </div>

              <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/D2cwvpJSBX4"
                  title="Python Setup in VS Code"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  Setup Checklist
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-2xl">1️⃣</span>
                    <div>
                      <strong>Install VS Code</strong>
                      <p className="text-sm text-muted-foreground">Free code editor from Microsoft</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-2xl">2️⃣</span>
                    <div>
                      <strong>Install Python Extension</strong>
                      <p className="text-sm text-muted-foreground">Search "Python" in VS Code extensions</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-2xl">3️⃣</span>
                    <div>
                      <strong>Install Python 3.x</strong>
                      <p className="text-sm text-muted-foreground">Download from python.org</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-2xl">4️⃣</span>
                    <div>
                      <strong>Test Your Setup</strong>
                      <p className="text-sm text-muted-foreground">Run: python --version or python3 --version</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-lg">
                <h4 className="font-bold flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-blue-500" />
                  No Installation? No Problem!
                </h4>
                <p className="mb-2">Don't want to install anything? You can code Python in your browser!</p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://replit.com/languages/python3" target="_blank" rel="noopener noreferrer">
                    Try Python on Replit.com →
                  </a>
                </Button>
              </div>

              <div className="text-center">
                <Button
                  variant="fun"
                  size="lg"
                  onClick={() => {
                    updateModuleProgress(0, 100);
                    setCurrentModule(1);
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                  Let's Start Coding Python!
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Module 1: Python Fundamentals */}
      {currentModule === 1 && (
        <div className="space-y-6 animate-bounce-in">
          <Card className="shadow-fun">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-blue-500" />
                Module 1: Python Fundamentals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Section 1: Variables */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-500" />
                  Part 1: Variables - Python Makes It Easy!
                </h3>

                <div className="bg-muted p-4 rounded-lg">
                  <p className="mb-2">
                    <strong>Python is dynamically typed</strong> - you don't need to declare variable types! 🎉
                  </p>
                  <p>
                    Just give your variable a name and assign a value. Python figures out the type automatically!
                  </p>
                </div>

                <CodeEditor
                  title="Your First Python Variables"
                  initialCode={`# Welcome to Python! This is a comment - Python ignores it
# Variables are super easy in Python - no type declarations needed!

name = "Alex"           # String (text) - use quotes
age = 16                # Integer (whole number)
height = 5.9            # Float (decimal number)
is_student = True       # Boolean (True/False - capital letters!)

# Python is dynamically typed - variables can change type!
x = 5                   # x is an integer
print(f"x as number: {x}")
x = "hello"             # now x is a string - totally fine!
print(f"x as text: {x}")

# Let's print our variables using f-strings (formatted strings)
print(f"Name: {name}")
print(f"Age: {age}")
print(f"Height: {height}")
print(f"Is a student: {is_student}")

# You can also use regular string concatenation
print("Hello, " + name + "!")

# Math with variables
next_year = age + 1
print(f"Next year you'll be {next_year}")
`}
                  language="python"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="border-blue-200 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="text-lg">Python vs C# Variables</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <strong>Python:</strong>
                          <code className="block bg-white p-1 mt-1 rounded">name = "Alex"</code>
                        </div>
                        <div>
                          <strong>C#:</strong>
                          <code className="block bg-white p-1 mt-1 rounded">string name = "Alex";</code>
                        </div>
                      </div>
                      <p className="text-green-600 font-bold">✅ Python is simpler - no type needed!</p>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200 bg-green-50">
                    <CardHeader>
                      <CardTitle className="text-lg">Python Naming Rules</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <div>✅ snake_case: <code>player_score</code></div>
                      <div>✅ Start with letter: <code>score</code></div>
                      <div>❌ No spaces: <code>player score</code></div>
                      <div>❌ No start with number: <code>2player</code></div>
                      <div>❌ No hyphens: <code>player-score</code></div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Section 2: Input/Output */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-purple-500" />
                  Part 2: Talking with Your Program
                </h3>

                <CodeEditor
                  title="Interactive Python Program"
                  initialCode={`# Output - showing information to the user
print("Welcome to Python Programming!")
print("What's your name?")

# Input - getting information from the user
name = input("Enter your name: ")  # input() ALWAYS returns a string!

# Using f-strings - the modern way to format text
print(f"Hello, {name}! Nice to meet you!")

# Getting numbers from user
print("How old are you?")
age_text = input("Enter your age: ")      # This is still a string!
age = int(age_text)                       # Convert string to integer

# Now we can do math with age
print(f"Wow, {age} is a great age!")
print(f"In 10 years, you'll be {age + 10}")

# Getting decimal numbers
height_text = input("How tall are you in feet? ")
height = float(height_text)               # Convert to decimal number
print(f"You are {height} feet tall!")

# One-liner input conversion (advanced)
favorite_number = int(input("What's your favorite number? "))
print(f"Your number times 2 is {favorite_number * 2}")

# Multiple ways to format strings
print("Traditional way: Hello, " + name)
print("f-string way: Hello, {}".format(name))
print(f"Modern f-string: Hello, {name}!")  # Most popular!`}
                  language="python"
                />

                <div className="bg-yellow-50 border-2 border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-bold flex items-center gap-2 mb-2">
                    <PlayCircle className="w-5 h-5" />
                    🐍 Python Challenge!
                  </h4>
                  <p>Create a program that:</p>
                  <ol className="list-decimal list-inside space-y-1 mt-2">
                    <li>Asks for the user's favorite food</li>
                    <li>Asks how many times they eat it per week</li>
                    <li>Calculates how many times per year</li>
                    <li>Prints a fun message with the result</li>
                  </ol>
                  <p className="mt-2 text-sm">Hint: There are 52 weeks in a year!</p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <Button
                  variant="fun"
                  size="lg"
                  onClick={() => {
                    updateModuleProgress(1, 100);
                    setCurrentModule(2);
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                  Master Control Flow & Logic
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Module 2: Control Flow and Logic */}
      {currentModule === 2 && (
        <div className="space-y-6 animate-bounce-in">
          <Card className="shadow-fun">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cpu className="w-6 h-6 text-purple-500" />
                Module 2: Control Flow and Logic
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Section 1: If Statements */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Part 1: If Statements - The Power of Decision Making</h3>

                <div className="bg-muted p-4 rounded-lg">
                  <p className="mb-2">
                    <strong>Important:</strong> Python uses indentation (spaces) instead of curly braces {}!
                  </p>
                  <p>
                    This makes Python code look clean and forces good formatting habits. Use 4 spaces for each level.
                  </p>
                </div>

                <CodeEditor
                  title="Python If Statements - Mind the Indentation!"
                  initialCode={`# Simple if statement - notice the colon and indentation!
age = 16

if age >= 13:                           # Colon starts the if block
    print("You're a teenager!")         # 4 spaces indentation
    print("Welcome to the teen years!") # Still part of if block

# if-elif-else chain (elif = else if)
score = 85

if score >= 90:
    print("Grade: A")
    print("Outstanding work!")
elif score >= 80:                       # elif, not "else if"
    print("Grade: B")
    print("Great job!")
elif score >= 70:
    print("Grade: C")
    print("Good work!")
else:
    print("Keep practicing!")

# Multiple conditions with and/or
weather = "sunny"
temperature = 25

if weather == "sunny" and temperature > 20:    # and = both must be true
    print("Perfect beach day! 🏖️")

if weather == "rainy" or temperature < 10:     # or = at least one true
    print("Stay inside and code! 💻")

# The not operator
is_weekend = True
if not is_weekend:                      # not = opposite
    print("Time for school!")
else:
    print("Weekend fun time!")

# Checking multiple values
day = "Saturday"
if day in ["Saturday", "Sunday"]:       # in = check if value exists in list
    print("It's the weekend!")

# Nested if statements (if inside if)
if age >= 13:
    if age <= 19:
        print("You're a teenager")
        if age >= 16:
            print("You can drive in many places!")
    else:
        print("You're an adult")
`}
                  language="python"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="border-purple-200 bg-purple-50">
                    <CardHeader>
                      <CardTitle className="text-lg">Comparison Operators</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-1 text-sm">
                      <div><code>==</code> → Equal to</div>
                      <div><code>!=</code> → Not equal to</div>
                      <div><code>&gt;</code> → Greater than</div>
                      <div><code>&lt;</code> → Less than</div>
                      <div><code>&gt;=</code> → Greater or equal</div>
                      <div><code>&lt;=</code> → Less or equal</div>
                      <div><code>in</code> → Check if item is in list</div>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="text-lg">⚠️ Python Indentation Rules</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-1 text-sm">
                      <div>✅ Use 4 spaces (recommended)</div>
                      <div>✅ Be consistent throughout your code</div>
                      <div>❌ Don't mix spaces and tabs</div>
                      <div>❌ Don't forget the colon :</div>
                      <div className="mt-2 font-bold text-red-600">IndentationError = Most common Python mistake!</div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Section 2: Loops */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Part 2: Loops - Python Makes Them Beautiful</h3>

                <CodeEditor
                  title="For Loops - Pythonic and Powerful"
                  initialCode={`# for loop with range() - most common pattern
for i in range(5):                      # range(5) = 0, 1, 2, 3, 4
    print(f"Count: {i}")

# range with start and stop
for i in range(1, 6):                   # 1, 2, 3, 4, 5 (stop is exclusive)
    print(f"Number: {i}")

# range with step (skip counting)
for i in range(0, 21, 2):               # 0, 2, 4, 6, 8... up to 20
    print(f"Even number: {i}")

# Countdown with range
for i in range(10, 0, -1):              # 10, 9, 8, 7... down to 1
    print(f"T-minus {i}...")
print("BLAST OFF! 🚀")

# Loop through a list directly (very Pythonic!)
fruits = ["apple", "banana", "orange", "grape"]
for fruit in fruits:                    # No need for index numbers!
    print(f"I love {fruit}s!")

# Loop through a string (strings are sequences in Python)
name = "Python"
for letter in name:
    print(f"Letter: {letter}")

# Loop with index if you need it (enumerate)
colors = ["red", "green", "blue"]
for index, color in enumerate(colors):  # enumerate gives both index and value
    print(f"Color {index + 1}: {color}")

# Creating patterns with nested loops
for row in range(5):
    for col in range(row + 1):
        print("*", end="")              # end="" keeps on same line
    print()                             # Move to next line
# Output:
# *
# **
# ***
# ****
# *****

# List comprehension (advanced but very Pythonic)
squares = [x**2 for x in range(1, 6)]  # Create list of squares: [1, 4, 9, 16, 25]
print(f"Squares: {squares}")
`}
                  language="python"
                />

                <CodeEditor
                  title="While Loops - When You Don't Know How Many Times"
                  initialCode={`# Basic while loop
health = 100
while health > 0:
    print(f"Player health: {health}")
    health -= 20                        # Same as health = health - 20
    if health <= 0:
        print("Game Over!")

# While loop for user input
password = ""
attempts = 0

while password != "python123" and attempts < 3:
    password = input("Enter password: ")
    attempts += 1                       # Same as attempts = attempts + 1

    if password == "python123":
        print("Access granted! 🔓")
    elif attempts < 3:
        print(f"Wrong password. {3 - attempts} attempts left.")
    else:
        print("Too many attempts. Account locked! 🔒")

# Infinite loop with break statement
while True:                             # This would run forever...
    user_input = input("Type 'quit' to exit: ")
    if user_input.lower() == "quit":    # .lower() converts to lowercase
        print("Goodbye!")
        break                           # Exit the loop immediately
    else:
        print(f"You typed: {user_input}")

# Continue statement - skip to next iteration
for i in range(10):
    if i % 2 == 0:                      # % = modulo (remainder)
        continue                        # Skip even numbers
    print(f"Odd number: {i}")           # Only prints 1, 3, 5, 7, 9

# Common Python mistake to avoid:
# while True:
#     print("This runs forever!")     # Don't forget break or condition!
`}
                  language="python"
                />

                <div className="bg-yellow-50 border-2 border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">🎮 Python Challenge: Number Guessing Game</h4>
                  <p>Create a program that:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Picks a random number between 1 and 10</li>
                    <li>Asks the user to guess until they get it right</li>
                    <li>Gives hints: "too high" or "too low"</li>
                    <li>Counts the number of guesses</li>
                  </ul>
                  <p className="mt-2 text-sm">Hint: Use <code>import random</code> and <code>random.randint(1, 10)</code></p>
                </div>
              </div>

              <div className="text-center">
                <Button
                  variant="fun"
                  size="lg"
                  onClick={() => {
                    updateModuleProgress(2, 100);
                    setCurrentModule(3);
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                  Learn Functions & Modules
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Module 3: Functions and Modules */}
      {currentModule === 3 && (
        <div className="space-y-6 animate-bounce-in">
          <Card className="shadow-fun">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="w-6 h-6 text-green-500" />
                Module 3: Functions and Modules - Reusable Python Magic
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Python Functions - Simple and Powerful</h3>

                <div className="bg-muted p-4 rounded-lg">
                  <p className="mb-2">
                    Python functions use the <code>def</code> keyword and are super flexible!
                  </p>
                  <p>
                    No need to declare return types - Python figures it out automatically.
                  </p>
                </div>

                <CodeEditor
                  title="Creating Python Functions"
                  initialCode={`# Basic function with no parameters
def say_hello():
    """This is a docstring - it documents what the function does"""
    print("Hello from Python! 🐍")
    print("Functions are awesome!")

# Function with parameters
def greet_person(name):
    """Greets a person by name"""
    print(f"Hello, {name}!")
    print("Welcome to Python programming!")

# Function that returns a value
def add_numbers(a, b):
    """Adds two numbers and returns the result"""
    result = a + b
    return result                       # Return sends the value back

# Function with default parameters
def create_player(name, level=1, health=100):
    """Creates a player with optional level and health"""
    player = {
        "name": name,
        "level": level,
        "health": health,
        "experience": 0
    }
    return player

# Function with multiple return values (Python specialty!)
def get_player_stats():
    """Returns multiple values as a tuple"""
    name = "Hero"
    health = 100
    level = 5
    return name, health, level          # Returns a tuple

# Using our functions
say_hello()                             # Call simple function

greet_person("Alex")                    # Call with argument
greet_person("Sarah")

# Use return value
sum_result = add_numbers(10, 5)
print(f"10 + 5 = {sum_result}")

# Direct use without storing
print(f"20 + 15 = {add_numbers(20, 15)}")

# Default parameters
player1 = create_player("Warrior")                        # Uses defaults
player2 = create_player("Mage", level=3)                 # Override level
player3 = create_player("Rogue", level=2, health=80)     # Override both

print(f"Player 1: {player1}")
print(f"Player 2: {player2}")

# Multiple return values
name, hp, lvl = get_player_stats()     # Unpack the tuple
print(f"Player: {name}, HP: {hp}, Level: {lvl}")

# You can also get them as a tuple
stats = get_player_stats()
print(f"All stats: {stats}")
`}
                  language="python"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="border-green-200 bg-green-50">
                    <CardHeader>
                      <CardTitle className="text-lg">Python vs C# Functions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <div className="grid grid-cols-1 gap-2">
                        <div>
                          <strong>Python:</strong>
                          <code className="block bg-white p-1 mt-1 rounded text-xs">def add(a, b): return a + b</code>
                        </div>
                        <div>
                          <strong>C#:</strong>
                          <code className="block bg-white p-1 mt-1 rounded text-xs">static int Add(int a, int b) {`{`} return a + b; {`}`}</code>
                        </div>
                      </div>
                      <p className="text-green-600 font-bold">✅ Python is much shorter!</p>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="text-lg">Python Function Features</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <div>✅ No type declarations needed</div>
                      <div>✅ Default parameter values</div>
                      <div>✅ Multiple return values</div>
                      <div>✅ Docstrings for documentation</div>
                      <div>✅ Keyword arguments</div>
                      <div>✅ Variable number of arguments</div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Advanced Function Features</h3>

                <CodeEditor
                  title="Advanced Python Function Techniques"
                  initialCode={`# Function with keyword arguments
def create_character(name, **kwargs):
    """Create a character with flexible attributes"""
    character = {"name": name}
    character.update(kwargs)            # Add all keyword arguments
    return character

# Using keyword arguments
hero = create_character("Hero", class_type="Warrior", level=5, strength=20)
mage = create_character("Mystic", class_type="Mage", intelligence=25, mana=100)

print(f"Hero: {hero}")
print(f"Mage: {mage}")

# Function with variable number of arguments
def calculate_average(*numbers):
    """Calculate average of any number of values"""
    if len(numbers) == 0:
        return 0
    return sum(numbers) / len(numbers)

# Can call with any number of arguments
avg1 = calculate_average(85, 90, 78)
avg2 = calculate_average(100, 95, 88, 92, 87)
avg3 = calculate_average(75)

print(f"Average 1: {avg1}")
print(f"Average 2: {avg2}")
print(f"Average 3: {avg3}")

# Lambda functions (short anonymous functions)
square = lambda x: x ** 2              # Short way to write functions
double = lambda x: x * 2

print(f"5 squared: {square(5)}")
print(f"5 doubled: {double(5)}")

# Using lambda with built-in functions
numbers = [1, 2, 3, 4, 5]
squared_numbers = list(map(square, numbers))    # Apply function to each item
print(f"Squared: {squared_numbers}")

# Function that returns another function (advanced!)
def make_multiplier(factor):
    """Returns a function that multiplies by factor"""
    def multiplier(x):
        return x * factor
    return multiplier

times_three = make_multiplier(3)
times_five = make_multiplier(5)

print(f"7 times 3: {times_three(7)}")
print(f"4 times 5: {times_five(4)}")

# Recursive function (function that calls itself)
def factorial(n):
    """Calculate factorial using recursion"""
    if n <= 1:
        return 1
    else:
        return n * factorial(n - 1)

print(f"5! = {factorial(5)}")           # 5! = 5 × 4 × 3 × 2 × 1 = 120
`}
                  language="python"
                />
              </div>

              <div className="text-center">
                <Button
                  variant="fun"
                  size="lg"
                  onClick={() => {
                    updateModuleProgress(3, 100);
                    setCurrentModule(4);
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                  Explore Data Structures & OOP
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Module 4: Data Structures and OOP */}
      {currentModule === 4 && (
        <div className="space-y-6 animate-bounce-in">
          <Card className="shadow-fun">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <List className="w-6 h-6 text-orange-500" />
                Module 4: Data Structures and Object-Oriented Programming
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Python Data Structures - Built for Convenience</h3>

                <CodeEditor
                  title="Lists - Python's Dynamic Arrays"
                  initialCode={`# Creating lists - use square brackets []
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]
mixed = ["hello", 42, 3.14, True]      # Lists can hold different types!

print(f"Fruits: {fruits}")
print(f"Numbers: {numbers}")
print(f"Mixed: {mixed}")

# Accessing list items (zero-indexed)
print(f"First fruit: {fruits[0]}")     # Index 0 = first item
print(f"Last fruit: {fruits[-1]}")     # Negative index = from end!
print(f"Second fruit: {fruits[1]}")

# Adding items to lists
fruits.append("grape")                  # Add to end
fruits.insert(0, "strawberry")         # Insert at position 0
print(f"After adding: {fruits}")

# Removing items
fruits.remove("banana")                 # Remove by value
last_fruit = fruits.pop()               # Remove and return last item
print(f"Removed {last_fruit}, now: {fruits}")

# List slicing (getting parts of a list)
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
first_three = numbers[0:3]              # Items 0, 1, 2 (3 is excluded)
middle = numbers[3:7]                   # Items 3, 4, 5, 6
last_three = numbers[-3:]               # Last 3 items
every_second = numbers[::2]             # Every 2nd item

print(f"First three: {first_three}")
print(f"Middle: {middle}")
print(f"Last three: {last_three}")
print(f"Every second: {every_second}")

# List methods and functions
print(f"Length: {len(numbers)}")        # Number of items
print(f"Max: {max(numbers)}")           # Largest item
print(f"Min: {min(numbers)}")           # Smallest item
print(f"Sum: {sum(numbers)}")           # Add all numbers

# List comprehensions (Pythonic way to create lists)
squares = [x**2 for x in range(1, 6)]  # [1, 4, 9, 16, 25]
evens = [x for x in range(20) if x % 2 == 0]  # Even numbers 0-18

print(f"Squares: {squares}")
print(f"Evens: {evens}")
`}
                  language="python"
                />

                <CodeEditor
                  title="Dictionaries - Python's Key-Value Store"
                  initialCode={`# Creating dictionaries - use curly braces {}
player = {
    "name": "Alex",
    "level": 5,
    "health": 100,
    "inventory": ["sword", "potion", "shield"]
}

# Another way to create dictionaries
scores = dict(math=85, english=92, science=78)

print(f"Player: {player}")
print(f"Scores: {scores}")

# Accessing dictionary values
print(f"Player name: {player['name']}")
print(f"Player level: {player['level']}")
print(f"Math score: {scores['math']}")

# Safe access with .get() method
print(f"Player mana: {player.get('mana', 0)}")  # Returns 0 if key doesn't exist

# Adding/updating values
player["experience"] = 1500             # Add new key-value pair
player["level"] = 6                     # Update existing value
player["inventory"].append("armor")     # Modify the list inside

print(f"Updated player: {player}")

# Dictionary methods
print(f"Keys: {list(player.keys())}")           # All keys
print(f"Values: {list(player.values())}")       # All values
print(f"Items: {list(player.items())}")         # All key-value pairs

# Looping through dictionaries
print("\\nPlayer stats:")
for key, value in player.items():
    print(f"{key}: {value}")

print("\\nSubject scores:")
for subject in scores:                   # Loops through keys by default
    print(f"{subject}: {scores[subject]}")

# Dictionary comprehension
squared_dict = {x: x**2 for x in range(1, 6)}  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
print(f"Squared dictionary: {squared_dict}")

# Nested dictionaries (dictionary inside dictionary)
game_data = {
    "player1": {"name": "Alice", "score": 1200},
    "player2": {"name": "Bob", "score": 980},
    "player3": {"name": "Charlie", "score": 1450}
}

print(f"Player 1 name: {game_data['player1']['name']}")
print(f"Player 3 score: {game_data['player3']['score']}")
`}
                  language="python"
                />

                <CodeEditor
                  title="Python Classes - Simple Object-Oriented Programming"
                  initialCode={`# Basic class definition
class Player:
    def __init__(self, name):           # Constructor method (__init__)
        self.name = name                # self = reference to this instance
        self.health = 100
        self.level = 1
        self.experience = 0

    def attack(self, enemy):            # All methods need 'self' parameter
        damage = 10 * self.level
        enemy.take_damage(damage)
        print(f"{self.name} attacks {enemy.name} for {damage} damage!")

    def take_damage(self, amount):
        self.health -= amount
        print(f"{self.name} takes {amount} damage! Health: {self.health}")
        if self.health <= 0:
            print(f"{self.name} has been defeated!")

    def heal(self, amount):
        self.health = min(self.health + amount, 100)  # Cap at 100
        print(f"{self.name} heals for {amount}! Health: {self.health}")

    def gain_experience(self, xp):
        self.experience += xp
        print(f"{self.name} gains {xp} XP!")

        # Level up every 100 XP
        if self.experience >= 100:
            self.level += 1
            self.experience = 0
            self.health = 100           # Full heal on level up
            print(f"🎉 {self.name} leveled up! Now level {self.level}!")

    def __str__(self):                  # Special method for string representation
        return f"{self.name} (Level {self.level}, HP: {self.health})"

# Creating objects (instances) from the class
hero = Player("Knight")
villain = Player("Dark Wizard")

# Using object methods
print(f"Hero: {hero}")                  # Uses __str__ method
print(f"Villain: {villain}")

hero.attack(villain)
villain.take_damage(15)
hero.gain_experience(50)
hero.heal(20)

# Inheritance - creating a specialized class
class Mage(Player):                     # Mage inherits from Player
    def __init__(self, name):
        super().__init__(name)          # Call parent constructor
        self.mana = 50
        self.spells = ["fireball", "heal"]

    def cast_spell(self, spell, target=None):
        if spell in self.spells and self.mana >= 10:
            self.mana -= 10
            if spell == "fireball" and target:
                damage = 20 * self.level
                target.take_damage(damage)
                print(f"{self.name} casts Fireball on {target.name}! 🔥")
            elif spell == "heal":
                self.heal(30)
                print(f"{self.name} casts Heal! ✨")
        else:
            print(f"{self.name} cannot cast {spell}!")

    def __str__(self):                  # Override parent method
        return f"{self.name} the Mage (Level {self.level}, HP: {self.health}, Mana: {self.mana})"

# Using the inherited class
wizard = Mage("Merlin")
print(f"Wizard: {wizard}")

wizard.cast_spell("fireball", villain)
wizard.cast_spell("heal")
wizard.gain_experience(25)              # Inherited method still works!
`}
                  language="python"
                />
              </div>

              <div className="text-center">
                <Button
                  variant="fun"
                  size="lg"
                  onClick={() => {
                    updateModuleProgress(4, 100);
                    setCurrentModule(5);
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                  Build Your Text Adventure Game!
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Module 5: Final Project */}
      {currentModule === 5 && (
        <div className="space-y-6 animate-bounce-in">
          <Card className="shadow-fun">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gamepad2 className="w-6 h-6 text-pink-500" />
                Module 5: Final Project - Text Adventure Game
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-2">🎮 Build Your Python Adventure Game! 🎮</h2>
                <p>Time to combine everything you've learned into an epic text adventure!</p>
              </div>

              <CodeEditor
                title="Complete Python Text Adventure Game"
                initialCode={`import random

# Game classes
class Player:
    def __init__(self, name):
        self.name = name
        self.health = 100
        self.max_health = 100
        self.attack_power = 10
        self.inventory = ["sword", "health potion", "health potion"]
        self.location = "village"

    def attack(self, enemy):
        damage = random.randint(self.attack_power - 2, self.attack_power + 3)
        enemy.health -= damage
        print(f"⚔️ {self.name} attacks {enemy.name} for {damage} damage!")
        return damage

    def use_potion(self):
        if "health potion" in self.inventory:
            self.inventory.remove("health potion")
            heal_amount = 30
            self.health = min(self.health + heal_amount, self.max_health)
            print(f"🧪 {self.name} drinks a health potion and heals {heal_amount} HP!")
            print(f"❤️ Health: {self.health}/{self.max_health}")
            return True
        else:
            print("❌ No health potions left!")
            return False

    def show_inventory(self):
        print(f"\\n🎒 {self.name}'s Inventory:")
        if self.inventory:
            for i, item in enumerate(self.inventory, 1):
                print(f"  {i}. {item}")
        else:
            print("  Empty")

    def is_alive(self):
        return self.health > 0

class Enemy:
    def __init__(self, name, health, attack_power, description):
        self.name = name
        self.health = health
        self.max_health = health
        self.attack_power = attack_power
        self.description = description

    def attack(self, player):
        damage = random.randint(self.attack_power - 1, self.attack_power + 2)
        player.health -= damage
        print(f"👹 {self.name} attacks {player.name} for {damage} damage!")
        return damage

    def is_alive(self):
        return self.health > 0

# Game locations and data
locations = {
    "village": {
        "description": "🏘️ A peaceful village with friendly NPCs and shops.",
        "exits": ["forest", "mountain"],
        "items": ["map", "bread"],
        "enemies": []
    },
    "forest": {
        "description": "🌲 A dark forest filled with mysterious sounds and hidden dangers.",
        "exits": ["village", "cave"],
        "items": ["health potion"],
        "enemies": ["goblin", "wolf"]
    },
    "mountain": {
        "description": "⛰️ A treacherous mountain path with steep cliffs and strong winds.",
        "exits": ["village", "dragon_lair"],
        "items": ["magic sword"],
        "enemies": ["troll"]
    },
    "cave": {
        "description": "🕳️ A damp cave with glowing crystals and echoing sounds.",
        "exits": ["forest"],
        "items": ["treasure", "health potion"],
        "enemies": ["bat", "spider"]
    },
    "dragon_lair": {
        "description": "🐉 The legendary dragon's lair filled with treasure and danger!",
        "exits": ["mountain"],
        "items": ["legendary treasure"],
        "enemies": ["dragon"]
    }
}

# Enemy templates
enemy_types = {
    "goblin": Enemy("Goblin", 30, 8, "A small but fierce green creature"),
    "wolf": Enemy("Wolf", 25, 10, "A hungry wolf with sharp teeth"),
    "troll": Enemy("Mountain Troll", 50, 15, "A massive creature blocking the path"),
    "bat": Enemy("Giant Bat", 20, 6, "A vampire bat with glowing red eyes"),
    "spider": Enemy("Cave Spider", 35, 12, "A venomous spider with thick web"),
    "dragon": Enemy("Ancient Dragon", 100, 25, "The most fearsome creature in the land!")
}

# Main game class
class TextAdventure:
    def __init__(self):
        self.player = None
        self.game_over = False
        self.treasures_found = 0

    def start_game(self):
        print("=" * 50)
        print("🎮 WELCOME TO PYTHON ADVENTURE QUEST! 🎮")
        print("=" * 50)
        print("\\nYou are about to embark on an epic adventure!")
        print("Fight monsters, collect treasures, and become a legend!\\n")

        # Get player name
        player_name = input("What is your hero's name? ").strip()
        if not player_name:
            player_name = "Hero"

        self.player = Player(player_name)
        print(f"\\nWelcome, {self.player.name}! Your adventure begins...")

        # Main game loop
        while not self.game_over and self.player.is_alive():
            self.show_location()
            self.show_player_status()
            self.handle_player_action()

        self.end_game()

    def show_location(self):
        location = locations[self.player.location]
        print(f"\\n📍 Current Location: {self.player.location.title()}")
        print(f"   {location['description']}")

        # Show exits
        exits = location['exits']
        print(f"🚪 Exits: {', '.join(exits)}")

        # Show items
        items = location['items']
        if items:
            print(f"✨ Items here: {', '.join(items)}")

    def show_player_status(self):
        print(f"\\n👤 {self.player.name}")
        print(f"❤️ Health: {self.player.health}/{self.player.max_health}")
        print(f"⚔️ Attack Power: {self.player.attack_power}")
        print(f"🏆 Treasures Found: {self.treasures_found}")

    def handle_player_action(self):
        print("\\n" + "="*30)
        print("What would you like to do?")
        print("1. 🚶 Move to another location")
        print("2. ⚔️ Look for enemies to fight")
        print("3. 🔍 Search for items")
        print("4. 🎒 Check inventory")
        print("5. 🧪 Use health potion")
        print("6. ❌ Quit game")

        choice = input("\\nEnter your choice (1-6): ").strip()

        if choice == "1":
            self.move_player()
        elif choice == "2":
            self.find_enemy()
        elif choice == "3":
            self.search_items()
        elif choice == "4":
            self.player.show_inventory()
        elif choice == "5":
            self.player.use_potion()
        elif choice == "6":
            print("\\nThanks for playing! 👋")
            self.game_over = True
        else:
            print("❌ Invalid choice! Please try again.")

    def move_player(self):
        location = locations[self.player.location]
        exits = location['exits']

        print(f"\\n🚪 Available exits: {', '.join(exits)}")
        destination = input("Where would you like to go? ").strip().lower()

        if destination in exits:
            self.player.location = destination
            print(f"\\n🚶 You travel to the {destination}...")

            # Random encounter chance
            if random.random() < 0.3:  # 30% chance
                print("\\n⚠️ You encounter something on the way!")
                self.find_enemy()
        else:
            print("❌ You can't go there from here!")

    def find_enemy(self):
        location = locations[self.player.location]
        possible_enemies = location['enemies']

        if not possible_enemies:
            print("\\n🕊️ This area seems peaceful. No enemies around.")
            return

        # Spawn random enemy
        enemy_name = random.choice(possible_enemies)
        enemy = Enemy(
            enemy_types[enemy_name].name,
            enemy_types[enemy_name].health,
            enemy_types[enemy_name].attack_power,
            enemy_types[enemy_name].description
        )

        print(f"\\n👹 A {enemy.name} appears!")
        print(f"   {enemy.description}")

        self.battle(enemy)

    def battle(self, enemy):
        print(f"\\n⚔️ BATTLE START! {self.player.name} vs {enemy.name}")

        while self.player.is_alive() and enemy.is_alive():
            print(f"\\n--- Battle Status ---")
            print(f"🦸 {self.player.name}: {self.player.health} HP")
            print(f"👹 {enemy.name}: {enemy.health} HP")

            print("\\nChoose your action:")
            print("1. ⚔️ Attack")
            print("2. 🧪 Use health potion")
            print("3. 🏃 Run away")

            action = input("Action (1-3): ").strip()

            if action == "1":
                # Player attacks
                self.player.attack(enemy)

                # Check if enemy is defeated
                if not enemy.is_alive():
                    print(f"\\n🎉 Victory! You defeated the {enemy.name}!")

                    # Rewards
                    xp_reward = random.randint(10, 25)
                    print(f"💫 You gained {xp_reward} experience!")

                    if random.random() < 0.4:  # 40% chance for item
                        item = random.choice(["health potion", "magic gem", "gold coin"])
                        self.player.inventory.append(item)
                        print(f"🎁 You found a {item}!")

                    return

                # Enemy attacks back
                enemy.attack(self.player)

            elif action == "2":
                if not self.player.use_potion():
                    continue  # If no potion, don't waste turn

                # Enemy still attacks
                enemy.attack(self.player)

            elif action == "3":
                if random.random() < 0.7:  # 70% chance to escape
                    print("\\n🏃 You successfully ran away!")
                    return
                else:
                    print("\\n❌ You couldn't escape!")
                    enemy.attack(self.player)
            else:
                print("❌ Invalid action!")
                continue

            # Check if player is defeated
            if not self.player.is_alive():
                print(f"\\n💀 {self.player.name} has been defeated!")
                return

    def search_items(self):
        location = locations[self.player.location]
        items = location['items'].copy()  # Copy so we can modify it

        if not items:
            print("\\n🔍 You search around but find nothing useful.")
            return

        found_item = random.choice(items)
        self.player.inventory.append(found_item)
        location['items'].remove(found_item)  # Remove from location

        print(f"\\n🎁 You found a {found_item}!")

        # Special item effects
        if found_item == "magic sword":
            self.player.attack_power += 5
            print("⚔️ Your attack power increased by 5!")
        elif "treasure" in found_item:
            self.treasures_found += 1
            print(f"💰 Treasure collected! Total: {self.treasures_found}")

    def end_game(self):
        print("\\n" + "="*50)
        print("🎮 GAME OVER 🎮")
        print("="*50)

        if self.player.is_alive():
            print(f"\\n🎉 Congratulations, {self.player.name}!")
            print(f"📊 Final Stats:")
            print(f"   ❤️ Health: {self.player.health}/{self.player.max_health}")
            print(f"   🏆 Treasures Found: {self.treasures_found}")
            print(f"   🎒 Items Collected: {len(self.player.inventory)}")

            if self.treasures_found >= 3:
                print("\\n👑 You are a true adventurer! Legendary status achieved!")
            elif self.treasures_found >= 1:
                print("\\n⭐ Well done! You found some treasures!")
            else:
                print("\\n🌟 Good effort! Try exploring more next time!")
        else:
            print(f"\\n💀 {self.player.name} fell in battle...")
            print("Better luck next time, brave adventurer!")

        print("\\nThanks for playing Python Adventure Quest! 🐍")

# Start the game
if __name__ == "__main__":
    game = TextAdventure()
    game.start_game()
`}
                language="python"
                readOnly={true}
              />

              <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-4">🎮 Game Features Explained</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-bold text-green-600">Python Features Used:</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Classes and objects (Player, Enemy)</li>
                      <li>Dictionaries for game data</li>
                      <li>Lists for inventory and locations</li>
                      <li>Random module for gameplay variety</li>
                      <li>String formatting with f-strings</li>
                      <li>While loops for game flow</li>
                      <li>If/elif/else for decisions</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-blue-600">Game Mechanics:</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Turn-based combat system</li>
                      <li>Multiple locations to explore</li>
                      <li>Inventory management</li>
                      <li>Random encounters and items</li>
                      <li>Health potions and healing</li>
                      <li>Treasure hunting</li>
                      <li>Character progression</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">🚀 Challenge Extensions</h3>

                <div className="bg-yellow-50 border-2 border-yellow-200 p-4 rounded-lg">
                  <p className="font-bold mb-2">Make the game your own! Try adding:</p>
                  <ul className="list-decimal list-inside space-y-2">
                    <li><strong>Character classes:</strong> Warrior, Mage, Archer with different abilities</li>
                    <li><strong>Magic system:</strong> Spells that cost mana</li>
                    <li><strong>More locations:</strong> Castle, swamp, desert</li>
                    <li><strong>Quests:</strong> NPCs that give you missions</li>
                    <li><strong>Equipment system:</strong> Different weapons and armor</li>
                    <li><strong>Save/Load game:</strong> Use file I/O to save progress</li>
                    <li><strong>ASCII art:</strong> Make it look more visual</li>
                    <li><strong>Sound effects:</strong> Add text-based sound descriptions</li>
                  </ul>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-lg">
                  <Trophy className="w-12 h-12 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold mb-2">🎉 Congratulations! 🎉</h3>
                  <p className="text-lg">
                    You've completed the Python Programming course and built your own adventure game!
                  </p>
                  <p className="mt-2">
                    You now know variables, control flow, functions, data structures, and object-oriented programming in Python!
                  </p>
                </div>

                <Button
                  variant="fun"
                  size="lg"
                  onClick={() => setShowQuiz(true)}
                >
                  <Trophy className="w-5 h-5" />
                  Take the Final Quiz!
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Quiz Section */}
      {showQuiz && (
        <div className="space-y-6 animate-bounce-in">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-primary">🎯 Final Quiz: Test Your Python Knowledge!</h2>
            <p className="text-muted-foreground">
              Question {quizIndex + 1} of {pythonQuiz.length}
            </p>
            <Progress value={((quizIndex + 1) / pythonQuiz.length) * 100} className="w-full max-w-md mx-auto" />
          </div>

          <QuizCard
            quiz={pythonQuiz[quizIndex]}
            onComplete={handleQuizComplete}
            currentIndex={quizIndex}
            totalQuestions={pythonQuiz.length}
          />

          <div className="text-center">
            <Button
              variant="outline"
              onClick={() => {
                setShowQuiz(false);
                setQuizIndex(0);
                setCorrectAnswers(0);
              }}
            >
              Exit Quiz
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PythonLesson;