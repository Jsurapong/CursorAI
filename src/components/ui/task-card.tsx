import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface TaskCardProps {
  title: string
  description?: string
}

export function TaskCard({ title, description }: TaskCardProps) {
  return (
    <Card className="mb-3 cursor-pointer hover:border-primary/50 transition-colors">
      <CardHeader>
        <CardTitle className="text-sm">{title}</CardTitle>
        {description && (
          <CardDescription className="text-xs">{description}</CardDescription>
        )}
      </CardHeader>
    </Card>
  )
} 