'use client'

import Link from 'next/link'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from './ui/navigation-menu'
import { Button } from './ui/button'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Report Issue', href: '/report' },
  { name: 'View Reports', href: '/reports' },
  { name: 'About', href: '/about' },
]

export default function Navigation() {
  return (
    <header className="bg-white border-b">
      <nav className="mx-auto max-w-7xl flex items-center justify-between p-4 lg:px-8" aria-label="Global">
        <Link href="/" className="text-xl font-bold text-primary">
          FixMyStreet
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="hidden lg:flex gap-2">
            {navigation.map((item) => (
              <NavigationMenuItem key={item.name}>
                <Button asChild variant="ghost" className="font-semibold text-base">
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="lg:hidden">
          {/* Mobile menu can be implemented with a Drawer or Sheet from shadcn/ui if desired */}
        </div>
      </nav>
    </header>
  )
} 