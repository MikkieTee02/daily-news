"use client";

import Link from "next/link";
import { Menu, Search, User, ChevronDown, Sun, Moon } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/src/components/ui/sheet";
import { categories } from "../lib/data";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "../lib/utils";
import { Separator } from "@/src/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { Input } from "./ui/input";
import { useState } from "react";
import { useTheme } from "next-themes";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/src/components/ui/dialog";
import { useSession, signIn, signOut } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const { setTheme, theme } = useTheme();

  const navLinks = [
    { href: "/", label: "Home" },
    ...categories.map((category) => ({
      href: `/category/${category.slug}`,
      label: category.name,
    })),
  ];

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  //importing session from next-auth
  const { data: session, status } = useSession();

  return (
    <header className="bg-foreground text-background  top-0 z-50 py-8">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center h-20 md:h-24">
          <div className="flex items-center gap-2 md:gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-72 p-0 flex flex-col bg-background text-foreground"
              >
                <SheetHeader className="p-4 border-b border-border">
                  <SheetTitle asChild>
                    <Link
                      href="/"
                      className="text-2xl font-extrabold tracking-wider"
                    >
                      DAILY NEWS
                    </Link>
                  </SheetTitle>
                  <SheetDescription>Main navigation menu</SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col gap-4 p-4 flex-grow">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors",
                        pathname === link.href && "text-primary"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Button>
          </div>
          <div className="text-center">
            <Link
              href="/"
              className="text-3xl  md:text-5xl font-headline font-bold tracking-wider text-background"
            >
              Daily News
            </Link>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">
              All voices matter
            </p>
          </div>

          {/*Right section with auth button*/}
          <div className="flex items-center gap-2 md:gap-4">
            {status === "authenticated" ? (
              <>
                <div className="flex items-center gap-2">
                  <img
                    src={
                      session.user?.image || "https://via.placeholder.com/150"
                    }
                    alt={session.user?.name || "User"}
                    className="h-8 w-8 rounded-full"
                  />

                  <span className="hidden md:block">{session.user?.name}</span>
                </div>
                <Button
                  variant="ghost"
                  onClick={() => signOut({ callbackUrl: "/" })}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" className="hidden sm:flex">
                    <User className="mr-2 h-4 w-4" /> Sign In
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-amber-100">
                  <DialogHeader>
                    <DialogTitle>Sign In</DialogTitle>
                    <DialogDescription>
                      Sign in to access your personalized feed and save
                      articles.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <Button onClick={() => signIn("google")} variant="outline">
                      <FcGoogle className="mr-2 h-6 w-6" />
                      Sign in with Google
                    </Button>
                  </div>
                  <DialogFooter>
                    <p className="text-xs text-muted-foreground">
                      By signing in, you agree to our Terms of Service and
                      Privacy Policy.
                    </p>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            )}
            <Button
              variant="primary"
              className="rounded-sm hidden md:inline-flex"
            >
              Subscribe Now
            </Button>
          </div>
        </div>

        <Separator className="bg-border/50" />

        {/* Bottom Bar (Navigation) */}
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 p-2">
                <form onSubmit={handleSearch}>
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                </form>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <nav className="hidden lg:flex items-center gap-6 uppercase text-sm font-semibold tracking-wider">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "pb-1 border-b-2 transition-colors",
                  pathname === link.href
                    ? "text-primary border-primary"
                    : "text-background border-transparent hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1">
                  EN <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>EN</DropdownMenuItem>
                <DropdownMenuItem>ES</DropdownMenuItem>
                <DropdownMenuItem>FR</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
