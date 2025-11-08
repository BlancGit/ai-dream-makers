import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Star, Users, BookOpen, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center">
            <Brain className="w-10 h-10 text-secondary-foreground" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
          About Neural Networks Academy
        </h1>

        <p className="text-xl md:text-2xl font-medium text-muted-foreground max-w-3xl mx-auto">
          Making artificial intelligence education fun, accessible, and engaging for the next generation of innovators!
        </p>
      </section>

      {/* Mission Section */}
      <section className="grid md:grid-cols-3 gap-6">
        <Card className="rounded-2xl shadow-card hover:shadow-lifted transition-all">
          <CardHeader className="text-center">
            <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-7 h-7 text-secondary-foreground" />
            </div>
            <CardTitle className="text-xl font-bold">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground font-medium">
              To inspire and educate children about the amazing world of artificial intelligence through interactive, fun, and age-appropriate learning experiences.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-card hover:shadow-lifted transition-all">
          <CardHeader className="text-center">
            <div className="w-14 h-14 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-7 h-7 text-background" />
            </div>
            <CardTitle className="text-xl font-bold">Our Vision</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground font-medium">
              A world where every child understands and can confidently use AI technologies to solve problems and create amazing things.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-card hover:shadow-lifted transition-all">
          <CardHeader className="text-center">
            <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-7 h-7 text-secondary-foreground" />
            </div>
            <CardTitle className="text-xl font-bold">Our Values</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground font-medium">
              Fun learning, creativity, curiosity, and making complex topics simple and accessible for young minds to understand and explore.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* What Makes Us Special */}
      <section className="bg-accent py-12 md:py-20 -mx-6 lg:-mx-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-center mb-12 tracking-tight">
            What Makes Us Special
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3 uppercase">
                <BookOpen className="w-7 h-7 text-secondary" />
                Educational Excellence
              </h3>
              <ul className="space-y-4 text-muted-foreground font-medium">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Age-appropriate content:</strong> Complex AI concepts broken down into simple, digestible lessons</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Interactive learning:</strong> Hands-on activities, quizzes, and games that make learning stick</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Progressive curriculum:</strong> From basic concepts to practical AI tool usage</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3 uppercase">
                <Users className="w-7 h-7 text-secondary" />
                Child-Centered Design
              </h3>
              <ul className="space-y-4 text-muted-foreground font-medium">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Clean & engaging:</strong> Beautiful visual elements that capture attention</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Gamified experience:</strong> Points, achievements, and challenges that motivate learning</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Safe environment:</strong> Child-friendly content with educational focus</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-black uppercase text-center mb-12 tracking-tight">
          Our Learning Journey
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl shadow-card hover:shadow-lifted transition-all border-2 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl font-bold uppercase">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-black">
                  1
                </div>
                Lesson 1: Introduction & History
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-3">
                <h4 className="font-bold uppercase text-sm">Core Concepts</h4>
                <ul className="text-sm text-muted-foreground font-medium space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>What are neural networks?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Meet the Perceptron (1958)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Understanding prompts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Chat with ELIZA (1966)</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold uppercase text-sm">Learning Goals</h4>
                <ul className="text-sm text-muted-foreground font-medium space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Basic AI terminology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Historical context</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>How machines learn</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-card hover:shadow-lifted transition-all border-2 border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl font-bold uppercase">
                <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center text-background font-black">
                  2
                </div>
                Lesson 2: Types & Applications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-3">
                <h4 className="font-bold uppercase text-sm">Core Concepts</h4>
                <ul className="text-sm text-muted-foreground font-medium space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>6 stages of AI development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>7 areas of AI application</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Hands-on tool exploration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Creative AI projects</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold uppercase text-sm">Learning Goals</h4>
                <ul className="text-sm text-muted-foreground font-medium space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>AI in real world</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Practical applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Creative possibilities</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Target Audience */}
      <section className="bg-foreground py-12 md:py-20 -mx-6 lg:-mx-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-12 text-background tracking-tight">
            Perfect For Young Learners
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background/10 p-8 rounded-2xl">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="font-bold text-lg mb-3 text-background uppercase">Ages 8-14</h3>
              <p className="text-sm text-background/80 font-medium">
                Designed for elementary and middle school students with curious minds!
              </p>
            </div>

            <div className="bg-background/10 p-8 rounded-2xl">
              <div className="text-5xl mb-4">🏫</div>
              <h3 className="font-bold text-lg mb-3 text-background uppercase">Classroom Ready</h3>
              <p className="text-sm text-background/80 font-medium">
                Perfect for teachers looking to integrate AI education into their curriculum!
              </p>
            </div>

            <div className="bg-background/10 p-8 rounded-2xl">
              <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="font-bold text-lg mb-3 text-background uppercase">Family Learning</h3>
              <p className="text-sm text-background/80 font-medium">
                Parents and children can explore the future of technology together!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 tracking-tight">
          Ready to Start Learning?
        </h2>
        <p className="text-xl font-medium text-muted-foreground mb-10 max-w-2xl mx-auto">
          Join thousands of young learners who are already discovering the amazing world of artificial intelligence!
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold h-14 px-8" size="lg" asChild>
            <Link to="/lessons/1">
              Start Learning Now
              <BookOpen className="w-5 h-5 ml-2" />
            </Link>
          </Button>

          <Button className="rounded-full bg-foreground hover:bg-foreground/90 text-background font-semibold h-14 px-8" size="lg" asChild>
            <Link to="/games">
              Try Class Activities
              <Star className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;