import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, HelpCircle, ArrowRight } from "lucide-react";

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizCardProps {
  quiz: QuizQuestion;
  onComplete: (correct: boolean) => void;
  currentIndex: number;
  totalQuestions: number;
}

export const QuizCard = ({ quiz, onComplete, currentIndex, totalQuestions }: QuizCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    setShowResult(true);
    setIsAnswered(true);
  };

  const handleNext = () => {
    const isCorrect = selectedAnswer === quiz.correctAnswer;
    onComplete(isCorrect);

    // Reset state for next question
    setSelectedAnswer(null);
    setShowResult(false);
    setIsAnswered(false);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-card hover:shadow-fun transition-all duration-300 animate-bounce-in">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-lg">
          <HelpCircle className="w-6 h-6 text-primary" />
          Question {currentIndex + 1} of {totalQuestions}
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
                  <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold">
                    {icon || String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-sm">{option}</span>
                </span>
              </Button>
            );
          })}
        </div>

        {showResult && (
          <div className="mt-6 p-4 bg-muted rounded-lg animate-bounce-in">
            <div className="flex items-center gap-2 mb-2">
              {selectedAnswer === quiz.correctAnswer ? (
                <>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-bold text-green-600">Correct!</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-red-500" />
                  <span className="font-bold text-red-600">Not quite!</span>
                </>
              )}
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Explanation:</strong> {quiz.explanation}
            </p>
          </div>
        )}

        <div className="flex justify-center gap-4 pt-4">
          {!showResult && (
            <Button
              variant="default"
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="min-w-[120px]"
            >
              Submit Answer
            </Button>
          )}

          {showResult && (
            <Button
              variant="default"
              onClick={handleNext}
              className="min-w-[120px]"
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              Next Question
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};