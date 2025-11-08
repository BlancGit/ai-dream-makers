import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuizCard } from "@/components/QuizCard";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GitBranch, Square, Diamond, Circle, ArrowRight, CheckCircle, Gamepad2, Code, Map } from "lucide-react";
import { Link } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";

const lesson4Quiz = [
  {
    question: "What is a flowchart?",
    options: [
      "A type of graph for data analysis",
      "A graphical representation of algorithms or processes",
      "A programming language",
      "A type of neural network"
    ],
    correctAnswer: 1,
    explanation: "A flowchart is a graphical representation of algorithms or processes that visualizes task flow!"
  },
  {
    question: "Which shape represents a decision point in flowcharts?",
    options: [
      "Rectangle",
      "Circle",
      "Diamond/Rhombus",
      "Triangle"
    ],
    correctAnswer: 2,
    explanation: "Diamond or rhombus shapes represent decision points (if-then statements) in flowcharts!"
  },
  {
    question: "What do oval shapes represent in flowcharts?",
    options: [
      "Loops",
      "Start and End points",
      "Decisions",
      "Process steps"
    ],
    correctAnswer: 1,
    explanation: "Oval shapes mark the Start and End points of a flowchart!"
  },
  {
    question: "What shape is used for process/action steps?",
    options: [
      "Diamond",
      "Oval",
      "Rectangle",
      "Parallelogram"
    ],
    correctAnswer: 2,
    explanation: "Rectangles represent process or action steps in flowcharts!"
  },
  {
    question: "Why are flowcharts useful for game development?",
    options: [
      "They make games run faster",
      "They help visualize decision trees and game logic",
      "They create graphics automatically",
      "They write code for you"
    ],
    correctAnswer: 1,
    explanation: "Flowcharts help visualize decision trees, branching narratives, and game logic before coding!"
  },
  {
    question: "Which symbol represents a loop in flowcharts?",
    options: [
      "Diamond",
      "Circle",
      "Hexagon or special loop symbol",
      "Square"
    ],
    correctAnswer: 2,
    explanation: "Loops are typically represented by hexagons or special loop symbols that show repeated actions!"
  },
  {
    question: "What should you do before creating a flowchart?",
    options: [
      "Start drawing immediately",
      "Define the problem and understand the process",
      "Choose random symbols",
      "Copy another flowchart"
    ],
    correctAnswer: 1,
    explanation: "Always define the problem and understand what process you're mapping before creating a flowchart!"
  },
  {
    question: "In game development, what might a decision diamond contain?",
    options: [
      "Graphics specifications",
      "Player choice or game condition",
      "Sound effects",
      "Character names"
    ],
    correctAnswer: 1,
    explanation: "Decision diamonds contain player choices like 'Fight or Run?' or game conditions like 'Health > 0?'"
  },
  {
    question: "What is the purpose of connecting arrows in flowcharts?",
    options: [
      "To make it look pretty",
      "To show the flow and direction of the process",
      "To connect unrelated elements",
      "To replace text descriptions"
    ],
    correctAnswer: 1,
    explanation: "Arrows show the flow and direction, guiding you through the logical sequence of steps!"
  },
  {
    question: "Which flowchart element would represent 'Player wins the game'?",
    options: [
      "Diamond (decision)",
      "Rectangle (process)",
      "Oval (start/end)",
      "Hexagon (loop)"
    ],
    correctAnswer: 2,
    explanation: "Game endings like 'Player wins' are represented by oval shapes as they mark end points!"
  },
  {
    question: "What makes a good flowchart?",
    options: [
      "Lots of colors and decorations",
      "Clear, simple, and easy to follow",
      "As many symbols as possible",
      "Complex interconnected paths"
    ],
    correctAnswer: 1,
    explanation: "Good flowcharts are clear, simple, and easy to follow - they communicate the process effectively!"
  },
  {
    question: "In a game flowchart, what would 'Check if player has key' be?",
    options: [
      "Start/End oval",
      "Process rectangle",
      "Decision diamond",
      "Loop hexagon"
    ],
    correctAnswer: 2,
    explanation: "'Check if player has key' is a condition that leads to different outcomes, so it's a decision diamond!"
  },
  {
    question: "How should you handle complex game logic in flowcharts?",
    options: [
      "Put everything in one huge flowchart",
      "Break it down into smaller, manageable flowcharts",
      "Avoid using flowcharts for complex logic",
      "Use only text descriptions"
    ],
    correctAnswer: 1,
    explanation: "Break complex game logic into smaller, focused flowcharts that are easier to understand and debug!"
  },
  {
    question: "What does a flowchart help you do before programming?",
    options: [
      "Write perfect code immediately",
      "Plan and visualize the logic flow",
      "Choose programming languages",
      "Design graphics"
    ],
    correctAnswer: 1,
    explanation: "Flowcharts help you plan and visualize the logic flow, making programming much easier and less error-prone!"
  },
  {
    question: "Which scenario best fits a loop in a game flowchart?",
    options: [
      "Player chooses a character",
      "Game ends",
      "Enemy keeps attacking until defeated",
      "Player enters name"
    ],
    correctAnswer: 2,
    explanation: "Repeated actions like 'Enemy keeps attacking until defeated' are perfect examples of loops in game logic!"
  },
  {
    question: "What should each symbol in your flowchart have?",
    options: [
      "Bright colors",
      "Clear, descriptive text",
      "Complex mathematical formulas",
      "Multiple arrows pointing everywhere"
    ],
    correctAnswer: 1,
    explanation: "Every symbol should have clear, descriptive text that explains exactly what happens at that step!"
  },
  {
    question: "How do flowcharts help with debugging games?",
    options: [
      "They automatically fix bugs",
      "They help trace through logic step by step",
      "They prevent all bugs from happening",
      "They make code run faster"
    ],
    correctAnswer: 1,
    explanation: "Flowcharts help you trace through the logic step by step to find where problems occur!"
  },
  {
    question: "What is the best way to start creating a game flowchart?",
    options: [
      "Begin with the most complex part",
      "Start with the main game flow from beginning to end",
      "Draw random symbols first",
      "Copy someone else's flowchart"
    ],
    correctAnswer: 1,
    explanation: "Start with the main game flow from beginning to end, then add details and sub-processes later!"
  },
  {
    question: "In flowcharts, what happens when you reach a decision diamond?",
    options: [
      "The process always continues straight",
      "The process splits into different paths based on the condition",
      "The flowchart ends",
      "A loop automatically starts"
    ],
    correctAnswer: 1,
    explanation: "Decision diamonds split the process into different paths - like 'if yes, go left; if no, go right!'"
  },
  {
    question: "Why is it important to test your flowchart logic?",
    options: [
      "To make it look professional",
      "To ensure all paths work and make sense",
      "To add more symbols",
      "To make it more colorful"
    ],
    correctAnswer: 1,
    explanation: "Testing ensures all logical paths work correctly and players can't get stuck in impossible situations!"
  }
];

const flowchartBlocks = [
  {
    name: "Start/End",
    shape: Circle,
    color: "text-green-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    description: "Marks the beginning or ending of your flowchart",
    example: "START: Game begins, END: You win!"
  },
  {
    name: "Process/Action",
    shape: Square,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    description: "An action or step in your process",
    example: "Walk to school, Pick up item, Save game"
  },
  {
    name: "Decision",
    shape: Diamond,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    description: "A choice point with Yes/No or multiple options",
    example: "Is it raining? Choose path A or B?"
  },
  {
    name: "Loop",
    shape: GitBranch,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    description: "Repeat actions until a condition is met",
    example: "Keep trying until password is correct"
  }
];

const gameScenario = {
  title: "John's Late Day",
  description: "Help John get to his programming class on time!",
  startSituation: "John wakes up late and the school bus has already left. He needs to get to programming class!",
  choices: [
    {
      id: 1,
      option: "Ask mom for a ride",
      outcome: "Mom drives you to school",
      result: "SUCCESS! You arrive on time and get an A+",
      isGood: true
    },
    {
      id: 2,
      option: "Walk to class",
      consequence: "Construction blocks the path",
      outcome: "You have to take a long detour",
      result: "LATE! You miss the quiz and get an F",
      isGood: false
    },
    {
      id: 3,
      option: "Wait for next bus",
      consequence: "Bus is full of students",
      outcome: "You can't get on the bus",
      result: "VERY LATE! You miss the entire class",
      isGood: false
    }
  ]
};

export default function Lesson4() {
  const [currentSection, setCurrentSection] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [completedQuizzes, setCompletedQuizzes] = useState(0);
  const [lessonComplete, setLessonComplete] = useState(false);
  const [selectedBlock, setSelectedBlock] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [gameStep, setGameStep] = useState<'start' | 'choice' | 'result'>('start');
  const [completedSections, setCompletedSections] = useState<number[]>([]);

  const sections = [
    "What are Flowcharts?",
    "Flowchart Blocks",
    "Game Planning",
    "Decision Trees",
    "Practice Scenario"
  ];

  const progress = ((completedSections.length) / sections.length) * 100;

  const markSectionComplete = (section: number) => {
    if (!completedSections.includes(section)) {
      setCompletedSections([...completedSections, section]);
    }
  };

  const handleQuizComplete = (correct: boolean) => {
    if (correct) {
      setCompletedQuizzes(prev => prev + 1);
    }

    if (quizIndex < lesson4Quiz.length - 1) {
      setQuizIndex(prev => prev + 1);
    } else {
      setLessonComplete(true);
    }
  };

  const resetGame = () => {
    setGameStep('start');
    setSelectedChoice(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-20">
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 text-center">
          Lesson 4: Flowcharts and Game Design
        </h1>
        <Progress value={progress} className="h-2" />
        <p className="text-sm font-medium text-muted-foreground mt-4 text-center">
          {completedSections.length} of {sections.length} sections completed
        </p>
      </div>

      <Tabs defaultValue="learn" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="learn">Learn</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
        </TabsList>

        <TabsContent value="learn" className="space-y-6">
          <div className="flex gap-2 mb-6 flex-wrap">
            {sections.map((section, index) => (
              <Button
                key={index}
                variant={currentSection === index ? "default" : completedSections.includes(index) ? "secondary" : "outline"}
                size="sm"
                onClick={() => setCurrentSection(index)}
                className="relative"
              >
                {section}
                {completedSections.includes(index) && (
                  <CheckCircle className="w-4 h-4 ml-2 text-green-500" />
                )}
              </Button>
            ))}
          </div>

          {currentSection === 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Map className="w-6 h-6 text-blue-500" />
                  What are Flowcharts?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-blue-200 bg-blue-50">
                  <AlertDescription>
                    Flowcharts are like maps for your code! They show the path your program takes step by step.
                  </AlertDescription>
                </Alert>

                <div className="bg-accent p-6 rounded-lg">
                  <h3 className="font-semibold mb-4">Why Use Flowcharts?</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="border-blue-200">
                      <CardContent className="pt-6">
                        <h4 className="font-medium mb-2">📊 Visualize Logic</h4>
                        <p className="text-sm">See how your game or program flows from start to finish</p>
                      </CardContent>
                    </Card>

                    <Card className="border-purple-200">
                      <CardContent className="pt-6">
                        <h4 className="font-medium mb-2">🎮 Plan Games</h4>
                        <p className="text-sm">Design decision trees and multiple endings</p>
                      </CardContent>
                    </Card>

                    <Card className="border-green-200">
                      <CardContent className="pt-6">
                        <h4 className="font-medium mb-2">🐛 Find Problems</h4>
                        <p className="text-sm">Spot issues before you start coding</p>
                      </CardContent>
                    </Card>

                    <Card className="border-orange-200">
                      <CardContent className="pt-6">
                        <h4 className="font-medium mb-2">👥 Share Ideas</h4>
                        <p className="text-sm">Help others understand your thinking</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Card className="bg-yellow-50 border-yellow-200">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">Real-World Example:</h4>
                    <p className="text-sm">
                      Imagine making a flowchart for getting ready for school:
                      START → Wake up → Eat breakfast → Is it raining? →
                      If YES: Take umbrella → If NO: Continue →
                      Go to school → END
                    </p>
                  </CardContent>
                </Card>

                <Button onClick={() => { markSectionComplete(0); setCurrentSection(1); }}>
                  Learn About Blocks <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}

          {currentSection === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Diamond className="w-6 h-6 text-purple-500" />
                  Flowchart Blocks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Each shape in a flowchart has a special meaning. Click on each block to learn more!
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {flowchartBlocks.map((block, index) => (
                    <Card
                      key={index}
                      className={`cursor-pointer transition-all hover:shadow-lg ${
                        selectedBlock === index ? 'ring-2 ring-blue-500' : ''
                      } ${block.borderColor}`}
                      onClick={() => setSelectedBlock(index)}
                    >
                      <CardContent className={`pt-6 ${block.bgColor}`}>
                        <div className="flex items-start gap-3">
                          <block.shape className={`w-8 h-8 ${block.color}`} />
                          <div className="flex-1">
                            <h3 className="font-semibold">{block.name}</h3>
                            <p className="text-sm text-gray-600 mt-1">{block.description}</p>
                            <p className="text-xs text-gray-500 mt-2 italic">
                              Example: {block.example}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Alert>
                  <AlertDescription>
                    💡 <strong>Remember:</strong> Arrows connect the blocks to show the flow direction!
                  </AlertDescription>
                </Alert>

                <Button onClick={() => { markSectionComplete(1); setCurrentSection(2); }}>
                  Plan a Game <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}

          {currentSection === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gamepad2 className="w-6 h-6 text-green-500" />
                  Game Planning with Flowcharts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-green-200 bg-green-50">
                  <AlertDescription>
                    Before coding a game, use flowcharts to map out all possible paths and endings!
                  </AlertDescription>
                </Alert>

                <div className="bg-accent p-6 rounded-2xl">
                  <h3 className="font-semibold mb-4">Steps to Plan a Game:</h3>
                  <ol className="space-y-3">
                    <li className="flex gap-3">
                      <span className="font-bold text-green-600">1.</span>
                      <div>
                        <strong>Define the Start</strong>
                        <p className="text-sm text-gray-600">What situation does the player begin in?</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-blue-600">2.</span>
                      <div>
                        <strong>Create Decision Points</strong>
                        <p className="text-sm text-gray-600">What choices can the player make?</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-purple-600">3.</span>
                      <div>
                        <strong>Map Consequences</strong>
                        <p className="text-sm text-gray-600">What happens after each choice?</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-orange-600">4.</span>
                      <div>
                        <strong>Design Endings</strong>
                        <p className="text-sm text-gray-600">How does each path conclude?</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <Card className="border-purple-200">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">🎯 Key Principle:</h4>
                    <p className="text-sm">
                      Every decision should have consequences! This makes your game interesting and
                      teaches players that their choices matter.
                    </p>
                  </CardContent>
                </Card>

                <Button onClick={() => { markSectionComplete(2); setCurrentSection(3); }}>
                  See Decision Trees <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}

          {currentSection === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="w-6 h-6 text-orange-500" />
                  Decision Trees
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-accent p-6 rounded-2xl">
                  <h3 className="font-semibold mb-4">What is a Decision Tree?</h3>
                  <p className="text-sm mb-4">
                    A decision tree is a flowchart that shows all possible outcomes from different choices.
                    Like a tree with branches, each decision creates new paths!
                  </p>

                  <div className="bg-white p-4 rounded-lg border border-orange-200">
                    <h4 className="font-medium mb-3">Example: Choosing Your Adventure</h4>
                    <div className="pl-4 space-y-2 text-sm">
                      <div>📍 START: You find a mysterious door</div>
                      <div className="pl-4">
                        <div>🚪 Choice 1: Open the door</div>
                        <div className="pl-4">→ Find treasure! (Good ending)</div>
                        <div>🚶 Choice 2: Walk away</div>
                        <div className="pl-4">→ Stay safe but curious (Neutral ending)</div>
                        <div>🔍 Choice 3: Look for clues first</div>
                        <div className="pl-4">
                          <div>→ Find a map!</div>
                          <div className="pl-4">
                            <div>📜 Choice 3a: Follow the map</div>
                            <div className="pl-4">→ Discover secret passage! (Best ending)</div>
                            <div>🗑️ Choice 3b: Ignore the map</div>
                            <div className="pl-4">→ Get lost (Bad ending)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Alert>
                  <AlertDescription>
                    <strong>Advanced Tip:</strong> You can have decisions within decisions!
                    This creates complex, branching narratives with multiple layers.
                  </AlertDescription>
                </Alert>

                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">Tools for Creating Flowcharts:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• SmartDraw.com (mentioned in lesson)</li>
                      <li>• Paper and pencil (always works!)</li>
                      <li>• Draw.io (free online tool)</li>
                      <li>• PowerPoint shapes</li>
                    </ul>
                  </CardContent>
                </Card>

                <Button onClick={() => { markSectionComplete(3); setCurrentSection(4); }}>
                  Try Interactive Scenario <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}

          {currentSection === 4 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-6 h-6 text-purple-500" />
                  Practice Scenario: {gameScenario.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {gameStep === 'start' && (
                  <>
                    <Alert className="border-purple-200 bg-purple-50">
                      <AlertDescription>
                        <strong>Situation:</strong> {gameScenario.startSituation}
                      </AlertDescription>
                    </Alert>

                    <div className="bg-accent p-6 rounded-lg text-center">
                      <h3 className="text-lg font-semibold mb-3">What should John do?</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Click below to see the decision tree!
                      </p>
                      <Button onClick={() => setGameStep('choice')} size="lg">
                        View Choices <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </>
                )}

                {gameStep === 'choice' && (
                  <>
                    <h3 className="font-semibold">Choose John's action:</h3>
                    <div className="grid gap-3">
                      {gameScenario.choices.map((choice) => (
                        <Card
                          key={choice.id}
                          className={`cursor-pointer transition-all hover:shadow-lg ${
                            selectedChoice === choice.id ? 'ring-2 ring-purple-500' : ''
                          }`}
                          onClick={() => setSelectedChoice(choice.id)}
                        >
                          <CardContent className="pt-4">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{choice.option}</span>
                              {selectedChoice === choice.id && (
                                <CheckCircle className="w-5 h-5 text-purple-500" />
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    {selectedChoice && (
                      <Button onClick={() => setGameStep('result')} className="w-full">
                        See Result <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </>
                )}

                {gameStep === 'result' && selectedChoice && (
                  <>
                    {(() => {
                      const choice = gameScenario.choices.find(c => c.id === selectedChoice)!;
                      return (
                        <div className="space-y-4">
                          <Card className={choice.isGood ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}>
                            <CardContent className="pt-6 space-y-3">
                              <div>
                                <h4 className="font-semibold">Your Choice:</h4>
                                <p className="text-sm">{choice.option}</p>
                              </div>

                              {choice.consequence && (
                                <div>
                                  <h4 className="font-semibold">What Happens:</h4>
                                  <p className="text-sm">{choice.consequence}</p>
                                </div>
                              )}

                              <div>
                                <h4 className="font-semibold">Outcome:</h4>
                                <p className="text-sm">{choice.outcome}</p>
                              </div>

                              <div className={`p-3 rounded-lg text-center font-bold ${
                                choice.isGood ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                              }`}>
                                {choice.result}
                              </div>
                            </CardContent>
                          </Card>

                          <Button onClick={resetGame} variant="outline" className="w-full">
                            Try Different Choice
                          </Button>
                        </div>
                      );
                    })()}
                  </>
                )}

                {gameStep === 'result' && (
                  <Alert className="border-green-200 bg-green-50">
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Congratulations!</strong> You've completed Lesson 4!
                      You now understand how flowcharts help design games with branching stories.
                    </AlertDescription>
                  </Alert>
                )}

                {gameStep === 'result' && (
                  <Button
                    onClick={() => {
                      markSectionComplete(4);
                      setShowQuiz(true);
                    }}
                    className="w-full"
                  >
                    Take the Quiz! <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="quiz" className="space-y-6">
          {!showQuiz && !lessonComplete && (
            <Card>
              <CardContent className="pt-6 text-center">
                <h2 className="text-2xl font-bold mb-4">Ready for the Quiz?</h2>
                <p className="text-gray-600 mb-6">
                  Test your knowledge about flowcharts and game design!
                </p>
                <Button onClick={() => setShowQuiz(true)} size="lg">
                  Start Quiz
                </Button>
              </CardContent>
            </Card>
          )}

          {showQuiz && !lessonComplete && (
            <div className="space-y-6 animate-bounce-in">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Quiz {quizIndex + 1} of {lesson4Quiz.length}
                </h2>
                <Progress value={((quizIndex + 1) / lesson4Quiz.length) * 100} className="w-full max-w-md mx-auto" />
              </div>

              <QuizCard
                quiz={lesson4Quiz[quizIndex]}
                onComplete={handleQuizComplete}
                currentIndex={quizIndex}
                totalQuestions={lesson4Quiz.length}
              />
            </div>
          )}

          {lessonComplete && (
            <div className="text-center space-y-6 animate-bounce-in">
              <Card className="rounded-2xl shadow-card bg-foreground text-background">
                <CardContent className="py-12">
                  <CheckCircle className="w-20 h-20 mx-auto mb-6 animate-bounce" />
                  <h2 className="text-3xl font-bold mb-4">Congratulations! 🎉</h2>
                  <p className="text-xl mb-4">You've completed Lesson 4!</p>
                  <p className="text-lg opacity-90">
                    Quiz Score: {completedQuizzes}/{lesson4Quiz.length} correct answers
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex justify-between">
        <Link to="/lessons/3">
          <Button variant="outline">← Previous Lesson</Button>
        </Link>
        <Link to="/lessons/5">
          <Button>Next Lesson →</Button>
        </Link>
      </div>
    </div>
  );
}