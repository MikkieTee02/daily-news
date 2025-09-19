

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '../lib/utils';
import type { Article } from '../types';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Clock, PlayCircle, TrendingUp } from 'lucide-react';
import { Separator } from './ui/separator';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import VideoPlayer from './VideoPlayer';

interface ArticleCardProps {
  article: Article;
  layout?: 'hero' | 'sub-hero' | 'horizontal' | 'default' | 'large' | 'popular' | 'editor' | 'reading' | 'category-hero' | 'category-more' | 'hot-video' | 'category-top-story' | 'category-sub-story'| 'breaking-news-hero';
  className?: string;
  priority?: boolean;
  isVideo?: boolean;
}

export function ArticleCard({ article, layout = 'default', className, priority = false, isVideo = false }: ArticleCardProps) {
  const isHorizontal = layout === 'horizontal';
  const isHero = layout === 'hero';
  const isSubHero = layout === 'sub-hero';
  const isLarge = layout === 'large';
  const isPopular = layout === 'popular';
  const isEditor = layout === 'editor';
  const isReading = layout === 'reading';
  const isCategoryHero = layout === 'category-hero';
  const isCategoryMore = layout === 'category-more';
  const isHotVideo = layout === 'hot-video';
  const isCategoryTopStory = layout === 'category-top-story';
  const isCategorySubStory = layout === 'category-sub-story';
  const isBreakingNewsHero = layout === 'breaking-news-hero';


  const titleClass = cn('font-headline font-bold leading-tight group-hover:text-primary transition-colors', {
    'text-3xl md:text-5xl lg:text-6xl': isHero,
    'text-4xl md:text-5xl lg:text-6xl': isCategoryHero,
    'text-2xl md:text-3xl': isLarge,
    'text-lg font-bold': isPopular || isReading,
    'text-xl': isSubHero || layout === 'default' || isEditor || isCategoryTopStory,
    'text-2xl': isHorizontal,
    'text-base font-bold': isCategoryMore || isCategorySubStory,
    'text-md leading-tight': isHotVideo,
  });

  const cardContentClass = cn('p-4 flex flex-col', {
    'p-0': isHorizontal,
    'p-6': layout === 'default',
  });
  
  const badgeVariant = 'default';

  const VideoWrapper = ({ children }: { children: React.ReactNode }) => {
    if (isVideo) {
      return (
        <Dialog>
          <DialogTrigger asChild>
            <div className="cursor-pointer">{children}</div>
          </DialogTrigger>
          <DialogContent className="max-w-3xl p-0 border-0">
            <VideoPlayer src="/placeholder.mp4" title={article.title} />
          </DialogContent>
        </Dialog>
      )
    }
    return <Link href={`/article/${article.slug}`} >{children}</Link>;
  };

  const categories = Array.isArray(article.category) ? article.category : [article.category];

  // Handle both string categories (static data) and Category objects (API)
  const getCategorySlug = (cat: any) => typeof cat === 'string' ? cat.toLowerCase() : cat.slug;
  const getCategoryName = (cat: any) => typeof cat === 'string' ? cat : cat.name;
  
  if (isHero) {
    return (
      <div className={cn('group relative text-white', className)}>
        <div className="mb-4">
          <Badge variant="default" className="rounded-sm bg-red-500 hover:bg-red-500/80 font-bold text-xs uppercase">
            Hot Now
          </Badge>
        </div>
        <h1 className={titleClass}>
          <Link href={`/article/${article.slug}`}>{article.title}</Link>
        </h1>
        <p className="mt-4 text-md md:text-lg text-gray-300 max-w-2xl hidden sm:block">{article.excerpt}</p>
        <div className='pt-18'>
              <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest  mb-4">
        <TrendingUp className="h-5 w-5 text-gray-600" />
        Trending Now
      </h2>
        </div>
      </div>
    );
  }

  if (isCategoryHero) {
    return (
      <div className={cn('group relative text-white', className)}>
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <Badge variant="default" className="rounded-sm bg-green-600 hover:bg-green-700 font-bold text-xs uppercase">
            {getCategoryName(categories[0])}
          </Badge>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1.5" />
            <span>{article.date}</span>
          </div>
        </div>
        <h1 className={titleClass}>
          <Link href={`/article/${article.slug}`}>{article.title}</Link>
        </h1>
        <p className="mt-4 text-md md:text-lg text-gray-300 max-w-2xl hidden sm:block">{article.excerpt}</p>
      </div>
    );
  }
  
  if (isCategoryTopStory) {
    return (
      <div className={cn('group', className)}>
        <div className="relative w-full aspect-video mb-4">
          <Link href={`/article/${article.slug}`} className="absolute inset-0">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover"
              data-ai-hint="news article"
            />
            <div className="absolute bottom-2 left-2">
                <Badge variant={badgeVariant} className="rounded-sm font-bold text-xs uppercase">
                    {getCategoryName(categories[0])}
                </Badge>
            </div>
          </Link>
        </div>
        <h3 className={titleClass}>
          <Link href={`/article/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{article.excerpt}</p>
      </div>
    );
  }

  if (isCategorySubStory) {
    return (
      <div className={cn("group flex items-start gap-4 border-t border-border pt-4", className)}>
        <div className="relative w-24 h-20 flex-shrink-0">
          <Link href={`/article/${article.slug}`} className="absolute inset-0">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
              sizes="100px"
              data-ai-hint="news thumbnail"
            />
          </Link>
        </div>
        <div className="flex-1">
          <p className="text-xs text-muted-foreground mb-1">{article.date}</p>
          <h3 className={titleClass}>
            <Link href={`/article/${article.slug}`}>{article.title}</Link>
          </h3>
        </div>
      </div>
    );
  }


   if (isBreakingNewsHero) {
    return (
      <div className={cn("group flex items-start gap-4  pt-4", className)}>
        <div className="relative w-24 h-20 flex-shrink-0">
          <Link href={`/article/${article.slug}`} className="absolute inset-0">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
              sizes="100px"
              data-ai-hint="news thumbnail"
            />
          </Link>
        </div>
        <div className="flex-1">
       
          <h3 className={titleClass}>
            <Link href={`/article/${article.slug}`}>{article.title}</Link>
          </h3>
             <p className="text-xs text-muted-foreground mt-1">{article.date}</p>
        </div>
      </div>
    );
  }


  if (isCategoryMore) {
    return (
        <div className={cn("group border-b border-border/20 pb-4", className)}>
            <h3 className={titleClass}>
                <Link href={`/article/${article.slug}`}>{article.title}</Link>
            </h3>
            <p className="text-xs text-muted-foreground mt-2">{article.date}</p>
        </div>
    );
  }

  if (isHotVideo) {
    return (
      <div className={cn("group text-white", className)}>
        <div className="relative w-full aspect-video mb-4">
          <VideoWrapper>
            <div className='relative w-full h-full'>
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover"
                data-ai-hint="news video"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <PlayCircle className="h-10 w-10 text-white" />
              </div>
            </div>
          </VideoWrapper>
        </div>
        <h3 className={titleClass}>
          <VideoWrapper>
            <span>{article.title}</span>
          </VideoWrapper>
        </h3>
        <p className="mt-2 text-xs text-muted-foreground">
            {article.date}
        </p>
      </div>
    )
  }

  if(isLarge) {
    return (
        <Card className={cn("group relative flex flex-col h-[90%] shadow-lg rounded-none border-0 aspect-w-4 lg:w-3xl aspect-h-3", className)}>
             <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority={priority}
              data-ai-hint="news article"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:scale-105 transition-transform duration-300" />
            <CardContent className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white flex flex-col justify-end h-full">
                <div>
                <div className="mb-3">
                    <Badge variant={badgeVariant} className="rounded-sm font-bold text-xs uppercase bg-red-600">
                    Breaking
                    </Badge>
                </div>
                 <div className="mb-3">
                    <Link href={`/category/${getCategorySlug(categories[0])}`}>
                    <Badge variant={badgeVariant} className="rounded-sm font-bold text-xs uppercase !bg-transparent !text-white border border-white">
                        {getCategoryName(categories[0])}
                    </Badge>
                    </Link>
                </div>
                <h3 className={titleClass}>
                    <Link href={`/article/${article.slug}`}>{article.title}</Link>
                </h3>
                <div className="flex items-center mt-4 text-xs">
                    <Clock className="h-3 w-3 mr-1.5" />
                    <span>{article.date}</span>
                </div>
                </div>
            </CardContent>
        </Card>
    )
  }

  if (isPopular) {
    return (
      <div className={cn("group flex items-start gap-4", className)}>
        <div className="relative w-1/3 aspect-square flex-shrink-0">
          <Link href={`/article/${article.slug}`} className="absolute inset-0">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover rounded-none"
              sizes="150px"
              data-ai-hint="news thumbnail"
            />
          </Link>
        </div>
        <div className="flex-1">
          <div className="mb-2 flex flex-wrap gap-2">
            {categories.map(cat => (
              <Link key={getCategoryName(cat)} href={`/category/${getCategorySlug(cat)}`}>
                <Badge variant='outline' className="rounded-sm font-bold text-xs uppercase !border-0 !text-primary !p-0">
                  {getCategoryName(cat)}
                </Badge>
              </Link>
            ))}
          </div>
          <h3 className={titleClass}>
            <Link href={`/article/${article.slug}`}>{article.title}</Link>
          </h3>
           <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
        </div>
      </div>
    );
  }

  if (isReading) {
    return (
        <div className={cn("group flex items-start gap-4 border-b border-border pb-6", className)}>
            <div className="relative  aspect-video flex-shrink-0">
              
              <VideoWrapper>
                <div className='relative w-full h-full'>
                  
                  {isVideo && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <PlayCircle className="h-8 w-8 text-white" />
                    </div>
                  )}

                </div>
              </VideoWrapper>
            </div>
            <div className="flex-1 items-start justify-start">
                <h3 className={titleClass}>
                  <VideoWrapper>
                    <span>{article.title}</span>
                  </VideoWrapper>
                </h3>
                <p className="mt-2 text-xs text-muted-foreground">
                    {article.date} / {categories.map(cat => getCategoryName(cat)).join(', ')}
                </p>
            </div>
        </div>
    );
}

  if (isEditor) {
    return (
      <div className={cn('group', className)}>
        <div className="relative w-full aspect-video mb-4">
          <Link href={`/article/${article.slug}`} className="absolute inset-0">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover"
              data-ai-hint="news article"
            />
            <div className="absolute bottom-2 left-2">
                <Badge variant={badgeVariant} className="rounded-sm font-bold text-xs uppercase">
                    {getCategoryName(categories[0])}
                </Badge>
            </div>
          </Link>
        </div>
        <h3 className={titleClass}>
          <Link href={`/article/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{article.excerpt}</p>
      </div>
    );
  }

  if (layout === 'default') {
    return (
      <Card className={cn('group relative flex flex-col h-full shadow-lg rounded-none border-0', className)}>
        <div className="relative w-full aspect-video">
          <Link href={`/article/${article.slug}`} className="absolute inset-0">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority={priority}
              data-ai-hint="news article"
            />
          </Link>
        </div>
        <CardContent className="p-6">
          <div className="mb-3">
             <Link href={`/category/${getCategorySlug(categories[0])}`}>
               <Badge variant={badgeVariant} className="rounded-sm font-bold text-xs uppercase">
                 {getCategoryName(categories[0])}
               </Badge>
             </Link>
           </div>
          <h3 className={titleClass}>
            <Link href={`/article/${article.slug}`}>{article.title}</Link>
          </h3>
          <div className="flex items-center mt-4 text-xs text-muted-foreground">
            <Clock className="h-3 w-3 mr-1.5" />
            <span>{article.date}</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className={cn(
        'group relative flex flex-col h-full transition-transform duration-300 ease-in-out hover:-translate-y-1',
        isHorizontal ? 'flex-row border-none shadow-none bg-transparent' : 'shadow-none rounded-none border-0',
        className
      )}
    >
      <div
        className={cn('relative', {
          'w-full aspect-video md:aspect-[4/3]': !isHorizontal,
          'w-1/3 aspect-video': isHorizontal,
          'aspect-[4/3]': isSubHero,
        })}
      >
        <Link href={`/article/${article.slug}`} className="absolute inset-0">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={priority}
            data-ai-hint="news article"
          />
          {isSubHero && <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />}
        </Link>
      </div>

      <div className={cn('flex-1', isHorizontal ? 'pl-6' : '')}>
        <CardContent
          className={cn('p-4 flex flex-col', {
            'absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-6': isSubHero,
            'p-0': isHorizontal,
          })}
        >
          <div className="mb-2">
             <Link href={`/category/${getCategorySlug(categories[0])}`}>
               <Badge variant={badgeVariant} className="rounded-sm text-white bg-primary hover:bg-primary/80 font-bold text-xs uppercase">
                 {getCategoryName(categories[0])}
               </Badge>
             </Link>
           </div>
          <h3 className={titleClass}>
            <Link href={`/article/${article.slug}`}>{article.title}</Link>
          </h3>
          {isHorizontal && <p className={cn('mt-2 text-sm', 'text-muted-foreground')}>{article.excerpt}</p>}
          <div className="flex items-center mt-4 text-xs">
            <span className={cn(isSubHero ? 'text-gray-300' : 'text-muted-foreground')}>
              <Clock className="h-3 w-3 inline-block mr-1.5" />
              {article.date}
            </span>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
