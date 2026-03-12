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
import {
  FileText,
  Video,
  Code,
  Book,
  Download,
  ExternalLink,
  Search,
} from 'lucide-react'

interface Resource {
  id: string
  title: string
  description: string
  type: 'ebook' | 'video' | 'code' | 'guide'
  category: string
  downloads: number
  rating: number
  image?: string
}

const allResources: Resource[] = [
  {
    id: '1',
    title: 'The Complete Web Developer Roadmap 2024',
    description: 'A comprehensive guide to becoming a web developer in 2024',
    type: 'ebook',
    category: 'Web Development',
    downloads: 2450,
    rating: 4.8,
  },
  {
    id: '2',
    title: 'React Hooks Advanced Patterns',
    description: 'Master advanced React Hooks patterns and best practices',
    type: 'video',
    category: 'Frontend',
    downloads: 1820,
    rating: 4.9,
  },
  {
    id: '3',
    title: 'JavaScript Snippets Library',
    description: 'Collection of 100+ useful JavaScript code snippets',
    type: 'code',
    category: 'Web Development',
    downloads: 3200,
    rating: 4.6,
  },
  {
    id: '4',
    title: 'CSS Grid Complete Guide',
    description: 'In-depth guide to CSS Grid layout system',
    type: 'guide',
    category: 'Frontend',
    downloads: 1650,
    rating: 4.7,
  },
  {
    id: '5',
    title: 'Python Data Science Tutorial',
    description: 'Step-by-step tutorial for data science with Python',
    type: 'video',
    category: 'Data Science',
    downloads: 2100,
    rating: 4.8,
  },
  {
    id: '6',
    title: 'API Design Best Practices',
    description: 'Complete guide to designing robust and scalable APIs',
    type: 'ebook',
    category: 'Backend',
    downloads: 1900,
    rating: 4.7,
  },
  {
    id: '7',
    title: 'TypeScript Cheat Sheet',
    description: 'Quick reference guide for TypeScript syntax and types',
    type: 'guide',
    category: 'Web Development',
    downloads: 2800,
    rating: 4.9,
  },
  {
    id: '8',
    title: 'Docker Containerization Guide',
    description: 'Complete guide to Docker and containerized applications',
    type: 'video',
    category: 'DevOps',
    downloads: 1450,
    rating: 4.6,
  },
]

function ResourceIcon({ type }: { type: Resource['type'] }) {
  switch (type) {
    case 'ebook':
      return <Book className="h-5 w-5 text-primary" />
    case 'video':
      return <Video className="h-5 w-5 text-accent" />
    case 'code':
      return <Code className="h-5 w-5 text-green-500" />
    case 'guide':
      return <FileText className="h-5 w-5 text-blue-500" />
  }
}

function ResourceTypeLabel({ type }: { type: Resource['type'] }) {
  switch (type) {
    case 'ebook':
      return 'eBook'
    case 'video':
      return 'Video'
    case 'code':
      return 'Code'
    case 'guide':
      return 'Guide'
  }
}

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const filteredResources = allResources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = !selectedType || resource.type === selectedType
    const matchesCategory = !selectedCategory || resource.category === selectedCategory
    return matchesSearch && matchesType && matchesCategory
  })

  const categories = Array.from(new Set(allResources.map((r) => r.category)))
  const types = Array.from(new Set(allResources.map((r) => r.type)))

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="border-b border-border bg-card py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="mb-2 text-4xl font-bold text-foreground">
              Resources Library
            </h1>
            <p className="text-muted-foreground">
              Explore our collection of learning resources, guides, and tools
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search resources..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Types</SelectItem>
                  {types.map((type) => (
                    <SelectItem key={type} value={type}>
                      {ResourceTypeLabel({ type: type as Resource['type'] })}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
            </div>
          </div>

          {/* Resources Grid */}
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredResources.map((resource) => (
                <Card
                  key={resource.id}
                  className="transition hover:shadow-lg hover:border-primary/50"
                >
                  <CardHeader>
                    <div className="mb-3 flex items-start justify-between gap-2">
                      <div className="rounded-lg bg-muted p-2">
                        <ResourceIcon type={resource.type} />
                      </div>
                      <Badge variant="outline">
                        {ResourceTypeLabel({ type: resource.type })}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {resource.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{resource.category}</span>
                      <span>★ {resource.rating.toFixed(1)}</span>
                    </div>

                    <div className="flex items-center justify-between border-t border-border pt-4">
                      <div className="text-xs text-muted-foreground">
                        {resource.downloads} downloads
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="gap-2"
                      >
                        <Download className="h-3 w-3" />
                        Get
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-border bg-card p-12 text-center">
              <p className="text-lg text-muted-foreground">
                No resources found matching your filters
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedType('')
                  setSelectedCategory('')
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
