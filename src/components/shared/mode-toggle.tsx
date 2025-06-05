"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded-full !border-none !bg-transparent !shadow-none cursor-pointer " size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 text-white dark:text-black  transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 text-black  transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-xl p-2" align="end">
        <DropdownMenuItem className="flex items-center justify-center" onClick={() => setTheme("light")}>
          <Sun className=" h-4 w-4" />
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center justify-center" onClick={() => setTheme("dark")}>
          <Moon className=" h-4 w-4" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
