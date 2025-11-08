import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BookOpen, GamepadIcon, Code, Sparkles, ArrowRight, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Hero Content */}
            <div className="space-y-8 text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.95] tracking-tight">
                YOUR BEST NEURAL NETWORK LEARNING
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-xl mx-auto lg:mx-0">
                Discover the amazing world of artificial intelligence through fun, interactive lessons designed just for kids!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 h-14 text-base font-semibold shadow-lifted hover:shadow-card transition-all"
                >
                  <Link to="/lessons/1">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-2 border-foreground h-14 px-8 text-base font-semibold hover:bg-foreground hover:text-background transition-all"
                >
                  <Link to="/games">
                    <PlayCircle className="w-5 h-5 mr-2" />
                    SEE HOW IT WORKS
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: Preview Cards */}
            <div className="relative hidden lg:flex justify-center items-center">
              <div className="grid grid-cols-2 gap-4">
                <Card className="shadow-card hover:shadow-lifted transition-all rounded-2xl border-border">
                  <CardHeader className="pb-3">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mb-2">
                      <Brain className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <CardTitle className="text-base">AI Basics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Learn neural networks from scratch</p>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-lifted transition-all rounded-2xl border-border mt-8">
                  <CardHeader className="pb-3">
                    <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center mb-2">
                      <Code className="w-5 h-5 text-background" />
                    </div>
                    <CardTitle className="text-base">Coding</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Master C# and Python programming</p>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-lifted transition-all rounded-2xl border-border">
                  <CardHeader className="pb-3">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mb-2">
                      <Sparkles className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-base">AI Art</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Create images with AI tools</p>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-lifted transition-all rounded-2xl border-border mt-8">
                  <CardHeader className="pb-3">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mb-2">
                      <GamepadIcon className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <CardTitle className="text-base">Games</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Build interactive experiences</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies / Features Section */}
      <section className="bg-accent py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-card hover:shadow-lifted transition-all rounded-2xl border-border bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-3">
                  <BookOpen className="w-6 h-6 text-secondary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold">Interactive Lessons</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  Learn about neural networks through engaging stories, animations, and hands-on activities designed for young minds.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-lifted transition-all rounded-2xl border-border bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-foreground rounded-full flex items-center justify-center mb-3">
                  <GamepadIcon className="w-6 h-6 text-background" />
                </div>
                <CardTitle className="text-xl font-bold">Class Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  Practice with real AI tools and activities to test your knowledge while having fun and building skills.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-lifted transition-all rounded-2xl border-border bg-card">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-3 border-2 border-border">
                  <Brain className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl font-bold">Visual Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  See how neural networks work with beautiful animations and interactive visualizations that make learning easy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="bg-background py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-16 tracking-tight">
            What You'll Learn
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-lifted transition-all rounded-2xl border-border p-6 space-y-5">
              <h3 className="text-2xl font-bold">Lesson 1</h3>
              <p className="text-base font-semibold text-muted-foreground">History & Basics</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Meet the first neural network - the Perceptron</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Learn about ELIZA, the first chatbot</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Understand what prompts are</span>
                </li>
              </ul>
              <Button asChild className="w-full rounded-full bg-foreground hover:bg-foreground/90 text-background font-semibold">
                <Link to="/lessons/1">Start Lesson 1</Link>
              </Button>
            </Card>

            <Card className="shadow-card hover:shadow-lifted transition-all rounded-2xl border-border p-6 space-y-5">
              <h3 className="text-2xl font-bold">Lesson 2</h3>
              <p className="text-base font-semibold text-muted-foreground">Types & Applications</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Explore 7 amazing areas of AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Create animations with AI tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Chat with AI characters</span>
                </li>
              </ul>
              <Button asChild className="w-full rounded-full bg-foreground hover:bg-foreground/90 text-background font-semibold">
                <Link to="/lessons/2">Start Lesson 2</Link>
              </Button>
            </Card>

            <Card className="shadow-card hover:shadow-lifted transition-all rounded-2xl border-border p-6 space-y-5">
              <h3 className="text-2xl font-bold">Lesson 3</h3>
              <p className="text-base font-semibold text-muted-foreground">AI Art Generation</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Master Kandinsky image generation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Write effective prompts</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Explore 18 artistic styles</span>
                </li>
              </ul>
              <Button asChild className="w-full rounded-full bg-foreground hover:bg-foreground/90 text-background font-semibold">
                <Link to="/lessons/3">Start Lesson 3</Link>
              </Button>
            </Card>

            <Card className="shadow-card hover:shadow-lifted transition-all rounded-2xl border-border p-6 space-y-5">
              <h3 className="text-2xl font-bold">Lesson 4</h3>
              <p className="text-base font-semibold text-muted-foreground">Game Design</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Create flowcharts for games</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Design branching storylines</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Plan multiple endings</span>
                </li>
              </ul>
              <Button asChild className="w-full rounded-full bg-foreground hover:bg-foreground/90 text-background font-semibold">
                <Link to="/lessons/4">Start Lesson 4</Link>
              </Button>
            </Card>

            <Card className="shadow-card hover:shadow-lifted transition-all rounded-2xl border-border p-6 space-y-5">
              <h3 className="text-2xl font-bold">Lesson 5</h3>
              <p className="text-base font-semibold text-muted-foreground">Build Your Game!</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Create interactive PowerPoint games</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Add hyperlinks and navigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Combine AI images with your story</span>
                </li>
              </ul>
              <Button asChild className="w-full rounded-full bg-foreground hover:bg-foreground/90 text-background font-semibold">
                <Link to="/lessons/5">Start Lesson 5</Link>
              </Button>
            </Card>

            <Card className="shadow-card hover:shadow-lifted transition-all rounded-2xl border-border p-6 space-y-5">
              <h3 className="text-2xl font-bold">C# Programming</h3>
              <p className="text-base font-semibold text-muted-foreground">Advanced Coding</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Learn C# fundamentals with extensive comments</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Master control flow, methods, and OOP</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Build a complete console RPG game</span>
                </li>
              </ul>
              <Button asChild className="w-full rounded-full bg-foreground hover:bg-foreground/90 text-background font-semibold">
                <Link to="/lessons/csharp">Start C# Programming</Link>
              </Button>
            </Card>

            <Card className="shadow-card hover:shadow-lifted transition-all rounded-2xl border-border p-6 space-y-5">
              <h3 className="text-2xl font-bold">Python Programming</h3>
              <p className="text-base font-semibold text-muted-foreground">Beginner Friendly</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Learn Python - the beginner-friendly language</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Master indentation, functions, and data structures</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Create an epic text adventure game</span>
                </li>
              </ul>
              <Button asChild className="w-full rounded-full bg-foreground hover:bg-foreground/90 text-background font-semibold">
                <Link to="/lessons/python">Start Python Programming</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-foreground py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 tracking-tight text-background">
            Ready to Become an AI Expert?
          </h2>
          <p className="text-xl md:text-2xl text-background/80 font-medium mb-10">
            Join thousands of kids who are already learning about the future of technology!
          </p>

          <Button
            asChild
            size="lg"
            className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground px-10 h-16 text-lg font-semibold shadow-lifted hover:shadow-card transition-all"
          >
            <Link to="/lessons/1">
              Start Your AI Journey Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;