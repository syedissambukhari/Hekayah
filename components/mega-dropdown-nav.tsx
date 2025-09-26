"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import MegaDropdown from "./mega-dropdown"
import { NavigationSection } from "./navigation-config"

interface MegaDropdownNavProps {
  section: NavigationSection
  activeDropdown: string | null
  onDropdownClick: (dropdown: string) => void
}

export default function MegaDropdownNav({ 
  section, 
  activeDropdown, 
  onDropdownClick 
}: MegaDropdownNavProps) {
  return (
    <div className="relative">
      <Button 
        variant="ghost" 
        className="px-4 py-3 text-sm font-medium flex items-center space-x-1"
        onClick={() => onDropdownClick(section.id)}
      >
        <span>{section.label}</span>
        {activeDropdown === section.id ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </Button>
      {activeDropdown === section.id && (
        <MegaDropdown 
          categories={section.categories}
          featuredImage={section.featuredImage}
          mostPopular={section.mostPopular}
        />
      )}
    </div>
  )
}
