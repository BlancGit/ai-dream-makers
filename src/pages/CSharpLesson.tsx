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
  Youtube
} from "lucide-react";

const csharpQuiz = [
  {
    question: "What type of data does 'int' store in C#?",
    options: [
      "Text and words",
      "Whole numbers",
      "Decimals",
      "True or false"
    ],
    correctAnswer: 1,
    explanation: "The 'int' data type stores whole numbers (integers) like 1, 42, -10, or 0. No decimals allowed!"
  },
  {
    question: "What symbol do we use to write comments in C#?",
    options: [
      "<!-- -->",
      "/* */",
      "//",
      "##"
    ],
    correctAnswer: 2,
    explanation: "We use // for single-line comments in C#. Everything after // on that line is ignored by the computer!"
  },
  {
    question: "What does Console.WriteLine() do?",
    options: [
      "Draws on the screen",
      "Prints text to the console",
      "Creates a new file",
      "Plays a sound"
    ],
    correctAnswer: 1,
    explanation: "Console.WriteLine() prints text to the console (the black window) and moves to a new line after!"
  },
  {
    question: "What's the difference between Console.WriteLine() and Console.Write()?",
    options: [
      "WriteLine prints in color, Write doesn't",
      "WriteLine moves to a new line after printing, Write stays on the same line",
      "WriteLine is faster than Write",
      "There is no difference"
    ],
    correctAnswer: 1,
    explanation: "Console.WriteLine() automatically moves to a new line after printing, while Console.Write() stays on the same line."
  },
  {
    question: "Which operator checks if two values are equal?",
    options: [
      "=",
      "==",
      "!=",
      "==="
    ],
    correctAnswer: 1,
    explanation: "The == operator checks if two values are equal. Single = is for assigning values, not comparing!"
  },
  {
    question: "What does the modulo operator (%) do?",
    options: [
      "Divides two numbers",
      "Multiplies two numbers",
      "Returns the remainder after division",
      "Converts to percentage"
    ],
    correctAnswer: 2,
    explanation: "The modulo operator (%) returns the remainder after division. For example, 10 % 3 = 1 because 10 ÷ 3 = 3 remainder 1."
  },
  {
    question: "What keyword do we use to create a method in C#?",
    options: [
      "function",
      "method",
      "void or a return type",
      "create"
    ],
    correctAnswer: 2,
    explanation: "In C#, we use 'void' for methods that don't return anything, or a data type (like int, string) for methods that return values!"
  },
  {
    question: "What does the 'static' keyword mean in a method declaration?",
    options: [
      "The method never changes",
      "The method can be called without creating an object",
      "The method runs faster",
      "The method is private"
    ],
    correctAnswer: 1,
    explanation: "The 'static' keyword means the method belongs to the class itself, not to instances of the class, so you can call it without creating an object."
  },
  {
    question: "What is a class in C#?",
    options: [
      "A school classroom",
      "A blueprint for creating objects",
      "A type of loop",
      "A math equation"
    ],
    correctAnswer: 1,
    explanation: "A class is like a blueprint or template that defines what properties and behaviors objects will have!"
  },
  {
    question: "How do you create a new object from a class?",
    options: [
      "object = Class()",
      "Class object;",
      "new Class()",
      "create Class"
    ],
    correctAnswer: 2,
    explanation: "We use the 'new' keyword followed by the class name and parentheses to create a new object!"
  },
  {
    question: "What loop runs as long as a condition is true?",
    options: [
      "for loop",
      "while loop",
      "foreach loop",
      "loop loop"
    ],
    correctAnswer: 1,
    explanation: "A while loop keeps running as long as its condition is true. Be careful not to create infinite loops!"
  },
  {
    question: "What does 'string' data type store?",
    options: [
      "Numbers",
      "Text",
      "True/False",
      "Decimals"
    ],
    correctAnswer: 1,
    explanation: "The 'string' data type stores text - words, sentences, or any combination of characters!"
  },
  {
    question: "What symbol marks the end of most C# statements?",
    options: [
      ".",
      ";",
      ":",
      ","
    ],
    correctAnswer: 1,
    explanation: "The semicolon (;) marks the end of most C# statements. Think of it like a period at the end of a sentence!"
  },
  {
    question: "Which of these is a valid C# variable name?",
    options: [
      "2player",
      "player-name",
      "playerName",
      "player name"
    ],
    correctAnswer: 2,
    explanation: "C# variables use camelCase naming, can't start with numbers, and can't contain spaces or hyphens."
  },
  {
    question: "What does Console.ReadLine() return?",
    options: [
      "An integer",
      "A string",
      "A boolean",
      "Nothing"
    ],
    correctAnswer: 1,
    explanation: "Console.ReadLine() always returns a string, even if the user types numbers. Use int.Parse() to convert to numbers."
  },
  {
    question: "What does the 'if' statement require at the end of the condition line?",
    options: [
      "A semicolon ;",
      "A colon :",
      "Curly braces { }",
      "Nothing special"
    ],
    correctAnswer: 2,
    explanation: "C# if statements require curly braces { } to define the code block that runs when the condition is true."
  },
  {
    question: "What's the difference between '&&' and '||' operators?",
    options: [
      "No difference, they're the same",
      "&& means AND (both must be true), || means OR (at least one must be true)",
      "&& is for numbers, || is for text",
      "&& is faster than ||"
    ],
    correctAnswer: 1,
    explanation: "&& is the logical AND operator (both conditions must be true), || is the logical OR operator (at least one condition must be true)."
  },
  {
    question: "In a for loop 'for(int i = 0; i < 5; i++)', how many times does the loop run?",
    options: [
      "4 times",
      "5 times",
      "6 times",
      "Infinite times"
    ],
    correctAnswer: 1,
    explanation: "The loop runs 5 times with i values: 0, 1, 2, 3, 4. When i becomes 5, the condition i < 5 is false, so it stops."
  },
  {
    question: "What does 'void' mean in a method declaration?",
    options: [
      "The method is empty",
      "The method doesn't return any value",
      "The method is broken",
      "The method runs forever"
    ],
    correctAnswer: 1,
    explanation: "'void' means the method doesn't return any value. Methods with void just perform actions but don't send data back."
  },
  {
    question: "What is inheritance in C# object-oriented programming?",
    options: [
      "Money passed down in families",
      "A child class getting properties and methods from a parent class",
      "Copying code from one file to another",
      "A way to delete objects"
    ],
    correctAnswer: 1,
    explanation: "Inheritance allows a child class to inherit (get) properties and methods from a parent class, promoting code reuse."
  },
  {
    question: "What does the 'public' keyword mean in front of a class member?",
    options: [
      "Everyone can access it",
      "Only the class itself can access it",
      "It's displayed on the screen",
      "It's shared between all objects"
    ],
    correctAnswer: 0,
    explanation: "'public' means the class member (property or method) can be accessed from anywhere in the program - it's publicly available."
  },
  {
    question: "In the RPG game project, what does the Player class constructor do?",
    options: [
      "Destroys the player object",
      "Sets up initial values when creating a new player",
      "Saves the game",
      "Starts the battle system"
    ],
    correctAnswer: 1,
    explanation: "The constructor runs automatically when creating a new Player object and sets up initial values like health, level, and name."
  },
  {
    question: "What's the purpose of the 'return' statement in a method?",
    options: [
      "To go back to the beginning of the method",
      "To send a value back to whoever called the method",
      "To print something to the console",
      "To create a new variable"
    ],
    correctAnswer: 1,
    explanation: "The 'return' statement sends a value back to the code that called the method, allowing methods to provide results."
  },
  {
    question: "Which data type would you use to store a player's health points that can have decimal values?",
    options: [
      "int",
      "string",
      "bool",
      "double"
    ],
    correctAnswer: 3,
    explanation: "'double' can store decimal numbers like 98.5, while 'int' only stores whole numbers. For health with decimals, use double."
  },
  {
    question: "What happens if you try to access an array element that doesn't exist?",
    options: [
      "It returns 0",
      "It returns null",
      "It throws an IndexOutOfRangeException",
      "It creates a new element"
    ],
    correctAnswer: 2,
    explanation: "Accessing an array index that doesn't exist throws an IndexOutOfRangeException, which crashes the program if not handled."
  }
];

const CSharpLesson = () => {
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
      title: "Module 1: C# Fundamentals",
      icon: BookOpen,
      duration: "25 mins",
      color: "text-blue-500"
    },
    {
      title: "Module 2: Control Flow",
      icon: Cpu,
      duration: "30 mins",
      color: "text-purple-500"
    },
    {
      title: "Module 3: Methods",
      icon: Code2,
      duration: "25 mins",
      color: "text-green-500"
    },
    {
      title: "Module 4: Object-Oriented Programming",
      icon: Terminal,
      duration: "30 mins",
      color: "text-orange-500"
    },
    {
      title: "Module 5: Final Project - RPG Game",
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

    if (quizIndex < csharpQuiz.length - 1) {
      setQuizIndex(prev => prev + 1);
    } else {
      // Quiz finished
      const score = Math.round(((correctAnswers + (correct ? 1 : 0)) / csharpQuiz.length) * 100);
      setShowQuiz(false);
      updateModuleProgress(5, 100);

      setTimeout(() => {
        alert(`🎉 Quiz Complete!\n\nYour Score: ${score}%\n${score >= 70 ? 'Excellent work! You\'ve mastered C# programming!' : 'Good effort! Review the lessons and try again to improve your score.'}`);
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
          C# Programming Adventure
        </h1>
        <p className="text-xl text-muted-foreground">
          Learn to code like a pro with C# - The language behind amazing games and apps!
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
                Module 0: Setting Up Your C# Environment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <p className="text-lg mb-4">
                  Before we start coding, let's set up Visual Studio - your coding playground!
                </p>
              </div>

              <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/ZVGutgqBMUM"
                  title="C# Setup Tutorial"
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
                      <strong>Download Visual Studio Community</strong>
                      <p className="text-sm text-muted-foreground">It's free and perfect for beginners!</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-2xl">2️⃣</span>
                    <div>
                      <strong>Install .NET Desktop Development</strong>
                      <p className="text-sm text-muted-foreground">This gives you everything needed for C#</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-2xl">3️⃣</span>
                    <div>
                      <strong>Create Your First Console App</strong>
                      <p className="text-sm text-muted-foreground">Follow along with the video!</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-2xl">4️⃣</span>
                    <div>
                      <strong>Run "Hello World"</strong>
                      <p className="text-sm text-muted-foreground">Your first program - exciting!</p>
                    </div>
                  </li>
                </ul>
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
                  I'm Ready! Start Coding!
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Module 1: C# Fundamentals */}
      {currentModule === 1 && (
        <div className="space-y-6 animate-bounce-in">
          <Card className="shadow-fun">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-blue-500" />
                Module 1: Understanding C# Fundamentals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Section 1: Variables */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-500" />
                  Part 1: Variables - Your Data Containers
                </h3>

                <div className="bg-muted p-4 rounded-lg">
                  <p className="mb-2">
                    <strong>Variables</strong> are like labeled boxes 📦 where we store information!
                  </p>
                  <p>
                    Just like you might have a box labeled "toys" or "books", in C# we have variables with names that hold different types of data.
                  </p>
                </div>

                <CodeEditor
                  title="Your First Variables"
                  initialCode={`// This is a comment - the computer ignores it!
// Let's create some variables:

int age = 15;           // 'int' stores whole numbers
string name = "Alex";   // 'string' stores text
double height = 5.6;    // 'double' stores decimals
bool isStudent = true;  // 'bool' stores true or false

// Let's print them out:
Console.WriteLine("Name: " + name);
Console.WriteLine("Age: " + age);
Console.WriteLine("Height: " + height);
Console.WriteLine("Is a student: " + isStudent);`}
                  language="csharp"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="border-blue-200 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="text-lg">Data Types Explained</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div><code className="bg-white px-2 py-1 rounded">int</code> → Whole numbers (-2, 0, 42)</div>
                      <div><code className="bg-white px-2 py-1 rounded">string</code> → Text ("Hello", "C# is fun!")</div>
                      <div><code className="bg-white px-2 py-1 rounded">double</code> → Decimals (3.14, 99.9)</div>
                      <div><code className="bg-white px-2 py-1 rounded">bool</code> → True or False only</div>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200 bg-green-50">
                    <CardHeader>
                      <CardTitle className="text-lg">Naming Rules</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div>✅ Start with letter: <code>score</code></div>
                      <div>✅ Use camelCase: <code>playerScore</code></div>
                      <div>❌ No spaces: <code>player score</code></div>
                      <div>❌ No special chars: <code>player@score</code></div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Section 2: Input/Output */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-purple-500" />
                  Part 2: Talking to Your Program
                </h3>

                <div className="bg-muted p-4 rounded-lg">
                  <p>Programs need to communicate! They can:</p>
                  <ul className="list-disc list-inside mt-2">
                    <li><strong>Output:</strong> Display information to you</li>
                    <li><strong>Input:</strong> Get information from you</li>
                  </ul>
                </div>

                <CodeEditor
                  title="Interactive Program"
                  initialCode={`// Output - Talking TO the user
Console.WriteLine("Welcome to C# Programming!");
Console.WriteLine("What's your name?");

// Input - Getting info FROM the user
string userName = Console.ReadLine();  // Waits for user to type

// Using the input
Console.WriteLine("Hello, " + userName + "!");
Console.WriteLine("Nice to meet you!");

// Let's get their age too
Console.WriteLine("How old are you?");
string ageText = Console.ReadLine();     // ReadLine always returns text
int userAge = int.Parse(ageText);        // Convert text to number

// Now we can use both!
Console.WriteLine(userName + " is " + userAge + " years old!");`}
                  language="csharp"
                />

                <div className="bg-yellow-50 border-2 border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-bold flex items-center gap-2 mb-2">
                    <PlayCircle className="w-5 h-5" />
                    Try It Yourself!
                  </h4>
                  <p>Modify the code above to:</p>
                  <ol className="list-decimal list-inside space-y-1 mt-2">
                    <li>Ask for the user's favorite color</li>
                    <li>Store it in a variable called <code>favoriteColor</code></li>
                    <li>Print a message using their name and favorite color</li>
                  </ol>
                </div>
              </div>

              {/* Section 3: Math Operations */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-green-500" />
                  Part 3: Math Magic in C#
                </h3>

                <CodeEditor
                  title="Calculator Time!"
                  initialCode={`// Basic math operations
int a = 10;
int b = 3;

// Addition
int sum = a + b;              // 10 + 3 = 13
Console.WriteLine("10 + 3 = " + sum);

// Subtraction
int difference = a - b;       // 10 - 3 = 7
Console.WriteLine("10 - 3 = " + difference);

// Multiplication
int product = a * b;          // 10 * 3 = 30
Console.WriteLine("10 * 3 = " + product);

// Division
int quotient = a / b;         // 10 / 3 = 3 (no decimals with int!)
Console.WriteLine("10 / 3 = " + quotient);

// Remainder (Modulo)
int remainder = a % b;        // 10 % 3 = 1 (the leftover)
Console.WriteLine("10 % 3 = " + remainder);

// Working with decimals
double x = 10.0;
double y = 3.0;
double preciseDiv = x / y;    // 10.0 / 3.0 = 3.333...
Console.WriteLine("10.0 / 3.0 = " + preciseDiv);`}
                  language="csharp"
                />
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
                  Continue to Control Flow
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Module 2: Control Flow */}
      {currentModule === 2 && (
        <div className="space-y-6 animate-bounce-in">
          <Card className="shadow-fun">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cpu className="w-6 h-6 text-purple-500" />
                Module 2: Control Flow - Making Decisions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Section 1: If Statements */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Part 1: If/Else - Your Program's Brain</h3>

                <div className="bg-muted p-4 rounded-lg">
                  <p className="mb-2">
                    Programs need to make decisions! The <code>if</code> statement lets your program choose different paths.
                  </p>
                  <p>
                    Think of it like: "IF it's raining, THEN take an umbrella, ELSE wear sunglasses!"
                  </p>
                </div>

                <CodeEditor
                  title="Making Decisions"
                  initialCode={`// Simple if statement
int age = 15;

if (age >= 13)  // Check if age is 13 or more
{
    Console.WriteLine("You're a teenager!");
}

// If-else statement
int score = 85;

if (score >= 90)  // First check
{
    Console.WriteLine("Grade: A - Excellent!");
}
else if (score >= 80)  // Second check if first is false
{
    Console.WriteLine("Grade: B - Great job!");
}
else if (score >= 70)  // Third check
{
    Console.WriteLine("Grade: C - Good work!");
}
else  // If all checks are false
{
    Console.WriteLine("Keep practicing!");
}

// Multiple conditions
string weather = "sunny";
int temperature = 25;

if (weather == "sunny" && temperature > 20)  // AND: both must be true
{
    Console.WriteLine("Perfect day for the beach!");
}

if (weather == "rainy" || temperature < 10)  // OR: at least one must be true
{
    Console.WriteLine("Stay inside and code!");
}`}
                  language="csharp"
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
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="text-lg">Logical Operators</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-1 text-sm">
                      <div><code>&&</code> → AND (both conditions)</div>
                      <div><code>||</code> → OR (at least one)</div>
                      <div><code>!</code> → NOT (opposite)</div>
                      <div className="mt-2 font-bold">Examples:</div>
                      <div><code>age &gt;= 13 && age &lt;= 19</code></div>
                      <div><code>day == "Sat" || day == "Sun"</code></div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Section 2: Loops */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Part 2: Loops - Repeat, Repeat, Repeat!</h3>

                <div className="bg-muted p-4 rounded-lg">
                  <p>
                    Loops let us repeat code without writing it multiple times. Perfect for countdowns, patterns, and processing lists!
                  </p>
                </div>

                <CodeEditor
                  title="For Loop - When You Know How Many Times"
                  initialCode={`// Count from 1 to 5
for (int i = 1; i <= 5; i++)  // Start at 1, go while <= 5, add 1 each time
{
    Console.WriteLine("Count: " + i);
}

// Countdown from 10 to 1
for (int i = 10; i >= 1; i--)  // Start at 10, go while >= 1, subtract 1
{
    Console.WriteLine("T-minus " + i + "...");
}
Console.WriteLine("BLAST OFF! 🚀");

// Skip counting by 2s
for (int i = 0; i <= 20; i += 2)  // Add 2 each time instead of 1
{
    Console.WriteLine("Even number: " + i);
}

// Drawing a pattern
for (int i = 1; i <= 5; i++)
{
    // Print stars equal to the current number
    for (int j = 1; j <= i; j++)
    {
        Console.Write("*");  // Write (not WriteLine) stays on same line
    }
    Console.WriteLine();  // Move to next line
}
// Output:
// *
// **
// ***
// ****
// *****`}
                  language="csharp"
                />

                <CodeEditor
                  title="While Loop - When You Don't Know How Many Times"
                  initialCode={`// Keep asking until they say the magic word
string password = "";

while (password != "opensesame")  // Keep going while password is wrong
{
    Console.WriteLine("Enter the password:");
    password = Console.ReadLine();

    if (password != "opensesame")
    {
        Console.WriteLine("Wrong! Try again.");
    }
}
Console.WriteLine("Access granted! Welcome!");

// Game HP example
int playerHP = 100;
int damage = 15;

Console.WriteLine("Player HP: " + playerHP);

while (playerHP > 0)  // Keep going while player is alive
{
    Console.WriteLine("Monster attacks for " + damage + " damage!");
    playerHP = playerHP - damage;  // Or: playerHP -= damage;

    if (playerHP > 0)
    {
        Console.WriteLine("Player HP: " + playerHP);
    }
    else
    {
        Console.WriteLine("Game Over!");
    }
}

// Be careful of infinite loops!
// This would run forever:
// while (true) { Console.WriteLine("Help!"); }
// Always make sure your loop can end!`}
                  language="csharp"
                />

                <div className="bg-yellow-50 border-2 border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">🎮 Challenge: FizzBuzz Game</h4>
                  <p>Write a loop from 1 to 20 that:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Prints "Fizz" if the number is divisible by 3</li>
                    <li>Prints "Buzz" if divisible by 5</li>
                    <li>Prints "FizzBuzz" if divisible by both</li>
                    <li>Otherwise prints the number</li>
                  </ul>
                  <p className="mt-2 text-sm">Hint: Use the modulo operator (%) to check divisibility!</p>
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
                  Learn About Methods
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Module 3: Methods */}
      {currentModule === 3 && (
        <div className="space-y-6 animate-bounce-in">
          <Card className="shadow-fun">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="w-6 h-6 text-green-500" />
                Module 3: Methods - Reusable Code Magic
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">What Are Methods?</h3>

                <div className="bg-muted p-4 rounded-lg">
                  <p className="mb-2">
                    <strong>Methods</strong> are like recipes or instructions you can use over and over!
                  </p>
                  <p>
                    Instead of writing the same code multiple times, put it in a method and call it whenever needed.
                  </p>
                </div>

                <CodeEditor
                  title="Creating Your First Methods"
                  initialCode={`// Method that doesn't return anything (void)
static void SayHello()  // 'void' means no return value
{
    Console.WriteLine("Hello there!");
    Console.WriteLine("Welcome to C#!");
}

// Method with parameters (inputs)
static void GreetPerson(string name)  // 'name' is the parameter
{
    Console.WriteLine("Hello, " + name + "!");
    Console.WriteLine("How are you today?");
}

// Method that returns a value
static int AddNumbers(int a, int b)  // 'int' means it returns an integer
{
    int sum = a + b;
    return sum;  // 'return' sends the value back
}

// Method with multiple parameters and return
static double CalculateAverage(double num1, double num2, double num3)
{
    double total = num1 + num2 + num3;
    double average = total / 3;
    return average;
}

// Using our methods (in Main method)
static void Main()
{
    // Call the simple method
    SayHello();  // Prints the messages

    // Call with parameter
    GreetPerson("Alex");  // Prints personalized greeting
    GreetPerson("Sarah");

    // Call and use return value
    int result = AddNumbers(5, 3);  // result = 8
    Console.WriteLine("5 + 3 = " + result);

    // Direct use of return value
    Console.WriteLine("10 + 20 = " + AddNumbers(10, 20));

    // Calculate average
    double avg = CalculateAverage(85, 92, 78);
    Console.WriteLine("Average score: " + avg);
}`}
                  language="csharp"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="border-green-200 bg-green-50">
                    <CardHeader>
                      <CardTitle className="text-lg">Method Parts</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <div><strong>static:</strong> Can be called directly</div>
                      <div><strong>Return type:</strong> void, int, string, etc.</div>
                      <div><strong>Name:</strong> What you call it</div>
                      <div><strong>Parameters:</strong> Input values (optional)</div>
                      <div><strong>Body:</strong> The code inside { }</div>
                      <div><strong>Return:</strong> Send value back (if not void)</div>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="text-lg">Why Use Methods?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <div>♻️ Reuse code without copying</div>
                      <div>📦 Organize code into chunks</div>
                      <div>🐛 Easier to fix bugs</div>
                      <div>📖 Makes code more readable</div>
                      <div>🧪 Test pieces separately</div>
                      <div>🎯 Focus on one task at a time</div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Practical Method Examples</h3>

                <CodeEditor
                  title="Game Methods"
                  initialCode={`// Method for game damage calculation
static int CalculateDamage(int baseDamage, int level, bool isCritical)
{
    int damage = baseDamage + (level * 2);  // Base + level bonus

    if (isCritical)
    {
        damage = damage * 2;  // Double damage for critical hits!
        Console.WriteLine("CRITICAL HIT! 💥");
    }

    return damage;
}

// Method to check if player wins
static bool CheckWin(int playerScore, int enemyScore)
{
    if (playerScore > enemyScore)
    {
        Console.WriteLine("YOU WIN! 🏆");
        return true;
    }
    else
    {
        Console.WriteLine("You lose... Try again!");
        return false;
    }
}

// Method to generate a random number (for games)
static int RollDice(int sides)
{
    Random random = new Random();
    int roll = random.Next(1, sides + 1);  // Random from 1 to sides
    Console.WriteLine("You rolled a " + roll + "!");
    return roll;
}

// Method overloading - same name, different parameters
static void PrintMessage(string message)
{
    Console.WriteLine(message);
}

static void PrintMessage(string message, int times)
{
    for (int i = 0; i < times; i++)
    {
        Console.WriteLine(message);
    }
}

// Using the methods
static void Main()
{
    // Calculate some damage
    int damage = CalculateDamage(10, 5, false);  // 10 + (5*2) = 20
    Console.WriteLine("Damage dealt: " + damage);

    // Critical hit!
    damage = CalculateDamage(10, 5, true);  // (10 + 10) * 2 = 40
    Console.WriteLine("Damage dealt: " + damage);

    // Check winner
    CheckWin(100, 80);  // Player wins!

    // Roll a 6-sided dice
    int myRoll = RollDice(6);

    // Overloaded methods
    PrintMessage("Hello!");  // Prints once
    PrintMessage("Yay!", 3);  // Prints 3 times
}`}
                  language="csharp"
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
                  Discover Object-Oriented Programming
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Module 4: Object-Oriented Programming */}
      {currentModule === 4 && (
        <div className="space-y-6 animate-bounce-in">
          <Card className="shadow-fun">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Terminal className="w-6 h-6 text-orange-500" />
                Module 4: Object-Oriented Programming
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Classes and Objects - Building Blocks</h3>

                <div className="bg-muted p-4 rounded-lg">
                  <p className="mb-2">
                    A <strong>class</strong> is like a blueprint or cookie cutter. An <strong>object</strong> is what you make from it!
                  </p>
                  <p>
                    Think of it: A "Dog" class is the blueprint. Your pet "Buddy" is an object made from that blueprint!
                  </p>
                </div>

                <CodeEditor
                  title="Creating Your First Class"
                  initialCode={`// Define a class (blueprint)
public class Player  // 'class' keyword creates a new type
{
    // Properties (characteristics)
    public string Name;      // Player's name
    public int Health;       // Current health points
    public int Level;        // Player level
    public int Experience;   // Experience points

    // Constructor - special method that creates new objects
    public Player(string playerName)  // Runs when we create a new Player
    {
        Name = playerName;
        Health = 100;      // Start with 100 HP
        Level = 1;         // Start at level 1
        Experience = 0;    // Start with 0 XP

        Console.WriteLine(Name + " has entered the game!");
    }

    // Methods (actions the object can do)
    public void TakeDamage(int damage)
    {
        Health -= damage;  // Reduce health
        Console.WriteLine(Name + " took " + damage + " damage!");
        Console.WriteLine("Health: " + Health + "/" + "100");

        if (Health <= 0)
        {
            Console.WriteLine(Name + " has been defeated!");
        }
    }

    public void Heal(int amount)
    {
        Health += amount;
        if (Health > 100) Health = 100;  // Cap at max health

        Console.WriteLine(Name + " healed for " + amount + " HP!");
        Console.WriteLine("Health: " + Health + "/" + "100");
    }

    public void GainExperience(int xp)
    {
        Experience += xp;
        Console.WriteLine(Name + " gained " + xp + " XP!");

        // Level up every 100 XP
        if (Experience >= 100)
        {
            Level++;
            Experience = 0;
            Health = 100;  // Full heal on level up!
            Console.WriteLine("LEVEL UP! " + Name + " is now level " + Level + "!");
        }
    }
}

// Using the class (in Main method)
static void Main()
{
    // Create objects from the class
    Player hero = new Player("Knight");     // Create a player named Knight
    Player villain = new Player("Dragon");  // Create a player named Dragon

    // Use object methods
    hero.TakeDamage(30);    // Knight takes damage
    hero.Heal(20);          // Knight heals
    hero.GainExperience(50); // Knight gains XP

    villain.TakeDamage(40);  // Dragon takes damage

    // Access properties
    Console.WriteLine(hero.Name + " is level " + hero.Level);
    Console.WriteLine(villain.Name + " has " + villain.Health + " HP");
}`}
                  language="csharp"
                />

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="border-orange-200 bg-orange-50">
                    <CardHeader>
                      <CardTitle className="text-base">Class</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <p>The blueprint or template</p>
                      <p className="mt-2 font-mono">class Dog { }</p>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200 bg-purple-50">
                    <CardHeader>
                      <CardTitle className="text-base">Object</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <p>An instance of a class</p>
                      <p className="mt-2 font-mono">Dog buddy = new Dog();</p>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200 bg-green-50">
                    <CardHeader>
                      <CardTitle className="text-base">Constructor</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <p>Initializes new objects</p>
                      <p className="mt-2 font-mono">public Dog(name) { }</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">More Complex Classes</h3>

                <CodeEditor
                  title="Enemy Class with Inheritance"
                  initialCode={`// Base class for all characters
public class Character
{
    public string Name;
    public int Health;
    public int AttackPower;

    public Character(string name, int health, int attack)
    {
        Name = name;
        Health = health;
        AttackPower = attack;
    }

    public virtual void Attack(Character target)  // 'virtual' allows override
    {
        Console.WriteLine(Name + " attacks " + target.Name + "!");
        target.Health -= AttackPower;
        Console.WriteLine(target.Name + " takes " + AttackPower + " damage!");
    }
}

// Enemy class inherits from Character
public class Enemy : Character  // ': Character' means inherits from
{
    public int RewardXP;  // Extra property for enemies

    public Enemy(string name, int health, int attack, int xp)
        : base(name, health, attack)  // Call parent constructor
    {
        RewardXP = xp;
    }

    public override void Attack(Character target)  // Override parent method
    {
        Console.WriteLine(Name + " growls menacingly!");
        base.Attack(target);  // Call parent's attack method
    }
}

// Boss class - special type of Enemy
public class Boss : Enemy
{
    public string SpecialAbility;

    public Boss(string name, int health, int attack, int xp, string ability)
        : base(name, health, attack, xp)
    {
        SpecialAbility = ability;
    }

    public void UseSpecialAbility()
    {
        Console.WriteLine(Name + " uses " + SpecialAbility + "!");
        Console.WriteLine("All heroes take 10 damage!");
    }
}

// Item class
public class Item
{
    public string Name;
    public string Type;
    public int Value;

    public Item(string name, string type, int value)
    {
        Name = name;
        Type = type;
        Value = value;
    }

    public void Use(Player player)
    {
        if (Type == "Potion")
        {
            player.Heal(Value);
            Console.WriteLine(player.Name + " used " + Name + "!");
        }
        else if (Type == "PowerUp")
        {
            // Increase attack power
            Console.WriteLine(player.Name + " gained " + Value + " attack power!");
        }
    }
}`}
                  language="csharp"
                />

                <div className="bg-yellow-50 border-2 border-yellow-200 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">🎓 Key OOP Concepts</h4>
                  <ul className="space-y-2">
                    <li><strong>Encapsulation:</strong> Keeping data and methods together in a class</li>
                    <li><strong>Inheritance:</strong> Child classes get features from parent classes</li>
                    <li><strong>Properties:</strong> Variables that belong to an object</li>
                    <li><strong>Methods:</strong> Functions that belong to an object</li>
                  </ul>
                </div>
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
                  Build Your RPG Game!
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
                Module 5: Final Project - Console RPG Game
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-2">🎮 Build Your Own RPG Adventure! 🎮</h2>
                <p>Time to use everything you've learned to create an epic game!</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">The Complete RPG Game</h3>

                <div className="bg-muted p-4 rounded-lg">
                  <p className="mb-2">
                    This game combines everything we've learned:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Variables for storing game data</li>
                    <li>If/else for making decisions</li>
                    <li>Loops for game rounds</li>
                    <li>Methods for game actions</li>
                    <li>Classes for Player and Enemy</li>
                  </ul>
                </div>

                <CodeEditor
                  title="Epic RPG Adventure - Complete Game"
                  initialCode={`using System;

// Player class
public class Player
{
    public string Name;
    public int Health;
    public int MaxHealth;
    public int AttackPower;
    public int Level;
    public int Gold;
    public int Potions;

    public Player(string name)
    {
        Name = name;
        MaxHealth = 100;
        Health = MaxHealth;
        AttackPower = 10;
        Level = 1;
        Gold = 0;
        Potions = 3;
    }

    public void Attack(Enemy enemy)
    {
        Random rand = new Random();
        int damage = rand.Next(AttackPower - 2, AttackPower + 3);

        Console.WriteLine("⚔️ " + Name + " attacks for " + damage + " damage!");
        enemy.Health -= damage;
    }

    public void UsePotion()
    {
        if (Potions > 0)
        {
            int healAmount = 30;
            Health = Math.Min(Health + healAmount, MaxHealth);
            Potions--;
            Console.WriteLine("🧪 Used potion! Healed 30 HP. (" + Potions + " potions left)");
            Console.WriteLine("❤️ Health: " + Health + "/" + MaxHealth);
        }
        else
        {
            Console.WriteLine("❌ No potions left!");
        }
    }

    public void LevelUp()
    {
        Level++;
        MaxHealth += 20;
        Health = MaxHealth;
        AttackPower += 5;
        Console.WriteLine("🎉 LEVEL UP! You are now level " + Level + "!");
        Console.WriteLine("📈 Max Health: +" + 20 + ", Attack: +" + 5);
    }
}

// Enemy class
public class Enemy
{
    public string Name;
    public int Health;
    public int AttackPower;
    public int GoldReward;

    public Enemy(string name, int health, int attack, int gold)
    {
        Name = name;
        Health = health;
        AttackPower = attack;
        GoldReward = gold;
    }

    public void Attack(Player player)
    {
        Random rand = new Random();
        int damage = rand.Next(AttackPower - 2, AttackPower + 3);

        Console.WriteLine("👹 " + Name + " attacks for " + damage + " damage!");
        player.Health -= damage;
    }
}

// Main game class
class RPGGame
{
    static Player player;
    static Random random = new Random();

    static void Main()
    {
        Console.WriteLine("╔════════════════════════════════════╗");
        Console.WriteLine("║     WELCOME TO C# RPG ADVENTURE    ║");
        Console.WriteLine("╚════════════════════════════════════╝");
        Console.WriteLine();

        // Get player name
        Console.Write("Enter your hero's name: ");
        string heroName = Console.ReadLine();
        player = new Player(heroName);

        Console.WriteLine("\nWelcome, " + player.Name + "!");
        Console.WriteLine("Your quest begins now...\n");

        // Game loop
        bool gameRunning = true;
        int battlesWon = 0;

        while (gameRunning && player.Health > 0)
        {
            Console.WriteLine("\n═══════════════════════════");
            Console.WriteLine("What would you like to do?");
            Console.WriteLine("1. 🗡️  Battle an enemy");
            Console.WriteLine("2. 🛍️  Visit the shop");
            Console.WriteLine("3. 📊 Check stats");
            Console.WriteLine("4. 🚪 Quit game");
            Console.Write("Choice (1-4): ");

            string choice = Console.ReadLine();

            switch (choice)
            {
                case "1":
                    Battle();
                    battlesWon++;

                    // Level up every 3 battles
                    if (battlesWon % 3 == 0 && player.Health > 0)
                    {
                        player.LevelUp();
                    }
                    break;

                case "2":
                    Shop();
                    break;

                case "3":
                    ShowStats();
                    break;

                case "4":
                    gameRunning = false;
                    break;

                default:
                    Console.WriteLine("Invalid choice!");
                    break;
            }
        }

        // Game over
        if (player.Health <= 0)
        {
            Console.WriteLine("\n💀 GAME OVER 💀");
            Console.WriteLine("You were defeated after " + battlesWon + " battles!");
        }
        else
        {
            Console.WriteLine("\n👋 Thanks for playing!");
            Console.WriteLine("You won " + battlesWon + " battles!");
        }
    }

    static void Battle()
    {
        // Create random enemy
        string[] enemyNames = { "Goblin", "Orc", "Troll", "Dragon", "Skeleton" };
        string enemyName = enemyNames[random.Next(enemyNames.Length)];

        int enemyHealth = 30 + (player.Level * 10);
        int enemyAttack = 5 + (player.Level * 2);
        int goldReward = 10 + random.Next(5, 15);

        Enemy enemy = new Enemy(enemyName, enemyHealth, enemyAttack, goldReward);

        Console.WriteLine("\n⚔️ BATTLE START ⚔️");
        Console.WriteLine("A wild " + enemy.Name + " appears!");

        // Battle loop
        while (player.Health > 0 && enemy.Health > 0)
        {
            Console.WriteLine("\n-------------------");
            Console.WriteLine("Your HP: " + player.Health + "/" + player.MaxHealth);
            Console.WriteLine(enemy.Name + " HP: " + enemy.Health);
            Console.WriteLine("\n1. Attack");
            Console.WriteLine("2. Use Potion (" + player.Potions + " left)");
            Console.Write("Action: ");

            string action = Console.ReadLine();

            if (action == "1")
            {
                player.Attack(enemy);
            }
            else if (action == "2")
            {
                player.UsePotion();
            }

            // Enemy turn (if still alive)
            if (enemy.Health > 0)
            {
                enemy.Attack(player);
            }
        }

        // Battle results
        if (player.Health > 0)
        {
            Console.WriteLine("\n🎉 VICTORY! 🎉");
            Console.WriteLine("You defeated the " + enemy.Name + "!");
            Console.WriteLine("💰 Earned " + enemy.GoldReward + " gold!");
            player.Gold += enemy.GoldReward;
        }
    }

    static void Shop()
    {
        Console.WriteLine("\n🏪 WELCOME TO THE SHOP 🏪");
        Console.WriteLine("Your Gold: " + player.Gold);
        Console.WriteLine("\n1. Health Potion - 20 gold");
        Console.WriteLine("2. Attack Upgrade - 50 gold");
        Console.WriteLine("3. Exit shop");
        Console.Write("Choice: ");

        string choice = Console.ReadLine();

        if (choice == "1" && player.Gold >= 20)
        {
            player.Gold -= 20;
            player.Potions++;
            Console.WriteLine("✅ Bought a potion! You now have " + player.Potions + " potions.");
        }
        else if (choice == "2" && player.Gold >= 50)
        {
            player.Gold -= 50;
            player.AttackPower += 3;
            Console.WriteLine("✅ Attack increased by 3!");
        }
        else if (choice == "3")
        {
            Console.WriteLine("Come back soon!");
        }
        else
        {
            Console.WriteLine("❌ Not enough gold or invalid choice!");
        }
    }

    static void ShowStats()
    {
        Console.WriteLine("\n📊 HERO STATS 📊");
        Console.WriteLine("Name: " + player.Name);
        Console.WriteLine("Level: " + player.Level);
        Console.WriteLine("Health: " + player.Health + "/" + player.MaxHealth);
        Console.WriteLine("Attack Power: " + player.AttackPower);
        Console.WriteLine("Gold: " + player.Gold);
        Console.WriteLine("Potions: " + player.Potions);
    }
}`}
                  language="csharp"
                />

                <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg">
                  <h4 className="font-bold text-xl mb-4">🎮 Game Features Explained</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-bold text-green-600">Player Features:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Health system with max health</li>
                        <li>Attack with random damage range</li>
                        <li>Level up system</li>
                        <li>Gold currency</li>
                        <li>Potion inventory</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-blue-600">Game Mechanics:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Turn-based combat</li>
                        <li>Random enemy generation</li>
                        <li>Shop system</li>
                        <li>Progressive difficulty</li>
                        <li>Victory rewards</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">🚀 Challenge Extensions</h3>

                  <div className="bg-yellow-50 border-2 border-yellow-200 p-4 rounded-lg">
                    <p className="font-bold mb-2">Make it your own! Try adding:</p>
                    <ul className="list-decimal list-inside space-y-2">
                      <li><strong>New enemy types:</strong> Add wizards, zombies, or ninjas</li>
                      <li><strong>Critical hits:</strong> 10% chance for double damage</li>
                      <li><strong>Different weapons:</strong> Swords, bows, magic staffs</li>
                      <li><strong>Boss battles:</strong> Special enemies with unique abilities</li>
                      <li><strong>Save system:</strong> Save and load game progress</li>
                      <li><strong>Quests:</strong> Special missions for bonus rewards</li>
                      <li><strong>Armor system:</strong> Reduce incoming damage</li>
                      <li><strong>Magic spells:</strong> Fireball, heal, shield</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-lg">
                    <Trophy className="w-12 h-12 mx-auto mb-2" />
                    <h3 className="text-2xl font-bold mb-2">🎉 Congratulations! 🎉</h3>
                    <p className="text-lg">
                      You've completed the C# Programming course and built your own RPG game!
                    </p>
                    <p className="mt-2">
                      You now know variables, control flow, methods, and object-oriented programming!
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
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Quiz Section */}
      {showQuiz && (
        <div className="space-y-6 animate-bounce-in">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-primary">🎯 Final Quiz: Test Your C# Knowledge!</h2>
            <p className="text-muted-foreground">
              Question {quizIndex + 1} of {csharpQuiz.length}
            </p>
            <Progress value={((quizIndex + 1) / csharpQuiz.length) * 100} className="w-full max-w-md mx-auto" />
          </div>

          <QuizCard
            quiz={csharpQuiz[quizIndex]}
            onComplete={handleQuizComplete}
            currentIndex={quizIndex}
            totalQuestions={csharpQuiz.length}
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

export default CSharpLesson;