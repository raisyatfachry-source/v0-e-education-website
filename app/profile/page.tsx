'use client'

import { useState } from 'react'
import { LayoutWrapper } from '@/components/layout-wrapper'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Progress } from '@/components/ui/progress'
import {
  BookOpen,
  Award,
  Settings,
  LogOut,
  Download,
  CalendarDays,
  Clock,
} from 'lucide-react'

// Mock user data
const userData = {
  name: 'Alex Johnson',
  email: 'alex@example.com',
  bio: 'Passionate learner and web developer',
  avatar: '/placeholder-user.jpg',
  joinDate: 'January 2024',
  coursesEnrolled: 8,
  coursesCompleted: 3,
  certificatesEarned: 3,
  totalHoursLearned: 145,
}

const enrolledCourses = [
  {
    id: '1',
    title: 'Introduction to Web Development',
    progress: 85,
    lastAccessed: '2 days ago',
    certificate: true,
  },
  {
    id: '2',
    title: 'Advanced React & Next.js',
    progress: 45,
    lastAccessed: 'today',
    certificate: false,
  },
  {
    id: '3',
    title: 'Python for Data Science',
    progress: 100,
    lastAccessed: '1 week ago',
    certificate: true,
  },
  {
    id: '4',
    title: 'Mobile App Development with Flutter',
    progress: 20,
    lastAccessed: '5 days ago',
    certificate: false,
  },
]

const certificates = [
  {
    id: 'cert-1',
    title: 'Introduction to Web Development',
    issuedDate: 'March 2024',
    certificateId: 'EDU-2024-001',
  },
  {
    id: 'cert-2',
    title: 'Python for Data Science',
    issuedDate: 'February 2024',
    certificateId: 'EDU-2024-002',
  },
  {
    id: 'cert-3',
    title: 'UI/UX Design Fundamentals',
    issuedDate: 'January 2024',
    certificateId: 'EDU-2024-003',
  },
]

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: userData.name,
    email: userData.email,
    bio: userData.bio,
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-background">
        {/* Profile Header */}
        <div className="border-b border-border bg-card py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={userData.avatar} />
                  <AvatarFallback>
                    {userData.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <h1 className="text-3xl font-bold text-foreground">
                    {userData.name}
                  </h1>
                  <p className="text-muted-foreground">{userData.email}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Joined {userData.joinDate}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  variant={isEditing ? 'default' : 'outline'}
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  {isEditing ? 'Done Editing' : 'Edit Profile'}
                </Button>
                <Button variant="outline">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="border-b border-border bg-background py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center gap-2">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <div className="text-center">
                      <p className="text-2xl font-bold text-foreground">
                        {userData.coursesEnrolled}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Courses Enrolled
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center gap-2">
                    <Award className="h-6 w-6 text-accent" />
                    <div className="text-center">
                      <p className="text-2xl font-bold text-foreground">
                        {userData.coursesCompleted}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Courses Completed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center gap-2">
                    <Download className="h-6 w-6 text-green-500" />
                    <div className="text-center">
                      <p className="text-2xl font-bold text-foreground">
                        {userData.certificatesEarned}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Certificates
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center gap-2">
                    <Clock className="h-6 w-6 text-blue-500" />
                    <div className="text-center">
                      <p className="text-2xl font-bold text-foreground">
                        {userData.totalHoursLearned}h
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Hours Learning
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Tabs defaultValue="courses" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-3">
              <TabsTrigger value="courses">My Courses</TabsTrigger>
              <TabsTrigger value="certificates">Certificates</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            {/* Courses Tab */}
            <TabsContent value="courses" className="space-y-6">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  Enrolled Courses
                </h2>
                <div className="space-y-4">
                  {enrolledCourses.map((course) => (
                    <Card key={course.id} className="transition hover:border-primary/50">
                      <CardContent className="p-6">
                        <div className="mb-4 flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-semibold text-foreground">
                                {course.title}
                              </h3>
                              {course.certificate && (
                                <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                                  Completed
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Last accessed {course.lastAccessed}
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            Continue
                          </Button>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                              Progress
                            </span>
                            <span className="font-semibold text-foreground">
                              {course.progress}%
                            </span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Certificates Tab */}
            <TabsContent value="certificates" className="space-y-6">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  My Certificates
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {certificates.map((cert) => (
                    <Card key={cert.id} className="flex flex-col transition hover:shadow-lg hover:border-primary/50">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-base">
                          <Award className="h-5 w-5 text-accent" />
                          {cert.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1 space-y-4">
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Issued Date
                          </p>
                          <p className="font-semibold text-foreground">
                            {cert.issuedDate}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Certificate ID
                          </p>
                          <p className="font-mono text-sm text-foreground">
                            {cert.certificateId}
                          </p>
                        </div>
                        <Button className="w-full" variant="outline" size="sm">
                          Download
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-6">
              {isEditing ? (
                <Card>
                  <CardHeader>
                    <CardTitle>Edit Profile</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        rows={4}
                      />
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button onClick={() => setIsEditing(false)}>
                        Save Changes
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setFormData({
                            name: userData.name,
                            email: userData.email,
                            bio: userData.bio,
                          })
                          setIsEditing(false)
                        }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Name</p>
                        <p className="font-semibold text-foreground">
                          {userData.name}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-semibold text-foreground">
                          {userData.email}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Bio</p>
                        <p className="font-semibold text-foreground">
                          {userData.bio}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Preferences</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-foreground">
                          Email Notifications
                        </p>
                        <Button variant="outline" size="sm">
                          Manage
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-foreground">
                          Dark Mode
                        </p>
                        <Button variant="outline" size="sm">
                          Toggle
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </LayoutWrapper>
  )
}
