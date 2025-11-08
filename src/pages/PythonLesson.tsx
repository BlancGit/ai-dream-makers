import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuizCard } from "@/components/QuizCard";
import { CodeEditor } from "@/components/CodeEditor";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  FileText,
  FolderOpen,
  Database,
  Package
} from "lucide-react";

// Week 2 Quiz Questions
const pythonLesson2Quiz = [
  // Functions Questions (7 questions)
  {
    question: "What's the difference between positional and keyword arguments?",
    options: [
      "Positional must be in order; keyword can be in any order",
      "They're exactly the same",
      "Keyword arguments are faster",
      "Positional arguments can only be numbers"
    ],
    correctAnswer: 0,
    explanation: "Positional arguments must match the parameter order, but keyword arguments like greet(name='Alex', age=12) can be in any order!"
  },
  {
    question: "What happens if you call a function with a default parameter without providing that argument?",
    options: [
      "It causes an error",
      "It uses the default value",
      "It uses 0 or empty string",
      "The parameter is skipped"
    ],
    correctAnswer: 1,
    explanation: "Default parameters provide a fallback value. For example, def greet(name='Friend') allows calling greet() without arguments."
  },
  {
    question: "What does this function return: def get_stats(nums): return min(nums), max(nums)?",
    options: [
      "Just the minimum value",
      "Just the maximum value",
      "A tuple with both minimum and maximum",
      "An error"
    ],
    correctAnswer: 2,
    explanation: "Functions can return multiple values as a tuple. You can unpack it like: smallest, largest = get_stats([1,5,3])"
  },
  {
    question: "What is a lambda function best used for?",
    options: [
      "Complex multi-line functions",
      "Simple one-line operations",
      "Functions that don't return anything",
      "Only mathematical calculations"
    ],
    correctAnswer: 1,
    explanation: "Lambda functions are perfect for simple operations like: double = lambda x: x * 2. For complex logic, use regular functions!"
  },
  {
    question: "What's the issue with this code? score = 100; def add(): score = score + 10",
    options: [
      "Nothing, it works fine",
      "Can't modify global variable directly inside function",
      "Score should be a string",
      "The function name is wrong"
    ],
    correctAnswer: 1,
    explanation: "You can't modify a global variable like this. Instead, pass it as a parameter and return the new value!"
  },
  {
    question: "What does this lambda do: lambda student: student[1]?",
    options: [
      "Returns the second element of student",
      "Returns the first element of student",
      "Doubles the student value",
      "Creates an error"
    ],
    correctAnswer: 0,
    explanation: "student[1] accesses index 1 (the second element). Often used for sorting tuples like students.sort(key=lambda s: s[1])"
  },
  {
    question: "Which is a valid function with default parameters?",
    options: [
      "def greet(name='Sam', age): ...",
      "def greet(age, name='Sam'): ...",
      "def greet(name, age='10'): ...",
      "Both B and C are valid"
    ],
    correctAnswer: 3,
    explanation: "Default parameters must come AFTER non-default ones. So greet(age, name='Sam') and greet(name, age='10') both work!"
  },
  // Strings & Lists Questions (7 questions)
  {
    question: "What does 'Hello World'.strip() return?",
    options: [
      "'Hello World' (no change if no leading/trailing spaces)",
      "'HelloWorld' (removes all spaces)",
      "'HELLO WORLD'",
      "An error"
    ],
    correctAnswer: 0,
    explanation: "strip() only removes spaces from the beginning and end, not the middle. '  Hi  '.strip() becomes 'Hi'."
  },
  {
    question: "What does this f-string produce: f'{19.5:.2f}'?",
    options: [
      "'19.5'",
      "'19.50'",
      "'20'",
      "'19'"
    ],
    correctAnswer: 1,
    explanation: ":.2f formats a number to 2 decimal places. Perfect for displaying prices like $19.50!"
  },
  {
    question: "What does [1,2,3,4,5][1:4] return?",
    options: [
      "[1,2,3,4]",
      "[2,3,4]",
      "[1,2,3]",
      "[2,3,4,5]"
    ],
    correctAnswer: 1,
    explanation: "Slicing [1:4] means from index 1 up to (but not including) index 4. So [1,2,3,4,5][1:4] gives [2,3,4]."
  },
  {
    question: "What does 'python'.upper() return?",
    options: [
      "'python'",
      "'Python'",
      "'PYTHON'",
      "'pYtHoN'"
    ],
    correctAnswer: 2,
    explanation: "upper() converts the entire string to uppercase letters. lower() does the opposite!"
  },
  {
    question: "What does this list comprehension create: [x*2 for x in range(5)]?",
    options: [
      "[0,2,4,6,8]",
      "[2,4,6,8,10]",
      "[0,1,2,3,4]",
      "[1,2,3,4,5]"
    ],
    correctAnswer: 0,
    explanation: "It doubles each number from 0 to 4: [0*2, 1*2, 2*2, 3*2, 4*2] = [0,2,4,6,8]"
  },
  {
    question: "What does [1,2,3,4,5][::-1] produce?",
    options: [
      "[1,2,3,4,5]",
      "[5,4,3,2,1]",
      "[2,3,4]",
      "An error"
    ],
    correctAnswer: 1,
    explanation: "[::-1] is a clever trick to reverse a list! The -1 step goes backwards through the entire list."
  },
  {
    question: "How do you split 'cat,dog,bird' into a list?",
    options: [
      "'cat,dog,bird'.split()",
      "'cat,dog,bird'.split(',')",
      "'cat,dog,bird'.divide(',')",
      "'cat,dog,bird'[',']"
    ],
    correctAnswer: 1,
    explanation: "split(',') splits the string at each comma: ['cat', 'dog', 'bird']. split() with no argument splits on spaces!"
  },
  // File I/O Questions (6 questions)
  {
    question: "What does 'w' mode do when opening a file?",
    options: [
      "Writes to file, keeps existing content",
      "Writes to file, erases existing content",
      "Only reads the file",
      "Prevents any changes"
    ],
    correctAnswer: 1,
    explanation: "Be careful! 'w' mode erases everything in the file first. Use 'a' (append) mode to keep existing content!"
  },
  {
    question: "Why use 'with open()' instead of just 'open()'?",
    options: [
      "It's faster",
      "It automatically closes the file",
      "It creates better files",
      "It's required by Python"
    ],
    correctAnswer: 1,
    explanation: "The 'with' statement automatically closes your file when done, even if errors occur. It's the safe way!"
  },
  {
    question: "What does file.read() return?",
    options: [
      "One line of the file",
      "The entire file content as a string",
      "A list of all lines",
      "Just the first word"
    ],
    correctAnswer: 1,
    explanation: "read() grabs the ENTIRE file as one big string. Use readlines() to get a list, or loop through file for line-by-line reading."
  },
  {
    question: "What does 'a' mode do when opening a file?",
    options: [
      "Erases the file",
      "Adds content to the end of the file",
      "Only allows reading",
      "Creates an error"
    ],
    correctAnswer: 1,
    explanation: "'a' (append) mode adds new content to the end without deleting what's already there. Perfect for logs or high scores!"
  },
  {
    question: "What exception should you catch when a file might not exist?",
    options: [
      "ValueError",
      "TypeError",
      "FileNotFoundError",
      "ReadError"
    ],
    correctAnswer: 2,
    explanation: "FileNotFoundError is raised when you try to open a file that doesn't exist. Always use try/except when reading files!"
  },
  {
    question: "What's the correct way to write multiple lines to a file?",
    options: [
      "file.write(['line1', 'line2'])",
      "file.write('line1\\nline2\\n')",
      "file.writelines('line1', 'line2')",
      "file.append('line1', 'line2')"
    ],
    correctAnswer: 1,
    explanation: "You need to include \\n (newline) characters yourself! write() doesn't add them automatically. Or use writelines() with a list."
  }
];

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
  const [currentLesson, setCurrentLesson] = useState("lesson1");
  const [currentModule, setCurrentModule] = useState(0);
  const [moduleProgress, setModuleProgress] = useState<number[]>([0, 0, 0, 0, 0, 0]);
  const [lesson2ModuleProgress, setLesson2ModuleProgress] = useState<number[]>([0, 0, 0]);
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

  const lesson2Modules = [
    {
      title: "Module 6: More Practice with Functions",
      icon: Code2,
      duration: "30 mins",
      color: "text-blue-500"
    },
    {
      title: "Module 7: Working with Strings & Lists",
      icon: List,
      duration: "30 mins",
      color: "text-purple-500"
    },
    {
      title: "Module 8: Introduction to File I/O",
      icon: FileText,
      duration: "30 mins",
      color: "text-green-500"
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
    <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-6 py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
          Python Programming Adventure
        </h1>
        <p className="text-xl font-medium text-muted-foreground">
          Learn Python - The friendly programming language that's perfect for beginners!
        </p>

        <div className="flex items-center justify-center gap-4 mt-6">
          <span className="text-sm font-medium uppercase">Overall Progress:</span>
          <Progress value={totalProgress} className="w-64" />
          <span className="text-sm font-bold">{Math.round(totalProgress)}%</span>
        </div>
      </div>

      {/* Lesson Tabs */}
      <Tabs value={currentLesson} onValueChange={setCurrentLesson} className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="lesson1" className="text-lg">
            📚 Lesson 1: Fundamentals
          </TabsTrigger>
          <TabsTrigger value="lesson2" className="text-lg">
            🚀 Lesson 2: Advanced
          </TabsTrigger>
        </TabsList>

        {/* Lesson 1 Content - Week 1 */}
        <TabsContent value="lesson1" className="space-y-8">
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
        </TabsContent>

        {/* Lesson 2 Content - Week 2 */}
        <TabsContent value="lesson2" className="space-y-8">
          {/* Module Navigation for Lesson 2 */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {lesson2Modules.map((module, index) => {
              const Icon = module.icon;
              const isActive = currentModule === index;
              const isCompleted = lesson2ModuleProgress[index] === 100;

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
                  <span className="text-xs font-medium text-center">{module.title}</span>
                  <span className="text-xs text-muted-foreground">{module.duration}</span>
                  <Progress value={lesson2ModuleProgress[index]} className="w-full h-1" />
                </Button>
              );
            })}
          </div>

          {/* Module 6: More Practice with Functions */}
          {currentModule === 0 && (
            <div className="space-y-6 animate-bounce-in">
              <Card className="shadow-fun">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code2 className="w-6 h-6 text-blue-500" />
                    Module 6: More Practice with Functions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg">
                    <p className="text-lg font-semibold">
                      Level up your function skills! Learn parameters, defaults, lambda functions, and scope.
                    </p>
                  </div>

                  {/* Part 1: Parameters - Positional & Keyword */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-yellow-500" />
                      Part 1: Understanding Parameters Better
                    </h3>

                    <div className="bg-muted p-4 rounded-lg">
                      <p>Parameters can be passed in different ways! Let's master positional and keyword arguments.</p>
                    </div>

                    <CodeEditor
                      title="Positional vs Keyword Arguments"
                      initialCode={`# Positional arguments - ORDER MATTERS!
def greet(name, age):
    print(f"Hi {name}, you are {age} years old!")

greet("Alex", 12)  # Correct order
greet(12, "Alex")  # Wrong! Age and name are swapped

# Keyword arguments - ORDER DOESN'T MATTER!
greet(age=12, name="Alex")  # Works!
greet(name="Sam", age=10)   # Also works!

# You can mix them (positional first, then keyword)
greet("Emma", age=11)  # Works!
# greet(name="Emma", 11)  # ERROR! Positional after keyword is not allowed

# More examples
def make_sandwich(bread, filling, sauce="mayo"):
    print(f"Making {bread} sandwich with {filling} and {sauce}")

make_sandwich("white", "turkey")              # Uses default sauce
make_sandwich("wheat", "ham", "mustard")      # Override sauce
make_sandwich(bread="rye", filling="cheese")  # All keyword
make_sandwich("sourdough", sauce="ranch", filling="chicken")  # Mixed!

print("\\n✅ Understanding parameters helps you write flexible functions!")`}
                      language="python"
                      expectedOutput="Hi Alex, you are 12 years old!\nHi 12, you are Alex years old!\nHi Alex, you are 12 years old!\nHi Sam, you are 10 years old!\nHi Emma, you are 11 years old!\nMaking white sandwich with turkey and mayo\nMaking wheat sandwich with ham and mustard\nMaking rye sandwich with cheese and mayo\nMaking sourdough sandwich with chicken and ranch\n\n✅ Understanding parameters helps you write flexible functions!"
                    />

                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="border-blue-200 bg-blue-50">
                        <CardHeader>
                          <CardTitle className="text-lg">Positional Arguments</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm space-y-1">
                          <div>Order matters!</div>
                          <div>Most common way</div>
                          <div>Example: greet("Alex", 12)</div>
                          <div>Must match parameter order</div>
                        </CardContent>
                      </Card>

                      <Card className="border-green-200 bg-green-50">
                        <CardHeader>
                          <CardTitle className="text-lg">Keyword Arguments</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm space-y-1">
                          <div>Order doesn't matter!</div>
                          <div>More readable</div>
                          <div>Example: greet(age=12, name="Alex")</div>
                          <div>Great for optional params</div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Part 2: Default Parameters & Multiple Returns */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-purple-500" />
                      Part 2: Default Parameters & Multiple Return Values
                    </h3>

                    <CodeEditor
                      title="Default Parameters - Providing Fallback Values"
                      initialCode={`# Default parameters provide fallback values
def greet_with_default(name, greeting="Hello", punctuation="!"):
    print(f"{greeting} {name}{punctuation}")

greet_with_default("Alex")                     # Hello Alex!
greet_with_default("Sam", "Hi")                # Hi Sam!
greet_with_default("Emma", "Hey", "!!!")       # Hey Emma!!!
greet_with_default("Jordan", punctuation=".")  # Hello Jordan.

# Practical example: Calculator with memory
def calculate(a, b, operation="add"):
    if operation == "add":
        return a + b
    elif operation == "subtract":
        return a - b
    elif operation == "multiply":
        return a * b
    elif operation == "divide":
        return a / b if b != 0 else "Error: Division by zero"
    else:
        return "Unknown operation"

print(calculate(10, 5))              # 15 (default is add)
print(calculate(10, 5, "multiply"))  # 50
print(calculate(10, 5, "divide"))    # 2.0

# Multiple return values - Return a tuple!
def get_min_max(numbers):
    return min(numbers), max(numbers)  # Returns tuple

smallest, largest = get_min_max([5, 2, 9, 1, 7])
print(f"Min: {smallest}, Max: {largest}")  # Min: 1, Max: 9

# More complex example
def analyze_grades(grades):
    total = sum(grades)
    count = len(grades)
    average = total / count if count > 0 else 0
    return min(grades), max(grades), average

scores = [85, 92, 78, 95, 88]
lowest, highest, avg = analyze_grades(scores)
print(f"Lowest: {lowest}, Highest: {highest}, Average: {avg:.2f}")

print("\\n✅ Functions can be super flexible with defaults and multiple returns!")`}
                      language="python"
                      expectedOutput="Hello Alex!\nHi Sam!\nHey Emma!!!\nHello Jordan.\n15\n50\n2.0\nMin: 1, Max: 9\nLowest: 78, Highest: 95, Average: 87.60\n\n✅ Functions can be super flexible with defaults and multiple returns!"
                    />
                  </div>

                  {/* Part 3: Lambda Functions & Variable Scope */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Zap className="w-5 h-5 text-orange-500" />
                      Part 3: Lambda Functions & Variable Scope
                    </h3>

                    <div className="bg-yellow-50 border-2 border-yellow-200 p-4 rounded-lg">
                      <p className="font-bold">Lambda = Quick One-Line Functions!</p>
                      <p>Sometimes you need a simple function just once. Lambda lets you write it in one line!</p>
                    </div>

                    <CodeEditor
                      title="Lambda Functions - The Shortcut"
                      initialCode={`# Regular function
def double(x):
    return x * 2

print(double(5))  # 10

# Lambda version (one line!)
double_lambda = lambda x: x * 2
print(double_lambda(5))  # 10

# More examples
square = lambda x: x ** 2
add = lambda a, b: a + b
greet = lambda name: f"Hello {name}!"

print(square(4))        # 16
print(add(3, 7))        # 10
print(greet("Alex"))    # Hello Alex!

# Lambda with sorting - This is SUPER useful!
students = [
    ("Alice", 85),
    ("Bob", 92),
    ("Charlie", 78),
    ("Diana", 95)
]

# Sort by name (default - first element)
students.sort()
print("By name:", students)

# Sort by grade (second element) using lambda!
students.sort(key=lambda student: student[1])
print("By grade:", students)

# Sort by grade (highest first)
students.sort(key=lambda student: student[1], reverse=True)
print("Highest grade first:", students)

# Lambda with filter
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print("Even numbers:", even_numbers)  # [2, 4, 6, 8, 10]

# Lambda with map
doubled = list(map(lambda x: x * 2, numbers))
print("Doubled:", doubled)  # [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

print("\\n✅ Lambda is perfect for simple, one-time operations!")`}
                      language="python"
                      expectedOutput="10\n10\n16\n10\nHello Alex!\nBy name: [('Alice', 85), ('Bob', 92), ('Charlie', 78), ('Diana', 95)]\nBy grade: [('Charlie', 78), ('Alice', 85), ('Bob', 92), ('Diana', 95)]\nHighest grade first: [('Diana', 95), ('Bob', 92), ('Alice', 85), ('Charlie', 78)]\nEven numbers: [2, 4, 6, 8, 10]\nDoubled: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]\n\n✅ Lambda is perfect for simple, one-time operations!"
                    />

                    <CodeEditor
                      title="Variable Scope - Where Variables Live"
                      initialCode={`# Global variable - accessible everywhere
score = 100

def show_score():
    print(f"Score is: {score}")  # Can READ global variables

show_score()  # Works!

# But you CAN'T modify global variables directly
def try_to_increase():
    # score = score + 10  # ERROR! Can't do this
    pass

# Solution 1: Use parameters and return values (BEST PRACTICE!)
def increase_score(current_score):
    return current_score + 10

score = increase_score(score)  # Now score is 110
print(f"Score after increase: {score}")

# Solution 2: Use global keyword (NOT recommended, but possible)
level = 1

def increase_level():
    global level  # Tell Python we want to modify the global variable
    level = level + 1

increase_level()
print(f"Level: {level}")  # 2

# Local variables - only exist inside function
def my_function():
    local_var = "I only exist inside this function"
    print(local_var)

my_function()
# print(local_var)  # ERROR! local_var doesn't exist outside

# Nested scope example
def outer_function():
    outer_var = "I'm in the outer function"

    def inner_function():
        inner_var = "I'm in the inner function"
        print(outer_var)  # Can access outer function's variables
        print(inner_var)

    inner_function()
    # print(inner_var)  # ERROR! Can't access inner function's variables

outer_function()

# Best practice: Avoid global variables, use parameters instead!
def calculate_total(items, tax_rate=0.1):
    subtotal = sum(items)
    tax = subtotal * tax_rate
    total = subtotal + tax
    return total

cart = [19.99, 5.50, 12.75]
final_price = calculate_total(cart)
print(f"\\nTotal price: $\{final_price:.2f}")

print("\\n✅ Use parameters and return values - avoid global variables!")`}
                      language="python"
                      expectedOutput="Score is: 100\nScore after increase: 110\nLevel: 2\nI only exist inside this function\nI'm in the outer function\nI'm in the inner function\n\nTotal price: $42.06\n\n✅ Use parameters and return values - avoid global variables!"
                    />

                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="border-green-200 bg-green-50">
                        <CardHeader>
                          <CardTitle className="text-lg">When to Use Lambda</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm space-y-1">
                          <div>Simple one-line operations</div>
                          <div>Sorting with custom keys</div>
                          <div>Using with map(), filter()</div>
                          <div>One-time use functions</div>
                        </CardContent>
                      </Card>

                      <Card className="border-blue-200 bg-blue-50">
                        <CardHeader>
                          <CardTitle className="text-lg">Scope Best Practices</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm space-y-1">
                          <div>Use parameters, not globals</div>
                          <div>Return values instead of modifying</div>
                          <div>Keep variables local when possible</div>
                          <div>Avoid the global keyword</div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Mini Project */}
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg">
                    <h4 className="font-bold text-xl mb-4">Practice Challenge: Smart Calculator</h4>
                    <CodeEditor
                      title="Build a Calculator with Advanced Functions"
                      initialCode={`# Smart Calculator - Practice all function concepts!

def calculate(num1, num2, operation="add"):
    """
    Perform calculation with default operation
    Returns result and operation name
    """
    if operation == "add":
        return num1 + num2, "Addition"
    elif operation == "subtract":
        return num1 - num2, "Subtraction"
    elif operation == "multiply":
        return num1 * num2, "Multiplication"
    elif operation == "divide":
        if num2 != 0:
            return num1 / num2, "Division"
        else:
            return "Error", "Division by zero"
    else:
        return "Error", "Unknown operation"

# Test with different methods
result1, op1 = calculate(10, 5)  # Uses default (add)
print(f"{op1}: {result1}")

result2, op2 = calculate(10, 5, "multiply")
print(f"{op2}: {result2}")

# Using keyword arguments
result3, op3 = calculate(num2=3, num1=15, operation="divide")
print(f"{op3}: {result3}")

# Get statistics for a list of numbers
def get_stats(numbers):
    """Return min, max, average, and count"""
    total = sum(numbers)
    count = len(numbers)
    avg = total / count if count > 0 else 0
    return min(numbers), max(numbers), avg, count

test_scores = [85, 92, 78, 95, 88, 91]
minimum, maximum, average, total = get_stats(test_scores)
print(f"\\nStats: Min={minimum}, Max={maximum}, Avg={average:.2f}, Total={total}")

# Use lambda for quick operations
square = lambda x: x ** 2
cube = lambda x: x ** 3
is_even = lambda x: x % 2 == 0

print(f"\\nSquare of 5: {square(5)}")
print(f"Cube of 3: {cube(3)}")
print(f"Is 10 even? {is_even(10)}")

# Sort a list of tuples by score
students = [
    ("Alice", 85),
    ("Bob", 92),
    ("Charlie", 78),
    ("Diana", 95)
]

students.sort(key=lambda s: s[1], reverse=True)
print("\\nTop students:")
for rank, (name, score) in enumerate(students, 1):
    print(f"  {rank}. {name}: {score}")

print("\\n✅ You've mastered functions!")`}
                      language="python"
                      expectedOutput="Addition: 15\nMultiplication: 50\nDivision: 5.0\n\nStats: Min=78, Max=95, Avg=88.17, Total=6\n\nSquare of 5: 25\nCube of 3: 27\nIs 10 even? True\n\nTop students:\n  1. Diana: 95\n  2. Bob: 92\n  3. Alice: 85\n  4. Charlie: 78\n\n✅ You've mastered functions!"
                    />
                    <p className="mt-4 text-sm text-muted-foreground">
                      This project uses everything: parameters, defaults, multiple returns, lambda, and more!
                    </p>
                  </div>

                  <div className="text-center">
                    <Button
                      variant="fun"
                      size="lg"
                      onClick={() => {
                        setLesson2ModuleProgress([100, 0, 0]);
                        setCurrentModule(1);
                      }}
                    >
                      <ArrowRight className="w-5 h-5" />
                      Next: Working with Strings & Lists
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Module 7: Working with Strings & Lists */}
          {currentModule === 1 && (
            <div className="space-y-6 animate-bounce-in">
              <Card className="shadow-fun">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <List className="w-6 h-6 text-purple-500" />
                    Module 7: Working with Strings & Lists
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg">
                    <p className="text-lg font-semibold">
                      Master string methods, formatting, list slicing, and comprehensions!
                    </p>
                  </div>

                  {/* Part 1: String Methods */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-yellow-500" />
                      Part 1: Essential String Methods
                    </h3>

                    <div className="bg-muted p-4 rounded-lg">
                      <p>Strings have powerful built-in methods for cleaning, searching, and transforming text!</p>
                    </div>

                    <CodeEditor
                      title="String Methods You'll Use All the Time"
                      initialCode={`# Cleaning strings
message = "  Hello World!  "
print(message.strip())      # "Hello World!" (removes spaces)
print(message.lower())      # "  hello world!  "
print(message.upper())      # "  HELLO WORLD!  "

# Checking content
email = "student@school.com"
print(email.endswith(".com"))       # True
print(email.startswith("student"))  # True
print("@" in email)                 # True

# Finding and replacing
text = "I love cats! Cats are awesome!"
print(text.count("cats"))           # How many? (case sensitive!)
print(text.lower().count("cats"))   # 2 (case insensitive)
print(text.replace("cats", "dogs")) # Replace all occurrences

# Splitting strings into lists
sentence = "Python is really fun"
words = sentence.split()  # ['Python', 'is', 'really', 'fun']
print(words)

csv_data = "Alice,85,Math"
parts = csv_data.split(",")  # ['Alice', '85', 'Math']
print(f"Name: {parts[0]}, Grade: {parts[1]}, Subject: {parts[2]}")

# Joining lists into strings
animals = ["cat", "dog", "bird", "fish"]
joined = ", ".join(animals)  # "cat, dog, bird, fish"
print(joined)

# Practical examples
username = "  JohnDoe123  "
username = username.strip().lower()  # Clean and normalize
print(f"Username: {username}")

# Check if string is all letters/numbers
name = "Alice"
code = "ABC123"
print(name.isalpha())    # True
print(code.isalnum())    # True
print(code.isdigit())    # False

print("\\n✅ String methods make text processing easy!")`}
                      language="python"
                      expectedOutput="Hello World!\n  hello world!  \n  HELLO WORLD!  \nTrue\nTrue\nTrue\n0\n2\nI love dogs! Cats are awesome!\n['Python', 'is', 'really', 'fun']\nName: Alice, Grade: 85, Subject: Math\ncat, dog, bird, fish\nUsername: johndoe123\nTrue\nTrue\nFalse\n\n✅ String methods make text processing easy!"
                    />
                  </div>

                  {/* Part 2: String Formatting & List Slicing */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Zap className="w-5 h-5 text-orange-500" />
                      Part 2: String Formatting & Advanced List Operations
                    </h3>

                    <CodeEditor
                      title="F-strings and Formatting"
                      initialCode={`# F-strings make output beautiful!
name = "Emma"
age = 12
score = 95.5

# Basic f-string
print(f"Hi {name}, you scored {score}!")

# Formatting numbers
price = 19.5
print(f"Cost: $\{price:.2f}")  # $19.50 (2 decimal places)

pi = 3.14159
print(f"Pi: {pi:.2f}")  # 3.14
print(f"Pi: {pi:.4f}")  # 3.1416

# Aligning text (perfect for tables!)
print(f"{'Name':10} {'Score':>5}")  # Left and right align
print(f"{name:10} {score:>5.1f}")

students = [("Alice", 85), ("Bob", 92), ("Charlie", 78)]
print("\\nGrade Report:")
print(f"{'Student':<15} {'Grade':>5}")
print("=" * 20)
for student, grade in students:
    print(f"{student:<15} {grade:>5}")

# Number formatting
big_number = 1000000
print(f"Big: {big_number:,}")  # 1,000,000 (with commas)

percent = 0.856
print(f"Percent: {percent:.1%}")  # 85.6%

print("\\n✅ F-strings make output professional!")`}
                      language="python"
                      expectedOutput="Hi Emma, you scored 95.5!\nCost: $19.50\nPi: 3.14\nPi: 3.1416\nName       Score\nEmma        95.5\n\nGrade Report:\nStudent         Grade\n====================\nAlice              85\nBob                92\nCharlie            78\nBig: 1,000,000\nPercent: 85.6%\n\n✅ F-strings make output professional!"
                    />

                    <CodeEditor
                      title="List Slicing - The Power Tool!"
                      initialCode={`# List slicing - super useful!
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# Basic slicing [start:end]  (end is NOT included)
print(numbers[2:5])    # [2, 3, 4]
print(numbers[:3])     # [0, 1, 2] - first 3
print(numbers[7:])     # [7, 8, 9] - from 7 to end
print(numbers[-3:])    # [7, 8, 9] - last 3

# Step (every nth item)
print(numbers[::2])    # [0, 2, 4, 6, 8] - every other
print(numbers[1::2])   # [1, 3, 5, 7, 9] - odd indices
print(numbers[::3])    # [0, 3, 6, 9] - every third

# Reverse a list!
print(numbers[::-1])   # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

# Practical examples
playlist = ["Song1", "Song2", "Song3", "Song4", "Song5", "Song6"]

top_3 = playlist[:3]
print(f"Top 3: {top_3}")

last_2 = playlist[-2:]
print(f"Last 2: {last_2}")

reversed_playlist = playlist[::-1]
print(f"Reversed: {reversed_playlist}")

# Copying lists properly
original = [1, 2, 3]
# WRONG way (both point to same list!)
wrong_copy = original
wrong_copy.append(4)
print(f"Original changed!: {original}")  # [1, 2, 3, 4]

# RIGHT way (creates new list)
original = [1, 2, 3]
right_copy = original[:]  # or original.copy()
right_copy.append(4)
print(f"Original safe: {original}")  # [1, 2, 3]
print(f"Copy changed: {right_copy}")  # [1, 2, 3, 4]

# Combining lists
list1 = [1, 2, 3]
list2 = [4, 5, 6]
combined = list1 + list2  # [1, 2, 3, 4, 5, 6]
print(f"Combined: {combined}")

# Repeating lists
zeros = [0] * 5  # [0, 0, 0, 0, 0]
print(f"Zeros: {zeros}")

print("\\n✅ Slicing is incredibly powerful!")`}
                      language="python"
                      expectedOutput="[2, 3, 4]\n[0, 1, 2]\n[7, 8, 9]\n[7, 8, 9]\n[0, 2, 4, 6, 8]\n[1, 3, 5, 7, 9]\n[0, 3, 6, 9]\n[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]\nTop 3: ['Song1', 'Song2', 'Song3']\nLast 2: ['Song5', 'Song6']\nReversed: ['Song6', 'Song5', 'Song4', 'Song3', 'Song2', 'Song1']\nOriginal changed!: [1, 2, 3, 4]\nOriginal safe: [1, 2, 3]\nCopy changed: [1, 2, 3, 4]\nCombined: [1, 2, 3, 4, 5, 6]\nZeros: [0, 0, 0, 0, 0]\n\n✅ Slicing is incredibly powerful!"
                    />
                  </div>

                  {/* Part 3: List Comprehensions */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-yellow-500" />
                      Part 3: List Comprehensions - The Shortcut
                    </h3>

                    <CodeEditor
                      title="List Comprehensions - Create Lists in One Line!"
                      initialCode={`# Traditional way
squares = []
for x in range(5):
    squares.append(x ** 2)
print(f"Squares (old way): {squares}")

# List comprehension - ONE LINE!
squares = [x ** 2 for x in range(5)]
print(f"Squares (new way): {squares}")  # [0, 1, 4, 9, 16]

# With conditions - filter even numbers
even_numbers = [x for x in range(10) if x % 2 == 0]
print(f"Evens: {even_numbers}")  # [0, 2, 4, 6, 8]

# String operations
words = ["hello", "world", "python"]
uppercase = [word.upper() for word in words]
print(f"Uppercase: {uppercase}")  # ['HELLO', 'WORLD', 'PYTHON']

# Get lengths
lengths = [len(word) for word in words]
print(f"Lengths: {lengths}")  # [5, 5, 6]

# Mathematical operations
celsius = [0, 10, 20, 30, 40]
fahrenheit = [(temp * 9/5) + 32 for temp in celsius]
print(f"F: {fahrenheit}")  # [32.0, 50.0, 68.0, 86.0, 104.0]

# Filter scores
scores = [45, 78, 92, 34, 88, 56, 95]
passing = [score for score in scores if score >= 60]
print(f"Passing: {passing}")  # [78, 92, 88, 95]

high_scores = [score for score in scores if score >= 90]
print(f"High scores: {high_scores}")  # [92, 95]

# If-else in comprehension
numbers = [1, 2, 3, 4, 5]
labels = ["Even" if n % 2 == 0 else "Odd" for n in numbers]
print(f"Labels: {labels}")  # ['Odd', 'Even', 'Odd', 'Even', 'Odd']

# Practical: Clean names
messy_names = ["  alice  ", "BOB", "  charlie"]
clean_names = [name.strip().title() for name in messy_names]
print(f"Clean: {clean_names}")  # ['Alice', 'Bob', 'Charlie']

# Filter and transform
prices = [19.99, 5.50, 12.75, 8.00, 15.25]
expensive = [f"$\{price:.2f}" for price in prices if price > 10]
print(f"Expensive items: {expensive}")

print("\\n✅ Comprehensions make Python code super clean!")`}
                      language="python"
                      expectedOutput="Squares (old way): [0, 1, 4, 9, 16]\nSquares (new way): [0, 1, 4, 9, 16]\nEvens: [0, 2, 4, 6, 8]\nUppercase: ['HELLO', 'WORLD', 'PYTHON']\nLengths: [5, 5, 6]\nF: [32.0, 50.0, 68.0, 86.0, 104.0]\nPassing: [78, 92, 88, 95]\nHigh scores: [92, 95]\nLabels: ['Odd', 'Even', 'Odd', 'Even', 'Odd']\nClean: ['Alice', 'Bob', 'Charlie']\nExpensive items: ['$19.99', '$12.75', '$15.25']\n\n✅ Comprehensions make Python code super clean!"
                    />
                  </div>

                  {/* Practice Challenge */}
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg">
                    <h4 className="font-bold text-xl mb-4">Practice Challenge: Text Analyzer</h4>
                    <CodeEditor
                      title="Build a Text Analyzer Tool"
                      initialCode={`# Text Analyzer - Practice strings, lists, and comprehensions!

def analyze_text(text):
    """Analyze text and return statistics"""
    # Clean and prepare
    clean_text = text.strip()
    words = clean_text.split()

    # Count words
    word_count = len(words)

    # Find longest word
    longest = max(words, key=len) if words else ""

    # Count specific letters (case insensitive)
    letter_counts = {}
    for char in clean_text.lower():
        if char.isalpha():
            letter_counts[char] = letter_counts.get(char, 0) + 1

    # Get top 3 most common letters
    top_letters = sorted(letter_counts.items(),
                        key=lambda x: x[1],
                        reverse=True)[:3]

    return {
        "word_count": word_count,
        "longest_word": longest,
        "top_letters": top_letters
    }

# Test it
sample = "Python programming is really fun and exciting!"
stats = analyze_text(sample)

print(f"Word count: {stats['word_count']}")
print(f"Longest word: {stats['longest_word']}")
print(f"Top letters: {stats['top_letters']}")

# Format names nicely
messy_names = ["  alice SMITH  ", "bob JONES", "  CHARLIE brown"]
formatted = [name.strip().title() for name in messy_names]
print(f"\\nFormatted names: {formatted}")

# Create a grade report with slicing and formatting
students = [
    ("Alice", 92),
    ("Bob", 78),
    ("Charlie", 85),
    ("Diana", 95),
    ("Eve", 88)
]

print("\\n=== GRADE REPORT ===")
print(f"{'Student':<15} {'Grade':>5}")
print("=" * 20)
for name, grade in students:
    print(f"{name:<15} {grade:>5}")

# Top 3 students
students.sort(key=lambda s: s[1], reverse=True)
top_3 = students[:3]
print("\\nTop 3 Students:")
for rank, (name, grade) in enumerate(top_3, 1):
    print(f"  {rank}. {name}: {grade}")

print("\\n✅ You've mastered strings and lists!")`}
                      language="python"
                      expectedOutput="Word count: 7\nLongest word: programming\nTop letters: [('n', 5), ('i', 4), ('r', 3)]\n\nFormatted names: ['Alice Smith', 'Bob Jones', 'Charlie Brown']\n\n=== GRADE REPORT ===\nStudent         Grade\n====================\nAlice              92\nBob                78\nCharlie            85\nDiana              95\nEve                88\n\nTop 3 Students:\n  1. Diana: 95\n  2. Alice: 92\n  3. Eve: 88\n\n✅ You've mastered strings and lists!"
                    />
                  </div>

                  <div className="text-center">
                    <Button
                      variant="fun"
                      size="lg"
                      onClick={() => {
                        setLesson2ModuleProgress([100, 100, 0]);
                        setCurrentModule(2);
                      }}
                    >
                      <ArrowRight className="w-5 h-5" />
                      Next: Introduction to File I/O
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Module 8: Introduction to File I/O */}
          {currentModule === 2 && (
            <div className="space-y-6 animate-bounce-in">
              <Card className="shadow-fun">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-6 h-6 text-green-500" />
                    Module 8: Introduction to File I/O
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg">
                    <p className="text-lg font-semibold">
                      Learn to save and load data from files! Make your programs remember things.
                    </p>
                  </div>

                  {/* Part 1: Writing to Files */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-yellow-500" />
                      Part 1: Writing to Files - Saving Data
                    </h3>

                    <div className="bg-muted p-4 rounded-lg">
                      <p>Files let you save data permanently! Even after your program closes, the data stays saved on your computer.</p>
                    </div>

                    <CodeEditor
                      title="Writing to Files"
                      initialCode={`# Write mode creates a new file (or overwrites existing)
# Use 'with' statement - it automatically closes the file!
with open("my_notes.txt", "w") as file:
    file.write("Hello from Python!\\n")
    file.write("This is line 2!\\n")
    file.write("Files are awesome!\\n")

print("✅ File created!")

# Append mode - adds to the end (doesn't erase)
with open("my_notes.txt", "a") as file:
    file.write("This line was added later!\\n")

print("✅ File updated!")

# Writing multiple lines at once
lines = [
    "Line 1: Python is fun\\n",
    "Line 2: File I/O is useful\\n",
    "Line 3: Keep learning!\\n"
]

with open("multiple_lines.txt", "w") as file:
    file.writelines(lines)

print("✅ Multiple lines written!")

# Practical example: Save high scores
def save_high_score(name, score):
    with open("high_scores.txt", "a") as file:
        file.write(f"{name}: {score}\\n")
    print(f"✅ Saved {name}'s score: {score}")

save_high_score("Alex", 1250)
save_high_score("Sam", 980)
save_high_score("Emma", 1100)

print("\\n✅ Data is now saved permanently!")`}
                      language="python"
                      expectedOutput="✅ File created!\n✅ File updated!\n✅ Multiple lines written!\n✅ Saved Alex's score: 1250\n✅ Saved Sam's score: 980\n✅ Saved Emma's score: 1100\n\n✅ Data is now saved permanently!"
                    />

                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                      <Card className="border-blue-200 bg-blue-50">
                        <CardHeader>
                          <CardTitle className="text-lg">'w' - Write</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm">
                          <div>Creates new file</div>
                          <div>Erases existing content!</div>
                        </CardContent>
                      </Card>

                      <Card className="border-green-200 bg-green-50">
                        <CardHeader>
                          <CardTitle className="text-lg">'a' - Append</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm">
                          <div>Adds to end of file</div>
                          <div>Keeps existing content</div>
                        </CardContent>
                      </Card>

                      <Card className="border-purple-200 bg-purple-50">
                        <CardHeader>
                          <CardTitle className="text-lg">'r' - Read</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm">
                          <div>Only reads the file</div>
                          <div>Can't write anything</div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Part 2: Reading from Files */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Terminal className="w-5 h-5 text-blue-500" />
                      Part 2: Reading from Files - Getting Data Back
                    </h3>

                    <CodeEditor
                      title="Reading from Files"
                      initialCode={`# Read entire file at once
with open("my_notes.txt", "r") as file:
    content = file.read()
    print("=== FILE CONTENTS ===")
    print(content)

# Read file line by line (better for large files)
with open("my_notes.txt", "r") as file:
    print("\\n=== LINE BY LINE ===")
    for line_number, line in enumerate(file, 1):
        print(f"Line {line_number}: {line.strip()}")  # strip() removes \\n

# Read all lines into a list
with open("my_notes.txt", "r") as file:
    lines = file.readlines()  # Each line is a list item
    print(f"\\nTotal lines: {len(lines)}")
    print(f"First line: {lines[0].strip()}")
    print(f"Last line: {lines[-1].strip()}")

# Read high scores we saved earlier
print("\\n=== HIGH SCORES ===")
with open("high_scores.txt", "r") as file:
    for line in file:
        line = line.strip()
        if line:  # Skip empty lines
            parts = line.split(": ")
            if len(parts) == 2:
                name, score = parts
                print(f"Player: {name}, Score: {score}")

# Practical: Load and process data
def read_high_scores():
    """Read high scores and return as a list of tuples"""
    scores = []
    with open("high_scores.txt", "r") as file:
        for line in file:
            line = line.strip()
            if line and ": " in line:
                name, score = line.split(": ")
                scores.append((name, int(score)))
    return scores

all_scores = read_high_scores()
all_scores.sort(key=lambda x: x[1], reverse=True)  # Sort by score

print("\\n=== TOP SCORES (Sorted) ===")
for rank, (name, score) in enumerate(all_scores, 1):
    print(f"{rank}. {name}: {score}")

print("\\n✅ Files let data persist between runs!")`}
                      language="python"
                      expectedOutput="=== FILE CONTENTS ===\nHello from Python!\nThis is line 2!\nFiles are awesome!\nThis line was added later!\n\n=== LINE BY LINE ===\nLine 1: Hello from Python!\nLine 2: This is line 2!\nLine 3: Files are awesome!\nLine 4: This line was added later!\n\nTotal lines: 4\nFirst line: Hello from Python!\nLast line: This line was added later!\n\n=== HIGH SCORES ===\nPlayer: Alex, Score: 1250\nPlayer: Sam, Score: 980\nPlayer: Emma, Score: 1100\n\n=== TOP SCORES (Sorted) ===\n1. Alex: 1250\n2. Emma: 1100\n3. Sam: 980\n\n✅ Files let data persist between runs!"
                    />
                  </div>

                  {/* Part 3: Error Handling */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-purple-500" />
                      Part 3: Basic Error Handling with Try/Except
                    </h3>

                    <div className="bg-yellow-50 border-2 border-yellow-200 p-4 rounded-lg">
                      <p className="font-bold">What if the file doesn't exist?</p>
                      <p>Your program will crash! Use try/except to handle errors gracefully.</p>
                    </div>

                    <CodeEditor
                      title="Safe File Operations with Error Handling"
                      initialCode={`# Without error handling - CRASHES if file missing!
# file = open("doesnt_exist.txt", "r")  # FileNotFoundError!

# With error handling - program continues safely
try:
    with open("doesnt_exist.txt", "r") as file:
        content = file.read()
        print(content)
except FileNotFoundError:
    print("❌ Oops! That file doesn't exist.")
    print("✅ Creating it now...")
    with open("doesnt_exist.txt", "w") as file:
        file.write("This file was just created!\\n")
    print("✅ File created successfully!")

# Safe read function
def read_file_safely(filename):
    """Safely read a file, handling errors"""
    try:
        with open(filename, "r") as file:
            return file.read()
    except FileNotFoundError:
        return f"Error: '{filename}' not found"
    except PermissionError:
        return f"Error: No permission to read '{filename}'"
    except Exception as e:
        return f"Error: {e}"

# Test it
print("\\n=== SAFE FILE READING ===")
content1 = read_file_safely("my_notes.txt")
print(f"my_notes.txt: {content1[:50]}...")  # First 50 chars

content2 = read_file_safely("missing.txt")
print(content2)

# Practical: Safe high score loader
def load_scores_safely():
    """Load scores with error handling"""
    try:
        scores = []
        with open("high_scores.txt", "r") as file:
            for line in file:
                line = line.strip()
                if line and ": " in line:
                    name, score = line.split(": ")
                    scores.append((name, int(score)))
        return scores
    except FileNotFoundError:
        print("No high scores yet! Starting fresh.")
        return []
    except ValueError:
        print("Error reading scores (bad format)")
        return []

scores = load_scores_safely()
print(f"\\nLoaded {len(scores)} high scores")

print("\\n✅ Always use try/except when working with files!")`}
                      language="python"
                      expectedOutput="❌ Oops! That file doesn't exist.\n✅ Creating it now...\n✅ File created successfully!\n\n=== SAFE FILE READING ===\nmy_notes.txt: Hello from Python!\nThis is line 2!\nFiles are awes...\nError: 'missing.txt' not found\n\nLoaded 3 high scores\n\n✅ Always use try/except when working with files!"
                    />
                  </div>

                  {/* Practice Challenge */}
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg">
                    <h4 className="font-bold text-xl mb-4">Final Project: Journal App</h4>
                    <CodeEditor
                      title="Build a Simple Journal with File I/O"
                      initialCode={`# Simple Journal App - Save and read journal entries

def add_entry():
    """Add a new journal entry"""
    entry = input("Write your journal entry: ")

    # Get current date/time (simple version)
    from datetime import datetime
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M")

    # Append to journal file
    with open("journal.txt", "a") as file:
        file.write(f"[{timestamp}]\\n")
        file.write(f"{entry}\\n")
        file.write("-" * 40 + "\\n")

    print("✅ Entry saved!")

def view_all_entries():
    """View all journal entries"""
    try:
        with open("journal.txt", "r") as file:
            content = file.read()
            if content.strip():
                print("\\n=== YOUR JOURNAL ===")
                print(content)
            else:
                print("Journal is empty!")
    except FileNotFoundError:
        print("No journal yet! Start writing to create one.")

def count_entries():
    """Count how many entries exist"""
    try:
        with open("journal.txt", "r") as file:
            content = file.read()
            # Count timestamps (each entry has one)
            count = content.count("[20")  # Assumes year 20XX
            print(f"\\nYou have {count} journal entries!")
    except FileNotFoundError:
        print("No journal entries yet!")

# Menu
print("=== JOURNAL APP ===")
print("1. Add entry")
print("2. View all entries")
print("3. Count entries")
choice = input("Choose (1-3): ")

if choice == "1":
    add_entry()
elif choice == "2":
    view_all_entries()
elif choice == "3":
    count_entries()
else:
    print("Invalid choice!")

print("\\n✅ Your data is saved in journal.txt!")`}
                      language="python"
                      expectedOutput="=== JOURNAL APP ===\n1. Add entry\n2. View all entries\n3. Count entries\nChoose (1-3): [variable]\n\n✅ Your data is saved in journal.txt!"
                    />
                  </div>

                  {/* Summary of Week 2 */}
                  <div className="bg-gradient-to-r from-yellow-100 to-green-100 p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <Trophy className="w-8 h-8 text-yellow-500" />
                      Week 2 Complete! What You Learned:
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <Card className="bg-blue-50 border-blue-200">
                        <CardHeader>
                          <CardTitle className="text-lg">Module 6: Functions</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm space-y-1">
                          <div>✅ Positional & keyword arguments</div>
                          <div>✅ Default parameters</div>
                          <div>✅ Multiple return values</div>
                          <div>✅ Lambda functions</div>
                          <div>✅ Variable scope</div>
                        </CardContent>
                      </Card>

                      <Card className="bg-purple-50 border-purple-200">
                        <CardHeader>
                          <CardTitle className="text-lg">Module 7: Strings & Lists</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm space-y-1">
                          <div>✅ String methods (strip, split, etc.)</div>
                          <div>✅ F-string formatting</div>
                          <div>✅ List slicing and copying</div>
                          <div>✅ List comprehensions</div>
                          <div>✅ Text processing</div>
                        </CardContent>
                      </Card>

                      <Card className="bg-green-50 border-green-200">
                        <CardHeader>
                          <CardTitle className="text-lg">Module 8: File I/O</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm space-y-1">
                          <div>✅ Writing to files (w, a modes)</div>
                          <div>✅ Reading from files (r mode)</div>
                          <div>✅ Using 'with' statement</div>
                          <div>✅ Basic try/except</div>
                          <div>✅ Data persistence</div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="bg-white p-4 rounded-lg border-2 border-green-300">
                      <h4 className="font-bold text-lg mb-2">Key Takeaways:</h4>
                      <ul className="space-y-2 text-sm">
                        <li><strong>Functions are flexible:</strong> Use defaults, keyword args, and multiple returns to make powerful functions</li>
                        <li><strong>Strings & Lists are powerful:</strong> Master methods, slicing, and comprehensions for clean code</li>
                        <li><strong>Files make data permanent:</strong> Save data to files so your program remembers things</li>
                        <li><strong>Error handling is important:</strong> Use try/except to make robust programs</li>
                        <li><strong>Practice makes perfect:</strong> These intermediate skills build on your fundamentals!</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-lg mt-4">
                      <h4 className="font-bold text-lg mb-2">You Can Now Build:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Journal apps that save entries to files</li>
                        <li>• High score trackers for games</li>
                        <li>• Text analyzers and formatters</li>
                        <li>• Contact books with file storage</li>
                        <li>• Todo lists that persist between runs</li>
                      </ul>
                    </div>
                  </div>

                  <div className="text-center space-x-4">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setLesson2ModuleProgress([100, 100, 100]);
                        setCurrentModule(0);
                        setCurrentLesson("lesson1");
                      }}
                    >
                      Back to Lesson 1
                    </Button>

                    <Button
                      variant="fun"
                      size="lg"
                      onClick={() => {
                        setLesson2ModuleProgress([100, 100, 100]);
                        setShowQuiz(true);
                        setQuizIndex(0);
                        setCorrectAnswers(0);
                      }}
                    >
                      <Trophy className="w-5 h-5" />
                      Take Lesson 2 Quiz!
                    </Button>

                    <Button
                      variant="outline"
                      onClick={() => {
                        setLesson2ModuleProgress([100, 100, 100]);
                        setCurrentModule(0);
                      }}
                    >
                      Review Lesson 2
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Quiz Section */}
      {showQuiz && (
        <div className="space-y-6 animate-bounce-in">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-primary">
              🎯 {currentLesson === "lesson2" ? "Lesson 2 Quiz" : "Final Quiz"}: Test Your Python Knowledge!
            </h2>
            <p className="text-muted-foreground">
              Question {quizIndex + 1} of {currentLesson === "lesson2" ? pythonLesson2Quiz.length : pythonQuiz.length}
            </p>
            <Progress value={((quizIndex + 1) / (currentLesson === "lesson2" ? pythonLesson2Quiz.length : pythonQuiz.length)) * 100} className="w-full max-w-md mx-auto" />
          </div>

          <QuizCard
            quiz={currentLesson === "lesson2" ? pythonLesson2Quiz[quizIndex] : pythonQuiz[quizIndex]}
            onComplete={handleQuizComplete}
            currentIndex={quizIndex}
            totalQuestions={currentLesson === "lesson2" ? pythonLesson2Quiz.length : pythonQuiz.length}
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