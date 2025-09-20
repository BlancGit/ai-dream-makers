import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Star, Users, BookOpen, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center animate-float shadow-glow">
            <Brain className="w-12 h-12 text-primary-foreground" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          About Neural Networks Academy
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Making artificial intelligence education fun, accessible, and engaging for the next generation of innovators!
        </p>
      </section>

      {/* Mission Section */}
      <section className="grid md:grid-cols-3 gap-6">
        <Card className="shadow-card hover:shadow-fun transition-all duration-300 hover:scale-105 animate-bounce-in">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-learning rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-secondary-foreground" />
            </div>
            <CardTitle className="text-primary">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground">
              To inspire and educate children about the amazing world of artificial intelligence through interactive, fun, and age-appropriate learning experiences.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-fun transition-all duration-300 hover:scale-105 animate-bounce-in" style={{ animationDelay: "100ms" }}>
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-fun rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-primary">Our Vision</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground">
              A world where every child understands and can confidently use AI technologies to solve problems and create amazing things.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card hover:shadow-fun transition-all duration-300 hover:scale-105 animate-bounce-in" style={{ animationDelay: "200ms" }}>
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-primary">Our Values</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground">
              Fun learning, creativity, curiosity, and making complex topics simple and accessible for young minds to understand and explore.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* What Makes Us Special */}
      <section className="bg-muted rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          What Makes Us Special?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-accent" />
              Educational Excellence
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Age-appropriate content:</strong> Complex AI concepts broken down into simple, digestible lessons</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Interactive learning:</strong> Hands-on activities, quizzes, and games that make learning stick</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Progressive curriculum:</strong> From basic concepts to practical AI tool usage</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Users className="w-6 h-6 text-accent" />
              Child-Centered Design
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Colorful & engaging:</strong> Beautiful animations and visual elements that capture attention</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Gamified experience:</strong> Points, achievements, and challenges that motivate learning</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Safe environment:</strong> Child-friendly content with educational focus</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          Our Learning Journey
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-fun border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  1
                </div>
                Lesson 1: Introduction & History
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">🧠 Core Concepts:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• What are neural networks?</li>
                  <li>• Meet the Perceptron (1958)</li>
                  <li>• Understanding prompts</li>
                  <li>• Chat with ELIZA (1966)</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">🎯 Learning Goals:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Basic AI terminology</li>
                  <li>• Historical context</li>
                  <li>• How machines learn</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-fun border-2 border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <div className="w-8 h-8 bg-gradient-learning rounded-full flex items-center justify-center text-secondary-foreground font-bold text-sm">
                  2
                </div>
                Lesson 2: Types & Applications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold">🚀 Core Concepts:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 6 stages of AI development</li>
                  <li>• 7 areas of AI application</li>
                  <li>• Hands-on tool exploration</li>
                  <li>• Creative AI projects</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">🎯 Learning Goals:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• AI in real world</li>
                  <li>• Practical applications</li>
                  <li>• Creative possibilities</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Target Audience */}
      <section className="bg-gradient-primary rounded-xl p-8 text-primary-foreground text-center">
        <h2 className="text-3xl font-bold mb-6">Perfect For Young Learners</h2>
        
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div className="bg-primary-foreground/20 p-4 rounded-lg">
            <div className="text-3xl mb-2">🎓</div>
            <h3 className="font-bold mb-2">Ages 8-14</h3>
            <p>Designed for elementary and middle school students with curious minds!</p>
          </div>
          
          <div className="bg-primary-foreground/20 p-4 rounded-lg">
            <div className="text-3xl mb-2">🏫</div>
            <h3 className="font-bold mb-2">Classroom Ready</h3>
            <p>Perfect for teachers looking to integrate AI education into their curriculum!</p>
          </div>
          
          <div className="bg-primary-foreground/20 p-4 rounded-lg">
            <div className="text-3xl mb-2">👨‍👩‍👧‍👦</div>
            <h3 className="font-bold mb-2">Family Learning</h3>
            <p>Parents and children can explore the future of technology together!</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold mb-4 text-primary">Ready to Start Learning?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of young learners who are already discovering the amazing world of artificial intelligence!
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="xl" asChild>
            <Link to="/lesson1">
              <BookOpen className="w-5 h-5" />
              Start Learning Now!
            </Link>
          </Button>
          
          <Button variant="playful" size="xl" asChild>
            <Link to="/games">
              <Star className="w-5 h-5" />
              Play Games First!
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;