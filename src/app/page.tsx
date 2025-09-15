import Image from "next/image";
import Link from "next/link";
import { getArticles, getArticlesByCategory } from "../lib/data";
import { ArticleCard } from "../components/ArticleCard";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Video } from "lucide-react";
import { Separator } from "../components/ui/separator";
import BreakingNews from "../components/BreakingNews";
import DownloadApp from "../components/DownloadApp";
import { Input } from "../components/ui/input";

export default async function Home() {
  const articles = await getArticles();

  const heroArticle = articles[0];
  const breakingNewsArticles = articles.slice(1, 5);
  const breakingNewsMain = articles[4];
  const popularNowArticles = articles.slice(5, 9);
  const editorChoiceArticles = articles.slice(0, 6);
  const worthReadingArticles = articles.slice(6, 11);
  const worldNewsArticles = await getArticlesByCategory("world");
  const hotVideosArticles = articles.slice(12, 15);
  const scienceArticles = await getArticlesByCategory("science");
  const cultureArticles = await getArticlesByCategory("culture");
  const politicsArticles = await getArticlesByCategory("politics");

  const worldNewsHero =
    worldNewsArticles.length > 0 ? worldNewsArticles[0] : null;
  const moreWorldNews = worldNewsArticles.slice(1, 5);

  return (
    <div className="container mx-auto  pb-4">
      {/* Hero Section */}
      <section className="mb-8 md:mb-12">
        <div className="relative text-white rounded-none">
          <div className="relative h-[600px]">
            <Image
              src={heroArticle.imageUrl}
              alt={heroArticle.title}
              fill
              className="object-cover"
              priority
              data-ai-hint="news background"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative flex flex-col justify-end h-full p-4 sm:p-8 md:p-12">
              <div className="w-full lg:w-2/3">
                <ArticleCard article={heroArticle} layout="hero" />
              </div>
            </div>
          </div>
          <div className="lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/3 lg:p-8">
            <div className="h-full mt-8 lg:mt-0">
              <BreakingNews articles={breakingNewsArticles} />
            </div>
          </div>
        </div>
      </section>

      <main className="px-4 sm:px-10  lg:px-18">
        {/* Breaking News & Popular Now Section */}
        <section className="mb-8 md:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-bold uppercase tracking-wider mb-4 font-headline">
                Breaking News
              </h2>
              <Separator className="mb-6 bg-primary h-0.5 w-20" />
              <ArticleCard article={breakingNewsMain} layout="large" />
            </div>
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-bold uppercase tracking-wider mb-4 font-headline">
                Popular Now
              </h2>
              <Separator className="mb-6 bg-primary h-0.5 w-20" />
              <div className="flex flex-col gap-y-6">
                {popularNowArticles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    layout="popular"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <DownloadApp />

        {/* Editor's Choice & Worth Reading */}
        <section className="mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold uppercase tracking-wider mb-4 font-headline">
                Editor's Choice
              </h2>
              <Separator className="mb-6 bg-primary h-0.5 w-20" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {editorChoiceArticles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    layout="editor"
                  />
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold uppercase tracking-wider mb-4 font-headline">
                Worth Reading
              </h2>
              <Separator className="mb-6 bg-primary h-0.5 w-20" />
              <div className="space-y-6">
                {worthReadingArticles.map((article, index) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    layout="reading"
                    isVideo={index === 0}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* World News & Subscription */}
        <section className="mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold uppercase tracking-wider mb-4 font-headline">
                World News
              </h2>
              <Separator className="mb-6 bg-primary h-0.5 w-20" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {worldNewsArticles.slice(0, 3).map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    layout="editor"
                  />
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="bg-blue-600 text-white p-6 rounded-md shadow-lg">
                <CardContent className="p-0">
                  <h3 className="font-headline text-2xl font-bold mb-2">
                    Subscribe Now
                  </h3>
                  <p className="text-blue-100 mb-6">
                    Enter your email address below and subscribe to our
                    newsletter
                  </p>
                  <form className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Your name"
                      className="bg-blue-700 border-blue-500 placeholder:text-blue-200 text-white"
                    />
                    <Input
                      type="email"
                      placeholder="Your email *"
                      className="bg-blue-700 border-blue-500 placeholder:text-blue-200 text-white"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 rounded-md"
                    >
                      Subscribe
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Category Section */}
        <section className="mt-12">
          <div className="relative text-white py-12 px-4 sm:px-8  bg-foreground">
            <Image
              src="https://res.cloudinary.com/dmlavu7is/image/upload/v1756890439/004_home-video-cta-background_oohgys.webp"
              alt="World news background"
              fill
              className="object-cover opacity-20"
              data-ai-hint="world background"
            />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 container mx-auto">
              <div className="lg:col-span-2">
                {worldNewsHero && (
                  <ArticleCard article={worldNewsHero} layout="category-hero" />
                )}

                <div className="mt-12">
                  <h3 className="font-headline text-lg font-bold uppercase tracking-wider mb-4">
                    More from World Category
                  </h3>
                  <Separator className="mb-6 bg-primary h-0.5 w-20" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {moreWorldNews.map((article) => (
                      <ArticleCard
                        key={article.id}
                        article={article}
                        layout="category-more"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <h3 className="font-headline text-lg font-bold uppercase tracking-wider mb-4 flex items-center">
                  <Video className="h-5 w-5 mr-3 text-primary" />
                  Hot Videos
                </h3>
                <Separator className="mb-6 bg-primary h-0.5 w-20" />
                <div className="space-y-6">
                  {hotVideosArticles.map((article, index) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      layout="hot-video"
                      isVideo={true}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Grid Section */}
        <section className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Science Column */}
            <div>
              <h2 className="font-headline text-xl font-bold uppercase tracking-wider mb-4">
                Science
              </h2>
              <Separator className="mb-6 bg-primary h-0.5 w-12" />
              <div className="space-y-6">
                {scienceArticles.length > 0 && (
                  <ArticleCard
                    article={scienceArticles[0]}
                    layout="category-top-story"
                  />
                )}
                {scienceArticles.slice(1, 3).map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    layout="category-sub-story"
                  />
                ))}
              </div>
            </div>
            {/* Culture Column */}
            <div>
              <h2 className="font-headline text-xl font-bold uppercase tracking-wider mb-4">
                Culture
              </h2>
              <Separator className="mb-6 bg-primary h-0.5 w-12" />
              <div className="space-y-6">
                {cultureArticles.length > 0 && (
                  <ArticleCard
                    article={cultureArticles[0]}
                    layout="category-top-story"
                  />
                )}
                {cultureArticles.slice(1, 3).map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    layout="category-sub-story"
                  />
                ))}
              </div>
            </div>
            {/* Politics Column */}
            <div>
              <h2 className="font-headline text-xl font-bold uppercase tracking-wider mb-4">
                Politics
              </h2>
              <Separator className="mb-6 bg-primary h-0.5 w-12" />
              <div className="space-y-6">
                {politicsArticles.length > 0 && (
                  <ArticleCard
                    article={politicsArticles[0]}
                    layout="category-top-story"
                  />
                )}
                {politicsArticles.slice(1, 3).map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    layout="category-sub-story"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
