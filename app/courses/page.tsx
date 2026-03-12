'use client'

import { useState } from 'react'
import { LayoutWrapper } from '@/components/layout-wrapper'
import { CourseCard } from '@/components/course-card'
import { CourseFilters, type FilterState } from '@/components/course-filters'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Search } from 'lucide-react'

const allCourses = [
  {
    id: '1',
    title: 'Introduction to Web Development',
    description: 'Learn HTML, CSS, and JavaScript fundamentals from scratch',
    category: 'Web Development',
    level: 'Beginner' as const,
    students: 15420,
    rating: 4.8,
    price: 49.99,
  },
  {
    id: '2',
    title: 'Advanced React & Next.js',
    description: 'Master modern React patterns and build production-ready apps',
    category: 'Frontend',
    level: 'Advanced' as const,
    students: 8230,
    rating: 4.9,
    price: 79.99,
  },
  {
    id: '3',
    title: 'Python for Data Science',
    description: 'Explore data analysis, visualization, and machine learning basics',
    category: 'Data Science',
    level: 'Intermediate' as const,
    students: 12540,
    rating: 4.7,
    price: 59.99,
  },
  {
    id: '4',
    title: 'Mobile App Development with Flutter',
    description: 'Build beautiful cross-platform mobile applications',
    category: 'Mobile',
    level: 'Intermediate' as const,
    students: 6890,
    rating: 4.6,
    price: 69.99,
  },
  {
    id: '5',
    title: 'Cloud Architecture on AWS',
    description: 'Design and deploy scalable cloud solutions',
    category: 'Cloud',
    level: 'Advanced' as const,
    students: 5420,
    rating: 4.8,
    price: 89.99,
  },
  {
    id: '6',
    title: 'UI/UX Design Fundamentals',
    description: 'Create beautiful and user-friendly digital experiences',
    category: 'Design',
    level: 'Beginner' as const,
    students: 9870,
    rating: 4.7,
    price: 39.99,
  },
  {
    id: '7',
    title: 'Backend Development with Node.js',
    description: 'Build scalable server-side applications',
    category: 'Backend',
    level: 'Intermediate' as const,
    students: 7340,
    rating: 4.6,
    price: 64.99,
  },
  {
    id: '8',
    title: 'Kubernetes and Docker',
    description: 'Master containerization and orchestration',
    category: 'Cloud',
    level: 'Advanced' as const,
    students: 4560,
    rating: 4.9,
    price: 84.99,
  },
  {
    id: '9',
    title: 'JavaScript Mastery',
    description: 'Deep dive into JavaScript fundamentals and advanced concepts',
    category: 'Web Development',
    level: 'Intermediate' as const,
    students: 11230,
    rating: 4.8,
    price: 54.99,
  },
]

export default function CoursesPage() {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    levels: [],
    priceRange: [0, 200],
    rating: 0,
  })
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('popular')

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = filters.categories.length === 0 || 
      filters.categories.includes(course.category)
    
    const matchesLevel = filters.levels.length === 0 || 
      filters.levels.includes(course.level)
    
    const matchesPrice = course.price >= filters.priceRange[0] && 
      course.price <= filters.priceRange[1]
    
    const matchesRating = filters.rating === 0 || 
      course.rating >= filters.rating

    return matchesSearch && matchesCategory && matchesLevel && matchesPrice && matchesRating
  })

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'students':
        return b.students - a.students
      case 'popular':
      default:
        return b.students - a.students
    }
  })

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="border-b border-border bg-card py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="mb-2 text-4xl font-bold text-foreground">
              Browse Courses
            </h1>
            <p className="text-muted-foreground">
              Discover {filteredCourses.length} courses tailored to your learning goals
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Sidebar */}
            <aside className="w-full lg:w-64">
              <div className="sticky top-20 space-y-4">
                <CourseFilters onFilterChange={setFilters} />
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
              {/* Search and Sort */}
              <div className="mb-8 flex flex-col gap-4 sm:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search courses..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="students">Most Students</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Courses Grid */}
              {sortedCourses.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {sortedCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              ) : (
                <div className="rounded-lg border border-border bg-card p-12 text-center">
                  <p className="text-lg text-muted-foreground">
                    No courses found matching your filters
                  </p>
                  <button
                    onClick={() => {
                      setFilters({
                        categories: [],
                        levels: [],
                        priceRange: [0, 200],
                        rating: 0,
                      })
                      setSearchQuery('')
                    }}
                    className="mt-4 text-primary hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
