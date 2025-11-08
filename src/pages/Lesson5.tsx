import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuizCard } from "@/components/QuizCard";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Presentation, Link2, MousePointer, ArrowRight, CheckCircle, Gamepad2, Sparkles, FileText, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";

const lesson5Quiz = [
  {
    question: "What year was PowerPoint originally created?",
    options: [
      "1985",
      "1987",
      "1990",
      "1995"
    ],
    correctAnswer: 1,
    explanation: "PowerPoint was created in 1987 by Robert Gaskins and was originally called 'Presenter'!"
  },
  {
    question: "What are hyperlinks used for in PowerPoint games?",
    options: [
      "To add sound effects",
      "To connect slides and create navigation",
      "To change colors",
      "To add animations"
    ],
    correctAnswer: 1,
    explanation: "Hyperlinks connect slides together, allowing players to navigate through different choices in your game!"
  },
  {
    question: "How much did Microsoft pay to acquire PowerPoint?",
    options: [
      "$1 million",
      "$5 million",
      "$14 million",
      "$50 million"
    ],
    correctAnswer: 2,
    explanation: "Microsoft acquired PowerPoint for $14 million, which turned out to be an amazing investment!"
  },
  {
    question: "What should you use to create images for your PowerPoint game?",
    options: [
      "Only clip art",
      "Hand-drawn images only",
      "Kandinsky AI or similar tools",
      "Screenshots only"
    ],
    correctAnswer: 2,
    explanation: "You can use Kandinsky AI (from Lesson 3) to generate custom images for your PowerPoint games!"
  },
  {
    question: "What's the best way to test your PowerPoint game?",
    options: [
      "Just look at the slides",
      "Use Play mode and click through all choices",
      "Print it out",
      "Only test the first slide"
    ],
    correctAnswer: 1,
    explanation: "Always test your game in Play mode, clicking through every possible path to make sure all hyperlinks work!"
  },
  {
    question: "What is PowerPoint's original name before Microsoft acquired it?",
    options: [
      "SlideShow",
      "Presenter",
      "Speaker",
      "Display"
    ],
    correctAnswer: 1,
    explanation: "PowerPoint was originally called 'Presenter' when it was created by Robert Gaskins in 1987!"
  },
  {
    question: "Which feature makes PowerPoint ideal for creating interactive games?",
    options: [
      "Animation effects",
      "Hyperlinks for navigation",
      "Sound effects",
      "Video embedding"
    ],
    correctAnswer: 1,
    explanation: "Hyperlinks allow you to create branching narratives and interactive choices in PowerPoint games!"
  },
  {
    question: "What should be your first step when creating a PowerPoint game?",
    options: [
      "Add animations",
      "Plan your story and map out choices",
      "Choose background colors",
      "Record voice narration"
    ],
    correctAnswer: 1,
    explanation: "Always plan your story and map out the choices first - this creates the foundation for your entire game!"
  },
  {
    question: "How can you make your PowerPoint game slides more engaging?",
    options: [
      "Use only text",
      "Add AI-generated images and visual elements",
      "Keep everything black and white",
      "Use the smallest font possible"
    ],
    correctAnswer: 1,
    explanation: "AI-generated images from tools like Kandinsky can make your slides much more visually engaging and immersive!"
  },
  {
    question: "What happens when you click a hyperlink in Play mode?",
    options: [
      "Nothing happens",
      "It edits the slide",
      "It navigates to the linked slide",
      "It deletes the slide"
    ],
    correctAnswer: 2,
    explanation: "Hyperlinks in Play mode navigate to whatever slide or location you've linked them to!"
  },
  {
    question: "Which game genre works best for PowerPoint games?",
    options: [
      "Fast-paced action games",
      "Choose-your-own-adventure stories",
      "Racing games",
      "Real-time strategy games"
    ],
    correctAnswer: 1,
    explanation: "Choose-your-own-adventure stories work perfectly with PowerPoint's slide-based navigation system!"
  },
  {
    question: "How should you organize your slides when creating a game?",
    options: [
      "Randomly",
      "In logical story order with clear navigation paths",
      "All on one slide",
      "Alphabetically"
    ],
    correctAnswer: 1,
    explanation: "Organize slides in logical story order so players can follow clear paths through your game narrative!"
  },
  {
    question: "What should you include on your game's ending slides?",
    options: [
      "Just the word 'End'",
      "Congratulatory message and option to restart",
      "Nothing",
      "Only a back button"
    ],
    correctAnswer: 1,
    explanation: "Ending slides should congratulate the player and provide an option to restart or try different paths!"
  },
  {
    question: "How can you add variety to your PowerPoint game?",
    options: [
      "Use the same choices everywhere",
      "Create multiple endings and branching paths",
      "Keep all slides identical",
      "Only use one type of image"
    ],
    correctAnswer: 1,
    explanation: "Multiple endings and branching paths give players different experiences and encourage replay!"
  },
  {
    question: "What is the advantage of using AI-generated images in your game?",
    options: [
      "They're always free",
      "You can create custom images that perfectly match your story",
      "They automatically add sound",
      "They make games load faster"
    ],
    correctAnswer: 1,
    explanation: "AI-generated images let you create exactly what you envision for your story, rather than using generic stock photos!"
  },
  {
    question: "How should you handle dead ends in your PowerPoint game?",
    options: [
      "Leave players stuck",
      "Always provide a way back or to restart",
      "Delete those slides",
      "Hide them from players"
    ],
    correctAnswer: 1,
    explanation: "Always give players a way to continue - either go back to make different choices or restart the game!"
  },
  {
    question: "What makes PowerPoint better than other tools for beginner game creators?",
    options: [
      "It's the most expensive",
      "It's familiar, visual, and doesn't require coding",
      "It has the best graphics",
      "It only works on Windows"
    ],
    correctAnswer: 1,
    explanation: "PowerPoint is perfect for beginners because it's familiar, visual, and lets you create games without any programming!"
  },
  {
    question: "How should you test different story paths in your game?",
    options: [
      "Assume they all work",
      "Test each possible path from start to finish",
      "Only test your favorite path",
      "Test randomly"
    ],
    correctAnswer: 1,
    explanation: "Test every possible path to ensure all hyperlinks work and every story branch leads to a satisfying conclusion!"
  },
  {
    question: "What should you consider when sharing your PowerPoint game?",
    options: [
      "Only share with developers",
      "Make sure it works in Play mode for others",
      "Keep it secret forever",
      "Only share the first slide"
    ],
    correctAnswer: 1,
    explanation: "Ensure your game works perfectly in Play mode so others can enjoy the full interactive experience you created!"
  },
  {
    question: "What's the best approach to improve your PowerPoint games over time?",
    options: [
      "Never change anything",
      "Get feedback from players and iterate",
      "Make them more complicated",
      "Remove all interactivity"
    ],
    correctAnswer: 1,
    explanation: "Getting feedback from players helps you understand what works well and what could be improved in your games!"
  },
  {
    question: "Why is PowerPoint a great starting point for game development?",
    options: [
      "It teaches coding immediately",
      "It teaches story structure, logic flow, and user experience design",
      "It's only for presentations",
      "It replaces all other game engines"
    ],
    correctAnswer: 1,
    explanation: "PowerPoint teaches fundamental game design concepts like story structure, logic flow, and user experience - great preparation for advanced game development!"
  }
];

const gameCreationSteps = [
  {
    step: 1,
    title: "Create Title Slide",
    description: "Design an engaging title slide with your game's name and theme",
    tips: ["Use large, readable fonts", "Add a 'Start Game' button", "Include AI-generated background image"],
    icon: FileText,
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    step: 2,
    title: "Design Template Slide",
    description: "Create a consistent template for all game slides",
    tips: ["Story text at the top", "3 choice buttons at the bottom", "Consistent color scheme"],
    icon: Presentation,
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    step: 3,
    title: "Add Hyperlinks",
    description: "Connect choices to consequence slides",
    tips: ["Right-click on button → Hyperlink", "Select 'Place in this document'", "Choose destination slide"],
    icon: Link2,
    color: "text-green-500",
    bgColor: "bg-green-50"
  },
  {
    step: 4,
    title: "Test & Iterate",
    description: "Play through every path to ensure it works",
    tips: ["Check all hyperlinks", "Test all endings", "Have friends playtest"],
    icon: Play,
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  }
];

const powerPointHistory = [
  { year: "1987", event: "Created by Robert Gaskins as 'Presenter'", milestone: true },
  { year: "1987", event: "Microsoft acquires PowerPoint for $14 million", milestone: true },
  { year: "1990", event: "PowerPoint 2.0 released with color support", milestone: false },
  { year: "1997", event: "PowerPoint 97 introduces custom animations", milestone: false },
  { year: "2012", event: "PowerPoint reaches 95% market share", milestone: true },
  { year: "Today", event: "Used by millions for presentations AND games!", milestone: true }
];

export default function Lesson5() {
  const [currentSection, setCurrentSection] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [completedQuizzes, setCompletedQuizzes] = useState(0);
  const [lessonComplete, setLessonComplete] = useState(false);
  const [selectedStep, setSelectedStep] = useState(0);
  const [gameProgress, setGameProgress] = useState(0);
  const [completedSections, setCompletedSections] = useState<number[]>([]);

  const sections = [
    "PowerPoint History",
    "Game Setup Basics",
    "Creating Hyperlinks",
    "Building Your Game",
    "Testing & Publishing"
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

    if (quizIndex < lesson5Quiz.length - 1) {
      setQuizIndex(prev => prev + 1);
    } else {
      setLessonComplete(true);
    }
  };

  const simulateGameCreation = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 20;
      setGameProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 500);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-20">
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6 text-center">
          Lesson 5: Game Creation with PowerPoint
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
                  <Presentation className="w-6 h-6 text-orange-500" />
                  PowerPoint History
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-orange-200 bg-orange-50">
                  <AlertDescription>
                    PowerPoint isn't just for presentations - it's a powerful tool for creating interactive games!
                  </AlertDescription>
                </Alert>

                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-4">The PowerPoint Story</h3>

                  <div className="space-y-3">
                    {powerPointHistory.map((item, index) => (
                      <div
                        key={index}
                        className={`flex gap-4 p-3 rounded-lg ${
                          item.milestone ? 'bg-white border-l-4 border-orange-500' : 'bg-orange-50'
                        }`}
                      >
                        <span className={`font-bold ${item.milestone ? 'text-orange-600' : 'text-gray-500'}`}>
                          {item.year}
                        </span>
                        <span className="text-sm">{item.event}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Card className="border-blue-200">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">Fun Facts about PowerPoint:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>📊 Used by over 500 million people worldwide</li>
                      <li>🏢 95% market share in presentation software</li>
                      <li>🎮 Can create fully interactive games and stories</li>
                      <li>🌍 Available in over 100 languages</li>
                    </ul>
                  </CardContent>
                </Card>

                <Button onClick={() => { markSectionComplete(0); setCurrentSection(1); }}>
                  Learn Game Setup <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}

          {currentSection === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gamepad2 className="w-6 h-6 text-purple-500" />
                  Game Setup Basics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-accent p-6 rounded-lg">
                  <h3 className="font-semibold mb-4">Essential Setup Steps</h3>

                  <div className="space-y-4">
                    <Card className="border-purple-200">
                      <CardContent className="pt-6">
                        <h4 className="font-medium text-purple-600 mb-2">1. File Creation</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Open PowerPoint</li>
                          <li>• Choose blank presentation</li>
                          <li>• Save with descriptive name (e.g., "Adventure_Game.pptx")</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-pink-200">
                      <CardContent className="pt-6">
                        <h4 className="font-medium text-pink-600 mb-2">2. Slide Design</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Use consistent color themes</li>
                          <li>• Large, readable fonts (24pt minimum)</li>
                          <li>• Clear button shapes with rounded corners</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-blue-200">
                      <CardContent className="pt-6">
                        <h4 className="font-medium text-blue-600 mb-2">3. Story Structure</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Title slide → First choice</li>
                          <li>• Each choice leads to new slide</li>
                          <li>• Multiple endings based on paths</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Alert>
                  <AlertDescription>
                    💡 <strong>Pro Tip:</strong> Plan your game with a flowchart first (Lesson 4) before building in PowerPoint!
                  </AlertDescription>
                </Alert>

                <Button onClick={() => { markSectionComplete(1); setCurrentSection(2); }}>
                  Learn Hyperlinks <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}

          {currentSection === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Link2 className="w-6 h-6 text-green-500" />
                  Creating Hyperlinks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-green-200 bg-green-50">
                  <AlertDescription>
                    Hyperlinks are the magic that turns slides into an interactive game!
                  </AlertDescription>
                </Alert>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-4">Step-by-Step Hyperlink Guide</h3>

                  <ol className="space-y-4">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                        1
                      </span>
                      <div>
                        <strong>Select Your Button</strong>
                        <p className="text-sm text-gray-600">Click on the shape or text you want to make clickable</p>
                      </div>
                    </li>

                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                        2
                      </span>
                      <div>
                        <strong>Right-Click → Hyperlink</strong>
                        <p className="text-sm text-gray-600">Or use Ctrl+K (Windows) / Cmd+K (Mac)</p>
                      </div>
                    </li>

                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                        3
                      </span>
                      <div>
                        <strong>Choose "Place in This Document"</strong>
                        <p className="text-sm text-gray-600">This keeps navigation within your presentation</p>
                      </div>
                    </li>

                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                        4
                      </span>
                      <div>
                        <strong>Select Destination Slide</strong>
                        <p className="text-sm text-gray-600">Pick which slide this choice leads to</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <Card className="border-yellow-200 bg-yellow-50">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2">Common Hyperlink Types:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>🎯 <strong>Choice Buttons:</strong> Lead to different story paths</li>
                      <li>↩️ <strong>Back Buttons:</strong> Return to previous slide</li>
                      <li>🏠 <strong>Home Button:</strong> Return to title screen</li>
                      <li>🔄 <strong>Retry Button:</strong> Start section over</li>
                    </ul>
                  </CardContent>
                </Card>

                <Button onClick={() => { markSectionComplete(2); setCurrentSection(3); }}>
                  Build Your Game <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}

          {currentSection === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-purple-500" />
                  Building Your Game
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Follow these steps to create your interactive PowerPoint game:
                </p>

                <div className="grid gap-4">
                  {gameCreationSteps.map((step, index) => (
                    <Card
                      key={index}
                      className={`cursor-pointer transition-all hover:shadow-lg ${
                        selectedStep === index ? 'ring-2 ring-purple-500' : ''
                      }`}
                      onClick={() => setSelectedStep(index)}
                    >
                      <CardContent className={`pt-6 ${step.bgColor}`}>
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center`}>
                              <step.icon className={`w-6 h-6 ${step.color}`} />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-2">
                              Step {step.step}: {step.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                            {selectedStep === index && (
                              <div className="bg-white p-3 rounded-lg">
                                <h4 className="font-medium mb-2">Tips:</h4>
                                <ul className="space-y-1">
                                  {step.tips.map((tip, tipIndex) => (
                                    <li key={tipIndex} className="text-sm">
                                      • {tip}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="border-purple-200 bg-purple-50">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-3">Combine All Your Skills!</h4>
                    <ul className="space-y-2 text-sm">
                      <li>🎨 Use Kandinsky AI (Lesson 3) for images</li>
                      <li>📊 Plan with flowcharts (Lesson 4)</li>
                      <li>🔗 Connect with hyperlinks (this lesson)</li>
                      <li>🎮 Create engaging branching stories</li>
                    </ul>
                  </CardContent>
                </Card>

                <Button onClick={() => { markSectionComplete(3); setCurrentSection(4); }}>
                  Test Your Game <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}

          {currentSection === 4 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MousePointer className="w-6 h-6 text-green-500" />
                  Testing & Publishing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-green-200 bg-green-50">
                  <AlertDescription>
                    Always test every path in your game before sharing it!
                  </AlertDescription>
                </Alert>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-4">Testing Checklist</h3>

                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5" />
                      <span>Press F5 to enter Play Mode</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5" />
                      <span>Test every choice button</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5" />
                      <span>Verify all hyperlinks work</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5" />
                      <span>Check all endings are reachable</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5" />
                      <span>Ensure back/home buttons work</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5" />
                      <span>Have a friend playtest</span>
                    </label>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Simulate Game Creation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button
                      onClick={simulateGameCreation}
                      className="w-full mb-4"
                      disabled={gameProgress > 0 && gameProgress < 100}
                    >
                      {gameProgress === 0 ? 'Start Creating Game' : gameProgress === 100 ? 'Game Complete!' : 'Creating...'}
                    </Button>
                    <Progress value={gameProgress} className="h-3" />
                    {gameProgress === 100 && (
                      <p className="text-sm text-green-600 mt-2 text-center">
                        🎉 Congratulations! Your game is ready to play!
                      </p>
                    )}
                  </CardContent>
                </Card>

                <Alert className="border-blue-200 bg-blue-50">
                  <AlertDescription>
                    <strong>Sharing Your Game:</strong>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• Save as .pptx for others to edit</li>
                      <li>• Save as .ppsx for play-only mode</li>
                      <li>• Upload to OneDrive for online sharing</li>
                      <li>• Export as video for non-interactive viewing</li>
                    </ul>
                  </AlertDescription>
                </Alert>

                {gameProgress === 100 && (
                  <>
                    <Alert className="border-green-200 bg-green-50">
                      <CheckCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Amazing work!</strong> You've completed all 5 lessons and learned how to:
                        <ul className="mt-2 space-y-1 text-sm">
                          <li>✅ Understand neural networks and AI</li>
                          <li>✅ Create effective prompts</li>
                          <li>✅ Use Kandinsky for image generation</li>
                          <li>✅ Design games with flowcharts</li>
                          <li>✅ Build interactive PowerPoint games</li>
                        </ul>
                      </AlertDescription>
                    </Alert>

                    <Button
                      onClick={() => {
                        markSectionComplete(4);
                        setShowQuiz(true);
                      }}
                      className="w-full"
                      size="lg"
                    >
                      Take the Final Quiz! <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="quiz" className="space-y-6">
          {!showQuiz && !lessonComplete && (
            <Card>
              <CardContent className="pt-6 text-center">
                <h2 className="text-2xl font-bold mb-4">Ready for the Final Quiz?</h2>
                <p className="text-gray-600 mb-6">
                  Test your knowledge about PowerPoint game creation!
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
                  Quiz {quizIndex + 1} of {lesson5Quiz.length}
                </h2>
                <Progress value={((quizIndex + 1) / lesson5Quiz.length) * 100} className="w-full max-w-md mx-auto" />
              </div>

              <QuizCard
                quiz={lesson5Quiz[quizIndex]}
                onComplete={handleQuizComplete}
                currentIndex={quizIndex}
                totalQuestions={lesson5Quiz.length}
              />
            </div>
          )}

          {lessonComplete && (
            <div className="text-center space-y-6 animate-bounce-in">
              <Card className="rounded-2xl shadow-card bg-foreground text-background">
                <CardContent className="py-12">
                  <CheckCircle className="w-20 h-20 mx-auto mb-6 animate-bounce" />
                  <h2 className="text-3xl font-bold mb-4">Congratulations! 🎉</h2>
                  <p className="text-xl mb-4">You've completed Lesson 5!</p>
                  <p className="text-lg opacity-90">
                    Quiz Score: {completedQuizzes}/{lesson5Quiz.length} correct answers
                  </p>
                  <p className="text-md opacity-80 mt-4">
                    You're now ready to create amazing AI-powered games!
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex justify-between">
        <Link to="/lessons/4">
          <Button variant="outline">← Previous Lesson</Button>
        </Link>
        <Link to="/games">
          <Button className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
            Play Games! 🎮
          </Button>
        </Link>
      </div>
    </div>
  );
}