"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { searchContent, groupResultsByCategory, type SearchResult } from "@/lib/search-data"

interface SearchBarProps {
  onClose?: () => void
  isMobile?: boolean
}

export default function SearchBar({ onClose, isMobile = false }: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isActive, setIsActive] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  // Add viewport reset function at the top of the component, after the useState declarations
  const resetMobileViewport = () => {
    if (typeof window !== "undefined") {
      const viewportMeta = document.querySelector('meta[name="viewport"]')
      if (viewportMeta) {
        const content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        viewportMeta.setAttribute("content", content)

        // Force a reflow
        setTimeout(() => {
          window.scrollTo(0, window.scrollY)
        }, 50)
      }
    }
  }

  const performSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }

    setIsLoading(true)

    // Simulate slight delay for better UX
    setTimeout(() => {
      const searchResults = searchContent(searchQuery)
      setResults(searchResults)
      setIsLoading(false)
    }, 150)
  }

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    performSearch(value)
  }

  // Clear search
  const clearSearch = () => {
    setQuery("")
    setResults([])
    if (inputRef.current) {
      inputRef.current.focus()
    }

    // Reset viewport on mobile when clearing search
    if (isMobile) {
      setTimeout(resetMobileViewport, 100)
    }
  }

  // Handle key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      if (query) {
        clearSearch()
      } else if (onClose) {
        onClose()
        // Reset viewport when closing search on mobile
        if (isMobile) {
          setTimeout(resetMobileViewport, 100)
        }
      }
    }
  }

  // Focus input on mount for better UX
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  // Handle click away to close on desktop
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        resultsRef.current &&
        !resultsRef.current.contains(event.target as Node) &&
        !isMobile &&
        isActive
      ) {
        setIsActive(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMobile, isActive])

  // Group results by category
  const groupedResults = groupResultsByCategory(results)

  return (
    <div className={`relative ${isMobile ? "w-full" : "max-w-md w-full"}`}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {isLoading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="h-5 w-5 border-2 border-gray-300 border-t-pink-500 rounded-full"
            />
          ) : (
            <Search className="h-5 w-5 text-gray-400" />
          )}
        </div>

        <Input
          ref={inputRef}
          type="text" 
          placeholder="Search for programs, events, resources..."
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsActive(true)}
          onKeyDown={handleKeyPress}
          className={`pl-10 pr-10 py-2 rounded-full border-2 border-pink-100 focus:border-pink-300 bg-white text-sm placeholder:text-gray-400 shadow-sm focus:ring-0 ${
            isMobile ? "h-12" : "h-10"
          }`}
        />

        {query && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
            aria-label="Clear search"
          >
            <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {isActive && results.length > 0 && (
          <motion.div
            ref={resultsRef}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden z-50 border border-gray-100 max-h-[70vh] overflow-y-auto"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-gray-700">Search Results</h3>
                <span className="text-xs text-gray-500">{results.length} results</span>
              </div>

              <div className="space-y-4">
                {Object.entries(groupedResults).map(([category, categoryResults]) => (
                  <div key={category}>
                    <h4 className="text-xs uppercase tracking-wider text-pink-600 font-semibold mb-2">{category}</h4>
                    <ul className="space-y-1">
                      {categoryResults.map((result) => (
                        <motion.li
                          key={result.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link
                            href={result.url}
                            className="flex items-start p-2 hover:bg-pink-50 rounded-md transition-colors"
                            onClick={() => {
                              if (onClose) onClose()
                              setIsActive(false)
                              // Reset viewport when navigating on mobile
                              if (isMobile) {
                                setTimeout(resetMobileViewport, 100)
                              }
                            }}
                          >
                            {result.image && (
                              <div className="flex-shrink-0 mr-3">
                                <div className="relative w-12 h-12 rounded-md overflow-hidden">
                                  <Image
                                    src={result.image || "/placeholder.svg"}
                                    alt={result.title}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              </div>
                            )}
                            <div className={!result.image ? "pl-2" : ""}>
                              <h5 className="text-sm font-medium text-gray-800">{result.title}</h5>
                              <p className="text-xs text-gray-600 line-clamp-1">{result.description}</p>
                            </div>
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 py-2 px-4 border-t border-gray-100">
              <p className="text-xs text-gray-500">
                Press{" "}
                <kbd className="px-1 py-0.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded">
                  ↵ Enter
                </kbd>{" "}
                to view all results
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* No Results Message */}
      <AnimatePresence>
        {isActive && query && !isLoading && results.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden z-50 border border-gray-100"
          >
            <div className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="text-sm font-medium text-gray-700 mb-1">No results found</h3>
              <p className="text-xs text-gray-500">
                We couldn't find any matches for "{query}". Try different keywords or browse our categories.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
