import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Brain, Cpu, Sparkles } from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1958",
    title: "First Neural Network - Perceptron",
    description: "Frank Rosenblatt created the first perceptron that could learn to recognize images, similar to how our eyes work!",
    icon: <Brain className="w-6 h-6" />
  },
  {
    year: "1966", 
    title: "ELIZA Chatbot",
    description: "Joseph Weizenbaum created ELIZA, one of the first chatbots that could have conversations with humans using simple rules.",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    year: "1980s",
    title: "AI Winter",
    description: "Computers were too slow, so neural network research slowed down for a while.",
    icon: <CalendarDays className="w-6 h-6" />
  },
  {
    year: "2000s",
    title: "The AI Revolution",
    description: "Computers became super fast! Neural networks could now recognize speech, process images, and even play chess!",
    icon: <Sparkles className="w-6 h-6" />
  }
];

export const InteractiveTimeline = () => {
  const [selectedEvent, setSelectedEvent] = useState<number>(0);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-primary bg-clip-text text-transparent">
        History of Neural Networks
      </h3>
      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {timelineEvents.map((event, index) => (
          <Button
            key={index}
            variant={selectedEvent === index ? "fun" : "outline"}
            size="lg"
            className={`flex flex-col items-center gap-2 h-auto p-4 ${
              selectedEvent === index ? "animate-bounce-in" : ""
            }`}
            onClick={() => setSelectedEvent(index)}
          >
            {event.icon}
            <span className="text-sm font-bold">{event.year}</span>
          </Button>
        ))}
      </div>

      <Card className="shadow-fun hover:shadow-glow transition-all duration-300 animate-bounce-in">
        <CardContent className="p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            {timelineEvents[selectedEvent].icon}
            <h4 className="text-xl font-bold text-primary">
              {timelineEvents[selectedEvent].title}
            </h4>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {timelineEvents[selectedEvent].description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};