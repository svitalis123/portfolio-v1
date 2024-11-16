import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const BlogListingPage = ({ blogs }) => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  // Extract unique categories from blogs
  const getUniqueCategories = () => {
    const allCategories = blogs.reduce((acc, blog) => {
      if (blog.categories && blog.categories.length > 0) {
        return [...acc, ...blog.categories];
      }
      return acc;
    }, []);
    return ["ALL", ...new Set(allCategories)];
  };

  // Filter blogs based on selected category
  const filteredBlogs = blogs.filter(blog => {
    if (selectedCategory === "ALL") return true;
    return blog.categories.includes(selectedCategory);
  });

  // Get initials for avatar
  const getInitials = (author) => {
    return author.toLowerCase() === 'vitalis' ? 'VM' : author
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="max-w-[1330px] mx-auto px-4">
      {/* Categories Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <nav className="overflow-x-auto">
          <div className="flex space-x-4 py-4 min-w-max">
            {getUniqueCategories().map((category) => (
              <Badge
                key={category}
                variant="outline"
                className={`
                  cursor-pointer px-4 py-2 transition-colors duration-200
                  ${selectedCategory === category 
                    ? 'bg-[#2c2824] text-gray-100' 
                    : 'bg-[#3d3731] text-gray-100 hover:bg-[#2c2824]'
                  } border-none
                `}
                onClick={() => setSelectedCategory(category)}
              >
                {category.toUpperCase()}
              </Badge>
            ))}
          </div>
        </nav>
      </motion.div>

      {/* Blog Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredBlogs.map((blog) => {
          const imageUrl = blog.content.match(/src="([^"]+)"/)?.[1] || "";
          
          return (
            <motion.div
              key={blog._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a href={`/blogs/${blog._id}`} className="no-underline hover:no-underline">
                <Card className="bg-[#2c2824] border-none hover:border-gray-700 overflow-hidden h-full">
                  <CardContent className="p-0">
                    {/* Image */}
                    <div className="relative h-48">
                      <img
                        src={imageUrl}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2c2824] via-transparent to-transparent opacity-50" />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 space-y-4">
                      {blog.categories.map((category) => (
                        <Badge
                          key={category}
                          variant="outline"
                          className="bg-[#3d3731] text-gray-100 border-none"
                        >
                          {category.toUpperCase()}
                        </Badge>
                      ))}
                      
                      <h2 className="text-xl font-bold text-gray-100 line-clamp-2">
                        {blog.title}
                      </h2>
                      
                      <p className="text-gray-300 text-sm line-clamp-3">
                        {blog.excerpt}
                      </p>
                      
                      <div className="flex items-center space-x-4 pt-4">
                        <Avatar className="h-8 w-8 bg-[#3d3731] text-[#000]">
                          <AvatarFallback>{getInitials(blog.author)}</AvatarFallback>
                        </Avatar>
                        
                        <div className="flex flex-col">
                          <span className="text-gray-100 text-sm">{blog.author}</span>
                          <span className="text-gray-400 text-xs">
                            {new Date(blog.publishDate).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default BlogListingPage;