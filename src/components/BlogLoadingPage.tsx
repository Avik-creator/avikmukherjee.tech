import { Loader2 } from 'lucide-react'

export default function BlogLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Loader2 className="h-16 w-16 animate-spin text-primary" />
      <h2 className="text-2xl font-semibold mt-4">Loading blog posts...</h2>
      <p className="text-muted-foreground mt-2">Please wait while we fetch the latest content.</p>
    </div>
  )
}

