"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {  RotateCw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { toast } from "sonner";
import { PreviewCard } from "./preview-card";
import { PresetCard } from "./present-card";
import { CodeDisplay } from "./code-display";
import { useStyleContext } from "@/components/context/StyleContext";

interface GlassConfig {
  blur: number;
  opacity: number;
  bgColor: string;
  borderGradient: boolean;
  gradientFrom: string;
  gradientTo: string;
  shadow: number;
  borderRadius: number;
}

const presets = [
  {
    name: "Frosted Blue",
    config: {
      blur: 12,
      opacity: 20,
      bgColor: "#3b82f6",
      borderGradient: true,
      gradientFrom: "#60a5fa",
      gradientTo: "#3b82f6",
      shadow: 2,
      borderRadius: 3,
    },
  },
  {
    name: "Soft Pink",
    config: {
      blur: 16,
      opacity: 15,
      bgColor: "#ec4899",
      borderGradient: true,
      gradientFrom: "#f9a8d4",
      gradientTo: "#ec4899",
      shadow: 3,
      borderRadius: 4,
    },
  },
  {
    name: "Minimal White",
    config: {
      blur: 8,
      opacity: 10,
      bgColor: "#ffffff",
      borderGradient: false,
      gradientFrom: "#ffffff",
      gradientTo: "#ffffff",
      shadow: 1,
      borderRadius: 2,
    },
  },
  {
    name: "Dark Glass",
    config: {
      blur: 20,
      opacity: 30,
      bgColor: "#1f2937",
      borderGradient: true,
      gradientFrom: "#4b5563",
      gradientTo: "#1f2937",
      shadow: 4,
      borderRadius: 3,
    },
  },
];

const defaultConfig: GlassConfig = {
  blur: 12,
  opacity: 20,
  bgColor: "#3b82f6",
  borderGradient: true,
  gradientFrom: "#60a5fa",
  gradientTo: "#3b82f6",
  shadow: 2,
  borderRadius: 3,
};

export default function Glassmorphism() {
  const [config, setConfig] = useState<GlassConfig>(defaultConfig);;
const { divClassName, divStyle } = useStyleContext()
    

  const updateConfig = (key: keyof GlassConfig, value: any) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const randomize = () => {
    const randomColor = () =>
      `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
    const randomConfig: GlassConfig = {
      blur: Math.floor(Math.random() * 5) * 4 + 4,
      opacity: Math.floor(Math.random() * 30) + 10,
      bgColor: randomColor(),
      borderGradient: Math.random() > 0.5,
      gradientFrom: randomColor(),
      gradientTo: randomColor(),
      shadow: Math.floor(Math.random() * 5),
      borderRadius: Math.floor(Math.random() * 5),
    };
    setConfig(randomConfig);
    toast("Random style generated");
  };

  const reset = () => {
    setConfig(defaultConfig);
    toast.success("Reset complete");
  };

  const applyPreset = (presetConfig: GlassConfig) => {
    setConfig(presetConfig);
  };

  const blurMap: Record<number, string> = {
    0: "backdrop-blur-none",
    4: "backdrop-blur-sm",
    8: "backdrop-blur",
    12: "backdrop-blur-md",
    16: "backdrop-blur-lg",
    20: "backdrop-blur-xl",
    24: "backdrop-blur-2xl",
    28: "backdrop-blur-3xl",
  };

  const radiusMap: Record<number, string> = {
    0: "rounded-none",
    1: "rounded-sm",
    2: "rounded-md",
    3: "rounded-lg",
    4: "rounded-xl",
    5: "rounded-2xl",
  };

  const shadowMap: Record<number, string> = {
    0: "shadow-none",
    1: "shadow-sm",
    2: "shadow",
    3: "shadow-md",
    4: "shadow-lg",
    5: "shadow-xl",
  };

  const hexToRgba = (hex: string, opacity: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
  };

  return (
  <main className={divClassName}>
      <div
        className="absolute top-0 inset-0 z-0"
        style={divStyle}
      />

      <div className="max-w-7xl w-[90vw]  font-poppins pt-36 pb-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Glassmorphism Generator
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Design beautiful glass effects with Tailwind CSS
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-6 bg-white dark:bg-slate-900 border-white/20">
              <PreviewCard
                blur={blurMap[config.blur]}
                opacity={config.opacity}
                bgColor={config.bgColor}
                borderGradient={config.borderGradient}
                gradientFrom={config.gradientFrom}
                gradientTo={config.gradientTo}
                shadow={shadowMap[config.shadow]}
                borderRadius={radiusMap[config.borderRadius]}
              />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="p-6 backdrop-blur-sm bg-white/50 dark:bg-slate-900/50 border-white/20">
              <Tabs defaultValue="controls" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="controls">Controls</TabsTrigger>
                  <TabsTrigger value="presets">Presets</TabsTrigger>
                </TabsList>

                <TabsContent value="controls" className="space-y-6">
                  <div className="space-y-2">
                    <Label>Blur Intensity</Label>
                    <Slider
                      value={[config.blur]}
                      onValueChange={([value]) => updateConfig("blur", value)}
                      min={0}
                      max={28}
                      step={4}
                      className="w-full"
                    />
                    <span className="text-xs text-slate-500">
                      {blurMap[config.blur]}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <Label>Opacity ({config.opacity}%)</Label>
                    <Slider
                      value={[config.opacity]}
                      onValueChange={([value]) => updateConfig("opacity", value)}
                      min={5}
                      max={50}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Background Color</Label>
                    <div className="flex gap-2 items-center">
                      <input
                        type="color"
                        value={config.bgColor}
                        onChange={(e) => updateConfig("bgColor", e.target.value)}
                        className="w-12 h-12 rounded cursor-pointer"
                      />
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {config.bgColor}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>Border Gradient</Label>
                      <input
                        type="checkbox"
                        checked={config.borderGradient}
                        onChange={(e) =>
                          updateConfig("borderGradient", e.target.checked)
                        }
                        className="w-4 h-4"
                      />
                    </div>
                    {config.borderGradient && (
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <Label className="text-xs">From</Label>
                          <input
                            type="color"
                            value={config.gradientFrom}
                            onChange={(e) =>
                              updateConfig("gradientFrom", e.target.value)
                            }
                            className="w-full h-10 rounded cursor-pointer"
                          />
                        </div>
                        <div>
                          <Label className="text-xs">To</Label>
                          <input
                            type="color"
                            value={config.gradientTo}
                            onChange={(e) =>
                              updateConfig("gradientTo", e.target.value)
                            }
                            className="w-full h-10 rounded cursor-pointer"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>Shadow Intensity</Label>
                    <Slider
                      value={[config.shadow]}
                      onValueChange={([value]) => updateConfig("shadow", value)}
                      min={0}
                      max={5}
                      step={1}
                      className="w-full"
                    />
                    <span className="text-xs text-slate-500">
                      {shadowMap[config.shadow]}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <Label>Border Radius</Label>
                    <Slider
                      value={[config.borderRadius]}
                      onValueChange={([value]) =>
                        updateConfig("borderRadius", value)
                      }
                      min={0}
                      max={5}
                      step={1}
                      className="w-full"
                    />
                    <span className="text-xs text-slate-500">
                      {radiusMap[config.borderRadius]}
                    </span>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button onClick={randomize} variant="outline" className="flex-1">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Random
                    </Button>
                    <Button onClick={reset} variant="outline" className="flex-1">
                      <RotateCw className="w-4 h-4 mr-2" />
                      Reset
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="presets" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {presets.map((preset) => (
                      <PresetCard
                        key={preset.name}
                        name={preset.name}
                        config={preset.config}
                        onClick={() => applyPreset(preset.config)}
                      />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </Card>

            <CodeDisplay
              config={config}
              blurMap={blurMap}
              radiusMap={radiusMap}
              shadowMap={shadowMap}
              hexToRgba={hexToRgba}
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
