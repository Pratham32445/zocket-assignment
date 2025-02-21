import type { Metadata } from "next";
import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TaskList } from "@/components/task-list";
import { TaskSearch } from "@/components/task-search";
import { AddTaskDialog } from "@/components/add-task-dialog";

export const metadata: Metadata = {
  title: "Tasks",
  description: "Manage your tasks",
};

export default function TasksPage() {
  return (
    <div className="flex flex-col space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Tasks</h2>
        <AddTaskDialog>
          <Button>
            <PlusIcon className="mr-2 h-4 w-4" />
            Add Task
          </Button>
        </AddTaskDialog>
      </div>
      <TaskSearch />
      <TaskList />
    </div>
  );
}
