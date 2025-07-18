import { ArrowLeft, Calendar, Clock, User, ChevronLeft, ChevronRight, Search } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { OptimizedImage } from "@/components/optimized-image"
import { TranslatedText } from "@/components/translated-text"
import { getBlogPosts } from "../../actions/blog"

async function getCategories(posts: any[]) {
  // Count occurrences of each category
  const categoryCounts = posts.reduce(
    (acc, post) => {
      if (post.category) {
        acc[post.category] = (acc[post.category] || 0) + 1
      }
      return acc
    },
    {} as Record<string, number>,
  )

  return Object.entries(categoryCounts).map(([name, count]) => ({ name, count }))
}

async function getAllTags(posts: any[]) {
  // Flatten and count tags
  const allTags = posts.flatMap((post) => post.tags || [])
  const uniqueTags = [...new Set(allTags)]

  return uniqueTags
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const allPosts = await getBlogPosts()
  const posts = Array.isArray(allPosts) ? allPosts.filter(post => post.status === "published") : []
  const categories = await getCategories(posts)
  const popularTags = await getAllTags(posts)

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-2">
          <Link href={`/${locale}`}>
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <TranslatedText id="common.backToHome" />
            </Button>
          </Link>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <TranslatedText id="blog.title" fallback="Blog & News" />
          </h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl">
            <TranslatedText
              id="blog.subtitle"
              fallback="Insights, updates, and resources on compostable plastics and sustainability"
            />
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Main content - Blog posts */}
          <div className="md:col-span-2">
            {posts.length > 0 ? (
              <div className="grid gap-8">
                {/* Featured post (first post) */}
                {posts.length > 0 && (
                  <Card className="overflow-hidden">
                    <div className="relative aspect-video w-full">
                      <OptimizedImage
                        src={posts[0].featuredImage || "/placeholder.svg?height=500&width=900&query=blog post"}
                        alt={posts[0].title}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 66vw"
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{posts[0].publishedAt ? formatDate(posts[0].publishedAt) : "No date"}</span>
                        <Separator orientation="vertical" className="h-4" />
                        <User className="h-4 w-4" />
                        <span>Admin</span>
                        <Separator orientation="vertical" className="h-4" />
                        <Clock className="h-4 w-4" />
                        <span>{Math.ceil((posts[0].content?.length || 0) / 1500)} min read</span>
                      </div>
                      <CardTitle className="text-2xl">{posts[0].title}</CardTitle>
                      <CardDescription>{posts[0].excerpt}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <div className="flex flex-wrap gap-2">
                        {posts[0].tags &&
                          posts[0].tags.slice(0, 3).map((tag: string, index: number) => (
                            <Link
                              key={index}
                              href={`/${locale}/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                              className="no-underline"
                            >
                              <Badge
                                variant="outline"
                                className="bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/30 cursor-pointer transition-colors"
                              >
                                #{tag}
                              </Badge>
                            </Link>
                          ))}
                      </div>
                    </CardFooter>
                  </Card>
                )}

                {/* Regular posts */}
                <div className="grid gap-6 sm:grid-cols-2">
                  {posts.slice(1).map((post) => (
                    <Card key={post.id} className="overflow-hidden">
                      <div className="relative aspect-video w-full">
                        <OptimizedImage
                          src={post.featuredImage || "/placeholder.svg?height=300&width=500&query=blog post"}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                          <span>{post.publishedAt ? formatDate(post.publishedAt) : "No date"}</span>
                          <Separator orientation="vertical" className="h-3" />
                          <span>{Math.ceil((post.content?.length || 0) / 1500)} min read</span>
                        </div>
                        <CardTitle className="text-lg">{post.title}</CardTitle>
                        <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Link href={`/${locale}/blog/${post.slug}`}>
                          <Button variant="outline" size="sm">
                            <TranslatedText id="blog.readMore" fallback="Read More" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No blog posts found. Please add posts through the admin dashboard.</p>
              </div>
            )}

            {/* Pagination */}
            {posts.length > 0 && (
              <div className="flex justify-center mt-8">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    <TranslatedText id="blog.previous" fallback="Previous" />
                  </Button>
                  <Button variant="outline" size="sm" className="w-10">
                    1
                  </Button>
                  <Button variant="outline" size="sm" disabled>
                    <TranslatedText id="blog.next" fallback="Next" />
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <TranslatedText id="blog.search" fallback="Search" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Input placeholder={`${locale === "en" ? "Search articles..." : "खोज लेख..."}`} />
                  <Button>
                    <Search className="h-4 w-4" />
                    <span className="sr-only">
                      <TranslatedText id="blog.search" fallback="Search" />
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            {categories.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>
                    <TranslatedText id="blog.categories" fallback="Categories" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link
                          href={`/${locale}/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className="flex justify-between items-center py-2 hover:text-green-600 transition-colors"
                        >
                          <span>{category.name}</span>
                          <Badge variant="outline">{category.count}</Badge>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Popular Tags */}
            {popularTags.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>
                    <TranslatedText id="blog.popularTags" fallback="Popular Tags" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <Link key={index} href={`/${locale}/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}>
                        <Badge variant="outline" className="bg-green-50 hover:bg-green-100 transition-colors">
                          {tag}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Newsletter Signup */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <TranslatedText id="blog.subscribeNewsletter" fallback="Subscribe to Our Newsletter" />
                </CardTitle>
                <CardDescription>
                  <TranslatedText
                    id="blog.newsletterDescription"
                    fallback="Stay updated with the latest news and insights on sustainable plastics"
                  />
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Input placeholder={`${locale === "en" ? "Your email address" : "आपका ईमेल पता"}`} type="email" />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <TranslatedText id="blog.subscribe" fallback="Subscribe" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}