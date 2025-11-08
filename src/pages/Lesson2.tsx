import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuizCard } from "@/components/QuizCard";
import { NeuralNetworkVisualization } from "@/components/NeuralNetworkVisualization";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, Image, Video, Code, Volume2, Palette, Users, 
  ArrowRight, CheckCircle, Sparkles, Zap, Eye, Lightbulb
} from "lucide-react";
import { Link } from "react-router-dom";

const lesson2Quiz = [
  {
    question: "How many stages are there in building a neural network?",
    options: ["4 stages", "6 stages", "8 stages", "10 stages"],
    correctAnswer: 1,
    explanation: "There are 6 main stages: Problem statement, Data collection, Data analysis, Training, Monitoring, and Retraining!"
  },
  {
    question: "What are the 7 main areas where neural networks are used?",
    options: [
      "Only for games and fun",
      "Text, images, video, code, voice, marketing, and design",
      "Only for school homework",
      "Just for drawing pictures"
    ],
    correctAnswer: 1,
    explanation: "Neural networks are used in 7 amazing areas: text writing, image generation, video creation, code writing, voice creation, marketing & design development!"
  },
  {
    question: "What do neural networks need to learn properly?",
    options: [
      "Magic and wishes",
      "High-quality data and good examples",
      "Expensive computers only",
      "Nothing special"
    ],
    correctAnswer: 1,
    explanation: "Neural networks are like children - they need high-quality data and good examples to learn correctly. Bad data leads to bad results!"
  },
  {
    question: "What is the first stage in building a neural network?",
    options: [
      "Data collection",
      "Problem statement",
      "Training",
      "Monitoring"
    ],
    correctAnswer: 1,
    explanation: "The first stage is defining the problem statement - what exactly do we want the AI to solve, like recognizing cats in photos!"
  },
  {
    question: "Which AI area helps create pictures and artwork?",
    options: [
      "Voice creation",
      "Image generation",
      "Code writing",
      "Text writing"
    ],
    correctAnswer: 1,
    explanation: "Image generation AI can create amazing pictures and artwork just by describing what you want!"
  },
  {
    question: "What happens during the training stage?",
    options: [
      "We delete all the data",
      "We show the AI examples so it learns patterns",
      "We turn off the computer",
      "We write new code"
    ],
    correctAnswer: 1,
    explanation: "During training, we show the AI thousands of examples so it can learn the patterns and make predictions!"
  },
  {
    question: "Which area of AI can help write stories and poems?",
    options: [
      "Video creation",
      "Text & writing",
      "Image generation",
      "Voice creation"
    ],
    correctAnswer: 1,
    explanation: "Text & writing AI can create stories, poems, essays, and even help with homework assignments!"
  },
  {
    question: "What is the purpose of the monitoring stage?",
    options: [
      "To watch TV shows",
      "To check how well the AI performs on new data",
      "To play games",
      "To sleep"
    ],
    correctAnswer: 1,
    explanation: "Monitoring means watching how well the AI performs on new, unseen data to make sure it's working correctly!"
  },
  {
    question: "Which AI area helps doctors and teachers do their jobs better?",
    options: [
      "Human assistance",
      "Video creation",
      "Marketing & design",
      "Code writing"
    ],
    correctAnswer: 0,
    explanation: "Human assistance AI helps professionals like doctors, teachers, and many others do their jobs more effectively!"
  },
  {
    question: "What can voice creation AI generate?",
    options: [
      "Only robot voices",
      "Speech, music, and sound effects",
      "Only whispers",
      "Silent movies"
    ],
    correctAnswer: 1,
    explanation: "Voice creation AI can generate realistic speech, music, and amazing sound effects!"
  },
  {
    question: "When do we use retraining in neural networks?",
    options: [
      "Every day at noon",
      "When the AI makes mistakes and needs improvement",
      "Never",
      "Only on weekends"
    ],
    correctAnswer: 1,
    explanation: "We retrain neural networks when they make mistakes - we show them more examples to help them get better!"
  },
  {
    question: "What can code writing AI help programmers do?",
    options: [
      "Only write shopping lists",
      "Build apps and websites",
      "Cook dinner",
      "Plant gardens"
    ],
    correctAnswer: 1,
    explanation: "Code writing AI helps programmers write code and build amazing apps and websites more efficiently!"
  },
  {
    question: "During data analysis, what do we check?",
    options: [
      "If the examples are good quality and not corrupted",
      "The weather forecast",
      "Our favorite movies",
      "What to eat for lunch"
    ],
    correctAnswer: 0,
    explanation: "Data analysis involves checking if our examples are good quality and not corrupted before training the AI!"
  },
  {
    question: "What can marketing & design AI create?",
    options: [
      "Only black and white pictures",
      "Logos, advertisements, and beautiful designs",
      "Only text documents",
      "Mathematical equations"
    ],
    correctAnswer: 1,
    explanation: "Marketing & design AI can automatically create logos, advertisements, and beautiful designs!"
  },
  {
    question: "What makes video creation AI special?",
    options: [
      "It only works in the dark",
      "It can make cool videos and animations",
      "It requires special glasses",
      "It only creates still images"
    ],
    correctAnswer: 1,
    explanation: "Video creation AI can make cool videos and animations with the help of artificial intelligence!"
  },
  {
    question: "Why is data collection important?",
    options: [
      "To fill up computer storage",
      "To gather lots of examples for the AI to learn from",
      "To make the computer slower",
      "To confuse the AI"
    ],
    correctAnswer: 1,
    explanation: "Data collection is crucial because we need to gather lots of examples (like thousands of photos) for the AI to learn from!"
  },
  {
    question: "What happens if we give bad data to a neural network?",
    options: [
      "It learns perfectly anyway",
      "It creates bad results",
      "Nothing changes",
      "It becomes super smart"
    ],
    correctAnswer: 1,
    explanation: "Just like children, if we give neural networks bad examples or corrupted data, they will learn incorrectly and produce bad results!"
  },
  {
    question: "Which stage comes after data collection?",
    options: [
      "Retraining",
      "Data analysis",
      "Problem statement",
      "Monitoring"
    ],
    correctAnswer: 1,
    explanation: "After collecting data, we do data analysis to check if our examples are good quality before training!"
  },
  {
    question: "What is the main goal of all these AI areas?",
    options: [
      "To replace humans completely",
      "To help humans create amazing things and solve problems",
      "To make computers more expensive",
      "To make life more complicated"
    ],
    correctAnswer: 1,
    explanation: "The main goal of AI is to help humans create amazing things, solve problems, and make life better and more creative!"
  },
  {
    question: "How are neural networks similar to children learning?",
    options: [
      "They both need toys",
      "They both need good examples and quality teaching",
      "They both need candy",
      "They both sleep all day"
    ],
    correctAnswer: 1,
    explanation: "Neural networks are like children because they both learn best when given good examples and quality teaching materials!"
  }
];

const Lesson2 = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [completedQuizzes, setCompletedQuizzes] = useState(0);
  const [lessonComplete, setLessonComplete] = useState(false);
  
  const sections = [
    "Neural Network Building", 
    "How They Work (Visualization)", 
    "7 Amazing Areas of AI", 
    "AI Tools in Action",
    "Quiz Time"
  ];

  const aiAreas = [
    { icon: <Brain className="w-8 h-8" />, title: "Text & Writing", description: "AI can write stories, poems, essays, and even help with homework!", color: "text-blue-500" },
    { icon: <Image className="w-8 h-8" />, title: "Image Generation", description: "Create amazing pictures and artwork just by describing what you want!", color: "text-green-500" },
    { icon: <Video className="w-8 h-8" />, title: "Video Creation", description: "Make cool videos and animations with the help of AI!", color: "text-purple-500" },
    { icon: <Code className="w-8 h-8" />, title: "Code Writing", description: "AI can help programmers write code and build apps and websites!", color: "text-orange-500" },
    { icon: <Volume2 className="w-8 h-8" />, title: "Voice Creation", description: "Generate speech, music, and sound effects that sound super realistic!", color: "text-red-500" },
    { icon: <Palette className="w-8 h-8" />, title: "Marketing & Design", description: "Create logos, advertisements, and beautiful designs automatically!", color: "text-pink-500" },
    { icon: <Users className="w-8 h-8" />, title: "Human Assistance", description: "AI helps doctors, teachers, and many other professionals do their jobs better!", color: "text-teal-500" }
  ];

  const buildingStages = [
    { icon: <Lightbulb className="w-6 h-6" />, title: "1. Problem Statement", description: "What do we want the AI to solve? Like recognizing cats in photos!" },
    { icon: <Eye className="w-6 h-6" />, title: "2. Data Collection", description: "Gather lots of examples - thousands of cat and dog photos!" },
    { icon: <Brain className="w-6 h-6" />, title: "3. Data Analysis", description: "Check if our examples are good quality and not corrupted!" },
    { icon: <Zap className="w-6 h-6" />, title: "4. Training", description: "Show the AI the examples so it learns the patterns!" },
    { icon: <Eye className="w-6 h-6" />, title: "5. Monitoring", description: "Watch how well the AI performs on new, unseen data!" },
    { icon: <ArrowRight className="w-6 h-6" />, title: "6. Retraining", description: "If it makes mistakes, show it more examples to get better!" }
  ];

  const handleQuizComplete = (correct: boolean) => {
    if (correct) {
      setCompletedQuizzes(prev => prev + 1);
    }

    if (quizIndex < lesson2Quiz.length - 1) {
      setQuizIndex(prev => prev + 1);
    } else {
      setLessonComplete(true);
    }
  };

  const progress = ((currentSection + 1) / sections.length) * 100;

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
      {/* Header */}
      <div className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
          Lesson 2: Types of Neural Networks
        </h1>
        <Progress value={progress} className="w-full max-w-md mx-auto" />
        <p className="text-sm font-medium text-muted-foreground mt-4">
          Section {currentSection + 1} of {sections.length}: {sections[currentSection]}
        </p>
      </div>

      {/* Section 0: Building Neural Networks */}
      {currentSection === 0 && (
        <div className="space-y-8 py-12 md:py-20">
          <Card className="rounded-2xl shadow-card hover:shadow-lifted transition-all">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Brain className="w-8 h-8 text-primary" />
                How to Build a Neural Network
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-lg">
                  🏗️ Building a neural network is like teaching a very smart student! 
                  There are 6 important steps that Data Science specialists follow:
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {buildingStages.map((stage, index) => (
                  <Card key={index} className={`shadow-card hover:shadow-fun transition-all duration-300 animate-bounce-in`} style={{ animationDelay: `${index * 100}ms` }}>
                    <CardHeader className="text-center pb-3">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                        {stage.icon}
                      </div>
                      <CardTitle className="text-sm">{stage.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-xs text-muted-foreground text-center">{stage.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-gradient-learning p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-3 text-secondary-foreground text-center">🎯 The Secret Ingredient</h4>
                <p className="text-secondary-foreground text-center">
                  The most important part is <strong>high-quality data</strong>! 
                  Neural networks are like children - if you show them good examples, they learn good habits. 
                  If you show them bad examples, they learn bad habits! 📚✨
                </p>
              </div>

              <div className="bg-card border-2 border-warning rounded-lg p-4">
                <h4 className="font-bold text-center mb-3 text-warning">⚠️ The Challenge</h4>
                <p className="text-center text-sm">
                  Sometimes data has "anomalies" - weird or wrong information. 
                  For example, if someone says they have 100 brothers, that's probably a mistake! 
                  Human experts help clean up the data to make sure the AI learns correctly. 🧹
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button className="rounded-full bg-secondary hover:bg-secondary/90" size="lg" onClick={() => setCurrentSection(1)}>
              <ArrowRight className="w-5 h-5" />
              See How They Work!
            </Button>
          </div>
        </div>
      )}

      {/* Section 1: Visualization */}
      {currentSection === 1 && (
        <div className="space-y-8 py-12 md:py-20">
          <NeuralNetworkVisualization />
          
          <Card className="rounded-2xl shadow-card hover:shadow-lifted transition-all">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-center mb-4">🧠 Neural Network vs Human Brain</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-4xl mb-2">👶</div>
                  <h4 className="font-bold mb-2">Human Brain</h4>
                  <p className="text-sm">Has billions of neurons that work together to help us think, learn, and make decisions!</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-4xl mb-2">🤖</div>
                  <h4 className="font-bold mb-2">Artificial Neural Network</h4>
                  <p className="text-sm">Has artificial neurons (much fewer!) that copy how our brain works to solve specific problems!</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button className="rounded-full bg-secondary hover:bg-secondary/90" size="lg" onClick={() => setCurrentSection(2)}>
              <ArrowRight className="w-5 h-5" />
              Explore AI Applications!
            </Button>
          </div>
        </div>
      )}

      {/* Section 2: 7 Areas of AI */}
      {currentSection === 2 && (
        <div className="space-y-8 py-12 md:py-20">
          <Card className="rounded-2xl shadow-card hover:shadow-lifted transition-all">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Sparkles className="w-8 h-8 text-warning" />
                7 Amazing Areas of AI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-lg mb-6">
                Neural networks can do incredible things in these 7 main areas! 
                Click on each one to learn more! 🌟
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiAreas.map((area, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-fun transition-all duration-300 hover:scale-105 cursor-pointer animate-bounce-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center ${area.color}`}>
                    {area.icon}
                  </div>
                  <CardTitle className="text-lg">{area.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-primary p-6 rounded-lg text-center text-primary-foreground">
            <h4 className="font-bold text-xl mb-2">🚀 The Future is Here!</h4>
            <p className="text-lg">
              All these AI tools exist TODAY and you can use them to create amazing things! 
              The only limit is your imagination! ✨
            </p>
          </div>

          <div className="text-center">
            <Button className="rounded-full bg-secondary hover:bg-secondary/90" size="lg" onClick={() => setCurrentSection(3)}>
              <ArrowRight className="w-5 h-5" />
              Try AI Tools!
            </Button>
          </div>
        </div>
      )}

      {/* Section 3: AI Tools Demo */}
      {currentSection === 3 && (
        <div className="space-y-8 py-12 md:py-20">
          <Card className="rounded-2xl shadow-card hover:shadow-lifted transition-all">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Zap className="w-8 h-8 text-accent" />
                AI Tools You Can Use Today!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Image className="w-6 h-6 text-green-500" />
                      Animated Drawings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3">Draw a character in Paint, then watch AI bring it to life with animations!</p>
                    <div className="bg-muted p-3 rounded text-xs">
                      <strong>Steps:</strong>
                      <ol className="list-decimal list-inside mt-1 space-y-1">
                        <li>Draw your character in Paint</li>
                        <li>Save as PNG image</li>
                        <li>Upload to Animated Drawings website</li>
                        <li>Watch your drawing dance!</li>
                      </ol>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="w-6 h-6 text-blue-500" />
                      Easy-Peasy.AI
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3">Chat with historical characters, generate images, and create content!</p>
                    <div className="bg-muted p-3 rounded text-xs">
                      <strong>Features:</strong>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>80+ content templates</li>
                        <li>Chat with AI characters</li>
                        <li>Generate AI images</li>
                        <li>Audio transcription</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-fun p-6 rounded-lg text-center text-primary-foreground">
                <h4 className="font-bold text-xl mb-3">🎨 Your Creative Journey Starts Now!</h4>
                <p className="mb-4">
                  These tools let you create amazing things without being a programmer! 
                  You just need to:
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-primary-foreground/20 p-3 rounded">
                    <strong>1. Imagine</strong><br/>
                    Think of what you want to create
                  </div>
                  <div className="bg-primary-foreground/20 p-3 rounded">
                    <strong>2. Describe</strong><br/>
                    Write clear instructions (prompts)
                  </div>
                  <div className="bg-primary-foreground/20 p-3 rounded">
                    <strong>3. Create</strong><br/>
                    Let AI help bring your ideas to life!
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Remember: Neural networks can be incredibly helpful, but they're tools to assist humans, not replace them! 
                  The most amazing creations happen when humans and AI work together! 🤝
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button className="rounded-full bg-secondary hover:bg-secondary/90" size="lg" onClick={() => setCurrentSection(4)}>
              <ArrowRight className="w-5 h-5" />
              Test Your Knowledge!
            </Button>
          </div>
        </div>
      )}

      {/* Section 4: Quiz */}
      {currentSection === 4 && !lessonComplete && (
        <div className="space-y-8 py-12 md:py-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Quiz {quizIndex + 1} of {lesson2Quiz.length}
            </h2>
            <Progress value={((quizIndex + 1) / lesson2Quiz.length) * 100} className="w-full max-w-md mx-auto" />
          </div>
          
          <QuizCard
            quiz={lesson2Quiz[quizIndex]}
            onComplete={handleQuizComplete}
            currentIndex={quizIndex}
            totalQuestions={lesson2Quiz.length}
          />
        </div>
      )}

      {/* Lesson Complete */}
      {lessonComplete && (
        <div className="text-center space-y-6 animate-bounce-in">
          <Card className="rounded-2xl shadow-lifted bg-primary/5">
            <CardContent className="py-12">
              <CheckCircle className="w-20 h-20 mx-auto mb-6 animate-bounce" />
              <h2 className="text-3xl font-bold mb-4">Amazing Work! 🎉</h2>
              <p className="text-xl mb-6">
                You've mastered the types and applications of neural networks!
              </p>

              {/* Score Display */}
              <div className="bg-white/20 backdrop-blur rounded-lg p-6 max-w-md mx-auto mb-6">
                <h3 className="text-2xl font-bold mb-3">Your Quiz Score</h3>
                <div className="text-5xl font-bold mb-2">
                  {completedQuizzes}/{lesson2Quiz.length}
                </div>
                <div className="text-3xl font-bold mb-3">
                  {Math.round((completedQuizzes / lesson2Quiz.length) * 100)}%
                </div>

                {/* Performance Badge */}
                <div className="mt-4">
                  {completedQuizzes === lesson2Quiz.length && (
                    <div className="text-2xl font-bold">
                      🏆 Perfect Score! You're an AI Expert!
                    </div>
                  )}
                  {completedQuizzes >= lesson2Quiz.length * 0.8 && completedQuizzes < lesson2Quiz.length && (
                    <div className="text-2xl font-bold">
                      ⭐ Great Job! You're an AI Star!
                    </div>
                  )}
                  {completedQuizzes >= lesson2Quiz.length * 0.6 && completedQuizzes < lesson2Quiz.length * 0.8 && (
                    <div className="text-xl font-bold">
                      👍 Good Work! Keep Learning!
                    </div>
                  )}
                  {completedQuizzes < lesson2Quiz.length * 0.6 && (
                    <div className="text-xl font-bold">
                      💪 Nice Try! Practice Makes Perfect!
                    </div>
                  )}
                </div>
              </div>

              <p className="text-lg opacity-90">
                You answered {completedQuizzes} out of {lesson2Quiz.length} questions correctly!
              </p>

              <div className="mt-6 p-4 bg-primary-foreground/20 rounded-lg">
                <p className="text-lg font-semibold">🏆 Neural Networks Expert!</p>
                <p>You now understand how AI works and can use AI tools to create amazing things!</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/games">
                <ArrowRight className="w-5 h-5" />
                Practice with AI Tools
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <Link to="/">
                🏠 Back to Home
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lesson2;