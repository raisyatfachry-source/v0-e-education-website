'use client'

import { LayoutWrapper } from '@/components/layout-wrapper'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Star,
  Users,
  BookOpen,
  Award,
  Clock,
  Play,
  MessageSquare,
} from 'lucide-react'

// Sample course data
const course = {
  id: '1',
  title: 'Introduction to Web Development',
  description:
    'Learn HTML, CSS, and JavaScript fundamentals from scratch. This comprehensive course is designed for complete beginners and will teach you everything you need to know to start building websites.',
  category: 'Web Development',
  level: 'Beginner',
  students: 15420,
  rating: 4.8,
  reviews: 1240,
  price: 49.99,
  instructor: {
    name: 'Sarah Johnson',
    image: '/placeholder-user.jpg',
    bio: 'Full-stack developer with 10+ years of experience',
  },
  duration: '32 hours',
  lessons: 145,
  projects: 8,
  modules: [
    {
      id: 'module-1',
      title: 'Getting Started',
      lessons: [
        { id: 'lesson-1', title: 'Course Introduction', duration: '5:30' },
        { id: 'lesson-2', title: 'Setting Up Your Environment', duration: '12:45' },
        { id: 'lesson-3', title: 'First Website', duration: '18:20' },
      ],
    },
    {
      id: 'module-2',
      title: 'HTML Fundamentals',
      lessons: [
        { id: 'lesson-4', title: 'HTML Basics', duration: '22:15' },
        { id: 'lesson-5', title: 'Semantic HTML', duration: '15:40' },
        { id: 'lesson-6', title: 'Forms and Input', duration: '20:30' },
      ],
    },
    {
      id: 'module-3',
      title: 'CSS Styling',
      lessons: [
        { id: 'lesson-7', title: 'CSS Selectors', duration: '18:50' },
        { id: 'lesson-8', title: 'Layouts and Positioning', duration: '25:15' },
        { id: 'lesson-9', title: 'Responsive Design', duration: '28:40' },
      ],
    },
  ],
  tutorials: [
    {
      id: 'tut-1',
      title: 'Building Your First Portfolio Website',
      duration: '45 mins',
      difficulty: 'Beginner',
    },
    {
      id: 'tut-2',
      title: 'Creating a Contact Form',
      duration: '30 mins',
      difficulty: 'Beginner',
    },
    {
      id: 'tut-3',
      title: 'Responsive Navigation Menu',
      duration: '50 mins',
      difficulty: 'Intermediate',
    },
  ],
  reviews: [
    {
      id: 'review-1',
      author: 'John Smith',
      rating: 5,
      text: 'Excellent course! The instructor explains everything clearly and the projects are really helpful.',
      date: '2 weeks ago',
    },
    {
      id: 'review-2',
      author: 'Emily Davis',
      rating: 4,
      text: 'Great content, very well structured. Only wish there were more projects.',
      date: '1 month ago',
    },
  ],
}

export default function CourseDetailPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <div className="border-b border-border bg-gradient-to-b from-primary/10 to-background py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-4 flex items-center gap-2">
              <Badge variant="outline">{course.category}</Badge>
              <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
                {course.level}
              </Badge>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-foreground">
              {course.title}
            </h1>
            <p className="mb-6 max-w-2xl text-lg text-muted-foreground">
              {course.description}
            </p>

            <div className="mb-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-accent text-accent" />
                <span className="font-semibold">{course.rating}</span>
                <span className="text-muted-foreground">
                  ({course.reviews} reviews)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  {course.students.toLocaleString()} students
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">{course.duration}</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg">Enroll Now - ${course.price}</Button>
              <Button size="lg" variant="outline">
                Preview Course
              </Button>
            </div>
          </div>
        </div>

        {/* Instructor */}
        <div className="border-b border-border bg-card py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-2xl font-bold text-foreground">
              Your Instructor
            </h2>
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={course.instructor.image} />
                <AvatarFallback>
                  {course.instructor.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-foreground">
                  {course.instructor.name}
                </h3>
                <p className="text-muted-foreground">
                  {course.instructor.bio}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <BookOpen className="h-5 w-5" />
                      Course Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-semibold">{course.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Lessons</p>
                      <p className="font-semibold">{course.lessons}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Projects</p>
                      <p className="font-semibold">{course.projects}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Award className="h-5 w-5" />
                      What You'll Learn
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>✓ HTML fundamentals and best practices</li>
                      <li>✓ CSS styling and responsive design</li>
                      <li>✓ JavaScript basics and DOM manipulation</li>
                      <li>✓ Build real-world projects</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Curriculum Tab */}
            <TabsContent value="curriculum" className="space-y-6">
              {course.modules.map((module, index) => (
                <Card key={module.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Module {index + 1}: {module.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {module.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className="flex items-center justify-between rounded-lg bg-muted p-4 transition hover:bg-muted/80"
                        >
                          <div className="flex items-center gap-3">
                            <Play className="h-4 w-4 text-primary" />
                            <div>
                              <p className="font-medium text-foreground">
                                {lesson.title}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {lesson.duration}
                              </p>
                            </div>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            Video
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Tutorials Tab */}
            <TabsContent value="tutorials" className="space-y-4">
              {course.tutorials.map((tutorial) => (
                <Card
                  key={tutorial.id}
                  className="transition hover:border-primary/50"
                >
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-4">
                      <div className="rounded-lg bg-primary/10 p-3">
                        <Play className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          {tutorial.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {tutorial.difficulty} • {tutorial.duration}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline">Watch</Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Reviews Tab */}
            <TabsContent value="reviews" className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {course.rating}/5
                  </h3>
                  <p className="text-muted-foreground">
                    Based on {course.reviews} reviews
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {course.reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="pt-6">
                      <div className="mb-4 flex items-center justify-between">
                        <p className="font-semibold text-foreground">
                          {review.author}
                        </p>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-accent text-accent"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="mb-2 text-muted-foreground">
                        {review.text}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {review.date}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-primary/50 bg-primary/5">
                <CardContent className="flex items-center gap-3 p-6">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">
                      Have a question?
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Ask in the discussion forum or contact the instructor
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </LayoutWrapper>
  )
}
