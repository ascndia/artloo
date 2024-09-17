"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Search } from "lucide-react"

export function MobileSearchDrawer() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement your search logic here
    console.log("Searching for:", searchQuery)
    setIsOpen(false) // Close the drawer after search
  }

  return (
    <div className="md:hidden"> {/* Only visible on mobile */}
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline" size="icon">
            <Search className="h-4 w-4" />
            <span className="sr-only">Open search</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Search</DrawerTitle>
            <DrawerDescription>
              Enter your search query below.
            </DrawerDescription>
          </DrawerHeader>
          <form onSubmit={handleSearch} className="px-4">
            <div className="space-y-2">
              <Label htmlFor="search" className="text-left">Search Query</Label>
              <Input
                id="search"
                placeholder="Enter your search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <Button type="submit">Search</Button>
              </DrawerClose>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
    </div>
  )
}