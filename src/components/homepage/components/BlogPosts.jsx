import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MongoClient, ObjectId } from "mongodb";
import { ChevronRight } from "lucide-react";

const client = new MongoClient(import.meta.env.MONGODB_URI);
const db = client.db("blogDatabase");
const collection = db.collection("posts");

const blogPosts = await collection.find({}).sort({"createdAt": -1}).toArray();

const getInitials = (name) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

const BlogPost = ({ blog }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <a href={`/blogs/${blog._id}`} className="no-underline hover:no-underline">
      <Card className="bg-[#2c2824] border-gray-700 cursor-pointer h-full flex flex-col">
        <CardHeader className="p-0">
          <img
            src={blog.content.match(/src="([^"]+)"/)[1]}
            alt="" 
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <h2 className="text-xl font-semibold mb-2 text-gray-100">
            {blog.title}
          </h2>
          <p className="text-gray-300 text-sm">{blog.excerpt}</p>
        </CardContent>
        <CardFooter className="p-4">
          <div className="flex items-center w-full">
            <Avatar className="h-8 w-8 mr-2 bg-[#3d3731] text-[#000]">
              <AvatarFallback>{getInitials(blog.author)}</AvatarFallback>
            </Avatar>
            <TypewriterText text={blog.author} />
          </div>
        </CardFooter>
      </Card>
      </a>
    </motion.div>
  );
};

const TypewriterText = ({ text }) => {
  return (
    <motion.span
      className="text-sm text-gray-300 inline-block"
      initial={{ width: 0 }}
      whileInView={{ width: "auto" }}
      viewport={{ once: true }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const BlogPosts = () => {
  return (
    <div id="blog" className="bg-[#201d1b] max-w-[1330px] mx-auto text-gray-100 p-4 sm:p-6 md:p-8">
      <h2 className="text-3xl sm:text-4xl font-bold mb-2">Blogs</h2>
      <p className="text-gray-300 mb-6 sm:mb-8">
        Discover insightful resources and expert advice from me.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.slice(0, 3).map((blog) => (
          <BlogPost blog={blog} />
        ))}
      </div>
      <div className="flex justify-center my-4">
        <motion.a 
          href="/blogs"
          className="neumorphic-button max-w-[200px]  flex items-center px-6 py-3 rounded-full text-[#ecc7bc] bg-[#2a2624] transition-all duration-300 ease-in-out"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All Blogs
          <ChevronRight className="ml-2" />
        </motion.a>
      </div>
    
    </div>
  );
};

export default BlogPosts;
