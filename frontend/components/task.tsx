import { Checkbox } from "@/components/ui/checkbox"

type TaskProps = {
  task: {
    id: string
    title: string
    completed: boolean
  }
  onToggle: () => void
}

export function Task({ task, onToggle }: TaskProps) {
  return (
    <div className="flex items-center space-x-2 p-2 bg-card rounded-lg shadow">
      <Checkbox id={task.id} checked={task.completed} onCheckedChange={onToggle} />
      <label
        htmlFor={task.id}
        className={`flex-grow text-foreground ${task.completed ? "line-through text-muted-foreground" : ""}`}
      >
        {task.title}
      </label>
    </div>
  )
}

