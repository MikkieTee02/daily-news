import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Facebook, Instagram, Twitter, Youtube, Send } from "lucide-react";
import { Separator } from "./ui/separator";
import { infoLinks, companyLinks, socialIcons, businessHours } from "../lib/footerData";
import { getCategories } from "../lib/api"; // fetch from DB
import { Category } from "../types";

export default async function Footer() {
  // Fetch categories dynamically from API (DB)
  let categories: Category[] = [];
  try {
    categories = await getCategories();
  } catch (error) {
    console.error("Failed to load categories:", error);
  }

  return (
    <footer className="bg-foreground text-background mt-12">
      <div className="container mx-auto px-4 md:px-16 py-12">
        {/* Subscription Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-6">
          <h2 className="text-2xl md:text-3xl font-headline font-bold text-center lg:text-left">
            Stay informed and not <br className="hidden sm:block" />
            overwhelmed, subscribe now!
          </h2>
          <form className="flex w-full max-w-md items-center border border-border p-1 rounded-md">
            <Input
              type="email"
              placeholder="Your email *"
              className="bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-background placeholder:text-muted"
            />
            <Button type="submit" variant="primary" className="rounded-sm">
              Subscribe
            </Button>
          </form>
        </div>

        <Separator className="bg-border/20" />

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 py-12 text-center sm:text-left">
          {/* Business Hours */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <h3 className="font-headline text-lg font-bold mb-4">
              Business Hours
            </h3>
            {businessHours.map((entry) => (
              <p key={entry.day} className="text-muted-foreground text-sm">
                {entry.day}: {entry.hours}
              </p>
            ))}
            <div className="flex space-x-2 justify-center sm:justify-start mt-4">
              {socialIcons.map((social) => {
                const Icon =
                  social.name === "Facebook"
                    ? Facebook
                    : social.name === "Twitter"
                    ? Twitter
                    : social.name === "Instagram"
                    ? Instagram
                    : social.name === "YouTube"
                    ? Youtube
                    : Send;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="w-8 h-8 flex items-center justify-center rounded-sm bg-card/10 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Categories (from DB) */}
          <div>
            <h3 className="font-headline text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.slice(0, 7).map((category) => (
                <li key={category._id}>
                  <Link
                    href={`/category/${category.slug}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-headline text-lg font-bold mb-4">Information</h3>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <h3 className="font-headline text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-border/20" />

        {/* Logo Section */}
        <div className="text-center pt-8 lg:pt-0">
          <h2 className="text-4xl font-headline font-bold">Daily News</h2>
          <p className="text-muted-foreground text-sm mt-1">All voices matter</p>
        </div>
        <Separator className="bg-border/20" />

        {/* Copyright */}
        <div className="pt-6 text-center text-sm text-muted-foreground">
          <p>Copyright &copy; {new Date().getFullYear()} - Mikaela Nyamasoka</p>
        </div>
      </div>
    </footer>
  );
}
