'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { Clock } from 'lucide-react';

// Simplified Article type for the dashboard
export interface DashboardArticle {
  _id: string;
  slug: string; // Assuming a slug can be derived from the title
  title: string;
  description: string;
  imageUrl: string;
  category?: string;
  date?: string; // Optional date
}

interface DashboardArticleCardProps {
  article: DashboardArticle;
  onEdit: (article: DashboardArticle) => void;
  onDelete: (id: string) => void;
}

export function DashboardArticleCard({ article, onEdit, onDelete }: DashboardArticleCardProps) {
  return (
    <Card className={'group relative flex flex-col h-full shadow-lg rounded-none border-0'}>
      <div className="relative w-full aspect-video">
        <Link href={`/article/${article.slug}`} className="absolute inset-0">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </div>
      <CardHeader>
        {article.category && (
          <div className="mb-3">
             <Link href={`/category/${article.category.toLowerCase()}`}>
               <Badge className="rounded-sm font-bold text-xs uppercase">
                 {article.category}
               </Badge>
             </Link>
           </div>
        )}
        <CardTitle>
          <Link href={`/article/${article.slug}`}>{article.title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{article.description}</p>
        {article.date && (
            <div className="flex items-center mt-4 text-xs text-muted-foreground">
                <Clock className="h-3 w-3 mr-1.5" />
                <span>{article.date}</span>
            </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" onClick={() => onEdit(article)}>
          Edit
        </Button>
        <Button
          variant="destructive"
          onClick={() => onDelete(article._id)}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
