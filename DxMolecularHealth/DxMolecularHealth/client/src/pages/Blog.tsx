import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { BlogPost } from "@shared/schema";
import { format } from "date-fns";

function BlogPostSkeleton() {
  return (
    <Card className="mb-6">
      <CardHeader>
        <Skeleton className="h-8 w-3/4" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6" />
      </CardContent>
    </Card>
  );
}

export default function Blog() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Últimas Novedades Médicas
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Manténgase informado sobre los avances en diagnóstico molecular y medicina de precisión
          </p>
        </div>

        <div className="space-y-8">
          {isLoading ? (
            <>
              <BlogPostSkeleton />
              <BlogPostSkeleton />
              <BlogPostSkeleton />
            </>
          ) : posts?.map((post) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl">{post.title}</CardTitle>
                  <span className="text-sm text-gray-500">
                    {format(new Date(post.publishedAt), "d 'de' MMMM, yyyy")}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{post.summary}</p>
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}