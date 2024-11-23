import React from 'react'
import { Input } from "@/components/ui/input"

interface SearchComponentProps {
  searchTerm: string
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchComponent: React.FC<SearchComponentProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="mb-6">
      <Input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={onSearchChange}
      />
    </div>
  )
}

export default SearchComponent

