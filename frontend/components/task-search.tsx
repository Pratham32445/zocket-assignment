"use client"

import type * as React from "react"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

export function TaskSearch({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("relative flex items-center", className)}>
      <MagnifyingGlassIcon className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Search tasks..." className="pl-8" type="search" />
    </div>
  )
}

