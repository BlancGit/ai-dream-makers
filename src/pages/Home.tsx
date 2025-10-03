import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BookOpen, GamepadIcon, Star, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center animate-float shadow-glow">
            <Brain className="w-12 h-12 text-primary-foreground" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Welcome to Neural Networks Academy!
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Discover the amazing world of artificial intelligence through fun, interactive lessons designed just for kids!
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="default" size="lg" asChild className="text-lg">
            <Link to="/lessons/1">
              <BookOpen className="w-5 h-5" />
              Start Learning!
            </Link>
          </Button>

          <Button variant="secondary" size="lg" asChild className="text-lg">
            <Link to="/games">
              <GamepadIcon className="w-5 h-5" />
              Practice Activities!
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6">
        <Card className="shadow-card hover:shadow-fun transition-all duration-300 hover:scale-105">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-learning rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in">
              <BookOpen className="w-8 h-8 text-secondary-foreground" />
            </div>
            <CardTitle className="text-primary">Interactive Lessons</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground">
              Learn about neural networks through engaging stories, animations, and hands-on activities!
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-fun transition-all duration-300 hover:scale-105">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-fun rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in">
              <GamepadIcon className="w-8 h-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-primary">Class Activities</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground">
              Practice with real AI tools and activities to test your knowledge while having fun!
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-fun transition-all duration-300 hover:scale-105">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in">
              <Brain className="w-8 h-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-primary">Visual Learning</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground">
              See how neural networks work with beautiful animations and interactive visualizations!
            </p>
          </CardContent>
        </Card>
      </section>

      {/* What You'll Learn Section */}
      <section className="bg-muted rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          What You'll Learn
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Star className="w-5 h-5 text-warning" />
              Lesson 1: History & Basics
            </h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Meet the first neural network - the Perceptron!
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Learn about ELIZA, the first chatbot
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Understand what prompts are
              </li>
            </ul>
            <Button variant="outline" asChild className="w-full">
              <Link to="/lessons/1">Start Lesson 1</Link>
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Star className="w-5 h-5 text-warning" />
              Lesson 2: Types & Applications
            </h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Explore 7 amazing areas of AI
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Create animations with AI tools
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Chat with AI characters
              </li>
            </ul>
            <Button variant="outline" asChild className="w-full">
              <Link to="/lessons/2">Start Lesson 2</Link>
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Star className="w-5 h-5 text-warning" />
              Lesson 3: AI Art Generation
            </h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Master Kandinsky image generation
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Write effective prompts
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Explore 18 artistic styles
              </li>
            </ul>
            <Button variant="outline" asChild className="w-full">
              <Link to="/lessons/3">Start Lesson 3</Link>
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Star className="w-5 h-5 text-warning" />
              Lesson 4: Game Design
            </h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Create flowcharts for games
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Design branching storylines
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Plan multiple endings
              </li>
            </ul>
            <Button variant="outline" asChild className="w-full">
              <Link to="/lessons/4">Start Lesson 4</Link>
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Star className="w-5 h-5 text-warning" />
              Lesson 5: Build Your Game!
            </h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Create interactive PowerPoint games
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Add hyperlinks and navigation
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Combine AI images with your story
              </li>
            </ul>
            <Button variant="outline" asChild className="w-full">
              <Link to="/lessons/5">Start Lesson 5</Link>
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Star className="w-5 h-5 text-warning" />
              C# Programming
            </h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Learn C# fundamentals with extensive comments
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Master control flow, methods, and OOP
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Build a complete console RPG game
              </li>
            </ul>
            <Button variant="outline" asChild className="w-full">
              <Link to="/lessons/csharp">Start C# Programming</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-gradient-primary rounded-xl text-primary-foreground">
        <h2 className="text-3xl font-bold mb-4">Ready to Become an AI Expert?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of kids who are already learning about the future of technology!
        </p>
        
        <Button variant="secondary" size="lg" asChild className="text-lg">
          <Link to="/lessons/1">
            Start Your AI Journey Now!
          </Link>
        </Button>
      </section>
    </div>
  );
};

export default Home;