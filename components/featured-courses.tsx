import Link from 'next/link'
import { CourseCard } from '@/components/course-card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const featuredCourses = [
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
]

export function FeaturedCourses() {
  return (
    <section id="featured" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-foreground sm:text-4xl">
              Featured Courses
            </h2>
            <p className="text-muted-foreground">
              Discover our most popular and highest-rated courses
            </p>
          </div>
          <Link href="/courses">
            <Button variant="outline">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  )
}
