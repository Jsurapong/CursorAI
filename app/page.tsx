import { ColumnDialog } from "@/components/column-dialog";
import {KanbanBoard} from "@/components/kanban-board";

export default function Home() {
  return (
    <main className="container mx-auto p-4">Add commentMore actions
      <div className="flex justify-end mb-6">
        <ColumnDialog />
      </div>
      <KanbanBoard />
    </main>
  );
}