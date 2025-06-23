import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { TaskCard } from "@/components/ui/task-card"

// Sample data - you can replace this with real data later
const sampleTasks = {
  todo: [
    { title: "Design new landing page", description: "Create wireframes and mockups" },
    { title: "Update documentation", description: "Add new API endpoints" },
  ],
  inProgress: [
    { title: "Implement authentication", description: "Using Next.js Auth" },
  ],
  done: [
    { title: "Setup project", description: "Initialize Next.js with shadcn/ui" },
    { title: "Create component library", description: "Build reusable components" },
  ],
}

export function KanbanBoard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {/* Todo Column */}
      <div>
        <Card className="bg-card/50">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Todo</CardTitle>
          </CardHeader>
          <CardContent>
            {sampleTasks.todo.map((task, index) => (
              <TaskCard key={index} {...task} />
            ))}
          </CardContent>
        </Card>
      </div>

      {/* In Progress Column */}
      <div>
        <Card className="bg-card/50">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            {sampleTasks.inProgress.map((task, index) => (
              <TaskCard key={index} {...task} />
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Done Column */}
      <div>
        <Card className="bg-card/50">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Done</CardTitle>
          </CardHeader>
          <CardContent>
            {sampleTasks.done.map((task, index) => (
              <TaskCard key={index} {...task} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 