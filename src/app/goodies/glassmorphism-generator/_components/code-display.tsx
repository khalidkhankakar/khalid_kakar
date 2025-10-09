"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

interface CodeDisplayProps {
  config: {
    blur: number;
    opacity: number;
    bgColor: string;
    borderGradient: boolean;
    gradientFrom: string;
    gradientTo: string;
    shadow: number;
    borderRadius: number;
  };
  blurMap: Record<number, string>;
  radiusMap: Record<number, string>;
  shadowMap: Record<number, string>;
  hexToRgba: (hex: string, opacity: number) => string;
}

export function CodeDisplay({
  config,
  blurMap,
  radiusMap,
  shadowMap,
  hexToRgba,
}: CodeDisplayProps) {
  const [copied, setCopied] = useState(false);

  const generateTailwindClasses = () => {
    const classes = [
      blurMap[config.blur],
      shadowMap[config.shadow],
      radiusMap[config.borderRadius],
      "border-2",
    ];
    return classes.join(" ");
  };

  const generateInlineStyles = () => {
    return `backgroundColor: '${hexToRgba(config.bgColor, config.opacity)}'${
      config.borderGradient
        ? `,\nborderImage: 'linear-gradient(to right, ${config.gradientFrom}, ${config.gradientTo}) 1'`
        : ""
    }`;
  };

  const generateFullCode = () => {
    return `<div
  className="${generateTailwindClasses()}"
  style={{
    ${generateInlineStyles()}
  }}
>
  Your content here
</div>`;
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success( "Copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.success("Failed to copy");
    }
  };

  return (
    <Card className="p-6 backdrop-blur-sm bg-white dark:bg-slate-900 border-white/20">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Generated Code</h3>
        <Button
          size="sm"
          variant="outline"
          onClick={() => copyToClipboard(generateFullCode(), "Full code")}
        >
          {copied ? (
            <Check className="w-4 h-4 mr-2" />
          ) : (
            <Copy className="w-4 h-4 mr-2" />
          )}
          {copied ? "Copied" : "Copy All"}
        </Button>
      </div>

      <Tabs defaultValue="tailwind" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="tailwind">Tailwind</TabsTrigger>
          <TabsTrigger value="full">Full Code</TabsTrigger>
        </TabsList>

        <TabsContent value="tailwind" className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                Classes
              </span>
              <Button
                size="sm"
                variant="ghost"
                onClick={() =>
                  copyToClipboard(generateTailwindClasses(), "Tailwind classes")
                }
              >
                <Copy className="w-3 h-3" />
              </Button>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 rounded-md p-3 font-mono text-xs overflow-x-auto">
              {generateTailwindClasses()}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                Inline Styles
              </span>
              <Button
                size="sm"
                variant="ghost"
                onClick={() =>
                  copyToClipboard(generateInlineStyles(), "Inline styles")
                }
              >
                <Copy className="w-3 h-3" />
              </Button>
            </div>
            <div className="bg-slate-100 dark:bg-slate-800 rounded-md p-3 font-mono text-xs overflow-x-auto whitespace-pre">
              {generateInlineStyles()}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-slate-100 dark:bg-slate-800 rounded-md p-4 font-mono text-xs overflow-x-auto"
          >
            <pre className="whitespace-pre-wrap">{generateFullCode()}</pre>
          </motion.div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
