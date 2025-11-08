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
  },
  {
    question: "What year was the Perceptron invented?",
    options: [
      "1945",
      "1958",
      "1969",
      "1975"
    ],
    correctAnswer: 1,
    explanation: "The Perceptron was invented in 1958 by Frank Rosenblatt. It was a groundbreaking moment in AI history!"
  },
  {
    question: "What does a neural network use to learn?",
    options: [
      "Magic spells",
      "Examples and patterns",
      "Random guesses",
      "Internet searches"
    ],
    correctAnswer: 1,
    explanation: "Neural networks learn by looking at lots of examples and finding patterns in them, just like how you learn to recognize things!"
  },
  {
    question: "Which of these is like a neural network?",
    options: [
      "A calculator following exact steps",
      "A brain learning from experience",
      "A clock telling time",
      "A ruler measuring length"
    ],
    correctAnswer: 1,
    explanation: "A neural network is like a brain that learns from experience, not like a calculator that just follows exact steps!"
  },
  {
    question: "What could ELIZA NOT do?",
    options: [
      "Ask questions",
      "Have simple conversations",
      "Truly understand meaning",
      "Respond to keywords"
    ],
    correctAnswer: 2,
    explanation: "ELIZA could chat and ask questions, but it couldn't truly understand what people meant - it just used clever tricks with keywords!"
  },
  {
    question: "What's the first step in how neural networks learn?",
    options: [
      "Make predictions",
      "Show examples",
      "Find patterns",
      "Give rewards"
    ],
    correctAnswer: 1,
    explanation: "First, we show the neural network lots of examples with labels, like showing it pictures of cats and dogs!"
  },
  {
    question: "Which is an example of a GOOD prompt?",
    options: [
      "Do something",
      "Make it nice",
      "Draw a happy robot in space",
      "Whatever"
    ],
    correctAnswer: 2,
    explanation: "Good prompts are specific and clear! 'Draw a happy robot in space' tells the AI exactly what you want!"
  },
  {
    question: "Who created ELIZA?",
    options: [
      "Alan Turing",
      "Joseph Weizenbaum",
      "Frank Rosenblatt",
      "Bill Gates"
    ],
    correctAnswer: 1,
    explanation: "Joseph Weizenbaum created ELIZA in 1966 at MIT. It was revolutionary for its time!"
  },
  {
    question: "What makes neural networks special compared to regular computers?",
    options: [
      "They are faster",
      "They use less electricity",
      "They can learn from examples",
      "They are smaller"
    ],
    correctAnswer: 2,
    explanation: "Neural networks are special because they can learn from examples and solve new problems they've never seen before!"
  },
  {
    question: "What happens when a neural network makes a mistake?",
    options: [
      "It breaks forever",
      "It adjusts and learns from it",
      "It starts over from zero",
      "It gives up"
    ],
    correctAnswer: 1,
    explanation: "When neural networks make mistakes, they adjust their connections and learn from them to get better next time!"
  },
  {
    question: "What are artificial neurons connected like?",
    options: [
      "A straight line",
      "A spider web",
      "A square box",
      "A single dot"
    ],
    correctAnswer: 1,
    explanation: "Artificial neurons are connected like a spider web, with many connections between different neurons working together!"
  },
  {
    question: "What did the Perceptron learn to do?",
    options: [
      "Play chess",
      "Recognize images",
      "Compose music",
      "Drive cars"
    ],
    correctAnswer: 1,
    explanation: "The Perceptron was the first neural network that could learn to recognize and classify images!"
  },
  {
    question: "Why are specific prompts better than vague ones?",
    options: [
      "They sound fancier",
      "They give clear directions to the AI",
      "They are longer",
      "They use big words"
    ],
    correctAnswer: 1,
    explanation: "Specific prompts give the AI clear directions about what you want, leading to better results!"
  },
  {
    question: "What pattern-finding example was mentioned for cats?",
    options: [
      "Cats are big",
      "Cats have whiskers and pointy ears",
      "Cats are colorful",
      "Cats can fly"
    ],
    correctAnswer: 1,
    explanation: "Neural networks learn to recognize cats by finding patterns like whiskers, pointy ears, and other cat features!"
  },
  {
    question: "ELIZA was important because it showed computers could:",
    options: [
      "Think like humans",
      "Feel emotions",
      "Pretend to understand humans",
      "Replace doctors"
    ],
    correctAnswer: 2,
    explanation: "ELIZA was important because it showed computers could pretend to understand humans, even without real understanding!"
  },
  {
    question: "What's the final step in how neural networks learn?",
    options: [
      "Show examples",
      "Find patterns",
      "Sleep on it",
      "Make predictions"
    ],
    correctAnswer: 3,
    explanation: "After seeing examples and finding patterns, neural networks can make predictions on new things they haven't seen before!"
  },
  {
    question: "How do you 'teach' a neural network?",
    options: [
      "Tell it the rules",
      "Show it many examples",
      "Program every answer",
      "Hope for the best"
    ],
    correctAnswer: 1,
    explanation: "You teach neural networks by showing them many examples, and they learn the patterns on their own!"
  },
  {
    question: "What decade marked the birth of modern AI with the Perceptron?",
    options: [
      "1940s",
      "1950s",
      "1960s",
      "1970s"
    ],
    correctAnswer: 1,
    explanation: "The 1950s marked the birth of modern AI, with the Perceptron being invented in 1958!"
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
          Lesson 1: Introduction to Neural Networks
        </h1>
        <Progress value={progress} className="w-full max-w-md mx-auto" />
        <p className="text-sm font-medium text-muted-foreground mt-4">
          Section {currentSection + 1} of {sections.length}: {sections[currentSection]}
        </p>
      </div>

      {/* Section 0: Introduction */}
      {currentSection === 0 && (
        <div className="space-y-8">
          <Card className="rounded-2xl shadow-card hover:shadow-lifted transition-all">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-3 text-2xl md:text-3xl font-bold uppercase">
                <Brain className="w-8 h-8 text-primary" />
                What is a Neural Network?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-base font-medium leading-relaxed text-muted-foreground">
              <p>
                A neural network is like a computer brain that learns to solve problems by looking at lots of examples!
              </p>
              <p>
                Imagine a huge spider web made of many connected threads. A neural network is similar, but instead of threads, we have artificial neurons that work together like a team!
              </p>
              <p>
                Just like how you learn to recognize your friends' faces by seeing them many times, neural networks learn by practicing with lots of examples.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="rounded-2xl shadow-card hover:shadow-lifted transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-bold uppercase">
                  <Computer className="w-6 h-6 text-primary" />
                  Regular Computer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-muted-foreground">Follows exact instructions step by step, like a recipe!</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-card hover:shadow-lifted transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-bold uppercase">
                  <Brain className="w-6 h-6 text-primary" />
                  Neural Network
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-muted-foreground">Learns from examples and can solve new problems it has never seen before!</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button className="rounded-full bg-secondary hover:bg-secondary/90" size="lg" onClick={() => setCurrentSection(1)}>
              Let's Explore the History
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      )}

      {/* Section 1: History Timeline */}
      {currentSection === 1 && (
        <div className="space-y-8 py-12 md:py-20">
          <InteractiveTimeline />

          <div className="text-center">
            <Button className="rounded-full bg-secondary hover:bg-secondary/90" size="lg" onClick={() => setCurrentSection(2)}>
              Learn How They Work
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      )}

      {/* Section 2: How Neural Networks Work */}
      {currentSection === 2 && (
        <div className="space-y-8 bg-accent py-12 md:py-20 -mx-6 lg:-mx-12 px-6 lg:px-12">
          <Card className="rounded-2xl shadow-card hover:shadow-lifted transition-all max-w-7xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-3 text-2xl md:text-3xl font-bold uppercase">
                <Lightbulb className="w-8 h-8 text-warning" />
                How Neural Networks Learn
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-muted rounded-2xl">
                  <div className="text-4xl mb-3">📸</div>
                  <h4 className="font-bold text-lg mb-3 uppercase">1. Show Examples</h4>
                  <p className="text-sm font-medium text-muted-foreground">Show the neural network thousands of pictures with labels (like "cat" or "dog")</p>
                </div>

                <div className="text-center p-6 bg-muted rounded-2xl">
                  <div className="text-4xl mb-3">🧠</div>
                  <h4 className="font-bold text-lg mb-3 uppercase">2. Find Patterns</h4>
                  <p className="text-sm font-medium text-muted-foreground">The network learns to spot patterns (cats have whiskers, pointy ears, etc.)</p>
                </div>

                <div className="text-center p-6 bg-muted rounded-2xl">
                  <div className="text-4xl mb-3">✅</div>
                  <h4 className="font-bold text-lg mb-3 uppercase">3. Make Predictions</h4>
                  <p className="text-sm font-medium text-muted-foreground">Now it can look at new pictures and guess "This looks like a cat!"</p>
                </div>
              </div>

              <div className="bg-primary/10 p-8 rounded-2xl text-center">
                <h4 className="font-bold text-xl mb-3 uppercase">Cool Fact!</h4>
                <p className="font-medium text-muted-foreground">
                  Neural networks can learn from their mistakes, just like you do!
                  If they guess wrong, they adjust and get better next time!
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button className="rounded-full bg-secondary hover:bg-secondary/90" size="lg" onClick={() => setCurrentSection(3)}>
              Learn About Prompts
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      )}

      {/* Section 3: Prompts */}
      {currentSection === 3 && (
        <div className="space-y-8 py-12 md:py-20">
          <Card className="rounded-2xl shadow-card hover:shadow-lifted transition-all">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-3 text-2xl md:text-3xl font-bold uppercase">
                <MessageCircle className="w-8 h-8 text-accent" />
                What Are Prompts?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="text-center p-6 bg-muted rounded-2xl">
                <p className="mb-4 font-medium text-muted-foreground">
                  A <strong>prompt</strong> is like giving instructions to your AI friend!
                </p>
                <p className="font-medium text-muted-foreground">
                  Think of it as telling the neural network exactly what you want it to do,
                  just like asking a friend to help you with homework!
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-bold text-center text-success uppercase">Good Prompts</h4>
                  <div className="space-y-3">
                    <div className="p-4 bg-success/10 border border-success/20 rounded-2xl">
                      <strong>"Draw a cute cat playing with a ball"</strong>
                      <p className="text-sm font-medium text-muted-foreground mt-2">Specific and clear!</p>
                    </div>
                    <div className="p-4 bg-success/10 border border-success/20 rounded-2xl">
                      <strong>"Write a short story about a robot"</strong>
                      <p className="text-sm font-medium text-muted-foreground mt-2">Tells exactly what to do!</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-center text-destructive uppercase">Vague Prompts</h4>
                  <div className="space-y-3">
                    <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-2xl">
                      <strong>"Draw something"</strong>
                      <p className="text-sm font-medium text-muted-foreground mt-2">Too vague!</p>
                    </div>
                    <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-2xl">
                      <strong>"Make it good"</strong>
                      <p className="text-sm font-medium text-muted-foreground mt-2">Not specific enough!</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 p-8 rounded-2xl text-center">
                <h4 className="font-bold text-xl mb-3 uppercase">Pro Tip!</h4>
                <p className="font-medium text-muted-foreground">
                  The more specific and detailed your prompt is, the better results you'll get!
                  It's like giving your AI friend really clear directions!
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button className="rounded-full bg-secondary hover:bg-secondary/90" size="lg" onClick={() => setCurrentSection(4)}>
              Meet ELIZA
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      )}

      {/* Section 4: ELIZA */}
      {currentSection === 4 && (
        <div className="space-y-8 bg-accent py-12 md:py-20 -mx-6 lg:-mx-12 px-6 lg:px-12">
          <Card className="rounded-2xl shadow-card hover:shadow-lifted transition-all max-w-7xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-3 text-2xl md:text-3xl font-bold uppercase">
                <MessageCircle className="w-8 h-8 text-accent" />
                Meet ELIZA - The First Chatbot
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="text-center p-6 bg-muted rounded-2xl">
                <div className="text-6xl mb-4">🤖</div>
                <p className="text-lg font-medium text-muted-foreground">
                  ELIZA was created in 1966 and was one of the first programs that could have conversations with humans!
                </p>
              </div>

              <div className="bg-card border-2 border-accent rounded-2xl p-6 max-w-md mx-auto">
                <h4 className="font-bold text-center mb-4 text-accent uppercase">Chat with ELIZA (Simulation)</h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-muted p-3 rounded-xl">
                    <strong>You:</strong> I feel sad today
                  </div>
                  <div className="bg-accent/20 p-3 rounded-xl">
                    <strong>ELIZA:</strong> Why do you feel sad today?
                  </div>
                  <div className="bg-muted p-3 rounded-xl">
                    <strong>You:</strong> Because it's raining
                  </div>
                  <div className="bg-accent/20 p-3 rounded-xl">
                    <strong>ELIZA:</strong> Tell me more about the rain...
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="rounded-2xl shadow-card">
                  <CardHeader>
                    <CardTitle className="text-success uppercase">What ELIZA Could Do</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 font-medium text-muted-foreground">
                      <li>• Have simple conversations</li>
                      <li>• Ask questions back</li>
                      <li>• Use keywords to respond</li>
                      <li>• Make people feel heard</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl shadow-card">
                  <CardHeader>
                    <CardTitle className="text-warning uppercase">What ELIZA Couldn't Do</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 font-medium text-muted-foreground">
                      <li>• Truly understand meaning</li>
                      <li>• Remember past conversations</li>
                      <li>• Learn new things</li>
                      <li>• Be creative or smart</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-primary/10 p-8 rounded-2xl text-center">
                <h4 className="font-bold text-xl mb-3 uppercase">Why ELIZA Was Important</h4>
                <p className="font-medium text-muted-foreground">
                  ELIZA showed that computers could pretend to understand humans!
                  It was the first step toward the amazing AI assistants we have today!
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button className="rounded-full bg-secondary hover:bg-secondary/90" size="lg" onClick={() => setCurrentSection(5)}>
              Time for Quiz
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      )}

      {/* Section 5: Quiz */}
      {currentSection === 5 && !lessonComplete && (
        <div className="space-y-8 py-12 md:py-20">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold uppercase mb-6">
              Quiz {quizIndex + 1} of {lesson1Quiz.length}
            </h2>
            <Progress value={((quizIndex + 1) / lesson1Quiz.length) * 100} className="w-full max-w-md mx-auto" />
          </div>

          <QuizCard
            quiz={lesson1Quiz[quizIndex]}
            onComplete={handleQuizComplete}
            currentIndex={quizIndex}
            totalQuestions={lesson1Quiz.length}
          />
        </div>
      )}

      {/* Lesson Complete */}
      {lessonComplete && (
        <div className="text-center space-y-8 py-12 md:py-20">
          <Card className="rounded-2xl shadow-lifted bg-primary/5">
            <CardContent className="py-12 md:py-20">
              <CheckCircle className="w-20 h-20 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl md:text-5xl font-black uppercase mb-6">Congratulations!</h2>
              <p className="text-xl font-medium text-muted-foreground mb-8">
                You've completed Lesson 1 and learned about the history of neural networks!
              </p>

              {/* Score Display */}
              <div className="bg-white rounded-2xl shadow-card p-8 max-w-md mx-auto mb-8">
                <h3 className="text-2xl font-bold uppercase mb-4">Your Quiz Score</h3>
                <div className="text-6xl font-black mb-2">
                  {completedQuizzes}/{lesson1Quiz.length}
                </div>
                <div className="text-4xl font-bold mb-4 text-primary">
                  {Math.round((completedQuizzes / lesson1Quiz.length) * 100)}%
                </div>

                {/* Performance Badge */}
                <div className="mt-6">
                  {completedQuizzes === lesson1Quiz.length && (
                    <div className="text-2xl font-bold uppercase">
                      Perfect Score! You're an AI Expert!
                    </div>
                  )}
                  {completedQuizzes >= lesson1Quiz.length * 0.8 && completedQuizzes < lesson1Quiz.length && (
                    <div className="text-2xl font-bold uppercase">
                      Great Job! You're an AI Star!
                    </div>
                  )}
                  {completedQuizzes >= lesson1Quiz.length * 0.6 && completedQuizzes < lesson1Quiz.length * 0.8 && (
                    <div className="text-xl font-bold uppercase">
                      Good Work! Keep Learning!
                    </div>
                  )}
                  {completedQuizzes < lesson1Quiz.length * 0.6 && (
                    <div className="text-xl font-bold uppercase">
                      Nice Try! Practice Makes Perfect!
                    </div>
                  )}
                </div>
              </div>

              <p className="text-lg font-medium text-muted-foreground">
                You answered {completedQuizzes} out of {lesson1Quiz.length} questions correctly!
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-wrap justify-center gap-4">
            <Button className="rounded-full bg-secondary hover:bg-secondary/90" size="lg" asChild>
              <Link to="/lessons/2">
                Continue to Lesson 2
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>

            <Button variant="outline" className="rounded-full" size="lg" asChild>
              <Link to="/games">
                Class Activities
                <GamepadIcon className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lesson1;