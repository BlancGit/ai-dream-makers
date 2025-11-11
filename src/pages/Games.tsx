import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  ExternalLink, Brain, Image, MessageCircle, Sparkles, Globe, Palette, Bot, GitBranch, Presentation, ClipboardCheck
} from "lucide-react";

const Games = () => {
  const aiTools = [
    {
      id: "blockade-labs",
      title: "Blockade Labs",
      description: "Create amazing 360° skyboxes and immersive environments with AI!",
      icon: <Globe className="w-8 h-8" />,
      color: "text-blue-500",
      url: "https://skybox.blockadelabs.com/",
      features: ["360° Environment Creation", "AI-Powered Skyboxes", "Immersive Worlds", "Creative Freedom"]
    },
    {
      id: "animated-drawings",
      title: "Animated Drawings",
      description: "Draw your character and watch AI bring it to life with animations!",
      icon: <Image className="w-8 h-8" />,
      color: "text-green-500",
      url: "https://sketch.metademolab.com/canvas",
      features: ["Draw Your Character", "AI Animation", "Download Videos", "Share Creations"]
    },
    {
      id: "eliza-chat",
      title: "Chat with ELIZA",
      description: "Talk to the world's first chatbot from 1966 - a piece of AI history!",
      icon: <MessageCircle className="w-8 h-8" />,
      color: "text-purple-500",
      url: "https://eliza.botlibre.com/",
      features: ["Historical AI Experience", "Simple Conversations", "Pattern Matching", "Learn AI History"]
    },
    {
      id: "easy-peasy",
      title: "Easy-Peasy.AI",
      description: "Generate images, chat with AI characters, and create amazing content!",
      icon: <Sparkles className="w-8 h-8" />,
      color: "text-pink-500",
      url: "https://easy-peasy.ai/",
      features: ["AI Image Generation", "Chat with Characters", "Content Creation", "80+ Templates"]
    },
    {
      id: "kandinsky",
      title: "Kandinsky AI",
      description: "Create beautiful artwork and images using advanced AI technology!",
      icon: <Palette className="w-8 h-8" />,
      color: "text-orange-500",
      url: "https://fusionbrain.ai/editor/",
      features: ["AI Art Generation", "Style Selection", "Negative Prompts", "High Quality Images"]
    },
    {
      id: "google-ai-studio",
      title: "Google AI Studio",
      description: "Experiment with Google's powerful Gemini AI model for creative writing and problem-solving!",
      icon: <Bot className="w-8 h-8" />,
      color: "text-indigo-500",
      url: "https://aistudio.google.com/",
      features: ["Gemini AI Model", "Creative Writing", "Code Generation", "Problem Solving", "Multi-turn Conversations"]
    },
    {
      id: "smartdraw",
      title: "SmartDraw",
      description: "Create professional flowcharts and diagrams for your game logic and decision trees!",
      icon: <GitBranch className="w-8 h-8" />,
      color: "text-cyan-500",
      url: "https://www.smartdraw.com/",
      features: ["Flowchart Creation", "Game Logic Design", "Decision Trees", "Professional Diagrams", "Easy Templates"]
    },
    {
      id: "nn-juniors-quiz",
      title: "Final Quiz Neural Network Juniors",
      description: "Test your knowledge of neural networks with this junior-level quiz!",
      icon: <ClipboardCheck className="w-8 h-8" />,
      color: "text-emerald-500",
      url: "https://forms.gle/1SHsGX2BwpWiUc3BA",
      features: ["Test Neural Network Knowledge", "Junior Level Questions", "Track Your Progress", "Learn from Feedback"]
    },
    {
      id: "nn-advanced-quiz",
      title: "Final Quiz Neural Network Advanced/Intermediate",
      description: "Challenge yourself with advanced neural network concepts and questions!",
      icon: <ClipboardCheck className="w-8 h-8" />,
      color: "text-violet-500",
      url: "https://forms.gle/NCPeSmuC1k2GKheb8",
      features: ["Advanced Concepts", "Intermediate to Advanced Level", "Comprehensive Assessment", "Detailed Results"]
    },
    {
      id: "csharp-quiz",
      title: "Basic C# Quiz",
      description: "Test your C# programming fundamentals and coding skills!",
      icon: <ClipboardCheck className="w-8 h-8" />,
      color: "text-rose-500",
      url: "https://forms.gle/KvgD4HiWwB62AT8k6",
      features: ["C# Fundamentals", "Syntax Practice", "Problem Solving", "Instant Feedback"]
    },
    {
      id: "python-quiz",
      title: "Basic Python Quiz",
      description: "Evaluate your Python programming knowledge with this beginner-friendly quiz!",
      icon: <ClipboardCheck className="w-8 h-8" />,
      color: "text-amber-500",
      url: "https://forms.gle/DgSj9w5m7mjiz4y29",
      features: ["Python Basics", "Beginner Friendly", "Quick Assessment", "Learn While Testing"]
    }
  ];

  const handleToolClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
      {/* Header */}
      <div className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
          Real AI Class Activities
        </h1>
        <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-8 max-w-3xl mx-auto">
          Practice with these amazing AI tools that were mentioned in your lessons!
        </p>
        <div className="bg-accent border border-border rounded-2xl p-6 max-w-2xl mx-auto">
          <h3 className="font-bold text-lg uppercase mb-2">For Parents & Teachers</h3>
          <p className="text-sm font-medium text-muted-foreground">
            These are external websites. Please supervise children and review each site's terms of use.
            Some tools may require account creation with parent permission.
          </p>
        </div>
      </div>

      {/* AI Tools Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {aiTools.map((tool, index) => (
          <Card
            key={tool.id}
            className="rounded-2xl shadow-card hover:shadow-lifted transition-all cursor-pointer"
            onClick={() => handleToolClick(tool.url)}
          >
            <CardHeader className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground">
                {tool.icon}
              </div>
              <CardTitle className="text-xl font-bold flex items-center justify-center gap-2">
                {tool.title}
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <p className="text-muted-foreground font-medium text-center">{tool.description}</p>

              <div className="space-y-3">
                <h4 className="font-bold text-sm uppercase">What you can do:</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="w-full rounded-full bg-foreground hover:bg-foreground/90 text-background font-semibold" onClick={(e) => {
                e.stopPropagation();
                handleToolClick(tool.url);
              }}>
                Practice Now
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Step-by-Step Guide */}
      <section className="bg-accent py-12 md:py-20 -mx-6 lg:-mx-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-center mb-12 tracking-tight">
            How to Get Started
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="rounded-2xl shadow-card">
              <CardHeader className="text-center">
                <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-secondary-foreground font-black text-xl">1</span>
                </div>
                <CardTitle className="text-xl font-bold">Choose Your Tool</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm font-medium text-muted-foreground">
                  Pick one of the AI tools above that interests you most. Start with Animated Drawings if you love to draw!
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-card">
              <CardHeader className="text-center">
                <div className="w-14 h-14 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-background font-black text-xl">2</span>
                </div>
                <CardTitle className="text-xl font-bold">Read the Instructions</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm font-medium text-muted-foreground">
                  Each website has helpful guides. Take a moment to read how to use the tool before starting your creation!
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-card">
              <CardHeader className="text-center">
                <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-secondary-foreground font-black text-xl">3</span>
                </div>
                <CardTitle className="text-xl font-bold">Create & Share</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm font-medium text-muted-foreground">
                  Use what you learned about prompts to create amazing things! Share your creations with friends and family.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-foreground py-12 md:py-20 -mx-6 lg:-mx-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-center mb-12 text-background tracking-tight">
            Pro Tips for Using AI Tools
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="font-bold text-lg uppercase text-background">For Animated Drawings</h3>
              <ul className="space-y-2 text-sm text-background/80 font-medium">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Draw your character with clear arms, legs, and head</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Use simple shapes and bold lines</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Make sure your character looks like a person or animal</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Save your drawing as a PNG file</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg uppercase text-background">For ELIZA</h3>
              <ul className="space-y-2 text-sm text-background/80 font-medium">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Ask simple questions or share your thoughts</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Remember, ELIZA uses simple rules, not real AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Try different topics to see how it responds</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Notice the patterns in its answers</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg uppercase text-background">For Image Generation</h3>
              <ul className="space-y-2 text-sm text-background/80 font-medium">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Write detailed, specific prompts</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Include colors, styles, and moods you want</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Use descriptive words like "cute," "magical," or "bright"</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Be patient - AI takes time to create beautiful art!</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg uppercase text-background">For Google AI Studio</h3>
              <ul className="space-y-2 text-sm text-background/80 font-medium">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Try creative prompts like "Write a story about a robot learning to paint"</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Ask it to explain complex topics in simple terms</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Experiment with different conversation styles</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Challenge it with fun riddles and puzzles!</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg uppercase text-background">For SmartDraw Flowcharts</h3>
              <ul className="space-y-2 text-sm text-background/80 font-medium">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Start with the flowchart template</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Use ovals for start/end, rectangles for actions</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Use diamonds for decisions (yes/no questions)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Connect shapes with arrows to show flow</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg uppercase text-background">Stay Safe Online</h3>
              <ul className="space-y-2 text-sm text-background/80 font-medium">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Always ask a parent before creating accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Don't share personal information</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>If something doesn't work, ask for help</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>Have fun and be creative!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Learning */}
      <div className="text-center py-12 md:py-20">
        <Card className="rounded-2xl shadow-lifted max-w-md mx-auto">
          <CardContent className="py-12">
            <Brain className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">Want to Learn More?</h3>
            <p className="text-muted-foreground font-medium mb-8">
              Go back to the lessons to learn more about how these amazing tools work!
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Button className="rounded-full bg-foreground hover:bg-foreground/90 text-background font-semibold" asChild>
                <Link to="/lessons/1">Lesson 1</Link>
              </Button>
              <Button className="rounded-full bg-secondary hover:bg-secondary/90 font-semibold" asChild>
                <Link to="/lessons/2">Lesson 2</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Games;