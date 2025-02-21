"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

type Task = {
  id: string
  title: string
  completed: boolean
}

type AISuggestionsProps = {
  tasks: Task[]
}

export function AISuggestions({ tasks }: AISuggestionsProps) {
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const generateSuggestions = async () => {
    setLoading(true)
    try {
      const incompleteTasks = tasks
        .filter((task) => !task.completed)
        .map((task) => task.title)
        .join(", ")
      const prompt = `Based on the following incomplete tasks: ${incompleteTasks}, suggest 3 additional tasks that might be relevant or helpful. Provide each suggestion on a new line.`

      const { text } = await generateText({
        model: openai("gpt-4o"),
        prompt: prompt,
      })

      setSuggestions(text.split("\n").filter((suggestion) => suggestion.trim() !== ""))
    } catch (error) {
      console.error("Error generating suggestions:", error)
      setSuggestions(["Error generating suggestions. Please try again."])
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Task Suggestions</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={generateSuggestions} disabled={loading} className="mb-4">
          {loading ? "Generating..." : "Get Suggestions"}
        </Button>
        {suggestions.length > 0 && (
          <ul className="list-disc pl-5 space-y-2">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="text-foreground">
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}

