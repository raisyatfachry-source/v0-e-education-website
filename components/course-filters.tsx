'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'

interface CourseFiltersProps {
  onFilterChange?: (filters: FilterState) => void
}

export interface FilterState {
  categories: string[]
  levels: string[]
  priceRange: [number, number]
  rating: number
}

const categories = [
  'Web Development',
  'Mobile',
  'Data Science',
  'Cloud',
  'Design',
  'Frontend',
  'Backend',
]

const levels = ['Beginner', 'Intermediate', 'Advanced']

export function CourseFilters({ onFilterChange }: CourseFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    levels: [],
    priceRange: [0, 100],
    rating: 0,
  })

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked
      ? [...filters.categories, category]
      : filters.categories.filter((c) => c !== category)
    const newFilters = { ...filters, categories: newCategories }
    setFilters(newFilters)
    onFilterChange?.(newFilters)
  }

  const handleLevelChange = (level: string, checked: boolean) => {
    const newLevels = checked
      ? [...filters.levels, level]
      : filters.levels.filter((l) => l !== level)
    const newFilters = { ...filters, levels: newLevels }
    setFilters(newFilters)
    onFilterChange?.(newFilters)
  }

  const handlePriceChange = (value: [number, number]) => {
    const newFilters = { ...filters, priceRange: value }
    setFilters(newFilters)
    onFilterChange?.(newFilters)
  }

  const handleRatingChange = (rating: number) => {
    const newFilters = { ...filters, rating }
    setFilters(newFilters)
    onFilterChange?.(newFilters)
  }

  return (
    <div className="space-y-4">
      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={filters.categories.includes(category)}
                onCheckedChange={(checked) =>
                  handleCategoryChange(category, checked as boolean)
                }
              />
              <Label htmlFor={category} className="font-normal cursor-pointer">
                {category}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Levels */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Level</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {levels.map((level) => (
            <div key={level} className="flex items-center space-x-2">
              <Checkbox
                id={level}
                checked={filters.levels.includes(level)}
                onCheckedChange={(checked) =>
                  handleLevelChange(level, checked as boolean)
                }
              />
              <Label htmlFor={level} className="font-normal cursor-pointer">
                {level}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            min={0}
            max={200}
            step={10}
            value={filters.priceRange}
            onValueChange={handlePriceChange}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </CardContent>
      </Card>

      {/* Rating */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Rating</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              onClick={() => handleRatingChange(filters.rating === rating ? 0 : rating)}
              className={`w-full px-3 py-2 text-sm text-left rounded transition ${
                filters.rating === rating
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/70'
              }`}
            >
              {rating}+ Stars
            </button>
          ))}
        </CardContent>
      </Card>

      {/* Reset Button */}
      <Button
        variant="outline"
        className="w-full"
        onClick={() => {
          const resetFilters: FilterState = {
            categories: [],
            levels: [],
            priceRange: [0, 100],
            rating: 0,
          }
          setFilters(resetFilters)
          onFilterChange?.(resetFilters)
        }}
      >
        Reset Filters
      </Button>
    </div>
  )
}
