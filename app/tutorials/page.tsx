'use client'

import { useState } from 'react'
import { LayoutWrapper } from '@/components/layout-wrapper'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Clock, Play, Search } from 'lucide-react'

interface Tutorial {
  id: string
  title: string
  description: string
  category: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: string
  instructor: string
  views: number
  rating: number
}

const allTutorials: Tutorial[] = [
  {
    id: '1',
    title: 'Building Your First React App',
    description: 'Learn the basics of React by building a simple todo application',
    category: 'Frontend',
    difficulty: 'Beginner',
    duration: '45 min',
    instructor: 'Sarah Johnson',
    views: 5420,
    rating: 4.8,
  },
  {
    id: '2',
    title: 'Advanced CSS Grid Layout',
    description: 'Master CSS Grid with real-world layout examples',
    category: 'Frontend',
    difficulty: 'Advanced',
    duration: '60 min',
    instructor: 'Mike Chen',
    views: 3210,
    rating: 4.7,
  },
  {
    id: '3',
    title: 'Python Web Scraping with BeautifulSoup',
    description: 'Extract data from websites using Python',
    category: 'Backend',
    difficulty: 'Intermediate',
    duration: '50 min',
    instructor: 'Alex Rodriguez',
    views: 4150,
    rating: 4.6,
  },
  {
    id: '4',
    title: 'Getting Started with Docker',
    description: 'Containerize your applications with Docker',
    category: 'DevOps',
    difficulty: 'Beginner',
    duration: '55 min',
    instructor: 'David Kim',
    views: 2890,
    rating: 4.7,
  },
  {
    id: '5',
    title: 'Machine Learning with TensorFlow',
    description: 'Build and train neural networks with TensorFlow',
    category: 'Data Science',
    difficulty: 'Advanced',
    duration: '90 min',
    instructor: 'Emma Wilson',
    views: 1650,
    rating: 4.9,
  },
  {
    id: '6',
    title: 'RESTful API Design Best Practices',
    description: 'Design scalable and secure REST APIs',
    category: 'Backend',
    difficulty: 'Intermediate',
    duration: '65 min',
    instructor: 'James Brown',
    views: 3670,
    rating: 4.8,
  },
  {
    id: '7',
    title: 'Mobile App Development with Flutter',
    description: 'Create beautiful cross-platform mobile apps',
    category: 'Mobile',
    difficulty: 'Intermediate',
    duration: '75 min',
    instructor: 'Lisa Park',
    views: 2340,
    rating: 4.7,
  },
  {
    id: '8',
    title: 'TypeScript Advanced Types',
    description: 'Master TypeScript type system and generics',
    category: 'Frontend',
    difficulty: 'Advanced',
    duration: '70 min',
    instructor: 'Tom Davis',
    views: 2150,
    rating: 4.6,
  },
]

function DifficultyBadge({ difficulty }: { difficulty: Tutorial['difficulty'] }) {
  const colors = {
    Beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
    Intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
    Advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100',
  }
  return <Badge className={colors[difficulty]}>{difficulty}</Badge>
}

export default function TutorialsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('')
  const [sortBy, setSortBy] = useState('popular')

  const filteredTutorials = allTutorials.filter((tutorial) => {
    const matchesSearch =
      tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutorial.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || tutorial.category === selectedCategory
    const matchesDifficulty =
      !selectedDifficulty || tutorial.difficulty === selectedDifficulty
    return matchesSearch && matchesCategory && matchesDifficulty
  })

  const sortedTutorials = [...filteredTutorials].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating
      case 'newest':
        return 0 // In real app, would sort by date
      case 'duration':
        return 0 // In real app, would sort by duration
      case 'popular':
      default:
        return b.views - a.views
    }
  })

  const categories = Array.from(new Set(allTutorials.map((t) => t.category)))
  const difficulties = ['Beginner', 'Intermediate', 'Advanced']

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="border-b border-border bg-card py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="mb-2 text-4xl font-bold text-foreground">
              Video Tutorials
            </h1>
            <p className="text-muted-foreground">
              Learn with step-by-step video guides from expert instructors
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search tutorials..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3 md:flex-row">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="All Levels" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Levels</SelectItem>
                    {difficulties.map((difficulty) => (
                      <SelectItem key={difficulty} value={difficulty}>
                        {difficulty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="duration">Duration</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Tutorials Grid */}
          {sortedTutorials.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sortedTutorials.map((tutorial) => (
                <Card
                  key={tutorial.id}
                  className="overflow-hidden transition hover:shadow-lg hover:border-primary/50"
                >
                  <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Play className="h-12 w-12 text-primary opacity-70" />
                  </div>

                  <CardHeader>
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <DifficultyBadge difficulty={tutorial.difficulty} />
                      <span className="text-xs text-muted-foreground">
                        ★ {tutorial.rating.toFixed(1)}
                      </span>
                    </div>
                    <CardTitle className="text-base">{tutorial.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {tutorial.description}
                    </p>

                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {tutorial.duration}
                        </span>
                        <span>{tutorial.category}</span>
                      </div>
                      <div>By {tutorial.instructor}</div>
                      <div>{tutorial.views.toLocaleString()} views</div>
                    </div>

                    <Button className="w-full gap-2" variant="outline">
                      <Play className="h-4 w-4" />
                      Watch Tutorial
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-border bg-card p-12 text-center">
              <p className="text-lg text-muted-foreground">
                No tutorials found matching your filters
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('')
                  setSelectedDifficulty('')
                }}
                className="mt-4 text-primary hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </LayoutWrapper>
  )
}
