import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Users } from 'lucide-react'

interface CourseCardProps {
  id: string
  title: string
  description: string
  category: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  students: number
  rating: number
  price: number | string
  image?: string
}

export function CourseCard({
  id,
  title,
  description,
  category,
  level,
  students,
  rating,
  price,
  image,
}: CourseCardProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100'
      case 'Advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100'
    }
  }

  return (
    <Link href={`/courses/${id}`}>
      <Card className="h-full overflow-hidden transition hover:shadow-lg hover:border-primary/50">
        {image && (
          <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2 mb-2">
            <Badge variant="outline" className="text-xs">
              {category}
            </Badge>
            <Badge className={`text-xs ${getLevelColor(level)}`}>
              {level}
            </Badge>
          </div>
          <h3 className="text-lg font-semibold text-foreground line-clamp-2">
            {title}
          </h3>
        </CardHeader>

        <CardContent className="pb-4">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </CardContent>

        <CardFooter className="flex items-center justify-between border-t border-border pt-4">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-accent text-accent" />
              <span>{rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              <span>{students.toLocaleString()}</span>
            </div>
          </div>
          <div className="font-semibold text-primary">
            {typeof price === 'number' ? `$${price}` : price}
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
