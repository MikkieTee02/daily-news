import Link from "next/link";
import Image from "next/image";
import { Newspaper } from "lucide-react";
import type { Article } from "../types";
import { Separator } from "./ui/separator";
import { ArticleCard } from "./ArticleCard";

interface BreakingNewsProps {
  articles: Article[];
}

export default function BreakingNews({ articles }: BreakingNewsProps) {
  return (
    <div className="text-shadow-background   p-6 h-full">
      <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest  mb-4">
        <Newspaper className="h-5 w-5 text-gray-600" />
        Breaking News
      </h2>
      <div>
        {articles.slice(1, 6).map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            layout="breaking-news-hero"
          />
        ))}
      </div>

      {/* <div className="space-y-4">
        {articles.map((article, index) => (
          <div key={article.id}>
            <div className="flex items-center gap-4 group">
              <div className="text-background">
                <Link
                  href={`/article/${article.slug}`}
                  className="font-bold text-sm leading-tight hover:text-primary transition-colors"
                >
                  {article.title}
                </Link>
                <p className="text-xs text-muted-foreground mt-1">{article.date}</p>
              </div>
            
            </div>
            {index < articles.length - 1 && <Separator className="mt-4 bg-border/50" />}
          </div>
        ))}
      </div> */}
    </div>
  );
}
