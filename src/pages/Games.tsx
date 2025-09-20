import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  GamepadIcon, Brain, Image, MessageCircle, Zap, 
  Trophy, Star, Target, Sparkles 
} from "lucide-react";

const Games = () => {
  const [currentGame, setCurrentGame] = useState<string | null>(null);
  const [promptInput, setPromptInput] = useState("");
  const [gameScore, setGameScore] = useState(0);
  const [elizaMessages, setElizaMessages] = useState<Array<{sender: string, message: string}>>([]);
  const [elizaInput, setElizaInput] = useState("");

  const games = [
    {
      id: "prompt-master",
      title: "Prompt Master",
      description: "Learn to write perfect prompts for AI!",
      icon: <Brain className="w-8 h-8" />,
      color: "text-blue-500"
    },
    {
      id: "eliza-chat",
      title: "Chat with ELIZA",
      description: "Have a conversation with the first chatbot!",
      icon: <MessageCircle className="w-8 h-8" />,
      color: "text-green-500"
    },
    {
      id: "neural-quiz",
      title: "Neural Network Quiz",
      description: "Test your AI knowledge!",
      icon: <Target className="w-8 h-8" />,
      color: "text-purple-500"
    },
    {
      id: "ai-creator",
      title: "AI Creation Challenge",
      description: "Use your imagination to create with AI!",
      icon: <Sparkles className="w-8 h-8" />,
      color: "text-pink-500"
    }
  ];

  const promptChallenges = [
    {
      challenge: "Write a prompt to generate an image of a cute robot playing in a garden",
      goodExample: "A cute, friendly robot with blue and silver colors playing happily in a colorful garden with flowers, butterflies, and sunshine",
      points: 10
    },
    {
      challenge: "Write a prompt to create a story about a magical computer",
      goodExample: "Write a short, fun story about a magical computer that helps children learn and grants wishes when they solve math problems correctly",
      points: 15
    },
    {
      challenge: "Write a prompt for AI to explain how cars work to a 7-year-old",
      goodExample: "Explain how cars work in simple, fun language that a 7-year-old can understand, using comparisons to things they know like toys and animals",
      points: 20
    }
  ];

  const elizaResponses = [
    "Why do you ask?",
    "Tell me more about that.",
    "How does that make you feel?",
    "I see. And what do you think about that?",
    "That's interesting. Can you explain further?",
    "Do you believe it is normal to feel that way?",
    "What comes to mind when you think about that?",
    "How long have you felt this way?"
  ];

  const handleElizaChat = () => {
    if (!elizaInput.trim()) return;
    
    const newMessages = [
      ...elizaMessages,
      { sender: "You", message: elizaInput },
      { 
        sender: "ELIZA", 
        message: elizaResponses[Math.floor(Math.random() * elizaResponses.length)]
      }
    ];
    
    setElizaMessages(newMessages);
    setElizaInput("");
  };

  const evaluatePrompt = (userPrompt: string, challenge: any) => {
    const score = userPrompt.length > 20 && userPrompt.includes(" ") ? challenge.points : 5;
    setGameScore(prev => prev + score);
    return score;
  };

  if (currentGame === null) {
    return (
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            AI Learning Games
          </h1>
          <p className="text-xl text-muted-foreground">
            Play fun games while learning about neural networks and AI!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {games.map((game, index) => (
            <Card 
              key={game.id}
              className="shadow-card hover:shadow-fun transition-all duration-300 hover:scale-105 cursor-pointer animate-bounce-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setCurrentGame(game.id)}
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center ${game.color}`}>
                  {game.icon}
                </div>
                <CardTitle className="text-xl">{game.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">{game.description}</p>
                <Button variant="fun" className="w-full">
                  <GamepadIcon className="w-4 h-4 mr-2" />
                  Play Now!
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-fun bg-gradient-learning">
          <CardContent className="py-8 text-center">
            <Trophy className="w-12 h-12 mx-auto mb-4 text-secondary-foreground" />
            <h3 className="text-2xl font-bold mb-2 text-secondary-foreground">Total Score</h3>
            <p className="text-3xl font-bold text-secondary-foreground">{gameScore} points</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (currentGame === "prompt-master") {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <Button variant="outline" onClick={() => setCurrentGame(null)} className="mb-4">
            ← Back to Games
          </Button>
          <h1 className="text-3xl font-bold mb-4 text-primary">Prompt Master Challenge</h1>
          <p className="text-muted-foreground">Write the best prompts to earn points!</p>
        </div>

        {promptChallenges.map((challenge, index) => (
          <Card key={index} className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-warning" />
                Challenge {index + 1} ({challenge.points} points)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg font-medium">{challenge.challenge}</p>
              
              <div className="space-y-2">
                <Input
                  placeholder="Write your prompt here..."
                  value={promptInput}
                  onChange={(e) => setPromptInput(e.target.value)}
                  className="text-base"
                />
                <Button 
                  variant="fun" 
                  onClick={() => {
                    const score = evaluatePrompt(promptInput, challenge);
                    alert(`Great job! You earned ${score} points!`);
                    setPromptInput("");
                  }}
                  disabled={!promptInput.trim()}
                >
                  Submit Prompt
                </Button>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-success">💡 Example Good Prompt:</h4>
                <p className="text-sm italic">"{challenge.goodExample}"</p>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="shadow-fun bg-gradient-primary text-primary-foreground text-center">
          <CardContent className="py-6">
            <h3 className="text-xl font-bold mb-2">Your Score: {gameScore} points</h3>
            <p>Keep writing detailed, specific prompts to earn more points!</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (currentGame === "eliza-chat") {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <Button variant="outline" onClick={() => setCurrentGame(null)} className="mb-4">
            ← Back to Games
          </Button>
          <h1 className="text-3xl font-bold mb-4 text-primary">Chat with ELIZA</h1>
          <p className="text-muted-foreground">Experience the world's first chatbot from 1966!</p>
        </div>

        <Card className="shadow-fun">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-accent" />
              ELIZA - Automated Psychotherapist
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="h-64 bg-muted rounded-lg p-4 overflow-y-auto space-y-3">
              {elizaMessages.length === 0 && (
                <div className="text-center text-muted-foreground italic">
                  ELIZA: Hello! I am ELIZA. Please tell me about what's on your mind.
                </div>
              )}
              
              {elizaMessages.map((msg, index) => (
                <div key={index} className={`p-2 rounded ${
                  msg.sender === "You" 
                    ? "bg-primary text-primary-foreground ml-8" 
                    : "bg-accent text-accent-foreground mr-8"
                }`}>
                  <strong>{msg.sender}:</strong> {msg.message}
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <Input
                placeholder="Type your message to ELIZA..."
                value={elizaInput}
                onChange={(e) => setElizaInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleElizaChat()}
                className="text-base"
              />
              <Button variant="fun" onClick={handleElizaChat} disabled={!elizaInput.trim()}>
                Send
              </Button>
            </div>

            <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
              <h4 className="font-bold mb-2 text-warning">🤖 Remember:</h4>
              <p className="text-sm">
                ELIZA is a simple program that uses pattern matching. It doesn't really understand what you're saying, 
                but it can seem surprisingly human-like! This is how AI conversations started in 1966.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (currentGame === "ai-creator") {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <Button variant="outline" onClick={() => setCurrentGame(null)} className="mb-4">
            ← Back to Games
          </Button>
          <h1 className="text-3xl font-bold mb-4 text-primary">AI Creation Challenge</h1>
          <p className="text-muted-foreground">Use your imagination to plan amazing AI creations!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Image className="w-6 h-6 text-green-500" />
                Image Creation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Plan an amazing image to create with AI:</p>
              <div className="space-y-2">
                <label className="text-sm font-medium">What should be in the image?</label>
                <Input placeholder="e.g., A dragon flying over a rainbow castle..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">What style should it be?</label>
                <Input placeholder="e.g., cartoon, realistic, magical..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">What colors should it have?</label>
                <Input placeholder="e.g., bright blues and purples..." />
              </div>
              <Button variant="learning" className="w-full">
                <Sparkles className="w-4 h-4 mr-2" />
                Create My Prompt!
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-6 h-6 text-blue-500" />
                Story Creation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Plan an exciting story for AI to write:</p>
              <div className="space-y-2">
                <label className="text-sm font-medium">Who is the main character?</label>
                <Input placeholder="e.g., A brave robot, a smart cat..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Where does it take place?</label>
                <Input placeholder="e.g., On Mars, in a magical forest..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">What adventure do they have?</label>
                <Input placeholder="e.g., Saves the world, finds treasure..." />
              </div>
              <Button variant="learning" className="w-full">
                <Sparkles className="w-4 h-4 mr-2" />
                Create My Story Prompt!
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-fun bg-gradient-fun text-primary-foreground">
          <CardContent className="py-8 text-center">
            <Sparkles className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Ready to Create Real AI Art?</h3>
            <p className="text-lg mb-4">
              Take your prompts to real AI tools like:
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-primary-foreground/20 p-3 rounded">
                <strong>Animated Drawings</strong><br/>
                Make your drawings come alive!
              </div>
              <div className="bg-primary-foreground/20 p-3 rounded">
                <strong>Easy-Peasy.AI</strong><br/>
                Generate images and stories!
              </div>
              <div className="bg-primary-foreground/20 p-3 rounded">
                <strong>Kandinsky</strong><br/>
                Create amazing artwork!
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="text-center">
      <Button variant="outline" onClick={() => setCurrentGame(null)}>
        ← Back to Games
      </Button>
      <h1 className="text-3xl font-bold mt-4">Game Coming Soon!</h1>
    </div>
  );
};

export default Games;