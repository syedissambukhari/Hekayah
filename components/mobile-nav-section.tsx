"use client"

import Link from "next/link"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"
import { NavigationSection, generateProductUrl } from "./navigation-config"

interface MobileNavSectionProps {
  section: NavigationSection
  openSections: string[]
  onToggleSection: (label: string) => void
}

export default function MobileNavSection({ 
  section, 
  openSections, 
  onToggleSection 
}: MobileNavSectionProps) {
  return (
    <Collapsible>
      <CollapsibleTrigger
        onClick={() => onToggleSection(section.label)}
        className="flex items-center justify-between w-full px-4 py-3 text-left text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
      >
        <span>{section.label}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-500 transition-transform ${
            openSections.includes(section.label) ? "rotate-180" : ""
          }`}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 pb-2">
        <div className="space-y-1 pl-4 border-l-2 border-gray-100">
          {section.categories.map((category) => (
            <div key={category.title} className="space-y-1">
              <div className="text-sm font-medium text-gray-800 py-1">
                {category.title}
              </div>
              {category.items.map((item) => (
                <Link
                  key={item}
                  href={generateProductUrl(section.id, item)}
                  className="block py-1 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
