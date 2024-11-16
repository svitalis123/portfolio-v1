import { motion } from "framer-motion";
import { Badge } from "../../components/ui/badge";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { Card, CardContent } from "../../components/ui/card";

const FeaturedBlogPost = ({ blog }) => {
  const getInitials = (author) => {
    return author.toLowerCase() === 'vitalis' ? 'VM' : author
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  // Extract first image URL from content
  const imageUrl = blog.content.match(/src="([^"]+)"/)?.[1] || "";
  
  return (
    <div className="mb-12 max-w-[1330px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a href={`/blogs/${blog._id}`} className="no-underline hover:no-underline">
        <Card className="bg-[#2c2824] border-none hover:border-gray-700 overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row w-full gap-6">
              {/* Left Content */}
              <div className="p-6 md:p-8 flex-1 lg:w-3/6 flex flex-col justify-center">
                <div className="space-y-6">
                  <Badge variant="outline" className="bg-[#3d3731] text-gray-100 border-none mb-4">
                    FEATURED
                  </Badge>
                  
                  <h1 className="text-2xl md:text-4xl font-bold text-gray-100 leading-tight">
                    {blog.title}
                  </h1>
                  
                  <p className="text-gray-300 text-sm md:text-base">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-10 w-10 bg-[#3d3731] text-[#000]">
                      <AvatarFallback>{getInitials(blog.author)}</AvatarFallback>
                    </Avatar>
                    
                    <div className="flex flex-col">
                      <span className="text-gray-100">{blog.author}</span>
                      <span className="text-[#fff] text-sm">
                        {new Date(blog.publishDate).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Image */}
              <div className="h-full lg:w-3/6 relative">
                <img
                  src={imageUrl}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c2824] via-transparent to-transparent opacity-50" />
              </div>
            </div>
          </CardContent>
        </Card>
        </a>
      </motion.div>
    </div>
  );
};

export default FeaturedBlogPost;