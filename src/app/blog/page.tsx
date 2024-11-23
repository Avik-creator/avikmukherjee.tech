'use client'



import React, { useState, useEffect } from 'react'
import { fetchPosts } from '@/lib/getBlogs'
import PostComponent from '@/components/PostComponent'
import SearchComponent from '@/components/SearchComponent'
import BlogLoading from '@/components/BlogLoadingPage'


interface Post {
  node: {
    title: string
    subtitle: string | null
    brief: string
    slug: string
    url: string
    publishedAt: string
    readTimeInMinutes: number
  }
}

export default function PostPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [publicationTitle, setPublicationTitle] = useState('')

useEffect(() => {
    async function loadPosts() {
        setLoading(true)
        const { data: postsData, error } = await fetchPosts({ limit: 20 })
        if (error) {
            setError(error)
        } else if (postsData) {
            setPosts(postsData.publication.posts.edges)
            setFilteredPosts(postsData.publication.posts.edges)
            setPublicationTitle(postsData.publication.title)
        }
        setLoading(false)
    }
    loadPosts()
}, [])

  const onSearch = (term: string) => {
    setSearchTerm(term)
    if (term.trim() === '') {
      setFilteredPosts(posts)
    } else {
      const filtered = posts.filter(({ node }) => 
        node.title.toLowerCase().includes(term.toLowerCase()) ||
        (node.subtitle && node.subtitle.toLowerCase().includes(term.toLowerCase())) ||
        node.brief.toLowerCase().includes(term.toLowerCase())
      )
      setFilteredPosts(filtered)
    }
  }

    if (loading) {
        return <BlogLoading/>
    }

  if (error) {
    return <div className="container mx-auto px-4 py-8 text-center text-red-500">{error}</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Avik&apos;s Blog</h1>
      <SearchComponent searchTerm={searchTerm} onSearchChange={(e) => onSearch(e.target.value)} />
      {filteredPosts.length === 0 ? (
        <p className="text-center text-muted-foreground mt-8">No posts found matching your search.</p>
      ) : (
        <div className="mt-8 space-y-8">
          {filteredPosts.map(({ node }) => (
            <PostComponent key={node.slug} {...node} />
          ))}
        </div>
      )}
    </div>
  )
}

