import React from 'react'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface PostProps {
  title: string
  subtitle: string | null
  brief: string
  slug: string
  url: string
  publishedAt: string
  readTimeInMinutes: number
}

const Posts: React.FC<PostProps> = ({
  title,
  subtitle,
  brief,
  slug,
  url,
  publishedAt,
  readTimeInMinutes,
}) => {
  return (
    <Card className="mb-2">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {subtitle && <CardDescription>{subtitle}</CardDescription>}
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{brief}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          <span>Published: {new Date(publishedAt).toLocaleDateString()}</span>
          <span className="ml-4">{readTimeInMinutes} min read</span>
        </div>
        <Button asChild>
          <Link href={url} target='_blank'>Read more</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Posts

