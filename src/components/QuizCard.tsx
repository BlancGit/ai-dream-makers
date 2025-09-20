import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, HelpCircle } from "lucide-react";

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizCardProps {
  quiz: QuizQuestion;
  onComplete: (correct: boolean) => void;
}

export const QuizCard = ({ quiz, onComplete }: QuizCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    const isCorrect = answerIndex === quiz.correctAnswer;
    setTimeout(() => {
      onComplete(isCorrect);
    }, 2000);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-card hover:shadow-fun transition-all duration-300 animate-bounce-in">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-lg">
          <HelpCircle className="w-6 h-6 text-primary" />
          Quiz Time!
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-base font-medium text-center p-4 bg-muted rounded-lg">
          {quiz.question}
        </p>
        
        <div className="grid gap-3">
          {quiz.options.map((option, index) => {
            let variant: "outline" | "success" | "destructive" = "outline";
            let icon = null;
            
            if (showResult) {
              if (index === quiz.correctAnswer) {
                variant = "success";
                icon = <CheckCircle className="w-4 h-4" />;
              } else if (index === selectedAnswer && index !== quiz.correctAnswer) {
                variant = "destructive";
                icon = <XCircle className="w-4 h-4" />;
              }
            }
            
            return (
              <Button
                key={index}
                variant={variant}
                className={`p-4 h-auto text-left justify-start text-wrap ${
                  selectedAnswer === index && !showResult ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => handleAnswer(index)}
                disabled={showResult}
              >
                <span className="flex items-center gap-2 w-full">
                  {icon}
                  <span className="text-sm">{option}</span>
                </span>
              </Button>
            );
          })}
        </div>
        
        {showResult && (
          <div className="mt-6 p-4 bg-muted rounded-lg animate-bounce-in">
            <p className="text-sm text-muted-foreground">
              <strong>Explanation:</strong> {quiz.explanation}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};