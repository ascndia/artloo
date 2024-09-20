"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  PaletteIcon,
  MenuIcon,
  UploadIcon,
  BellIcon,
  SearchIcon,
  ChevronDownIcon,
  HeartIcon,
  ArchiveIcon,
  MoonIcon,
  SunIcon,
  UsersIcon,
  SmartphoneIcon,
  BriefcaseIcon,
  User,
  Settings,
  LogOut,
  Bookmark,
  MessageCircle,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Container } from "./Container";
import { useNotificationStore } from "@/state/notification";
import Action from "./Action";
import SearchHeader from "./SearchHeader";
import useIsMobile from "@/hooks/useIsMobile";
import useBreakpoint from "@/hooks/useBreakpoint";
import { useSearchDrawer } from "@/state/search-drawer";
import PricingBtn from "./PricingBtn";

export function HeaderComponent() {
  const { setTheme, theme } = useTheme();
  const isBreakpoint = useBreakpoint();
  const ToggleDrawer = useNotificationStore((state) => state.toggleOpen);
  const { setIsOpen } = useSearchDrawer();
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <Container className="border-b" size="full">
        <div className=" flex h-14 items-center gap-4">
          <div className="flex">
            <Link href="/" className="mr-4 flex items-center space-x-2">
              <PaletteIcon className="h-6 w-6" />
              <span className="font-bold text-2xl inline-block">Artloo</span>
            </Link>
            <Link
              href="/pricing"
              className="hidden md:flex items-center space-x-2"
            >
              {/* <Button variant="outline" title="Pricing">
                Pricing
              </Button> */}
              <PricingBtn />
            </Link>
          </div>
          <div className="flex flex-1 items-center ">
            {isBreakpoint ? (
              <Button
                onClick={() => setIsOpen(true)}
                className="ml-auto"
                variant="outline"
              >
                <SearchIcon className="h-4 w-4" />
              </Button>
            ) : (
              <SearchHeader />
            )}
          </div>
          <div className="flex items-center space-x-2 justify-end">
            <Action />
            <Link href={"/chat"}>
              <Button variant="ghost" size="icon" className="px-2">
                <MessageCircle className="h-4 w-4" />
                <span className="sr-only">Messages</span>
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="px-2"
              onClick={ToggleDrawer}
            >
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/avatar.png" alt="@username" />
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">username</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      user@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <HeartIcon className="mr-2 h-4 w-4" />
                  <span>Liked</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Bookmark className="mr-2 h-4 w-4" />
                  <span>Collections</span>
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <ArchiveIcon className="mr-2 h-4 w-4" />
                    <span>Archived</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Posts</DropdownMenuItem>
                    <DropdownMenuItem>Articles</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  <UsersIcon className="mr-2 h-4 w-4" />
                  <span>Following</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BriefcaseIcon className="mr-2 h-4 w-4" />
                  <span>My Gigs</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <SmartphoneIcon className="mr-2 h-4 w-4" />
                  <span>Get the App</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? (
                    <SunIcon className="mr-2 h-4 w-4" />
                  ) : (
                    <MoonIcon className="mr-2 h-4 w-4" />
                  )}
                  <span>Toggle Theme</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </Container>
    </header>
  );
}
