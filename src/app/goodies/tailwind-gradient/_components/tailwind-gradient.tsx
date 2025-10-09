'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Shuffle, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { useStyleContext } from '@/lib/StyleContext';

const directions = [
  { value: 'to-r', label: 'To Right', class: 'bg-gradient-to-r' },
  { value: 'to-l', label: 'To Left', class: 'bg-gradient-to-l' },
  { value: 'to-t', label: 'To Top', class: 'bg-gradient-to-t' },
  { value: 'to-b', label: 'To Bottom', class: 'bg-gradient-to-b' },
  { value: 'to-tl', label: 'To Top Left', class: 'bg-gradient-to-tl' },
  { value: 'to-tr', label: 'To Top Right', class: 'bg-gradient-to-tr' },
  { value: 'to-bl', label: 'To Bottom Left', class: 'bg-gradient-to-bl' },
  { value: 'to-br', label: 'To Bottom Right', class: 'bg-gradient-to-br' },
];

const presetPalettes = [
  { name: 'Sunset', from: '#ff6b6b', to: '#ffd93d' },
  { name: 'Ocean', from: '#4facfe', to: '#00f2fe' },
  { name: 'Forest', from: '#0ba360', to: '#3cba92' },
  { name: 'Berry', from: '#ee0979', to: '#ff6a00' },
  { name: 'Mint', from: '#00b09b', to: '#96c93d' },
  { name: 'Peach', from: '#ffafbd', to: '#ffc3a0' },
  { name: 'Sky', from: '#a8edea', to: '#fed6e3' },
  { name: 'Fire', from: '#f12711', to: '#f5af19' },
  { name: 'Night', from: '#2c3e50', to: '#4ca1af' },
  { name: 'Rose', from: '#ff9a9e', to: '#fecfef' },
  { name: 'Emerald', from: '#11998e', to: '#38ef7d' },
  { name: 'Royal', from: '#667eea', to: '#764ba2' },
];

const tailwindColors = [
  'slate', 'gray', 'zinc', 'neutral', 'stone',
  'red', 'orange', 'amber', 'yellow', 'lime',
  'green', 'emerald', 'teal', 'cyan', 'sky',
  'blue', 'indigo', 'violet', 'purple', 'fuchsia',
  'pink', 'rose'
];

const tailwindShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

function hexToTailwind(hex: string): string {
  const colorMap: { [key: string]: string } = {
    '#ff6b6b': 'red-500', '#ffd93d': 'yellow-400',
    '#4facfe': 'blue-400', '#00f2fe': 'cyan-400',
    '#0ba360': 'emerald-600', '#3cba92': 'teal-500',
    '#ee0979': 'pink-600', '#ff6a00': 'orange-600',
    '#00b09b': 'teal-600', '#96c93d': 'lime-500',
    '#ffafbd': 'pink-300', '#ffc3a0': 'orange-300',
    '#a8edea': 'cyan-200', '#fed6e3': 'pink-200',
    '#f12711': 'red-700', '#f5af19': 'amber-500',
    '#2c3e50': 'slate-700', '#4ca1af': 'cyan-600',
    '#ff9a9e': 'pink-400', '#fecfef': 'pink-300',
    '#11998e': 'teal-600', '#38ef7d': 'green-400',
    '#667eea': 'blue-500', '#764ba2': 'violet-600',
  };

  return colorMap[hex.toLowerCase()] || 'gray-500';
}

function getRandomColor(): string {
  const color = tailwindColors[Math.floor(Math.random() * tailwindColors.length)];
  const shade = tailwindShades[Math.floor(Math.random() * tailwindShades.length)];
  return `${color}-${shade}`;
}

function getLinearDirection(direction: string): string {
  const directionMap: { [key: string]: string } = {
    'to-r': 'to right',
    'to-l': 'to left',
    'to-t': 'to top',
    'to-b': 'to bottom',
    'to-tl': 'to top left',
    'to-tr': 'to top right',
    'to-bl': 'to bottom left',
    'to-br': 'to bottom right',
  };
  return directionMap[direction] || 'to right';
}

export default function TailwindGradient() {
  const [direction, setDirection] = useState('to-r');
  const [fromColor, setFromColor] = useState('#667eea');
  const [toColor, setToColor] = useState('#764ba2');
  const [copied, setCopied] = useState(false);
  
    const { divClassName, divStyle } = useStyleContext()
      

  const directionClass = directions.find(d => d.value === direction)?.class || 'bg-gradient-to-r';
  const fromTailwind = hexToTailwind(fromColor);
  const toTailwind = hexToTailwind(toColor);

  const gradientClass = `${directionClass} from-${fromTailwind} to-${toTailwind}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(gradientClass);
    setCopied(true);
    toast.success('Copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRandom = () => {
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    setDirection(randomDirection.value);

    const randomFromColor = getRandomColor();
    const randomToColor = getRandomColor();

    const colorToHexMap: { [key: string]: string } = {
      'red-500': '#ef4444', 'yellow-400': '#facc15',
      'blue-400': '#60a5fa', 'cyan-400': '#22d3ee',
      'emerald-600': '#059669', 'teal-500': '#14b8a6',
      'pink-600': '#db2777', 'orange-600': '#ea580c',
      'teal-600': '#0d9488', 'lime-500': '#84cc16',
      'pink-300': '#f9a8d4', 'orange-300': '#fdba74',
      'cyan-200': '#a5f3fc', 'pink-200': '#fbcfe8',
      'red-700': '#b91c1c', 'amber-500': '#f59e0b',
      'slate-700': '#334155', 'cyan-600': '#0891b2',
      'pink-400': '#f472b6', 'green-400': '#4ade80',
      'blue-500': '#3b82f6', 'violet-600': '#7c3aed',
    };

    setFromColor(colorToHexMap[randomFromColor] || '#667eea');
    setToColor(colorToHexMap[randomToColor] || '#764ba2');
  };

  const handlePresetClick = (from: string, to: string) => {
    setFromColor(from);
    setToColor(to);
  };

  return (
    <div className={divClassName}>
      <div
        className="absolute top-0 inset-0 z-0"
        style={divStyle}
      />

 
      <div className="container mx-auto px-4 pt-36 pb-12 font-poppins">
 
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl z-50 md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent mb-3">
            Tailwind Gradient Generator
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Create beautiful gradients for your Tailwind CSS projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-6 md:p-8 shadow-xl border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-200">
                Preview
              </h2>
              <motion.div
                key={`${fromColor}-${toColor}-${direction}`}
                initial={{ scale: 0.95, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full h-64 md:h-80 rounded-xl shadow-2xl"
                style={{
                  backgroundImage: `linear-gradient(${getLinearDirection(direction)}, ${fromColor}, ${toColor})`
                }}
              />

              <div className="mt-6 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between gap-2">
                  <code className="text-sm font-mono text-slate-700 dark:text-slate-300 break-all">
                    {gradientClass}
                  </code>
                  <Button
                    onClick={handleCopy}
                    size="sm"
                    variant="secondary"
                    className="shrink-0"
                  >
                    {copied ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="p-6 md:p-8 shadow-xl border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-200">
                Controls
              </h2>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="direction" className="text-base mb-3 block">
                    Direction
                  </Label>
                  <Select value={direction} onValueChange={setDirection}>
                    <SelectTrigger id="direction" className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {directions.map((dir) => (
                        <SelectItem key={dir.value} value={dir.value}>
                          {dir.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="from-color" className="text-base mb-3 block">
                      From Color
                    </Label>
                    <div className="flex gap-2">
                      <input
                        id="from-color"
                        type="color"
                        value={fromColor}
                        onChange={(e) => setFromColor(e.target.value)}
                        className="h-12 w-full rounded-lg cursor-pointer border-2 border-slate-300 dark:border-slate-600"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="to-color" className="text-base mb-3 block">
                      To Color
                    </Label>
                    <div className="flex gap-2">
                      <input
                        id="to-color"
                        type="color"
                        value={toColor}
                        onChange={(e) => setToColor(e.target.value)}
                        className="h-12 w-full rounded-lg cursor-pointer border-2 border-slate-300 dark:border-slate-600"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button onClick={handleCopy} className="flex-1" size="lg">
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Class
                  </Button>
                  <Button onClick={handleRandom} variant="outline" size="lg">
                    <Shuffle className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8 shadow-xl border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-200">
                Preset Palettes
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {presetPalettes.map((palette, index) => (
                  <motion.button
                    key={palette.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handlePresetClick(palette.from, palette.to)}
                    className="group relative h-20 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                    style={{
                      background: `linear-gradient(135deg, ${palette.from}, ${palette.to})`
                    }}
                  >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg">
                        {palette.name}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

   
    </div>
  );
}
