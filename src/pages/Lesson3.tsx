import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuizCard } from "@/components/QuizCard";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Palette, Wand2, Image, ArrowRight, CheckCircle, Sparkles, Brush, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";

const lesson3Quiz = [
  {
    question: "What is Kandinsky?",
    options: [
      "A programming language",
      "A Russian neural network for image generation",
      "A video game engine",
      "A text editor"
    ],
    correctAnswer: 1,
    explanation: "Kandinsky is a Russian neural network released in 2022, trained on 170 million text-image pairs to generate images from text!"
  },
  {
    question: "How many languages can Kandinsky understand for prompts?",
    options: [
      "Only English",
      "10 languages",
      "50 languages",
      "101 languages"
    ],
    correctAnswer: 3,
    explanation: "Kandinsky can generate images from text prompts in 101 different languages!"
  },
  {
    question: "What should you avoid when writing prompts?",
    options: [
      "Specific colors",
      "Artistic styles",
      "Too many details and negations",
      "Simple descriptions"
    ],
    correctAnswer: 2,
    explanation: "Avoid too many specific details and negations in your main prompt. Use the negative prompt field for things you don't want!"
  },
  {
    question: "What is a negative prompt used for?",
    options: [
      "To delete images",
      "To specify what NOT to include in the image",
      "To make images darker",
      "To reduce file size"
    ],
    correctAnswer: 1,
    explanation: "Negative prompts tell the AI what elements to exclude from the generated image."
  },
  {
    question: "How many artistic styles does Kandinsky offer?",
    options: [
      "5 styles",
      "10 styles",
      "18 styles",
      "25 styles"
    ],
    correctAnswer: 2,
    explanation: "Kandinsky offers 18 different artistic styles, from photorealism to illustrations!"
  }
];

const promptExamples = [
  {
    prompt: "Dodge Durango in the mountains, style painting by artist Ivan Shishkin",
    description: "Combines a modern car with classic Russian landscape painting style",
    artist: "Ivan Shishkin (1832-1898) - Famous Russian landscape painter known for his forest scenes"
  },
  {
    prompt: "Cat in water, realistic and detailed render, Avatar movie style, green and amber, custom illustration, realistic lighting",
    description: "Creates a cinematic cat image with specific color palette and movie-inspired aesthetics",
    artist: "James Cameron - Director of Avatar, known for revolutionary visual effects"
  },
  {
    prompt: "Edith Piaf on stage, watercolor style",
    description: "Depicts the famous French singer in soft, flowing watercolor artistic style",
    artist: "Édith Piaf (1915-1963) - Legendary French cabaret singer"
  }
];

const artStyles = [
  { name: "Photorealism", icon: Camera, description: "Ultra-realistic, photo-like images" },
  { name: "Watercolor", icon: Brush, description: "Soft, flowing, paint-like effects" },
  { name: "Oil Painting", icon: Palette, description: "Rich, textured, classical art style" },
  { name: "Digital Art", icon: Sparkles, description: "Modern, clean, computer-generated look" }
];

export default function Lesson3() {
  const [currentSection, setCurrentSection] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [completedQuizzes, setCompletedQuizzes] = useState(0);
  const [lessonComplete, setLessonComplete] = useState(false);
  const [selectedExample, setSelectedExample] = useState(0);
  const [completedSections, setCompletedSections] = useState<number[]>([]);

  const sections = [
    "Introduction to Kandinsky",
    "Interface & Features",
    "Writing Perfect Prompts",
    "Artistic Styles",
    "Practice & Examples"
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

    if (quizIndex < lesson3Quiz.length - 1) {
      setQuizIndex(prev => prev + 1);
    } else {
      setLessonComplete(true);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Lesson 3: Advanced Prompt Engineering with Kandinsky
        </h1>
        <Progress value={progress} className="h-2" />
        <p className="text-sm text-gray-600 mt-2">
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
                  <Wand2 className="w-6 h-6 text-purple-500" />
                  Introduction to Kandinsky
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <Sparkles className="h-4 w-4" />
                  <AlertDescription>
                    Kandinsky is a powerful Russian neural network that can create amazing images from text descriptions!
                  </AlertDescription>
                </Alert>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="border-purple-200">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">What is Kandinsky?</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Released in 2022</li>
                        <li>• Trained on 170 million text-image pairs</li>
                        <li>• Understands 101 languages</li>
                        <li>• Creates art in multiple styles</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-pink-200">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">What Can It Do?</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Generate images from text</li>
                        <li>• Edit existing images</li>
                        <li>• Combine multiple images</li>
                        <li>• Extend and complete images</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Button onClick={() => { markSectionComplete(0); setCurrentSection(1); }}>
                  Continue to Interface <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}

          {currentSection === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Image className="w-6 h-6 text-blue-500" />
                  Interface & Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-4">Kandinsky Interface Elements</h3>

                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium text-blue-600 mb-2">1. Central Image Area</h4>
                      <p className="text-sm">Where your generated image appears (default 1:1 ratio)</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium text-purple-600 mb-2">2. Prompt Input Field</h4>
                      <p className="text-sm">Type your text description here with the "Create" button</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium text-pink-600 mb-2">3. Negative Prompt Field</h4>
                      <p className="text-sm">Specify what you DON'T want in the image</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium text-green-600 mb-2">4. Style Selection</h4>
                      <p className="text-sm">Choose from 18 different artistic styles</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium text-orange-600 mb-2">5. Eraser Tool</h4>
                      <p className="text-sm">Edit specific areas of your generated image</p>
                    </div>
                  </div>
                </div>

                <Button onClick={() => { markSectionComplete(1); setCurrentSection(2); }}>
                  Learn Prompt Writing <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}

          {currentSection === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="w-6 h-6 text-green-500" />
                  Writing Perfect Prompts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-green-200 bg-green-50">
                  <AlertDescription>
                    <strong>The Secret Formula:</strong> Object + Characteristics + Action + Location + Style
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-3">Best Practices</h3>
                      <ol className="space-y-2 text-sm">
                        <li>1️⃣ <strong>Identify main objects first</strong> - Start with what's most important</li>
                        <li>2️⃣ <strong>Add characteristics</strong> - Color, size, texture, mood</li>
                        <li>3️⃣ <strong>Specify actions</strong> - What is happening in the scene?</li>
                        <li>4️⃣ <strong>Set the location</strong> - Where does this take place?</li>
                        <li>5️⃣ <strong>Reference art styles</strong> - Famous artists or art movements</li>
                      </ol>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-3">What to Avoid</h3>
                      <ul className="space-y-2 text-sm">
                        <li>❌ Too many specific details at once</li>
                        <li>❌ Negations in the main prompt (use negative prompt field)</li>
                        <li>❌ Contradictory instructions</li>
                        <li>❌ Overly complex sentences</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Button onClick={() => { markSectionComplete(2); setCurrentSection(3); }}>
                  Explore Art Styles <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}

          {currentSection === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-6 h-6 text-purple-500" />
                  Artistic Styles in Kandinsky
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Kandinsky offers 18 different artistic styles. Here are some popular ones:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {artStyles.map((style, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-3">
                          <style.icon className="w-8 h-8 text-purple-500 mt-1" />
                          <div>
                            <h3 className="font-semibold">{style.name}</h3>
                            <p className="text-sm text-gray-600 mt-1">{style.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Alert>
                  <AlertDescription>
                    💡 <strong>Pro Tip:</strong> Combine styles with artist names for unique results!
                    Try "in the style of Van Gogh" or "Picasso-inspired cubism"
                  </AlertDescription>
                </Alert>

                <Button onClick={() => { markSectionComplete(3); setCurrentSection(4); }}>
                  See Examples <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}

          {currentSection === 4 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-yellow-500" />
                  Practice & Examples
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {promptExamples.map((example, index) => (
                    <Button
                      key={index}
                      variant={selectedExample === index ? "default" : "outline"}
                      className="w-full justify-start text-left"
                      onClick={() => setSelectedExample(index)}
                    >
                      Example {index + 1}
                    </Button>
                  ))}
                </div>

                {selectedExample !== null && (
                  <Card className="mt-4 border-2 border-purple-200">
                    <CardContent className="pt-6 space-y-4">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 mb-2">Prompt:</h4>
                        <p className="font-mono text-sm bg-white p-3 rounded border border-purple-200">
                          {promptExamples[selectedExample].prompt}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Description:</h4>
                        <p className="text-sm text-gray-600">
                          {promptExamples[selectedExample].description}
                        </p>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">Artist/Style Reference:</h4>
                        <p className="text-sm">
                          {promptExamples[selectedExample].artist}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Alert className="border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>You've completed Lesson 3!</strong> Ready to test your knowledge?
                  </AlertDescription>
                </Alert>

                <Button
                  onClick={() => {
                    markSectionComplete(4);
                    setShowQuiz(true);
                  }}
                  className="w-full"
                >
                  Take the Quiz! <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
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
                  Test your knowledge about Kandinsky and prompt engineering!
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
                  Quiz {quizIndex + 1} of {lesson3Quiz.length}
                </h2>
                <Progress value={((quizIndex + 1) / lesson3Quiz.length) * 100} className="w-full max-w-md mx-auto" />
              </div>

              <QuizCard
                quiz={lesson3Quiz[quizIndex]}
                onComplete={handleQuizComplete}
                currentIndex={quizIndex}
                totalQuestions={lesson3Quiz.length}
              />
            </div>
          )}

          {lessonComplete && (
            <div className="text-center space-y-6 animate-bounce-in">
              <Card className="shadow-glow bg-gradient-primary text-primary-foreground">
                <CardContent className="py-12">
                  <CheckCircle className="w-20 h-20 mx-auto mb-6 animate-bounce" />
                  <h2 className="text-3xl font-bold mb-4">Congratulations! 🎉</h2>
                  <p className="text-xl mb-4">You've completed Lesson 3!</p>
                  <p className="text-lg opacity-90">
                    Quiz Score: {completedQuizzes}/{lesson3Quiz.length} correct answers
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex justify-between">
        <Link to="/lessons/2">
          <Button variant="outline">← Previous Lesson</Button>
        </Link>
        <Link to="/lessons/4">
          <Button>Next Lesson →</Button>
        </Link>
      </div>
    </div>
  );
}