'use server'

// Page information for pagination
interface PageInfo {
  hasNextPage: boolean;
  endCursor: string;
}

// Individual blog post node structure
interface PostNode {
  title: string;
  subtitle: string | null;
  brief: string;
  slug: string;
  url: string;
  publishedAt: string;
  readTimeInMinutes: number;
}

// Edge structure containing the post node
interface PostEdge {
  node: PostNode;
}

// Posts structure containing edges and pagination info
interface Posts {
  pageInfo: PageInfo;
  edges: PostEdge[];
}

// Publication structure
interface Publication {
  title: string;
  posts: Posts;
}

// Main response structure
export interface HashnodeResponse {
  publication: Publication;
}

// Response type for the fetch function
export interface FetchPostsResponse {
  error?: string;
  data?: HashnodeResponse;
}

// Props type for the fetch function
export interface FetchPostsProps {
  limit: number;
}

// Fetch posts function with correct typing
export async function fetchPosts({ limit }: FetchPostsProps): Promise<FetchPostsResponse> {

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ first: limit }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    const data: HashnodeResponse = await response.json();

    return { data };
  } catch (err) {
    console.log(err)
    return {
      error: 'An error occurred while fetching posts. Please try again later.',
    };
  }
}