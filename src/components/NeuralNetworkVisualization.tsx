import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Eye } from "lucide-react";

interface Neuron {
  id: number;
  active: boolean;
  layer: number;
}

export const NeuralNetworkVisualization = () => {
  const [neurons, setNeurons] = useState<Neuron[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Initialize neurons
    const initialNeurons: Neuron[] = [];
    let id = 0;
    
    // Input layer (3 neurons)
    for (let i = 0; i < 3; i++) {
      initialNeurons.push({ id: id++, active: false, layer: 0 });
    }
    
    // Hidden layer (4 neurons)
    for (let i = 0; i < 4; i++) {
      initialNeurons.push({ id: id++, active: false, layer: 1 });
    }
    
    // Output layer (2 neurons)
    for (let i = 0; i < 2; i++) {
      initialNeurons.push({ id: id++, active: false, layer: 2 });
    }
    
    setNeurons(initialNeurons);
  }, []);

  const animateNetwork = async () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Reset all neurons
    setNeurons(prev => prev.map(n => ({ ...n, active: false })));
    
    // Animate layer by layer
    for (let layer = 0; layer <= 2; layer++) {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setNeurons(prev => prev.map(n => 
        n.layer === layer ? { ...n, active: true } : n
      ));
    }
    
    // Keep active for a moment
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset
    setNeurons(prev => prev.map(n => ({ ...n, active: false })));
    setIsAnimating(false);
  };

  const renderLayer = (layerIndex: number, title: string, icon: React.ReactNode) => {
    const layerNeurons = neurons.filter(n => n.layer === layerIndex);
    
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-sm font-bold text-primary">
          {icon}
          {title}
        </div>
        <div className="flex flex-col gap-3">
          {layerNeurons.map(neuron => (
            <div
              key={neuron.id}
              className={`w-12 h-12 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${
                neuron.active 
                  ? "bg-primary border-primary shadow-glow animate-pulse-glow" 
                  : "bg-muted border-border"
              }`}
            >
              {neuron.active && <Zap className="w-6 h-6 text-primary-foreground" />}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-card hover:shadow-fun transition-all duration-300">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <Brain className="w-6 h-6 text-primary" />
          How Neural Networks Work
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Watch how information flows through a neural network, just like signals in our brain!
          </p>
          
          <Button 
            variant="fun" 
            size="lg"
            onClick={animateNetwork}
            disabled={isAnimating}
            className="mb-6"
          >
            {isAnimating ? "Learning..." : "Watch It Learn!"}
          </Button>
        </div>

        <div className="flex justify-around items-center">
          {renderLayer(0, "Input", <Eye className="w-4 h-4" />)}
          
          <div className="flex-1 flex justify-center">
            <div className="w-20 h-1 bg-gradient-primary rounded-full animate-pulse"></div>
          </div>
          
          {renderLayer(1, "Hidden", <Brain className="w-4 h-4" />)}
          
          <div className="flex-1 flex justify-center">
            <div className="w-20 h-1 bg-gradient-primary rounded-full animate-pulse"></div>
          </div>
          
          {renderLayer(2, "Output", <Zap className="w-4 h-4" />)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm">
          <div className="p-3 bg-muted rounded-lg">
            <strong>Input Layer:</strong> Receives information (like seeing a picture)
          </div>
          <div className="p-3 bg-muted rounded-lg">
            <strong>Hidden Layer:</strong> Processes and learns patterns
          </div>
          <div className="p-3 bg-muted rounded-lg">
            <strong>Output Layer:</strong> Makes decisions (like "This is a cat!")
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
