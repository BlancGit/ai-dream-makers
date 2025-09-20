import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ExternalLink, Brain, Image, MessageCircle, Sparkles, Globe, Palette 
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
    }
  ];

  const handleToolClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Real AI Tools to Explore!
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          Try these amazing AI tools that were mentioned in your lessons!
        </p>
        <div className="bg-warning/10 border border-warning/20 rounded-lg p-4 max-w-2xl mx-auto">
          <h3 className="font-bold text-warning mb-2">👨‍👩‍👧‍👦 For Parents & Teachers</h3>
          <p className="text-sm text-muted-foreground">
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
            className="shadow-card hover:shadow-fun transition-all duration-300 hover:scale-105 cursor-pointer animate-bounce-in"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={() => handleToolClick(tool.url)}
          >
            <CardHeader className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center ${tool.color}`}>
                {tool.icon}
              </div>
              <CardTitle className="text-xl flex items-center justify-center gap-2">
                {tool.title}
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-center">{tool.description}</p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">✨ What you can do:</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button variant="fun" className="w-full" onClick={(e) => {
                e.stopPropagation();
                handleToolClick(tool.url);
              }}>
                <ExternalLink className="w-4 h-4 mr-2" />
                Try It Now!
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Step-by-Step Guide */}
      <section className="bg-muted rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          How to Get Started
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="shadow-card">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary-foreground font-bold">1</span>
              </div>
              <CardTitle className="text-lg">Choose Your Tool</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground">
                Pick one of the AI tools above that interests you most. Start with Animated Drawings if you love to draw!
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-learning rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-secondary-foreground font-bold">2</span>
              </div>
              <CardTitle className="text-lg">Read the Instructions</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground">
                Each website has helpful guides. Take a moment to read how to use the tool before starting your creation!
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-fun rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary-foreground font-bold">3</span>
              </div>
              <CardTitle className="text-lg">Create & Share</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground">
                Use what you learned about prompts to create amazing things! Share your creations with friends and family.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-gradient-primary rounded-xl p-8 text-primary-foreground">
        <h2 className="text-3xl font-bold text-center mb-6">💡 Pro Tips for Using AI Tools</h2>
        
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div className="space-y-3">
            <h3 className="font-bold text-lg">🎨 For Animated Drawings:</h3>
            <ul className="space-y-2 opacity-90">
              <li>• Draw your character with clear arms, legs, and head</li>
              <li>• Use simple shapes and bold lines</li>
              <li>• Make sure your character looks like a person or animal</li>
              <li>• Save your drawing as a PNG file</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-bold text-lg">🤖 For ELIZA:</h3>
            <ul className="space-y-2 opacity-90">
              <li>• Ask simple questions or share your thoughts</li>
              <li>• Remember, ELIZA uses simple rules, not real AI</li>
              <li>• Try different topics to see how it responds</li>
              <li>• Notice the patterns in its answers</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-bold text-lg">🌟 For Image Generation:</h3>
            <ul className="space-y-2 opacity-90">
              <li>• Write detailed, specific prompts</li>
              <li>• Include colors, styles, and moods you want</li>
              <li>• Use descriptive words like "cute," "magical," or "bright"</li>
              <li>• Be patient - AI takes time to create beautiful art!</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-bold text-lg">🛡️ Stay Safe Online:</h3>
            <ul className="space-y-2 opacity-90">
              <li>• Always ask a parent before creating accounts</li>
              <li>• Don't share personal information</li>
              <li>• If something doesn't work, ask for help</li>
              <li>• Have fun and be creative!</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Back to Learning */}
      <div className="text-center">
        <Card className="shadow-fun bg-gradient-learning max-w-md mx-auto">
          <CardContent className="py-8">
            <Brain className="w-12 h-12 mx-auto mb-4 text-secondary-foreground" />
            <h3 className="text-xl font-bold mb-3 text-secondary-foreground">Want to Learn More?</h3>
            <p className="text-secondary-foreground mb-4">
              Go back to the lessons to learn more about how these amazing tools work!
            </p>
            <div className="flex gap-2 justify-center">
              <Button variant="secondary" asChild>
                <a href="/lesson1">Lesson 1</a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="/lesson2">Lesson 2</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Games;