"use client"

import * as React from "react"

export function RecentActivities() {
  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <div className="mr-4 bg-primary/10 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-primary"
          >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">
            Completed JavaScript Basics
          </p>
          <p className="text-xs text-muted-foreground">
            2 days ago
          </p>
        </div>
        <div className="ml-auto font-medium">+5 points</div>
      </div>
      <div className="flex items-center">
        <div className="mr-4 bg-primary/10 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-primary"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">
            Started React Fundamentals
          </p>
          <p className="text-xs text-muted-foreground">
            4 days ago
          </p>
        </div>
        <div className="ml-auto font-medium">+2 points</div>
      </div>
    </div>
  )
}
