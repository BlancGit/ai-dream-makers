import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuizCard } from "@/components/QuizCard";
import { InteractiveTimeline } from "@/components/InteractiveTimeline";
import { Progress } from "@/components/ui/progress";
import { Brain, Computer, Lightbulb, MessageCircle, ArrowRight, CheckCircle, GamepadIcon } from "lucide-react";
import { Link } from "react-router-dom";

const lesson1Quiz = [
  {
    question: "Who created the first neural network called the Perceptron?",
    options: [
      "Albert Einstein", 
      "Frank Rosenblatt", 
      "Steve Jobs", 
      "Marie Curie"
    ],
    correctAnswer: 1,
    explanation: "Frank Rosenblatt created the Perceptron in 1958. It was the first neural network that could learn to recognize images!"
  },
  {
    question: "What is a prompt in neural networks?",
    options: [
      "A type of computer", 
      "Instructions to tell the AI what to do", 
      "A video game", 
      "A math problem"
    ],
    correctAnswer: 1,
    explanation: "A prompt is like giving instructions to a neural network. It tells the AI exactly what you want it to do, like 'draw a cat' or 'write a story about space!'"
  },
  {
    question: "When was ELIZA, the first chatbot, created?",
    options: [
      "1950", 
      "1966", 
      "1980", 
      "2000"
    ],
    correctAnswer: 1,
    explanation: "ELIZA was created in 1966 by Joseph Weizenbaum. It was one of the first programs that could have conversations with humans!"
  }
];

const Lesson1 = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [completedQuizzes, setCompletedQuizzes] = useState(0);
  const [lessonComplete, setLessonComplete] = useState(false);
  
  const sections = [
    "Introduction", 
    "History Timeline", 
    "How Neural Networks Work", 
    "Prompts & Communication",
    "Meet ELIZA",
    "Quiz Time"
  ];

  const handleQuizComplete = (correct: boolean) => {
    if (correct) {
      setCompletedQuizzes(prev => prev + 1);
    }
    
    if (quizIndex < lesson1Quiz.length - 1) {
      setTimeout(() => setQuizIndex(prev => prev + 1), 2000);
    } else {
      setTimeout(() => setLessonComplete(true), 2000);
    }
  };

  const progress = ((currentSection + 1) / sections.length) * 100;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Lesson 1: Introduction to Neural Networks
        </h1>
        <Progress value={progress} className="w-full max-w-md mx-auto" />
        <p className="text-sm text-muted-foreground mt-2">
          Section {currentSection + 1} of {sections.length}: {sections[currentSection]}
        </p>
      </div>

      {/* Section 0: Introduction */}
      {currentSection === 0 && (
        <div className="space-y-6 animate-bounce-in">
          <Card className="shadow-fun">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Brain className="w-8 h-8 text-primary" />
                What is a Neural Network?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg leading-relaxed">
              <p>
                🧠 A neural network is like a computer brain that learns to solve problems by looking at lots of examples!
              </p>
              <p>
                🕷️ Imagine a huge spider web made of many connected threads. A neural network is similar, but instead of threads, we have artificial neurons that work together like a team!
              </p>
              <p>
                🎯 Just like how you learn to recognize your friends' faces by seeing them many times, neural networks learn by practicing with lots of examples.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-card hover:shadow-fun transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Computer className="w-6 h-6 text-primary" />
                  Regular Computer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Follows exact instructions step by step, like a recipe!</p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-fun transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-6 h-6 text-primary" />
                  Neural Network
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learns from examples and can solve new problems it has never seen before!</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="fun" size="lg" onClick={() => setCurrentSection(1)}>
              <ArrowRight className="w-5 h-5" />
              Let's Explore the History!
            </Button>
          </div>
        </div>
      )}

      {/* Section 1: History Timeline */}
      {currentSection === 1 && (
        <div className="space-y-6 animate-bounce-in">
          <InteractiveTimeline />
          
          <div className="text-center">
            <Button variant="fun" size="lg" onClick={() => setCurrentSection(2)}>
              <ArrowRight className="w-5 h-5" />
              Learn How They Work!
            </Button>
          </div>
        </div>
      )}

      {/* Section 2: How Neural Networks Work */}
      {currentSection === 2 && (
        <div className="space-y-6 animate-bounce-in">
          <Card className="shadow-fun">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Lightbulb className="w-8 h-8 text-warning" />
                How Neural Networks Learn
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-4xl mb-2">📸</div>
                  <h4 className="font-bold mb-2">1. Show Examples</h4>
                  <p className="text-sm">Show the neural network thousands of pictures with labels (like "cat" or "dog")</p>
                </div>
                
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-4xl mb-2">🧠</div>
                  <h4 className="font-bold mb-2">2. Find Patterns</h4>
                  <p className="text-sm">The network learns to spot patterns (cats have whiskers, pointy ears, etc.)</p>
                </div>
                
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-4xl mb-2">✅</div>
                  <h4 className="font-bold mb-2">3. Make Predictions</h4>
                  <p className="text-sm">Now it can look at new pictures and guess "This looks like a cat!"</p>
                </div>
              </div>

              <div className="bg-gradient-learning p-6 rounded-lg text-center">
                <h4 className="font-bold text-xl mb-2 text-secondary-foreground">Cool Fact!</h4>
                <p className="text-secondary-foreground">
                  Neural networks can learn from their mistakes, just like you do! 
                  If they guess wrong, they adjust and get better next time! 🎯
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button variant="fun" size="lg" onClick={() => setCurrentSection(3)}>
              <ArrowRight className="w-5 h-5" />
              Learn About Prompts!
            </Button>
          </div>
        </div>
      )}

      {/* Section 3: Prompts */}
      {currentSection === 3 && (
        <div className="space-y-6 animate-bounce-in">
          <Card className="shadow-fun">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <MessageCircle className="w-8 h-8 text-accent" />
                What Are Prompts?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-lg text-center p-4 bg-muted rounded-lg">
                <p className="mb-4">
                  🗣️ A <strong>prompt</strong> is like giving instructions to your AI friend!
                </p>
                <p>
                  Think of it as telling the neural network exactly what you want it to do, 
                  just like asking a friend to help you with homework! 📝
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-bold text-center text-success">✅ Good Prompts</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-success/10 border border-success/20 rounded-lg">
                      <strong>"Draw a cute cat playing with a ball"</strong>
                      <p className="text-sm text-muted-foreground">Specific and clear!</p>
                    </div>
                    <div className="p-3 bg-success/10 border border-success/20 rounded-lg">
                      <strong>"Write a short story about a robot"</strong>
                      <p className="text-sm text-muted-foreground">Tells exactly what to do!</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-center text-destructive">❌ Vague Prompts</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                      <strong>"Draw something"</strong>
                      <p className="text-sm text-muted-foreground">Too vague!</p>
                    </div>
                    <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                      <strong>"Make it good"</strong>
                      <p className="text-sm text-muted-foreground">Not specific enough!</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-primary p-6 rounded-lg text-center text-primary-foreground">
                <h4 className="font-bold text-xl mb-2">Pro Tip! 🌟</h4>
                <p>
                  The more specific and detailed your prompt is, the better results you'll get! 
                  It's like giving your AI friend really clear directions! 🎯
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button variant="fun" size="lg" onClick={() => setCurrentSection(4)}>
              <ArrowRight className="w-5 h-5" />
              Meet ELIZA!
            </Button>
          </div>
        </div>
      )}

      {/* Section 4: ELIZA */}
      {currentSection === 4 && (
        <div className="space-y-6 animate-bounce-in">
          <Card className="shadow-fun">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <MessageCircle className="w-8 h-8 text-accent" />
                Meet ELIZA - The First Chatbot!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-6xl mb-4">🤖</div>
                <p className="text-lg">
                  ELIZA was created in 1966 and was one of the first programs that could have conversations with humans!
                </p>
              </div>

              <div className="bg-card border-2 border-accent rounded-lg p-4 max-w-md mx-auto">
                <h4 className="font-bold text-center mb-4 text-accent">Chat with ELIZA (Simulation)</h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-muted p-2 rounded">
                    <strong>You:</strong> I feel sad today
                  </div>
                  <div className="bg-accent/20 p-2 rounded">
                    <strong>ELIZA:</strong> Why do you feel sad today?
                  </div>
                  <div className="bg-muted p-2 rounded">
                    <strong>You:</strong> Because it's raining
                  </div>
                  <div className="bg-accent/20 p-2 rounded">
                    <strong>ELIZA:</strong> Tell me more about the rain...
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-success">✅ What ELIZA Could Do</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• Have simple conversations</li>
                      <li>• Ask questions back</li>
                      <li>• Use keywords to respond</li>
                      <li>• Make people feel heard</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-warning">⚠️ What ELIZA Couldn't Do</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• Truly understand meaning</li>
                      <li>• Remember past conversations</li>
                      <li>• Learn new things</li>
                      <li>• Be creative or smart</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-fun p-6 rounded-lg text-center text-primary-foreground">
                <h4 className="font-bold text-xl mb-2">Why ELIZA Was Important 🌟</h4>
                <p>
                  ELIZA showed that computers could pretend to understand humans! 
                  It was the first step toward the amazing AI assistants we have today! 🚀
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button variant="fun" size="lg" onClick={() => setCurrentSection(5)}>
              <ArrowRight className="w-5 h-5" />
              Time for Quiz!
            </Button>
          </div>
        </div>
      )}

      {/* Section 5: Quiz */}
      {currentSection === 5 && !lessonComplete && (
        <div className="space-y-6 animate-bounce-in">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Quiz {quizIndex + 1} of {lesson1Quiz.length}
            </h2>
            <Progress value={((quizIndex + 1) / lesson1Quiz.length) * 100} className="w-full max-w-md mx-auto" />
          </div>
          
          <QuizCard 
            quiz={lesson1Quiz[quizIndex]} 
            onComplete={handleQuizComplete}
          />
        </div>
      )}

      {/* Lesson Complete */}
      {lessonComplete && (
        <div className="text-center space-y-6 animate-bounce-in">
          <Card className="shadow-glow bg-gradient-primary text-primary-foreground">
            <CardContent className="py-12">
              <CheckCircle className="w-20 h-20 mx-auto mb-6 animate-bounce" />
              <h2 className="text-3xl font-bold mb-4">Congratulations! 🎉</h2>
              <p className="text-xl mb-6">
                You've completed Lesson 1 and learned about the history of neural networks!
              </p>
              <p className="text-lg opacity-90">
                You got {completedQuizzes} out of {lesson1Quiz.length} quiz questions correct!
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="xl" asChild>
              <Link to="/lesson2">
                <ArrowRight className="w-5 h-5" />
                Continue to Lesson 2
              </Link>
            </Button>
            
            <Button variant="outline" size="xl" asChild>
              <Link to="/games">
                <GamepadIcon className="w-5 h-5" />
                Play Games
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lesson1;