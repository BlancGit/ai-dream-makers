import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlayCircle, RotateCcw, Copy, CheckCircle } from "lucide-react";

interface CodeEditorProps {
  initialCode: string;
  title?: string;
  readOnly?: boolean;
  expectedOutput?: string;
  onRun?: (code: string) => void;
  language?: string;
  lineNumbers?: boolean;
}

export const CodeEditor = ({
  initialCode,
  title = "Code Editor",
  readOnly = false,
  expectedOutput,
  onRun,
  language = "csharp",
  lineNumbers = true
}: CodeEditorProps) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  const handleRun = () => {
    setIsRunning(true);
    setOutput("Running...");

    setTimeout(() => {
      if (onRun) {
        onRun(code);
      } else {
        const simulatedOutput = simulateCodeOutput(code);
        setOutput(simulatedOutput);
      }
      setIsRunning(false);
    }, 500);
  };

  const handleReset = () => {
    setCode(initialCode);
    setOutput("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const simulateCodeOutput = (codeStr: string) => {
    const lines = codeStr.split('\n');
    let output = [];

    for (const line of lines) {
      const trimmed = line.trim();

      if (trimmed.startsWith('Console.WriteLine(')) {
        const match = trimmed.match(/Console\.WriteLine\((.*?)\)/);
        if (match) {
          let content = match[1];
          content = content.replace(/^["']|["']$/g, '');
          content = content.replace(/\\n/g, '\n');
          content = content.replace(/\\t/g, '\t');

          if (content.includes('+')) {
            const parts = content.split('+').map(p => p.trim());
            const evaluated = parts.map(p => {
              if (p.match(/^["'].*["']$/)) {
                return p.replace(/^["']|["']$/g, '');
              }
              return p;
            }).join('');
            output.push(evaluated);
          } else {
            output.push(content);
          }
        }
      }

      if (trimmed.startsWith('Console.ReadLine()')) {
        output.push('[User would enter input here]');
      }
    }

    return output.length > 0 ? output.join('\n') : 'Code executed successfully!';
  };

  const addLineNumbers = (codeStr: string) => {
    if (!lineNumbers) return codeStr;

    return codeStr.split('\n').map((line, index) => {
      const lineNum = String(index + 1).padStart(3, ' ');
      return `${lineNum} | ${line}`;
    }).join('\n');
  };

  return (
    <Card className="shadow-fun">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="flex items-center gap-1"
            >
              {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied!" : "Copy"}
            </Button>
            {!readOnly && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                className="flex items-center gap-1"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </Button>
            )}
            <Button
              variant="default"
              size="sm"
              onClick={handleRun}
              disabled={isRunning}
              className="flex items-center gap-1"
            >
              <PlayCircle className="w-4 h-4" />
              Run
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            readOnly={readOnly}
            className="w-full h-64 p-4 font-mono text-sm bg-slate-900 text-green-400 rounded-lg border border-border resize-none"
            style={{ tabSize: 4 }}
            spellCheck={false}
          />
        </div>

        {output && (
          <div className="p-4 bg-black text-white rounded-lg font-mono text-sm">
            <div className="text-gray-400 mb-2">Output:</div>
            <pre className="whitespace-pre-wrap">{output}</pre>
            {expectedOutput && output === expectedOutput && (
              <div className="mt-2 text-green-400">✓ Correct output!</div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};