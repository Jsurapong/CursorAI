import { ThemeToggle } from "@/components/theme-toggle";
import { KanbanBoard } from "@/components/kanban-board";

export default function Home() {
  return (
    <main className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Task Board</h1>
        <ThemeToggle />
      </div>
      <KanbanBoard />
    </main>
  );
}

