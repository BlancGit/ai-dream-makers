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
      <h3 className="text-2xl md:text-3xl font-black uppercase text-center mb-8 text-foreground">
        History of Neural Networks
      </h3>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {timelineEvents.map((event, index) => (
          <Button
            key={index}
            variant={selectedEvent === index ? "default" : "outline"}
            size="lg"
            className={`flex flex-col items-center gap-2 h-auto p-4 ${
              selectedEvent === index
                ? "rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
                : "rounded-full"
            }`}
            onClick={() => setSelectedEvent(index)}
          >
            {event.icon}
            <span className="text-sm font-bold">{event.year}</span>
          </Button>
        ))}
      </div>

      <Card className="rounded-2xl shadow-card transition-all duration-300">
        <CardContent className="p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            {timelineEvents[selectedEvent].icon}
            <h4 className="text-xl font-bold text-foreground">
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